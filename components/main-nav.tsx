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
    <nav className="hidden items-center gap-6 text-sm text-neutral-500 md:flex">
      {/* Home */}
      <Link href="/" className="hover:text-neutral-900">
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
          className="flex items-center gap-1 hover:text-neutral-900"
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
          <div
            role="menu"
            className="absolute left-0 top-full z-20 w-72 pt-3"
          >
            <div className="flex flex-col gap-1 rounded-md border-2 border-dashed border-neutral-300 bg-white p-2 shadow-sm">
              {products.map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  role="menuitem"
                  className="flex flex-col rounded-md px-3 py-2 hover:bg-neutral-50"
                >
                  <span className="font-medium text-neutral-800">{p.label}</span>
                  <span className="text-xs text-neutral-500">{p.desc}</span>
                </Link>
              ))}
              <Link
                href="/product"
                role="menuitem"
                className="mt-1 border-t border-dashed border-neutral-200 px-3 py-2 text-xs font-medium text-blue-700 hover:bg-neutral-50"
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
          <Link key={link.href} href={link.href} className="hover:text-neutral-900">
            {link.label}
          </Link>
        ))}
    </nav>
  )
}
