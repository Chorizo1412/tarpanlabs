import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/utils/schema'
import type { BreadcrumbItem } from '@/lib/types'

type BreadcrumbProps = { items: BreadcrumbItem[] }

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <>
    <JsonLd data={buildBreadcrumbSchema(items)} />
    <nav aria-label="Breadcrumb" className="bg-slate-50 py-3">
      <Container>
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index < items.length - 1 ? (
                <a href={item.href} className="hover:text-brand-700">
                  {item.name}
                </a>
              ) : (
                <span className="font-medium text-slate-800" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  </>
)
