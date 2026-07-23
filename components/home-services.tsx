"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// One editorial SVG icon per service — geometric, minimal, 40×40
function IconCompass() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="15" stroke="#303E91" strokeWidth="1"/>
      <circle cx="20" cy="20" r="3" fill="#303E91"/>
      <path d="M20 5v4M20 31v4M5 20h4M31 20h4" stroke="#303E91" strokeWidth="1"/>
      <path d="M15 15l3 5 5-3-3-5-5 3z" fill="#303E91" opacity="0.3"/>
    </svg>
  )
}
function IconBlocks() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="5" y="5" width="13" height="13" stroke="#303E91" strokeWidth="1"/>
      <rect x="22" y="5" width="13" height="13" fill="#303E91" opacity="0.2" stroke="#303E91" strokeWidth="1"/>
      <rect x="5" y="22" width="13" height="13" fill="#303E91" opacity="0.15" stroke="#303E91" strokeWidth="1"/>
      <rect x="22" y="22" width="13" height="13" stroke="#303E91" strokeWidth="1"/>
      <line x1="18" y1="11" x2="22" y2="11" stroke="#303E91" strokeWidth="1"/>
      <line x1="29" y1="18" x2="29" y2="22" stroke="#303E91" strokeWidth="1"/>
    </svg>
  )
}
function IconArrows() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M8 28 C8 28 12 8 28 8" stroke="#303E91" strokeWidth="1"/>
      <path d="M28 8l-6 0M28 8l0 6" stroke="#303E91" strokeWidth="1" strokeLinecap="square"/>
      <path d="M32 12 C32 12 28 32 12 32" stroke="#303E91" strokeWidth="1" opacity="0.4"/>
      <circle cx="20" cy="20" r="2" fill="#303E91"/>
    </svg>
  )
}

const serviceIcons = [IconCompass, IconBlocks, IconArrows]

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
    <section className="bg-[var(--background)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3 border-b border-[var(--border)] pb-10">
          <span className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#303E91" }}>
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
          {services.map((service, si) => {
            const Icon = serviceIcons[si]
            return (
              <article
                key={service.index}
                className="group grid grid-cols-1 gap-8 border-b border-[var(--border)] py-12 md:grid-cols-[80px_1fr_1fr] md:gap-12 md:py-16"
              >
                {/* Left col — index + icon + tag */}
                <div className="flex flex-row items-start gap-4 md:flex-col md:gap-4 md:pt-1">
                  {/* Index with indigo fill */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className="flex h-7 w-7 items-center justify-center font-[family-name:var(--font-display)] text-[11px] font-semibold text-white"
                      style={{ backgroundColor: "#303E91" }}
                    >
                      {service.index}
                    </span>
                  </div>
                  <Icon />
                  <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)] md:mt-1">
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

                  {/* Outcome metric — indigo accent */}
                  <div className="mt-1 pl-4" style={{ borderLeft: "2px solid #303E91" }}>
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
                    className="mt-1 inline-flex w-fit items-center gap-2 px-5 py-2.5 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303E91] focus-visible:ring-offset-2"
                    style={{ border: "1px solid var(--border)" }}
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
                        {/* Diamond bullet in indigo */}
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden className="mt-[6px] shrink-0">
                          <rect x="4" y="0" width="5.66" height="5.66" transform="rotate(45 4 0)" fill="#303E91" opacity="0.6"/>
                        </svg>
                        <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)]">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
