"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function MainNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const services = [
    { href: "/services/strategy",       label: t.nav.servicesStrategy,       desc: t.nav.servicesStrategyDesc },
    { href: "/services/key-projects",   label: t.nav.servicesKeyProjects,     desc: t.nav.servicesKeyProjectsDesc },
    { href: "/services/transformation", label: t.nav.servicesTransformation,  desc: t.nav.servicesTransformationDesc },
  ]

  const restLinks = [
    { href: "/about",   label: t.nav.about },
    { href: "/blog",    label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  const navLinkCls = "font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--muted-foreground)] transition-colors duration-150 hover:text-[var(--foreground)]"

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {/* Home */}
      <Link href="/" className={navLinkCls}>
        {t.nav.home}
      </Link>

      {/* Services dropdown */}
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
          className={`flex items-center gap-1 ${navLinkCls}`}
        >
          {t.nav.services}
          <span
            className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>

        {open ? (
          <div role="menu" className="absolute left-0 top-full z-20 w-80 pt-3">
            <div className="flex flex-col gap-0 border border-[var(--border)] bg-[var(--popover)] shadow-xl">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex flex-col border-b border-[var(--border)] px-4 py-3 transition-colors hover:bg-[var(--muted)] last:border-b-0"
                >
                  <span className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--foreground)]">{s.label}</span>
                  <span className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-[var(--muted-foreground)]">{s.desc}</span>
                </Link>
              ))}
              <Link
                href="/services"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 font-[family-name:var(--font-display)] text-[10px] font-semibold tracking-[0.15em] uppercase text-[#BD3B35] transition-colors hover:bg-[var(--muted)]"
              >
                {t.nav.viewAllServices} →
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {/* Remaining links */}
      {restLinks.map((link) => (
        <Link key={link.href} href={link.href} className={navLinkCls}>
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
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  const services = [
    { href: "/services/strategy",       label: t.nav.servicesStrategy,       desc: t.nav.servicesStrategyDesc },
    { href: "/services/key-projects",   label: t.nav.servicesKeyProjects,     desc: t.nav.servicesKeyProjectsDesc },
    { href: "/services/transformation", label: t.nav.servicesTransformation,  desc: t.nav.servicesTransformationDesc },
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
        className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/40"
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
          <div className="absolute inset-x-0 top-0 max-h-screen overflow-y-auto bg-[var(--background)] p-4 pb-8 shadow-xl border-b border-[var(--border)]">
            <nav className="flex flex-col gap-0 text-[var(--foreground)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--border)] px-3 py-3.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services group */}
              <div className="mt-3 border-t border-[var(--border)] pt-3">
                <p className="px-3 pb-2 font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#BD3B35]">
                  {t.nav.services}
                </p>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col border-b border-[var(--border)] px-3 py-3 transition-colors hover:bg-[var(--muted)]"
                  >
                    <span className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.1em] uppercase text-[var(--foreground)]">{s.label}</span>
                    <span className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-[var(--muted-foreground)]">{s.desc}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-[#BD3B35] px-5 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] uppercase text-[var(--foreground)] transition-colors hover:bg-[#a33230]"
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
