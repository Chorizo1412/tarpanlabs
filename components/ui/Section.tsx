import { cn } from '@/lib/utils/cn'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'article'
}

export const Section = ({
  as: Tag = 'section',
  className,
  children,
  ...props
}: SectionProps) => (
  <Tag
    className={cn('py-24 md:py-32', className)}
    {...props}
  >
    {children}
  </Tag>
)
