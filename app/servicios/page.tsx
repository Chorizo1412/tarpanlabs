import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { servicesConfig } from '@/config/services'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/servicios/`
const description =
  'Agentes de IA, bases de conocimiento RAG e infraestructura AI Ops para empresas latinoamericanas. Ingeniería de IA aplicada a producción.'

export const metadata: Metadata = {
  title: `Servicios | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Servicios | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container>
          <Badge variant="accent" className="mb-6">Servicios</Badge>
          <h1 className="mb-16 max-w-xl font-display text-5xl font-medium leading-tight tracking-tight text-fg">
            Tres disciplinas.<br />Un solo equipo.
          </h1>

          <ul className="grid grid-cols-1 gap-px border border-line md:grid-cols-3">
            {servicesConfig.map((service, i) => (
              <li key={service.slug} className="group bg-bg-1 p-8 transition-colors hover:bg-bg-2">
                <Link href={`/servicios/${service.slug}/`} className="block h-full">
                  <span className="mb-6 block font-mono text-xs text-fg-dim">0{i + 1}</span>
                  <span className="mb-4 block text-3xl text-accent" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h2 className="mb-3 font-display text-xl font-medium text-fg">
                    {service.name}
                  </h2>
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
      <CtaFinal />
    </>
  )
}
