export function parseUrls(input: string): string[] {
    // Support both comma-separated and newline-separated URLs
    const urls = input
        .split(/[\n,]+/)
        .map(url => url.trim())
        .filter(url => url.length > 0);

    return urls.map(url => {
        try {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                return `https://${url}`;
            }
            return url;
        } catch {
            return url;
        }
    });
}

export function isValidUrl(url: string): boolean {
    try {
        const parsed = new URL(url);
        const hostname = parsed.hostname.toLowerCase();

        // Block local and internal IPs
        if (hostname === 'localhost' || hostname === '127.0.0.1' ||
            hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
            hostname.startsWith('172.')) {
            return false;
        }

        // Ensure TLD
        if (!hostname.includes('.')) {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}
