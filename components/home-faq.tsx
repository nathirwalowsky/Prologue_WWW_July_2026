"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const faqs = [
  { q: "[FAQ question 1]", a: "[Answer to FAQ question 1. Explain clearly and concisely.]" },
  { q: "[FAQ question 2]", a: "[Answer to FAQ question 2. Explain clearly and concisely.]" },
  { q: "[FAQ question 3]", a: "[Answer to FAQ question 3. Explain clearly and concisely.]" },
  { q: "[FAQ question 4]", a: "[Answer to FAQ question 4. Explain clearly and concisely.]" },
  { q: "[FAQ question 5]", a: "[Answer to FAQ question 5. Explain clearly and concisely.]" },
]

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.home.faqLabel}</span>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.home.faqTitle}
          </h2>
        </div>

        <dl className="flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-sans font-medium text-foreground">{faq.q}</span>
                    <span
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-45 border-primary text-primary",
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="font-serif text-base leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
