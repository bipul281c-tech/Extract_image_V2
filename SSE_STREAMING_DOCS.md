# SSE Streaming - Complete Event Documentation

## ✅ IMPLEMENTATION COMPLETE

Your API now streams **EVERY SINGLE ACTION** in real-time via Server-Sent Events (SSE).

## 📡 All SSE Events Emitted

### Queue & Setup (5-22%)
| Event | Progress | Description | Extra Data |
|-------|----------|-------------|------------|
| `queued` | 5% | Request waiting for available port | - |
| `acquiring_port` | 10% | Port acquired, starting browser | `port` |
| `browser_starting` | 15% | Opening browser instance | - |
| `page_loading` | 20% | Loading initial page | `url` |
| `page_loaded` | 22% | Page loaded successfully | - |

### Page Extraction (25-50%)
| Event | Progress | Description | Extra Data |
|-------|----------|-------------|------------|
| `extracting_page` | 25% | Starting image extraction | `current_page`, `max_pages` |
| `scrolling_started` | 25% | Started scrolling to load images | `scroll_count`, `images_found` |
| `scrolling` | 25-45% | Actively scrolling (every 3rd scroll) | `scroll_count`, `images_found`, `page_height` |
| `load_more_found` | 30% | Found "Load More" button | - |
| `load_more_clicked` | 35% | Clicked "Load More" button | - |
| `page_extracted` | 50% | Page extraction complete | `page`, `images_on_page`, `total_images`, `duplicates` |

### Pagination (50-70%)
| Event | Progress | Description | Extra Data |
|-------|----------|-------------|------------|
| `searching_next_page` | 50-70% | Looking for next page button | `current_page`, `target_page` |
| `clicking_next_page` | 50-70% | Clicking to navigate to next page | - |
| `page_navigated` | 50-70% | Successfully navigated to next page | `page`, `url` |
| `pagination_end` | 70% | No more pages found | `pages_scraped` |

### Completion (85-100%)
| Event | Progress | Description | Extra Data |
|-------|----------|-------------|------------|
| `post_processing` | 85% | Removing duplicate images | - |
| `complete` | 100% | Scraping finished | `result` (all images, stats) |
| `error` | 0% | An error occurred | `error` message |

## 🚀 Frontend Usage (No Changes Needed!)

Your existing frontend will automatically receive ALL these events:

```javascript
const eventSource = new EventSource('/images/stream?url=' + encodeURIComponent(url) + '&deep_scrape=true');

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);

    // Update UI based on event
    console.log(`${data.status}: ${data.message} (${data.progress}%)`);

    // Update progress bar
    updateProgressBar(data.progress);

    // Show status message
    updateStatusMessage(data.message);

    // Show detailed info for specific events
    switch(data.status) {
        case 'scrolling':
            console.log(`Scrolled ${data.scroll_count} times, found ${data.images_found} images`);
            break;

        case 'load_more_clicked':
            showNotification('Loading more content...');
            break;

        case 'page_extracted':
            showNotification(`Page ${data.page} done: ${data.images_on_page} new images`);
            break;

        case 'clicking_next_page':
            showNotification(`Navigating to page ${data.target_page}...`);
            break;

        case 'complete':
            eventSource.close();
            displayImages(data.result.images);
            showSummary({
                total: data.result.total,
                pages: data.result.pages_scraped,
                time: data.result.time_seconds
            });
            break;

        case 'error':
            eventSource.close();
            showError(data.message);
            break;
    }
};

eventSource.onerror = (error) => {
    console.error('SSE Error:', error);
    eventSource.close();
};
```

## 🎯 Example Event Flow

For a URL with 3 pages and a "Load More" button:

