import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/nosotros/`
const description =
  'Conocé al equipo detrás de la agencia de IA para empresas latinoamericanas. Especialistas con experiencia real en automatización e inteligencia artificial.'

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
          <h1 className="mb-4 text-4xl font-extrabold text-brand-800">
            El equipo detrás de {siteConfig.name}
          </h1>
          <p className="mb-8 text-lg text-slate-600">
            Somos especialistas en inteligencia artificial aplicada a negocios latinoamericanos.
            No consultores que recomiendan — ejecutores que construyen y acompañan.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-semibold text-amber-800">Contenido pendiente</p>
            <p className="mt-2 text-sm text-amber-700">
              Completar con: foto real + nombre + cargo + LinkedIn de cada fundador, años de
              experiencia específicos, herramientas certificadas e historia con fechas. Ver
              sección 04 del plan SEO v2.0 para especificaciones E-E-A-T.
            </p>
          </div>
        </Container>
      </Section>
      <CtaFinal />
    </>
  )
}
