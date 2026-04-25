import { describe, it, expect } from 'vitest'
import {
  buildOrganizationSchema,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from '../schema'
import type { ServiceConfig, Faq, BreadcrumbItem } from '@/lib/types'

const mockService: ServiceConfig = {
  slug: 'chatbots-inteligencia-artificial',
  name: 'Chatbots con IA',
  icon: '◈',
  shortDescription: 'Test description',
  fullDescription: 'Full description',
  keywords: ['chatbot'],
  faqs: [{ question: '¿Qué es?', answer: 'Es un bot.' }],
}

const mockFaqs: Faq[] = [
  { question: '¿Qué es X?', answer: 'X es algo.' },
  { question: '¿Cuánto cuesta?', answer: 'Depende.' },
]

const mockBreadcrumbs: BreadcrumbItem[] = [
  { name: 'Inicio', href: 'https://dominio.com/' },
  { name: 'Servicios', href: 'https://dominio.com/servicios/chatbots-inteligencia-artificial/' },
]

describe('buildOrganizationSchema', () => {
  it('returns Organization type with required fields', () => {
    const schema = buildOrganizationSchema()
    expect(schema['@type']).toBe('Organization')
    expect(Array.isArray(schema.areaServed)).toBe(true)
    expect(schema.areaServed).toContain('AR')
    expect(Array.isArray(schema.knowsAbout)).toBe(true)
  })
})

describe('buildServiceSchema', () => {
  it('returns Service type with provider reference', () => {
    const schema = buildServiceSchema(mockService, 'https://dominio.com')
    expect(schema['@type']).toBe('Service')
    expect(schema.name).toBe('Chatbots con IA')
    expect(schema.provider['@type']).toBe('Organization')
    expect(Array.isArray(schema.areaServed)).toBe(true)
  })
})

describe('buildFaqSchema', () => {
  it('returns FAQPage type with correct mainEntity structure', () => {
    const schema = buildFaqSchema(mockFaqs)
    expect(schema['@type']).toBe('FAQPage')
    expect(schema.mainEntity).toHaveLength(2)
    expect(schema.mainEntity[0]['@type']).toBe('Question')
    expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
    expect(schema.mainEntity[0].name).toBe('¿Qué es X?')
  })
})

describe('buildBreadcrumbSchema', () => {
  it('returns BreadcrumbList with correct positions', () => {
    const schema = buildBreadcrumbSchema(mockBreadcrumbs)
    expect(schema['@type']).toBe('BreadcrumbList')
    expect(schema.itemListElement[0].position).toBe(1)
    expect(schema.itemListElement[1].position).toBe(2)
    expect(schema.itemListElement[0].name).toBe('Inicio')
  })
})

describe('buildWebPageSchema', () => {
  it('returns WebPage type with name and url', () => {
    const schema = buildWebPageSchema({
      name: 'Test Page',
      description: 'Test desc',
      url: 'https://dominio.com/test/',
    })
    expect(schema['@type']).toBe('WebPage')
    expect(schema.name).toBe('Test Page')
    expect(schema.url).toBe('https://dominio.com/test/')
  })
})
