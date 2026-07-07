"use client"

import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesIndexPage() {
  const { t } = useLanguage()

  const services = [
    {
      href: "/services/strategy",
      tag: t.home.service1Tag,
      title: t.home.service1Title,
      desc: t.home.service1Desc,
      index: "01",
    },
    {
      href: "/services/key-projects",
      tag: t.home.service2Tag,
      title: t.home.service2Title,
      desc: t.home.service2Desc,
      index: "02",
    },
    {
      href: "/services/transformation",
      tag: t.home.service3Tag,
      title: t.home.service3Title,
      desc: t.home.service3Desc,
      index: "03",
    },
  ]

  return (
    <SiteShell pageName={t.nav.services}>
      <PageHeader
        label={t.home.servicesLabel}
        title={t.home.servicesTitle}
        intro={t.home.servicesSub}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.index}
                href={service.href}
                className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 md:p-8"
              >
                {/* Top row: index + tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground/50">
                    {service.index}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-sans text-xl font-semibold tracking-tight text-foreground leading-snug">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="flex-1 font-serif text-base leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-1.5 font-medium text-primary text-sm transition-transform group-hover:translate-x-0.5">
                  {t.home.servicesLearnMore} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
