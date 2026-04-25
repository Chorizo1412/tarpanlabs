import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { resourcesConfig } from '@/config/resources'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Recursos | ${siteConfig.name}`,
  description:
    'Guías técnicas sobre agentes de IA, RAG y AI Ops para empresas latinoamericanas.',
  alternates: { canonical: `${siteConfig.url}/recursos/` },
}

export default function RecursosPage() {
  return (
    <Section>
      <Container>
        <Badge variant="muted" className="mb-6">Recursos</Badge>
        <h1 className="mb-16 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
          Guías técnicas.
        </h1>
        <ul className="grid grid-cols-1 gap-px border border-line md:grid-cols-2 lg:grid-cols-3">
          {resourcesConfig.map((resource) => (
            <li key={resource.slug} className="group bg-bg-1 p-8 transition-colors hover:bg-bg-2">
              <Link href={`/recursos/${resource.slug}/`} className="block h-full">
                <h2 className="mb-3 font-medium text-fg">{resource.title}</h2>
                <p className="text-sm text-fg-muted">{resource.description}</p>
                <p className="mt-6 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Leer →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
