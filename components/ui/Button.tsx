import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-600',
  secondary:
    'border-2 border-brand-700 text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-600',
  ghost: 'text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-600',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => (
  <a
    href={href}
    className={cn(
      'inline-flex items-center justify-center rounded-lg font-semibold',
      'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
