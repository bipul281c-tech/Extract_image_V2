"use client"

import * as React from "react"
import { IconHistory, IconTrash, IconRefresh, IconChevronDown, IconChevronUp, IconX, IconPhoto, IconClock } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useExtractionHistory } from "@/hooks/use-local-storage"

interface ExtractionHistoryProps {
  onReExtract?: (url: string, scanMode: 'quick' | 'deep') => void
  className?: string
}

export function ExtractionHistory({ onReExtract, className }: ExtractionHistoryProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { history, isLoaded, removeExtraction, clearAll } = useExtractionHistory()

  // Don't render until loaded (SSR safety)
  if (!isLoaded) return null

  // Don't show if no history
  if (history.length === 0) return null

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000)

    if (seconds < 60) return 'just now'
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
    return new Date(timestamp).toLocaleDateString()
  }

  const truncateUrl = (url: string, maxLength = 40) => {
    try {
      const urlObj = new URL(url)
      const display = urlObj.hostname + urlObj.pathname
      return display.length > maxLength ? display.slice(0, maxLength) + '...' : display
    } catch {
      return url.length > maxLength ? url.slice(0, maxLength) + '...' : url
    }
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card/40 border border-border/50 rounded-none hover:bg-card/60 transition-colors group"
      >
        <div className="flex items-center gap-2">
          <IconHistory size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Recent Extractions</span>
          <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-none">
            {history.length}
          </span>
        </div>
        {isExpanded ? (
          <IconChevronUp size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        ) : (
          <IconChevronDown size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border border-t-0 border-border/50 rounded-none bg-card/20 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          {/* Header Actions */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/30 bg-card/30">
            <span className="text-xs text-muted-foreground">
              Click to re-extract
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAll}
              className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
            >
              <IconTrash size={12} className="mr-1" />
              Clear All
            </Button>
          </div>

          {/* History List */}
          <div className="max-h-64 overflow-y-auto">
            {history.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 px-4 py-3 hover:bg-card/40 transition-colors border-b border-border/20 last:border-b-0"
              >
                {/* Thumbnail or Placeholder */}
                <div className="w-10 h-10 rounded-none bg-muted flex-shrink-0 overflow-hidden border border-border/30">
                  {item.thumbnailUrl ? (
                    <img
                      src={item.thumbnailUrl}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <IconPhoto size={16} className="text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* URL and Meta */}
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {truncateUrl(item.url)}
                  </p>
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <IconPhoto size={10} />
                      {item.imageCount} images
                    </span>
                    <span>•</span>
                    <span className={cn(
                      "px-1 py-0.5 rounded-none text-[10px] font-medium",
                      item.scanMode === 'deep' ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    )}>
                      {item.scanMode}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <IconClock size={10} />
                      {formatTimeAgo(item.timestamp)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onReExtract?.(item.url, item.scanMode)}
                    className="h-7 w-7 p-0 hover:bg-primary/10 hover:text-primary"
                    title="Re-extract"
                  >
                    <IconRefresh size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExtraction(item.id)}
                    className="h-7 w-7 p-0 hover:bg-destructive/10 hover:text-destructive"
                    title="Remove from history"
                  >
                    <IconX size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
