"use client"

import Link from "next/link"
import { useState } from "react"

type ProductItem = { href: string; label: string; desc: string }

const products: ProductItem[] = [
  { href: "/product", label: "[Product One]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Two]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Three]", desc: "[One-line description of this product]" },
  { href: "/product", label: "[Product Four]", desc: "[One-line description of this product]" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/vector", label: "Vector" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
      {/* Home */}
      <Link href="/" className="transition-colors hover:text-foreground">
        Home
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
          Product
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
                View all products →
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
