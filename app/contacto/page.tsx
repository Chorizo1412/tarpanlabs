import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/contacto/`
const description =
  'Cuéntanos qué proceso o problema quieres resolver. En menos de 48 horas te respondemos con una evaluación honesta de si podemos ayudarte y cómo.'

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
}

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: `Contacto | ${siteConfig.name}`,
          description,
          url: pageUrl,
        })}
      />
      <Section>
        <Container className="max-w-xl">
          <h1 className="mb-3 font-display text-4xl font-medium leading-tight tracking-tight text-fg">
            Hablemos de tu negocio
          </h1>
          <p className="mb-10 text-fg-muted">
            Cuéntanos qué proceso o problema quieres resolver. En menos de 48 horas te respondemos con una evaluación honesta de si podemos ayudarte y cómo.
          </p>
          <ContactForm />
        </Container>
      </Section>
    </>
  )
}
