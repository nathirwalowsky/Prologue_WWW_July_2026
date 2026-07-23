import { type HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export type BadgeVariant = 'default' | 'red' | 'blue' | 'sand' | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-white/8 text-[var(--muted-foreground)] border border-[var(--border)]',
  red:     'bg-[#BD3B35]/15 text-[#BD3B35] border border-[#BD3B35]/25',
  blue:    'bg-[#303E91]/15 text-[#7a8de0] border border-[#303E91]/25',
  sand:    'bg-[#90755F]/15 text-[#b8967e] border border-[#90755F]/25',
  outline: 'bg-transparent text-[var(--foreground)] border border-[var(--border)]',
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5',
        'font-display text-[0.65rem] font-semibold tracking-[0.12em] uppercase',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
