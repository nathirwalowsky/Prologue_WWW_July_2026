import { type HTMLAttributes } from 'react'
import { clsx } from 'clsx'

/* Display — for hero headlines, Jost SemiBold, wide tracking */
export function Display({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={clsx(
        'font-display font-semibold leading-[1.0] tracking-[-0.02em]',
        'text-[clamp(3rem,8vw,6rem)]',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

/* Heading — section titles */
export function Heading({
  as: Tag = 'h2',
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' }) {
  return (
    <Tag
      className={clsx('font-display font-semibold leading-[1.1] tracking-[-0.01em]', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

/* Label — small uppercase labels (Jost) */
export function Label({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        'font-display text-xs font-semibold tracking-[0.15em] uppercase',
        'text-[var(--muted-foreground)]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/* Body — body text (Spectral) */
export function Body({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx('font-body text-base leading-relaxed text-[var(--foreground)]', className)}
      {...props}
    >
      {children}
    </p>
  )
}

/* Caption — small supporting text (Spectral italic) */
export function Caption({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        'font-body italic text-sm leading-relaxed text-[var(--muted-foreground)]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
