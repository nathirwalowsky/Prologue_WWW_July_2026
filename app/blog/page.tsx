"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireBox, WireConsent, WireHeading, WireLabel, WirePlaceholder, WireText } from "@/components/wireframe-kit"
import { blogCategories, blogPosts } from "@/lib/blog-data"

export default function BlogWireframeV2() {
  const [activeCategory, setActiveCategory] = useState("All")

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)
  const filtered = activeCategory === "All" ? rest : rest.filter((p) => p.category === activeCategory)

  return (
    <SiteShell pageName="Blog">
      <PageHeader
        label="Blog & Insights"
        title="[Blog — insights on business, strategy and leadership]"
        intro="[A short line describing the kind of content readers will find here.]"
      />

      {/* Featured post */}
      <section className="border-b border-neutral-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Link href={`/blog/${featured.id}`} className="block">
            <WireBox className="grid grid-cols-1 gap-6 bg-white transition-colors hover:border-blue-500 md:grid-cols-2">
              <WirePlaceholder label="[Featured image]" className="aspect-video w-full" />
              <div className="flex flex-col justify-center gap-4">
                <WireLabel>Featured Post</WireLabel>
                <WireHeading level={3}>{featured.title}</WireHeading>
                <WireText>{featured.excerpt}</WireText>
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                  <span className="font-medium text-blue-700">{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="font-medium text-blue-700">Read Full Article →</span>
              </div>
            </WireBox>
          </Link>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-50/95 py-4 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter posts by category">
            {blogCategories.map((cat) => {
              const active = cat === activeCategory
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={
                    "rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-colors " +
                    (active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-dashed border-neutral-300 bg-white text-neutral-600 hover:border-blue-400 hover:text-blue-700")
                  }
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-neutral-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {filtered.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <WireBox className="flex h-full flex-col gap-4 bg-white transition-colors hover:border-blue-500">
                    <WirePlaceholder label="[Post image]" className="h-44 w-full" />
                    <WireLabel>{post.category}</WireLabel>
                    <WireHeading level={4}>{post.title}</WireHeading>
                    <WireText className="text-sm">{post.excerpt}</WireText>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="mt-auto font-medium text-blue-700">Read More →</span>
                  </WireBox>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-neutral-500">[No posts in this category yet.]</p>
          )}

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {["←", "1", "2", "3", "→"].map((p, idx) => (
              <span
                key={idx}
                className={
                  "flex size-10 items-center justify-center rounded-md border-2 text-sm " +
                  (p === "1"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-dashed border-neutral-300 bg-white text-neutral-600")
                }
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
          <WireHeading level={2} className="text-white">
            Subscribe to Our Newsletter
          </WireHeading>
          <p className="max-w-xl text-pretty leading-relaxed text-blue-100">
            [Text encouraging newsletter signup for the latest insights.]
          </p>
          <div className="flex w-full max-w-md flex-col gap-3 pt-2 sm:flex-row">
            <div className="flex-1 rounded-md border-2 border-dashed border-white/70 bg-white/10 px-4 py-2.5 text-left text-sm text-blue-100">
              [Email input]
            </div>
            <span className="rounded-md border-2 border-white bg-white px-6 py-2.5 text-sm font-medium text-blue-700">
              Subscribe
            </span>
          </div>
          <div className="w-full max-w-md">
            <WireConsent required tone="onDark">
              I consent to receiving the newsletter from Prologue Agency and to the processing of my
              email for this purpose, in accordance with the{" "}
              <span className="underline">Privacy Policy</span> (GDPR / RODO). I can unsubscribe at
              any time.
            </WireConsent>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
