# Image Sitemap & Auto-Crawl Setup

## What Was Implemented

Your ExtractPics site now has automatic image indexing with these features:

✅ **Image Sitemap Integration** - Images from `/data/seo-images.json` automatically included in sitemap.xml
✅ **R2 Support** - Cloudflare R2 domains configured for hosting production images
✅ **Auto-Crawl API** - Endpoint to notify search engines when new images are added
✅ **IndexNow Integration** - Instant crawl notifications to Google, Bing, Yandex
✅ **Zero-Code Updates** - Add images by only editing JSON, no code changes needed

## Quick Start

### 1. Set Up Environment Variables

Create or edit `.env.local`:

```bash
# Required for automatic search engine notifications
INDEXNOW_API_KEY=your_indexnow_api_key

# Optional: Secure the notify-crawl API endpoint
NOTIFY_CRAWL_SECRET=your_random_secret_token
```

### 2. Get IndexNow API Key

1. Visit: https://www.indexnow.org/getstarted
2. Generate a random UUID/key (or create your own)
3. Example: `1234567890abcdef1234567890abcdef`
4. Copy to `.env.local` as `INDEXNOW_API_KEY`

### 3. Create IndexNow Key File

Create `/public/[your-key].txt` containing only your key:

```bash
echo "1234567890abcdef1234567890abcdef" > public/1234567890abcdef1234567890abcdef.txt
```

Replace `1234567890abcdef1234567890abcdef` with your actual key.

### 4. Update Image URLs in seo-images.json

Replace placeholder URLs with your Cloudflare R2 URLs:

**Before:**
```json
"imageUrl": "https://picsum.photos/seed/download-images/1200/750"
```

**After:**
```json
"imageUrl": "https://pub-abc123.r2.dev/infographics/download-images-guide.jpg"
```

Or if using custom domain:
```json
"imageUrl": "https://images.extractpics.com/infographics/download-images-guide.jpg"
```

### 5. Deploy and Test

```bash
# Install dependencies (if needed)
npm install

# Build locally to test
npm run build

# Start dev server
npm run dev

# Visit sitemap to verify
open http://localhost:3000/sitemap.xml
```

## Adding New Images

### Simple Workflow

1. **Upload image to R2**
   - Recommended size: 1200x750 pixels
   - File size: <300KB
   - Format: JPG or PNG

2. **Add entry to `/data/seo-images.json`**
   ```json
   {
     "id": "4",
     "imageUrl": "https://pub-abc123.r2.dev/infographics/new-image.jpg",
     "title": "Your Title - Complete Guide",
     "description": "Detailed description with keywords naturally integrated.",
     "mainKeyword": "your primary keyword",
     "altText": "Descriptive alt text for accessibility",
     "category": "tutorial",
     "datePublished": "2024-12-25",
     "dateModified": "2024-12-25"
   }
   ```

3. **Commit and push**
   ```bash
   git add data/seo-images.json
   git commit -m "Add new infographic: [title]"
   git push
   ```

4. **Trigger crawl notification**
   ```bash
   curl -X POST https://www.extractpics.com/api/notify-crawl
   ```

Done! Your image is now in the sitemap and search engines are notified.

## What Happens Automatically

### When You Add an Image:

1. **Sitemap Updates** (instant)
   - New image URL added to `/sitemap.xml`
   - `lastModified` date updated to latest image date
   - Image count incremented

2. **Search Engines Notified** (when you call the API)
   - IndexNow sends notification to Google, Bing, Yandex
   - Sitemap cache is revalidated
   - Crawlers typically respond within minutes to hours

3. **Indexing Process** (1-7 days)
   - Search engines crawl updated sitemap
   - Discover new image URL
   - Fetch and analyze image
   - Add to image search index

4. **Ranking** (1-4 weeks)
   - Image appears in Google Images results
   - Rankings improve based on relevance and quality
   - Schema.org metadata used for rich snippets

## File Changes Made

### Modified Files

| File | Changes | Purpose |
|------|---------|---------|
| `/app/sitemap.ts` | Added image imports and types, images array | Include infographics in sitemap |
| `/next.config.ts` | Added R2 domain patterns | Allow R2 image loading |

### New Files

| File | Purpose |
|------|---------|
| `/app/api/notify-crawl/route.ts` | API endpoint for crawl notifications |
| `/docs/adding-images.md` | Comprehensive guide for adding images |
| `/IMAGE_SITEMAP_SETUP.md` | This quick setup guide |

### Files to Update

| File | What to Change |
|------|----------------|
| `/data/seo-images.json` | Replace picsum URLs with R2 URLs |
| `.env.local` | Add `INDEXNOW_API_KEY` |
| `/public/[key].txt` | Create with IndexNow key |

