import { MetadataRoute } from 'next'
import seoImages from '@/data/seo-images.json'

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
  const baseUrl = 'https://extractpics.com'
  const currentDate = new Date()

  // Extract image URLs from seo-images.json
  const infographicImageUrls = seoImages.images.map(img => img.imageUrl);
  const latestImageDate = getLatestImageDate(seoImages.images);

  // Static routes with high priority
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/infographics`,
      lastModified: latestImageDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      images: infographicImageUrls,
    },
  ]

  // SEO landing pages - high priority for organic traffic
  const landingPages = [
    'bulk-extractor',
    'download-image',
    'download-image-from-link',
    'extraction-tool',
    'extractor-tool',
    'facebook-image-downloader',
    'image-downloader',
    'image-downloader-free',
    'image-link',
    'image-saver',
    'image-to-image-url',
    'images-and-links',
    'link-picture',
    'photo-saver',
    'photos-saver',
    'pic-link',
    'save-image',
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...landingPages]
}
