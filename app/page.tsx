import Image from "next/image"
import { BusinessSections } from "@/components/business-sections"
import { HomeFaq } from "@/components/home-faq"
import { SiteShell } from "@/components/site-shell"

export default function HomePage() {
  return (
    <SiteShell pageName="Home">
      {/* HERO */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              [Eyebrow — who you serve]
            </span>
            <h1 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Strategic excellence{" "}
              <span className="text-accent">
                in an age of constant transformation
              </span>
            </h1>
            <p className="max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
              [Subheadline explaining your value proposition in one or two clear, human sentences.]
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/vector"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Vector Workshop
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                [Secondary action]
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
              Breakthroughs
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              What You Could Unlock
            </h2>
            <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
              [Framing sentence: the conceptual breakthroughs a client can achieve — shifts in
              clarity, capability, and direction.]
            </p>
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
                  [Short description of the conceptual shift and why it matters for the client.]
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
              Social proof
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <figure
                key={i}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
              >
                <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                  &ldquo;[Client quote about working with Prologue Agency]&rdquo;
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
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-xl text-pretty font-serif text-lg leading-relaxed text-primary-foreground/80">
            [Supporting text encouraging the visitor to take the next step.]
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="/vector"
              className="inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Schedule Vector Workshop
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — ink/dark section for contrast rhythm */}
      <section className="bg-foreground py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Philosophy
            </span>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-background md:text-4xl">
              How We Think
            </h2>
            <p className="font-serif text-lg leading-relaxed text-background/60">
              [Short text explaining your philosophy and approach to business transformation.]
            </p>
            <a
              href="/about"
              className="mt-2 inline-flex w-fit items-center gap-2 font-medium text-accent hover:underline"
            >
              Learn more about us <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "Way of Work", body: "[How the team works with clients day to day.]" },
              { title: "Why It Matters", body: "[The reasoning behind the approach.]" },
              { title: "Values", body: "[Core values that guide engagements.]" },
              { title: "AI Manifest", body: "[Our stance on responsible AI in the work.]" },
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
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Blog</span>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Latest from Our Blog
              </h2>
            </div>
            <a href="/blog" className="font-medium text-primary hover:underline">
              View all posts →
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
                  Read more →
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
