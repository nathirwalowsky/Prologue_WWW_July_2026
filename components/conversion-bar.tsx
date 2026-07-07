"use client"

import { useLanguage } from "@/contexts/language-context"

export function ConversionBar() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight md:text-4xl">
          {t.home.ctaTitle}
        </h2>
        <p className="max-w-xl text-pretty font-serif text-lg leading-relaxed text-primary-foreground/80">
          {t.home.ctaSub}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/vector"
            className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            {t.home.ctaSchedule}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {t.home.ctaGetInTouch}
          </a>
        </div>
      </div>
    </section>
  )
}
