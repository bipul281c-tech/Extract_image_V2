"use client"

import * as React from "react"
import { IconBookmark, IconX, IconGripVertical, IconShare, IconBrandX, IconBrandLinkedin, IconLink } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BookmarkBannerProps {
    show: boolean
    onClose: () => void
    imageCount?: number
}

export function BookmarkBanner({ show, onClose, imageCount = 0 }: BookmarkBannerProps) {
    const [isVisible, setIsVisible] = React.useState(false)
    const [showTooltip, setShowTooltip] = React.useState(false)
    const [isDragging, setIsDragging] = React.useState(false)
    const [copied, setCopied] = React.useState(false)

    const shareText = imageCount > 0
        ? `Just extracted ${imageCount} images using ExtractPics - free and no signup required!`
        : `Check out ExtractPics - extract images from any website for free!`

    const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://extractpics.com'

    const handleShareTwitter = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        window.open(tweetUrl, '_blank', 'width=550,height=420')
    }

    const handleShareLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        window.open(linkedInUrl, '_blank', 'width=550,height=420')
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    React.useEffect(() => {
        if (show) {
            // Delay showing the banner slightly for a smooth entrance
            const timer = setTimeout(() => setIsVisible(true), 300)
            return () => clearTimeout(timer)
        } else {
            setIsVisible(false)
        }
    }, [show])

    const handleAddBookmark = () => {
        // Show instruction to user (browsers block programmatic bookmarking for security)
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
        const shortcut = isMac ? '⌘ + D' : 'Ctrl + D'

        if (typeof window !== 'undefined') {
            // Show user-friendly instruction
            alert(`To bookmark this page:\n\n• Press ${shortcut} on your keyboard\n• Or drag the bookmark icon 📌 to your bookmarks bar\n• Or use your browser's bookmark button`)
        }

        // Close banner after showing instructions
        setTimeout(() => {
            onClose()
        }, 500)
    }

    const handleDragStart = (e: React.DragEvent) => {
        setIsDragging(true)
        // Set the bookmark data for dragging
        const bookmarkData = {
            url: window.location.href,
            title: document.title || 'ExtractPics - Image Extractor'
        }

        // Set drag data in multiple formats for compatibility
        e.dataTransfer.effectAllowed = 'link'
        e.dataTransfer.setData('text/uri-list', bookmarkData.url)
        e.dataTransfer.setData('text/plain', bookmarkData.url)
        e.dataTransfer.setData('text/html', `<a href="${bookmarkData.url}">${bookmarkData.title}</a>`)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    if (!show && !isVisible) return null

    return (
        <div
            className={cn(
                "fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
        >
            <div className="bg-card/60 border-2 border-primary/20 shadow-lg backdrop-blur-xl rounded-none px-2 py-2 md:px-3 md:py-5 flex items-center gap-2 md:gap-3 max-w-lg mx-4">
                {/* Draggable Bookmark Icon - Hidden on mobile */}
                <div className="relative hidden md:block">
                    <div
                        draggable="true"
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className={cn(
                            "w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0 cursor-move transition-all hover:bg-primary/20 hover:scale-105 active:scale-95",
                            isDragging && "opacity-50 scale-90"
                        )}
                    >
                        <IconBookmark size={20} className="text-primary" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-none bg-primary flex items-center justify-center">
                            <IconGripVertical size={8} className="text-primary-foreground" />
                        </div>
                    </div>

                    {/* Tooltip */}
                    {showTooltip && !isDragging && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-bold rounded-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
                            Drag to bookmarks bar
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                <div className="border-4 border-transparent border-t-foreground"></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                    <h3 className="text-foreground font-bold text-xs md:text-sm mb-0.5 md:mb-1 truncate">
                        Extraction Complete! 🎉
                    </h3>
                    <p className="text-muted-foreground text-[10px] md:text-xs leading-tight md:leading-normal">
                        <span className="hidden md:inline">Click to bookmark or drag icon to toolbar</span>
                        <span className="md:hidden">Bookmark this page</span>
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                    <Button
                        onClick={handleAddBookmark}
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 h-7 md:h-8 px-2.5 md:px-4 rounded-none font-bold text-[10px] md:text-xs shadow-none"
                    >
                        <IconBookmark size={12} className="md:mr-1" />
                        <span className="hidden sm:inline md:ml-0">Bookmark</span>
                    </Button>

                    {/* Share Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-7 md:h-8 px-2.5 md:px-3 rounded-none font-bold text-[10px] md:text-xs border-primary/30 hover:bg-primary/10"
                            >
                                <IconShare size={12} className="md:mr-1" />
                                <span className="hidden sm:inline">Share</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-none w-40">
                            <DropdownMenuItem onClick={handleShareTwitter} className="cursor-pointer rounded-none text-xs">
                                <IconBrandX size={14} className="mr-2" />
                                Share on X
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleShareLinkedIn} className="cursor-pointer rounded-none text-xs">
                                <IconBrandLinkedin size={14} className="mr-2" />
                                LinkedIn
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer rounded-none text-xs">
                                <IconLink size={14} className="mr-2" />
                                {copied ? 'Copied!' : 'Copy Link'}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <button
                        onClick={onClose}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-none hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                        aria-label="Close"
                    >
                        <IconX size={14} className="md:w-4 md:h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
