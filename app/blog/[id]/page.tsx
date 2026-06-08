import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { WireBox, WireCTA, WireHeading, WireLabel, WirePlaceholder, WireText } from "@/components/wireframe-kit"
import { blogPosts } from "@/lib/blog-data"

export default async function BlogPostWireframeV2({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = blogPosts.find((p) => String(p.id) === id) ?? blogPosts[0]
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

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
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
          <WirePlaceholder label="[Featured / hero image]" className="aspect-video w-full" />

          <WireHeading level={3}>Introduction</WireHeading>
          <WireText>
            [Opening paragraph that hooks the reader and sets up the main argument or story. This should be compelling
            and make the reader want to continue.]
          </WireText>

          <WireHeading level={3}>Section 1: [Main Point #1]</WireHeading>
          <WireText>
            [Body content explaining the first main point. Include examples, data, stories, or case studies that
            support your argument.]
          </WireText>
          <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 px-5 py-4">
            <p className="mb-1 font-semibold text-neutral-800">Key Takeaway</p>
            <WireText className="text-neutral-600">[Important insight or quote that summarizes this section.]</WireText>
          </div>

          <WireHeading level={3}>Section 2: [Main Point #2]</WireHeading>
          <WireText>
            [Second major point of the article. Continue building your argument with supporting evidence and practical
            applications.]
          </WireText>
          <WireBox className="bg-neutral-50">
            <WirePlaceholder label="[Supporting image, chart, or diagram]" className="mb-3 h-56 w-full" />
            <p className="text-center text-sm text-neutral-500">[Image caption explaining what this visual shows]</p>
          </WireBox>

          <WireHeading level={3}>Section 3: [Main Point #3]</WireHeading>
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

          <WireHeading level={3}>Conclusion</WireHeading>
          <WireText>
            [Wrap up the main arguments and provide a clear call to action or next steps for readers.]
          </WireText>

          {/* Action items */}
          <div className="rounded-md border-2 border-dashed border-emerald-400 bg-emerald-50 p-6">
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

      <WireCTA
        title="Ready to Transform Your Business?"
        text="[CTA text related to the blog post topic.]"
        primary="Get Started"
      />
    </SiteShell>
  )
}
