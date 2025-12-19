import { NextRequest } from 'next/server';
import { convertImageUrls } from '@/lib/parse-images';

const IMAGE_SCRAPER_API_URL = process.env.IMAGE_SCRAPER_API_URL;

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');
    const deepScrape = searchParams.get('deep_scrape') !== 'false';

    if (!url) {
        return new Response(
            JSON.stringify({ error: 'URL is required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const trimmedUrl = url.trim();

    // Basic security check: block file:// URLs
    if (trimmedUrl.match(/^file:\/\//i)) {
        return new Response(
            JSON.stringify({ error: 'Local file URLs are not supported.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // SSRF protection: block localhost and internal IPs
    try {
        const parsedUrl = new URL(trimmedUrl.startsWith('http') ? trimmedUrl : `https://${trimmedUrl}`);
        const hostname = parsedUrl.hostname.toLowerCase();
        if (hostname === 'localhost' || hostname === '127.0.0.1' ||
            hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
            hostname.startsWith('172.')) {
            return new Response(
                JSON.stringify({ error: 'Local or internal URLs are not supported.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch {
        return new Response(
            JSON.stringify({ error: 'Invalid URL format.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    if (!IMAGE_SCRAPER_API_URL) {
        return new Response(
            JSON.stringify({ error: 'Image Scraper API URL not configured' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const streamUrl = `${IMAGE_SCRAPER_API_URL}/images/stream?url=${encodeURIComponent(trimmedUrl)}&deep_scrape=${deepScrape}`;

    try {
        const response = await fetch(streamUrl, {
            headers: { 'Accept': 'text/event-stream' },
        });

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: `API error: ${response.status}` }),
                { status: response.status, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Create a TransformStream to process the SSE data
        const { readable, writable } = new TransformStream();
        const writer = writable.getWriter();
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();

        // Process the upstream SSE stream
        (async () => {
            const reader = response.body?.getReader();
            if (!reader) {
                await writer.close();
                return;
            }

            let buffer = '';

            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split('\n');
                    buffer = lines.pop() || '';

                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            try {
                                const data = JSON.parse(line.slice(6));

                                // If complete, convert the image URLs
                                if (data.status === 'complete' && data.result?.images) {
                                    data.result.images = convertImageUrls(data.result.images);
                                }

                                await writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
                            } catch {
                                // Forward raw line if JSON parsing fails
                                await writer.write(encoder.encode(`${line}\n\n`));
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Stream processing error:', error);
            } finally {
                await writer.close();
            }
        })();

        return new Response(readable, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });
    } catch (error) {
        console.error('Stream API error:', error);
        return new Response(
            JSON.stringify({ error: error instanceof Error ? error.message : 'An internal error occurred' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
