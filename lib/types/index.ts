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
  industry: string
  problem: string
  solution: string
  result: string
}

export type BreadcrumbItem = {
  name: string
  href: string
}

export type NavItem = {
  label: string
  href: string
}

export type ContactFormData = {
  name: string
  company: string
  industry: string
  employeeCount: string
  country: string
  process: string
  email: string
  whatsapp: string
}

export type ContactFormState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}
