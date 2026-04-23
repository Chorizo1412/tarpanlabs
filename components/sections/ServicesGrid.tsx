import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { servicesConfig } from '@/config/services'

export const ServicesGrid = () => (
  <Section background="white">
    <Container>
      <h2 className="mb-4 text-center text-3xl font-bold text-brand-800 md:text-4xl">
        Nuestros servicios
      </h2>
      <p className="mb-12 text-center text-slate-500">
        Soluciones de IA diseñadas para el mercado latinoamericano
      </p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesConfig.map((service) => (
          <li key={service.slug}>
            <a href={`/servicios/${service.slug}/`} className="block h-full">
              <Card hover className="h-full">
                <span className="mb-4 block text-4xl" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-brand-800">{service.name}</h3>
                <p className="text-sm text-slate-600">{service.shortDescription}</p>
                <p className="mt-4 text-sm font-semibold text-brand-600">Ver más →</p>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
)
