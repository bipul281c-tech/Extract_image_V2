import { MetadataRoute } from 'next'
import seoImages from '@/data/seo-images.json'
import { getAllPageRoutes } from '@/lib/route-discovery'

type SEOImage = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  mainKeyword: string;
  altText: string;
  category: string;
  datePublished: string;
  dateModified: string;
};

function getLatestImageDate(images: SEOImage[]): Date {
  if (images.length === 0) return new Date();
  const dates = images.map(img => new Date(img.dateModified));
  return new Date(Math.max(...dates.map(d => d.getTime())));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.extractpics.com'
  const currentDate = new Date()

  // Extract image URLs from seo-images.json
  const infographicImageUrls = seoImages.images.map(img => img.imageUrl);
  const latestImageDate = getLatestImageDate(seoImages.images);

  // Dynamically discover all routes
  const allRoutes = getAllPageRoutes()

  // Generate sitemap entries for all routes
  const sitemapEntries: MetadataRoute.Sitemap = allRoutes.map(route => {
    // Special handling for infographics
    if (route === '/infographics') {
      return {
        url: `${baseUrl}${route}`,
        lastModified: latestImageDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        images: infographicImageUrls,
      }
    }

    // Homepage
    if (route === '/') {
      return {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 1.0,
      }
    }

    // About page
    if (route === '/about') {
      return {
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }
    }

    // All other routes are SEO landing pages
    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  })

  return sitemapEntries
}
