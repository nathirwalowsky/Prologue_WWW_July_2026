"use client"

import { useLanguage } from "@/contexts/language-context"

export function HomeServices() {
  const { t } = useLanguage()

  const services = [
    {
      tag: t.home.service1Tag,
      title: t.home.service1Title,
      desc: t.home.service1Desc,
      details: [t.home.service1Detail1, t.home.service1Detail2, t.home.service1Detail3],
      index: "01",
      href: "/services/strategy",
    },
    {
      tag: t.home.service2Tag,
      title: t.home.service2Title,
      desc: t.home.service2Desc,
      details: [t.home.service2Detail1, t.home.service2Detail2, t.home.service2Detail3],
      index: "02",
      href: "/services/key-projects",
    },
    {
      tag: t.home.service3Tag,
      title: t.home.service3Title,
      desc: t.home.service3Desc,
      details: [t.home.service3Detail1, t.home.service3Detail2, t.home.service3Detail3],
      index: "03",
      href: "/services/transformation",
    },
  ]

  return (
    <section className="border-y border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.servicesLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.home.servicesTitle}
            </h2>
            <p className="max-w-sm text-pretty font-serif text-base leading-relaxed text-muted-foreground md:text-right">
              {t.home.servicesSub}
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.index}
              className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary/30"
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
              <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-serif text-base leading-relaxed text-muted-foreground flex-1">
                {service.desc}
              </p>

              {/* Detail bullets */}
              <ul className="flex flex-col gap-2 border-t border-border pt-5">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-sm leading-relaxed text-muted-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={service.href}
                className="mt-1 inline-flex items-center gap-1.5 font-medium text-primary text-sm transition-transform group-hover:translate-x-0.5"
              >
                {t.home.servicesLearnMore} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
