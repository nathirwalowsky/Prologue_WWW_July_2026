"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export type FaqItem = {
  q: string
  a: string
  /** Optional blog article to link at the bottom of the answer panel */
  article?: {
    title: string
    href: string
    readTime?: string
  }
}

const faqs: FaqItem[] = [
  {
    q: "[FAQ question 1]",
    a: "[Answer to FAQ question 1. Explain clearly and concisely. You can go into more detail here since the panel gives you much more space than an inline accordion.]",
  },
  {
    q: "[FAQ question 2]",
    a: "[Answer to FAQ question 2. Explain clearly and concisely. Use this space to address the nuance behind the question.]",
    article: {
      title: "Building a Resistant Business Model in Uncertain Times",
      href: "/blog",
      readTime: "8 min read",
    },
  },
  {
    q: "[FAQ question 3]",
    a: "[Answer to FAQ question 3. Explain clearly and concisely.]",
  },
  {
    q: "[FAQ question 4]",
    a: "[Answer to FAQ question 4. Explain clearly and concisely.]",
    article: {
      title: "The Power of Clear Vision: Why Direction Matters More Than Speed",
      href: "/blog",
      readTime: "6 min read",
    },
  },
  {
    q: "[FAQ question 5]",
    a: "[Answer to FAQ question 5. Explain clearly and concisely.]",
  },
]

export function HomeFaq() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguage()

  const active = faqs[activeIndex]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.faqLabel}
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.home.faqTitle}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">

          {/* Left — question list */}
          <div
            role="tablist"
            aria-label={t.home.faqTitle}
            className="flex flex-col divide-y divide-border rounded-xl border border-border"
          >
            {faqs.map((faq, i) => {
              const isActive = activeIndex === i
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="faq-answer-panel"
                  id={`faq-tab-${i}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "flex items-start gap-4 px-5 py-5 text-left transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                    isActive
                      ? "bg-foreground/[0.04]"
                      : "hover:bg-foreground/[0.02]",
                  )}
                >
                  {/* Number */}
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 font-mono text-xs tabular-nums",
                      isActive ? "text-accent" : "text-muted-foreground/50",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question text */}
                  <span
                    className={cn(
                      "flex-1 font-sans text-sm leading-snug md:text-base",
                      isActive
                        ? "font-semibold text-foreground"
                        : "font-normal text-muted-foreground",
                    )}
                  >
                    {faq.q}
                  </span>

                  {/* Active indicator bar */}
                  <span
                    className={cn(
                      "mt-1 h-4 w-0.5 shrink-0 self-center rounded-full transition-colors duration-150",
                      isActive ? "bg-accent" : "bg-transparent",
                    )}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          {/* Right — answer panel */}
          <div
            id="faq-answer-panel"
            role="tabpanel"
            aria-labelledby={`faq-tab-${activeIndex}`}
            className="sticky top-24 flex flex-col gap-6 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            {/* Question number + text */}
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-xs tabular-nums text-accent">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-lg font-semibold leading-snug text-foreground md:text-xl">
                {active.q}
              </h3>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-border" />

            {/* Answer body */}
            <p className="font-serif text-base leading-relaxed text-muted-foreground">
              {active.a}
            </p>

            {/* Optional linked blog article */}
            {active.article && (
              <Link
                href={active.article.href}
                className="group mt-2 flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span
                  className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-xs text-accent"
                  aria-hidden="true"
                >
                  ↗
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {t.home.faqReadArticle}
                    {active.article.readTime && (
                      <span className="ml-2 text-muted-foreground/60">
                        · {active.article.readTime}
                      </span>
                    )}
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {active.article.title}
                  </span>
                </div>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
