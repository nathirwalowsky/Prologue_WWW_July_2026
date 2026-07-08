"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/contexts/language-context"
import type { CaseStudy } from "@/lib/case-study-data"

// ── Sticky table of contents ──────────────────────────────────────────────────

function TableOfContents({
  sections,
  stats,
}: {
  sections: { id: string; title: string }[]
  stats: { value: string; label: string }[]
}) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      let current: string | null = null
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < 160) current = s.id
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 flex flex-col gap-8">
        {/* Stats */}
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-secondary p-5">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col gap-0.5 ${i > 0 ? "border-t border-border pt-3" : ""}`}>
              <span className="font-sans text-2xl font-semibold tabular-nums text-foreground">{stat.value}</span>
              <span className="font-serif text-xs leading-snug text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* TOC */}
        <nav aria-label="Table of contents">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {t.caseStudies.toc}
          </p>
          <ol className="flex flex-col gap-1">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                  className={`flex items-baseline gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                    active === s.id
                      ? "bg-accent/10 font-medium text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* CTA */}
        <div className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="font-sans text-sm font-semibold text-foreground">{t.caseStudies.ctaSide}</p>
          <p className="font-serif text-xs leading-relaxed text-muted-foreground">
            {t.caseStudies.ctaSideDesc}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.caseStudies.ctaSideBtn}
          </Link>
        </div>
      </div>
    </aside>
  )
}

// ── Body section ──────────────────────────────────────────────────────────────

function BodySection({ section }: { section: CaseStudy["sections"][0] }) {
  return (
    <section id={section.id} className="scroll-mt-28 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {section.title}
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-4">
        {section.body.map((para, i) => (
          <p key={i} className="font-serif text-base leading-relaxed text-muted-foreground">
            {para}
          </p>
        ))}
      </div>

      {section.quote && (
        <blockquote className="my-2 flex flex-col gap-4 border-l-4 border-accent bg-secondary px-6 py-6 rounded-r-xl">
          <p className="font-serif text-lg italic leading-relaxed text-foreground">
            &ldquo;{section.quote.text}&rdquo;
          </p>
          <footer className="flex flex-col gap-0.5">
            <cite className="not-italic font-sans text-sm font-semibold text-foreground">
              {section.quote.author}
            </cite>
            <span className="font-mono text-xs text-muted-foreground">{section.quote.role}</span>
          </footer>
        </blockquote>
      )}
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const { t } = useLanguage()

  const tocSections = cs.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <SiteShell pageName={cs.headline}>
      {/* ── Hero ── */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
          {/* Tags */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 max-w-3xl text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {cs.headline}
          </h1>
          <p className="max-w-2xl text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
            {cs.subline}
          </p>
        </div>

        {/* Executive summary bar */}
        <div className="border-t border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0 px-4 md:px-6">
            {[
              { label: t.caseStudies.challenge, value: cs.challenge },
              { label: t.caseStudies.approach,  value: cs.approach },
              { label: t.caseStudies.result,    value: cs.result  },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-2 py-6 md:px-6 first:md:pl-0 last:md:pr-0">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{item.label}</span>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body: TOC left + content right ── */}
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          <TableOfContents sections={tocSections} stats={cs.stats} />

          {/* Article body */}
          <article className="flex flex-col gap-14">
            {cs.sections.map((section) => (
              <BodySection key={section.id} section={section} />
            ))}
          </article>
        </div>
      </div>

      {/* ── End CTA band ── */}
      <section className="bg-foreground py-16 text-background">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 md:px-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-background/40">
            {t.caseStudies.ctaEndLabel}
          </span>
          <h2 className="text-balance font-sans text-2xl font-semibold tracking-tight md:text-3xl">
            {t.caseStudies.ctaEndTitle}
          </h2>
          <p className="max-w-xl text-pretty font-serif text-base leading-relaxed text-background/70">
            {t.caseStudies.ctaEndDesc}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              {t.caseStudies.ctaEndPrimary}
            </Link>
            <Link
              href={`/services/${cs.service}`}
              className="inline-flex items-center text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              {t.caseStudies.ctaEndSecondary}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
