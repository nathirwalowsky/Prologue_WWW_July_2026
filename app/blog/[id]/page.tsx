import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { WireBox, WireHeading, WireLabel, WirePlaceholder, WireText } from "@/components/wireframe-kit"
import { BlogCta } from "@/components/blog-cta"
import { blogPosts } from "@/lib/blog-data"

export default async function BlogPostWireframeV2({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = blogPosts.find((p) => String(p.id) === id) ?? blogPosts[0]
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  const tableOfContents = [
    { id: "introduction", label: "Introduction" },
    { id: "section-1", label: "Main Point #1" },
    { id: "section-2", label: "Main Point #2" },
    { id: "section-3", label: "Main Point #3" },
    { id: "conclusion", label: "Conclusion" },
    { id: "action-items", label: "Action Items" },
  ]

  return (
    <SiteShell pageName="Blog Post">
      {/* Breadcrumb */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-4 text-sm text-neutral-500">
          <Link href="/blog" className="text-blue-700 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="text-blue-700">{post.category}</span>
          {" / "}
          <span>Current Post</span>
        </div>
      </section>

      {/* Article header */}
      <section className="border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-4 py-14 md:py-20">
          <WireLabel>{post.category}</WireLabel>
          <p className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 md:text-4xl">
            {post.title}
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-3">
              <WirePlaceholder label="[Pic]" className="size-12 shrink-0 rounded-full" />
              <div>
                <p className="font-semibold text-neutral-800">[Author Name]</p>
                <p className="text-sm text-neutral-500">[Founder &amp; CEO]</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              <div>{post.date}</div>
              <div>{post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-[240px_1fr]">
          {/* Table of contents (sticky sidebar) */}
          <aside className="hidden lg:block">
            <nav aria-label="Table of contents" className="sticky top-24">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">On this page</p>
              <ol className="flex flex-col gap-2 border-l-2 border-neutral-200 text-sm">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-0.5 block border-l-2 border-transparent py-1 pl-4 text-neutral-600 transition-colors hover:border-blue-500 hover:text-blue-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="flex max-w-3xl flex-col gap-6">
            <WirePlaceholder label="[Featured / hero image]" className="aspect-video w-full" />

            {/* Inline TOC for mobile */}
            <nav
              aria-label="Table of contents"
              className="rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-5 lg:hidden"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">On this page</p>
              <ol className="flex flex-col gap-2 text-sm">
                {tableOfContents.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-blue-700 hover:underline">
                      {`${i + 1}. ${item.label}`}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div id="introduction" className="scroll-mt-24">
              <WireHeading level={3}>Introduction</WireHeading>
            </div>
            <WireText>
              [Opening paragraph that hooks the reader and sets up the main argument or story. This should be compelling
              and make the reader want to continue.]
            </WireText>

            <div id="section-1" className="scroll-mt-24">
              <WireHeading level={3}>Section 1: [Main Point #1]</WireHeading>
            </div>
            <WireText>
              [Body content explaining the first main point. Include examples, data, stories, or case studies that
              support your argument.]
            </WireText>
            <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 px-5 py-4">
              <p className="mb-1 font-semibold text-neutral-800">Key Takeaway</p>
              <WireText className="text-neutral-600">
                [Important insight or quote that summarizes this section.]
              </WireText>
            </div>

            <div id="section-2" className="scroll-mt-24">
              <WireHeading level={3}>Section 2: [Main Point #2]</WireHeading>
            </div>
            <WireText>
              [Second major point of the article. Continue building your argument with supporting evidence and practical
              applications.]
            </WireText>
            <WireBox className="bg-neutral-50">
              <WirePlaceholder label="[Supporting image, chart, or diagram]" className="mb-3 h-56 w-full" />
              <p className="text-center text-sm text-neutral-500">[Image caption explaining what this visual shows]</p>
            </WireBox>

            {/* Mid-article conversion banner */}
            <BlogCta variant="inline" />

            <div id="section-3" className="scroll-mt-24">
              <WireHeading level={3}>Section 3: [Main Point #3]</WireHeading>
            </div>
            <WireText>
              [Third major point, building toward the conclusion. Include actionable advice readers can implement
              immediately.]
            </WireText>
            <div className="rounded-md border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
              <p className="mb-1 font-semibold text-neutral-800">Real-World Example</p>
              <WireText className="text-neutral-600">
                [Case study or example that illustrates the concept in action. Make it specific and relatable.]
              </WireText>
            </div>

            <div id="conclusion" className="scroll-mt-24">
              <WireHeading level={3}>Conclusion</WireHeading>
            </div>
            <WireText>
              [Wrap up the main arguments and provide a clear call to action or next steps for readers.]
            </WireText>

            {/* Action items */}
            <div id="action-items" className="scroll-mt-24 rounded-md border-2 border-dashed border-emerald-400 bg-emerald-50 p-6">
              <WireHeading level={4} className="mb-3">
                Action Items
              </WireHeading>
              <ul className="flex flex-col gap-2 text-neutral-700">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600" aria-hidden="true">
                      ✓
                    </span>
                    <span>[Actionable step #{i}]</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-6">
              <span className="text-sm text-neutral-500">Tags:</span>
              {["Business Strategy", "Resilience", "Planning", "Risk Management"].map((tag) => (
                <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Author bio */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <WireBox className="flex flex-col items-start gap-6 bg-white sm:flex-row">
            <WirePlaceholder label="[Pic]" className="size-24 shrink-0 rounded-full" />
            <div>
              <WireHeading level={4}>About the Author</WireHeading>
              <WireText className="mt-2">
                [Author bio describing their expertise, experience, and background. This builds credibility and
                connection with readers.]
              </WireText>
              <div className="mt-4 flex gap-4 text-sm font-medium text-blue-700">
                <span>LinkedIn</span>
                <span>Twitter</span>
                <span>More Articles</span>
              </div>
            </div>
          </WireBox>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <WireHeading level={2} className="mb-8 text-center">
            Related Articles
          </WireHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`}>
                <WireBox className="flex h-full flex-col gap-4 bg-white transition-colors hover:border-blue-500">
                  <WirePlaceholder label="[Post image]" className="h-40 w-full" />
                  <WireLabel>{p.category}</WireLabel>
                  <WireHeading level={4}>{p.title}</WireHeading>
                  <span className="mt-auto font-medium text-blue-700">Read More →</span>
                </WireBox>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* End-of-article conversion band */}
      <BlogCta variant="end" />
    </SiteShell>
  )
}
