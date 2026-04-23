import { cn } from '@/lib/utils/cn'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean
}

export const Card = ({ hover = false, className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-xl border border-slate-200 bg-white p-6 shadow-sm',
      hover && 'transition-shadow duration-200 hover:shadow-md',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
