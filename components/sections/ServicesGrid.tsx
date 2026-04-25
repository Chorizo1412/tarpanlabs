import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { servicesConfig } from '@/config/services'

export const ServicesGrid = () => (
  <Section id="servicios">
    <Container>
      <h2 className="mb-4 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
        Lo que construimos para tu empresa
      </h2>
      <p className="mb-16 max-w-xl text-fg-muted">
        Cada servicio está diseñado para resolver un problema concreto. Sin proyectos eternos, sin promesas vagas.
      </p>

      <ul className="grid grid-cols-1 gap-px border border-line sm:grid-cols-2 md:grid-cols-3">
        {servicesConfig.map((service, i) => (
          <li key={service.slug} className="group bg-bg-1 p-8 transition-colors hover:bg-bg-2">
            <Link href={`/servicios/${service.slug}/`} className="block h-full">
              <span className="mb-6 block font-mono text-xs text-fg-dim">
                0{i + 1}
              </span>
              <span className="mb-4 block text-3xl text-accent" aria-hidden="true">
                {service.icon}
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
        ))}
      </ul>
    </Container>
  </Section>
)
