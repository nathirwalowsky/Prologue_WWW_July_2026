"use client"

import Image from "next/image"
import { BusinessSections } from "@/components/business-sections"
import { HomeFaq } from "@/components/home-faq"
import { SiteShell } from "@/components/site-shell"
import { VideoLightbox } from "@/components/video-lightbox"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <SiteShell pageName="Home">
      {/* HERO */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.home.heroEyebrow}
            </span>
            <h1 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              {t.home.heroHeading}{" "}
              <span className="text-accent">
                {t.home.heroHeadingAccent}
              </span>
            </h1>
            <p className="max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
              {t.home.heroSub}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/vector"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.home.heroCtaPrimary}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t.home.heroCtaSecondary}
              </a>
            </div>
          </div>

          {/* Symbol — atmospheric visual anchor for the hero */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/brand/prologue-symbol.png"
              alt=""
              aria-hidden="true"
              width={480}
              height={480}
              className="w-full max-w-[380px] opacity-90 md:max-w-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* BUSINESS SECTIONS — interactive */}
      <BusinessSections />

      {/* BREAKTHROUGHS */}
      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.home.breakthroughsLabel}
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.home.breakthroughsTitle}
            </h2>
            <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
              {t.home.breakthroughsSub}
            </p>
          </div>

          {/* Video — sits above the cards as the primary visual anchor */}
          {/* To activate: replace the commented src prop with your embed URL */}
          <div className="mb-12">
            <VideoLightbox
              label={t.home.breakthroughsVideoLabel}
              ariaLabel={t.home.breakthroughsVideoPlay}
              // src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { tag: "Clarity", title: "[Breakthrough #1]" },
              { tag: "Momentum", title: "[Breakthrough #2]" },
              { tag: "Direction", title: "[Breakthrough #3]" },
            ].map((b, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
                  {b.tag}
                </span>
                <h3 className="font-sans text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                  {t.home.breakthroughDesc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.home.testimonialsLabel}
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.home.testimonialsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <figure
                key={i}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
              >
                <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                  &ldquo;{t.home.testimonialQuote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">
                    [AB]
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">[Client Name]</span>
                    <span className="text-xs text-muted-foreground">[Position, Company]</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight md:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="max-w-xl text-pretty font-serif text-lg leading-relaxed text-primary-foreground/80">
            {t.home.ctaSub}
          </p>

          {/* Video — sits between the copy and the buttons */}
          {/* To activate: replace the commented src prop with your embed URL */}
          <div className="w-full">
            <VideoLightbox
              label={t.home.ctaVideoLabel}
              ariaLabel={t.home.ctaVideoPlay}
              // src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/vector"
              className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              {t.home.ctaSchedule}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.home.ctaGetInTouch}
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — ink/dark section for contrast rhythm */}
      <section className="bg-foreground py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.home.philosophyLabel}
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-background md:text-4xl">
              {t.home.philosophyTitle}
            </h2>
            <p className="font-serif text-lg leading-relaxed text-background/60">
              {t.home.philosophySub}
            </p>
            <a
              href="/about"
              className="mt-2 inline-flex w-fit items-center gap-2 font-medium text-accent hover:underline"
            >
              {t.home.philosophyLearnMore}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: t.home.philosophyWayOfWork, body: "[How the team works with clients day to day.]" },
              { title: t.home.philosophyWhyItMatters, body: "[The reasoning behind the approach.]" },
              { title: t.home.philosophyValues, body: "[Core values that guide engagements.]" },
              { title: t.home.philosophyAIManifest, body: "[Our stance on responsible AI in the work.]" },
            ].map((p, i) => (
              <article
                key={i}
                className="flex flex-col gap-2 rounded-xl border border-background/10 bg-background/5 p-5"
              >
                <h3 className="font-sans text-base font-semibold text-background">{p.title}</h3>
                <p className="font-serif text-sm leading-relaxed text-background/60">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.home.blogLabel}</span>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {t.home.blogTitle}
              </h2>
            </div>
            <a href="/blog" className="font-medium text-primary hover:underline">
              {t.home.blogViewAll}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="/blog"
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
                      [Category]
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">[Date · 5 min read]</span>
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground">
                    [Blog post title {i}]
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                    [Brief excerpt from the blog post that hints at the value inside...]
                  </p>
                </div>
                <span className="shrink-0 font-medium text-primary transition-transform group-hover:translate-x-0.5">
                  {t.home.blogReadMore}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFaq />
    </SiteShell>
  )
}
