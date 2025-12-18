"use client"

import * as React from "react"
import { IconBookmark, IconX, IconGripVertical } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookmarkBannerProps {
    show: boolean
    onClose: () => void
}

export function BookmarkBanner({ show, onClose }: BookmarkBannerProps) {
    const [isVisible, setIsVisible] = React.useState(false)
    const [showTooltip, setShowTooltip] = React.useState(false)
    const [isDragging, setIsDragging] = React.useState(false)

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
        // Automatically trigger bookmark dialog
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
        const shortcut = isMac ? '⌘ + D' : 'Ctrl + D'

        // Try to programmatically trigger bookmark
        if (typeof window !== 'undefined') {
            // Create a keyboard event to simulate Ctrl+D / Cmd+D
            try {
                const event = new KeyboardEvent('keydown', {
                    key: 'd',
                    code: 'KeyD',
                    keyCode: 68,
                    which: 68,
                    ctrlKey: !isMac,
                    metaKey: isMac,
                    bubbles: true,
                    cancelable: true
                })
                document.dispatchEvent(event)
            } catch (e) {
                // Fallback to alert if keyboard event doesn't work
                alert(`Press ${shortcut} to bookmark this page!\n\nOr drag the bookmark icon to your bookmarks bar.`)
            }
        }

        // Don't close immediately, let user complete the action
        setTimeout(() => {
            onClose()
        }, 2000)
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
                "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
        >
            <div className="bg-card/60 border-2 border-primary/20 shadow-lg backdrop-blur-xl rounded-none px-3 py-5 flex items-center gap-3 max-w-lg mx-4">
                {/* Draggable Bookmark Icon */}
                <div className="relative">
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
                <div className="flex-grow">
                    <h3 className="text-foreground font-bold text-sm mb-1">
                        Extraction Complete! 🎉
                    </h3>
                    <p className="text-muted-foreground text-xs">
                        Click to bookmark or drag icon to toolbar
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button
                        onClick={handleAddBookmark}
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 rounded-none font-bold text-xs shadow-none"
                    >
                        <IconBookmark size={14} className="mr-1" />
                        Bookmark
                    </Button>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-none hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Close"
                    >
                        <IconX size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}
