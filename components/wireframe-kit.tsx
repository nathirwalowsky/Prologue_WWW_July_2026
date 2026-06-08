// Wireframe primitives for the Prologue Agency v2 wireframes.
// Intentionally low-fidelity (dashed borders + placeholders) so this reads as a
// wireframe, not a finished design.

import type React from "react"
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
