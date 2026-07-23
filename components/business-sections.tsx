"use client"

import { useLanguage } from "@/contexts/language-context"

const principles = [
  { titleKey: "principle1Title" as const, descKey: "principle1Desc" as const },
  { titleKey: "principle2Title" as const, descKey: "principle2Desc" as const },
  { titleKey: "principle3Title" as const, descKey: "principle3Desc" as const },
  { titleKey: "principle4Title" as const, descKey: "principle4Desc" as const },
]

const outcomes = [
  { title: "Resistant Business Model",     short: "Withstand market changes" },
  { title: "Clear Vision",                 short: "Know where you're going" },
  { title: "Effective Sales",              short: "Convert prospects to customers" },
  { title: "Powerful Brand",              short: "Stand out in the market" },
  { title: "Deliberate Org Culture",       short: "An environment people thrive in" },
  { title: "Dedicated & Accountable Team", short: "A team that delivers results" },
  { title: "Impactful Leadership",         short: "Lead with purpose and influence" },
]

export function BusinessSections() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-[var(--border)] bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section eyebrow */}
        <span className="mb-10 block font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          {t.businessSections.label}
        </span>

        {/* Two-column split */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:divide-x md:divide-[var(--border)]">

          {/* Left — How we work */}
          <div className="flex flex-col gap-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
              {t.businessSections.howTitle}
            </h2>
            <ol className="flex flex-col gap-6" role="list">
              {principles.map(({ titleKey, descKey }, i) => (
                <li key={titleKey} className="flex gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--border)] font-[family-name:var(--font-display)] text-[10px] font-semibold text-[var(--muted-foreground)]">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]">
                      {t.businessSections[titleKey]}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {t.businessSections[descKey]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right — Results you can expect */}
          <div className="flex flex-col gap-8 md:pl-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
              {t.businessSections.resultsTitle}
            </h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {outcomes.map((o) => (
                <li
                  key={o.title}
                  className="flex flex-col gap-0.5 border border-[var(--border)] px-4 py-3"
                >
                  <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.06em] text-[var(--foreground)]">
                    {o.title}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[var(--muted-foreground)]">
                    {o.short}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
