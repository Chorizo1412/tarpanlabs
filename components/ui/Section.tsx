import { cn } from '@/lib/utils/cn'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'article'
  background?: 'white' | 'muted' | 'brand'
}

const bgClasses: Record<NonNullable<SectionProps['background']>, string> = {
  white: 'bg-white',
  muted: 'bg-slate-50',
  brand: 'bg-brand-800 text-white',
}

export const Section = ({
  as: Tag = 'section',
  background = 'white',
  className,
  children,
  ...props
}: SectionProps) => (
  <Tag
    className={cn('py-16 md:py-24', bgClasses[background], className)}
    {...props}
  >
    {children}
  </Tag>
)
