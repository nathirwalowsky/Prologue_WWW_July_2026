"use client"

import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { MainNav, MobileNav } from "@/components/main-nav"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Image
      src="/brand/prologue-wordmark.png"
      alt="Prologue Agency"
      width={180}
      height={60}
      className={tone === "light" ? "brightness-0 invert" : ""}
      priority
    />
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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Announcement bar — hidden in heroMode until scrolled */}
      <div
        className={`bg-primary px-4 py-2.5 text-center text-sm text-primary-foreground transition-all duration-500 ${
          heroMode ? "hero-mode-announcement" : ""
        }`}
      >
        <Link href="/vector" className="inline-flex items-center gap-2 hover:underline">
          <span>{t.announcement.text}</span>
          <span className="font-semibold">{t.announcement.cta}</span>
        </Link>
      </div>

      {/* Nav — in heroMode, starts invisible and slides in after scroll */}
      <header
        className={`sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md transition-all duration-500 ${
          heroMode ? "hero-mode-header" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" aria-label="Prologue Agency — home">
            <Wordmark />
          </Link>
          <MainNav />
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Link
              href="/contact"
              className="hidden items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            >
              {t.nav.cta}
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <Wordmark tone="light" />
              <p className="max-w-xs text-sm leading-relaxed text-background/60">
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
              <FooterLink href="#">[LinkedIn]</FooterLink>
              <FooterLink href="#">[Twitter / X]</FooterLink>
              <FooterLink href="#">[Newsletter]</FooterLink>
            </FooterColumn>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs text-background/50 md:flex-row md:items-center md:justify-between">
            <span>[© Year Prologue Agency. All rights reserved.]</span>
            <span className="font-mono uppercase tracking-wide">{pageName}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50">{title}</p>
      <nav className="flex flex-col gap-2.5 text-sm text-background/75">{children}</nav>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="w-fit transition-colors hover:text-background">
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
  actions,
}: {
  label: string
  title: string
  intro?: string
  /** Optional list of problem statements rendered as a numbered grid below the heading */
  problems?: string[]
  /** Optional actions (e.g. CTA buttons) rendered below the intro */
  actions?: React.ReactNode
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-16 md:px-6 md:py-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</span>
        <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="max-w-2xl text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}

        {actions ? <div className="mt-2">{actions}</div> : null}

        {problems && problems.length > 0 ? (
          <ul className="mt-6 grid w-full grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-2">
            {problems.map((problem, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-[10px] text-accent"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="font-serif text-base leading-relaxed text-muted-foreground">
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
