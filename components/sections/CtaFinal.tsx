import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

type CtaFinalProps = {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

export const CtaFinal = ({
  title = '¿Qué proceso de tu empresa podría funcionar solo?',
  subtitle = 'Cuéntanos en qué pierdes más tiempo. En 48 horas te decimos si lo podemos resolver.',
  ctaLabel = 'Solicitar consulta gratuita',
  ctaHref = '/contacto/',
}: CtaFinalProps) => (
  <Section id="contacto" className="border-t border-line" data-animate>
    <Container>
      <div className="relative border border-accent-dim bg-bg-1 p-10 shadow-accent-glow md:p-16">
        <div className="lab-corner-tl" />
        <div className="lab-corner-tr" />
        <div className="lab-corner-bl" />
        <div className="lab-corner-br" />

        <p className="overline mb-6">Siguiente paso</p>
        <h2 className="mb-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
          {title}
        </h2>
        <p className="mb-10 max-w-xl text-fg-muted">{subtitle}</p>
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
      </div>
    </Container>
  </Section>
)
