"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ConversionBar() {
  const { t } = useLanguage()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="border-t border-b border-[var(--border)] bg-[#111111] py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1fr_auto] md:gap-16 lg:px-8">

        {/* Left — copy + buttons */}
        <div className="flex flex-col gap-6">
          {/* Red accent rule */}
          <div className="h-px w-10 bg-[#BD3B35]" aria-hidden="true" />
          <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="max-w-lg text-pretty font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--muted-foreground)]">
            {t.home.ctaSub}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center border border-[#BD3B35] px-6 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.1em] uppercase text-[#BD3B35] transition-colors hover:bg-[#BD3B35] hover:text-[#f0eeec]"
            >
              {t.home.ctaSchedule}
            </a>
            <a
              href="/vector"
              className="inline-flex items-center border border-[var(--border)] px-6 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.1em] uppercase text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)]/30 hover:text-[var(--foreground)]"
            >
              {t.home.ctaGetInTouch}
            </a>
          </div>
        </div>

        {/* Right — vertical video placeholder, fixed 9:16 dimensions */}
        <div className="mx-auto flex-shrink-0 md:mx-0" style={{ width: 220, height: 391 }}>
          <div className="relative h-full w-full overflow-hidden border border-[var(--border)] bg-[#1a1a1a] shadow-xl">

            {playing ? (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] px-4 text-center">
                  {t.home.ctaVideoLabel}
                </span>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] px-4 text-center">
                    {t.home.ctaVideoLabel}
                  </span>
                </div>

                <button
                  type="button"
                  aria-label={t.home.ctaVideoPlay}
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <span className="flex h-14 w-14 items-center justify-center border border-[var(--border)] bg-[#0d0d0d]/80 shadow-lg transition-transform group-hover:scale-110">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 translate-x-0.5 text-[var(--foreground)]"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>

  )
}
