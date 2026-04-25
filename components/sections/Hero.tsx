import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { siteConfig } from '@/config/site'

export const Hero = () => (
  <section id="inicio" className="lab-grid relative overflow-hidden border-b border-line pb-24 pt-20 md:pb-32 md:pt-28">
    <div className="lab-corner-tl" />
    <div className="lab-corner-tr" />
    <div className="lab-corner-bl" />
    <div className="lab-corner-br" />

    <Container className="relative">
      <Badge variant="accent" dot className="mb-8">
        IA para empresas · LATAM
      </Badge>

      <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-fg md:text-7xl">
        Inteligencia Artificial para empresas
        <br />
        <span className="text-accent">que no tienen tiempo que perder.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-fg-muted md:text-xl">
        {siteConfig.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={siteConfig.cta.primaryHref} size="lg">
          {siteConfig.cta.primary}
        </Button>
        <Button href={siteConfig.cta.secondaryHref} variant="secondary" size="lg">
          {siteConfig.cta.secondary}
        </Button>
      </div>
    </Container>
  </section>
)
