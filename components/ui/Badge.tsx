import { cn } from '@/lib/utils/cn'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'success' | 'muted'
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-brand-50 text-brand-700',
  success: 'bg-green-50 text-green-700',
  muted: 'bg-slate-100 text-slate-600',
}

export const Badge = ({ variant = 'default', className, children, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
      variantClasses[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
