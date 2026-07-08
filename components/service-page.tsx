"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { HomeFaq } from "@/components/home-faq"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/lib/blog-data"

// ── Types ─────────────────────────────────────────────────────────────────────

export type ServiceSlug = "strategy" | "key-projects" | "transformation"

export type ServicePageData = {
  slug: ServiceSlug
  label: string
  title: string
  intro: string
  problems: string[]
  identRows: { area: string; now: string; goal: string }[]
  innerThoughts: string[]
  toll: { tag: string; line: string }[]
  authorityQuote: string
  stats: { value: string; label: string }[]
  caseStudies: { industry: string; client: string; result: string }[]
  steps: { title: string; body: string; duration?: string }[]
  ctaTitle: string
  consequences: string[]
}

// ── Sticky in-page nav ────────────────────────────────────────────────────────

function InPageNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show nav after 300px
      setVisible(window.scrollY > 300)

      // Track active section
      let current: string | null = null
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top < 140) current = section.id
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  return (
    <div
      className={`fixed left-0 right-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm transition-all duration-300 ${
        visible ? "top-[72px] translate-y-0 opacity-100" : "-top-12 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-0 overflow-x-auto px-4 md:px-6" aria-label="Page sections">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className={`shrink-0 border-b-2 px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
              active === s.id
                ? "border-accent text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

// ── Section shell ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  )
}

// ── Before / After row ────────────────────────────────────────────────────────

function BeforeAfterRow({ area, now, goal, index }: { area: string; now: string; goal: string; index: number }) {
  return (
    <div className={`grid grid-cols-1 gap-px md:grid-cols-[1fr_48px_1fr] ${index > 0 ? "border-t border-border" : ""}`}>
      {/* Before */}
      <div className="flex items-start gap-4 bg-background px-5 py-6">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 text-destructive" aria-hidden="true">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm3.53 4.47a.75.75 0 0 1 0 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 1.06-1.06L8 6.94l2.47-2.47a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </div>
        <div>
          <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{area}</p>
          <p className="font-serif text-base leading-relaxed text-muted-foreground">{now}</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden items-center justify-center bg-secondary md:flex">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-accent" aria-hidden="true">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06l5.72-5.72H3.75a.75.75 0 0 1 0-1.5h15.19l-5.72-5.72a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z" />
        </svg>
      </div>

      {/* After */}
      <div className="flex items-start gap-4 bg-background px-5 py-6">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 text-primary" aria-hidden="true">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm3.78 5.03a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </div>
        <div>
          <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary/60">Cel</p>
          <p className="font-sans text-base font-medium leading-relaxed text-foreground">{goal}</p>
        </div>
      </div>
    </div>
  )
}

// ── Phase timeline ────────────────────────────────────────────────────────────

function PhaseTimeline({ steps }: { steps: { title: string; body: string; duration?: string }[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-8">
      {/* Phase track */}
      <div className="relative flex items-start gap-0">
        {/* Line */}
        <div className="absolute left-4 right-4 top-4 h-px bg-border md:left-[calc(100%/var(--n)/2)] md:right-[calc(100%/var(--n)/2)]" aria-hidden="true" style={{ "--n": steps.length } as React.CSSProperties} />
        <div className="flex w-full gap-0">
          {steps.map((step, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="group flex flex-1 flex-col items-center gap-2 px-2 pt-0 text-center"
            >
              {/* Circle */}
              <span
                className={`relative z-10 flex size-8 items-center justify-center rounded-full border-2 font-mono text-xs font-semibold transition-all duration-200 ${
                  active === i
                    ? "border-accent bg-accent text-background shadow-md shadow-accent/20"
                    : i < active
                    ? "border-accent bg-accent/20 text-accent"
                    : "border-border bg-background text-muted-foreground group-hover:border-accent/50"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Label */}
              <span
                className={`hidden text-xs leading-snug transition-colors md:block ${
                  active === i ? "font-semibold text-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {step.title}
              </span>
              {step.duration && (
                <span className="hidden font-mono text-[10px] text-muted-foreground/60 md:block">
                  {step.duration}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active step detail */}
      <div className="rounded-xl border border-border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-semibold text-accent">
            {String(active + 1).padStart(2, "0")}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-sans text-xl font-semibold text-foreground">
                {steps[active].title}
              </h3>
              {steps[active].duration && (
                <span className="rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent">
                  {steps[active].duration}
                </span>
              )}
            </div>
            <p className="font-serif text-base leading-relaxed text-muted-foreground">
              {steps[active].body}
            </p>
          </div>
        </div>
        {/* Prev / Next */}
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <button
            type="button"
            disabled={active === 0}
            onClick={() => setActive((a) => a - 1)}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground disabled:opacity-30"
          >
            ← Poprzedni
          </button>
          <button
            type="button"
            disabled={active === steps.length - 1}
            onClick={() => setActive((a) => a + 1)}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground disabled:opacity-30"
          >
            Następny →
          </button>
          <span className="ml-auto font-mono text-xs text-muted-foreground/50">
            {active + 1} / {steps.length}
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Page component ─────────────────────────────────────────────────────────────

export function ServicePage({ data }: { data: ServicePageData }) {
  const { t } = useLanguage()
  const recentPosts = blogPosts.slice(0, 3)

  const sections = [
    { id: "challenges",   label: t.services.identificationLabel },
    { id: "before-after", label: "Przed / Po" },
    { id: "how-it-works", label: t.services.planLabel },
    { id: "results",      label: t.services.hopeLabel },
    { id: "faq",          label: t.home.faqLabel },
  ]

  return (
    <SiteShell pageName={data.title}>
      <InPageNav sections={sections} />

      {/* PAGE HEADER — problems list inside the hero zone */}
      <PageHeader
        label={data.label}
        title={data.title}
        intro={data.intro}
        problems={data.problems}
      />

      {/* 1. CHALLENGES — empathy (inner thoughts + toll + quote) */}
      <section id="challenges" className="scroll-mt-28 border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.empathyLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.empathyTitle}
            </h2>
          </div>

          {/* Inner thoughts */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.innerThoughts.map((quote, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <span className="font-serif text-4xl leading-none text-accent/30" aria-hidden="true">&ldquo;</span>
                <p className="font-serif text-base italic leading-relaxed text-muted-foreground">{quote}</p>
              </div>
            ))}
          </div>

          {/* Emotional toll */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.toll.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
                <span className="w-fit rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                  {item.tag}
                </span>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>

          {/* Authority quote */}
          <div className="rounded-xl border-l-4 border-accent bg-card px-6 py-6">
            <p className="font-serif text-lg leading-relaxed text-foreground">{data.authorityQuote}</p>
          </div>
        </div>
      </section>

      {/* 2. BEFORE / AFTER — identification table as transformation pairs */}
      <section id="before-after" className="scroll-mt-28 border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-3">
            <SectionLabel>{t.services.identificationLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.identificationTitle}
            </h2>
          </div>

          {/* Before / After pairs */}
          <div className="overflow-hidden rounded-xl border border-border">
            {/* Header */}
            <div className="hidden grid-cols-[1fr_48px_1fr] bg-secondary md:grid">
              <div className="px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Teraz
              </div>
              <div />
              <div className="px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary/60">
                Po współpracy
              </div>
            </div>
            {data.identRows.map((row, i) => (
              <BeforeAfterRow key={i} {...row} index={i} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.services.ctaSchedule}
            </Link>
            <span className="font-serif text-sm text-muted-foreground">
              {t.services.hopeTitle}
            </span>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS — phase timeline */}
      <section id="how-it-works" className="scroll-mt-28 border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.planLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.planTitle}
            </h2>
          </div>
          <PhaseTimeline steps={data.steps} />
        </div>
      </section>

      {/* 4. RESULTS — stats + case studies */}
      <section id="results" className="scroll-mt-28 border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.hopeLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.hopeTitle}
            </h2>
          </div>

          {/* Stats */}
          <div className="mb-14 grid grid-cols-2 gap-px rounded-xl border border-border bg-border md:grid-cols-4">
            {data.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1.5 bg-card px-6 py-7 first:rounded-l-xl last:rounded-r-xl">
                <span className="font-sans text-3xl font-semibold tabular-nums tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="font-serif text-sm leading-snug text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Case studies */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.caseStudies.map((cs, i) => (
              <article key={i} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                    {cs.industry}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/50">{cs.client}</span>
                </div>
                <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                  {t.services.caseStudy} {i + 1}
                </h3>
                <p className="flex-1 font-serif text-sm leading-relaxed text-muted-foreground">{cs.result}</p>
                <span className="text-sm font-medium text-primary">{t.services.readStory}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight md:text-4xl">
            {data.ctaTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              {t.services.ctaSchedule}
            </Link>
            <Link
              href="/vector"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.services.ctaLearnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. THRESHOLD — cost of inaction */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-3">
            <SectionLabel>{t.services.thresholdLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.thresholdTitle}
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {data.consequences.map((c, i) => (
              <li key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 font-mono text-sm text-destructive"
                  aria-hidden="true"
                >
                  →
                </span>
                <p className="font-serif text-base leading-relaxed text-muted-foreground">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. NOT READY — recent blog posts */}
      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.notReadyLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.notReadyTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {recentPosts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.id}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40 hover:bg-accent/5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-foreground">{post.title}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
                <span className="shrink-0 font-medium text-primary transition-transform group-hover:translate-x-0.5">
                  {t.services.readMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="scroll-mt-28">
        <HomeFaq />
      </section>
    </SiteShell>
  )
}
