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
          <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {t.home.whoLabel}
          </span>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
              {t.home.whoTitle}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-base text-[var(--muted-foreground)] md:text-right md:max-w-xs">
              {t.home.whoSub}
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_320px] md:gap-16">

          {/* Left — symptom checklist */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col divide-y divide-[var(--border)]">
              {symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex-shrink-0 font-[family-name:var(--font-display)] text-[10px] font-semibold tabular-nums text-[var(--muted-foreground)]/40 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--foreground)]">
                    {symptom}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-8">
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--foreground)]">
                {t.home.whoCtaMatch}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center border border-[#BD3B35] px-6 py-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#BD3B35] transition-colors hover:bg-[#BD3B35] hover:text-[#f0eeec]"
              >
                {t.home.whoCtaSchedule}
              </Link>
            </div>
          </div>

          {/* Right — not ready panel */}
          <aside className="flex flex-col gap-6 self-start border border-[var(--border)] bg-[#111111] p-6">
            <div className="flex flex-col gap-2">
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                {t.home.whoNotYetTitle}
              </span>
              <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)]">
                {t.home.whoNotYetDesc}
              </p>
            </div>

            <Link
              href="/vector"
              className="inline-flex w-full items-center justify-center border border-[var(--border)] px-5 py-2.5 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/30"
            >
              {t.home.whoVectorCta}
            </Link>

            <div className="border-t border-[var(--border)]" />

            <ul className="flex flex-col gap-5">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="group flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]/50">
                      {post.category} · {post.readTime}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm leading-snug text-[var(--foreground)] transition-colors group-hover:text-[#BD3B35]">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/blog"
              className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {t.home.whoBlogCta} →
            </Link>
          </aside>

        </div>
      </div>
    </section>
  )
}
