import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/laboratorio/`
const description =
  'Experimentos, herramientas y notas técnicas del equipo de tarpan labs. Benchmarks de modelos, patrones de arquitectura y aprendizajes de proyectos reales.'

export const metadata: Metadata = {
  title: `Laboratorio | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

export default function LaboratorioPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Laboratorio | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container className="max-w-3xl">
          <Badge variant="accent" dot className="mb-6">
            nuevo
          </Badge>
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
            Laboratorio
          </h1>
          <p className="mb-10 text-lg text-fg-muted">
            Experimentos, benchmarks y notas técnicas del equipo. Lo que aprendemos en proyectos
            reales, publicado sin filtros de marketing.
          </p>

          <div className="border border-line bg-bg-1 p-8 text-center">
            <p className="font-mono text-sm text-fg-dim">
              — Primeras notas en camino —
            </p>
            <p className="mt-3 text-sm text-fg-dim">
              Suscribite al newsletter para recibir los primeros artículos.
            </p>
          </div>
        </Container>
      </Section>
      <CtaFinal
        title="¿Querés que apliquemos esto a tu empresa?"
        subtitle="Lo que publicamos en el lab viene de proyectos reales. Contanos el tuyo."
      />
    </>
  )
}
