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
    <section className="border-y border-border bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section eyebrow */}
        <span className="mb-10 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t.businessSections.label}
        </span>

        {/* Two-column split */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:divide-x md:divide-border">

          {/* Left — How we work */}
          <div className="flex flex-col gap-8">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t.businessSections.howTitle}
            </h2>
            <ol className="flex flex-col gap-6" role="list">
              {principles.map(({ titleKey, descKey }, i) => (
                <li key={titleKey} className="flex gap-4">
                  {/* Step number */}
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {t.businessSections[titleKey]}
                    </p>
                    <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                      {t.businessSections[descKey]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right — Results you can expect */}
          <div className="flex flex-col gap-8 md:pl-16">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t.businessSections.resultsTitle}
            </h2>
            <ul className="flex flex-wrap gap-2.5" role="list">
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

        </div>
      </div>
    </section>
  )
}
