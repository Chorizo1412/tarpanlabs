import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

type ResourceHeroProps = {
  title: string
  description: string
  relatedService: string
  relatedServiceHref: string
}

export const ResourceHero = ({
  title,
  description,
  relatedService,
  relatedServiceHref,
}: ResourceHeroProps) => (
  <section className="border-b border-slate-200 bg-slate-50 py-16">
    <Container className="max-w-3xl">
      <Badge variant="muted" className="mb-4">
        Guía
      </Badge>
      <h1 className="text-3xl font-extrabold text-brand-800 md:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-slate-600">{description}</p>
      <p className="mt-4 text-sm text-slate-500">
        Servicio relacionado:{' '}
        <a href={relatedServiceHref} className="font-medium text-brand-600 hover:underline">
          {relatedService}
        </a>
      </p>
    </Container>
  </section>
)
