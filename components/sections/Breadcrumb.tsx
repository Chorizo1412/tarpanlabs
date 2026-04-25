import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/utils/schema'
import type { BreadcrumbItem } from '@/lib/types'

type BreadcrumbProps = { items: BreadcrumbItem[] }

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <>
    <JsonLd data={buildBreadcrumbSchema(items)} />
    <nav aria-label="Breadcrumb" className="border-b border-line py-3">
      <Container>
        <ol className="flex items-center gap-2 font-mono text-xs text-fg-dim">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-fg">
                  {item.name}
                </Link>
              ) : (
                <span className="text-fg-muted" aria-current="page">
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
