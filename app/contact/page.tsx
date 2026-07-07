"use client"

import { useState } from "react"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { useLanguage } from "@/contexts/language-context"

/* ── Copy button ─────────────────────────────────────────────────────────── */
function CopyButton({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3.5 w-3.5 text-primary" aria-hidden="true">
            <path d="M2.5 8.5l3.5 3.5 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="9" rx="1" />
            <path d="M10.5 5.5V3.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2" strokeLinecap="round" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  )
}

/* ── Process bar ─────────────────────────────────────────────────────────── */
function ProcessBar() {
  const { t } = useLanguage()

  const steps = [
    { label: t.contact.processStep1, desc: t.contact.processStep1Desc },
    { label: t.contact.processStep2, desc: t.contact.processStep2Desc },
    { label: t.contact.processStep3, desc: t.contact.processStep3Desc },
    { label: t.contact.processStep4, desc: t.contact.processStep4Desc },
    { label: t.contact.processStep5, desc: t.contact.processStep5Desc },
  ]

  return (
    <div className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t.contact.processLabel}
        </p>
        <ol className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col gap-1.5">
              {/* Step number + connector line */}
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-border md:block" aria-hidden="true" />
                )}
              </div>
              <span className="font-sans text-sm font-semibold text-foreground">{step.label}</span>
              <span className="font-serif text-xs leading-relaxed text-muted-foreground">{step.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const { t } = useLanguage()
  const [ndaChecked, setNdaChecked] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <SiteShell pageName="Contact">
      <PageHeader
        label={t.contact.pageLabel}
        title={t.pageHeader.contact.title}
        intro={t.pageHeader.contact.intro}
      />

      {/* Process bar */}
      <ProcessBar />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">

          {/* Two-column grid: form | video + contact details */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">

            {/* ── Form ── */}
            <form className="flex flex-col gap-5" noValidate>
              {/* Name */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-foreground">{t.contact.fieldFullName} *</span>
                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  required
                  className="h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Jan Kowalski"
                />
              </label>

              {/* Email */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-foreground">{t.contact.fieldEmail} *</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="jan@firma.pl"
                />
              </label>

              {/* Company */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-foreground">{t.contact.fieldCompany}</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Nazwa firmy"
                />
              </label>

              {/* Message */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-foreground">{t.contact.fieldMessage} *</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Opisz krótko, z czym chcesz się do nas zgłosić…"
                />
              </label>

              {/* NDA checkbox */}
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-border bg-secondary p-4 transition-colors hover:border-primary/40">
                <input
                  type="checkbox"
                  name="nda"
                  checked={ndaChecked}
                  onChange={(e) => setNdaChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-primary"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">{t.contact.ndaLabel}</span>
                  <span className="text-xs text-muted-foreground">{t.contact.ndaDesc}</span>
                </div>
              </label>

              {/* Consents */}
              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-primary" />
                  <span className="text-xs text-muted-foreground">
                    * {t.contact.consentRequired}{" "}
                    <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a> (GDPR / RODO).
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-primary" />
                  <span className="text-xs text-muted-foreground">{t.contact.consentMarketing}</span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.contact.sendMessage}
              </button>
            </form>

            {/* ── Right column: video + contact details ── */}
            <div className="flex w-[220px] flex-shrink-0 flex-col gap-5">

              {/* Vertical video */}
              <div style={{ width: 220, height: 391 }}>
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-md">
                  {videoPlaying ? (
                    <div className="flex h-full w-full items-center justify-center px-4">
                      <span className="text-center font-mono text-xs text-muted-foreground">
                        {t.home.ctaVideoLabel}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-5">
                        <span className="text-center font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          {t.home.ctaVideoLabel}
                        </span>
                      </div>
                      <button
                        type="button"
                        aria-label={t.home.ctaVideoPlay}
                        onClick={() => setVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-transform group-hover:scale-110">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-0.5 text-foreground">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-4">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {t.contact.emailLabel}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a href={`mailto:${t.contact.emailValue}`} className="font-sans text-sm font-medium text-foreground hover:text-primary break-all">
                    {t.contact.emailValue}
                  </a>
                  <CopyButton value={t.contact.emailValue} label={t.contact.copyEmail} copiedLabel={t.contact.copied} />
                </div>
              </div>

              {/* Phone + WhatsApp */}
              <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-4">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {t.contact.phoneLabel}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a href={`tel:${t.contact.phoneValue.replace(/\s/g, "")}`} className="font-sans text-sm font-medium text-foreground hover:text-primary">
                    {t.contact.phoneValue}
                  </a>
                  <CopyButton value={t.contact.phoneValue} label={t.contact.copyPhone} copiedLabel={t.contact.copied} />
                </div>
                <div className="mt-1 flex items-center gap-2 border-t border-border pt-3">
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-[#25D366]" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground">{t.contact.whatsappNote}</span>
                    <a
                      href={`https://wa.me/${t.contact.phoneValue.replace(/[\s+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      {t.contact.whatsappCta}
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </SiteShell>
  )
}
