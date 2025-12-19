import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ExtractPics - Free Image Extractor Tool',
    short_name: 'ExtractPics',
    description: 'Extract and download images from any website instantly. Free, fast, and secure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    categories: ['productivity', 'utilities', 'tools'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      }
    ],
    shortcuts: [
      {
        name: 'Extract Images',
        short_name: 'Extract',
        description: 'Extract images from a website',
        url: '/',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }]
      },
      {
        name: 'Bulk Extractor',
        short_name: 'Bulk',
        description: 'Extract images from multiple websites',
        url: '/bulk-extractor',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }]
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  }
}
