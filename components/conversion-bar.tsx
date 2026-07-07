"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ConversionBar() {
  const { t } = useLanguage()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1fr_auto] md:gap-16 md:px-6">

        {/* Left — copy + buttons */}
        <div className="flex flex-col gap-6">
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight md:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="max-w-lg text-pretty font-serif text-lg leading-relaxed text-primary-foreground/80">
            {t.home.ctaSub}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              {t.home.ctaSchedule}
            </a>
            <a
              href="/vector"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.home.ctaGetInTouch}
            </a>
          </div>
        </div>

        {/* Right — vertical video placeholder */}
        <div className="mx-auto w-full max-w-[260px] flex-shrink-0 md:mx-0">
          <div className="relative overflow-hidden rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 shadow-xl"
            style={{ aspectRatio: "9 / 16" }}
          >
            {playing ? (
              /* When a real video src is available, swap in a <video> element here */
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-mono text-xs text-primary-foreground/40 text-center px-4">
                  {t.home.ctaVideoLabel}
                </span>
              </div>
            ) : (
              <>
                {/* Thumbnail placeholder — replace with <Image> when asset is ready */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-primary-foreground/5">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground/40 px-4 text-center">
                    {t.home.ctaVideoLabel}
                  </span>
                </div>

                {/* Play button */}
                <button
                  type="button"
                  aria-label={t.home.ctaVideoPlay}
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-lg transition-transform group-hover:scale-110">
                    {/* Play triangle */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 translate-x-0.5 text-foreground"
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
