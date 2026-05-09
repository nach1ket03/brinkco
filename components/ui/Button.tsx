import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'text'

type BaseProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps & {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[--lime] text-[--bg-0] font-display font-bold hover:bg-[#d4f74a] active:scale-[0.97]',
  ghost:
    'border border-[--border] text-[--text-1] hover:border-[--lime-border] hover:text-[--lime] font-display font-bold bg-transparent',
  text:
    'text-[--text-2] hover:text-[--lime] underline-offset-4 hover:underline font-body p-0 h-auto',
}

const base =
  'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm transition-all duration-200 focus-visible:outline-[--lime] focus-visible:outline-2 focus-visible:outline-offset-2'

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('wa.')
    return (
      <Link
        href={href}
        target={isExternal ? target ?? '_blank' : target}
        rel={isExternal ? rel ?? 'noopener noreferrer' : rel}
        className={classes}
        {...(rest as object)}
      >
        {children}
      </Link>
    )
  }

  const { ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
