import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-ink hover:brightness-110 border border-transparent',
  secondary:
    'bg-bg-2 text-fg border border-line-strong hover:border-accent hover:text-accent',
  ghost:
    'bg-transparent text-fg-muted hover:text-fg hover:bg-bg-2 border border-transparent',
  outline:
    'bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-ink',
  destructive:
    'bg-transparent text-danger border-danger-dim border hover:bg-danger-subtle',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-3',
}

export const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-[--radius] transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-40 pointer-events-none',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
