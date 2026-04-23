import { Container } from '@/components/ui/Container'

const TRUST_ITEMS = [
  { value: '< 4 semanas', label: 'Primeras entregas' },
  { value: 'Incluido', label: 'Soporte continuo' },
  { value: '100%', label: 'Especialistas LATAM' },
  { value: 'AR · MX · CO · CL', label: 'Proyectos activos' },
]

export const TrustBar = () => (
  <div className="border-y border-slate-200 bg-slate-50 py-8">
    <Container>
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <li key={item.label} className="text-center">
            <p className="text-2xl font-bold text-brand-700">{item.value}</p>
            <p className="mt-1 text-sm text-slate-500">{item.label}</p>
          </li>
        ))}
      </ul>
    </Container>
  </div>
)
