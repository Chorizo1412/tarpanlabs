import { Container } from '@/components/ui/Container'

const STATEMENTS = [
  'Primeras implementaciones en menos de 4 semanas',
  'Resultados medibles desde el inicio',
  '+20 años de experiencia combinada en tecnología y negocios',
  'Proyectos entregados en Argentina, México, Colombia y Chile',
]

export const TrustBar = () => (
  <div className="border-y border-line">
    <Container>
      <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
        {STATEMENTS.map((s) => (
          <li key={s} className="flex items-start gap-3 px-6 py-5">
            <span className="mt-0.5 font-mono text-xs text-accent">✓</span>
            <p className="text-sm leading-snug text-fg-muted">{s}</p>
          </li>
        ))}
      </ul>
    </Container>
  </div>
)
