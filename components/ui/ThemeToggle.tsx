'use client'

import { useTheme } from '@/lib/hooks/useTheme'
import { cn } from '@/lib/utils/cn'

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'a' ? 'Cambiar a tema violeta' : 'Cambiar a tema lima'}
      className={cn(
        'relative h-5 w-9 rounded-[--radius-pill] border border-line-strong bg-bg-2',
        'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
        className,
      )}
    >
      <span
        className={cn(
          'absolute top-0.5 h-3.5 w-3.5 rounded-full bg-accent transition-transform duration-200',
          theme === 'a' ? 'left-0.5' : 'left-[18px]',
        )}
      />
    </button>
  )
}
