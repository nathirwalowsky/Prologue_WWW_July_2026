"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Lang } from "@/lib/i18n"

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  const options: { value: Lang; label: string }[] = [
    { value: "pl", label: "PL" },
    { value: "en", label: "EN" },
  ]

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center rounded-md border border-border overflow-hidden text-xs font-mono"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={lang !== value ? toggleLang : undefined}
          aria-pressed={lang === value}
          className={
            "px-2.5 py-1.5 transition-colors leading-none " +
            (lang === value
              ? "bg-primary text-primary-foreground cursor-default"
              : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer")
          }
        >
          {label}
        </button>
      ))}
    </div>
  )
}