```
[  5%] queued              → Request queued, waiting for available port...
[ 10%] acquiring_port      → Port 61001 acquired, starting browser...
[ 15%] browser_starting    → Opening browser instance...
[ 20%] page_loading        → Loading page: https://example.com...
[ 22%] page_loaded         → Page loaded successfully, starting extraction...
[ 25%] extracting_page     → Extracting images from page 1 of 3...
[ 25%] scrolling_started   → Starting scroll to load images (target: 100)
[ 28%] scrolling           → Scrolling page... found 15 images (scroll #3)
[ 30%] load_more_found     → Found 'Load More' button, clicking...
[ 35%] load_more_clicked   → Clicked 'Load More', waiting for new content...
[ 37%] scrolling           → Scrolling page... found 45 images (scroll #6)
[ 40%] scrolling           → Scrolling page... found 67 images (scroll #9)
[ 50%] page_extracted      → Page 1 complete: found 67 new images
[ 50%] searching_next_page → Looking for next page button (page 2)...
[ 53%] clicking_next_page  → Clicking to navigate to page 2...
[ 55%] page_navigated      → Navigated to page 2, extracting images...
[ 55%] scrolling_started   → Starting scroll to load images (target: 100)
[ 58%] scrolling           → Scrolling page... found 23 images (scroll #3)
[ 60%] page_extracted      → Page 2 complete: found 23 new images
[ 65%] searching_next_page → Looking for next page button (page 3)...
[ 68%] clicking_next_page  → Clicking to navigate to page 3...
[ 70%] page_navigated      → Navigated to page 3, extracting images...
[ 72%] scrolling           → Scrolling page... found 18 images (scroll #3)
[ 75%] page_extracted      → Page 3 complete: found 18 new images
[ 80%] searching_next_page → Looking for next page button (page 4)...
[ 70%] pagination_end      → No more pages found. Completed 3 pages.
[ 85%] post_processing     → Extraction complete, removing duplicates...
[100%] complete            → Complete! Found 108 unique images
```

## 🧪 Test Your SSE Stream

```bash
# Test with a simple URL
python3 test_sse_stream.py "https://example.com" "false"

# Test with deep scraping (3 pages + load more)
python3 test_sse_stream.py "https://yoursite.com" "true"

# Or use curl
curl -N http://localhost:49152/images/stream?url=https://example.com&deep_scrape=true
```

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/images` | GET | Regular scraping (returns JSON when complete) |
| `/images/stream` | GET | SSE streaming (real-time progress updates) |
| `/health` | GET | Health check |
| `/status` | GET | Current port pool status |

## ✅ Current Status

- ✅ API running on http://localhost:49152
- ✅ Scraper-1 noVNC: http://localhost:6080
- ✅ Scraper-2 noVNC: http://localhost:6081
- ✅ Public API: https://api.excusegenerator.fun

**All systems operational!** Your frontend doesn't need any changes - it will automatically receive all the detailed progress events.

---

## 📚 Legacy Documentation (Pre-Detailed Events)

### Basic Frontend Implementation

#### JavaScript (Vanilla)

```javascript
function scanWithProgress(url, { onProgress, onComplete, onError }) {
  const apiUrl = `https://api.excusegenerator.fun/images/stream?url=${encodeURIComponent(url)}`;
  const eventSource = new EventSource(apiUrl);

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);

    // Update progress bar
    onProgress(data.progress, data.message);

    if (data.status === 'complete') {
      eventSource.close();
      onComplete(data.result);
    } else if (data.status === 'error') {
      eventSource.close();
      onError(data.message);
    }
  };

  eventSource.onerror = () => {
    eventSource.close();
    onError('Connection lost');
  };

  // Return cleanup function
  return () => eventSource.close();
}

// Usage
const cancel = scanWithProgress('https://example.com', {
  onProgress: (progress, message) => {
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('status-text').textContent = message;
  },
  onComplete: (result) => {
    console.log(`Found ${result.total} images`);
    displayImages(result.images);
  },
  onError: (error) => {
    alert(error);
  }
});

// To cancel: cancel();
```

---

### React Hook

```jsx
// hooks/useImageScan.js
import { useState, useCallback, useRef } from 'react';

