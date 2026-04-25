import Link from 'next/link'
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
  <section className="border-b border-line pb-16 pt-12">
    <Container className="max-w-3xl">
      <Badge variant="muted" className="mb-6">
        Recurso
      </Badge>
      <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-fg md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-fg-muted">{description}</p>
      <p className="mt-4 text-sm text-fg-dim">
        Servicio relacionado:{' '}
        <Link href={relatedServiceHref} className="text-accent hover:underline">
          {relatedService}
        </Link>
      </p>
    </Container>
  </section>
)
