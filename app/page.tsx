import { BusinessSections } from "@/components/business-sections"
import { SiteShell } from "@/components/site-shell"
import {
  WireBox,
  WireButton,
  WireCTA,
  WireFAQ,
  WireHeading,
  WireLabel,
  WireText,
} from "@/components/wireframe-kit"
import { WireTabs, WireBadge } from "@/components/wire-ui"

export default function HomeWireframeV2() {
  return (
    <SiteShell pageName="Home">
      {/* HERO — copy left, conceptual "before → after" framing right (no metrics) */}
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
          </div>

          {/* Conceptual shift card — frames the transformation, not numbers */}
          <WireBox className="flex flex-col gap-5 bg-white">
            <WireLabel>The shift</WireLabel>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
              <div className="flex flex-col gap-2 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-4">
                <span className="font-mono text-xs uppercase tracking-wide text-neutral-400">Before</span>
                <WireText className="text-sm">[Where the business feels stuck today]</WireText>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-mono text-2xl text-blue-400" aria-hidden="true">
                  →
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-md border-2 border-blue-300 bg-blue-50 p-4">
                <span className="font-mono text-xs uppercase tracking-wide text-blue-500">After</span>
                <WireText className="text-sm">[The breakthrough state they reach with us]</WireText>
              </div>
            </div>
            <WireText className="text-sm text-neutral-500">
              [One sentence describing the kind of clarity or momentum this unlocks.]
            </WireText>
          </WireBox>
        </div>
      </section>

      {/* BUSINESS SECTIONS — interactive left list + right description */}
      <BusinessSections />

      {/* BREAKTHROUGHS — conceptual outcomes, no fabricated metrics */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>Breakthroughs</WireLabel>
            <WireHeading level={2}>What You Could Unlock</WireHeading>
            <WireText className="max-w-xl">
              [Framing sentence: the conceptual breakthroughs a client can potentially achieve — not
              promises of specific numbers, but shifts in clarity, capability, and direction.]
            </WireText>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { tag: "Clarity", title: "[Breakthrough #1]" },
              { tag: "Momentum", title: "[Breakthrough #2]" },
              { tag: "Direction", title: "[Breakthrough #3]" },
            ].map((b, i) => (
              <WireBox key={i} className="flex flex-col gap-3 bg-white">
                <WireBadge tone="blue">{b.tag}</WireBadge>
                <WireHeading level={4}>{b.title}</WireHeading>
                <WireText className="text-sm">
                  [Short description of the conceptual shift and why it matters for the client.]
                </WireText>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — structured cards, initials avatar instead of photo placeholder */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>Social proof</WireLabel>
            <WireHeading level={2}>What Our Clients Say</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-4 bg-neutral-50">
                <WireText className="italic">
                  &quot;[Client quote about working with Prologue Agency]&quot;
                </WireText>
                <div className="mt-auto flex items-center gap-3 border-t border-dashed border-neutral-300 pt-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-neutral-300 bg-neutral-100 font-mono text-xs text-neutral-500">
                    [AB]
                  </span>
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
      <WireCTA
        title="Ready to Transform Your Business?"
        text="[Supporting text encouraging action]"
        primary="Schedule Vector Workshop"
        secondary="Build Strategy"
      />

      {/* PHILOSOPHY — tabs (progressive disclosure) instead of a graphic */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-start gap-3">
            <WireLabel>Philosophy</WireLabel>
            <WireHeading level={2}>Prologue Agency Philosophy</WireHeading>
            <WireText className="max-w-xl">
              [Short text explaining your philosophy and approach to business transformation.]
            </WireText>
          </div>
          <WireTabs
            tabs={[
              {
                label: "Way of Work",
                content: (
                  <WireText>
                    [Explanation of how the team works with clients day to day — process, cadence,
                    collaboration model.]
                  </WireText>
                ),
              },
              {
                label: "Why It Matters",
                content: (
                  <WireText>
                    [The reasoning and beliefs behind the approach and why it produces durable
                    results.]
                  </WireText>
                ),
              },
              {
                label: "Values",
                content: (
                  <WireText>
                    [Core values that guide decisions and engagements with clients.]
                  </WireText>
                ),
              },
              {
                label: "AI Manifest",
                content: (
                  <WireText>
                    [Stance on how AI is used responsibly within the agency&apos;s work.]
                  </WireText>
                ),
              },
            ]}
          />
          <div className="mt-6">
            <WireButton variant="primary">Learn More About Us</WireButton>
          </div>
        </div>
      </section>

      {/* BLOG — structured list rows with metadata instead of image cards */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <WireLabel>Blog</WireLabel>
              <WireHeading level={2}>Latest from Our Blog</WireHeading>
            </div>
            <span className="font-medium text-blue-700">[View all posts →]</span>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <WireBox
                key={i}
                className="flex flex-col gap-3 bg-white md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <WireBadge tone="blue">[Category]</WireBadge>
                    <span className="font-mono text-xs text-neutral-400">[Date]</span>
                    <span className="font-mono text-xs text-neutral-400">[· 5 min read]</span>
                  </div>
                  <WireHeading level={4}>Blog Post Title {i}</WireHeading>
                  <WireText className="text-sm">[Brief excerpt from the blog post...]</WireText>
                </div>
                <span className="shrink-0 font-medium text-blue-700">Read More →</span>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WireFAQ />
    </SiteShell>
  )
}
