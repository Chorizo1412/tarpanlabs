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
  <Section>
    <Container className="max-w-3xl">
      <p className="overline mb-4">FAQ</p>
      <h2 className="mb-12 font-display text-4xl font-medium leading-tight tracking-tight text-fg">
        {title}
      </h2>
      <dl className="divide-y divide-line border border-line">
        {faqs.map((faq) => (
          <div key={faq.question} className="px-6 py-5">
            <dt className="font-medium text-fg">{faq.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </Section>
)
