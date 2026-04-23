import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/lib/types'

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

export const CaseStudies = () => (
  <Section background="white">
    <Container>
      <h2 className="mb-4 text-center text-3xl font-bold text-brand-800 md:text-4xl">
        Casos de éxito
      </h2>
      <p className="mb-12 text-center text-slate-500">
        Resultados reales en empresas latinoamericanas
      </p>
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
      <div className="mt-10 text-center">
        <a href="/casos-de-exito/" className="font-semibold text-brand-600 hover:underline">
          Ver todos los casos →
        </a>
      </div>
    </Container>
  </Section>
)
