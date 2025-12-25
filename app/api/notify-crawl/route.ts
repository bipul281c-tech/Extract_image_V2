import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * API Route: Notify Search Engines of Sitemap Updates
 *
 * This endpoint:
 * 1. Revalidates the sitemap cache
 * 2. Notifies search engines via IndexNow API
 * 3. Returns status of operations
 *
 * Usage:
 * - POST /api/notify-crawl
 * - Optional: Add Authorization header for security
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authorization check
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.NOTIFY_CRAWL_SECRET;

    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Step 1: Revalidate sitemap cache
    revalidatePath('/sitemap.xml');
    console.log('[notify-crawl] Sitemap cache revalidated');

    // Step 2: Notify search engines via IndexNow
    const indexNowKey = process.env.INDEXNOW_API_KEY;
    const sitemapUrl = 'https://extractpics.com/sitemap.xml';

    let indexNowStatus = 'skipped';
    let indexNowError = null;

    if (indexNowKey) {
      try {
        // IndexNow API supports Google, Bing, Yandex, Seznam, Naver
        const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            host: 'extractpics.com',
            key: indexNowKey,
            keyLocation: `https://extractpics.com/${indexNowKey}.txt`,
            urlList: [sitemapUrl]
          }),
        });

        if (indexNowResponse.ok) {
          indexNowStatus = 'success';
          console.log('[notify-crawl] IndexNow notification sent successfully');
        } else {
          indexNowStatus = 'failed';
          indexNowError = `HTTP ${indexNowResponse.status}`;
          console.error('[notify-crawl] IndexNow failed:', indexNowResponse.status);
        }
      } catch (error) {
        indexNowStatus = 'error';
        indexNowError = error instanceof Error ? error.message : 'Unknown error';
        console.error('[notify-crawl] IndexNow error:', error);
      }
    } else {
      console.log('[notify-crawl] IndexNow API key not configured, skipping notification');
    }

    // Step 3: Return success response
    return NextResponse.json({
      success: true,
      message: 'Sitemap update notification completed',
      timestamp: new Date().toISOString(),
      operations: {
        sitemapRevalidation: 'success',
        indexNow: {
          status: indexNowStatus,
          error: indexNowError,
        }
      },
      sitemapUrl,
      note: indexNowStatus === 'skipped'
        ? 'Set INDEXNOW_API_KEY environment variable to enable automatic search engine notifications'
        : undefined,
    });

  } catch (error) {
    console.error('[notify-crawl] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process notification',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler for testing/status check
 */
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/notify-crawl',
    description: 'Notifies search engines when sitemap is updated with new images',
    method: 'POST',
    requiredEnvVars: {
      INDEXNOW_API_KEY: process.env.INDEXNOW_API_KEY ? 'configured' : 'missing',
      NOTIFY_CRAWL_SECRET: process.env.NOTIFY_CRAWL_SECRET ? 'configured' : 'not set (optional)',
    },
    usage: {
      curl: 'curl -X POST https://extractpics.com/api/notify-crawl',
      withAuth: 'curl -X POST https://extractpics.com/api/notify-crawl -H "Authorization: Bearer YOUR_SECRET"',
    },
    setupInstructions: {
      step1: 'Generate IndexNow API key from https://www.indexnow.org/getstarted',
      step2: 'Add INDEXNOW_API_KEY to your environment variables (.env.local)',
      step3: 'Create key file at /public/[key].txt with the key as content',
      step4: 'Optionally set NOTIFY_CRAWL_SECRET for API authorization',
      step5: 'Call this endpoint after adding new images to seo-images.json',
    },
  });
}
