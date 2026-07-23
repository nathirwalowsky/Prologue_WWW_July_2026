import { type InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className="font-display text-xs font-semibold tracking-[0.12em] uppercase text-[var(--muted-foreground)]"
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'w-full bg-[var(--input)] text-[var(--foreground)]',
            'border border-[var(--border)] px-4 py-3',
            'font-body text-sm placeholder:text-[var(--muted-foreground)]',
            'transition-colors duration-150',
            'outline-none focus:border-[#BD3B35] focus:ring-1 focus:ring-[#BD3B35]/30',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            error ? 'border-[#BD3B35]' : '',
            className,
          )}
          {...props}
        />
        {error ? (
          <p className="font-body text-xs text-[#BD3B35]">{error}</p>
        ) : hint ? (
          <p className="font-body text-xs text-[var(--muted-foreground)]">{hint}</p>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className="font-display text-xs font-semibold tracking-[0.12em] uppercase text-[var(--muted-foreground)]"
          >
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={inputId}
          className={clsx(
            'w-full bg-[var(--input)] text-[var(--foreground)]',
            'border border-[var(--border)] px-4 py-3',
            'font-body text-sm placeholder:text-[var(--muted-foreground)]',
            'transition-colors duration-150 resize-none',
            'outline-none focus:border-[#BD3B35] focus:ring-1 focus:ring-[#BD3B35]/30',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            error ? 'border-[#BD3B35]' : '',
            className,
          )}
          {...props}
        />
        {error ? (
          <p className="font-body text-xs text-[#BD3B35]">{error}</p>
        ) : hint ? (
          <p className="font-body text-xs text-[var(--muted-foreground)]">{hint}</p>
        ) : null}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
