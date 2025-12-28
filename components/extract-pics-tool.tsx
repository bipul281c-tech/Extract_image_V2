"use client"

import * as React from "react"
import { IconLink, IconScan, IconPhoto, IconArrowsUpDown, IconPhotoPlus, IconChevronDown, IconDownload, IconLoader2, IconAlertCircle, IconFilter, IconSearch, IconX, IconFilterOff } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useRequestQueue } from "@/hooks/use-request-queue"
import { parseUrls } from "@/lib/parse-urls"
import { ImageData, ScrapeResponse, BatchUrlState } from "@/lib/types/scraper"
import { filterImages } from "@/lib/filter-utils"
import { deduplicateImages } from "@/lib/deduplicate-images"
import { getFileExtension } from "@/lib/parse-images"
import { ImageGrid } from "./image-grid"
import { BookmarkBanner } from "./bookmark-banner"
import { ExtractionHistory } from "./extraction-history"
import { useExtractionHistory, useStats } from "@/hooks/use-local-storage"
import { Mascot } from "./mascot"
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
        pages_scraped?: number
        time_seconds?: number
    }
    // Extra data fields for detailed events
    port?: number
    url?: string
    current_page?: number
    max_pages?: number
    target_page?: number
    scroll_count?: number
    images_found?: number
    page_height?: number
    page?: number
    images_on_page?: number
    total_images?: number
    duplicates?: number
    pages_scraped?: number
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
    const [displayProgress, setDisplayProgress] = React.useState(0) // Smooth animated progress
    const [streamStatus, setStreamStatus] = React.useState('idle')
    const [streamMessage, setStreamMessage] = React.useState('')
    const eventSourceRef = React.useRef<EventSource | null>(null)

    // Detailed progress tracking
    const [currentPage, setCurrentPage] = React.useState<number | null>(null)
    const [totalPages, setTotalPages] = React.useState<number | null>(null)
    const [imagesFoundDuringScroll, setImagesFoundDuringScroll] = React.useState<number>(0)

    // Animated notification messages
    const [currentNotification, setCurrentNotification] = React.useState('')
    const [showNotification, setShowNotification] = React.useState(false)

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

    // History and stats tracking
    const { addExtraction } = useExtractionHistory()
    const { trackExtraction } = useStats()

    // Track scan mode for history
    const [lastScanMode, setLastScanMode] = React.useState<'quick' | 'deep'>('quick')

    // Random encouraging notification messages
    const notificationMessages = React.useMemo(() => [
        "✨ Scanning every corner for images...",
        "🔍 Detecting hidden images...",
        "🚀 Lightning-fast extraction in progress!",
        "💎 Finding high-quality images...",
        "🎨 Discovering visual content...",
        "⚡ Processing at maximum speed...",
        "🎯 Targeting all image formats...",
        "🌟 Extracting stunning visuals...",
        "📸 Capturing every photo...",
        "🖼️ Gathering image assets...",
        "🔥 On fire! Finding more images...",
        "💪 Working hard for you...",
        "🎪 The magic is happening...",
        "✅ Quality images loading...",
        "🌈 Collecting colorful content...",
        "🎁 Unwrapping image treasures...",
        "⭐ Almost there, stay tuned!",
        "🎵 Smooth extraction in progress...",
        "💫 Making the web beautiful...",
        "🏆 Champion image finder at work!",
    ], [])

    // Smooth progress animation - gradually moves displayProgress towards streamProgress
    React.useEffect(() => {
        if (!loading) {
            setDisplayProgress(0)
            return
        }

        const interval = setInterval(() => {
            setDisplayProgress(prev => {
                const target = streamProgress
                const diff = target - prev

                // If we're behind the target, catch up smoothly
                if (diff > 0.5) {
                    return prev + Math.min(diff * 0.15, 2) // Speed up catch-up
                }
                // If we're close or at target, add tiny incremental movement to show activity
                else if (prev < 99 && diff >= 0) {
                    return Math.min(prev + 0.1, target + 0.5) // Tiny incremental progress
                }

                return prev
            })
        }, 100) // Update every 100ms

        return () => clearInterval(interval)
    }, [loading, streamProgress])

    // Animated notification cycling - shows random encouraging messages
    React.useEffect(() => {
        if (!loading || mode === 'batch') {
            setShowNotification(false)
            return
        }

        // Show first notification immediately
        const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)]
        setCurrentNotification(randomMessage)
        setShowNotification(true)

        // Cycle through messages every 3 seconds
        const interval = setInterval(() => {
            // Fade out
            setShowNotification(false)

            // Wait 300ms, then show new message
            setTimeout(() => {
                const newMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)]
                setCurrentNotification(newMessage)
                setShowNotification(true)
            }, 300)
        }, 3500) // Change message every 3.5 seconds (3s shown + 0.5s transition)

        return () => clearInterval(interval)
    }, [loading, mode, notificationMessages])

    const filteredImages = React.useMemo(() => {
        return filterImages(images, filters.selectedFormats, filters.minWidth, filters.selectedSourceUrls, filters.searchQuery)
    }, [images, filters])

    // Update selectedIds when filters change to only include filtered image IDs
    React.useEffect(() => {
        if (filteredImages.length === 0) return

        const filteredIds = new Set(filteredImages.map(img => img.id))
        const updatedSelectedIds = new Set<number>()

        // Keep only selected IDs that are still in filtered results
        selectedIds.forEach(id => {
            if (filteredIds.has(id)) {
                updatedSelectedIds.add(id)
            }
        })

        // Only update state if there's a change
        if (updatedSelectedIds.size !== selectedIds.size) {
            setSelectedIds(updatedSelectedIds)
        }
    }, [filteredImages])

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

    const handleScan = async (deep: boolean = false, overrideUrl?: string) => {
        const urlToUse = overrideUrl || urlInput;

        if (!urlToUse.trim()) {
            setError("Please enter a URL")
            return
        }

        const isBatch = mode === "batch"
        const urls = isBatch ? parseUrls(urlToUse) : [urlToUse.trim()]

        if (urls.length === 0) {
            setError("No valid URLs found")
            return
        }

        setLoading(true)
        setError(undefined)
        setImages([])
        setSelectedIds(new Set())
        setLastScanMode(deep ? 'deep' : 'quick')

        if (isBatch) {
            await handleBatchScan(urls, deep)
        } else {
            await handleSingleScan(urls[0], deep)
        }
    }

    const handleSingleScan = async (url: string, deep: boolean) => {
        // Reset streaming state
        setStreamProgress(0)
        setDisplayProgress(0)
        setStreamStatus('idle')
        setStreamMessage('Initializing...')
        setStatus('Connecting to server...')
        setCurrentPage(null)
        setTotalPages(null)
        setImagesFoundDuringScroll(0)

        return new Promise<void>((resolve) => {
            const apiUrl = `/api/scrape/stream?url=${encodeURIComponent(url)}&deep_scrape=${deep}`
            const eventSource = new EventSource(apiUrl)
            eventSourceRef.current = eventSource

            eventSource.onmessage = (event) => {
                try {
                    const data: StreamEvent = JSON.parse(event.data)

                    setStreamProgress(data.progress)
                    setStreamStatus(data.status)

                    // Enhanced status messages with detailed event information
                    let detailedMessage = data.message

                    switch (data.status) {
                        case 'acquiring_port':
                            detailedMessage = data.port ? `Port ${data.port} acquired, starting browser...` : data.message
                            break
                        case 'browser_starting':
                            detailedMessage = 'Opening browser instance...'
                            break
                        case 'page_loading':
                            detailedMessage = data.url ? `Loading page: ${new URL(data.url).hostname}` : data.message
                            break
                        case 'page_loaded':
                            detailedMessage = 'Page loaded successfully, starting extraction...'
                            break
                        case 'extracting_page':
                            if (data.current_page && data.max_pages) {
                                setCurrentPage(data.current_page)
                                setTotalPages(data.max_pages)
                                detailedMessage = `Extracting images from page ${data.current_page} of ${data.max_pages}...`
                            } else {
                                detailedMessage = data.message
                            }
                            break
                        case 'scrolling_started':
                            setImagesFoundDuringScroll(0)
                            detailedMessage = `Starting scroll to load lazy images...`
                            break
                        case 'scrolling':
                            if (data.images_found) {
                                setImagesFoundDuringScroll(data.images_found)
                                detailedMessage = `Scrolling page... found ${data.images_found} images (scroll #${data.scroll_count || 0})`
                            } else {
                                detailedMessage = data.message
                            }
                            break
                        case 'load_more_found':
                            detailedMessage = 'Found "Load More" button, clicking...'
                            break
                        case 'load_more_clicked':
                            detailedMessage = 'Clicked "Load More", waiting for new content...'
                            break
                        case 'page_extracted':
                            detailedMessage = data.page && data.images_on_page
                                ? `Page ${data.page} complete: found ${data.images_on_page} new images (total: ${data.total_images || 0})`
                                : data.message
                            break
                        case 'searching_next_page':
                            detailedMessage = data.target_page
                                ? `Looking for next page button (page ${data.target_page})...`
                                : data.message
                            break
                        case 'clicking_next_page':
                            detailedMessage = data.target_page
                                ? `Navigating to page ${data.target_page}...`
                                : data.message
                            break
                        case 'page_navigated':
                            if (data.page) {
                                setCurrentPage(data.page)
                                detailedMessage = `Navigated to page ${data.page}, extracting images...`
                            } else {
                                detailedMessage = data.message
                            }
                            break
                        case 'pagination_end':
                            detailedMessage = data.pages_scraped
                                ? `No more pages found. Completed ${data.pages_scraped} pages.`
                                : data.message
                            break
                        case 'post_processing':
                            detailedMessage = 'Extraction complete, removing duplicates...'
                            break
                    }

                    setStreamMessage(detailedMessage)
                    setStatus(detailedMessage)

                    if (data.status === 'complete' && data.result) {
                        setImages(data.result.images || [])
                        setSelectedIds(new Set((data.result.images || []).map(img => img.id)))
                        const summaryMsg = data.result.pages_scraped
                            ? `Found ${data.result.total || 0} images from ${data.result.pages_scraped} pages`
                            : `Found ${data.result.total || 0} images`
                        setStatus(summaryMsg)
                        eventSource.close()
                        setLoading(false)

                        // Track in history and stats
                        const imageCount = data.result.total || 0
                        if (imageCount > 0) {
                            const thumbnailUrl = data.result.images?.[0]?.src
                            addExtraction(url, imageCount, deep ? 'deep' : 'quick', thumbnailUrl)
                            trackExtraction(imageCount, false, deep)
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

        // Track in history and stats for batch
        if (uniqueImages.length > 0) {
            // Add each URL to history
            urls.forEach((url, index) => {
                const urlState = batchProgress[index]
                if (urlState?.status === 'completed' && urlState.imageCount > 0) {
                    addExtraction(url, urlState.imageCount, deep ? 'deep' : 'quick')
                }
            })
            trackExtraction(uniqueImages.length, true, deep)
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
        <TooltipProvider delayDuration={300}>
            <div className="w-full overflow-visible">
                {/* Application Interface */}
                <div className="w-full max-w-4xl mx-auto mb-24 px-4 sm:px-6 overflow-visible">

                    {/* Tabs / Mode Switcher */}
                    <div className="flex justify-center mb-8">
                        <div className="p-1 rounded-none bg-card border border-border inline-flex relative shadow-none">
                            {(["single", "batch"] as const).map((m) => (
                                <Tooltip key={m}>
                                    <TooltipTrigger asChild>
                                        <button
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
                                            {m === "single" ? "Single Site" : "Multiple Sites"}
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{m === "single" ? "Extract images from a single webpage" : "Extract images from multiple URLs at once"}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>

                    {/* Extraction History */}
                    <ExtractionHistory
                        className="mb-6"
                        onReExtract={(url, scanMode) => {
                            setMode("single")
                            setUrlInput(url)
                            setImages([])
                            setError(undefined)
                            // Trigger extraction immediately with the specific URL
                            handleScan(scanMode === 'deep', url)
                        }}
                    />

                    {/* Input Card */}
                    <div className="rounded-none p-px bg-gradient-to-b from-border to-transparent mb-8">
                        <div className="relative bg-card rounded-none p-6 border border-border/50 shadow-none">

                            {/* Info Text */}
                            <div className="mb-4 px-2 py-2 bg-primary/5 border border-primary/20 rounded-none">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[11px] text-foreground/80">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                        <span><span className="font-bold text-foreground">Quick Extract:</span> Current page only</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                        <span><span className="font-bold text-foreground">Deep Extract:</span> Up to 3 pages with pagination</span>
                                    </div>
                                </div>
                            </div>

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
                                        className="w-full bg-background text-foreground pl-12 pr-4 py-6 rounded-none border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-muted-foreground/60 text-sm font-medium shadow-sm"
                                        onKeyDown={(e) => e.key === 'Enter' && handleScan(false)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 w-full sm:w-auto">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                onClick={() => handleScan(false)}
                                                disabled={loading || !urlInput.trim()}
                                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-3.5 px-4 sm:px-6 rounded-none font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 flex-1 sm:flex-initial min-w-0"
                                            >
                                                {loading ? <IconLoader2 size={16} className="animate-spin" /> : <IconScan size={16} />}
                                                <span className="truncate">Quick Extract</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Extracts images from the current page only</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                onClick={() => handleScan(true)}
                                                disabled={loading || !urlInput.trim()}
                                                variant="outline"
                                                className="border-2 border-primary text-primary hover:bg-primary/10 h-auto py-3.5 px-4 sm:px-6 rounded-none font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 flex-1 sm:flex-initial min-w-0"
                                            >
                                                {loading ? <IconLoader2 size={16} className="animate-spin" /> : <IconScan size={16} />}
                                                <span className="truncate">Deep Extract</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Extracts images from up to 3 additional pages if pagination is detected</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Sticky Controls Bar */}
                    {images.length > 0 && (
                        <div
                            className="sticky top-16 z-40 py-3 mb-8 bg-background/98 backdrop-blur-md border-b border-border shadow-lg w-full max-w-full overflow-hidden"
                        >
                            {/* Top Row: Stats and Download */}
                            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-3 px-1">
                                {/* Left: Image Count */}
                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-foreground bg-primary/15 border-2 border-primary/30 px-2 sm:px-3 py-1.5 rounded-none shadow-sm min-w-0">
                                    <div className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse flex-shrink-0" />
                                    <span className="truncate">
                                        {filteredImages.length === images.length
                                            ? `${images.length} Images`
                                            : `${filteredImages.length}/${images.length}`
                                        }
                                    </span>
                                </div>

                                {/* Right: Download Button */}
                                {selectedIds.size > 0 && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                size="sm"
                                                onClick={handleDownload}
                                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 sm:px-5 rounded-none font-bold text-sm flex items-center gap-2 shadow-md transition-all active:scale-95 flex-shrink-0"
                                            >
                                                <IconDownload size={16} />
                                                <span className="hidden sm:inline">Download</span> {selectedIds.size}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{selectedIds.size === 1 ? "Download selected image" : `Download ${selectedIds.size} images as a ZIP file`}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </div>

                            {/* Bottom Row: Search & Filters */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-1">
                                {/* Search Input */}
                                <div className="relative w-full sm:w-auto sm:min-w-[200px] sm:max-w-[300px]">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                                        <IconSearch size={14} stroke={2} />
                                    </div>
                                    <Input
                                        type="text"
                                        value={filters.searchQuery}
                                        onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                                        placeholder="Search by name..."
                                        className="h-9 pl-9 pr-8 text-sm bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-none shadow-sm w-full"
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
                                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handleToggleAll}
                                                className="h-8 sm:h-9 px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-background border-2 border-border hover:bg-muted rounded-none shadow-sm"
                                            >
                                                <span className="hidden sm:inline">{selectedIds.size === filteredImages.length ? "Deselect All" : "Select All"}</span>
                                                <span className="sm:hidden">{selectedIds.size === filteredImages.length ? "None" : "All"}</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{selectedIds.size === filteredImages.length ? "Deselect all visible images" : "Select all visible images for download"}</p>
                                        </TooltipContent>
                                    </Tooltip>

                                    {/* Format Filter */}
                                    <DropdownMenu>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className={cn(
                                                            "h-8 sm:h-9 px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider gap-1 sm:gap-1.5 rounded-none transition-all shadow-sm",
                                                            filters.selectedFormats.size > 0
                                                                ? "bg-blue-500/15 border-2 border-blue-500/40 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25"
                                                                : "bg-background border-2 border-border hover:bg-muted"
                                                        )}
                                                    >
                                                        <IconPhoto size={14} />
                                                        <span className="hidden sm:inline">{filters.selectedFormats.size === 0 ? "Format" : `${filters.selectedFormats.size} Format${filters.selectedFormats.size > 1 ? 's' : ''}`}</span>
                                                        <IconChevronDown size={12} className="opacity-50" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Filter images by file format (JPG, PNG, SVG, etc.)</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        <DropdownMenuContent className="w-56" align="start" sideOffset={4}>
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
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className={cn(
                                                            "h-8 sm:h-9 px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider gap-1 sm:gap-1.5 rounded-none transition-all shadow-sm",
                                                            filters.minWidth > 0
                                                                ? "bg-blue-500/15 border-2 border-blue-500/40 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25"
                                                                : "bg-background border-2 border-border hover:bg-muted"
                                                        )}
                                                    >
                                                        <IconArrowsUpDown size={14} />
                                                        <span className="hidden sm:inline">{filters.minWidth === 0 ? "Size" : `> ${filters.minWidth}px`}</span>
                                                        <IconChevronDown size={12} className="opacity-50" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Filter images by minimum width to find larger images</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        <DropdownMenuContent className="w-48" align="start" sideOffset={4}>
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
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className={cn(
                                                                "h-8 sm:h-9 px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider gap-1 sm:gap-1.5 rounded-none transition-all shadow-sm",
                                                                filters.selectedSourceUrls.size > 0
                                                                    ? "bg-blue-500/15 border-2 border-blue-500/40 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25"
                                                                    : "bg-background border-2 border-border hover:bg-muted"
                                                            )}
                                                        >
                                                            <IconLink size={14} />
                                                            <span className="hidden sm:inline">{filters.selectedSourceUrls.size === 0 ? "Source" : `${filters.selectedSourceUrls.size} URL${filters.selectedSourceUrls.size > 1 ? 's' : ''}`}</span>
                                                            <IconChevronDown size={12} className="opacity-50" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Filter images by source URL to see images from specific sites</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto" align="start" sideOffset={4}>
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
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={handleClearAllFilters}
                                                    className="h-8 sm:h-9 px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider gap-1 sm:gap-1.5 bg-red-500/15 border-2 border-red-500/40 text-red-700 dark:text-red-400 hover:bg-red-500/25 rounded-none transition-all shadow-sm"
                                                >
                                                    <IconFilterOff size={14} />
                                                    <span className="hidden sm:inline">Clear All</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Remove all active filters and show all images</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Progress Grid for Batch Mode */}
                    {mode === "batch" && batchProgress.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {batchProgress.map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-none bg-card border-2 border-border shadow-sm text-[11px] font-bold">
                                    <span className="truncate text-foreground/80 max-w-[150px]">{p.url}</span>
                                    <div className="flex items-center gap-2">
                                        {p.status === 'processing' && <IconLoader2 size={14} className="animate-spin text-primary" />}
                                        {p.status === 'completed' && <span className="text-emerald-600 dark:text-emerald-400">{p.imageCount} images</span>}
                                        {p.status === 'failed' && <span className="text-red-600 dark:text-red-400 font-bold">Failed</span>}
                                        {p.status === 'pending' && <span className="text-muted-foreground">Pending</span>}
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
                            <div className="mb-6 p-4 bg-primary/5 border-2 border-primary/20 rounded-none shadow-sm animate-in fade-in slide-in-from-top-2 duration-500">
                                <div className="flex items-center justify-between mb-3 px-1">
                                    {/* Mascot */}
                                    <div className="mr-3 flex-shrink-0">
                                        <Mascot state="working" size={40} />
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-foreground">
                                                {mode === 'batch'
                                                    ? `Scanned ${batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length} of ${batchProgress.length} URLs`
                                                    : streamMessage || "Analyzing page..."
                                                }
                                            </span>
                                        </div>
                                        {/* Additional details for single mode */}
                                        {mode === 'single' && (
                                            <div className="flex items-center gap-3 ml-6 text-[10px] text-foreground/60">
                                                {currentPage && totalPages && (
                                                    <span className="flex items-center gap-1 animate-in fade-in duration-300">
                                                        <span className="w-1 h-1 rounded-full bg-primary/60 animate-pulse"></span>
                                                        Page {currentPage}/{totalPages}
                                                    </span>
                                                )}
                                                {imagesFoundDuringScroll > 0 && (
                                                    <span className="flex items-center gap-1 animate-in fade-in duration-300">
                                                        <span className="w-1 h-1 rounded-full bg-primary/60 animate-pulse"></span>
                                                        {imagesFoundDuringScroll} images found
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-sm font-mono font-bold text-primary tabular-nums">
                                        {Math.round(mode === 'batch'
                                            ? (batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length / batchProgress.length) * 100
                                            : displayProgress
                                        )}%
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-none overflow-hidden border border-border/50 relative">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 ease-out relative overflow-hidden"
                                        style={{
                                            width: `${mode === 'batch'
                                                ? (batchProgress.filter(p => p.status === 'completed' || p.status === 'failed').length / batchProgress.length) * 100
                                                : displayProgress
                                                }%`
                                        }}
                                    >
                                        {/* Animated shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                                            style={{
                                                backgroundSize: '200% 100%',
                                                animation: 'shimmer 2s infinite linear'
                                            }}
                                        />
                                        {/* Pulsing glow at the end */}
                                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent animate-pulse" />
                                    </div>
                                    {/* Moving dots overlay for continuous animation */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="h-full flex items-center">
                                            <div className="animate-scroll-dots flex gap-2">
                                                <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                                                <span className="w-1 h-1 rounded-full bg-primary/40 animation-delay-200"></span>
                                                <span className="w-1 h-1 rounded-full bg-primary/40 animation-delay-400"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Minimal notification text below progress bar */}
                                {mode === 'single' && (
                                    <div className="mt-2 px-1 text-center">
                                        <p className={cn(
                                            "text-[10px] text-muted-foreground/70 italic transition-opacity duration-300",
                                            showNotification ? "opacity-100" : "opacity-0"
                                        )}>
                                            {currentNotification}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bookmark Banner */}
                <BookmarkBanner
                    show={showBookmarkBanner}
                    onClose={() => setShowBookmarkBanner(false)}
                    imageCount={images.length}
                />

            </div>
        </TooltipProvider>
    )
}
