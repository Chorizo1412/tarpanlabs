import Link from 'next/link'
import { Bot, Zap, Globe, Search, TrendingUp, Wrench } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { servicesConfig } from '@/config/services'
import type { LucideIcon } from 'lucide-react'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'chatbots-inteligencia-artificial': Bot,
  'automatizacion-de-procesos': Zap,
  'desarrollo-web': Globe,
  'auditoria-seo': Search,
  'auditoria-publicidad-digital': TrendingUp,
  'desarrollo-saas': Wrench,
}

export const ServicesGrid = () => (
  <Section id="servicios">
    <Container>
      <h2 className="mb-4 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
        Soluciones concretas para problemas reales
      </h2>
      <p className="mb-16 max-w-xl text-fg-muted">
        Cada servicio resuelve algo específico. Sin promesas vacías, sin proyectos que no terminan.
      </p>

      <ul className="grid grid-cols-1 gap-px border border-line sm:grid-cols-2 md:grid-cols-3">
        {servicesConfig.map((service, i) => {
          const Icon = SERVICE_ICONS[service.slug]
          return (
            <li key={service.slug} className="group bg-bg-1 p-8 transition-colors hover:bg-bg-2">
              <Link href={`/servicios/${service.slug}/`} className="block h-full">
                <span className="mb-6 block font-mono text-xs text-fg-dim">
                  0{i + 1}
                </span>
                <span className="mb-4 block text-accent" aria-hidden="true">
                  {Icon && <Icon size={28} strokeWidth={1.5} />}
                </span>
                <h3 className="mb-3 font-display text-xl font-medium text-fg">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {service.shortDescription}
                </p>
                <p className="mt-6 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Ver servicio →
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  </Section>
)
