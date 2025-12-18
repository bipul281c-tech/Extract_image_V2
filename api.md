# ExtractPics - Architecture & API Documentation

**Complete Developer Onboarding Guide**

Version: 1.0
Last Updated: December 2025

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Architecture Overview](#2-architecture-overview)
3. [Complete Data Flow](#3-complete-data-flow)
4. [Key Components Deep Dive](#4-key-components-deep-dive)
5. [Type System](#5-type-system)
6. [Utility Functions](#6-utility-functions)
7. [SEO & Configuration](#7-seo--configuration)
8. [Common Development Tasks](#8-common-development-tasks)
9. [Troubleshooting Guide](#9-troubleshooting-guide)
10. [Testing Strategies](#10-testing-strategies)
11. [Code Style & Conventions](#11-code-style--conventions)
12. [Deployment](#12-deployment)
13. [Resources & Quick Reference](#13-resources--quick-reference)

---

## 1. Quick Start

### 1.1 Prerequisites

- **Node.js**: 18+ required
- **npm**: Comes with Node.js
- **Git**: For version control
- **Basic Knowledge**: Next.js 16, React 19, TypeScript

### 1.2 Setup Commands

```bash
# Clone the repository
git clone <repository-url>
cd Imageextractor-main

# Install dependencies
npm install

# Environment setup
# Copy the environment file and configure
cat > .env.local << EOF
IMAGE_SCRAPER_API_URL=https://api.excusegenerator.fun
EOF

# Run development server
npm run dev
# Visit: http://localhost:3000

# Build for production
npm run build

# Run production build locally
npm start
```

### 1.3 Project Structure at a Glance

```
/Imageextractor-main
├── app/                        # Next.js 16 App Router
│   ├── layout.tsx             # Root layout with SEO metadata
│   ├── page.tsx               # Homepage with full extraction UI
│   ├── api/
│   │   └── scrape/
│   │       └── route.ts       # Main API endpoint
│   └── [tool-pages]/          # 25+ SEO variation pages
│       ├── layout.tsx         # Page-specific metadata
│       └── page.tsx           # Page implementation
│
├── components/                 # React components
│   ├── ui/                    # Radix UI primitives
│   ├── search-section.tsx     # Input interface
│   ├── image-grid.tsx         # Results display
│   ├── filters-sidebar.tsx    # Filtering UI
│   ├── navbar.tsx             # Navigation
│   └── footer.tsx             # Footer
│
├── lib/                        # Utilities & business logic
│   ├── types/
│   │   └── scraper.ts        # Type definitions
│   ├── parse-images.ts        # Image URL processing
│   ├── parse-urls.ts          # URL validation
│   ├── filter-utils.ts        # Image filtering
│   ├── deduplicate-images.ts  # Deduplication logic
│   └── pages-config.ts        # Page configuration
│
├── hooks/                      # Custom React hooks
│   └── use-request-queue.ts  # Concurrency control
│
├── styles/
│   └── globals.css           # Global Tailwind styles
│
├── public/                     # Static assets
│   ├── logo.png
│   └── favicon.ico
│
└── Configuration:
    ├── package.json           # Dependencies
    ├── tsconfig.json          # TypeScript config
    ├── next.config.mjs        # Next.js config
    ├── tailwind.config.js     # Tailwind CSS config
    └── .env.local             # Environment variables
```

### 1.4 First Successful Run

After running `npm run dev`, you should see:

```
▲ Next.js 16.0.10
- Local:        http://localhost:3000
- Ready in 2.3s
```

Visit `http://localhost:3000` and:
1. Enter a URL (e.g., `https://unsplash.com`)
2. Click "Scan for Images"
3. See extracted images appear in grid
4. Select images and download as ZIP

**Congratulations!** You've successfully set up ExtractPics.

---

## 2. Architecture Overview

### 2.1 Technology Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | Next.js | 16.0.10 | React framework with App Router |
| **UI Library** | React | 19.2.0 | Component-based UI |
| **Language** | TypeScript | 5.x | Type-safe development |
| **Styling** | Tailwind CSS | 4.1.9 | Utility-first CSS |
| **UI Components** | Radix UI | Various | Accessible component primitives |
| **State Management** | React Hooks | Built-in | useState, useMemo, useCallback |
| **File Handling** | JSZip | 3.10.1 | ZIP file generation |
| **Downloads** | file-saver | 2.0.5 | Browser file downloads |
| **Analytics** | Vercel Analytics | 1.3.1 | Usage tracking |

### 2.2 Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                     USER INTERFACE (Browser)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐       │
│  │ SearchSection│  │FiltersSidebar│  │   ImageGrid     │       │
│  │ (URL Input)  │  │ (Filters)    │  │ (Results)       │       │
│  └──────┬───────┘  └──────────────┘  └──────┬──────────┘       │
│         │                                     │                  │
└─────────┼─────────────────────────────────────┼──────────────────┘
          │                                     │
          ▼                                     ▼
┌──────────────────────────────────────────────────────────────────┐
│                  CLIENT-SIDE STATE (React)                        │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  State: images[], loading, filters, batchProgress, etc.   │  │
│  │  Hooks: useState, useMemo, useCallback                    │  │
│  │  Custom: useRequestQueue (concurrency control)            │  │
│  └───────────────────────────────────────────────────────────┘  │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ fetch("/api/scrape")
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                    CUSTOM HOOK LAYER                              │
│                   useRequestQueue()                               │
│              Limits to 2 concurrent requests                      │
│         Queue: [request1, request2, ...]                          │
│         Shows: "2 requests ahead of you"                          │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                 API ROUTE (Server-Side)                           │
│          POST /app/api/scrape/route.ts                           │
│                                                                   │
│  1. Validate URL (parse-urls.ts)                                │
│     ├─ Block file:// URLs                                       │
│     ├─ Block localhost/internal IPs                             │
│     └─ Check hostname format                                    │
│                                                                   │
│  2. Call External API                                            │
│     └─ https://api.excusegenerator.fun/images                  │
│                                                                   │
│  3. Process Response                                             │
│     ├─ Convert to ImageData[] (parse-images.ts)                │
│     ├─ Normalize URLs (remove size suffixes)                    │
│     └─ Deduplicate (deduplicate-images.ts)                     │
│                                                                   │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│              EXTERNAL IMAGE SCRAPER API                           │
│        https://api.excusegenerator.fun                           │
│                                                                   │
│  Request:  GET /images?url=example.com&deep_scrape=true         │
│  Response: { status, images: [...], total, duplicates_removed } │
│  Timeout:  120 seconds (2 minutes)                              │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Returns image URLs
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                  PROCESSING LAYER (Utilities)                     │
│  ┌──────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │ convertImage │  │ deduplicateImage│  │  filterImages   │   │
│  │    Urls      │  │      s          │  │  (format/size)  │   │
│  │ (normalize)  │  │  (batch mode)   │  │                 │   │
│  └──────────────┘  └─────────────────┘  └─────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Returns processed ImageData[]
                                 ▼
                          Back to UI for Display
```

### 2.3 Rendering Strategy

ExtractPics uses a **hybrid rendering pattern**:

#### Server Components (SSR)
- **Location**: `layout.tsx` files
- **Purpose**: SEO metadata, JSON-LD structured data
- **When**: Build time and request time
- **Example**:

```typescript
// app/layout.tsx - Server Component (no "use client")
export const metadata: Metadata = {
  title: "Extract Images from Websites Free | Bulk Download Tool",
  description: "ExtractPics is a free online tool...",
  // ... extensive metadata
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{...}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

#### Client Components (CSR)
- **Location**: `page.tsx` files and interactive components
- **Purpose**: User interaction, state management, API calls
- **When**: Browser runtime
- **Marker**: `"use client"` directive at top of file
- **Example**:

```typescript
// app/page.tsx - Client Component
"use client"

export default function Home() {
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(false)
  // ... interactive logic
}
```

### 2.4 Key Design Decisions

#### Why No External State Management?
- **State is localized**: Each page manages its own state
- **No cross-page sharing needed**: Each tool page is independent
- **React hooks sufficient**: `useState`, `useMemo`, `useCallback` handle all needs
- **Simpler**: Fewer dependencies, easier to understand

#### Why Singleton Pattern for Queue?
- **Shared across components**: Multiple component instances need same queue
- **Global concurrency limit**: Max 2 requests regardless of component
- **UI feedback**: All components show same queue state
- **File**: `hooks/use-request-queue.ts`

#### Why External API?
- **Separation of concerns**: Scraping is complex, delegated to specialized service
- **No server overhead**: Our app doesn't do heavy scraping
- **Timeout protection**: 2-minute timeout prevents hanging
- **Scalability**: External API handles load

---

## 3. Complete Data Flow

### 3.1 Single URL Extraction Flow

**Complete journey from user input to displayed images:**

#### Step 1: User Input

```typescript
// File: app/page.tsx (lines 34-70)
const handleSingleScan = async (url: string) => {
  setLoading(true)          // Show loading state
  setError(undefined)        // Clear any previous errors
  setStatus("Scanning...")   // Update status message
  setImages([])              // Clear previous results

  try {
    // Use queue system to limit concurrent requests
    await queueRequest(async () => {
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, deepScrape }),
        credentials: 'include',
      })

      const data: ScrapeResponse = await response.json()

      if (!data.success) {
        setError(data.error || "Failed to scrape the page")
        setStatus("Error")
        return
      }

      setImages(data.images)
      setStatus(`Found ${data.images.length} images`)
    })
  } catch (err) {
    console.error("Scrape error:", err)
    setError(err instanceof Error ? err.message : "Failed to connect to server")
    setStatus("Error")
  } finally {
    setLoading(false)
  }
}
```

#### Step 2: Request Queue

```typescript
// File: hooks/use-request-queue.ts (lines 71-111)
const MAX_CONCURRENT_REQUESTS = 2

// Singleton state (shared across all component instances)
let activeCount = 0
let queue: QueueItem[] = []

const queueRequest = async <T,>(fn: () => Promise<T>): Promise<T> => {
  const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  return new Promise<T>((resolve, reject) => {
    const wrappedFn = async () => {
      try {
        const result = await fn()  // Execute the actual fetch
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }

    if (activeCount < MAX_CONCURRENT_REQUESTS) {
      // Execute immediately
      activeCount++
      wrappedFn().finally(() => {
        activeCount--
        processQueue()  // Check if queued items can now run
      })
    } else {
      // Add to queue
      queue.push({ id: requestId, execute: wrappedFn, resolve: () => {} })
    }
  })
}
```

**Why queue?**
- Prevents overwhelming external API
- Shows "2 requests ahead of you" message
- Improves UX during batch operations

#### Step 3: URL Validation (Server-Side)

```typescript
// File: app/api/scrape/route.ts (lines 8-70)
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { url, deepScrape = true } = body

  // 1. Check URL is provided
  if (!url) {
    return NextResponse.json<ScrapeResponse>(
      { success: false, images: [], error: 'URL is required' },
      { status: 400 }
    )
  }

  const trimmedUrl = url.trim()

  // 2. Block file:// URLs (security)
  if (trimmedUrl.match(/^file:\/\//i)) {
    return NextResponse.json<ScrapeResponse>(
      { success: false, images: [], error: 'Local file URLs are not supported.' },
      { status: 400 }
    )
  }

  // 3. Parse and validate URL format
  let parsedUrl: URL
  try {
    parsedUrl = new URL(trimmedUrl)
  } catch {
    try {
      parsedUrl = new URL(`https://${trimmedUrl}`)  // Try with https://
    } catch {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'Invalid URL format.' },
        { status: 400 }
      )
    }
  }

  // 4. Block localhost and internal IPs (security)
  const hostname = parsedUrl.hostname.toLowerCase()
  if (hostname === 'localhost' || hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
      hostname.startsWith('172.')) {
    return NextResponse.json<ScrapeResponse>(
      { success: false, images: [], error: 'Local or internal URLs are not supported.' },
      { status: 400 }
    )
  }

  // 5. Validate hostname has TLD
  if (!hostname.includes('.')) {
    return NextResponse.json<ScrapeResponse>(
      { success: false, images: [], error: 'Please enter a complete URL with domain.' },
      { status: 400 }
    )
  }

  // All validations passed! ✓
}
```

**Security measures:**
- Blocks SSRF attacks (Server-Side Request Forgery)
- Prevents access to internal network
- Validates URL format
- Returns descriptive error messages

#### Step 4: External API Call

```typescript
// File: app/api/scrape/route.ts (lines 72-125)

// Check environment configuration
if (!IMAGE_SCRAPER_API_URL) {
  return NextResponse.json<ScrapeResponse>(
    { success: false, images: [], error: 'Image Scraper API URL not configured' },
    { status: 500 }
  )
}

// Construct scraper URL
const scraperUrl = `${IMAGE_SCRAPER_API_URL}/images?url=${encodeURIComponent(trimmedUrl)}&deep_scrape=${deepScrape}`

// Call external API with 2-minute timeout
let scraperResponse: Response
try {
  scraperResponse = await fetch(scraperUrl, {
    signal: AbortSignal.timeout(120000),  // 2 minutes
  })
} catch (fetchError) {
  console.error('Image Scraper API fetch error:', fetchError)
  return NextResponse.json<ScrapeResponse>(
    {
      success: false,
      images: [],
      error: `Image Scraper API connection error: ${errorMessage}`
    },
    { status: 503 }
  )
}

// Check HTTP status
if (!scraperResponse.ok) {
  return NextResponse.json<ScrapeResponse>(
    { success: false, images: [], error: `API error: ${scraperResponse.status}` },
    { status: scraperResponse.status }
  )
}

// Parse JSON response
const scraperData: ImageScraperResponse = await scraperResponse.json()

// Check scraper status
if (scraperData.status === 'error') {
  return NextResponse.json<ScrapeResponse>(
    { success: false, images: [], error: scraperData.error || 'Scraping failed' },
    { status: 500 }
  )
}
```

**External API Response Format:**
```json
{
  "status": "success",
  "url": "https://example.com",
  "total": 25,
  "count": 25,
  "duplicates_removed": 5,
  "time_seconds": 2.3,
  "request_id": "abc123",
  "port_used": 5000,
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.png",
    ...
  ]
}
```

#### Step 5: Image Processing

```typescript
// File: app/api/scrape/route.ts (lines 127-137)
import { convertImageUrls } from '@/lib/parse-images'

// Convert image URLs to ImageData format
const images = convertImageUrls(scraperData.images || [])

return NextResponse.json<ScrapeResponse>({
  success: true,
  images,
  metadata: {
    total_found: images.length,
    url: trimmedUrl,
  },
})
```

**convertImageUrls() function:**

```typescript
// File: lib/parse-images.ts (lines 75-99)
export function convertImageUrls(urls: string[]): ImageData[] {
  // Deduplicate using normalized URLs
  const seen = new Set<string>()
  const uniqueUrls: string[] = []

  for (const url of urls) {
    // Normalize: removes size suffixes like _150x150, @2x, _thumb, etc.
    const normalizedUrl = normalizeImageUrl(url)

    if (!seen.has(normalizedUrl)) {
      seen.add(normalizedUrl)
      uniqueUrls.push(url)  // Keep original URL for display
    }
  }

  // Convert to ImageData objects
  return uniqueUrls.map((src, index) => ({
    id: index + 1,
    src,
    name: extractFilename(src),
    dimensions: 'Unknown',      // Filled by external API if available
    size: 'Unknown',            // Filled by external API if available
    defaultChecked: true,       // Pre-selected for download
  }))
}
```

**normalizeImageUrl() function:**

```typescript
// File: lib/parse-images.ts (lines 105-132)
function normalizeImageUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    let pathname = urlObj.pathname

    // Remove common size/dimension suffixes
    pathname = pathname.replace(/[-_]?\d+x\d+/gi, '')           // _150x150, -300x300
    pathname = pathname.replace(/[-_](thumb|small|medium|large)/gi, '')  // _thumb
    pathname = pathname.replace(/@\d+x/gi, '')                  // @2x, @3x
    pathname = pathname.replace(/[-_](preview|scaled)/gi, '')   // _preview
    pathname = pathname.replace(/[-_]w\d+/gi, '')               // _w300
    pathname = pathname.replace(/[-_]h\d+/gi, '')               // _h300

    // Normalize CDN paths
    pathname = pathname.replace(/\/\d+x\d+\//gi, '/')
    pathname = pathname.replace(/\/(thumb|small|medium|large)\//gi, '/')

    // Return without query params
    return `${urlObj.origin}${pathname}`.toLowerCase().replace(/\/$/, '')
  } catch {
    return url.toLowerCase().replace(/\/$/, '')
  }
}
```

**Examples of normalization:**
- `image_150x150.jpg` → `image.jpg`
- `photo@2x.png` → `photo.png`
- `pic_thumb.webp` → `pic.webp`
- `img.jpg?v=123` → `img.jpg`

#### Step 6: Filtering

```typescript
// File: app/page.tsx (lines 164-169)
const filteredImages = useMemo(() => {
  if (filters.selectedFormats.size === 0 &&
      filters.minWidth === 0 &&
      filters.selectedSourceUrls.size === 0) {
    return images  // No filters applied
  }
  return filterImages(images, filters.selectedFormats, filters.minWidth, filters.selectedSourceUrls)
}, [images, filters])
```

**filterImages() function:**

```typescript
// File: lib/filter-utils.ts (lines 36-69)
export function filterImages(
  images: ImageData[],
  selectedFormats: Set<string>,     // e.g., Set(['JPG', 'PNG'])
  minWidth: number,                  // e.g., 500
  selectedSourceUrls?: Set<string>   // For batch mode
): ImageData[] {
  return images.filter(image => {
    // Filter by format
    const ext = getFileExtension(image.name).toUpperCase()
    if (selectedFormats.size > 0 && !selectedFormats.has(ext)) {
      return false
    }

    // Filter by minimum width
    if (minWidth > 0 && image.dimensions !== 'Unknown') {
      const widthMatch = image.dimensions.match(/^(\d+)/)
      if (widthMatch) {
        const width = parseInt(widthMatch[1], 10)
        if (width < minWidth) return false
      }
    }

    // Filter by source URL (batch mode)
    if (selectedSourceUrls && selectedSourceUrls.size > 0 && image.sourceUrl) {
      if (!selectedSourceUrls.has(image.sourceUrl)) return false
    }

    return true
  })
}
```

#### Step 7: Display

```typescript
// File: app/page.tsx (lines 200-206)
<ImageGrid
  images={filteredImages}   // Filtered & processed images
  loading={loading}          // Show loading state
  error={error}              // Show error message if any
/>
```

**ImageGrid component:**

```typescript
// File: components/image-grid.tsx (simplified)
export function ImageGrid({ images, loading, error }: ImageGridProps) {
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set())

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  if (images.length === 0) return <EmptyState />

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          {...image}
          checked={selectedImages.has(image.id)}
          onToggle={() => toggleImage(image.id)}
        />
      ))}
    </div>
  )
}
```

**Complete flow summary:**
```
User Input → Queue → Validation → External API → Processing → Filtering → Display
   (300ms)   (0ms)    (10ms)        (2-5s)        (50ms)       (10ms)     (100ms)
```

### 3.2 Batch URL Extraction Flow

**Processing multiple URLs in parallel:**

```typescript
// File: app/page.tsx (lines 72-143)
const handleBatchScan = async (urls: string[]) => {
  setLoading(true)
  setError(undefined)
  setImages([])
  setStatus(`Processing ${urls.length} URLs...`)

  // Initialize progress tracking for each URL
  const initialProgress: BatchUrlState[] = urls.map(url => ({
    url,
    status: 'pending',
    imageCount: 0
  }))
  setBatchProgress(initialProgress)

  const allImages: ImageData[] = []
  let nextImageId = 1

  // Create parallel promises for each URL
  const promises = urls.map(async (url, index) => {
    try {
      // Update status: pending → processing
      setBatchProgress(prev => prev.map((item, i) =>
        i === index ? { ...item, status: 'processing' } : item
      ))

      // Fetch images for this URL
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, deepScrape }),
        credentials: 'include',
      })

      const data: ScrapeResponse = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Scrape failed')
      }

      // Add sourceUrl to track which URL each image came from
      const imagesWithSource = data.images.map(img => ({
        ...img,
        id: nextImageId++,
        sourceUrl: url
      }))

      allImages.push(...imagesWithSource)

      // Update status: processing → completed
      setBatchProgress(prev => prev.map((item, i) =>
        i === index ? {
          ...item,
          status: 'completed',
          imageCount: data.images.length
        } : item
      ))
    } catch (err) {
      // Update status: processing → failed
      setBatchProgress(prev => prev.map((item, i) =>
        i === index ? {
          ...item,
          status: 'failed',
          error: err instanceof Error ? err.message : 'Unknown error'
        } : item
      ))
    }
  })

  // Wait for all requests to complete
  await Promise.all(promises)

  // Deduplicate images across all URLs
  const { uniqueImages, duplicatesRemoved } = deduplicateImages(allImages)

  setImages(uniqueImages)
  const successCount = batchProgress.filter(p => p.status === 'completed').length
  const duplicateText = duplicatesRemoved > 0
    ? ` (${duplicatesRemoved} duplicates removed)`
    : ''
  setStatus(`Found ${uniqueImages.length} images from ${successCount} URLs${duplicateText}`)
  setLoading(false)
}
```

**Deduplication logic:**

```typescript
// File: lib/deduplicate-images.ts (lines 50-74)
export function deduplicateImages(images: ImageData[]): DeduplicationResult {
  const seen = new Set<string>()
  const uniqueImages: ImageData[] = []
  let duplicatesRemoved = 0

  for (const image of images) {
    const normalizedUrl = normalizeImageUrl(image.src)

    if (!seen.has(normalizedUrl)) {
      seen.add(normalizedUrl)
      uniqueImages.push(image)
    } else {
      duplicatesRemoved++
    }
  }

  // Re-assign IDs to maintain sequential ordering
  return {
    uniqueImages: uniqueImages.map((img, index) => ({ ...img, id: index + 1 })),
    duplicatesRemoved
  }
}
```

**Why deduplication is needed:**
- Different URLs may have same images
- Same site might use same header/logo across pages
- CDN URLs might differ but point to same image
- Removes noise and improves UX

### 3.3 Request Queue System (Concurrency Control)

**Problem:** Without a queue, users could trigger 100 simultaneous requests, overwhelming the external API and browser.

**Solution:** Singleton queue that limits to 2 concurrent requests.

```typescript
// File: hooks/use-request-queue.ts (complete implementation)