## API Endpoints

### POST /api/notify-crawl

Notifies search engines of sitemap updates.

**Usage:**
```bash
# Without authentication
curl -X POST https://www.extractpics.com/api/notify-crawl

# With authentication (if NOTIFY_CRAWL_SECRET is set)
curl -X POST https://www.extractpics.com/api/notify-crawl \
  -H "Authorization: Bearer YOUR_SECRET"
```

**Response:**
```json
{
  "success": true,
  "message": "Sitemap update notification completed",
  "timestamp": "2024-12-25T10:30:00.000Z",
  "operations": {
    "sitemapRevalidation": "success",
    "indexNow": {
      "status": "success",
      "error": null
    }
  },
  "sitemapUrl": "https://www.extractpics.com/sitemap.xml"
}
```

### GET /api/notify-crawl

Check configuration status.

**Usage:**
```bash
curl https://www.extractpics.com/api/notify-crawl
```

Returns environment variable status and usage instructions.

## Verification Checklist

After setup, verify everything works:

- [ ] Environment variables set in `.env.local`
- [ ] IndexNow key file created in `/public/`
- [ ] R2 URLs updated in `seo-images.json`
- [ ] Build succeeds: `npm run build`
- [ ] Sitemap shows images: `/sitemap.xml`
- [ ] Images load on page: `/infographics`
- [ ] API endpoint works: `curl /api/notify-crawl`
- [ ] Deployed to production
- [ ] Sitemap submitted to Google Search Console

## Monitoring & Analytics

### Google Search Console

1. Go to: https://search.google.com/search-console
2. Select: `www.extractpics.com`
3. Check:
   - **Sitemaps** → Verify last crawl date
   - **Performance** → Filter by "Image" search type
   - **Coverage** → Check for indexing issues

### Track Image Performance

Monitor which infographics get the most traffic:

1. **Search Console**: Performance → Image → Filter by URL
2. **Google Analytics**: Behavior → Site Content → filter by `/infographics`
3. **Metrics to watch**:
   - Impressions (how often shown in search)
   - Clicks (actual visits from image search)
   - CTR (click-through rate)
   - Average position in search results

## Troubleshooting

### Sitemap Not Showing Images

```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build

# Check JSON syntax
cat data/seo-images.json | jq

# Verify import works
grep -r "seoImages" app/sitemap.ts
```

### IndexNow Failing

```bash
# Check environment variable
echo $INDEXNOW_API_KEY

# Verify key file exists
ls -la public/*.txt

# Test API endpoint
curl https://www.extractpics.com/api/notify-crawl | jq
```

### Images Not Loading

```bash
# Test R2 URL directly
curl -I https://your-r2-url/image.jpg

# Check Next.js config
grep "r2.cloudflarestorage" next.config.ts

# View browser console for errors
# (Open DevTools → Console)
```

## Production Deployment

### Vercel Deployment

1. **Add environment variables in Vercel dashboard**:
   - Settings → Environment Variables
   - Add `INDEXNOW_API_KEY`
   - Add `NOTIFY_CRAWL_SECRET` (optional)

2. **Commit key file**:
   ```bash
   git add public/[your-key].txt
   git commit -m "Add IndexNow key file"
   git push
   ```

3. **Deploy**:
   - Vercel auto-deploys on git push
   - Or manually: `vercel --prod`

4. **Verify**:
   - Visit: https://www.extractpics.com/sitemap.xml
   - Check images appear in XML
   - Test: `curl -X POST https://www.extractpics.com/api/notify-crawl`

### First-Time Google Setup

1. **Submit sitemap to Google**:
   - Go to Google Search Console
   - Sitemaps → Add new sitemap
   - Enter: `https://www.extractpics.com/sitemap.xml`
   - Click "Submit"

2. **Wait for initial crawl** (24-48 hours)

3. **Monitor indexing** (check weekly for 1 month)

## Support & Resources

- **Detailed Guide**: See `/docs/adding-images.md`
- **Google Image Sitemaps**: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
- **IndexNow Docs**: https://www.indexnow.org/documentation
- **Next.js Sitemaps**: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

## Next Steps

1. **Set up environment variables** (5 mins)
2. **Update image URLs in JSON** with your R2 URLs
3. **Deploy to production**
4. **Test notify-crawl API**
5. **Submit sitemap to Google Search Console**
6. **Monitor indexing progress** over 2-4 weeks
7. **Add new infographics regularly** (2-4 per month)
8. **Track performance** and optimize based on data

---

**Questions or Issues?**

Review the comprehensive guide at `/docs/adding-images.md` or check the troubleshooting section above.
