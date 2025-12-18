export interface ImageData {
    id: number;
    src: string;
    name: string;
    dimensions?: string;
    size?: string;
    defaultChecked?: boolean;
    sourceUrl?: string;
}

export interface ScrapeResponse {
    success: boolean;
    images: ImageData[];
    error?: string;
    metadata?: {
        total_found: number;
        url: string;
    };
}

export interface ImageScraperResponse {
    status: 'success' | 'error';
    url?: string;
    total?: number;
    count?: number;
    duplicates_removed?: number;
    time_seconds?: number;
    request_id?: string;
    port_used?: number;
    images?: string[];
    error?: string;
}

export interface BatchUrlState {
    url: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    imageCount: number;
    error?: string;
}
