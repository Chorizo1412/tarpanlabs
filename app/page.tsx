import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Differentiators } from '@/components/sections/Differentiators'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const HOME_FAQS = [
  {
    question: '¿Qué es una agencia de IA para empresas?',
    answer:
      'Una agencia de IA ayuda a empresas a implementar soluciones de inteligencia artificial como chatbots, automatizaciones y análisis de datos para mejorar sus operaciones y reducir costos.',
  },
  {
    question: '¿En cuánto tiempo veo resultados?',
    answer:
      'Las automatizaciones simples funcionan en 2-3 semanas. Proyectos más complejos como un SaaS a medida requieren entre 2 y 4 meses.',
  },
  {
    question: '¿Necesito saber de tecnología para trabajar con ustedes?',
    answer:
      'No. Nos encargamos de toda la parte técnica. Vos nos contás el problema, nosotros construimos la solución.',
  },
  {
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer:
      'Sí. Trabajamos con empresas desde 5 empleados hasta corporaciones medianas. El requisito es tener procesos claros que quieran mejorar.',
  },
  {
    question: '¿Qué países cubren?',
    answer:
      'Trabajamos con empresas en toda América Latina: Argentina, México, Colombia, Chile, Uruguay, Perú y el resto de la región. Todo de forma remota.',
  },
  {
    question: '¿Qué incluye el acompañamiento continuo?',
    answer:
      'Después de cada implementación el equipo sigue disponible para mejoras, ajustes y soporte. No se cobra extra por bugs o ajustes menores.',
  },
]

export const metadata: Metadata = {
  title: `Agencia de IA para empresas en LATAM | ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    title: `Agencia de IA para empresas en LATAM | ${siteConfig.name}`,
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
          name: `Agencia de IA para empresas en LATAM | ${siteConfig.name}`,
          description: siteConfig.description,
          url: `${siteConfig.url}/`,
        })}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Differentiators />
      <CaseStudies />
      <FaqAccordion faqs={HOME_FAQS} />
      <CtaFinal />
    </>
  )
}
