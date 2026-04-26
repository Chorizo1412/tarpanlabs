import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/nosotros/`
const description =
  'Somos dos profesionales con más de 20 años de experiencia combinada en tecnología y negocios digitales. Implementamos soluciones de IA para empresas en Latinoamérica.'

export const metadata: Metadata = {
  title: `Nosotros | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Nosotros | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container className="max-w-3xl">
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
            tarpan labs
          </h1>
          <p className="mb-8 text-lg text-fg-muted">
            Somos dos profesionales con más de 20 años de experiencia combinada en tecnología y negocios digitales.
          </p>

          <div className="mb-8 space-y-6 border-l-2 border-line pl-6">
            <div>
              <p className="text-fg-muted">
                Más de 15 años trabajando en marketing digital y análisis de datos para algunas de las empresas más importantes del mundo. Esa trayectoria se traduce en soluciones que entienden el negocio antes que la tecnología.
              </p>
            </div>
            <div>
              <p className="text-fg-muted">
                Más de 5 años desarrollando productos digitales para empresas B2B. Código limpio, arquitectura sólida y foco en que lo que se construye funcione en producción, no solo en una demo.
              </p>
            </div>
          </div>

          <p className="text-fg-muted">
            tarpan labs nació para que cualquier empresa pueda acceder a tecnología que antes era exclusiva de las grandes corporaciones. Sin proyectos eternos, sin promesas vacías.
          </p>
        </Container>
      </Section>
      <CtaFinal
        title="Hablemos de tu negocio"
        subtitle="Cuéntanos qué proceso querés resolver. En 48 horas te respondemos."
        ctaLabel="Hablar con el equipo"
      />
    </>
  )
}
