import { ImageData } from './types/scraper';

export function convertImageUrls(urls: string[]): ImageData[] {
    const seen = new Set<string>();
    const uniqueUrls: string[] = [];

    for (const url of urls) {
        const normalizedUrl = normalizeImageUrl(url);
        if (!seen.has(normalizedUrl)) {
            seen.add(normalizedUrl);
            uniqueUrls.push(url);
        }
    }

    return uniqueUrls.map((src, index) => ({
        id: index + 1,
        src,
        name: extractFilename(src),
        dimensions: 'Unknown',
        size: 'Unknown',
        defaultChecked: true,
    }));
}

export function normalizeImageUrl(url: string): string {
    try {
        const urlObj = new URL(url);
        let pathname = urlObj.pathname;

        // Remove common size/dimension suffixes
        pathname = pathname.replace(/[-_]?\d+x\d+/gi, '');
        pathname = pathname.replace(/[-_](thumb|small|medium|large)/gi, '');
        pathname = pathname.replace(/@\d+x/gi, '');
        pathname = pathname.replace(/[-_](preview|scaled)/gi, '');
        pathname = pathname.replace(/[-_]w\d+/gi, '');
        pathname = pathname.replace(/[-_]h\d+/gi, '');

        // Normalize CDN paths
        pathname = pathname.replace(/\/\d+x\d+\//gi, '/');
        pathname = pathname.replace(/\/(thumb|small|medium|large)\//gi, '/');

        return `${urlObj.origin}${pathname}`.toLowerCase().replace(/\/$/, '');
    } catch {
        return url.toLowerCase().replace(/\/$/, '');
    }
}

function extractFilename(url: string): string {
    try {
        const pathname = new URL(url).pathname;
        const parts = pathname.split('/');
        const filename = parts[parts.length - 1];
        return filename || 'image.jpg';
    } catch {
        return 'image.jpg';
    }
}

export function getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
}
