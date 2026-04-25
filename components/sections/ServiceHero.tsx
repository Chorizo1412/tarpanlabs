import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { ServiceConfig } from '@/lib/types'
import { siteConfig } from '@/config/site'

type ServiceHeroProps = { service: ServiceConfig }

export const ServiceHero = ({ service }: ServiceHeroProps) => (
  <section className="lab-grid relative border-b border-line pb-20 pt-16">
    <div className="lab-corner-tl" />
    <div className="lab-corner-tr" />
    <Container className="relative">
      <Badge variant="accent" className="mb-6">{service.name}</Badge>
      <span className="mb-4 block text-4xl text-accent" aria-hidden="true">
        {service.icon}
      </span>
      <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
        {service.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-fg-muted">{service.fullDescription}</p>
      <Button href={siteConfig.cta.primaryHref} size="lg" className="mt-10">
        {siteConfig.cta.primary}
      </Button>
    </Container>
  </section>
)
