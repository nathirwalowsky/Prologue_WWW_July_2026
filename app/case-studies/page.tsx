"use client"

import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { useLanguage } from "@/contexts/language-context"
import { caseStudies } from "@/lib/case-study-data"

const serviceColours: Record<string, string> = {
  strategy:       "bg-primary/10 text-primary",
  "key-projects": "bg-accent/10 text-accent",
  transformation: "bg-destructive/10 text-destructive",
}

export default function CaseStudiesPage() {
  const { t } = useLanguage()

  return (
    <SiteShell pageName={t.caseStudies.title}>
      <PageHeader
        label={t.caseStudies.label}
        title={t.caseStudies.title}
        intro={t.caseStudies.intro}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group grid grid-cols-1 gap-6 rounded-xl border border-border bg-card p-7 transition-colors hover:border-accent/40 hover:bg-accent/5 md:grid-cols-[1fr_auto]"
            >
              <div className="flex flex-col gap-4">
                {/* Tags row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-0.5 font-mono text-xs uppercase tracking-wide ${serviceColours[cs.service] ?? "bg-secondary text-muted-foreground"}`}>
                    {cs.service === "key-projects" ? t.nav.servicesKeyProjects : cs.service === "strategy" ? t.nav.servicesStrategy : t.nav.servicesTransformation}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/50">{cs.industry}</span>
                </div>

                <h2 className="text-balance font-sans text-xl font-semibold tracking-tight text-foreground">
                  {cs.headline}
                </h2>
                <p className="text-pretty font-serif text-sm leading-relaxed text-muted-foreground">
                  {cs.subline}
                </p>

                {/* Mini stats */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                  {cs.stats.slice(0, 3).map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-1.5">
                      <span className="font-sans text-base font-semibold tabular-nums text-foreground">{stat.value}</span>
                      <span className="font-serif text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA arrow */}
              <div className="flex items-center md:items-start md:pt-1">
                <span className="font-medium text-primary transition-transform group-hover:translate-x-0.5">
                  {t.caseStudies.readMore}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
