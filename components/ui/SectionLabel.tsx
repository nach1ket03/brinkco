import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="block h-px w-8 bg-[--lime]" aria-hidden="true" />
      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[--lime]">
        {children}
      </span>
    </div>
  )
}
