import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.extractpics.com'
  const currentDate = new Date()

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
