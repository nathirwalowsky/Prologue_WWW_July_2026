"use client"

import { useLanguage } from "@/contexts/language-context"

const caseStudies = [
  {
    industry: "[Retail / E-commerce]",
    title: "[Case Study #1 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Strategy]",
    metric: "[3×]",
    metricLabel: "[revenue growth in 18 months]",
  },
  {
    industry: "[Manufacturing]",
    title: "[Case Study #2 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Transformation]",
    metric: "[+40%]",
    metricLabel: "[operating margin improvement]",
  },
  {
    industry: "[Professional Services]",
    title: "[Case Study #3 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Delivery]",
    metric: "[12 mo]",
    metricLabel: "[to market from standing start]",
  },
]

export function HomeResults() {
  const { t } = useLanguage()

  const stats = [
    { value: t.home.resultsStat1Value, label: t.home.resultsStat1Label },
    { value: t.home.resultsStat2Value, label: t.home.resultsStat2Label },
    { value: t.home.resultsStat3Value, label: t.home.resultsStat3Label },
    { value: t.home.resultsStat4Value, label: t.home.resultsStat4Label },
  ]

  return (
    <section className="bg-[var(--background)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[#BD3B35]">
            {t.home.resultsLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              {t.home.resultsTitle}
            </h2>
            <p className="max-w-sm text-pretty font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--muted-foreground)] md:text-right">
              {t.home.resultsSub}
            </p>
          </div>
        </div>

        {/* Stats grid — 4 columns, divided by thin lines */}
        <div className="mb-16 grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-1.5 bg-[var(--background)] px-6 py-8 md:px-8 md:py-10"
            >
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
                {stat.value}
              </span>
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-4">
          <div className="mb-6 flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {t.home.resultsCaseStudiesLabel}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {t.home.resultsCaseStudiesTitle}
              </h3>
            </div>
            <a
              href="/case-studies"
              className="hidden font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#BD3B35] transition-colors hover:text-[var(--foreground)] md:inline-block"
            >
              {t.home.resultsViewAll} →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--border)] border border-[var(--border)] md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <article
                key={i}
                className="group flex flex-col bg-[var(--background)] transition-colors hover:bg-[#161616]"
              >
                {/* Big metric */}
                <div className="flex flex-col gap-1 border-b border-[var(--border)] px-6 py-7">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-[var(--foreground)] leading-none">
                    {cs.metric}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[var(--muted-foreground)] leading-snug">
                    {cs.metricLabel}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                      {cs.industry}
                    </span>
                    <span className="border border-[var(--border)] px-2.5 py-0.5 font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      {cs.tag}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.05em] text-[var(--foreground)] leading-snug">
                    {cs.title}
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)] flex-1">
                    {cs.outcome}
                  </p>
                  <span className="mt-auto font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#BD3B35] transition-transform group-hover:translate-x-0.5 inline-flex items-center gap-1.5">
                    Read case study →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <a
            href="/case-studies"
            className="mt-2 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#BD3B35] md:hidden"
          >
            {t.home.resultsViewAll} →
          </a>
        </div>

      </div>
    </section>
  )
}
