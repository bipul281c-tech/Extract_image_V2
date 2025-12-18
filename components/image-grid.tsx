"use client"

import * as React from "react"
import { IconDownload, IconExternalLink, IconCheck, IconX } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageData } from "@/lib/types/scraper"
import { cn } from "@/lib/utils"

interface ImageGridProps {
    images: ImageData[]
    loading: boolean
    error?: string
    selectedIds: Set<number>
    onToggle: (id: number) => void
    onToggleAll: () => void
}

export function ImageGrid({ images, loading, error, selectedIds, onToggle, onToggleAll }: ImageGridProps) {
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-none bg-destructive/10 text-destructive flex items-center justify-center mb-4 shadow-none">
                    <IconX size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Extraction Failed</h3>
                <p className="text-muted-foreground text-sm max-w-md">{error}</p>
            </div>
        )
    }

    if (loading && images.length === 0) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-none border border-border"></div>
                ))}
            </div>
        )
    }

    if (images.length === 0) {
        return null; // Handled by parent
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">
                    {images.length} Images Found
                </h3>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onToggleAll}
                    className="text-xs font-bold rounded-none shadow-none"
                >
                    {selectedIds.size === images.length ? "Deselect All" : "Select All"}
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        isSelected={selectedIds.has(image.id)}
                        onToggle={() => onToggle(image.id)}
                    />
                ))}
            </div>
        </div>
    )
}

function ImageCard({ image, isSelected, onToggle }: { image: ImageData, isSelected: boolean, onToggle: () => void }) {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <Card
            className={cn(
                "group relative aspect-square overflow-hidden border-2 transition-all cursor-pointer rounded-none shadow-none",
                isSelected ? "border-primary ring-0" : "border-border hover:border-primary/50"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onToggle}
        >
            <img
                src={image.src}
                alt={image.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />

            {/* Overlay */}
            <div className={cn(
                "absolute inset-0 bg-black/40 transition-opacity duration-300 flex flex-col justify-between p-3",
                isHovered || isSelected ? "opacity-100" : "opacity-0"
            )}>
                <div className="flex justify-between items-start">
                    <div
                        className={cn(
                            "w-6 h-6 rounded-none border-2 flex items-center justify-center transition-all",
                            isSelected
                                ? "bg-primary border-primary text-primary-foreground"
                                : "bg-white/20 border-white/40"
                        )}
                    >
                        {isSelected && <IconCheck size={14} stroke={3} />}
                    </div>

                    <div className="flex gap-2">
                        <a
                            href={image.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-none bg-white/20 hover:bg-white/40 border border-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-all"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <IconExternalLink size={16} />
                        </a>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="text-[10px] font-bold text-white/90 truncate mb-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-none w-fit max-w-full">
                        {image.name}
                    </div>
                    {image.dimensions && image.dimensions !== 'Unknown' && (
                        <div className="text-[10px] font-bold text-white/70 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-none w-fit">
                            {image.dimensions}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}
