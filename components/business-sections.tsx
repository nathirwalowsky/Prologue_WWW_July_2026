"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WirePlaceholder } from "@/components/wireframe-kit"

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

export function BusinessSections() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = businessSections[activeIndex]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What we work on
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Business Sections We Work On
          </h2>
          <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            [Intro line] Hover or tap a topic on the left to read the full description on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8">
          {/* LEFT: subtitle list */}
          <ul className="flex flex-col gap-2" role="tablist" aria-label="Business sections">
            {businessSections.map((section, index) => {
              const isActive = index === activeIndex
              return (
                <li key={section.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
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

          {/* RIGHT: long description for the active item */}
          <div
            role="tabpanel"
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Detail
            </span>
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
              {active.title}
            </h3>
            <p className="font-serif text-lg leading-relaxed text-muted-foreground">
              {active.description}
            </p>

            <WirePlaceholder label="[Supporting visual / icon]" className="mt-2 h-40 w-full" />

            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 font-medium text-primary">
                {"[Learn more about " + active.title + "]"} <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
