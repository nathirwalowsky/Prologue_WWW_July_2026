"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/lib/blog-data"
import { HomeFaq } from "@/components/home-faq"

type Tab = "in-group" | "not-in-group"

export function HomeWhoFor() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<Tab>("in-group")

  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.home.whoLabel}
          </span>
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.home.whoTitle}
          </h2>
          <p className="max-w-xl text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
            {t.home.whoSub}
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className="mb-10 flex overflow-hidden rounded-xl border border-border bg-secondary p-1"
          role="tablist"
          aria-label={t.home.whoTitle}
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "in-group"}
            aria-controls="who-panel"
            onClick={() => setTab("in-group")}
            className={cn(
              "flex-1 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-150",
              tab === "in-group"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.home.whoInGroupTab}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "not-in-group"}
            aria-controls="who-panel"
            onClick={() => setTab("not-in-group")}
            className={cn(
              "flex-1 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-150",
              tab === "not-in-group"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.home.whoNotInGroupTab}
          </button>
        </div>

        {/* Panel */}
        <div id="who-panel" role="tabpanel">

          {/* ── In-group: show the FAQ ── */}
          {tab === "in-group" && (
            <div className="flex flex-col gap-6">
              <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
                {t.home.whoInGroupDesc}
              </p>
              {/* Render the FAQ inline — embedded mode skips the outer section wrapper */}
              <HomeFaq embedded />
            </div>
          )}

          {/* ── Not in-group: show free resources ── */}
          {tab === "not-in-group" && (
            <div className="flex flex-col gap-12">
              <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
                {t.home.whoNotInGroupDesc}
              </p>

              {/* Vector workshop highlight */}
              <div className="rounded-2xl border border-border bg-secondary p-8 md:p-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {t.home.whoFreeResourcesTitle}
                    </span>
                    <h3 className="font-sans text-2xl font-semibold tracking-tight text-foreground">
                      {t.home.whoVectorTitle}
                    </h3>
                    <p className="max-w-lg font-serif text-base leading-relaxed text-muted-foreground">
                      {t.home.whoVectorDesc}
                    </p>
                  </div>
                  <a
                    href="/vector"
                    className="shrink-0 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {t.home.whoVectorCta}
                  </a>
                </div>
              </div>

              {/* Blog posts */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-xl font-semibold text-foreground">
                    {t.home.whoBlogTitle}
                  </h3>
                  <a href="/blog" className="font-medium text-primary hover:underline text-sm">
                    {t.home.whoBlogCta}
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  {latestPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex flex-col gap-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                            {post.category}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {post.date} · {post.readTime}
                          </span>
                        </div>
                        <h4 className="font-sans text-base font-semibold text-foreground leading-snug">
                          {post.title}
                        </h4>
                        <p className="font-serif text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <span className="shrink-0 font-medium text-primary text-sm transition-transform group-hover:translate-x-0.5">
                        {t.home.blogReadMore}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  )
}


