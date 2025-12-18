# SSE Streaming API Documentation

## Overview

The `/images/stream` endpoint provides **real-time progress updates** using Server-Sent Events (SSE). This allows your frontend to show a progress bar while images are being extracted.

**API URL:** `https://api.excusegenerator.fun/images/stream`

---

## Endpoint

```
GET /images/stream?url={encoded_url}&deep_scrape={true|false}
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `url` | string | required | URL to scrape (URL-encoded) |
| `deep_scrape` | boolean | `true` | Enable pagination (up to 3 pages) |

---

## Progress Events

The server sends these events with progress percentages:

| Status | Progress | Description |
|--------|----------|-------------|
| `queued` | 5% | Request waiting for available port |
| `acquiring_port` | 10% | Port acquired, browser starting |
| `scraping` | 20% | Page loading and scrolling |
| `post_processing` | 80% | Removing duplicate images |
| `complete` | 100% | Done! Results included |
| `error` | 0% | An error occurred |

### Event Format

```json
{
  "status": "scraping",
  "progress": 20,
  "message": "Browser started, loading page...",
  "timestamp": "2024-01-15T10:30:00.123456"
}
```

### Complete Event (includes results)

```json
{
  "status": "complete",
  "progress": 100,
  "message": "Found 45 images",
  "result": {
    "status": "success",
    "url": "https://example.com",
    "total": 45,
    "images": ["https://...", "https://..."]
  }
}
```

---

## Frontend Implementation

### JavaScript (Vanilla)

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

## Quick Test

```bash
# Test with curl (streams events)
curl -N "https://api.excusegenerator.fun/images/stream?url=https://example.com"

# Output:
# data: {"status": "queued", "progress": 5, "message": "Request queued..."}
# data: {"status": "acquiring_port", "progress": 10, "message": "Port 51001 acquired..."}
# data: {"status": "scraping", "progress": 20, "message": "Browser started..."}
# data: {"status": "complete", "progress": 100, "message": "Found 15 images", "result": {...}}
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
