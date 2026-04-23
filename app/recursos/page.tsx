import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { resourcesConfig } from '@/config/resources'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Recursos y guías de IA para empresas | ${siteConfig.name}`,
  description:
    'Guías prácticas para implementar inteligencia artificial y automatización en tu empresa latinoamericana.',
  alternates: { canonical: `${siteConfig.url}/recursos/` },
}

export default function RecursosPage() {
  return (
    <Section>
      <Container>
        <h1 className="mb-4 text-3xl font-extrabold text-brand-800 md:text-4xl">
          Recursos y guías
        </h1>
        <p className="mb-12 text-slate-600">
          Guías prácticas para entender e implementar IA en tu empresa.
        </p>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourcesConfig.map((resource) => (
            <li key={resource.slug}>
              <a href={`/recursos/${resource.slug}/`} className="block h-full">
                <Card hover className="h-full">
                  <h2 className="mb-2 font-bold text-brand-800">{resource.title}</h2>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-600">Leer guía →</p>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
