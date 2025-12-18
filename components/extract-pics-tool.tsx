"use client"

import * as React from "react"
import { IconLink, IconScan, IconPhoto, IconArrowsUpDown, IconPhotoPlus, IconChevronDown, IconDownload, IconLoader2, IconAlertCircle, IconFilter, IconSearch, IconX, IconFilterOff } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useRequestQueue } from "@/hooks/use-request-queue"
import { parseUrls } from "@/lib/parse-urls"
import { ImageData, ScrapeResponse, BatchUrlState } from "@/lib/types/scraper"
import { filterImages } from "@/lib/filter-utils"
import { deduplicateImages } from "@/lib/deduplicate-images"
import { getFileExtension } from "@/lib/parse-images"
import { ImageGrid } from "./image-grid"
import { BookmarkBanner } from "./bookmark-banner"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import JSZip from "jszip"
import { saveAs } from "file-saver"

interface StreamEvent {
    status: string
    progress: number
    message: string
    result?: {
        status: string
        url: string
        total: number
        images: ImageData[]
    }
}

export function ExtractPicsTool() {
    const [mode, setMode] = React.useState<"single" | "batch">("single")
    const [urlInput, setUrlInput] = React.useState("")
    const [images, setImages] = React.useState<ImageData[]>([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string | undefined>()
    const [status, setStatus] = React.useState("Ready to scan")
    const [batchProgress, setBatchProgress] = React.useState<BatchUrlState[]>([])

    // Streaming progress state
    const [streamProgress, setStreamProgress] = React.useState(0)
    const [streamStatus, setStreamStatus] = React.useState('idle')
    const [streamMessage, setStreamMessage] = React.useState('')
    const eventSourceRef = React.useRef<EventSource | null>(null)

    // Filters
    const [filters, setFilters] = React.useState({
        selectedFormats: new Set<string>(),
        minWidth: 0,
        selectedSourceUrls: new Set<string>(),
        searchQuery: ''
    })

    // Selection
    const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set())

    // Bookmark banner
    const [showBookmarkBanner, setShowBookmarkBanner] = React.useState(false)

    const { queueRequest, activeCount, queueLength, isQueued } = useRequestQueue()

    const filteredImages = React.useMemo(() => {
        return filterImages(images, filters.selectedFormats, filters.minWidth, filters.selectedSourceUrls, filters.searchQuery)
    }, [images, filters])

    const availableFormats = React.useMemo(() => {
        const formats = new Map<string, number>()
        images.forEach(img => {
            const ext = getFileExtension(img.name).toUpperCase()
            if (ext) formats.set(ext, (formats.get(ext) || 0) + 1)
        })
        return Array.from(formats.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    }, [images])

    const availableSourceUrls = React.useMemo(() => {
        const urls = new Map<string, number>()
        images.forEach(img => {
            if (img.sourceUrl) {
                urls.set(img.sourceUrl, (urls.get(img.sourceUrl) || 0) + 1)
            }
        })
        return Array.from(urls.entries())
    }, [images])

    const activeFilterCount = React.useMemo(() => {
        let count = 0
        if (filters.selectedFormats.size > 0) count++
        if (filters.minWidth > 0) count++
        if (filters.selectedSourceUrls.size > 0) count++
        if (filters.searchQuery.trim()) count++
        return count
    }, [filters])

    const handleFormatToggle = (format: string) => {
        const newFormats = new Set(filters.selectedFormats)
        if (newFormats.has(format)) {
            newFormats.delete(format)
        } else {
            newFormats.add(format)
        }
        setFilters(prev => ({ ...prev, selectedFormats: newFormats }))
    }

    const handleSizeSelect = (width: string) => {
        setFilters(prev => ({ ...prev, minWidth: parseInt(width, 10) }))
    }

    const handleSourceUrlToggle = (url: string) => {
        const newUrls = new Set(filters.selectedSourceUrls)
        if (newUrls.has(url)) {
            newUrls.delete(url)
        } else {
            newUrls.add(url)
        }
        setFilters(prev => ({ ...prev, selectedSourceUrls: newUrls }))
    }

    const handleClearAllFilters = () => {
        setFilters({
            selectedFormats: new Set(),
            minWidth: 0,
            selectedSourceUrls: new Set(),
            searchQuery: ''
        })
    }

    const handleToggleSelect = (id: number) => {
        const newSelected = new Set(selectedIds)
        if (newSelected.has(id)) {
            newSelected.delete(id)
        } else {
            newSelected.add(id)
        }
        setSelectedIds(newSelected)
    }

    const handleToggleAll = () => {
        if (selectedIds.size === filteredImages.length) {
            setSelectedIds(new Set())
        } else {
            setSelectedIds(new Set(filteredImages.map(img => img.id)))
        }
    }

    const handleScan = async (deep: boolean = false) => {
        if (!urlInput.trim()) {
            setError("Please enter a URL")
            return
        }

        const isBatch = mode === "batch"
        const urls = isBatch ? parseUrls(urlInput) : [urlInput.trim()]

        if (urls.length === 0) {
            setError("No valid URLs found")
            return
        }

        setLoading(true)
        setError(undefined)
        setImages([])
        setSelectedIds(new Set())

        if (isBatch) {
            await handleBatchScan(urls, deep)
        } else {
            await handleSingleScan(urls[0], deep)
        }
    }

    const handleSingleScan = async (url: string, deep: boolean) => {
        // Reset streaming state
        setStreamProgress(0)
        setStreamStatus('idle')
        setStreamMessage('Initializing...')
        setStatus('Connecting to server...')

        return new Promise<void>((resolve) => {
            const apiUrl = `/api/scrape/stream?url=${encodeURIComponent(url)}&deep_scrape=${deep}`
            const eventSource = new EventSource(apiUrl)
            eventSourceRef.current = eventSource

            eventSource.onmessage = (event) => {
                try {
                    const data: StreamEvent = JSON.parse(event.data)

                    setStreamProgress(data.progress)
                    setStreamStatus(data.status)
                    setStreamMessage(data.message)
                    setStatus(data.message)

                    if (data.status === 'complete' && data.result) {
                        setImages(data.result.images || [])
                        setSelectedIds(new Set((data.result.images || []).map(img => img.id)))
                        setStatus(`Found ${data.result.total || 0} images`)
                        eventSource.close()
                        setLoading(false)
                        // Show bookmark banner after successful scan
                        if (data.result.total && data.result.total > 0) {
                            setShowBookmarkBanner(true)
                        }
                        resolve()
                    } else if (data.status === 'error') {
                        setError(data.message || 'Scanning failed')
                        setStatus('Error encountered')
                        eventSource.close()
                        setLoading(false)
                        resolve()
                    }
                } catch (err) {
                    console.error('Failed to parse SSE event:', err)
                }
            }

            eventSource.onerror = () => {
                eventSource.close()
                setError('Connection lost. Please try again.')
                setStreamStatus('error')
                setStatus('Connection error')
                setLoading(false)
                resolve()
            }
        })
    }

    const handleBatchScan = async (urls: string[], deep: boolean) => {
        setStatus(`Processing ${urls.length} URLs (${deep ? 'Deep' : 'Quick'})...`)

        const initialProgress: BatchUrlState[] = urls.map(url => ({
            url,
            status: 'pending',
            imageCount: 0
        }))
        setBatchProgress(initialProgress)

        const allImages: ImageData[] = []
        let currentId = 1

        const promises = urls.map(async (url, index) => {
            try {
                setBatchProgress(prev => prev.map((item, i) =>
                    i === index ? { ...item, status: 'processing' } : item
                ))

                await queueRequest(async () => {
                    const response = await fetch("/api/scrape", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            url,
                            deepScrape: deep
                        })
                    })

                    const data: ScrapeResponse = await response.json()

                    if (data.success) {
                        const imagesWithSource = data.images.map(img => ({
                            ...img,
                            id: currentId++,
                            sourceUrl: url
                        }))
                        allImages.push(...imagesWithSource)

                        setBatchProgress(prev => prev.map((item, i) =>
                            i === index ? { ...item, status: 'completed', imageCount: data.images.length } : item
                        ))
                    } else {
                        throw new Error(data.error)
                    }
                })
            } catch (err) {
                setBatchProgress(prev => prev.map((item, i) =>
                    i === index ? { ...item, status: 'failed', error: err instanceof Error ? err.message : 'Failed' } : item
                ))
            }
        })

        await Promise.all(promises)

        const { uniqueImages, duplicatesRemoved } = deduplicateImages(allImages)
        setImages(uniqueImages)
        setSelectedIds(new Set(uniqueImages.map(img => img.id)))

        const successCount = batchProgress.filter(p => p.status === 'completed').length
        setStatus(`Found ${uniqueImages.length} images from ${successCount} URLs. ${duplicatesRemoved} duplicates removed.`)
        setLoading(false)
        // Show bookmark banner after successful batch scan
        if (uniqueImages.length > 0) {
            setShowBookmarkBanner(true)
        }
    }

    const handleDownload = async () => {
        if (selectedIds.size === 0) return

        const selectedImages = images.filter(img => selectedIds.has(img.id))

        if (selectedImages.length === 1) {
            // Direct download for single image
            const img = selectedImages[0]
            const response = await fetch(img.src)
            const blob = await response.blob()
            saveAs(blob, img.name)
            return
        }

        // ZIP for multiple images
        const zip = new JSZip()
        setStatus("Preparing ZIP archive...")

        const downloadPromises = selectedImages.map(async (img) => {
            try {
                const response = await fetch(img.src)
                const blob = await response.blob()
                zip.file(img.name, blob)
            } catch (err) {
                console.error(`Failed to download ${img.src}`, err)
            }
        })

        await Promise.all(downloadPromises)
        const content = await zip.generateAsync({ type: "blob" })
        saveAs(content, "extracted-images.zip")
        setStatus(`Downloaded ${selectedImages.length} images`)
    }

    return (
        <div className="w-full flex flex-col items-center">
            {/* Application Interface */}
            <div className="w-full max-w-4xl mx-auto mb-24 px-4 sm:px-6">

                {/* Tabs / Mode Switcher */}
                <div className="flex justify-center mb-8">
                    <div className="p-1 rounded-none bg-card border border-border inline-flex relative overflow-hidden shadow-none">
                        {(["single", "batch"] as const).map((m) => (
                            <button
                                key={m}
                                onClick={() => {
                                    setMode(m)
                                    setImages([])
                                    setError(undefined)
                                    setStatus("Ready to scan")
                                }}
                                className={cn(
                                    "relative px-4 sm:px-6 py-2 rounded-none text-xs sm:text-sm font-bold transition-all z-10 capitalize",
                                    mode === m
                                        ? "text-primary-foreground bg-primary shadow-none"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                {m === "single" ? "Single URL" : "Batch Mode"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Card */}
                <div className="rounded-none p-px bg-gradient-to-b from-border to-transparent mb-8">
                    <div className="relative bg-card rounded-none p-6 border border-border/50 shadow-none">

                        {/* Search Input */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="flex-grow relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <IconLink size={18} stroke={1.5} />
                                </div>
                                <Input
                                    type="text"
                                    value={urlInput}
                                    onChange={(e) => setUrlInput(e.target.value)}
                                    placeholder={
                                        mode === "batch"
                                            ? "https://site1.com, https://site2.com..."
                                            : "https://example.com"
                                    }
                                    className="w-full bg-background/50 text-foreground pl-12 pr-4 py-6 rounded-none border-2 border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all placeholder:text-muted-foreground/40 text-sm font-medium"
                                    onKeyDown={(e) => e.key === 'Enter' && handleScan(false)}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => handleScan(false)}
                                    disabled={loading || !urlInput.trim()}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-3.5 px-6 rounded-none font-bold text-sm shadow-none transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                                >
                                    {loading ? <IconLoader2 size={16} className="animate-spin" /> : <IconScan size={16} />}
                                    Quick Scan
                                </Button>
                                <Button
                                    onClick={() => handleScan(true)}
                                    disabled={loading || !urlInput.trim()}
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary/5 h-auto py-3.5 px-6 rounded-none font-bold text-sm shadow-none transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                                >
                                    {loading ? <IconLoader2 size={16} className="animate-spin" /> : <IconScan size={16} />}
                                    Deep Scan
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Sticky Controls Bar */}
                {images.length > 0 && (
                    <div className="sticky top-16 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 mb-8 backdrop-blur-md bg-background/95 border-b border-border shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* Top Row: Stats and Actions */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                            {/* Left: Image Count & Status */}
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-none">
                                    <div className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" />
                                    {filteredImages.length === images.length
                                        ? `${images.length} Images`
                                        : `${filteredImages.length} of ${images.length} Images`
                                    }
                                </div>

                                {activeFilterCount > 0 && (
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-none">
                                        <IconFilter size={12} />
                                        {activeFilterCount} Active {activeFilterCount === 1 ? 'Filter' : 'Filters'}
                                    </div>
                                )}

                                {isQueued && (
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-none">
                                        <IconLoader2 size={12} className="animate-spin" />
                                        {queueLength} in queue
                                    </div>
                                )}
                            </div>

                            {/* Right: Download Button */}
                            {selectedIds.size > 0 && (
                                <Button
                                    size="sm"
                                    onClick={handleDownload}
                                    className="bg-foreground text-background hover:bg-foreground/90 h-8 px-4 rounded-none font-bold text-xs flex items-center gap-1.5 shadow-none transition-all active:scale-95"
                                >
                                    <IconDownload size={14} />
                                    Download {selectedIds.size}
                                </Button>
                            )}
                        </div>

                        {/* Bottom Row: Search & Filters */}
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                            {/* Search Input */}
                            <div className="relative flex-1 w-full lg:max-w-xs">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                                    <IconSearch size={14} stroke={2} />
                                </div>
                                <Input
                                    type="text"
                                    value={filters.searchQuery}
                                    onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                                    placeholder="Search by name..."
                                    className="h-8 pl-9 pr-8 text-xs bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-none"
                                />
                                {filters.searchQuery && (
                                    <button
                                        onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <IconX size={14} />
                                    </button>
                                )}
                            </div>

                            {/* Filter Controls */}
                            <div className="flex flex-wrap items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleToggleAll}
                                    className="h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 bg-muted/50 border-border/50 hover:bg-background rounded-none"
                                >
                                    {selectedIds.size === filteredImages.length ? "Deselect All" : "Select All"}
                                </Button>

                                <div className="h-4 w-px bg-border/50 hidden sm:block"></div>

                                {/* Format Filter */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className={cn(
                                                "h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 rounded-none transition-all",
                                                filters.selectedFormats.size > 0
                                                    ? "bg-blue-500/10 border-blue-500/30 text-blue-600 hover:bg-blue-500/20"
                                                    : "bg-muted/50 border-border/50 hover:bg-background"
                                            )}
                                        >
                                            <IconPhoto size={14} />
                                            {filters.selectedFormats.size === 0 ? "Format" : `${filters.selectedFormats.size} Format${filters.selectedFormats.size > 1 ? 's' : ''}`}
                                            <IconChevronDown size={12} className="opacity-50" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel className="text-xs">Image Formats</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        {availableFormats.length === 0 ? (
                                            <div className="px-2 py-4 text-center text-[10px] text-muted-foreground uppercase font-bold">No formats found</div>
                                        ) : (
                                            availableFormats.map(([format, count]) => (
                                                <DropdownMenuCheckboxItem
                                                    key={format}
                                                    checked={filters.selectedFormats.has(format)}
                                                    onCheckedChange={() => handleFormatToggle(format)}
                                                    className="text-xs"
                                                >
                                                    <div className="flex items-center justify-between w-full">
                                                        <span>{format}</span>
                                                        <span className="text-[10px] text-muted-foreground ml-2">({count})</span>
                                                    </div>
                                                </DropdownMenuCheckboxItem>
                                            ))
                                        )}
                                        {filters.selectedFormats.size > 0 && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start rounded-none text-[10px] font-bold uppercase h-7"
                                                    onClick={() => setFilters(prev => ({ ...prev, selectedFormats: new Set() }))}
                                                >
                                                    <IconX size={12} className="mr-1" />
                                                    Clear
                                                </Button>
                                            </>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                {/* Size Filter */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className={cn(
                                                "h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 rounded-none transition-all",
                                                filters.minWidth > 0
                                                    ? "bg-blue-500/10 border-blue-500/30 text-blue-600 hover:bg-blue-500/20"
                                                    : "bg-muted/50 border-border/50 hover:bg-background"
                                            )}
                                        >
                                            <IconArrowsUpDown size={14} />
                                            {filters.minWidth === 0 ? "Size" : `> ${filters.minWidth}px`}
                                            <IconChevronDown size={12} className="opacity-50" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48">
                                        <DropdownMenuLabel className="text-xs">Minimum Width</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup value={filters.minWidth.toString()} onValueChange={handleSizeSelect}>
                                            <DropdownMenuRadioItem value="0" className="text-xs">Any Size</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="100" className="text-xs">{">"}  100px</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="300" className="text-xs">{">"}  300px</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="600" className="text-xs">{">"}  600px</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="1000" className="text-xs">{">"}  1000px</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                {/* Source URL Filter (Batch Mode Only) */}
                                {mode === "batch" && availableSourceUrls.length > 1 && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className={cn(
                                                    "h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 rounded-none transition-all",
                                                    filters.selectedSourceUrls.size > 0
                                                        ? "bg-blue-500/10 border-blue-500/30 text-blue-600 hover:bg-blue-500/20"
                                                        : "bg-muted/50 border-border/50 hover:bg-background"
                                                )}
                                            >
                                                <IconLink size={14} />
                                                {filters.selectedSourceUrls.size === 0 ? "Source" : `${filters.selectedSourceUrls.size} URL${filters.selectedSourceUrls.size > 1 ? 's' : ''}`}
                                                <IconChevronDown size={12} className="opacity-50" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto">
                                            <DropdownMenuLabel className="text-xs">Source URLs</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            {availableSourceUrls.map(([url, count]) => {
                                                const displayUrl = url.length > 35 ? url.substring(0, 35) + '...' : url
                                                return (
                                                    <DropdownMenuCheckboxItem
                                                        key={url}
                                                        checked={filters.selectedSourceUrls.has(url)}
                                                        onCheckedChange={() => handleSourceUrlToggle(url)}
                                                        className="text-xs"
                                                    >
                                                        <div className="flex items-center justify-between w-full gap-2">
                                                            <span className="truncate" title={url}>{displayUrl}</span>
                                                            <span className="text-[10px] text-muted-foreground flex-shrink-0">({count})</span>
                                                        </div>
                                                    </DropdownMenuCheckboxItem>
                                                )
                                            })}
                                            {filters.selectedSourceUrls.size > 0 && (
                                                <>
                                                    <DropdownMenuSeparator />
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start rounded-none text-[10px] font-bold uppercase h-7"
                                                        onClick={() => setFilters(prev => ({ ...prev, selectedSourceUrls: new Set() }))}
                                                    >
                                                        <IconX size={12} className="mr-1" />
                                                        Clear
                                                    </Button>
                                                </>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}

                                {/* Clear All Filters */}
                                {activeFilterCount > 0 && (
                                    <>
                                        <div className="h-4 w-px bg-border/50 hidden sm:block"></div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleClearAllFilters}
                                            className="h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 bg-destructive/10 border-destructive/30 text-destructive hover:bg-destructive/20 rounded-none transition-all"
                                        >
                                            <IconFilterOff size={14} />
                                            Clear All
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress Grid for Batch Mode */}
                {mode === "batch" && batchProgress.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {batchProgress.map((p, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-none bg-card border border-border/50 text-[10px] font-bold">
                                <span className="truncate text-muted-foreground max-w-[150px]">{p.url}</span>
                                <div className="flex items-center gap-2">
                                    {p.status === 'processing' && <IconLoader2 size={12} className="animate-spin text-primary" />}
                                    {p.status === 'completed' && <span className="text-emerald-500">{p.imageCount} images</span>}
                                    {p.status === 'failed' && <span className="text-destructive font-bold">Failed</span>}
                                    {p.status === 'pending' && <span className="text-muted-foreground opacity-50">Pending</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Results Section */}
                <div className={cn(
                    "min-h-[400px] transition-all duration-500",
                    images.length > 0 ? "opacity-100" : "opacity-100" // Always show for empty state
                )}>
                    {error && (
                        <div className="rounded-none border-2 border-destructive/20 bg-destructive/5 p-12 text-center shadow-none">
                            <div className="mx-auto w-16 h-16 rounded-none bg-destructive/10 flex items-center justify-center mb-4 text-destructive shadow-none">
                                <IconAlertCircle size={32} />
                            </div>
                            <h3 className="text-foreground font-bold text-lg mb-2">Something went wrong</h3>
                            <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">{error}</p>
                            <Button onClick={() => handleScan(false)} variant="outline" className="font-bold rounded-none shadow-none">Try Again</Button>
                        </div>
                    )}

                    {!error && images.length > 0 && (
                        <>
                            {filteredImages.length === 0 ? (
                                <div className="rounded-none border-2 border-dashed border-border/60 bg-card/30 p-12 text-center shadow-none">
                                    <div className="mx-auto w-16 h-16 rounded-none bg-background border border-border shadow-none flex items-center justify-center mb-4 text-muted-foreground">
                                        <IconFilter size={32} />
                                    </div>
                                    <h3 className="text-foreground font-bold text-lg mb-2">No Images Match Filters</h3>
                                    <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">
                                        Try adjusting your filters to see more results.
                                    </p>
                                    <Button
                                        onClick={handleClearAllFilters}
                                        variant="outline"
                                        className="font-bold rounded-none shadow-none"
                                    >
                                        <IconFilterOff size={16} className="mr-2" />
                                        Clear All Filters
                                    </Button>
                                </div>
                            ) : (
                                <ImageGrid
                                    images={filteredImages}
                                    loading={loading}
                                    selectedIds={selectedIds}
                                    onToggle={handleToggleSelect}
                                    onToggleAll={handleToggleAll}
                                />
                            )}
                        </>
                    )}

                    {!error && !loading && images.length === 0 && (
                        <div className="border-2 border-dashed border-border/60 rounded-none bg-card/30 p-8 backdrop-blur-sm shadow-none">
                            <div className="flex flex-col items-center justify-center text-center py-16">
                                <div className="w-20 h-20 rounded-none bg-background border border-border shadow-none flex items-center justify-center mb-6 text-primary/40">
                                    <IconPhotoPlus size={32} />
                                </div>
                                <h3 className="text-foreground font-bold text-lg mb-2">Start Extracting Images</h3>
                                <p className="text-muted-foreground text-sm max-w-[280px] mx-auto font-medium">
                                    Enter one or more URLs above. We'll find all images, photos, and assets instantly.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Progress Bar (Visible during loading) */}
                    {loading && (
                        <div className="mb-6 animate-in fade-in slide-in-from-top-2 duration-500">
                            <div className="flex items-center justify-between mb-2 px-1">
                                <div className="flex items-center gap-2">
                                    <IconLoader2 size={12} className="animate-spin text-primary" />
                                    <span className="text-[10px] font-bold text-foreground">
                                        {mode === 'batch'
                                            ? `Scanned ${batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length} of ${batchProgress.length} URLs`
                                            : streamMessage || "Analyzing page..."
                                        }
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-primary">
                                    {Math.round(mode === 'batch'
                                        ? (batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length / batchProgress.length) * 100
                                        : streamProgress
                                    )}%
                                </span>
                            </div>
                            <div className="h-0.5 w-full bg-muted overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-500 ease-out relative"
                                    style={{
                                        width: `${mode === 'batch'
                                            ? (batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length / batchProgress.length) * 100
                                            : streamProgress
                                            }%`
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '100% 100%' }} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bookmark Banner */}
            <BookmarkBanner
                show={showBookmarkBanner}
                onClose={() => setShowBookmarkBanner(false)}
            />
        </div>
    )
}
