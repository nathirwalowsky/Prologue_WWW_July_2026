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

/**
 * HomeFaq can be rendered in two modes:
 * - standalone (default): wraps itself in a <section> with generous vertical padding
 * - embedded: renders just the content, no outer section — used inside HomeWhoFor
 */
export function HomeFaq({ embedded = false }: { embedded?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguage()
  const active = faqs[activeIndex]

  const content = (
    <>
      {/* Section header — only shown in standalone mode */}
      {!embedded && (
        <div className="mb-16 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.faqLabel}
          </span>
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {t.home.faqTitle}
          </h2>
        </div>
      )}

      {/* Two-column layout: questions left, answer right */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">

        {/* ── Left column: numbered question list ── */}
        <div role="tablist" aria-label={t.home.faqTitle} className="flex flex-col">
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
                  "group relative flex items-start gap-5 border-b border-border py-7 pl-5 pr-4 text-left transition-all duration-150 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                  isActive
                    ? "bg-foreground/[0.035]"
                    : "hover:bg-foreground/[0.015]",
                )}
              >
                {/* Active left-border accent */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-y-0 left-0 w-[3px] rounded-r-full transition-colors duration-150",
                    isActive ? "bg-accent" : "bg-transparent",
                  )}
                />

                {/* Index number */}
                <span
                  className={cn(
                    "mt-0.5 shrink-0 font-mono text-xs tabular-nums transition-colors duration-150",
                    isActive ? "text-accent" : "text-muted-foreground/40",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Question text */}
                <span
                  className={cn(
                    "flex-1 font-sans text-base leading-snug transition-colors duration-150 md:text-lg",
                    isActive
                      ? "font-semibold text-foreground"
                      : "font-normal text-muted-foreground group-hover:text-foreground/80",
                  )}
                >
                  {faq.q}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Right column: sticky answer panel ── */}
        <div
          id="faq-answer-panel"
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeIndex}`}
          className="sticky top-24 flex flex-col gap-7 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          {/* Active question number + question text */}
          <div className="flex items-start gap-4">
            <span className="mt-1 font-mono text-sm tabular-nums text-accent">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <h3 className="font-sans text-xl font-semibold leading-snug text-foreground md:text-2xl">
              {active.q}
            </h3>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Answer body */}
          <p className="font-serif text-lg leading-[1.75] text-muted-foreground">
            {active.a}
          </p>

          {/* Optional linked blog article */}
          {active.article && (
            <Link
              href={active.article.href}
              className="group mt-1 flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent/50 hover:bg-accent/5"
            >
              <span
                className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm text-accent"
                aria-hidden="true"
              >
                ↗
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {t.home.faqReadArticle}
                  {active.article.readTime && (
                    <span className="ml-2 text-muted-foreground/50">
                      · {active.article.readTime}
                    </span>
                  )}
                </span>
                <span className="font-sans text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {active.article.title}
                </span>
              </div>
            </Link>
          )}
        </div>

      </div>
    </>
  )

  if (embedded) {
    return <div>{content}</div>
  }

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {content}
      </div>
    </section>
  )
}
