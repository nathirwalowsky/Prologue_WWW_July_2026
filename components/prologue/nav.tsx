'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export interface NavProps {
  theme?: 'dark' | 'light'
}

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Nav({ theme = 'dark' }: NavProps) {
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#0d0d0d]/80' : 'bg-white/80'} backdrop-blur-md border-b border-[var(--border)]`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={isDark ? '/brand/logo-light-signet.png' : '/brand/logo-dark-signet.png'}
            alt="PROLOGUE signet"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src={isDark ? '/brand/logo-light-wordmark.png' : '/brand/logo-dark-wordmark.png'}
            alt="PROLOGUE agency"
            width={140}
            height={40}
            className="h-6 w-auto hidden sm:block"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-150 ${
                isDark
                  ? 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                  : 'text-[#90755F] hover:text-[#272727]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className="block w-5 h-px bg-current mt-1.5" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className={`md:hidden border-t border-[var(--border)] ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'} px-6 py-6 flex flex-col gap-6`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm font-semibold tracking-[0.15em] uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
