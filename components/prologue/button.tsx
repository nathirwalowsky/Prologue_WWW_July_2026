'use client'

import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'sand'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#BD3B35] text-[#f0eeec] hover:bg-[#a33230] active:bg-[#8a2a28] border border-transparent',
  secondary:
    'bg-[#303E91] text-[#f0eeec] hover:bg-[#283580] active:bg-[#1f2a6a] border border-transparent',
  ghost:
    'bg-transparent text-[var(--foreground)] hover:bg-white/5 active:bg-white/10 border border-transparent',
  outline:
    'bg-transparent text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 active:bg-white/5',
  sand:
    'bg-[#90755F] text-[#f0eeec] hover:bg-[#7d6352] active:bg-[#6a5244] border border-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.12em] uppercase',
  md: 'px-6 py-3 text-sm tracking-[0.12em] uppercase',
  lg: 'px-8 py-4 text-sm tracking-[0.12em] uppercase',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', loading = false, disabled, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-display font-semibold',
          'transition-all duration-[250ms] cubic-bezier(0.16,1,0.3,1)',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD3B35] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
          'disabled:pointer-events-none disabled:opacity-40',
          'cursor-pointer select-none whitespace-nowrap',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
