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
        <div className="mb-16 flex flex-col gap-3 border-b border-[var(--border)] pb-10">
          <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[#BD3B35]">
            {t.home.servicesLabel}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
              {t.home.servicesTitle}
            </h2>
            <p className="max-w-sm text-pretty font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--muted-foreground)] md:text-right">
              {t.home.servicesSub}
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service) => (
            <article
              key={service.index}
              className="group grid grid-cols-1 gap-8 border-b border-[var(--border)] py-12 md:grid-cols-[80px_1fr_1fr] md:gap-12 md:py-16"
            >
              {/* Left col — index + tag */}
              <div className="flex flex-row items-start gap-4 md:flex-col md:gap-3 md:pt-1">
                <span className="font-[family-name:var(--font-display)] text-5xl font-light leading-none text-[var(--border)] md:text-6xl">
                  {service.index}
                </span>
                <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                  {service.tag}
                </span>
              </div>

              {/* Middle col — title + description + outcome */}
              <div className="flex flex-col gap-5">
                <h3 className="text-balance font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-pretty font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--muted-foreground)]">
                  {service.desc}
                </p>

                {/* Outcome metric — borderline only, no color fill */}
                <div className="mt-1 border-l-2 border-[#BD3B35]/60 pl-4">
                  <p className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)] mb-1">
                    {service.outcomeLabel}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--foreground)] leading-snug">
                    {service.outcome}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-1 inline-flex w-fit items-center gap-2 border border-[var(--border)] px-5 py-2.5 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/40"
                >
                  {t.home.servicesLearnMore} →
                </Link>
              </div>

              {/* Right col — what's included */}
              <div className="flex flex-col gap-4">
                <p className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                  [Co obejmuje]
                </p>
                <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {service.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] h-px w-3 shrink-0 bg-[var(--muted-foreground)]/40"
                        aria-hidden="true"
                      />
                      <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)]">
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
