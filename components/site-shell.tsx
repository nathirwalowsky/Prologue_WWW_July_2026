import Link from "next/link"
import type React from "react"
import { MainNav } from "@/components/main-nav"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/vector", label: "Vector" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={
        "font-sans text-lg font-semibold uppercase tracking-[0.2em] " +
        (tone === "light" ? "text-background" : "text-foreground")
      }
    >
      [Logo]
    </span>
  )
}

export function SiteShell({
  children,
  pageName,
}: {
  children: React.ReactNode
  pageName: string
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Announcement bar */}
      <div className="bg-primary px-4 py-2.5 text-center text-sm text-primary-foreground">
        [Announcement bar — special offer or important message]
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" aria-label="Prologue Agency — home">
            <Wordmark />
          </Link>
          <MainNav />
          <Link
            href="/contact"
            className="hidden items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            [CTA]
          </Link>
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

            <FooterColumn title="Explore">
              {navLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/partner">Become a Partner</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>

            <FooterColumn title="Connect">
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
}: {
  label: string
  title: string
  intro?: string
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-4 py-16 md:px-6 md:py-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</span>
        <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="max-w-2xl text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  )
}