const MAX_CONCURRENT_REQUESTS = 2

interface QueueItem {
  id: string
  execute: () => Promise<void>
  resolve: () => void
}

// Singleton state (shared across ALL component instances)
let activeCount = 0
let queue: QueueItem[] = []
let listeners: Set<() => void> = new Set()

const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

const processQueue = () => {
  while (activeCount < MAX_CONCURRENT_REQUESTS && queue.length > 0) {
    const item = queue.shift()!
    activeCount++
    notifyListeners()

    item.execute().finally(() => {
      activeCount--
      item.resolve()
      notifyListeners()
      processQueue()  // Try to process next item
    })
  }
}

export function useRequestQueue(): UseRequestQueueReturn {
  const [, forceUpdate] = useState({})
  const requestIdRef = useRef<string | null>(null)

  // Subscribe to queue updates
  useEffect(() => {
    const update = () => forceUpdate({})
    listeners.add(update)
    return () => listeners.delete(update)
  }, [])

  const queueRequest = useCallback(async <T,>(fn: () => Promise<T>): Promise<T> => {
    const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    requestIdRef.current = requestId

    return new Promise<T>((resolve, reject) => {
      const wrappedFn = async () => {
        try {
          const result = await fn()
          resolve(result)
        } catch (error) {
          reject(error)
        } finally {
          requestIdRef.current = null
        }
      }

      if (activeCount < MAX_CONCURRENT_REQUESTS) {
        // Execute immediately
        activeCount++
        notifyListeners()

        wrappedFn().finally(() => {
          activeCount--
          notifyListeners()
          processQueue()
        })
      } else {
        // Add to queue
        queue.push({ id: requestId, execute: wrappedFn, resolve: () => {} })
        notifyListeners()
      }
    })
  }, [])

  const queuePosition = requestIdRef.current
    ? queue.findIndex(item => item.id === requestIdRef.current) + 1
    : -1

  return {
    isQueued: queuePosition > 0,
    queuePosition,
    activeCount,
    queueLength: queue.length,
    queueRequest,
  }
}
```

**UI Integration:**

```typescript
// File: app/page.tsx (lines 31-32)
const { isQueued, queuePosition, queueRequest } = useRequestQueue()

