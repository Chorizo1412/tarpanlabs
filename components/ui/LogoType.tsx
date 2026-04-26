type LogoTypeProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const

export const LogoType = ({ className, size = 'md' }: LogoTypeProps) => (
  <span className={`font-mono font-medium tracking-tight ${SIZE[size]}${className ? ` ${className}` : ''}`}>
    <span className="text-accent">./</span>
    <span className="text-fg">tarpanlabs</span>
  </span>
)
