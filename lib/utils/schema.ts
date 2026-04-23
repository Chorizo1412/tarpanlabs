import { siteConfig } from '@/config/site'
import type { ServiceConfig, Faq, BreadcrumbItem } from '@/lib/types'

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  areaServed: [...siteConfig.countries],
  knowsAbout: [
    'Inteligencia Artificial para empresas',
    'Automatización de procesos con IA',
    'Chatbots empresariales',
    'Desarrollo de software a medida',
    'SEO para empresas LATAM',
  ],
  serviceArea: {
    '@type': 'Place',
    description: 'América Latina',
  },
  sameAs: Object.values(siteConfig.social),
})

export const buildServiceSchema = (service: ServiceConfig, pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.fullDescription,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: [...siteConfig.countries],
  serviceType: service.name,
  url: pageUrl,
})

export const buildFaqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.href,
  })),
})

export const buildWebPageSchema = ({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  isPartOf: {
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  },
})
