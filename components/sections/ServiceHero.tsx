import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { ServiceConfig } from '@/lib/types'
import { siteConfig } from '@/config/site'

type ServiceHeroProps = { service: ServiceConfig }

export const ServiceHero = ({ service }: ServiceHeroProps) => (
  <section className="bg-gradient-to-b from-brand-900 to-brand-800 py-20 text-white">
    <Container>
      <span className="mb-6 block text-5xl" aria-hidden="true">
        {service.icon}
      </span>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
        {service.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">{service.fullDescription}</p>
      <Button href={siteConfig.cta.primaryHref} size="lg" className="mt-8">
        {siteConfig.cta.primary}
      </Button>
    </Container>
  </section>
)
