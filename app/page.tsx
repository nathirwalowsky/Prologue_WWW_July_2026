import { BusinessSections } from "@/components/business-sections"
import {
  WireBox,
  WireButton,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"

export default function HomeWireframeV2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Wireframe banner */}
      <div className="border-b border-neutral-200 bg-neutral-900 px-4 py-2 text-center font-mono text-xs uppercase tracking-wide text-neutral-300">
        Prologue Agency — Home Wireframe v2 (polished layout)
      </div>

      {/* Announcement bar */}
      <div className="bg-blue-600 px-4 py-2 text-center text-sm text-white">
        [Announcement Bar — special offer or important message]
      </div>

      {/* Simple nav placeholder */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <WireLabel>[Logo]</WireLabel>
          <nav className="hidden items-center gap-6 text-sm text-neutral-500 md:flex">
            <span>[Home]</span>
            <span>[Product]</span>
            <span>[About]</span>
            <span>[Vector]</span>
            <span>[Blog]</span>
            <span>[Contact]</span>
          </nav>
          <WireButton variant="primary">[CTA]</WireButton>
        </div>
      </header>

      {/* HERO — split layout: copy left, visual right (best practice for clear hierarchy) */}
      <section className="border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <WireLabel>Hero</WireLabel>
            <WireHeading level={1} className="text-balance">
              [Brand Claim / Headline]
            </WireHeading>
            <WireText className="max-w-md text-pretty">
              [Subheadline explaining your value proposition in one or two clear sentences.]
            </WireText>
            <div className="flex flex-wrap gap-4 pt-2">
              <WireButton variant="primary">Vector Workshop</WireButton>
              <WireButton variant="secondary">[Button #2 — Action]</WireButton>
            </div>
            <div className="flex items-center gap-3 pt-2 text-xs text-neutral-400">
              [Social proof — logos / rating placeholder]
            </div>
          </div>
          <WirePlaceholder
            label="[Background Visual / Hero Image]"
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      {/* BUSINESS SECTIONS — interactive left list + right description */}
      <BusinessSections />

      {/* TESTIMONIALS */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>Social proof</WireLabel>
            <WireHeading level={2}>What Our Clients Say</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-4 bg-white">
                <WireText className="italic">
                  &quot;[Client quote about working with Prologue Agency]&quot;
                </WireText>
                <div className="mt-auto flex items-center gap-3">
                  <WirePlaceholder label="[Pic]" className="size-10 shrink-0 rounded-full" />
                  <div>
                    <p className="font-semibold text-neutral-800">— Client Name</p>
                    <p className="text-sm text-neutral-500">Position, Company</p>
                  </div>
                </div>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
          <WireHeading level={2} className="text-balance text-white">
            Ready to Transform Your Business?
          </WireHeading>
          <p className="max-w-xl text-pretty leading-relaxed text-blue-100">
            [Supporting text encouraging action]
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <span className="rounded-md border-2 border-white bg-white px-5 py-2.5 text-sm font-medium text-blue-700">
              Schedule Vector Workshop
            </span>
            <span className="rounded-md border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white">
              Build Strategy
            </span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — split: text left, visual right */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <WirePlaceholder
            label="[Founder / approach visual]"
            className="order-last aspect-square w-full md:order-first"
          />
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Philosophy</WireLabel>
            <WireHeading level={2}>Prologue Agency Philosophy</WireHeading>
            <WireText className="max-w-md">
              [Short text explaining your philosophy and approach to business transformation. This
              section introduces your core beliefs and methodology.]
            </WireText>
            <WireButton variant="primary">Learn More About Us</WireButton>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <WireLabel>Blog</WireLabel>
              <WireHeading level={2}>Latest from Our Blog</WireHeading>
            </div>
            <span className="font-medium text-blue-700">[View all posts →]</span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-4 bg-white">
                <WirePlaceholder label="[Featured Image]" className="h-44 w-full" />
                <WireHeading level={4}>Blog Post Title {i}</WireHeading>
                <WireText className="text-sm">[Brief excerpt from the blog post...]</WireText>
                <span className="mt-auto font-medium text-blue-700">Read More →</span>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>FAQ</WireLabel>
            <WireHeading level={2}>Frequently Asked Questions</WireHeading>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-5 py-4"
              >
                <p className="font-semibold text-neutral-800">
                  Question {i}: [FAQ question text]
                </p>
                <span className="font-mono text-xl text-neutral-400" aria-hidden="true">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-neutral-900 py-12 text-neutral-300">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <WireLabel>[Logo]</WireLabel>
            <p className="text-sm text-neutral-500">[Short tagline / contact]</p>
          </div>
          {["Sitemap", "Company", "Social"].map((col) => (
            <div key={col} className="flex flex-col gap-2 text-sm text-neutral-500">
              <p className="font-semibold text-neutral-300">[{col}]</p>
              <span>[Link]</span>
              <span>[Link]</span>
              <span>[Link]</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
