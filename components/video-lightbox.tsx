"use client"

import { useState, useEffect, useCallback } from "react"

interface VideoLightboxProps {
  /** Paste your YouTube embed URL, Vimeo embed URL, or direct .mp4 URL here */
  src?: string
  /** Text shown inside the placeholder thumbnail */
  label?: string
  /** Accessible label for the play button */
  ariaLabel?: string
  className?: string
}

export function VideoLightbox({
  src,
  label = "[Video placeholder — paste your URL into the src prop]",
  ariaLabel = "Play video",
  className = "",
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* ── Thumbnail placeholder ───────────────────────────────────────── */}
      <div className={`relative w-full overflow-hidden rounded-xl ${className}`}>
        {/* Aspect-ratio box 16:9 */}
        <div className="relative aspect-video w-full bg-foreground/5 border border-border">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,var(--border) 39px,var(--border) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,var(--border) 39px,var(--border) 40px)",
            }}
          />

          {/* Placeholder label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="max-w-[60%] text-center font-mono text-xs text-muted-foreground">
              {label}
            </p>
          </div>

          {/* Play button */}
          <button
            onClick={() => setOpen(true)}
            aria-label={ariaLabel}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2">
              {/* Triangle play icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5L8 5.5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* ── Lightbox modal ──────────────────────────────────────────────── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close video"
              className="absolute -top-10 right-0 flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Zamknij / Close
            </button>

            {/* Video or placeholder */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              {src ? (
                src.endsWith(".mp4") || src.endsWith(".webm") ? (
                  // Native video
                  <video
                    src={src}
                    controls
                    autoPlay
                    className="h-full w-full"
                  />
                ) : (
                  // YouTube / Vimeo iframe
                  <iframe
                    src={src}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                    title={ariaLabel}
                  />
                )
              ) : (
                // No src yet — show a message
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-center font-mono text-sm text-white/50">
                    Paste your video URL into the <code className="text-white/70">src</code> prop<br />on the <code className="text-white/70">VideoLightbox</code> component.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
