import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import type { Faq } from '@/lib/types'

type FaqAccordionProps = {
  faqs: Faq[]
  title?: string
}

export const FaqAccordion = ({
  faqs,
  title = 'Preguntas frecuentes',
}: FaqAccordionProps) => (
  <Section background="muted">
    <Container className="max-w-3xl">
      <h2 className="mb-10 text-center text-3xl font-bold text-brand-800">{title}</h2>
      <dl className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6">
            <dt className="font-semibold text-brand-800">{faq.question}</dt>
            <dd className="mt-2 text-slate-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </Section>
)
