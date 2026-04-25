import { cn } from '@/lib/utils/cn'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container = ({ className, children, ...props }: ContainerProps) => (
  <div
    className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12', className)}
    {...props}
  >
    {children}
  </div>
)
