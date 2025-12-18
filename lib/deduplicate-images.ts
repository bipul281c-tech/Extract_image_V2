import { ImageData } from './types/scraper';
import { normalizeImageUrl } from './parse-images';

export function deduplicateImages(images: ImageData[]): { uniqueImages: ImageData[], duplicatesRemoved: number } {
    const seen = new Set<string>();
    const uniqueImages: ImageData[] = [];
    let duplicatesRemoved = 0;

    for (const image of images) {
        const normalizedUrl = normalizeImageUrl(image.src);
        if (!seen.has(normalizedUrl)) {
            seen.add(normalizedUrl);
            uniqueImages.push(image);
        } else {
            duplicatesRemoved++;
        }
    }

    // Re-id unique images
    const finalImages = uniqueImages.map((img, index) => ({
        ...img,
        id: index + 1
    }));

    return { uniqueImages: finalImages, duplicatesRemoved };
}
