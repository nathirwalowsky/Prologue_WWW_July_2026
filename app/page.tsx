"use client"

import Image from "next/image"
import { HomeResults } from "@/components/home-results"
import { HomeServices } from "@/components/home-services"
import { BusinessSections } from "@/components/business-sections"
import { HomeWhoFor } from "@/components/home-who-for"
import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <SiteShell pageName="Home">

      {/* 1. HERO */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.home.heroEyebrow}
            </span>
            <h1 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              {t.home.heroHeading}{" "}
              <span className="text-accent">
                {t.home.heroHeadingAccent}
              </span>
            </h1>
            <p className="max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
              {t.home.heroSub}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/vector"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.home.heroCtaPrimary}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t.home.heroCtaSecondary}
              </a>
            </div>
          </div>

          {/* Symbol — atmospheric visual anchor */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/brand/prologue-symbol.png"
              alt=""
              aria-hidden="true"
              width={480}
              height={480}
              className="w-full max-w-[380px] opacity-90 md:max-w-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. RESULTS — key numbers + case studies */}
      <HomeResults />

      {/* 3. SERVICES — Building Strategy · Delivering Key Projects · Leading Transformation */}
      <HomeServices />

      {/* 4. WHAT CAN YOU ACHIEVE — business sections (possible results) */}
      <BusinessSections />

      {/* 5. CONVERSION BAR */}
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

      {/* 6. WHO IS PROLOGUE FOR — branching: in-group (FAQ) vs. not-in-group (blog + Vector) */}
      <HomeWhoFor />

      {/* Footer is rendered by SiteShell */}

    </SiteShell>
  )
}
