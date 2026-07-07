"use client"

import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { HomeFaq } from "@/components/home-faq"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/lib/blog-data"

// ── Types ────────────────────────────────────────────────────────────────────

export type ServiceSlug = "strategy" | "key-projects" | "transformation"

// All copy that varies between services — fill in via i18n or direct props
export type ServicePageData = {
  slug: ServiceSlug
  label: string
  title: string
  intro: string
  // Identification table rows
  identRows: { area: string; now: string; goal: string }[]
  // Empathy quotes
  innerThoughts: string[]
  // Empathy toll cards
  toll: { tag: string; line: string }[]
  // Empathy authority quote
  authorityQuote: string
  // Hope stats
  stats: { value: string; label: string }[]
  // Hope case studies
  caseStudies: { industry: string; client: string; result: string }[]
  // Plan steps
  steps: { title: string; body: string }[]
  // CTA
  ctaTitle: string
  // Threshold consequences
  consequences: string[]
}

// ── Shared section chrome ────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  )
}

// ── Page component ────────────────────────────────────────────────────────────

export function ServicePage({ data }: { data: ServicePageData }) {
  const { t } = useLanguage()
  // Last 3 blog posts for the "Not Ready" section
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <SiteShell pageName={data.title}>
      {/* PAGE HEADER */}
      <PageHeader label={data.label} title={data.title} intro={data.intro} />

      {/* 1. IDENTIFICATION */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-3">
            <SectionLabel>{t.services.identificationLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.identificationTitle}
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-border md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-5 py-3.5 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Obszar
                  </th>
                  <th className="px-5 py-3.5 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {t.services.nowBadge}
                  </th>
                  <th className="px-5 py-3.5 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {t.services.goalBadge}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.identRows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 bg-card odd:bg-background">
                    <td className="px-5 py-4 font-medium text-foreground">{row.area}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.now}</td>
                    <td className="px-5 py-4 font-medium text-primary">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {data.identRows.map((row, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="mb-3 font-sans font-semibold text-foreground">{row.area}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                      {t.services.nowBadge}
                    </span>
                    <span className="text-muted-foreground">{row.now}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                      {t.services.goalBadge}
                    </span>
                    <span className="font-medium text-foreground">{row.goal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.services.ctaSchedule}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EMPATHY */}
      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.empathyLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.empathyTitle}
            </h2>
          </div>

          {/* Inner thoughts */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.innerThoughts.map((quote, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <span
                  className="font-serif text-4xl leading-none text-accent/30"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-serif text-base italic leading-relaxed text-muted-foreground">
                  {quote}
                </p>
              </div>
            ))}
          </div>

          {/* Emotional toll */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.toll.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
                <span className="rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-accent w-fit">
                  {item.tag}
                </span>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>

          {/* Authority quote */}
          <div className="rounded-xl border-l-4 border-accent bg-card px-6 py-6">
            <p className="font-serif text-lg leading-relaxed text-foreground">
              {data.authorityQuote}
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOPE */}
      <section className="border-b border-border py-20 md:py-28">
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
                <span className="font-serif text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </span>
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
                <p className="flex-1 font-serif text-sm leading-relaxed text-muted-foreground">
                  {cs.result}
                </p>
                <span className="font-medium text-primary text-sm">
                  {t.services.readStory}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PLAN */}
      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <SectionLabel>{t.services.planLabel}</SectionLabel>
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.services.planTitle}
            </h2>
          </div>

          <ol className="relative flex flex-col gap-0 border-l border-border pl-8">
            {data.steps.map((step, i) => (
              <li key={i} className="relative pb-10 last:pb-0">
                {/* Timeline dot */}
                <span
                  className="absolute -left-[calc(0.5rem+1px)] top-1 flex size-4 items-center justify-center rounded-full bg-accent ring-4 ring-secondary"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {t.services.step} {i + 1}
                  </span>
                  <h3 className="font-sans text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="font-serif text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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

      {/* 6. THRESHOLD */}
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

      {/* 7. NOT READY YET — recent blog posts */}
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
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
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
      <HomeFaq />
    </SiteShell>
  )
}
