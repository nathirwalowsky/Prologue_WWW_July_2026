"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WirePlaceholder } from "@/components/wireframe-kit"
import { useLanguage } from "@/contexts/language-context"

type Section = {
  title: string
  short: string
  description: string
}

const businessSections: Section[] = [
  {
    title: "Resistant Business Model",
    short: "Withstand market changes",
    description:
      "[Longer description] We help you design a business model that holds up under pressure — diversified revenue, healthy margins, and the operational resilience to absorb shocks instead of breaking under them.",
  },
  {
    title: "Clear Vision",
    short: "Know where you're going",
    description:
      "[Longer description] Define a vision that is specific enough to guide daily decisions and compelling enough to align your whole team. We turn vague ambitions into a concrete direction everyone can rally behind.",
  },
  {
    title: "Effective Sales",
    short: "Convert prospects to customers",
    description:
      "[Longer description] Build a repeatable sales engine — qualified pipeline, a clear process, and messaging that resonates — so growth stops depending on luck and starts depending on system.",
  },
  {
    title: "Powerful Brand",
    short: "Stand out in the market",
    description:
      "[Longer description] Craft a brand that is instantly recognizable and genuinely differentiated, so you compete on meaning and trust rather than racing competitors to the bottom on price.",
  },
  {
    title: "Deliberate Org Culture",
    short: "An environment people thrive in",
    description:
      "[Longer description] Shape culture on purpose instead of by accident. We help you define values, rituals, and norms that attract great people and keep them engaged and accountable.",
  },
  {
    title: "Dedicated & Accountable Team",
    short: "A team that delivers results",
    description:
      "[Longer description] Move from a group of individuals to a high-trust team with clear ownership, measurable goals, and the accountability structures that make consistent delivery the default.",
  },
  {
    title: "Impactful Leadership",
    short: "Lead with purpose and influence",
    description:
      "[Longer description] Develop leadership that multiplies the organization — leaders who set direction, develop people, and make decisions that compound into long-term impact.",
  },
]

function DetailPanel({ section, detailLabel }: { section: Section; detailLabel: string }) {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{detailLabel}</span>
      <h3 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
        {section.title}
      </h3>
      <p className="font-serif text-lg leading-relaxed text-muted-foreground">
        {section.description}
      </p>
      <WirePlaceholder label="[Supporting visual / icon]" className="mt-2 h-40 w-full" />
      <div className="mt-auto">
        <span className="inline-flex items-center gap-2 font-medium text-primary">
          {"[Learn more about " + section.title + "]"}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  )
}

export function BusinessSections() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = businessSections[activeIndex]
  const { t } = useLanguage()

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.businessSections.label}
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.businessSections.title}
          </h2>
          <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            {t.businessSections.intro}
          </p>
        </div>

        {/* Desktop: side-by-side tab list + sticky detail panel */}
        <div className="hidden md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8">
          <ul className="flex flex-col gap-2" role="tablist" aria-label="Business sections">
            {businessSections.map((section, index) => {
              const isActive = index === activeIndex
              return (
                <li key={section.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="business-detail-panel"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 rounded-lg border px-4 py-3.5 text-left transition-colors",
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-accent/50 hover:bg-secondary",
                    )}
                  >
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          "font-sans font-semibold",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {section.title}
                      </span>
                      <span className="text-sm text-muted-foreground">{section.short}</span>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 font-mono text-lg transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                      aria-hidden="true"
                    >
                      {isActive ? "→" : "+"}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div id="business-detail-panel" role="tabpanel">
            <DetailPanel section={active} detailLabel={t.businessSections.detail} />
          </div>
        </div>

        {/* Mobile: accordion — each button expands its own detail panel inline */}
        <dl className="flex flex-col gap-2 md:hidden">
          {businessSections.map((section, index) => {
            const isOpen = activeIndex === index
            return (
              <div key={section.title} className="rounded-lg border border-border bg-card">
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-section-${index}`}
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          "font-sans font-semibold",
                          isOpen ? "text-primary" : "text-foreground",
                        )}
                      >
                        {section.title}
                      </span>
                      <span className="text-sm text-muted-foreground">{section.short}</span>
                    </span>
                    <span
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border font-mono text-sm transition-all duration-200",
                        isOpen
                          ? "rotate-45 border-primary text-primary"
                          : "border-border text-muted-foreground",
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`mobile-section-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="border-t border-border px-4 py-5">
                    <p className="font-serif text-base leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-medium text-primary">
                      {"[Learn more about " + section.title + "]"}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
