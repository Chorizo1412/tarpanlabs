import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const DIFFERENTIATORS = [
  {
    title: 'Resultados en semanas, no en meses.',
    description:
      'No hacemos proyectos de seis meses que terminan en una presentación. Las primeras automatizaciones funcionan antes de que termine el mes.',
  },
  {
    title: 'Resolvemos el problema, no el síntoma.',
    description:
      'Antes de escribir una línea de código, entendemos qué está fallando y por qué. La solución que entregamos ataca la causa, no los efectos.',
  },
  {
    title: 'Sabes exactamente qué estás contratando.',
    description:
      'Sin letra chica, sin sorpresas. Antes de empezar tienes claro qué se va a construir, cuándo va a estar listo y qué métricas vamos a medir.',
  },
  {
    title: 'Tecnología que ya probamos en negocios reales.',
    description:
      'Cada solución que ofrecemos es algo que ya implementamos, rompimos, mejoramos y volvimos a implementar. No experimentamos con tu negocio.',
  },
]

export const Differentiators = () => (
  <Section className="pt-10 pb-16 md:pt-12 md:pb-20" data-animate>
    <Container>
      <h2 className="mb-24 font-display text-3xl font-medium leading-tight tracking-tight text-fg md:text-4xl">
        Por qué tarpan labs
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {DIFFERENTIATORS.map((item) => (
          <li key={item.title} className="border-l-2 border-accent pl-6">
            <h3 className="mb-2 font-display text-lg font-medium text-fg">{item.title}</h3>
            <p className="text-sm leading-relaxed text-fg-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
)
