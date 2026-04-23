import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export const Hero = () => (
  <section className="bg-gradient-to-b from-brand-900 to-brand-800 py-24 text-white md:py-32">
    <Container className="text-center">
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Automatizá los procesos que frenan tu negocio.{' '}
        <span className="text-accent-400">Nosotros los convertimos en ventaja competitiva.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
        Somos una agencia especializada en Inteligencia Artificial para empresas en latinoamérica.
        Chatbots, automatizaciones y tecnología que funciona desde la primera semana.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href={siteConfig.cta.primaryHref} size="lg">
          {siteConfig.cta.primary}
        </Button>
        <Button
          href={siteConfig.cta.secondaryHref}
          variant="secondary"
          size="lg"
          className="border-white text-white hover:bg-white/10"
        >
          {siteConfig.cta.secondary}
        </Button>
      </div>
    </Container>
  </section>
)
