import { cn } from '@/lib/utils/cn'

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'muted'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  dot?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-bg-2 text-fg border border-line',
  accent: 'bg-accent-subtle text-accent border border-accent-dim',
  success: 'bg-success-subtle text-success border border-success-dim',
  warning: 'bg-warning-subtle text-warning border border-warning-dim',
  danger: 'bg-danger-subtle text-danger border-danger-dim border',
  muted: 'bg-bg-2 text-fg-dim border border-line',
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-fg',
  accent: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  muted: 'bg-fg-dim',
}

export const Badge = ({ variant = 'default', dot = false, className, children, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-[--radius-pill] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest',
      variantClasses[variant],
      className,
    )}
    {...props}
  >
    {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dotColors[variant])} />}
    {children}
  </span>
)
