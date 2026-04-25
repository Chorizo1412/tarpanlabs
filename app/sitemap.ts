import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { servicesConfig } from '@/config/services'
import { resourcesConfig } from '@/config/resources'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/casos/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nosotros/`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recursos/`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/contacto/`, priority: 0.9, changeFrequency: 'yearly' },
  ]

  const servicePages: MetadataRoute.Sitemap = servicesConfig.map((s) => ({
    url: `${base}/servicios/${s.slug}/`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }))

  const resourcePages: MetadataRoute.Sitemap = resourcesConfig.map((r) => ({
    url: `${base}/recursos/${r.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...servicePages, ...resourcePages]
}
