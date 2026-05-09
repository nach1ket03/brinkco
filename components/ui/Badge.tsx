import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'large'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono inline-flex items-center rounded-sm border border-[--lime-border] text-[--text-2] leading-none',
        variant === 'default' && 'px-2 py-1 text-[0.7rem]',
        variant === 'large' && 'px-3 py-1.5 text-[0.8rem] text-[--lime]',
        className
      )}
    >
      {children}
    </span>
  )
}