// File: components/search-section.tsx
{isQueued && (
  <div className="text-sm text-gray-600">
    {queuePosition > 0
      ? `${queuePosition} requests ahead of you...`
      : 'Processing your request...'}
  </div>
)}
```

---

## 4. Key Components Deep Dive

### 4.1 SearchSection Component

**File:** `components/search-section.tsx`

**Purpose:** Input interface for URL entry with single/batch mode toggle

**Key Features:**
- Single URL input field
- Batch URL textarea (multiple URLs)
- Mode toggle: Single ↔ Batch
- Deep/Quick scan toggle
- Progress bar with animation
- Queue status display

**Component Structure:**

```typescript
interface SearchSectionProps {
  onScan: (urls: string | string[]) => Promise<void>
  isLoading?: boolean
  status?: string
  isQueued?: boolean
  queuePosition?: number
  batchProgress?: BatchUrlState[]
  batchMode?: boolean
  onBatchModeChange?: (mode: boolean) => void
  deepScrape?: boolean
  onDeepScrapeChange?: (deep: boolean) => void
}

export function SearchSection({
  onScan,
  isLoading,
  status,
  isQueued,
  queuePosition,
  batchProgress,
  batchMode,
  onBatchModeChange,
  deepScrape,
  onDeepScrapeChange
}: SearchSectionProps) {
  const [url, setUrl] = useState("")
  const [batchUrls, setBatchUrls] = useState("")

  const handleSubmit = async () => {
    if (batchMode) {
      const urls = parseUrlsFromInput(batchUrls, 5)
      await onScan(urls)
    } else {
      await onScan(url)
    }
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex gap-2">
        <button onClick={() => onBatchModeChange?.(false)}>
          Single URL
        </button>
        <button onClick={() => onBatchModeChange?.(true)}>
          Batch Mode
        </button>
      </div>

      {/* Input field */}
      {batchMode ? (
        <textarea
          value={batchUrls}
          onChange={(e) => setBatchUrls(e.target.value)}
          placeholder="Enter multiple URLs (one per line)"
        />
      ) : (
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
        />
      )}

      {/* Scan button */}
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Scanning..." : "Scan for Images"}
      </button>

      {/* Progress bar */}
      {isLoading && <ProgressBar />}

      {/* Queue status */}
      {isQueued && <QueueStatus position={queuePosition} />}

      {/* Batch progress */}
      {batchProgress && <BatchUrlProgress items={batchProgress} />}
    </div>
  )
}
```

### 4.2 ImageGrid Component

**File:** `components/image-grid.tsx`

**Purpose:** Display extracted images with selection and download capabilities

**Key Features:**
- Masonry grid layout (responsive)
- Image selection (checkbox)
- Select all / Deselect all
- Sort by: size, name, dimensions
- Download selected as ZIP
- Progress tracking for downloads
- Mobile action bar

**Core Implementation:**

```typescript
export function ImageGrid({ images, loading, error }: ImageGridProps) {
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set())
  const [sortBy, setSortBy] = useState<SortOption>('size')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState<{current: number; total: number} | null>(null)

  // Memoized sorted images (performance optimization)
  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => {
      switch (sortBy) {
        case 'size':
          return parseSizeToBytes(b.size) - parseSizeToBytes(a.size)
        case 'name':
          return a.name.localeCompare(b.name)
        case 'dimensions':
          return parseDimensionsToPixels(b.dimensions) - parseDimensionsToPixels(a.dimensions)
        default:
          return 0
      }
    })
  }, [images, sortBy])

  // Select/deselect image (useCallback for stable reference)
  const handleToggleImage = useCallback((id: number) => {
    setSelectedImages(prev => {
      const newSelected = new Set(prev)
      if (newSelected.has(id)) {
        newSelected.delete(id)
      } else {
        newSelected.add(id)
      }
      return newSelected
    })
  }, [])

  // Select all images
  const handleSelectAll = useCallback(() => {
    setSelectedImages(new Set(images.map(img => img.id)))
  }, [images])

  // Download selected images as ZIP
  const handleDownloadSelected = async () => {
    const zip = new JSZip()
    const selectedImageList = sortedImages.filter(img => selectedImages.has(img.id))
    setIsDownloading(true)

    for (const [index, img] of selectedImageList.entries()) {
      try {
        const response = await fetch(img.src)
        const blob = await response.blob()
        zip.file(img.name, blob)
        setDownloadProgress({ current: index + 1, total: selectedImageList.length })
      } catch (err) {
        console.error(`Failed to download ${img.name}:`, err)
      }
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' })
    saveAs(zipBlob, 'images.zip')

    setIsDownloading(false)
    setDownloadProgress(null)
  }

  return (
    <div>
      {/* Header: Select all, Sort options */}
      <div className="flex justify-between mb-4">
        <button onClick={handleSelectAll}>Select All</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
          <option value="size">Sort by Size</option>
          <option value="name">Sort by Name</option>
          <option value="dimensions">Sort by Dimensions</option>
        </select>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedImages.map((image) => (
          <ImageCard
            key={image.id}
            {...image}
            checked={selectedImages.has(image.id)}
            onToggle={() => handleToggleImage(image.id)}
          />
        ))}
      </div>

      {/* Download toolbar */}
      {selectedImages.size > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <button onClick={handleDownloadSelected} disabled={isDownloading}>
            {isDownloading
              ? `Downloading ${downloadProgress?.current}/${downloadProgress?.total}...`
              : `Download ${selectedImages.size} images`}
          </button>
        </div>
      )}
    </div>
  )
}
```

### 4.3 FiltersSidebar Component

**File:** `components/filters-sidebar.tsx`

**Purpose:** Advanced filtering controls for images

**Filters Available:**
1. **Format filter**: JPG, PNG, WebP, GIF, SVG, etc.
2. **Minimum width filter**: Slider (0-2000px)
3. **Source URL filter**: In batch mode, filter by which URL

**Implementation:**

```typescript
export function FiltersSidebar({ images, onFiltersChange }: FiltersSidebarProps) {
  const [minWidth, setMinWidth] = useState(0)
  const [selectedFormats, setSelectedFormats] = useState<Set<string>>(new Set())
  const [selectedSourceUrls, setSelectedSourceUrls] = useState<Set<string>>(new Set())

  // Calculate available formats and their counts
  const stats = useMemo(() => calculateFilterStats(images), [images])

  // Notify parent whenever filters change
  useEffect(() => {
    onFiltersChange({ selectedFormats, minWidth, selectedSourceUrls })
  }, [minWidth, selectedFormats, selectedSourceUrls, onFiltersChange])

  const toggleFormat = (format: string) => {
    setSelectedFormats(prev => {
      const newSet = new Set(prev)
      if (newSet.has(format)) {
        newSet.delete(format)
      } else {
        newSet.add(format)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-6">
      {/* Format filter */}
      <div>
        <h3 className="font-medium mb-2">Image Format</h3>
        {Object.entries(stats.formats).map(([format, count]) => (
          <label key={format} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFormats.has(format)}
              onChange={() => toggleFormat(format)}
            />
            <span>{format} ({count})</span>
          </label>
        ))}
      </div>

      {/* Minimum width filter */}
      <div>
        <h3 className="font-medium mb-2">Minimum Width</h3>
        <input
          type="range"
          min="0"
          max="2000"
          step="50"
          value={minWidth}
          onChange={(e) => setMinWidth(parseInt(e.target.value))}
        />
        <span>{minWidth}px</span>
      </div>

      {/* Source URL filter (batch mode only) */}
      {selectedSourceUrls.size > 0 && (
        <div>
          <h3 className="font-medium mb-2">Source URL</h3>
          {/* List of source URLs with checkboxes */}
        </div>
      )}
    </div>
  )
}
```

### 4.4 API Route Handler

**File:** `app/api/scrape/route.ts`

**Purpose:** Server-side endpoint for image scraping

**Complete implementation with all error handling:**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { convertImageUrls } from '@/lib/parse-images'
import { ScrapeResponse, ImageScraperResponse } from '@/lib/types/scraper'

const IMAGE_SCRAPER_API_URL = process.env.IMAGE_SCRAPER_API_URL

export async function POST(request: NextRequest) {
  try {
    // 1. Parse request body
    const body = await request.json()
    const { url, deepScrape = true } = body

    // 2. Validate URL is provided
    if (!url) {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'URL is required' },
        { status: 400 }
      )
    }

    const trimmedUrl = url.trim()

    // 3. Security: Block file:// URLs
    if (trimmedUrl.match(/^file:\/\//i)) {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'Local file URLs are not supported.' },
        { status: 400 }
      )
    }

    // 4. Validate URL format
    let parsedUrl: URL
    try {
      parsedUrl = new URL(trimmedUrl)
    } catch {
      try {
        parsedUrl = new URL(`https://${trimmedUrl}`)
      } catch {
        return NextResponse.json<ScrapeResponse>(
          { success: false, images: [], error: 'Invalid URL format.' },
          { status: 400 }
        )
      }
    }

    // 5. Security: Block localhost and internal IPs
    const hostname = parsedUrl.hostname.toLowerCase()
    if (hostname === 'localhost' || hostname === '127.0.0.1' ||
        hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
        hostname.startsWith('172.')) {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'Local or internal URLs are not supported.' },
        { status: 400 }
      )
    }

    // 6. Validate hostname has TLD
    if (!hostname.includes('.')) {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'Please enter a complete URL with domain.' },
        { status: 400 }
      )
    }

    // 7. Check environment configuration
    if (!IMAGE_SCRAPER_API_URL) {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: 'Image Scraper API URL not configured' },
        { status: 500 }
      )
    }

    // 8. Call external Image Scraper API
    const scraperUrl = `${IMAGE_SCRAPER_API_URL}/images?url=${encodeURIComponent(trimmedUrl)}&deep_scrape=${deepScrape}`

    let scraperResponse: Response
    try {
      scraperResponse = await fetch(scraperUrl, {
        signal: AbortSignal.timeout(120000),  // 2 minute timeout
      })
    } catch (fetchError) {
      console.error('Image Scraper API fetch error:', fetchError)
      const errorMessage = fetchError instanceof Error ? fetchError.message : 'Connection failed'
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: `Connection error: ${errorMessage}` },
        { status: 503 }
      )
    }

    // 9. Check HTTP status
    if (!scraperResponse.ok) {
      const errorText = await scraperResponse.text()
      console.error('Image Scraper API error:', errorText)
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: `API error: ${scraperResponse.status}` },
        { status: scraperResponse.status }
      )
    }

    // 10. Parse JSON response
    const scraperData: ImageScraperResponse = await scraperResponse.json()

    // 11. Check scraper status
    if (scraperData.status === 'error') {
      return NextResponse.json<ScrapeResponse>(
        { success: false, images: [], error: scraperData.error || 'Scraping failed' },
        { status: 500 }
      )
    }

    // 12. Convert image URLs to ImageData format
    const images = convertImageUrls(scraperData.images || [])

    // 13. Return success response
    return NextResponse.json<ScrapeResponse>({
      success: true,
      images,
      metadata: {
        total_found: images.length,
        url: trimmedUrl,
      },
    })

  } catch (error) {
    // Catch-all error handler
    console.error('Scrape API error:', error)
    return NextResponse.json<ScrapeResponse>(
      {
        success: false,
        images: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
```

**Error handling strategy:**
- **400 errors**: Bad request (invalid URL, missing params)
- **500 errors**: Server error (API down, scraper failed)
- **503 errors**: Service unavailable (connection failed, timeout)
- Always return JSON with `success: false` and descriptive error message

---

## 5. Type System

**File:** `lib/types/scraper.ts`

### 5.1 Core Type Definitions

```typescript
// Individual image data structure
export interface ImageData {
  id: number                    // Sequential ID (1, 2, 3, ...)
  src: string                   // Full image URL
  name: string                  // Extracted filename for download
  dimensions: string            // "WxH" (e.g., "1920x1080") or "Unknown"
  size: string                  // File size (e.g., "2.5MB") or "Unknown"
  defaultChecked: boolean       // Pre-selected for batch download
  sourceUrl?: string            // Track which URL (batch mode only)
}

// Request payload sent to API
export interface ScrapeRequest {
  url: string                   // Website URL to scrape
  deepScrape?: boolean          // Optional: enable deep scanning
}

// Response from our API route
export interface ScrapeResponse {
  success: boolean              // Request succeeded or failed
  images: ImageData[]           // Array of extracted images
  error?: string                // Error message if success=false
  metadata?: {
    company_name?: string
    company_description?: string
    total_found: number         // Total images found
    url: string                 // Original URL requested
  }
}

// Response from external Image Scraper API
export interface ImageScraperResponse {
  status: 'success' | 'error'
  url: string
  total: number
  count: number
  duplicates_removed: number
  time_seconds: number
  request_id: string
  port_used: number
  images: string[]              // Array of image URLs
  error?: string
  error_type?: string
}

// Batch URL processing state
export interface BatchUrlState {
  url: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  imageCount: number
  error?: string
}
```

### 5.2 Type Flow Through Application

```typescript
// 1. User Input → Request
const requestBody: ScrapeRequest = { url: "https://example.com", deepScrape: true }

// 2. Fetch API
fetch("/api/scrape", {
  method: "POST",
  body: JSON.stringify(requestBody)
})

// 3. API receives request → Calls external API
const scraperData: ImageScraperResponse = await externalApi.json()

// 4. Convert to our format
const images: ImageData[] = convertImageUrls(scraperData.images)

// 5. Return response
const response: ScrapeResponse = {
  success: true,
  images,
  metadata: { total_found: images.length, url: trimmedUrl }
}

// 6. Client receives response
const data: ScrapeResponse = await response.json()

// 7. Update state
setImages(data.images)  // images: ImageData[]
```

### 5.3 Type Guards & Validation

```typescript
// Type guard for checking if response is successful
function isScrapeSuccess(response: ScrapeResponse): response is ScrapeResponse & { success: true, images: ImageData[] } {
  return response.success === true && Array.isArray(response.images)
}

// Usage
const data = await response.json()
if (isScrapeSuccess(data)) {
  setImages(data.images)  // TypeScript knows images exists
} else {
  setError(data.error || "Unknown error")
}
```

---

## 6. Utility Functions

### 6.1 URL Parsing and Validation

**File:** `lib/parse-urls.ts`

```typescript
/**
 * Parse URLs from textarea input (supports newlines, commas, spaces)
 * Deduplicates and limits to max URLs
 */
export function parseUrlsFromInput(input: string, maxUrls: number = 5): string[] {
  if (!input || input.trim().length === 0) {
    return []
  }

  // Split by newlines, commas, or multiple spaces
  const urls = input
    .split(/[\n,]+/)
    .map(url => url.trim())
    .filter(url => url.length > 0)

  // Deduplicate while preserving order
  const unique = Array.from(new Set(urls))

  // Limit to max URLs
  return unique.slice(0, maxUrls)
}

/**
 * Validate URLs and separate into valid/invalid lists
 * Performs basic security validation without modifying the URL
 */
export function validateUrls(urls: string[]): { valid: string[]; invalid: string[] } {
  const valid: string[] = []
  const invalid: string[] = []

  urls.forEach(url => {
    try {
      // Block file:// URLs for security
      if (url.match(/^file:\/\//i)) {
        invalid.push(url)
        return
      }

      // Validate using URL constructor
      let parsed: URL
      try {
        parsed = new URL(url)
      } catch {
        try {
          parsed = new URL(`https://${url}`)  // Try with https://
        } catch {
          invalid.push(url)
          return
        }
      }

      // Block localhost and internal IPs
      const hostname = parsed.hostname.toLowerCase()
      if (hostname === 'localhost' || hostname === '127.0.0.1' ||
          hostname.startsWith('192.168.') || hostname.startsWith('10.') ||
          hostname.startsWith('172.')) {
        invalid.push(url)
        return
      }

      // Must have hostname with domain
      if (parsed.hostname && parsed.hostname.includes('.')) {
        valid.push(url)  // Use original URL
      } else {
        invalid.push(url)
      }
    } catch {
      invalid.push(url)
    }
  })

  return { valid, invalid }
}

/**
 * Extract hostname from URL for display
 */
export function getHostname(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
```

**Example usage:**

```typescript
// Parse multiple URLs
const input = `
https://example.com
https://test.com
example.org
`
const urls = parseUrlsFromInput(input, 5)
// Result: ["https://example.com", "https://test.com", "example.org"]

// Validate URLs
const { valid, invalid } = validateUrls(urls)
// valid: ["https://example.com", "https://test.com", "example.org"]
// invalid: []

// Invalid examples
const badUrls = ["file:///path", "localhost:3000", "not a url"]
const { valid: v, invalid: i } = validateUrls(badUrls)
// valid: []
// invalid: ["file:///path", "localhost:3000", "not a url"]
```

### 6.2 Image URL Normalization

**File:** `lib/parse-images.ts`

See Section 3.1 Step 5 for complete `normalizeImageUrl()` implementation.

### 6.3 Image Filtering

**File:** `lib/filter-utils.ts`

```typescript
/**
 * Calculate filter statistics from images
 * Returns count of each format
 */
export function calculateFilterStats(images: ImageData[]): FilterStats {
  const formats: Record<string, number> = {}

  images.forEach(image => {
    const ext = getFileExtension(image.name).toUpperCase()
    formats[ext] = (formats[ext] || 0) + 1
  })

  return {
    formats,
    totalCount: images.length,
  }
}

/**
 * Get file extension from filename
 */
function getFileExtension(filename: string): string {
  const match = filename.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/)
  return match ? match[1].toLowerCase() : 'unknown'
}

/**
 * Filter images based on selected filters
 */
export function filterImages(
  images: ImageData[],
  selectedFormats: Set<string>,
  minWidth: number,
  selectedSourceUrls?: Set<string>
): ImageData[] {
  return images.filter(image => {
    // Format filter
    const ext = getFileExtension(image.name).toUpperCase()
    if (selectedFormats.size > 0 && !selectedFormats.has(ext)) {
      return false
    }

    // Width filter (if dimensions are known)
    if (minWidth > 0 && image.dimensions !== 'Unknown') {
      const widthMatch = image.dimensions.match(/^(\d+)/)
      if (widthMatch) {
        const width = parseInt(widthMatch[1], 10)
        if (width < minWidth) return false
      }
    }

    // Source URL filter (batch mode)
    if (selectedSourceUrls && selectedSourceUrls.size > 0 && image.sourceUrl) {
      if (!selectedSourceUrls.has(image.sourceUrl)) return false
    }

    return true
  })
}
```

**Example usage:**

```typescript
const images: ImageData[] = [
  { id: 1, src: "...", name: "photo.jpg", dimensions: "1920x1080", size: "2MB", defaultChecked: true },
  { id: 2, src: "...", name: "icon.png", dimensions: "64x64", size: "10KB", defaultChecked: true },
  { id: 3, src: "...", name: "banner.webp", dimensions: "2000x500", size: "500KB", defaultChecked: true },
]

// Calculate stats
const stats = calculateFilterStats(images)
// Result: { formats: { JPG: 1, PNG: 1, WEBP: 1 }, totalCount: 3 }

// Filter by format
const filtered = filterImages(images, new Set(['JPG', 'PNG']), 0)
// Result: Only JPG and PNG images (excludes WEBP)

// Filter by minimum width
const largeImages = filterImages(images, new Set(), 1000)
// Result: Only images >= 1000px wide (photo.jpg, banner.webp)
```

### 6.4 Image Deduplication

See Section 3.2 for complete `deduplicateImages()` implementation.

---

## 7. SEO & Configuration

### 7.1 Centralized Page Configuration

**File:** `lib/pages-config.ts`

**Purpose:** Single source of truth for all 25+ tool pages

```typescript
export interface PageConfig {
  slug: string          // URL slug (e.g., "image-downloader")
  title: string         // Full page title for <title> tag
  shortTitle: string    // Display name in navigation
  description: string   // Meta description
  keywords: string[]    // SEO keywords
  icon: string          // Lucide icon name
  priority: number      // Sitemap priority (0.0 - 1.0)
}

export const siteConfig = {
  name: "ExtractPics",
  url: "https://extractpics.com",
  description: "ExtractPics is a free online tool for bulk downloading images from any website. Preview, filter by size/format, and download instantly. No login needed.",
}

export const pages: PageConfig[] = [
  {
    slug: "",  // Homepage
    title: "Extract Images from Websites Free | Bulk Download Tool",
    shortTitle: "Home",
    description: siteConfig.description,
    keywords: ["image extractor", "bulk image downloader", "website image grabber"],
    icon: "Home",
    priority: 1.0,
  },
  {
    slug: "image-downloader",
    title: "Free Image Downloader - Download Images from Any Website",
    shortTitle: "Image Downloader",
    description: "Download images from any website instantly...",
    keywords: ["image downloader", "download images", "bulk download"],
    icon: "Download",
    priority: 0.9,
  },
  // ... 25+ more pages
]

// Helper functions
export function getPageBySlug(slug: string): PageConfig | undefined {
  return pages.find(page => page.slug === slug)
}

export function getRelatedPages(currentSlug: string): PageConfig[] {
  return pages.filter(page => page.slug !== currentSlug)
}

export function getSitemapEntries() {
  return pages.map(page => ({
    url: `${siteConfig.url}${page.slug ? `/${page.slug}` : ""}`,
    priority: page.priority,
  }))
}
```

### 7.2 Using Page Configuration

```typescript
// In a page's layout.tsx
import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/pages-config'

const pageConfig = getPageBySlug("image-downloader")!

export const metadata: Metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
  keywords: pageConfig.keywords,
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
  },
  alternates: {
    canonical: `/${pageConfig.slug}`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

### 7.3 Root Layout SEO

**File:** `app/layout.tsx` (lines 18-123)

**Comprehensive SEO implementation:**

```typescript
export const metadata: Metadata = {
  // Basic meta tags
  title: {
    default: "Extract Images from Websites Free | Bulk Download Tool",
    template: "%s | ExtractPics"  // Page title | Site name
  },
  description: siteConfig.description,
  keywords: [
    "image extractor",
    "image scraper",
    "download images from website",
    "bulk image downloader",
    // ... 40+ keywords
  ],
  authors: [{ name: "ExtractPics", url: siteConfig.url }],
  creator: "ExtractPics",
  publisher: "ExtractPics",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Extract Images from Websites Free | Bulk Download Tool",
    description: siteConfig.description,
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "ExtractPics - Extract images from any website",
    }],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Extract Images from Websites Free | Bulk Download Tool",
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
    creator: "@extractpics",
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  // Category
  category: "technology",
}
```

### 7.4 JSON-LD Structured Data

**File:** `app/layout.tsx` (lines 136-225)

```typescript
// WebSite Schema (enables sitelinks searchbox)
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ExtractPics",
  "alternateName": ["Extract Pics", "ExtractPics.com"],
  "url": siteConfig.url,
  "description": siteConfig.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

// WebApplication Schema
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ExtractPics",
  "url": siteConfig.url,
  "description": siteConfig.description,
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Bulk image download from any website",
    "Filter images by format (JPG, PNG, WebP, GIF, SVG)",
    "Download all images as ZIP",
    "No registration required",
  ],
}

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ExtractPics",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/logo.png`,
  "description": siteConfig.description
}

// SiteNavigationElement Schema (Google sitelinks)
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      "name": "Image Downloader",
      "description": "Download images from any website instantly...",
      "url": `${siteConfig.url}/image-downloader`
    },
    // ... more navigation elements
  ]
}

