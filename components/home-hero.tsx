"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * HomeHero — Prologue agency full-viewport hero
 *
 * Phase 0 (initial):
 *   - Pure black background
 *   - kv-transparent.png (eclipse + mountain) centred, modest size
 *   - Large tagline below it, word-by-word entrance
 *   - Eyebrow label fades in first
 *   - SCROLL cue at bottom
 *
 * Phase 1 (after first wheel/swipe — document does NOT scroll during transition):
 *   - kv element shifts right and scales up smoothly
 *   - Tagline morphs: "Strategic excellence" → "Strategic transformation"
 *   - Subtitle + CTA cards rise in with stagger
 *   - Site nav slides in from top via html.hero-scrolled class
 *   - Normal scroll unlocked after 900 ms
 *
 * Scroll intercept uses a ref-mirrored phase value to avoid stale closures.
 */

export function HomeHero() {
  const { t } = useLanguage()

  // Phase state + a ref that always mirrors it so event handlers never go stale
  const [phase, setPhase] = useState<0 | 1>(0)
  const phaseRef = useRef<0 | 1>(0)

  const [scrollUnlocked, setScrollUnlocked] = useState(false)
  const scrollUnlockedRef = useRef(false)

  const [cardsVisible, setCardsVisible] = useState(false)
  const transitioningRef = useRef(false)

  // Sync refs to state
  useEffect(() => { phaseRef.current = phase }, [phase])
  useEffect(() => { scrollUnlockedRef.current = scrollUnlocked }, [scrollUnlocked])

  const triggerPhase1 = () => {
    if (transitioningRef.current || phaseRef.current === 1) return
    transitioningRef.current = true

    setPhase(1)
    phaseRef.current = 1
    document.documentElement.classList.add("hero-scrolled")

    // Cards stagger in slightly after the headline
    setTimeout(() => setCardsVisible(true), 400)

    // Unlock normal scroll after animation settles
    setTimeout(() => {
      setScrollUnlocked(true)
      scrollUnlockedRef.current = true
      transitioningRef.current = false
    }, 950)
  }

  // Wheel intercept — registered once, reads from refs (no stale closure)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (phaseRef.current === 0) {
        e.preventDefault()
        if (e.deltaY > 0) triggerPhase1()
        return
      }
      // Phase 1 but still animating — hold scroll
      if (!scrollUnlockedRef.current) {
        e.preventDefault()
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // intentionally empty — reads via refs

  // Touch swipe support
  useEffect(() => {
    let startY = 0

    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY
      if (delta > 40 && phaseRef.current === 0) {
        triggerPhase1()
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isPhase1 = phase === 1

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--color-prologue-black)]"
    >

      {/* ── Top bar — brand indigo, white text ─────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-4 md:px-8"
        style={{
          backgroundColor: "var(--color-prologue-blue)",
          opacity: isPhase1 ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: isPhase1 ? "none" : "auto",
          animation: "hero-logo-drop 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logo-light-signet.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-auto"
            aria-hidden
            priority
          />
          <Image
            src="/brand/logo-light-wordmark.png"
            alt="PROLOGUE agency"
            width={120}
            height={32}
            className="h-4 w-auto"
            priority
          />
        </div>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hero navigation">
          {[
            { href: "/services", label: t.nav.services },
            { href: "/about",    label: t.nav.about },
            { href: "/contact",  label: t.nav.contact },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Branding element — kv-transparent (eclipse + mountain) ─── */}
      {/*
        Phase 0: centred, upper half of screen, generous size
        Phase 1: shifts right + up, scales up, dims — becomes atmospheric backdrop
      */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width:     isPhase1 ? "70%" : "46%",
          top:       isPhase1 ? "-12%" : "4%",
          left:      isPhase1 ? "54%"  : "50%",
          transform: "translateX(-50%)",
          opacity:   isPhase1 ? 0.20 : 0.88,
          transition: [
            "width 1.1s cubic-bezier(0.4,0,0.2,1)",
            "top 1.1s cubic-bezier(0.4,0,0.2,1)",
            "left 1.1s cubic-bezier(0.4,0,0.2,1)",
            "opacity 1.1s cubic-bezier(0.4,0,0.2,1)",
          ].join(", "),
          animation: "hero-logo-drop 1.0s cubic-bezier(0.16,1,0.3,1) 0.1s both",
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

      {/* ── Central content area ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-28 text-center md:px-12">

        {/* ── PHASE 0: Minimal centred headline ── */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            pointerEvents: isPhase1 ? "none" : "auto",
            // Slide up + fade out on transition
            opacity:   isPhase1 ? 0 : 1,
            transform: isPhase1 ? "translateY(-18px)" : "translateY(0)",
            transition: isPhase1
              ? "opacity 0.45s cubic-bezier(0.7,0,0.84,0), transform 0.45s cubic-bezier(0.7,0,0.84,0)"
              : undefined,
            // Hide after fade so it doesn't occlude phase 1
            visibility: isPhase1 ? "hidden" : "visible",
            transitionDelay: isPhase1 ? "0s, 0s, 0.5s" : "0s",
          }}
        >
          {/* Eyebrow */}
          <span
            className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45"
            style={{ animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            Strategy · Transformation · Growth
          </span>

          {/* Headline — word-split stagger */}
          <h1
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.0] tracking-tight text-white"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            {[
              { text: "Strategic",    delay: "0.7s" },
              { text: "excellence",   delay: "0.83s" },
            ].map(({ text, delay }) => (
              <span
                key={text}
                className="hero-word hero-word-animate-in inline-block"
                style={{ animationDelay: delay, marginRight: "0.22em" }}
              >
                {text}
              </span>
            ))}
            <br />
            <span
              style={{
                display: "block",
                fontSize: "0.62em",
                color: "white",
                opacity: 0.35,
                marginTop: "0.2em",
              }}
            >
              {[
                { text: "in an age of",    delay: "1.0s" },
                { text: "constant",        delay: "1.12s" },
                { text: "transformation",  delay: "1.24s" },
              ].map(({ text, delay }) => (
                <span
                  key={text}
                  className="hero-word hero-word-animate-in inline-block"
                  style={{ animationDelay: delay, marginRight: "0.28em" }}
                >
                  {text}
                </span>
              ))}
            </span>
          </h1>

          {/* Thin brand rule: indigo then sand */}
          <div
            className="flex"
            style={{ animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.5s both" }}
            aria-hidden
          >
            <div style={{ height: 1, width: 48, backgroundColor: "var(--color-prologue-blue)" }} />
            <div style={{ height: 1, width: 24, backgroundColor: "var(--color-prologue-sand)" }} />
          </div>
        </div>

        {/* ── PHASE 1: Condensed headline + sub + cards ── */}
        <div
          className="flex w-full max-w-4xl flex-col items-center gap-6"
          style={{
            pointerEvents:  isPhase1 ? "auto" : "none",
            visibility:     isPhase1 ? "visible" : "hidden",
          }}
        >
          {/* Headline */}
          <h1
            className="text-balance font-[family-name:var(--font-display)] font-semibold leading-[1.0] tracking-tight text-white"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              opacity:   isPhase1 ? 1 : 0,
              transform: isPhase1 ? "translateY(0)" : "translateY(26px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
            }}
          >
            Strategic{" "}
            <span style={{ color: "var(--color-prologue-blue)" }}>transformation</span>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-xl text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed md:text-xl"
            style={{
              color: "rgba(255,255,255,0.55)",
              opacity:   isPhase1 ? 1 : 0,
              transform: isPhase1 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.18s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.18s",
            }}
          >
            {t.home.heroSub}
          </p>

          {/* CTA cards */}
          <div className="mt-4 grid w-full grid-cols-1 gap-px sm:grid-cols-3"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {[
              { href: "/vector",  tag: "Free",    title: "Vector Workshop",    desc: "The foundational tool for strategic clarity — yours at no cost.", primary: true  },
              { href: "/about",   tag: "Explore", title: "Learn More",          desc: "Understand how we work before making any decision.",              primary: false },
              { href: "/contact", tag: "Start",   title: "Schedule Intro Call", desc: "A focused 30-minute conversation about your situation.",           primary: false },
            ].map((card, i) => (
              <CtaCard key={card.href} {...card} visible={cardsVisible} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll cue — phase 0 only ───────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        style={{
          opacity:       isPhase1 ? 0 : 1,
          pointerEvents: isPhase1 ? "none" : "auto",
          transition:    "opacity 0.4s ease",
          animation:     !isPhase1 ? "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.7s both" : undefined,
        }}
      >
        <button
          type="button"
          onClick={triggerPhase1}
          className="flex flex-col items-center gap-2"
          aria-label="Scroll to reveal more"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Scroll
          </span>
          <ScrollChevron />
        </button>
      </div>

    </section>
  )
}

/* ── Animated chevron ───────────────────────────────────────────── */
function ScrollChevron() {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      aria-hidden
      style={{ animation: "chevron-bob 1.6s ease-in-out infinite" }}
    >
      <path
        d="M1 1L8 8L15 1"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

/* ── CTA Card ────────────────────────────────────────────────────── */
function CtaCard({
  href,
  tag,
  title,
  desc,
  primary = false,
  visible,
  delay,
}: {
  href: string
  tag: string
  title: string
  desc: string
  primary?: boolean
  visible: boolean
  delay: number
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 p-5 text-left"
      style={{
        backgroundColor: "rgba(13,13,13,0.88)",
        borderTop: primary
          ? "1px solid var(--color-prologue-blue)"
          : "1px solid rgba(255,255,255,0.08)",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, background-color 0.2s ease`,
        backdropFilter: "blur(4px)",
      }}
    >
      <span
        className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: primary ? "var(--color-prologue-blue)" : "rgba(255,255,255,0.38)" }}
      >
        {tag}
      </span>
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors group-hover:text-white/60">
        {title}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/40">
        {desc}
      </p>
    </Link>
  )
}
