"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * HomeHero — Prologue agency full-viewport hero
 *
 * Phase 0 (initial):
 *   - kv-transparent.png centred, large, colorful
 *   - Large tagline, word-by-word entrance
 *   - Decorative grid lines, floating stat hints, ticker strip
 *   - SCROLL cue at bottom
 *
 * Phase 1 (after first downward scroll):
 *   - kv element shifts right, dims
 *   - "Strategic excellence" → "Strategic transformation" (all white)
 *   - Subtitle + three CTA cards rise in
 *   - Site nav slides in from top
 *
 * Scroll UP from the very top of the page (scrollY === 0) reverses back to phase 0.
 *
 * Scroll intercept uses ref-mirrored state to avoid stale closures.
 */

export function HomeHero() {
  const { t } = useLanguage()

  const [phase, setPhase]                   = useState<0 | 1>(0)
  const phaseRef                            = useRef<0 | 1>(0)
  const [scrollUnlocked, setScrollUnlocked] = useState(false)
  const scrollUnlockedRef                   = useRef(false)
  const [cardsVisible, setCardsVisible]     = useState(false)
  const transitioningRef                    = useRef(false)

  useEffect(() => { phaseRef.current = phase }, [phase])
  useEffect(() => { scrollUnlockedRef.current = scrollUnlocked }, [scrollUnlocked])

  // ── Forward: phase 0 → 1 ─────────────────────────────────────────
  const triggerPhase1 = () => {
    if (transitioningRef.current || phaseRef.current === 1) return
    transitioningRef.current = true
    setPhase(1)
    phaseRef.current = 1
    document.documentElement.classList.add("hero-scrolled")
    setTimeout(() => setCardsVisible(true), 420)
    setTimeout(() => {
      setScrollUnlocked(true)
      scrollUnlockedRef.current = true
      transitioningRef.current  = false
    }, 960)
  }

  // ── Reverse: phase 1 → 0 (only when at very top of page) ─────────
  const triggerPhase0 = () => {
    if (transitioningRef.current || phaseRef.current === 0) return
    transitioningRef.current = true
    setCardsVisible(false)
    setScrollUnlocked(false)
    scrollUnlockedRef.current = false
    setPhase(0)
    phaseRef.current = 0
    document.documentElement.classList.remove("hero-scrolled")
    setTimeout(() => { transitioningRef.current = false }, 960)
  }

  // ── Wheel intercept ───────────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Phase 0: intercept ALL wheel, only go forward on down
      if (phaseRef.current === 0) {
        e.preventDefault()
        if (e.deltaY > 0) triggerPhase1()
        return
      }
      // Phase 1, still animating: hold page in place
      if (!scrollUnlockedRef.current) {
        e.preventDefault()
        return
      }
      // Phase 1 + scroll unlocked: if user is at top and scrolls up → reverse
      if (e.deltaY < 0 && window.scrollY === 0) {
        e.preventDefault()
        triggerPhase0()
      }
    }
    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Native scroll listener: auto-reverse when user scrolls back to top ──
  useEffect(() => {
    const onScroll = () => {
      if (phaseRef.current === 1 && scrollUnlockedRef.current && window.scrollY === 0) {
        triggerPhase0()
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Touch support ─────────────────────────────────────────────────
  useEffect(() => {
    let startY = 0
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const onTouchEnd   = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY
      if (delta > 40  && phaseRef.current === 0) { triggerPhase1() }
      if (delta < -40 && phaseRef.current === 1 && window.scrollY === 0) { triggerPhase0() }
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend",   onTouchEnd,   { passive: true })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend",   onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isPhase1 = phase === 1

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-dvh flex-col overflow-hidden"
      style={{ background: "var(--color-prologue-black, #0d0d0d)" }}
    >



      {/* ── Branding element — kv-transparent (eclipse + mountain) ── */}
      {/*
        Phase 0: centred, large, high opacity — the focal hero element
        Phase 1: shifts right, grows, dims — becomes atmospheric backdrop
      */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{
          width:     isPhase1 ? "72%" : "50%",
          top:       isPhase1 ? "-14%" : "2%",
          left:      isPhase1 ? "52%"  : "50%",
          transform: "translateX(-50%)",
          opacity:   isPhase1 ? 0.18 : 1,
          transition: [
            "width   1.15s cubic-bezier(0.4,0,0.2,1)",
            "top     1.15s cubic-bezier(0.4,0,0.2,1)",
            "left    1.15s cubic-bezier(0.4,0,0.2,1)",
            "opacity 1.10s cubic-bezier(0.4,0,0.2,1)",
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

      {/* ── Top bar — brand indigo, white text ───────────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-4 md:px-8"
        style={{
          backgroundColor: "var(--color-prologue-blue, #303E91)",
          opacity:    isPhase1 ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: isPhase1 ? "none" : "auto",
          animation: "hero-logo-drop 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both",
        }}
      >
        <div className="flex items-center gap-3">
          <Image src="/brand/logo-light-signet.png" alt="" width={44} height={44} className="h-11 w-auto" aria-hidden priority />
          <Image src="/brand/logo-light-wordmark.png" alt="PROLOGUE agency" width={160} height={44} className="h-7 w-auto" priority />
        </div>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hero navigation">
          {[
            { href: "/services", label: t.nav.services },
            { href: "/about",    label: t.nav.about    },
            { href: "/contact",  label: t.nav.contact  },
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

      {/* ── Central content ──────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:px-12">

        {/* ── PHASE 0 ── */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            pointerEvents: isPhase1 ? "none" : "auto",
            opacity:    isPhase1 ? 0 : 1,
            transform:  isPhase1 ? "translateY(-20px)" : "translateY(0)",
            visibility: isPhase1 ? "hidden" : "visible",
            transition: isPhase1
              ? "opacity 0.4s cubic-bezier(0.7,0,0.84,0), transform 0.4s cubic-bezier(0.7,0,0.84,0), visibility 0s linear 0.45s"
              : "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span
            className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "rgba(255,255,255,0.42)", animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            Strategy · Transformation · Growth
          </span>

          <h1
            className="font-[family-name:var(--font-display)] font-semibold leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            <span className="block">
              {[{ text: "Strategic", delay: "0.7s" }, { text: "excellence", delay: "0.83s" }].map(({ text, delay }) => (
                <span key={text} className="hero-word hero-word-animate-in inline-block" style={{ animationDelay: delay, marginRight: "0.22em" }}>{text}</span>
              ))}
            </span>
            <span
              className="block"
              style={{ fontSize: "0.6em", color: "rgba(255,255,255,0.30)", marginTop: "0.22em" }}
            >
              {[
                { text: "in an age of",   delay: "1.0s"  },
                { text: "constant",       delay: "1.12s" },
                { text: "transformation", delay: "1.24s" },
              ].map(({ text, delay }) => (
                <span key={text} className="hero-word hero-word-animate-in inline-block" style={{ animationDelay: delay, marginRight: "0.28em" }}>{text}</span>
              ))}
            </span>
          </h1>

          {/* Thin rule: indigo + sand */}
          <div
            className="flex"
            style={{ animation: "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.5s both" }}
            aria-hidden
          >
            <div style={{ height: 1, width: 48, backgroundColor: "var(--color-prologue-blue, #303E91)" }} />
            <div style={{ height: 1, width: 24, backgroundColor: "var(--color-prologue-sand, #90755F)" }} />
          </div>
        </div>

        {/* ── PHASE 1 ── */}
        <div
          className="flex w-full max-w-4xl flex-col items-center gap-6"
          style={{
            pointerEvents: isPhase1 ? "auto" : "none",
            visibility:    isPhase1 ? "visible" : "hidden",
          }}
        >
          <h1
            className="text-balance font-[family-name:var(--font-display)] font-semibold leading-none tracking-tight text-white"
            style={{
              fontSize:  "clamp(2.6rem, 6.5vw, 5.5rem)",
              opacity:   isPhase1 ? 1 : 0,
              transform: isPhase1 ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
            }}
          >
            {/* "transformation" stays white — no colour override */}
            Strategic{" "}transformation
          </h1>

          <p
            className="max-w-xl text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed md:text-xl"
            style={{
              color:     "rgba(255,255,255,0.50)",
              opacity:   isPhase1 ? 1 : 0,
              transform: isPhase1 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            {t.home.heroSub}
          </p>

          {/* CTA cards */}
          <div
            className="mt-4 grid w-full grid-cols-1 gap-px sm:grid-cols-3"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
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

      {/* ── Ticker strip — horizontal brand words ───────────────── */}
      <div
        className="absolute bottom-20 left-0 right-0 z-10 overflow-hidden"
        style={{
          opacity:   isPhase1 ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker-scroll 24s linear infinite" }}
        >
          {/* Duplicate for seamless loop */}
          {[0, 1].map((n) => (
            <span key={n} className="flex shrink-0 items-center gap-6 pr-6">
              {[
                "Strategy", "·", "Leadership", "·", "Transformation",
                "·", "Growth", "·", "Clarity", "·", "Execution",
                "·", "Vision", "·", "Results", "·",
              ].map((word, i) => (
                <span
                  key={`${n}-${i}`}
                  className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{
                    color: word === "·"
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(255,255,255,0.18)",
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────── */}
      <div
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
        style={{
          opacity:    isPhase1 ? 0 : 1,
          pointerEvents: isPhase1 ? "none" : "auto",
          transition: "opacity 0.4s ease",
          animation:  !isPhase1 ? "hero-sub-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.7s both" : undefined,
        }}
      >
        <button
          type="button"
          onClick={triggerPhase1}
          className="flex flex-col items-center gap-2"
          aria-label="Scroll to reveal more"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span
            className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Scroll
          </span>
          <ScrollChevron />
        </button>
      </div>

    </section>
  )
}

/* ── Animated scroll chevron ──────────────────────────────────── */
function ScrollChevron() {
  return (
    <svg
      width="16" height="9" viewBox="0 0 16 9"
      fill="none" aria-hidden
      style={{ animation: "chevron-bob 1.6s ease-in-out infinite" }}
    >
      <path d="M1 1L8 8L15 1" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

/* ── CTA Card ────────────────────────────────────────────────── */
function CtaCard({
  href, tag, title, desc, primary = false, visible, delay,
}: {
  href: string; tag: string; title: string; desc: string
  primary?: boolean; visible: boolean; delay: number
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 p-5 text-left"
      style={{
        backgroundColor: "rgba(13,13,13,0.90)",
        borderTop: primary
          ? "1px solid var(--color-prologue-blue, #303E91)"
          : "1px solid rgba(255,255,255,0.07)",
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, background-color 0.2s ease`,
        backdropFilter: "blur(6px)",
      }}
    >
      <span
        className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: primary ? "var(--color-prologue-blue, #303E91)" : "rgba(255,255,255,0.36)" }}
      >
        {tag}
      </span>
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors group-hover:text-white/60">
        {title}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
        {desc}
      </p>
    </Link>
  )
}
