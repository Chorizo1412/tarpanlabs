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
  title = '¿Qué proceso de tu empresa podría hacer solo?',
  subtitle = 'Contanos en qué perdiste más tiempo esta semana. En 48 horas te decimos si lo podemos automatizar.',
  ctaLabel = 'Quiero una consulta gratuita',
  ctaHref = '/contacto/',
}: CtaFinalProps) => (
  <Section background="brand">
    <Container className="text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{subtitle}</p>
      <Button
        href={ctaHref}
        size="lg"
        className="mt-8 bg-white text-brand-800 hover:bg-slate-100"
      >
        {ctaLabel}
      </Button>
    </Container>
  </Section>
)
