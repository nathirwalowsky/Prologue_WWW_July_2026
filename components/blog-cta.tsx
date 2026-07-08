"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

/**
 * Two variants:
 *   "inline" — compact horizontal banner dropped mid-article between sections.
 *              Sits inside the article's max-width prose column.
 *   "end"    — full-width dark band placed after the article body,
 *              between the author bio and the related posts.
 */
export function BlogCta({ variant }: { variant: "inline" | "end" }) {
  const { t } = useLanguage()

  if (variant === "inline") {
    return (
      <aside
        aria-label={t.blog.ctaMidLabel}
        className="my-2 flex flex-col gap-4 rounded-xl border border-primary/20 bg-secondary px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {t.blog.ctaMidLabel}
          </span>
          <p className="text-balance font-sans text-base font-semibold text-foreground">
            {t.blog.ctaMidTitle}
          </p>
          <p className="text-pretty font-serif text-sm leading-relaxed text-muted-foreground">
            {t.blog.ctaMidDesc}
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-2 sm:items-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.blog.ctaMidPrimary}
          </Link>
          <Link
            href="/vector"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t.blog.ctaMidSecondary}
          </Link>
        </div>
      </aside>
    )
  }

  return (
    <section className="bg-foreground py-16 text-background">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 md:px-6">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-background/50">
          {t.blog.ctaEndLabel}
        </span>
        <h2 className="text-balance font-sans text-2xl font-semibold tracking-tight md:text-3xl">
          {t.blog.ctaEndTitle}
        </h2>
        <p className="max-w-xl text-pretty font-serif text-base leading-relaxed text-background/70">
          {t.blog.ctaEndDesc}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            {t.blog.ctaEndPrimary}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-background/70 transition-colors hover:text-background"
          >
            {t.blog.ctaEndSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
