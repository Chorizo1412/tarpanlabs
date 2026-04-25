import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Differentiators } from '@/components/sections/Differentiators'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const HOME_FAQS = [
  {
    question: '¿Qué tipo de empresas trabajan con Tarpan Labs?',
    answer:
      'Trabajamos con PyMEs de cualquier industria en Latinoamérica que quieren automatizar procesos, mejorar la atención al cliente o aprovechar sus datos con inteligencia artificial. No se necesita un equipo técnico interno.',
  },
  {
    question: '¿En cuánto tiempo se ven los primeros resultados?',
    answer:
      'Las primeras implementaciones están en producción en menos de 4 semanas. No hacemos proyectos eternos: empezamos por el proceso que más impacto tiene y escalamos desde ahí.',
  },
  {
    question: '¿Necesito saber de tecnología para trabajar con ustedes?',
    answer:
      'No. Nuestro trabajo es entender tu proceso de negocio y construir la solución técnica. Tu equipo solo necesita conocer el problema que queremos resolver juntos.',
  },
  {
    question: '¿En qué países trabajan?',
    answer:
      'Trabajamos con empresas en Argentina, México, Colombia, Chile y toda Latinoamérica. Todo de forma remota, sin necesidad de presencia física.',
  },
]

export const metadata: Metadata = {
  title: `${siteConfig.name} | Inteligencia Artificial para empresas en LATAM`,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    title: `${siteConfig.name} | Inteligencia Artificial para empresas en LATAM`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(HOME_FAQS)} />
      <JsonLd
        data={buildWebPageSchema({
          name: `${siteConfig.name} | Inteligencia Artificial para empresas en LATAM`,
          description: siteConfig.description,
          url: `${siteConfig.url}/`,
        })}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Differentiators />
      <CaseStudies />
      <CtaFinal />
    </>
  )
}
