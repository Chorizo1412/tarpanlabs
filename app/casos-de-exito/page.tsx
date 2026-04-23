import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'
import type { CaseStudy } from '@/lib/types'

const pageUrl = `${siteConfig.url}/casos-de-exito/`
const description =
  'Resultados reales de empresas latinoamericanas que implementaron IA y automatización. Chatbots, automatizaciones y desarrollo web.'

export const metadata: Metadata = {
  title: `Casos de éxito | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

const CASES: CaseStudy[] = [
  {
    industry: 'E-commerce de ropa',
    problem:
      'Respondía consultas de WhatsApp de forma manual, 8 horas al día. El equipo no daba abasto en temporada alta.',
    solution:
      'Implementamos un chatbot de WhatsApp entrenado con el catálogo, políticas y FAQs del negocio.',
    result:
      'El 80% de las consultas se resuelven automáticamente. El equipo ahora maneja solo casos complejos y ventas.',
  },
  {
    industry: 'Agencia de marketing',
    problem:
      'Cargaba reportes de campañas manualmente desde 4 plataformas distintas. 3 horas semanales de copy-paste.',
    solution:
      'Automatizamos la recopilación de datos y la generación del informe semanal para clientes.',
    result:
      'Los reportes se generan solos cada lunes a las 8am. El equipo recuperó 3 horas semanales por cliente.',
  },
]

export default function CasosPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Casos de éxito | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container>
          <h1 className="mb-4 text-4xl font-extrabold text-brand-800">Casos de éxito</h1>
          <p className="mb-12 text-lg text-slate-600">Resultados reales. Sin marketing vacío.</p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <li key={c.industry}>
                <Card className="h-full">
                  <Badge className="mb-4">{c.industry}</Badge>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-800">Problema: </span>
                      <span className="text-slate-600">{c.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Solución: </span>
                      <span className="text-slate-600">{c.solution}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700">Resultado: </span>
                      <span className="text-slate-600">{c.result}</span>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaFinal />
    </>
  )
}
