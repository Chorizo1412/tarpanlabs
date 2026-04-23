import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'

const pageUrl = `${siteConfig.url}/contacto/`
const description =
  'Contanos qué proceso querés automatizar. Te respondemos en menos de 48 horas con una propuesta concreta.'

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
        <Container className="max-w-2xl">
          <h1 className="mb-2 text-4xl font-extrabold text-brand-800">
            ¿Qué proceso podría hacer solo?
          </h1>
          <p className="mb-10 text-lg text-slate-600">
            Contanos en qué perdiste más tiempo esta semana. En 48 horas te decimos si lo podemos
            automatizar.
          </p>
          <ContactForm />
        </Container>
      </Section>
    </>
  )
}
