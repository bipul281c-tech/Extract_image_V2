"use client"

import * as React from "react"
import { IconLink, IconScan, IconPhoto, IconArrowsUpDown, IconPhotoPlus, IconChevronDown, IconDownload, IconLoader2, IconAlertCircle } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useRequestQueue } from "@/hooks/use-request-queue"
import { parseUrls } from "@/lib/parse-urls"
import { ImageData, ScrapeResponse, BatchUrlState } from "@/lib/types/scraper"
import { filterImages } from "@/lib/filter-utils"
import { deduplicateImages } from "@/lib/deduplicate-images"
import { ImageGrid } from "./image-grid"
import { BookmarkBanner } from "./bookmark-banner"
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
        selectedSourceUrls: new Set<string>()
    })

    // Selection
    const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set())

    // Bookmark banner
    const [showBookmarkBanner, setShowBookmarkBanner] = React.useState(false)

    const { queueRequest, activeCount, queueLength, isQueued } = useRequestQueue()

    const filteredImages = React.useMemo(() => {
        return filterImages(images, filters.selectedFormats, filters.minWidth, filters.selectedSourceUrls)
    }, [images, filters])

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

                        {/* Filters & Settings */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border/40 pt-6">

                            {/* Left Controls */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-none">
                                    <div className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" />
                                    {mode} Mode
                                </div>

                                {isQueued && (
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-none">
                                        <IconLoader2 size={12} className="animate-spin" />
                                        {queueLength} in queue
                                    </div>
                                )}

                                <div className="h-4 w-px bg-border/50 hidden sm:block"></div>

                                {/* Filter Controls */}
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 bg-muted/50 border-border/50 hover:bg-background rounded-none">
                                        <IconPhoto size={14} />
                                        All Formats
                                        <IconChevronDown size={12} className="opacity-50" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider gap-1.5 bg-muted/50 border-border/50 hover:bg-background rounded-none">
                                        <IconArrowsUpDown size={14} />
                                        Any Size
                                        <IconChevronDown size={12} className="opacity-50" />
                                    </Button>
                                </div>
                            </div>

                            {/* Right Stats / Action */}
                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-[10px] text-muted-foreground font-bold font-mono tracking-tight uppercase">
                                    {status}
                                </div>

                                {selectedIds.size > 0 && (
                                    <Button
                                        size="sm"
                                        onClick={handleDownload}
                                        className="bg-foreground text-background hover:bg-foreground/90 h-8 px-4 rounded-none font-bold text-xs flex items-center gap-1.5 shadow-none"
                                    >
                                        <IconDownload size={14} />
                                        Download {selectedIds.size}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

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
                        <ImageGrid
                            images={filteredImages}
                            loading={loading}
                            selectedIds={selectedIds}
                            onToggle={handleToggleSelect}
                            onToggleAll={handleToggleAll}
                        />
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
