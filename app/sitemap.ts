import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vaniradesigns.in',
      lastModified: new Date(),
    },
  ]
}
