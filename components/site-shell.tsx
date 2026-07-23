"use client"

import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { MainNav, MobileNav } from "@/components/main-nav"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

/** On dark background (default) use the light (white) logo.
 *  On light background use the dark logo. */
function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={tone === "dark" ? "/brand/logo-light-signet.png" : "/brand/logo-dark-signet.png"}
        alt=""
        width={28}
        height={28}
        className="h-7 w-auto"
        aria-hidden="true"
      />
      <Image
        src={tone === "dark" ? "/brand/logo-light-wordmark.png" : "/brand/logo-dark-wordmark.png"}
        alt="PROLOGUE agency"
        width={120}
        height={32}
        className="h-5 w-auto hidden sm:block"
        priority
      />
    </div>
  )
}


export function SiteShell({
  children,
  pageName,
  heroMode = false,
}: {
  children: React.ReactNode
  pageName: string
  /** When true the sticky header hides itself until the hero signals scroll */
  heroMode?: boolean
}) {
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/product", label: t.nav.product },
    { href: "/vector", label: t.nav.vector },
    { href: "/about", label: t.nav.about },
    { href: "/case-studies", label: t.nav.caseStudies },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      {/* Announcement bar */}
      <div
        className={`bg-[#BD3B35] px-4 py-2 text-center text-primary-foreground transition-all duration-500 ${
          heroMode ? "hero-mode-announcement" : ""
        }`}
      >
        <Link href="/vector" className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-80 transition-opacity">
          <span>{t.announcement.text}</span>
          <span className="text-[var(--foreground)]/60">→</span>
          <span>{t.announcement.cta}</span>
        </Link>
      </div>

      {/* Nav */}
      <header
        className={`z-30 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-all duration-500 ${
          heroMode ? "hero-mode-header" : "sticky top-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="PROLOGUE agency — home">
            <Wordmark />
          </Link>
          <MainNav />
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="/contact"
              className="hidden items-center bg-[#BD3B35] px-5 py-2.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--foreground)] transition-colors hover:bg-[#a33230] md:inline-flex"
            >
              {t.nav.cta}
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-[var(--foreground)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
              <Wordmark tone="dark" />
              <p className="max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted-foreground)]">
                [Short tagline describing what Prologue Agency does and who it serves.]
              </p>
            </div>

            <FooterColumn title={t.footer.explore}>
              {navLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={t.footer.company}>
              <FooterLink href="/about">{t.footer.about}</FooterLink>
              <FooterLink href="/partner">{t.footer.becomePartner}</FooterLink>
              <FooterLink href="/privacy">{t.footer.privacy}</FooterLink>
              <FooterLink href="/contact">{t.footer.contact}</FooterLink>
            </FooterColumn>

            <FooterColumn title={t.footer.connect}>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">Twitter / X</FooterLink>
              <FooterLink href="#">Newsletter</FooterLink>
            </FooterColumn>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border)] pt-6 font-[family-name:var(--font-display)] text-xs tracking-[0.1em] uppercase text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
            <span>© 2025 Prologue Agency. All rights reserved.</span>
            <span>{pageName}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">{title}</p>
      <nav className="flex flex-col gap-2.5 font-[family-name:var(--font-display)] text-xs tracking-[0.08em] uppercase text-[var(--foreground)]/60">{children}</nav>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="w-fit transition-colors duration-150 hover:text-[var(--foreground)]">
      {children}
    </Link>
  )
}

// Shared page header used across subpages.
export function PageHeader({
  label,
  title,
  intro,
  problems,
}: {
  label: string
  title: string
  intro?: string
  /** Optional list of problem statements rendered as a numbered grid below the heading */
  problems?: string[]
}) {
  return (
    <section className="border-b border-[var(--border)] bg-[#161616]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-16 md:py-24 lg:px-8">
        <span className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] uppercase text-[#BD3B35]">{label}</span>
        <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="max-w-2xl text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--muted-foreground)]">
            {intro}
          </p>
        ) : null}

        {problems && problems.length > 0 ? (
          <ul className="mt-4 grid w-full grid-cols-1 gap-3 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
            {problems.map((problem, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex size-5 shrink-0 items-center justify-center border border-[#BD3B35]/40 font-[family-name:var(--font-display)] text-[10px] font-semibold text-[#BD3B35]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--muted-foreground)]">
                  {problem}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
