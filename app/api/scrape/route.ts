import { NextRequest, NextResponse } from 'next/server';
import { ScrapeResponse, ImageScraperResponse } from '@/lib/types/scraper';
import { convertImageUrls } from '@/lib/parse-images';

const IMAGE_SCRAPER_API_URL = process.env.IMAGE_SCRAPER_API_URL;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { url, deepScrape = true } = body;

        if (!url) {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: 'URL is required' },
                { status: 400 }
            );
        }

        const trimmedUrl = url.trim();

        // Basic security check: block file:// URLs
        if (trimmedUrl.match(/^file:\/\//i)) {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: 'Local file URLs are not supported.' },
                { status: 400 }
            );
        }

        // SSRF protection: block localhost and internal IPs
        try {
            const parsedUrl = new URL(trimmedUrl.startsWith('http') ? trimmedUrl : `https://${trimmedUrl}`);
            const hostname = parsedUrl.hostname.toLowerCase();
            if (hostname === 'localhost' || hostname === '127.0.0.1' ||
                hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
                hostname.startsWith('172.')) {
                return NextResponse.json<ScrapeResponse>(
                    { success: false, images: [], error: 'Local or internal URLs are not supported.' },
                    { status: 400 }
                );
            }
        } catch {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: 'Invalid URL format.' },
                { status: 400 }
            );
        }

        if (!IMAGE_SCRAPER_API_URL) {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: 'Image Scraper API URL not configured' },
                { status: 500 }
            );
        }

        const scraperUrl = `${IMAGE_SCRAPER_API_URL}/images?url=${encodeURIComponent(trimmedUrl)}&deep_scrape=${deepScrape}`;

        const scraperResponse = await fetch(scraperUrl, {
            signal: AbortSignal.timeout(120000), // 2 minutes timeout
        });

        if (!scraperResponse.ok) {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: `API error: ${scraperResponse.status}` },
                { status: scraperResponse.status }
            );
        }

        const scraperData: ImageScraperResponse = await scraperResponse.json();

        if (scraperData.status === 'error') {
            return NextResponse.json<ScrapeResponse>(
                { success: false, images: [], error: scraperData.error || 'Scraping failed' },
                { status: 500 }
            );
        }

        const images = convertImageUrls(scraperData.images || []);

        return NextResponse.json<ScrapeResponse>({
            success: true,
            images,
            metadata: {
                total_found: images.length,
                url: trimmedUrl,
            },
        });

    } catch (error) {
        console.error('Scrape API error:', error);
        return NextResponse.json<ScrapeResponse>(
            {
                success: false,
                images: [],
                error: error instanceof Error ? error.message : 'An internal error occurred'
            },
            { status: 500 }
        );
    }
}
