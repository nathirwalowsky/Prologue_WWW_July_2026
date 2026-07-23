"use client"

import Link from "next/link"
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

// Mini sparkline bars — purely decorative, different heights per stat
const sparklines = [
  [30, 42, 38, 55, 48, 70, 65, 80],
  [20, 35, 30, 45, 55, 50, 68, 75],
  [40, 38, 50, 45, 60, 58, 72, 78],
  [25, 40, 52, 48, 65, 70, 75, 95],
]

function Sparkline({ bars }: { bars: number[] }) {
  return (
    <svg
      width="48" height="22"
      viewBox="0 0 48 22"
      aria-hidden
      className="shrink-0"
    >
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 6}
          y={22 - h * 0.22}
          width="4"
          height={h * 0.22}
          fill="#303E91"
          opacity={0.5 + i * 0.06}
        />
      ))}
    </svg>
  )
}

export function HomeResults() {
  const { t } = useLanguage()

  const stats = [
    { value: t.home.resultsStat1Value, label: t.home.resultsStat1Label },
    { value: t.home.resultsStat2Value, label: t.home.resultsStat2Label },
    { value: t.home.resultsStat3Value, label: t.home.resultsStat3Label },
    { value: t.home.resultsStat4Value, label: t.home.resultsStat4Label },
  ]

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#BDBCBC" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#303E91" }}>
            {t.home.resultsLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: "#0d0d0d" }}>
              {t.home.resultsTitle}
            </h2>
            <p className="max-w-sm text-pretty font-[family-name:var(--font-body)] text-base leading-relaxed md:text-right" style={{ color: "#272727" }}>
              {t.home.resultsSub}
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mb-16 grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: "rgba(0,0,0,0.12)" }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 px-6 py-8 md:px-8 md:py-10"
              style={{ backgroundColor: "#BDBCBC" }}
            >
              <div className="flex items-end justify-between">
                <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: "#0d0d0d" }}>
                  {stat.value}
                </span>
                <Sparkline bars={sparklines[i]} />
              </div>
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#272727" }}>
                {stat.label}
              </span>
              {/* Thin indigo rule underneath label */}
              <div style={{ height: 1, width: 28, backgroundColor: "#303E91", opacity: 0.6 }} />
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-4">
          <div className="mb-6 flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#272727" }}>
                {t.home.resultsCaseStudiesLabel}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight" style={{ color: "#0d0d0d" }}>
                {t.home.resultsCaseStudiesTitle}
              </h3>
            </div>
            <Link
              href="/case-studies"
              className="hidden font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303E91] focus-visible:ring-offset-2 md:inline-block"
              style={{ color: "#303E91" }}
            >
              {t.home.resultsViewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px md:grid-cols-3" style={{ backgroundColor: "rgba(0,0,0,0.12)" }}>
            {caseStudies.map((cs, i) => (
              <article
                key={i}
                className="group flex flex-col"
                style={{ backgroundColor: "#BDBCBC" }}
              >
                {/* Big metric — with indigo left accent */}
                <div className="flex flex-col gap-1 px-6 py-7" style={{ borderBottom: "1px solid rgba(0,0,0,0.10)", borderLeft: i === 0 ? "3px solid #303E91" : "3px solid transparent" }}>
                  <div className="flex items-start gap-3">
                    {/* Up-arrow icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-2 shrink-0">
                      <path d="M8 13V3M3 8l5-5 5 5" stroke="#303E91" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                    <div>
                      <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight leading-none" style={{ color: "#0d0d0d" }}>
                        {cs.metric}
                      </span>
                      <p className="font-[family-name:var(--font-body)] text-sm leading-snug mt-1" style={{ color: "#272727" }}>
                        {cs.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#272727" }}>
                      {cs.industry}
                    </span>
                    <span className="px-2.5 py-0.5 font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-wide" style={{ border: "1px solid rgba(0,0,0,0.15)", color: "#272727" }}>
                      {cs.tag}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.05em] leading-snug" style={{ color: "#0d0d0d" }}>
                    {cs.title}
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed flex-1" style={{ color: "#272727" }}>
                    {cs.outcome}
                  </p>
                  <span className="mt-auto font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.12em] inline-flex items-center gap-1.5 transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" style={{ color: "#303E91" }}>
                    Read case study →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/case-studies"
            className="mt-2 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303E91] focus-visible:ring-offset-2 md:hidden"
            style={{ color: "#303E91" }}
          >
            {t.home.resultsViewAll} →
          </Link>
        </div>

      </div>
    </section>
  )
}
