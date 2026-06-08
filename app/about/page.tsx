import { SiteShell, PageHeader } from "@/components/site-shell"
import {
  WireBox,
  WireCTA,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"

const philosophyBlocks = [
  { label: "Way of Work", title: "How We Work", text: "[Describe your methodology and process.]" },
  { label: "Why It Matters", title: "Why It Matters", text: "[Explain the impact and purpose behind the work.]" },
  { label: "Values", title: "Our Values", text: "[List and explain the core values guiding decisions.]" },
  { label: "AI Manifest", title: "Our AI Manifest", text: "[Your stance on how AI is used responsibly in the work.]" },
]

export default function AboutWireframeV2() {
  return (
    <SiteShell pageName="About">
      <PageHeader
        label="About"
        title="[About Headline — who we are and why we exist]"
        intro="[A short positioning statement that sets up the story below.]"
      />

      {/* STORY — why and how */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <WirePlaceholder label="[Founder / team photo]" className="aspect-[4/5] w-full" />
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Our Story</WireLabel>
            <WireHeading level={2}>Why and How We Started</WireHeading>
            <WireText className="max-w-md">
              [The origin story — the problem you saw, why you decided to solve it, and how the
              approach took shape over time.]
            </WireText>
            <WireText className="max-w-md">
              [A second paragraph continuing the narrative and building credibility.]
            </WireText>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
            <WireLabel>Philosophy</WireLabel>
            <WireHeading level={2}>What We Believe</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {philosophyBlocks.map((block) => (
              <WireBox key={block.label} className="flex flex-col gap-4 bg-white">
                <WireLabel>{block.label}</WireLabel>
                <WireHeading level={3}>{block.title}</WireHeading>
                <WireText>{block.text}</WireText>
                <WirePlaceholder label="[Supporting visual]" className="mt-2 h-32 w-full" />
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      <WireCTA
        title="Want to Work With Us?"
        text="[Invite the visitor to start a conversation.]"
        primary="Get in Touch"
        secondary="Schedule Vector Workshop"
      />
    </SiteShell>
  )
}
