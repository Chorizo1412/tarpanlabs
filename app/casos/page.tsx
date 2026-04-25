import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'
import type { CaseStudy } from '@/lib/types'

const pageUrl = `${siteConfig.url}/casos/`
const description =
  'Resultados reales de empresas reales. Casos de automatización, chatbots con IA y desarrollo web para PyMEs en Latinoamérica.'

export const metadata: Metadata = {
  title: `Casos de Éxito | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

const CASES: CaseStudy[] = [
  {
    slug: 'agente-soporte-ecommerce',
    industry: 'E-commerce',
    badge: 'Chatbots con IA',
    headline: '80% de consultas resueltas sin intervención humana',
    description:
      'Retailer de moda con 40k consultas mensuales en WhatsApp. Entrenamos un chatbot con el catálogo de productos, políticas de devolución y sistema de seguimiento de pedidos. El equipo de atención al cliente se liberó del 80% de las consultas repetitivas.',
    metrics: [
      { label: 'Consultas automatizadas', value: '80%' },
      { label: 'Tiempo de respuesta promedio', value: '<12s' },
      { label: 'Reducción de carga del equipo', value: '−65%' },
    ],
  },
  {
    slug: 'automatizacion-inmobiliaria',
    industry: 'Inmobiliaria',
    badge: 'Automatización de procesos',
    headline: 'De 3 horas diarias de carga manual a cero',
    description:
      'Agencia con 200 propiedades activas que cargaba datos de portales a mano todos los días. Automatizamos la sincronización entre plataformas y el envío de reportes semanales a propietarios. Cero errores de carga desde la implementación.',
    metrics: [
      { label: 'Horas ahorradas por semana', value: '15h' },
      { label: 'Propiedades sincronizadas', value: '200+' },
      { label: 'Errores de carga', value: '0' },
    ],
  },
  {
    slug: 'sitio-web-consultora',
    industry: 'Servicios Profesionales',
    badge: 'Desarrollo Web',
    headline: 'De invisible en Google a primera página en 90 días',
    description:
      'Consultora de RRHH con un sitio de 8 años que no generaba leads. Reconstruimos el sitio con arquitectura SEO, velocidad optimizada y copy orientado a conversión. En 3 meses pasó a primera página para las búsquedas clave del rubro.',
    metrics: [
      { label: 'Posición en Google', value: 'Top 3' },
      { label: 'Tiempo de carga', value: '<1.8s' },
      { label: 'Leads mensuales', value: '+340%' },
    ],
  },
]

export default function CasosPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Casos de Éxito | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container>
          <h1 className="mb-4 max-w-xl font-display text-5xl font-medium leading-tight tracking-tight text-fg">
            Resultados reales de empresas reales
          </h1>
          <p className="mb-16 max-w-xl text-fg-muted">
            Estos son algunos de los problemas que resolvimos. Sin adornos, sin métricas infladas.
          </p>

          <ul className="space-y-px">
            {CASES.map((c) => (
              <li key={c.slug} className="border border-line bg-bg-1 p-8 transition-colors hover:bg-bg-2">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Badge variant="muted">{c.industry}</Badge>
                  <Badge variant="accent">{c.badge}</Badge>
                </div>
                <h2 className="mb-3 font-display text-2xl font-medium text-fg">
                  {c.headline}
                </h2>
                <p className="mb-8 max-w-2xl text-sm text-fg-muted">{c.description}</p>
                <ul className="flex flex-wrap gap-8">
                  {c.metrics.map((m) => (
                    <li key={m.label}>
                      <p className="font-mono text-2xl font-medium text-accent">{m.value}</p>
                      <p className="mt-0.5 text-xs text-fg-dim">{m.label}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaFinal
        title="¿Tu empresa podría ser el próximo caso?"
        subtitle="Contanos el proceso. En 48 horas te decimos si lo podemos resolver."
      />
    </>
  )
}
