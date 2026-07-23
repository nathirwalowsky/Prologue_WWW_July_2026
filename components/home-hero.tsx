"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useCallback } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * HomeHero — Prologue agency full-viewport hero
 *
 * Phase 0 (initial):
 *   - Full-bleed kv-glow.jpg atmospheric background (red+indigo orb)
 *   - kv-transparent.png layered offset-right for depth
 *   - Large centred tagline: word-by-word entrance animation
 *   - Thin red scan-line sweeps once across the screen
 *   - Logo at top-left (signet + wordmark)
 *   - Scroll cue at bottom
 *
 * Phase 1 (after first scroll or wheel event):
 *   - First wheel/scroll event is INTERCEPTED — document does NOT scroll down
 *   - Words cascade out upward, new condensed headline cascades in
 *   - Subtitle and 3 CTA cards rise in with stagger
 *   - After phase 1 fully renders, normal scrolling resumes
 *
 * The sticky nav in SiteShell hides while phase === 0 via
 * html.hero-scrolled CSS class.
 */

export function HomeHero() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState<0 | 1>(0)
  const [scrollUnlocked, setScrollUnlocked] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const transitioningRef = useRef(false)

  // Fire the phase transition (called by first wheel or touch-swipe)
  const triggerPhase1 = useCallback(() => {
    if (transitioningRef.current || phase === 1) return
    transitioningRef.current = true
    setPhase(1)
    document.documentElement.classList.add("hero-scrolled")

    // Cards enter with a slight extra delay
    setTimeout(() => setCardsVisible(true), 350)

    // Unlock normal scroll after the full animation settles
    setTimeout(() => {
      setScrollUnlocked(true)
      transitioningRef.current = false
    }, 900)
  }, [phase])

  // Intercept wheel: first wheel fires transition, subsequent ones scroll normally
  useEffect(() => {
    if (phase === 1 && scrollUnlocked) return

    const onWheel = (e: WheelEvent) => {
      if (phase === 0) {
        e.preventDefault()
        if (e.deltaY > 0) triggerPhase1()
        return
      }
      // Phase 1 but scroll not yet unlocked — hold
      if (!scrollUnlocked) e.preventDefault()
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [phase, scrollUnlocked, triggerPhase1])

  // Touch support
  useEffect(() => {
    if (phase === 1 && scrollUnlocked) return
    let startY = 0

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY
      if (delta > 40 && phase === 0) {
        e.preventDefault()
        triggerPhase1()
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: false })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [phase, scrollUnlocked, triggerPhase1])

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--color-prologue-black)] text-[var(--color-white)]"
    >
      {/* ── Background layers ───────────────────────────────────────── */}

      {/* Glow KV — the colorful red+indigo atmospheric element */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand/kv-glow.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{
            animation: "kv-drift 18s ease-in-out infinite",
            animationDelay: "0s",
            opacity: phase === 0 ? 0.72 : 0.38,
            transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          priority
          aria-hidden
        />
        {/* Vignette — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, #0d0d0d 90%), linear-gradient(to bottom, #0d0d0d 0%, transparent 15%, transparent 75%, #0d0d0d 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Transparent KV — offset right for layered depth */}
      <div
        className="pointer-events-none absolute right-[-5%] top-1/2 z-0 hidden w-[55%] -translate-y-1/2 md:block"
        style={{
          opacity: phase === 0 ? 0.18 : 0.08,
          transition: "opacity 1.2s ease",
        }}
        aria-hidden
      >
        <Image
          src="/brand/kv-transparent.png"
          alt=""
          width={900}
          height={900}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      {/* Scan line — single sweep on mount */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #BD3B35 30%, #303E91 70%, transparent 100%)",
          animation: "hero-scan 2.2s cubic-bezier(0.4, 0, 0.6, 1) 0.4s 1 forwards",
          opacity: 0,
        }}
        aria-hidden
      />

      {/* ── Overlay nav (phase 0 only) ──────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6 md:px-8 md:pt-7"
        style={{
          opacity: phase === 0 ? 1 : 0,
          pointerEvents: phase === 0 ? "auto" : "none",
          transition: "opacity 0.5s ease",
          animation: "hero-logo-drop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
        }}
      >
        {/* Full logo: signet + wordmark */}
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logo-light-signet.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
            aria-hidden
            priority
          />
          <Image
            src="/brand/logo-light-wordmark.png"
            alt="PROLOGUE agency"
            width={130}
            height={34}
            className="h-[18px] w-auto"
            priority
          />
        </div>

        {/* Pre-scroll nav links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hero navigation">
          {[
            { href: "/services", label: t.nav.services },
            { href: "/about", label: t.nav.about },
            { href: "/contact", label: t.nav.contact },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--color-grey)] transition-colors duration-200 hover:text-[var(--color-white)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Central content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-36 pt-28 text-center md:px-12">

        {/* ── PHASE 0: Full brand headline ── */}
        <div
          className="absolute flex flex-col items-center gap-5"
          aria-hidden={phase === 1}
          style={{
            pointerEvents: phase === 1 ? "none" : "auto",
            visibility: phase === 1 ? "hidden" : "visible",
            transition: "visibility 0s linear 0.5s",
          }}
        >
          {/* Eyebrow label */}
          <span
            className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-grey)]"
            style={{
              animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s both",
              opacity: phase === 1 ? 0 : undefined,
              transition: phase === 1 ? "opacity 0.3s ease" : undefined,
            }}
          >
            Strategy · Transformation · Growth
          </span>

          {/* Main headline — word-split entrance */}
          <h1
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              opacity: phase === 1 ? 0 : 1,
              transform: phase === 1 ? "translateY(-20px)" : "translateY(0)",
              transition: phase === 1
                ? "opacity 0.4s cubic-bezier(0.7,0,0.84,0), transform 0.4s cubic-bezier(0.7,0,0.84,0)"
                : undefined,
            }}
          >
            {/* Line 1: "Strategic excellence" */}
            <span className="block">
              <span
                className="hero-word hero-word-animate-in inline-block"
                style={{ animationDelay: "0.75s" }}
              >
                Strategic&nbsp;
              </span>
              <span
                className="hero-word hero-word-animate-in inline-block"
                style={{ animationDelay: "0.87s" }}
              >
                excellence
              </span>
            </span>
            {/* Line 2: faded phrase */}
            <span
              className="block"
              style={{
                color: "var(--color-grey)",
                opacity: 0.45,
                fontSize: "0.68em",
                marginTop: "0.15em",
              }}
            >
              {["in an age of", "constant", "transformation"].map((word, i) => (
                <span
                  key={word}
                  className="hero-word hero-word-animate-in inline-block"
                  style={{ animationDelay: `${1.0 + i * 0.13}s`, marginRight: "0.28em" }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Red/blue accent rule */}
          <div
            className="mt-2 flex gap-0"
            style={{
              animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.4s both",
              opacity: phase === 1 ? 0 : undefined,
              transition: phase === 1 ? "opacity 0.3s ease" : undefined,
            }}
            aria-hidden
          >
            <div className="h-px w-12 bg-[var(--color-prologue-red)]" />
            <div className="h-px w-6 bg-[var(--color-prologue-blue)]" />
          </div>
        </div>

        {/* ── PHASE 1: Condensed headline + sub + cards ── */}
        <div
          className="flex w-full max-w-4xl flex-col items-center gap-6"
          aria-hidden={phase === 0}
          style={{
            pointerEvents: phase === 0 ? "none" : "auto",
          }}
        >
          {/* Condensed headline */}
          <h1
            className="text-balance font-[family-name:var(--font-display)] font-semibold leading-[1.0] tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              opacity: phase === 0 ? 0 : 1,
              transform: phase === 0 ? "translateY(28px)" : "translateY(0)",
              transition:
                "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s",
            }}
          >
            Strategic{" "}
            <span className="text-[var(--color-prologue-red)]">transformation</span>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-xl text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-grey)] md:text-xl"
            style={{
              opacity: phase === 0 ? 0 : 1,
              transform: phase === 0 ? "translateY(20px)" : "translateY(0)",
              transition:
                "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.18s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.18s",
            }}
          >
            {t.home.heroSub}
          </p>

          {/* CTA cards */}
          <div className="mt-4 grid w-full grid-cols-1 gap-px bg-[var(--border-default)] sm:grid-cols-3">
            {[
              {
                href: "/vector",
                tag: "Free",
                title: "Vector Workshop",
                desc: "The foundational tool for strategic clarity — yours at no cost.",
                accent: true,
              },
              {
                href: "/about",
                tag: "Explore",
                title: "Learn More",
                desc: "Understand how we work before making any decision.",
                accent: false,
              },
              {
                href: "/contact",
                tag: "Start",
                title: "Schedule Intro Call",
                desc: "A focused 30-minute conversation about your situation.",
                accent: false,
              },
            ].map((card, i) => (
              <CtaCard
                key={card.href}
                {...card}
                visible={cardsVisible}
                delay={i * 90}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue — phase 0 only */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{
          opacity: phase === 0 ? 0.6 : 0,
          transition: "opacity 0.5s ease",
          animation: phase === 0 ? "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.6s both" : undefined,
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <button
          type="button"
          onClick={() => triggerPhase1()}
          className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          aria-label="Scroll to continue"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-grey)]">
            Scroll
          </span>
          {/* Animated chevron */}
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            style={{ animation: "hero-scan 0s" }}
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="var(--color-grey)"
              strokeWidth="1.5"
              strokeLinecap="square"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: 0,
                animation: "hero-sub-in 0.8s ease infinite alternate",
              }}
            />
          </svg>
        </button>
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
  accent = false,
  visible,
  delay,
}: {
  href: string
  tag: string
  title: string
  desc: string
  accent?: boolean
  visible: boolean
  delay: number
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 bg-[rgba(13,13,13,0.85)] p-5 text-left backdrop-blur-sm transition-colors duration-200 hover:bg-[rgba(30,30,30,0.9)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        borderTop: accent
          ? "1px solid var(--color-prologue-red)"
          : "1px solid var(--border-default)",
      }}
    >
      <span
        className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: accent ? "var(--color-prologue-red)" : "var(--color-grey)" }}
      >
        {tag}
      </span>
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-white)] transition-colors group-hover:text-[var(--color-grey)]">
        {title}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-grey)] opacity-70">
        {desc}
      </p>
    </Link>
  )
}
