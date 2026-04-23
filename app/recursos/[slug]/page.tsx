import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ResourceHero } from '@/components/sections/ResourceHero'
import { Breadcrumb } from '@/components/sections/Breadcrumb'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildWebPageSchema } from '@/lib/utils/schema'
import { resourcesConfig, getResourceBySlug } from '@/config/resources'
import { getServiceBySlug } from '@/config/services'
import { siteConfig } from '@/config/site'

type Params = { slug: string }

export const generateStaticParams = () =>
  resourcesConfig.map((r) => ({ slug: r.slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> => {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  if (!resource) return {}

  const url = `${siteConfig.url}/recursos/${resource.slug}/`
  return {
    title: `${resource.title} | ${siteConfig.name}`,
    description: resource.description,
    keywords: resource.keywords,
    alternates: { canonical: url },
    openGraph: { title: resource.title, description: resource.description, url },
  }
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  if (!resource) notFound()

  const relatedService = getServiceBySlug(resource.relatedServiceSlug)
  const pageUrl = `${siteConfig.url}/recursos/${resource.slug}/`

  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: resource.title,
          description: resource.description,
          url: pageUrl,
        })}
      />
      <Breadcrumb
        items={[
          { name: 'Inicio', href: `${siteConfig.url}/` },
          { name: 'Recursos', href: `${siteConfig.url}/recursos/` },
          { name: resource.title, href: pageUrl },
        ]}
      />
      <ResourceHero
        title={resource.title}
        description={resource.description}
        relatedService={relatedService?.name ?? ''}
        relatedServiceHref={`/servicios/${resource.relatedServiceSlug}/`}
      />
      <Section>
        <Container className="max-w-3xl">
          {resource.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-brand-800">{section.heading}</h2>
              <p className="mt-3 text-slate-700">{section.content}</p>
            </div>
          ))}
        </Container>
      </Section>
      <CtaFinal
        title="¿Querés implementar esto en tu empresa?"
        subtitle="Contanos tu proceso. En 48 horas te decimos cómo podemos ayudarte."
      />
    </>
  )
}
