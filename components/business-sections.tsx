"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WireHeading, WireLabel, WirePlaceholder } from "@/components/wireframe-kit"

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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:mb-14">
          <WireLabel>Section · Interactive</WireLabel>
          <WireHeading level={2}>Business Sections We Work On</WireHeading>
          <p className="max-w-xl leading-relaxed text-neutral-500">
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
                      "flex w-full items-center justify-between gap-4 rounded-md border-2 px-4 py-3 text-left transition-colors",
                      isActive
                        ? "border-blue-600 bg-blue-50"
                        : "border-dashed border-neutral-300 bg-neutral-50 hover:border-neutral-400 hover:bg-neutral-100",
                    )}
                  >
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          "font-semibold",
                          isActive ? "text-blue-800" : "text-neutral-800",
                        )}
                      >
                        {section.title}
                      </span>
                      <span className="text-sm text-neutral-500">{section.short}</span>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 font-mono text-lg",
                        isActive ? "text-blue-600" : "text-neutral-400",
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
            className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6 md:p-8"
          >
            <WireLabel>Detail panel</WireLabel>
            <WireHeading level={3} className="text-neutral-800">
              {active.title}
            </WireHeading>
            <p className="leading-relaxed text-neutral-600">{active.description}</p>

            <WirePlaceholder
              label="[Supporting visual / icon]"
              className="mt-2 h-40 w-full"
            />

            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 font-medium text-blue-700">
                {"[Learn more about " + active.title + "]"} <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
