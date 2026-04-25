export type ServiceSlug =
  | 'chatbots-inteligencia-artificial'
  | 'automatizacion-de-procesos'
  | 'desarrollo-web'
  | 'auditoria-seo'
  | 'auditoria-publicidad-digital'
  | 'desarrollo-saas'

export type Faq = {
  question: string
  answer: string
}

export type ServiceConfig = {
  slug: ServiceSlug
  name: string
  icon: string
  shortDescription: string
  fullDescription: string
  keywords: string[]
  faqs: Faq[]
}

export type ResourceConfig = {
  slug: string
  title: string
  description: string
  keywords: string[]
  relatedServiceSlug: ServiceSlug
  sections: ResourceSection[]
}

export type ResourceSection = {
  heading: string
  content: string
}

export type CaseStudy = {
  slug: string
  industry: string
  badge: string
  headline: string
  description: string
  metrics: { label: string; value: string }[]
}

export type BreadcrumbItem = {
  name: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  badge?: string
}

export type ContactFormData = {
  name: string
  company: string
  industry: string
  teamSize: string
  process: string
  email: string
  whatsapp: string
}

export type ContactFormState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}