export function useImageScan() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | scanning | complete | error
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const eventSourceRef = useRef(null);

  const scan = useCallback((url, deepScrape = true) => {
    // Reset state
    setStatus('scanning');
    setProgress(0);
    setMessage('Starting...');
    setImages([]);

    const apiUrl = `https://api.excusegenerator.fun/images/stream?url=${encodeURIComponent(url)}&deep_scrape=${deepScrape}`;
    const eventSource = new EventSource(apiUrl);
    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setProgress(data.progress);
      setMessage(data.message);

      if (data.status === 'complete') {
        setStatus('complete');
        setImages(data.result.images || []);
        eventSource.close();
      } else if (data.status === 'error') {
        setStatus('error');
        eventSource.close();
      }
    };

    eventSource.onerror = () => {
      setStatus('error');
      setMessage('Connection lost');
      eventSource.close();
    };
  }, []);

  const cancel = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      setStatus('idle');
      setProgress(0);
    }
  }, []);

  return { progress, status, message, images, scan, cancel };
}
```

---

### React Component Example

```jsx
import { useImageScan } from './hooks/useImageScan';

function ImageExtractor() {
  const [url, setUrl] = useState('');
  const { progress, status, message, images, scan, cancel } = useImageScan();

  return (
    <div>
      {/* Input */}
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        disabled={status === 'scanning'}
      />

      {/* Buttons */}
      {status === 'scanning' ? (
        <button onClick={cancel}>Cancel</button>
      ) : (
        <button onClick={() => scan(url)}>Scan</button>
      )}

      {/* Progress Bar */}
      {status === 'scanning' && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <span>{message}</span>
        </div>
      )}

      {/* Results */}
      {status === 'complete' && (
        <div className="results">
          <p>Found {images.length} images</p>
          <div className="image-grid">
            {images.map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {status === 'error' && (
        <div className="error">{message}</div>
      )}
    </div>
  );
}
```

---

### CSS for Progress Bar

```css
.progress-container {
  width: 100%;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.progress-bar {
  height: 8px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.3s ease;
}

/* Animated shimmer effect */
.progress-bar {
  background: linear-gradient(
    90deg,
    #3b82f6 0%,
    #8b5cf6 50%,
    #3b82f6 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

### Next.js with TypeScript

```tsx
// hooks/useImageScan.ts
import { useState, useCallback, useRef } from 'react';

interface ScanResult {
  status: string;
  url: string;
  total: number;
  images: string[];
  time_seconds: number;
}

type ScanStatus = 'idle' | 'scanning' | 'complete' | 'error';

export function useImageScan() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<ScanStatus>('idle');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<ScanResult | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  const scan = useCallback((url: string, deepScrape = true) => {
    setStatus('scanning');
    setProgress(0);
    setResult(null);

    const apiUrl = `https://api.excusegenerator.fun/images/stream?url=${encodeURIComponent(url)}&deep_scrape=${deepScrape}`;
    const eventSource = new EventSource(apiUrl);
    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setProgress(data.progress);
      setMessage(data.message);

      if (data.status === 'complete') {
        setStatus('complete');
        setResult(data.result);
        eventSource.close();
      } else if (data.status === 'error') {
        setStatus('error');
        eventSource.close();
      }
    };

    eventSource.onerror = () => {
      setStatus('error');
      setMessage('Connection lost');
      eventSource.close();
    };
  }, []);

  const cancel = useCallback(() => {
    eventSourceRef.current?.close();
    setStatus('idle');
  }, []);

  return { progress, status, message, result, scan, cancel };
}
```

---

## Comparison: `/images` vs `/images/stream`

| Feature | `/images` | `/images/stream` |
|---------|-----------|------------------|
| Progress updates | ❌ No | ✅ Real-time |
| Response type | JSON | SSE stream |
| Use case | Simple requests | Progress bars |
| Browser support | All | Modern browsers |

---

## Error Handling

```javascript
eventSource.onerror = (event) => {
  // Connection error or server closed connection
  eventSource.close();

  // Check if it was expected (complete/error event) or unexpected
  if (status !== 'complete' && status !== 'error') {
    showError('Connection to server lost. Please try again.');
  }
};
```

---

## Best Practices

1. **Always close EventSource** when done or on error
2. **Show status message** alongside progress bar
3. **Handle connection loss** gracefully
4. **Provide cancel button** for long operations
5. **Use lazy loading** for image results
