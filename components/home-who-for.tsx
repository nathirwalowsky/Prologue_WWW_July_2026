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
    <section className="py-20 md:py-28" style={{ backgroundColor: "#BDBCBC" }}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#272727" }}>
            {t.home.whoLabel}
          </span>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: "#0d0d0d" }}>
              {t.home.whoTitle}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-base md:text-right md:max-w-xs" style={{ color: "#272727" }}>
              {t.home.whoSub}
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_320px] md:gap-16">

          {/* Left — symptom checklist */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col">
              {symptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 py-5"
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.10)",
                    backgroundColor: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.04)",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  {/* Indigo filled number */}
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center font-[family-name:var(--font-display)] text-[9px] font-semibold text-white"
                    style={{ backgroundColor: "#303E91" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-body)] text-base leading-relaxed" style={{ color: "#0d0d0d" }}>
                    {symptom}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col gap-4 pt-4">
              <p className="font-[family-name:var(--font-display)] text-base font-semibold" style={{ color: "#0d0d0d" }}>
                {t.home.whoCtaMatch}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center px-6 py-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-80"
                style={{ border: "1px solid #303E91", color: "#303E91" }}
              >
                {t.home.whoCtaSchedule}
              </Link>
            </div>
          </div>

          {/* Right — not ready panel — dark surface for contrast */}
          <aside
            className="flex flex-col gap-6 self-start p-6"
            style={{ backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Small visual: stacked bars diagram */}
            <svg width="100%" height="48" viewBox="0 0 280 48" fill="none" aria-hidden>
              {[0.3, 0.55, 0.75, 0.5, 0.9, 0.65].map((h, i) => (
                <rect
                  key={i}
                  x={i * 46 + 2}
                  y={48 - h * 40}
                  width="40"
                  height={h * 40}
                  fill="#303E91"
                  opacity={0.25 + i * 0.1}
                />
              ))}
            </svg>

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
              className="inline-flex w-full items-center justify-center px-5 py-2.5 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-opacity hover:opacity-70"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {t.home.whoVectorCta}
            </Link>

            <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />

            <ul className="flex flex-col gap-5">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="group flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]/50">
                      {post.category} · {post.readTime}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm leading-snug text-[var(--foreground)] transition-colors group-hover:text-[#303E91]">
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
