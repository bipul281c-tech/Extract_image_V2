import { ImageData } from './types/scraper';
import { getFileExtension } from './parse-images';

export function filterImages(
    images: ImageData[],
    selectedFormats: Set<string>,
    minWidth: number,
    selectedSourceUrls?: Set<string>,
    searchQuery?: string
): ImageData[] {
    return images.filter(image => {
        // Filter by format
        const ext = getFileExtension(image.name).toUpperCase();
        if (selectedFormats.size > 0 && !selectedFormats.has(ext)) {
            return false;
        }

        // Filter by minimum width
        if (minWidth > 0 && image.dimensions !== 'Unknown') {
            const widthMatch = image.dimensions?.match(/^(\d+)/);
            if (widthMatch) {
                const width = parseInt(widthMatch[1], 10);
                if (width < minWidth) return false;
            }
        }

        // Filter by source URL (batch mode)
        if (selectedSourceUrls && selectedSourceUrls.size > 0 && image.sourceUrl) {
            if (!selectedSourceUrls.has(image.sourceUrl)) return false;
        }

        // Filter by search query (image name)
        if (searchQuery && searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            const name = image.name.toLowerCase();
            if (!name.includes(query)) return false;
        }

        return true;
    });
}
