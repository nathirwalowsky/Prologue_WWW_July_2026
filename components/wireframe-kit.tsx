// Wireframe primitives for the Prologue Agency v2 wireframes.
// Intentionally low-fidelity (dashed borders + placeholders) so this reads as a
// wireframe, not a finished design.

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function WireBox({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function WireLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 font-mono text-xs uppercase tracking-wide text-neutral-500">
      {children}
    </span>
  )
}

export function WireHeading({
  level = 2,
  children,
  className,
}: {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}) {
  const sizes = {
    1: "text-3xl md:text-5xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-base md:text-lg",
  }
  return (
    <p className={cn("font-semibold tracking-tight text-neutral-800", sizes[level], className)}>
      {children}
    </p>
  )
}

export function WireText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={cn("leading-relaxed text-neutral-500", className)}>{children}</p>
}

export function WireButton({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md border-2 px-5 py-2.5 text-sm font-medium",
        variant === "primary"
          ? "border-blue-600 bg-blue-100 text-blue-800"
          : "border-neutral-500 bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {children}
    </span>
  )
}

// Reusable FAQ wireframe block.
export function WireFAQ({ count = 5 }: { count?: number }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <WireLabel>FAQ</WireLabel>
          <WireHeading level={2}>Frequently Asked Questions</WireHeading>
        </div>
        <div className="flex flex-col gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-5 py-4"
            >
              <p className="font-semibold text-neutral-800">
                {"Question " + (i + 1) + ": [FAQ question text]"}
              </p>
              <span className="font-mono text-xl text-neutral-400" aria-hidden="true">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Reusable CTA band.
export function WireCTA({
  title,
  text,
  primary,
  secondary,
  primaryHref,
  secondaryHref,
}: {
  title: string
  text?: string
  primary: string
  secondary?: string
  primaryHref?: string
  secondaryHref?: string
}) {
  const primaryClass =
    "rounded-md border-2 border-white bg-white px-5 py-2.5 text-sm font-medium text-blue-700"
  const secondaryClass =
    "rounded-md border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white"
  return (
    <section className="bg-blue-600 py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <WireHeading level={2} className="text-balance text-white">
          {title}
        </WireHeading>
        {text ? <p className="max-w-xl text-pretty leading-relaxed text-blue-100">{text}</p> : null}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {primaryHref ? (
            <Link href={primaryHref} className={primaryClass}>
              {primary}
            </Link>
          ) : (
            <span className={primaryClass}>{primary}</span>
          )}
          {secondary ? (
            secondaryHref ? (
              <Link href={secondaryHref} className={secondaryClass}>
                {secondary}
              </Link>
            ) : (
              <span className={secondaryClass}>{secondary}</span>
            )
          ) : null}
        </div>
      </div>
    </section>
  )
}

// Generic image / media placeholder.
export function WirePlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-dashed border-neutral-300 bg-neutral-100 text-center font-mono text-xs uppercase tracking-wide text-neutral-400",
        className,
      )}
    >
      {label}
    </div>
  )
}