// Inject into <head>
<head>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
</head>
```

**Benefits:**
- **Sitelinks searchbox**: Google shows search box in results
- **Rich snippets**: Better search result appearance
- **Knowledge panel**: Organization info in Google
- **Breadcrumbs**: Structured navigation in search results

---

## 8. Common Development Tasks

### 8.1 Adding a New Tool Page

**Scenario:** Add a new "Instagram Image Saver" page

**Step 1: Add to pages-config.ts**

```typescript
// File: lib/pages-config.ts
{
  slug: "instagram-image-saver",
  title: "Instagram Image Saver - Download Instagram Photos Free",
  shortTitle: "Instagram Saver",
  description: "Save images from Instagram posts and profiles...",
  keywords: ["instagram saver", "download instagram images", "instagram downloader"],
  icon: "Instagram",
  priority: 0.85,
}
```

**Step 2: Create directory and files**

```bash
mkdir app/instagram-image-saver
touch app/instagram-image-saver/layout.tsx
touch app/instagram-image-saver/page.tsx
```

**Step 3: Implement layout.tsx**

```typescript
// File: app/instagram-image-saver/layout.tsx
import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/pages-config'

const pageConfig = getPageBySlug("instagram-image-saver")!

export const metadata: Metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
  keywords: pageConfig.keywords,
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
  },
  alternates: {
    canonical: `/${pageConfig.slug}`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

**Step 4: Implement page.tsx**

```typescript
// File: app/instagram-image-saver/page.tsx
// Copy implementation from app/image-downloader/page.tsx
// The extraction logic is identical for all pages

"use client"

import { useState, useCallback, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { LandingHero } from "@/components/landing-hero"
import { ImageGrid } from "@/components/image-grid"
// ... rest of imports

export default function InstagramImageSaver() {
  // Same state management as app/page.tsx
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(false)
  // ... rest of state

  // Same handlers as app/page.tsx
  const handleScan = async (url: string) => {
    // ... scan logic
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <LandingHero
          title="Instagram Image Saver"
          subtitle="Save images from Instagram posts and profiles..."
          onScan={handleScan}
          isLoading={loading}
        />
        <ImageGrid images={images} loading={loading} />
      </main>
      <Footer />
    </div>
  )
}
```

**Done!** Your new page is live at `/instagram-image-saver`

### 8.2 Modifying the API Endpoint

**Scenario:** Add caching to reduce external API calls

```typescript
// File: app/api/scrape/route.ts

// Add at top of file
const cache = new Map<string, { data: ScrapeResponse; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000  // 5 minutes

export async function POST(request: NextRequest) {
  const { url, deepScrape = true } = await request.json()
  const cacheKey = `${url}-${deepScrape}`

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log('Cache hit:', cacheKey)
    return NextResponse.json(cached.data)
  }

  // ... existing validation and API call logic ...

  const response: ScrapeResponse = {
    success: true,
    images,
    metadata: { total_found: images.length, url: trimmedUrl }
  }

  // Store in cache
  cache.set(cacheKey, { data: response, timestamp: Date.now() })

  return NextResponse.json(response)
}
```

### 8.3 Adding a New Filter

**Scenario:** Add aspect ratio filter (landscape, portrait, square)

**Step 1: Update FiltersSidebar component**

```typescript
// File: components/filters-sidebar.tsx

const [aspectRatio, setAspectRatio] = useState<string>('all')

// Add to onFiltersChange callback
const handleApplyFilters = () => {
  onFiltersChange({
    selectedFormats,
    minWidth,
    selectedSourceUrls,
    aspectRatio,  // New filter
  })
}

// Add UI
<div>
  <h3 className="font-medium mb-2">Aspect Ratio</h3>
  <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)}>
    <option value="all">All</option>
    <option value="landscape">Landscape (wider than tall)</option>
    <option value="portrait">Portrait (taller than wide)</option>
    <option value="square">Square</option>
  </select>
</div>
```

**Step 2: Update filter-utils.ts**

```typescript
// File: lib/filter-utils.ts

export function filterImages(
  images: ImageData[],
  selectedFormats: Set<string>,
  minWidth: number,
  selectedSourceUrls?: Set<string>,
  aspectRatio?: string  // New parameter
): ImageData[] {
  return images.filter(image => {
    // ... existing filters ...

    // Aspect ratio filter
    if (aspectRatio && aspectRatio !== 'all' && image.dimensions !== 'Unknown') {
      const [width, height] = image.dimensions.split('x').map(Number)
      const ratio = width / height

      if (aspectRatio === 'landscape' && ratio <= 1) return false
      if (aspectRatio === 'portrait' && ratio >= 1) return false
      if (aspectRatio === 'square' && Math.abs(ratio - 1) > 0.1) return false
    }

    return true
  })
}
```

**Step 3: Update parent component**

```typescript
// File: app/page.tsx

const [filters, setFilters] = useState({
  selectedFormats: new Set<string>(),
  minWidth: 0,
  selectedSourceUrls: new Set<string>(),
  aspectRatio: 'all',  // New filter
})

const filteredImages = useMemo(() => {
  return filterImages(
    images,
    filters.selectedFormats,
    filters.minWidth,
    filters.selectedSourceUrls,
    filters.aspectRatio  // Pass new filter
  )
}, [images, filters])
```

### 8.4 Adding Analytics Tracking

**Scenario:** Track extraction events with Vercel Analytics

```typescript
// File: app/page.tsx
import { track } from '@vercel/analytics'

const handleSingleScan = async (url: string) => {
  // Track extraction started
  track('image_extraction_started', {
    url_hostname: new URL(url).hostname,
    mode: 'single',
    deep_scrape: deepScrape,
  })

  try {
    // ... existing scan logic ...

    // Track success
    track('image_extraction_completed', {
      url_hostname: new URL(url).hostname,
      image_count: data.images.length,
      mode: 'single',
      duration_ms: Date.now() - startTime,
    })
  } catch (err) {
    // Track error
    track('image_extraction_failed', {
      url_hostname: new URL(url).hostname,
      error: err.message,
      mode: 'single',
    })
  }
}
```

### 8.5 Performance Optimization

**Scenario:** Add virtual scrolling for large image sets

```bash
npm install react-window
```

```typescript
// File: components/image-grid.tsx
import { FixedSizeGrid } from 'react-window'

export function ImageGrid({ images }: ImageGridProps) {
  const COLUMN_COUNT = 4
  const COLUMN_WIDTH = 250
  const ROW_HEIGHT = 300

  return (
    <FixedSizeGrid
      columnCount={COLUMN_COUNT}
      columnWidth={COLUMN_WIDTH}
      height={800}
      rowCount={Math.ceil(images.length / COLUMN_COUNT)}
      rowHeight={ROW_HEIGHT}
      width={1200}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * COLUMN_COUNT + columnIndex
        if (index >= images.length) return null

        return (
          <div style={style}>
            <ImageCard {...images[index]} />
          </div>
        )
      }}
    </FixedSizeGrid>
  )
}
```

---

## 9. Troubleshooting Guide

### 9.1 Common Issues

#### Issue 1: API returns 503 error

**Symptom:**
```
Error: Image Scraper API connection error: Connection failed
```

**Cause:** External API is down or `IMAGE_SCRAPER_API_URL` is misconfigured

**Solution:**

```bash
# Check .env.local file
cat .env.local
# Should contain: IMAGE_SCRAPER_API_URL=https://api.excusegenerator.fun

# If missing, add it
echo "IMAGE_SCRAPER_API_URL=https://api.excusegenerator.fun" >> .env.local

# Restart dev server
npm run dev
```

#### Issue 2: Queue not working, multiple concurrent requests

**Symptom:** More than 2 requests execute simultaneously

**Cause:** Queue singleton state reset or multiple app instances

**Solution:**

```typescript
// File: hooks/use-request-queue.ts
// Debug queue stats
import { getQueueStats } from '@/hooks/use-request-queue'

console.log('Queue stats:', getQueueStats())
// Should show: { activeCount: 0-2, queueLength: 0-N }

// Check if listeners are properly set up
useEffect(() => {
  const update = () => forceUpdate({})
  listeners.add(update)
  return () => listeners.delete(update)  // Important: cleanup
}, [])
```

#### Issue 3: Images not deduplicating in batch mode

**Symptom:** Same images appear multiple times

**Cause:** Deduplication function not called or URL normalization failing

**Solution:**

```typescript
// File: app/page.tsx (line 136)
// Ensure deduplicateImages is called AFTER Promise.all
await Promise.all(promises)

// CORRECT:
const { uniqueImages, duplicatesRemoved } = deduplicateImages(allImages)
setImages(uniqueImages)  // Use uniqueImages, NOT allImages

// INCORRECT:
setImages(allImages)  // ❌ Duplicates will appear

// Debug normalization
import { normalizeImageUrl } from '@/lib/deduplicate-images'
console.log(normalizeImageUrl('image_150x150.jpg'))  // Should be 'image.jpg'
```

#### Issue 4: Filters not working

**Symptom:** Images don't filter when changing filter options

**Cause:** useMemo dependencies incorrect or filter logic broken

**Solution:**

```typescript
// File: app/page.tsx
// Check useMemo dependencies
const filteredImages = useMemo(() => {
  return filterImages(images, filters.selectedFormats, filters.minWidth)
}, [images, filters])  // ✅ Must include BOTH dependencies

// Common mistakes:
}, [images])  // ❌ Missing filters dependency
}, [])        // ❌ No dependencies (only runs once)

// Debug filter values
console.log('Filter state:', {
  formats: Array.from(filters.selectedFormats),
  minWidth: filters.minWidth,
  totalImages: images.length,
  filteredCount: filteredImages.length,
})

// Test filter function directly
import { filterImages } from '@/lib/filter-utils'
const testResult = filterImages(images, new Set(['JPG']), 0)
console.log('Test filter result:', testResult.length)
```

### 9.2 Debugging Techniques

#### Enable Verbose Logging

```typescript
// File: app/api/scrape/route.ts
const DEBUG = process.env.NODE_ENV === 'development'

if (DEBUG) {
  console.log('Scrape request:', { url, deepScrape })
  console.log('Scraper API URL:', scraperUrl)
  console.log('Response status:', scraperResponse.status)
  console.log('Response data:', scraperData)
  console.log('Processed images:', images.length)
}
```

#### Network Debugging

```javascript
// In browser console
// Monitor all fetch calls
const originalFetch = window.fetch
window.fetch = function(...args) {
  console.log('Fetch:', args[0], args[1])
  return originalFetch.apply(this, args).then(res => {
    console.log('Response:', res.status, args[0])
    return res
  })
}
```

#### React DevTools

```bash
# Install browser extension
# Chrome: React Developer Tools
# Firefox: React DevTools

# Use Components tab to inspect:
# - Component props
# - State values
# - Hooks execution order
# - Re-render causes
```

### 9.3 Performance Debugging

```typescript
// Measure render performance
import { useEffect } from 'react'

useEffect(() => {
  const start = performance.now()
  return () => {
    const duration = performance.now() - start
    console.log(`Component render took ${duration}ms`)
  }
})

// Identify expensive renders
import { Profiler } from 'react'

<Profiler id="ImageGrid" onRender={(id, phase, actualDuration) => {
  console.log(`${id} (${phase}) took ${actualDuration}ms`)
}}>
  <ImageGrid images={images} />
</Profiler>
```

---

## 10. Testing Strategies

### 10.1 Manual Testing Checklist

#### Single URL Extraction
- [ ] Valid URL with images: `https://unsplash.com`
- [ ] URL without protocol: `example.com` (should auto-add https://)
- [ ] Invalid URL: `not-a-url` (should show error)
- [ ] Localhost URL: `http://localhost:3000` (should block)
- [ ] File URL: `file:///path/to/file` (should block)
- [ ] Internal IP: `http://192.168.1.1` (should block)

#### Batch URL Extraction
- [ ] Multiple valid URLs (comma-separated)
- [ ] Multiple valid URLs (newline-separated)
- [ ] Mix of valid and invalid URLs
- [ ] More than 5 URLs (should limit to 5)
- [ ] Duplicate URLs (should deduplicate)

#### Filtering
- [ ] Filter by format (JPG, PNG, WebP)
- [ ] Filter by minimum width (500px, 1000px)
- [ ] Combine multiple filters
- [ ] Filter by source URL (batch mode)
- [ ] Clear all filters

#### Download
- [ ] Download single image
- [ ] Download multiple images as ZIP
- [ ] Download with no selection (should disable button)
- [ ] Download 50+ images (check progress indicator)

#### UI/UX
- [ ] Responsive on mobile
- [ ] Loading states display correctly
- [ ] Error messages are helpful
- [ ] Queue position shows when waiting

### 10.2 Unit Testing

**Setup:**

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

**Example: parse-urls.test.ts**

```typescript
import { parseUrlsFromInput, validateUrls } from '../parse-urls'

describe('parseUrlsFromInput', () => {
  it('should parse comma-separated URLs', () => {
    const input = 'example.com, test.com, sample.org'
    const result = parseUrlsFromInput(input, 5)
    expect(result).toEqual(['example.com', 'test.com', 'sample.org'])
  })

  it('should parse newline-separated URLs', () => {
    const input = 'example.com\ntest.com\nsample.org'
    const result = parseUrlsFromInput(input, 5)
    expect(result).toEqual(['example.com', 'test.com', 'sample.org'])
  })

  it('should deduplicate URLs', () => {
    const input = 'example.com, example.com, test.com'
    const result = parseUrlsFromInput(input, 5)
    expect(result).toEqual(['example.com', 'test.com'])
  })

  it('should limit to maxUrls', () => {
    const input = 'a.com, b.com, c.com, d.com, e.com, f.com'
    const result = parseUrlsFromInput(input, 3)
    expect(result).toHaveLength(3)
  })
})

describe('validateUrls', () => {
  it('should separate valid and invalid URLs', () => {
    const urls = ['https://example.com', 'not-a-url', 'file:///path', 'https://test.com']
    const { valid, invalid } = validateUrls(urls)
    expect(valid).toEqual(['https://example.com', 'https://test.com'])
    expect(invalid).toEqual(['not-a-url', 'file:///path'])
  })

  it('should block localhost URLs', () => {
    const urls = ['http://localhost:3000', 'http://127.0.0.1']
    const { valid, invalid } = validateUrls(urls)
    expect(valid).toEqual([])
    expect(invalid).toEqual(['http://localhost:3000', 'http://127.0.0.1'])
  })
})
```

### 10.3 Integration Testing

**Example: API route test**

```typescript
import { POST } from '../route'
import { NextRequest } from 'next/server'

describe('/api/scrape', () => {
  it('should return 400 for missing URL', async () => {
    const request = new NextRequest('http://localhost:3000/api/scrape', {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toBe('URL is required')
  })

  it('should block file:// URLs', async () => {
    const request = new NextRequest('http://localhost:3000/api/scrape', {
      method: 'POST',
      body: JSON.stringify({ url: 'file:///path/to/file' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toContain('Local file URLs')
  })
})
```

---

## 11. Code Style & Conventions

### 11.1 TypeScript Conventions

```typescript
// ✅ Use interface for object shapes
interface ImageData {
  id: number
  src: string
}

// ❌ Don't use type for simple objects
type ImageData = {
  id: number
  src: string
}

// ✅ Explicit return types for functions
export function filterImages(images: ImageData[]): ImageData[] {
  // ...
}

// ❌ Avoid any
function process(data: any) { }  // ❌

// ✅ Use unknown if type is unclear
function process(data: unknown) {
  if (typeof data === 'string') {
    // Type narrowed to string
  }
}

// ✅ Use optional chaining and nullish coalescing
const name = user?.profile?.name ?? 'Unknown'

// ❌ Don't use nested if statements
if (user) {
  if (user.profile) {
    const name = user.profile.name || 'Unknown'
  }
}
```

### 11.2 React Conventions

```typescript
// ✅ Client components: "use client" at top
"use client"
export function MyComponent() { }

// ✅ Server components: No "use client"
export function Layout() { }

// ✅ File naming: kebab-case
// image-card.tsx ✅
// ImageCard.tsx ❌

// ✅ Component naming: PascalCase
export function ImageCard() { }

// ✅ Props interface naming
interface ImageCardProps {
  src: string
  name: string
}

// ✅ State management
const [images, setImages] = useState<ImageData[]>([])  // Explicit type
const [loading, setLoading] = useState(false)          // Inferred type OK

// ✅ Memoization for expensive computations
const filteredImages = useMemo(() => {
  return filterImages(images, filters)
}, [images, filters])

// ✅ Stable function references
const handleClick = useCallback(() => {
  // ...
}, [dependencies])

// ❌ Don't create functions on every render
<button onClick={() => handleClick(id)}>  // ❌ New function every render
<button onClick={() => handleClick(id)}>  // ✅ Use useCallback
```

### 11.3 CSS Conventions

```typescript
// ✅ Tailwind utility classes
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">

// ✅ Responsive breakpoints
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

// ✅ Custom colors (defined in tailwind.config.js)
<div className="bg-[#11224E] text-[#EEEEEE]">

// ❌ Don't use inline styles unless necessary
<div style={{ color: 'blue' }}>  // ❌
<div className="text-blue-500">  // ✅
```

---

## 12. Deployment

### 12.1 Build Process

```bash
# 1. Run type checking
npm run lint

# 2. Build for production
npm run build

# 3. Test production build locally
npm run start

# 4. Check build output
# .next/static - Static assets
# .next/server - Server-side code
```

### 12.2 Environment Variables

```bash
# Development (.env.local)
IMAGE_SCRAPER_API_URL=https://api.excusegenerator.fun

# Production (Vercel dashboard)
# Navigate to: Settings → Environment Variables
# Add: IMAGE_SCRAPER_API_URL = https://api.excusegenerator.fun
```

### 12.3 Deployment Checklist

- [ ] All TypeScript errors resolved
- [ ] Build completes without errors
- [ ] Environment variables configured
- [ ] Test in production mode locally (`npm run build && npm start`)
- [ ] Verify external API is accessible from production
- [ ] Test on mobile devices
- [ ] Check SEO metadata in browser inspector
- [ ] Verify JSON-LD structured data
- [ ] Test Open Graph tags (use opengraph.xyz)

### 12.4 Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Automatic Deployment:**
- Push to `main` branch → Automatic production deployment
- Push to feature branch → Automatic preview deployment

---

## 13. Resources & Quick Reference

### 13.1 Documentation Links

- **Next.js 16**: https://nextjs.org/docs
- **React 19**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Radix UI**: https://www.radix-ui.com/primitives/docs
- **Vercel Analytics**: https://vercel.com/docs/analytics

### 13.2 Critical Files Quick Reference

| File Path | Purpose | Key Functions |
|-----------|---------|---------------|
| `/app/page.tsx` | Main homepage with extraction logic | `handleSingleScan`, `handleBatchScan`, state orchestration |
| `/app/api/scrape/route.ts` | API endpoint for image scraping | `POST`, URL validation, external API call |
| `/lib/types/scraper.ts` | Type definitions | `ImageData`, `ScrapeResponse`, `BatchUrlState` |
| `/hooks/use-request-queue.ts` | Concurrency control | `useRequestQueue`, `queueRequest`, `processQueue` |
| `/lib/parse-images.ts` | Image URL processing | `convertImageUrls`, `normalizeImageUrl` |
| `/lib/parse-urls.ts` | URL validation & parsing | `parseUrlsFromInput`, `validateUrls` |
| `/lib/filter-utils.ts` | Image filtering | `filterImages`, `calculateFilterStats` |
| `/lib/deduplicate-images.ts` | Batch deduplication | `deduplicateImages` |
| `/components/image-grid.tsx` | Results display | Image selection, sorting, ZIP download |
| `/components/search-section.tsx` | Input interface | Single/batch mode, progress tracking |
| `/lib/pages-config.ts` | Centralized page config | `getPageBySlug`, `pages` array |
| `/app/layout.tsx` | Root layout with SEO | Metadata, JSON-LD schemas |

### 13.3 External Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.0.10 | React framework |
| `react` | 19.2.0 | UI library |
| `typescript` | 5.x | Type safety |
| `tailwindcss` | 4.1.9 | CSS framework |
| `jszip` | 3.10.1 | ZIP file generation |
| `file-saver` | 2.0.5 | File downloads |
| `@radix-ui/*` | Various | UI components |
| `@vercel/analytics` | 1.3.1 | Analytics |

### 13.4 Command Cheatsheet

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Run production build
npm run lint            # Run ESLint

# Package Management
npm install             # Install dependencies
npm install <package>   # Add new package
npm update              # Update dependencies

# Git
git status              # Check status
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Push to remote

# Vercel
vercel                  # Deploy preview
vercel --prod          # Deploy production
vercel logs            # View logs
```

### 13.5 Keyboard Shortcuts (VS Code)

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + P` | Quick open file |
| `Cmd/Ctrl + Shift + F` | Search in files |
| `Cmd/Ctrl + D` | Select next occurrence |
| `Alt + Click` | Multi-cursor |
| `Cmd/Ctrl + /` | Toggle comment |
| `F2` | Rename symbol |
| `Cmd/Ctrl + .` | Quick fix |

---

## Appendix: Architecture Decision Record (ADR)

### ADR-001: Why Next.js App Router?

**Decision:** Use Next.js 16 App Router instead of Pages Router

**Rationale:**
- Built-in SEO with Metadata API
- Server Components for better performance
- Simpler file-based routing
- Better TypeScript support

### ADR-002: Why No External State Management?

**Decision:** Use React hooks only (no Redux, Zustand, etc.)

**Rationale:**
- State is page-local (no cross-page sharing)
- Simpler to understand and maintain
- Fewer dependencies
- React hooks sufficient for our needs

### ADR-003: Why Singleton Queue Pattern?

**Decision:** Use singleton pattern for request queue

**Rationale:**
- Need global concurrency limit (not per-component)
- Share queue state across all component instances
- UI feedback requires synchronized state
- Simpler than context or external store

### ADR-004: Why External API?

**Decision:** Delegate scraping to external API

**Rationale:**
- Scraping is complex (requires browser automation)
- No server overhead (our app is lightweight)
- Timeout protection (2-minute limit)
- Scalability (external API handles load)

---

## Conclusion

You now have a complete understanding of the ExtractPics architecture! Here's what you should be able to do:

✅ **Understand**: Architecture, data flow, and design decisions
✅ **Navigate**: Find any file or function quickly
✅ **Modify**: Make changes with confidence
✅ **Debug**: Troubleshoot issues effectively
✅ **Extend**: Add new features following established patterns

**Next Steps:**
1. Run the app locally and explore the code
2. Make a small change (e.g., add a console.log)
3. Try adding a new tool page (Section 8.1)
4. Read the actual implementation files to see how they match this doc

**Questions?** Check the troubleshooting guide (Section 9) or review the code examples throughout this document.

**Happy coding! 🚀**

---

*Last updated: December 2025*
*Document version: 1.0*
*Maintained by: ExtractPics Development Team*
