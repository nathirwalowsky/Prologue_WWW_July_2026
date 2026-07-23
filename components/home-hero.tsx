"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * HomeHero
 *
 * Phase 0 (scrollY = 0):
 *   - Full-viewport dark panel
 *   - Prologue symbol + wordmark centred
 *   - Full tagline: "Strategic excellence in an age of constant transformation"
 *
 * Phase 1 (scrollY > triggerPx):
 *   - Logo shrinks to top-left (mimics the sticky nav wordmark position)
 *   - Tagline morphs: accent phrase fades/slides out, "Strategic transformation"
 *     remains centred with a subtitle sliding in below
 *   - 3 CTA cards rise up beneath the headline
 *
 * The sticky nav in SiteShell is told to hide while phase === 0 via
 * a CSS class toggled on <html> — no prop drilling needed.
 */

const TRIGGER_PX = 80

export function HomeHero() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= TRIGGER_PX)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Tell the sticky header (SiteShell) whether to show itself
  useEffect(() => {
    document.documentElement.classList.toggle("hero-scrolled", scrolled)
  }, [scrolled])

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      /* 100dvh so the full intro is always in viewport */
      className="relative flex min-h-dvh flex-col bg-foreground text-background"
    >
      {/* ── Overlay nav (visible only while NOT scrolled) ── */}
      <div
        className={`absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-5 transition-opacity duration-500 md:px-8 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Wordmark — fades/moves once scrolled (the sticky header takes over) */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/logo-light-signet.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-auto"
            aria-hidden="true"
            priority
          />
          <Image
            src="/brand/logo-light-wordmark.png"
            alt="PROLOGUE agency"
            width={120}
            height={32}
            className="h-5 w-auto hidden sm:block"
            priority
          />
        </div>
        {/* Pre-scroll nav links */}
        <nav className="hidden items-center gap-7 md:flex">
          {[
            { href: "/services", label: t.nav.services },
            { href: "/about",    label: t.nav.about },
            { href: "/contact",  label: t.nav.contact },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--foreground)]/50 transition-colors hover:text-[var(--foreground)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Central content ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-32 pt-24 text-center md:px-8">

        {/* Logo / symbol — shrinks and moves to top-left on scroll */}
        <div
          className={`mb-8 transition-all duration-700 ease-in-out ${
            scrolled
              ? "absolute left-5 top-4 h-10 w-auto opacity-0 md:left-7"
              : "relative h-20 w-20 opacity-100 md:h-28 md:w-28"
          }`}
        >
          <Image
            src="/brand/logo-light-signet.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* ── Tagline — two-phase morph ── */}
        <div className="relative flex min-h-[8rem] flex-col items-center justify-center gap-2 md:min-h-[10rem]">

          {/* Phase 0 — full tagline */}
          <h1
            className={`absolute text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight transition-all duration-600 ease-in-out md:text-6xl lg:text-7xl ${
              scrolled
                ? "translate-y-4 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <span>Strategic excellence </span>
            <span className="text-[var(--foreground)]/40">in an age of constant transformation</span>
          </h1>

          {/* Phase 1 — condensed headline + subtitle */}
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-600 ease-in-out ${
              scrolled
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Strategic transformation
            </h1>
            <p className="max-w-lg text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--foreground)]/60 md:text-xl">
              {t.home.heroSub}
            </p>
          </div>
        </div>

        {/* ── 3 CTA cards — fade in after scroll ── */}
        <div
          className={`mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 transition-all duration-700 ease-in-out sm:grid-cols-3 ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <CtaCard
            href="/vector"
            tag="Free"
            title="Vector Workshop"
            desc="The foundational tool for strategic clarity — yours at no cost."
            primary
          />
          <CtaCard
            href="/about"
            tag="Explore"
            title="Learn More"
            desc="Understand how we work before making any decision."
          />
          <CtaCard
            href="/contact"
            tag="Start"
            title="Schedule Intro Call"
            desc="A focused 30-minute conversation about your situation."
          />
        </div>
      </div>

      {/* Scroll cue — fades out after scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-60"
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/40">
            Scroll
          </span>
          <span className="animate-bounce text-background/40">↓</span>
        </div>
      </div>
    </section>
  )
}

/* ── CTA Card ─────────────────────────────────────────────────── */

function CtaCard({
  href,
  tag,
  title,
  desc,
  primary = false,
}: {
  href: string
  tag: string
  title: string
  desc: string
  primary?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-3 border p-5 text-left transition-colors duration-200 ${
        primary
          ? "border-[#BD3B35]/40 bg-[#BD3B35]/10 hover:bg-[#BD3B35]/15"
          : "border-[var(--border)] bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/8"
      }`}
    >
      <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/40">
        {tag}
      </span>
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.08em] text-[var(--foreground)] transition-colors group-hover:text-[var(--foreground)]/80">
        {title}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--foreground)]/50">{desc}</p>
    </Link>
  )
}
