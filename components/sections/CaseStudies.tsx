import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/lib/types'

const CASES: CaseStudy[] = [
  {
    slug: 'agente-soporte-ecommerce',
    industry: 'E-commerce',
    badge: 'Chatbots con IA',
    headline: '80% de consultas resueltas sin intervención humana',
    description:
      'Retailer de moda con 40k consultas mensuales en WhatsApp. Implementamos un chatbot entrenado con el catálogo, políticas de devolución y sistema de seguimiento de pedidos.',
    metrics: [
      { label: 'Consultas automatizadas', value: '80%' },
      { label: 'Tiempo de respuesta', value: '<12s' },
      { label: 'Reducción de carga del equipo', value: '−65%' },
    ],
  },
  {
    slug: 'automatizacion-inmobiliaria',
    industry: 'Inmobiliaria',
    badge: 'Automatización de procesos',
    headline: 'De 3 horas diarias de carga manual a cero',
    description:
      'Agencia con 200 propiedades activas que cargaba datos de portales a mano todos los días. Automatizamos la sincronización entre plataformas y el envío de reportes a propietarios.',
    metrics: [
      { label: 'Horas ahorradas por semana', value: '15h' },
      { label: 'Propiedades sincronizadas', value: '200+' },
      { label: 'Errores de carga', value: '0' },
    ],
  },
]

export const CaseStudies = () => (
  <Section id="casos">
    <Container>
      <p className="overline mb-4">Casos de Éxito</p>
      <h2 className="mb-16 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
        Resultados reales
      </h2>

      <ul className="space-y-px">
        {CASES.map((c) => (
          <li key={c.slug} className="border border-line bg-bg-1 p-8 transition-colors hover:bg-bg-2">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="muted">{c.industry}</Badge>
              <Badge variant="accent">{c.badge}</Badge>
            </div>
            <h3 className="mb-3 font-display text-2xl font-medium text-fg">
              {c.headline}
            </h3>
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

      <div className="mt-10">
        <Link href="/casos/" className="font-mono text-sm text-accent hover:underline">
          Ver todos los casos →
        </Link>
      </div>
    </Container>
  </Section>
)
