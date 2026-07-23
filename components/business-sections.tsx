"use client"

import { useLanguage } from "@/contexts/language-context"

const principles = [
  { titleKey: "principle1Title" as const, descKey: "principle1Desc" as const },
  { titleKey: "principle2Title" as const, descKey: "principle2Desc" as const },
  { titleKey: "principle3Title" as const, descKey: "principle3Desc" as const },
  { titleKey: "principle4Title" as const, descKey: "principle4Desc" as const },
]

// 7 outcomes with an icon path each
const outcomes = [
  { title: "Resistant Business Model",     short: "Withstand market changes",        iconPath: "M4 14 L8 6 L12 10 L16 4 L20 8" },
  { title: "Clear Vision",                 short: "Know where you're going",         iconPath: "M10 20 L20 10 M15 10 L20 10 L20 15" },
  { title: "Effective Sales",              short: "Convert prospects to customers",  iconPath: "M5 15 L10 10 L15 15 L20 5" },
  { title: "Powerful Brand",               short: "Stand out in the market",         iconPath: "M12 4 L14 9 L20 9 L15 13 L17 19 L12 16 L7 19 L9 13 L4 9 L10 9 Z" },
  { title: "Deliberate Org Culture",       short: "An environment people thrive in", iconPath: "M12 5 C7 5 4 9 4 12 C4 17 12 21 12 21 C12 21 20 17 20 12 C20 9 17 5 12 5Z" },
  { title: "Dedicated & Accountable Team", short: "A team that delivers results",    iconPath: "M5 12 L9 16 L19 6" },
  { title: "Impactful Leadership",         short: "Lead with purpose and influence", iconPath: "M12 4 L12 20 M6 8 L12 4 L18 8" },
]

export function BusinessSections() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-[var(--border)] py-16 md:py-20" style={{ backgroundColor: "#BDBCBC" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section eyebrow */}
        <span className="mb-10 block font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#272727" }}>
          {t.businessSections.label}
        </span>

        {/* Two-column split */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* Left — How we work — on dark surface for contrast */}
          <div
            className="flex flex-col gap-8 p-8"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
              {t.businessSections.howTitle}
            </h2>
            <ol className="flex flex-col gap-6" role="list">
              {principles.map(({ titleKey, descKey }, i) => (
                <li key={titleKey} className="flex gap-4">
                  {/* Indigo numbered square */}
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center font-[family-name:var(--font-display)] text-[10px] font-semibold text-white"
                    style={{ backgroundColor: "#303E91" }}
                  >
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

          {/* Right — Results you can expect — on grey surface */}
          <div className="flex flex-col gap-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:text-3xl" style={{ color: "#0d0d0d" }}>
              {t.businessSections.resultsTitle}
            </h2>
            {/* Visual outcome tiles — icon + text */}
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
              {outcomes.map((o) => (
                <li
                  key={o.title}
                  className="flex items-start gap-3 p-4"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.10)" }}
                >
                  {/* Small icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 mt-0.5">
                    <path d={o.iconPath} stroke="#303E91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.06em]" style={{ color: "#0d0d0d" }}>
                      {o.title}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-xs" style={{ color: "#272727" }}>
                      {o.short}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
