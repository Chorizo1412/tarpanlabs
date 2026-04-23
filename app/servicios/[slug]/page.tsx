import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/sections/Breadcrumb'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildServiceSchema, buildWebPageSchema } from '@/lib/utils/schema'
import { servicesConfig, getServiceBySlug } from '@/config/services'
import { siteConfig } from '@/config/site'
import type { ServiceSlug } from '@/lib/types'

type Params = { slug: ServiceSlug }

export const generateStaticParams = () =>
  servicesConfig.map((s) => ({ slug: s.slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> => {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const title = `${service.name} para empresas en LATAM | ${siteConfig.name}`
  const url = `${siteConfig.url}/servicios/${service.slug}/`

  return {
    title,
    description: service.shortDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: { title, description: service.shortDescription, url },
  }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const pageUrl = `${siteConfig.url}/servicios/${service.slug}/`

  return (
    <>
      <JsonLd data={buildServiceSchema(service, pageUrl)} />
      <JsonLd
        data={buildWebPageSchema({
          name: service.name,
          description: service.shortDescription,
          url: pageUrl,
        })}
      />
      <Breadcrumb
        items={[
          { name: 'Inicio', href: `${siteConfig.url}/` },
          { name: service.name, href: pageUrl },
        ]}
      />
      <ServiceHero service={service} />
      <FaqAccordion faqs={service.faqs} title={`Preguntas sobre ${service.name}`} />
      <CtaFinal />
    </>
  )
}
