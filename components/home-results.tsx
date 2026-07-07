"use client"

import { useLanguage } from "@/contexts/language-context"

const caseStudies = [
  {
    industry: "[Retail / E-commerce]",
    title: "[Case Study #1 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Strategy]",
  },
  {
    industry: "[Manufacturing]",
    title: "[Case Study #2 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Transformation]",
  },
  {
    industry: "[Professional Services]",
    title: "[Case Study #3 — Company or Initiative Name]",
    outcome: "[Key outcome or breakthrough achieved with the client.]",
    tag: "[Delivery]",
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
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.resultsLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.home.resultsTitle}
            </h2>
            <p className="max-w-sm text-pretty font-serif text-base leading-relaxed text-muted-foreground md:text-right">
              {t.home.resultsSub}
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-1.5 bg-background px-6 py-8 md:px-8 md:py-10"
            >
              <span className="font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-4">
          <div className="mb-6 flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t.home.resultsCaseStudiesLabel}
              </span>
              <h3 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                {t.home.resultsCaseStudiesTitle}
              </h3>
            </div>
            <a
              href="/blog"
              className="hidden font-medium text-primary hover:underline md:inline-block"
            >
              {t.home.resultsViewAll}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <article
                key={i}
                className="group flex flex-col gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {cs.industry}
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                    {cs.tag}
                  </span>
                </div>
                <h4 className="font-sans text-lg font-semibold text-foreground leading-snug">
                  {cs.title}
                </h4>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground flex-1">
                  {cs.outcome}
                </p>
                <span className="mt-auto font-medium text-primary text-sm transition-transform group-hover:translate-x-0.5 inline-flex items-center gap-1.5">
                  [Read case study] <span aria-hidden="true">→</span>
                </span>
              </article>
            ))}
          </div>

          <a
            href="/blog"
            className="mt-2 font-medium text-primary hover:underline md:hidden"
          >
            {t.home.resultsViewAll}
          </a>
        </div>

      </div>
    </section>
  )
}
