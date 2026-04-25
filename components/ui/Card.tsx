import { cn } from '@/lib/utils/cn'

type CardVariant = 'default' | 'elevated' | 'outline' | 'accent'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-bg-1 border border-line',
  elevated: 'bg-bg-2 border border-line shadow-md',
  outline: 'bg-transparent border border-line-strong',
  accent: 'bg-bg-1 border border-accent-dim shadow-accent-glow',
}

export const Card = ({ variant = 'default', className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-[--radius-lg] p-6 transition-all duration-200',
      variantClasses[variant],
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
