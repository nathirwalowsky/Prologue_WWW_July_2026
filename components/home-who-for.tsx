"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/lib/blog-data"

export function HomeWhoFor() {
  const { t } = useLanguage()

  const symptoms = [
    t.home.whoSymptom1,
    t.home.whoSymptom2,
    t.home.whoSymptom3,
    t.home.whoSymptom4,
    t.home.whoSymptom5,
    t.home.whoSymptom6,
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.whoLabel}
          </span>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t.home.whoTitle}
            </h2>
            <p className="font-serif text-base text-muted-foreground md:text-right md:max-w-xs">
              {t.home.whoSub}
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_340px] md:gap-16">

          {/* Left — symptom checklist */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col divide-y divide-border">
              {symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-xs tabular-nums text-muted-foreground/40 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="mt-1 flex-shrink-0 h-3.5 w-3.5 rounded-full border border-accent/50 bg-accent/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 10 10" fill="none" className="h-2 w-2 text-accent">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="font-serif text-base leading-relaxed text-foreground">
                    {symptom}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col gap-4 border-t border-border pt-8">
              <p className="font-sans text-lg font-semibold text-foreground">
                {t.home.whoCtaMatch}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.home.whoCtaSchedule}
              </Link>
            </div>
          </div>

          {/* Right — not ready panel */}
          <aside className="flex flex-col gap-6 self-start rounded-xl border border-border bg-secondary p-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {t.home.whoNotYetTitle}
              </span>
              <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                {t.home.whoNotYetDesc}
              </p>
            </div>

            <Link
              href="/vector"
              className="inline-flex w-full items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background/80"
            >
              {t.home.whoVectorCta}
            </Link>

            <div className="border-t border-border" />

            <ul className="flex flex-col gap-5">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="group flex flex-col gap-1">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground/50">
                      {post.category} · {post.readTime}
                    </span>
                    <span className="font-sans text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/blog"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t.home.whoBlogCta}
            </Link>
          </aside>

        </div>
      </div>
    </section>
  )
}
