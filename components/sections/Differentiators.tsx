import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const DIFFERENTIATORS = [
  {
    icon: '⚡',
    title: 'Velocidad real',
    description:
      'No son proyectos de 6 meses. Las primeras automatizaciones funcionan en semanas. Empezás a ver resultados antes de terminar el café.',
  },
  {
    icon: '🤝',
    title: 'No desaparecemos',
    description:
      'No somos una agencia que entrega y se va. Somos el equipo que te acompaña, mejora y escala la solución con vos.',
  },
  {
    icon: '🌎',
    title: 'LATAM primero',
    description:
      'Entendemos cómo funciona un negocio latinoamericano: las herramientas que usás, los sistemas que tenés, los clientes que atendés.',
  },
  {
    icon: '🔧',
    title: 'IA aplicada, no teórica',
    description:
      'No vendemos presentaciones sobre el futuro de la IA. Construimos soluciones que funcionan hoy en tu negocio.',
  },
]

export const Differentiators = () => (
  <Section background="muted">
    <Container>
      <h2 className="mb-12 text-center text-3xl font-bold text-brand-800 md:text-4xl">
        ¿Por qué elegirnos?
      </h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {DIFFERENTIATORS.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="flex-shrink-0 text-3xl" aria-hidden="true">{item.icon}</span>
            <div>
              <h3 className="mb-2 text-lg font-bold text-brand-800">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
)
