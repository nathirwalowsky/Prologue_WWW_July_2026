import { clsx } from 'clsx'

export interface DividerProps {
  label?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ label, className, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={clsx('w-px self-stretch bg-[var(--border)]', className)}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  if (label) {
    return (
      <div className={clsx('flex items-center gap-4', className)} role="separator">
        <div className="flex-1 h-px bg-[var(--border)]" />
        <span className="font-display text-xs font-semibold tracking-[0.15em] uppercase text-[var(--muted-foreground)] shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>
    )
  }

  return (
    <hr
      className={clsx('border-0 border-t border-[var(--border)]', className)}
    />
  )
}
