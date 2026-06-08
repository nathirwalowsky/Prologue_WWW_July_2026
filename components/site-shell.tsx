import Link from "next/link"
import type React from "react"
import { WireButton, WireLabel } from "@/components/wireframe-kit"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/vector", label: "Vector" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteShell({
  children,
  pageName,
}: {
  children: React.ReactNode
  pageName: string
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Wireframe banner */}
      <div className="border-b border-neutral-200 bg-neutral-900 px-4 py-2 text-center font-mono text-xs uppercase tracking-wide text-neutral-300">
        {"Prologue Agency — " + pageName + " Wireframe v2"}
      </div>

      {/* Announcement bar */}
      <div className="bg-blue-600 px-4 py-2 text-center text-sm text-white">
        [Announcement Bar — special offer or important message]
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/">
            <WireLabel>[Logo]</WireLabel>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-neutral-500 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-neutral-900">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <WireButton variant="primary">[CTA]</WireButton>
          </Link>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-900 py-12 text-neutral-300">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <WireLabel>[Logo]</WireLabel>
            <p className="text-sm text-neutral-500">[Short tagline / contact]</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-500">
            <p className="font-semibold text-neutral-300">[Sitemap]</p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-neutral-200">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-500">
            <p className="font-semibold text-neutral-300">[Company]</p>
            <Link href="/about" className="hover:text-neutral-200">
              About
            </Link>
            <Link href="/partner" className="hover:text-neutral-200">
              Become a Partner
            </Link>
            <Link href="/privacy" className="hover:text-neutral-200">
              Privacy Policy
            </Link>
            <span>[Terms]</span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-500">
            <p className="font-semibold text-neutral-300">[Social]</p>
            <span>[LinkedIn]</span>
            <span>[Twitter / X]</span>
            <span>[Newsletter]</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Shared section wrappers reused across subpages.
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
    <section className="border-b border-neutral-200 bg-neutral-100">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-4 py-14 md:py-20">
        <WireLabel>{label}</WireLabel>
        <p className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 md:text-5xl">
          {title}
        </p>
        {intro ? (
          <p className="max-w-2xl text-pretty leading-relaxed text-neutral-500">{intro}</p>
        ) : null}
      </div>
    </section>
  )
}
