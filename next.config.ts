import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression
  compress: true,

  // Trailing slash configuration (prevents duplicate content)
  trailingSlash: false,

  // 301 Redirects to reduce 404s
  async redirects() {
    return [
      // Common typos and variations - Image extractor
      { source: '/image-extractor', destination: '/extraction-tool', permanent: true },
      { source: '/imageextractor', destination: '/extraction-tool', permanent: true },
      { source: '/img-extractor', destination: '/extraction-tool', permanent: true },
      { source: '/images-extractor', destination: '/extraction-tool', permanent: true },
      { source: '/pic-extractor', destination: '/extraction-tool', permanent: true },
      { source: '/picture-extractor', destination: '/extraction-tool', permanent: true },
      { source: '/photo-extractor', destination: '/extraction-tool', permanent: true },

      // Common typos - Image downloader
      { source: '/imagedownloader', destination: '/image-downloader', permanent: true },
      { source: '/images-downloader', destination: '/image-downloader', permanent: true },
      { source: '/img-downloader', destination: '/image-downloader', permanent: true },
      { source: '/picture-downloader', destination: '/image-downloader', permanent: true },
      { source: '/photo-downloader', destination: '/image-downloader', permanent: true },
      { source: '/pic-downloader', destination: '/image-downloader', permanent: true },

      // Common typos - Bulk extractor
      { source: '/bulkextractor', destination: '/bulk-extractor', permanent: true },
      { source: '/bulk-image-extractor', destination: '/bulk-extractor', permanent: true },
      { source: '/batch-extractor', destination: '/bulk-extractor', permanent: true },
      { source: '/mass-extractor', destination: '/bulk-extractor', permanent: true },

      // Download variations
      { source: '/download', destination: '/image-downloader', permanent: true },
      { source: '/downloads', destination: '/image-downloader', permanent: true },
      { source: '/downloader', destination: '/image-downloader', permanent: true },

      // Extract variations
      { source: '/extract', destination: '/extraction-tool', permanent: true },
      { source: '/extractor', destination: '/extraction-tool', permanent: true },

      // Save/Saver variations
      { source: '/save-images', destination: '/image-saver', permanent: true },
      { source: '/save-image', destination: '/image-saver', permanent: true },
      { source: '/imagesaver', destination: '/image-saver', permanent: true },

      // Tool variations
      { source: '/tool', destination: '/', permanent: true },
      { source: '/tools', destination: '/', permanent: true },

      // Common legacy/external link patterns
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },

      // Facebook downloader variations
      { source: '/fb-image-downloader', destination: '/facebook-image-downloader', permanent: true },
      { source: '/facebook-downloader', destination: '/facebook-image-downloader', permanent: true },
      { source: '/fb-downloader', destination: '/facebook-image-downloader', permanent: true },

      // Web image variations
      { source: '/website-image-downloader', destination: '/webpage-image-downloader', permanent: true },
      { source: '/site-image-downloader', destination: '/webpage-image-downloader', permanent: true },

      // URL/Link variations
      { source: '/image-url', destination: '/image-link', permanent: true },
      { source: '/get-image-url', destination: '/how-to-get-an-image-url', permanent: true },
      { source: '/image-url-extractor', destination: '/how-to-get-an-image-url', permanent: true },

      // Blog variations
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/articles', destination: '/blog', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },

      // Scraper/Scraping variations
      { source: '/web-scraper', destination: '/extraction-tool', permanent: true },
      { source: '/image-scraper', destination: '/extraction-tool', permanent: true },
      { source: '/scraper', destination: '/extraction-tool', permanent: true },

      // Gallery variations
      { source: '/gallery', destination: '/infographics', permanent: true },
      { source: '/images', destination: '/infographics', permanent: true },
    ];
  },

  // Static optimization
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'extractpics.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Cloudflare R2 support for infographic images
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
        pathname: '/**',
      },
      // Custom R2 domain support (if configured)
      {
        protocol: 'https',
        hostname: 'images.extractpics.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-*.r2.dev',
        pathname: '/**',
      },
    ],
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Production optimizations
  poweredByHeader: false,

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tabler/icons-react'],
  },
};

export default nextConfig;
