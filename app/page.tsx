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
import {
  WireStatGrid,
  WireTabs,
  WireBarChart,
  WireDonut,
  WireBadge,
  WireProgress,
} from "@/components/wire-ui"

export default function HomeWireframeV2() {
  return (
    <SiteShell pageName="Home">
      {/* HERO — copy left, KPI stat cards right (UI instead of hero graphic) */}
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
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <WireBadge tone="blue">[Trusted by 120+ teams]</WireBadge>
              <WireBadge>[★ 4.9 / 5 rating]</WireBadge>
            </div>
          </div>
          <WireStatGrid
            stats={[
              { value: "[120+]", label: "[Clients served]", trend: "[+18%]", trendDir: "up" },
              { value: "[94%]", label: "[Retention rate]", trend: "[+6%]", trendDir: "up" },
              { value: "[3.2x]", label: "[Avg. ROI]", trend: "[+0.4x]", trendDir: "up" },
              { value: "[15 yrs]", label: "[Experience]" },
            ]}
          />
        </div>
      </section>

      {/* BUSINESS SECTIONS — interactive left list + right description */}
      <BusinessSections />

      {/* IMPACT — data presented via charts + progress instead of imagery */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>Impact</WireLabel>
            <WireHeading level={2}>Measurable Results</WireHeading>
            <WireText className="max-w-xl">
              [Short framing sentence about the outcomes clients see after working with us.]
            </WireText>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <WireBox className="flex flex-col gap-4 bg-white">
              <WireHeading level={4}>[Client growth over time]</WireHeading>
              <WireBarChart
                data={[
                  { label: "[Y1]", value: 30 },
                  { label: "[Y2]", value: 48 },
                  { label: "[Y3]", value: 65 },
                  { label: "[Y4]", value: 82 },
                  { label: "[Y5]", value: 100 },
                ]}
                caption="[Indexed growth — placeholder data]"
              />
            </WireBox>
            <WireBox className="flex flex-col gap-4 bg-white">
              <WireHeading level={4}>[Engagement mix]</WireHeading>
              <WireDonut
                centerLabel="[100%]"
                segments={[
                  { label: "[Strategy]", value: 40 },
                  { label: "[Operations]", value: 25 },
                  { label: "[Growth]", value: 20 },
                  { label: "[Advisory]", value: 15 },
                ]}
              />
            </WireBox>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <WireBox className="flex flex-col gap-3 bg-white">
              <WireProgress label="[Client satisfaction]" value={94} />
              <WireProgress label="[On-time delivery]" value={88} />
            </WireBox>
            <WireBox className="flex flex-col gap-3 bg-white">
              <WireProgress label="[Goal completion]" value={76} />
              <WireProgress label="[Repeat engagement]" value={82} />
            </WireBox>
            <WireBox className="flex flex-col gap-3 bg-white">
              <WireProgress label="[Referral rate]" value={67} />
              <WireProgress label="[Team adoption]" value={91} />
            </WireBox>
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
                <WireBadge tone="blue">[★★★★★]</WireBadge>
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
