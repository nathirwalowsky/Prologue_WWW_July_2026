"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

type ProductItem = { href: string; label: string; desc: string }

const products: ProductItem[] = [
  { href: "/product", label: "[Product One]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Two]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Three]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Four]", desc: "[One-line description of this product]" },
]

export function MainNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/vector", label: t.nav.vector },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
      {/* Home */}
      <Link href="/" className="transition-colors hover:text-foreground">
        {t.nav.home}
      </Link>

      {/* Product dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 transition-colors hover:text-foreground"
        >
          {t.nav.product}
          <span
            className={`font-mono text-xs transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>

        {open ? (
          <div role="menu" className="absolute left-0 top-full z-20 w-72 pt-3">
            <div className="flex flex-col gap-1 rounded-lg border border-border bg-popover p-2 shadow-lg">
              {products.map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  role="menuitem"
                  className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-secondary"
                >
                  <span className="font-medium text-popover-foreground">{p.label}</span>
                  <span className="text-xs text-muted-foreground">{p.desc}</span>
                </Link>
              ))}
              <Link
                href="/products"
                role="menuitem"
                className="mt-1 border-t border-border px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-secondary"
              >
                {t.nav.viewAllProducts}
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {/* Remaining links */}
      {navLinks
        .filter((l) => l.href !== "/")
        .map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
            {link.label}
          </Link>
        ))}
    </nav>
  )
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/vector", label: t.nav.vector },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  // Lock body scroll while the menu is open and close on Escape.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 top-[var(--header-offset,0px)] z-40">
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 max-h-screen overflow-y-auto bg-background p-4 pb-8 shadow-xl">
            <nav className="flex flex-col gap-1 text-base text-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-medium transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}

              {/* Products group */}
              <div className="mt-2 border-t border-border pt-3">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {t.nav.product}
                </p>
                {products.map((p, i) => (
                  <Link
                    key={i}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col rounded-md px-3 py-2.5 transition-colors hover:bg-secondary"
                  >
                    <span className="font-medium">{p.label}</span>
                    <span className="text-xs text-muted-foreground">{p.desc}</span>
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  {t.nav.viewAllProducts}
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.nav.cta}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  )
}
