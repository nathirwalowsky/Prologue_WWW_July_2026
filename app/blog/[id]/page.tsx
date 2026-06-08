import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import {
  WireBox,
  WireCTA,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"

export default async function BlogPostWireframeV2({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <SiteShell pageName="Blog Post">
      {/* Article header */}
      <section className="border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-4 py-14 md:py-20">
          <Link href="/blog" className="text-sm font-medium text-blue-700">
            ← Back to Blog
          </Link>
          <WireLabel>[Category] · [Date] · [Read time]</WireLabel>
          <p className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 md:text-4xl">
            [Blog Post {id} Title — the full headline]
          </p>
          <div className="flex items-center gap-3 pt-2">
            <WirePlaceholder label="[Pic]" className="size-10 shrink-0 rounded-full" />
            <div>
              <p className="font-semibold text-neutral-800">[Author Name]</p>
              <p className="text-sm text-neutral-500">[Author role]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
          <WirePlaceholder label="[Hero image]" className="aspect-video w-full" />
          <WireText>[Opening paragraph that introduces the topic and hooks the reader.]</WireText>
          <WireHeading level={3}>[Section Heading]</WireHeading>
          <WireText>[Body paragraph with the main argument or explanation.]</WireText>
          <WireText>[Another body paragraph continuing the point.]</WireText>
          <div className="rounded-md border-l-4 border-blue-500 bg-neutral-50 px-5 py-4">
            <WireText className="italic text-neutral-700">[Pull quote / key takeaway]</WireText>
          </div>
          <WireHeading level={3}>[Another Section Heading]</WireHeading>
          <WireText>[Closing paragraphs wrapping up the article.]</WireText>
        </div>
      </article>

      {/* Related posts */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <WireHeading level={3} className="mb-8">
            Related Posts
          </WireHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Link key={i} href={`/blog/${i}`}>
                <WireBox className="flex h-full flex-col gap-4 bg-white transition-colors hover:border-blue-500">
                  <WirePlaceholder label="[Post image]" className="h-40 w-full" />
                  <WireHeading level={4}>Related Post {i}</WireHeading>
                  <span className="mt-auto font-medium text-blue-700">Read More →</span>
                </WireBox>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WireCTA title="Enjoyed This Post?" text="[Invite readers to subscribe or get in touch.]" primary="Subscribe" />
    </SiteShell>
  )
}
