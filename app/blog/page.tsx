import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireBox, WireHeading, WireLabel, WirePlaceholder, WireText } from "@/components/wireframe-kit"

export default function BlogWireframeV2() {
  return (
    <SiteShell pageName="Blog">
      <PageHeader
        label="Blog"
        title="[Blog — insights on business, strategy and leadership]"
        intro="[A short line describing the kind of content readers will find here.]"
      />

      {/* Featured post */}
      <section className="border-b border-neutral-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Link href="/blog/1" className="block">
            <WireBox className="grid grid-cols-1 gap-6 bg-white transition-colors hover:border-blue-500 md:grid-cols-2">
              <WirePlaceholder label="[Featured image]" className="aspect-video w-full" />
              <div className="flex flex-col justify-center gap-4">
                <WireLabel>Featured</WireLabel>
                <WireHeading level={3}>[Featured Post Title]</WireHeading>
                <WireText>[Longer excerpt that draws the reader into the featured article.]</WireText>
                <span className="font-medium text-blue-700">Read More →</span>
              </div>
            </WireBox>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-neutral-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link key={i} href={`/blog/${i}`}>
                <WireBox className="flex h-full flex-col gap-4 bg-white transition-colors hover:border-blue-500">
                  <WirePlaceholder label="[Post image]" className="h-44 w-full" />
                  <WireLabel>[Category]</WireLabel>
                  <WireHeading level={4}>Blog Post Title {i}</WireHeading>
                  <WireText className="text-sm">[Brief excerpt from the blog post...]</WireText>
                  <span className="mt-auto font-medium text-blue-700">Read More →</span>
                </WireBox>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {["←", "1", "2", "3", "→"].map((p, idx) => (
              <span
                key={idx}
                className="flex size-10 items-center justify-center rounded-md border-2 border-dashed border-neutral-300 bg-white text-sm text-neutral-600"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
