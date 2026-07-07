"use client"

import { useLanguage } from "@/contexts/language-context"

const outcomes = [
  { title: "Resistant Business Model",    short: "Withstand market changes" },
  { title: "Clear Vision",                short: "Know where you're going" },
  { title: "Effective Sales",             short: "Convert prospects to customers" },
  { title: "Powerful Brand",              short: "Stand out in the market" },
  { title: "Deliberate Org Culture",      short: "An environment people thrive in" },
  { title: "Dedicated & Accountable Team",short: "A team that delivers results" },
  { title: "Impactful Leadership",        short: "Lead with purpose and influence" },
]

export function BusinessSections() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.businessSections.label}
          </span>
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.businessSections.title}
          </h2>
          <p className="max-w-lg font-serif text-base leading-relaxed text-muted-foreground">
            {t.businessSections.intro}
          </p>
        </div>

        {/* Outcome pills */}
        <ul className="flex flex-wrap gap-3" role="list">
          {outcomes.map((o) => (
            <li
              key={o.title}
              className="flex flex-col gap-0.5 rounded-lg border border-border bg-card px-4 py-3"
            >
              <span className="font-sans text-sm font-semibold text-foreground">
                {o.title}
              </span>
              <span className="font-serif text-xs text-muted-foreground">
                {o.short}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
