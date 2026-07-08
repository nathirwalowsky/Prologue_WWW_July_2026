"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function HomeServices() {
  const { t } = useLanguage()

  const services = [
    {
      index: "01",
      tag: t.home.service1Tag,
      title: t.home.service1Title,
      desc: t.home.service1Desc,
      details: [
        t.home.service1Detail1,
        t.home.service1Detail2,
        t.home.service1Detail3,
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
      ],
      outcome: "[+60% clarity on strategic priorities within 90 days]",
      outcomeLabel: "[Typical client outcome]",
      href: "/services/strategy",
    },
    {
      index: "02",
      tag: t.home.service2Tag,
      title: t.home.service2Title,
      desc: t.home.service2Desc,
      details: [
        t.home.service2Detail1,
        t.home.service2Detail2,
        t.home.service2Detail3,
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
      ],
      outcome: "[3× faster delivery vs. internal teams alone]",
      outcomeLabel: "[Typical client outcome]",
      href: "/services/key-projects",
    },
    {
      index: "03",
      tag: t.home.service3Tag,
      title: t.home.service3Title,
      desc: t.home.service3Desc,
      details: [
        t.home.service3Detail1,
        t.home.service3Detail2,
        t.home.service3Detail3,
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
        "[Dodatkowy punkt szczegółowy]",
      ],
      outcome: "[85% adoption rate across the organisation]",
      outcomeLabel: "[Typical client outcome]",
      href: "/services/transformation",
    },
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3 border-b border-border pb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.servicesLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t.home.servicesTitle}
            </h2>
            <p className="max-w-sm text-pretty font-serif text-base leading-relaxed text-muted-foreground md:text-right">
              {t.home.servicesSub}
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <article
              key={service.index}
              className={`group grid grid-cols-1 gap-8 border-b border-border py-12 md:grid-cols-[80px_1fr_1fr] md:gap-12 md:py-16 ${
                i === 0 ? "" : ""
              }`}
            >
              {/* Left col — index + tag */}
              <div className="flex flex-row items-start gap-4 md:flex-col md:gap-3 md:pt-1">
                <span className="font-mono text-5xl font-light leading-none text-border md:text-6xl">
                  {service.index}
                </span>
                <span className="mt-1 rounded-full border border-accent/30 bg-accent/5 px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-accent md:mt-0">
                  {service.tag}
                </span>
              </div>

              {/* Middle col — title + description + outcome */}
              <div className="flex flex-col gap-5">
                <h3 className="text-balance font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-pretty font-serif text-base leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>

                {/* Outcome metric */}
                <div className="mt-2 rounded-lg border border-border bg-secondary p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    {service.outcomeLabel}
                  </p>
                  <p className="font-sans text-lg font-semibold text-foreground leading-snug">
                    {service.outcome}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-1 inline-flex w-fit items-center gap-2 rounded-md border border-primary px-5 py-2.5 font-sans text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t.home.servicesLearnMore}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Right col — what's included */}
              <div className="flex flex-col gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  [Co obejmuje]
                </p>
                <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {service.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span className="font-serif text-sm leading-relaxed text-muted-foreground">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
