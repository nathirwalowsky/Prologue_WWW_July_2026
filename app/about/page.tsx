"use client"

import { SiteShell } from "@/components/site-shell"
import {
  WireBox,
  WireButton,
  WireCTA,
  WireHeading,
  WireLabel,
  WireText,
} from "@/components/wireframe-kit"
import { WireBadge, WireTimeline } from "@/components/wire-ui"

const values = [
  { label: "01", title: "[Value One]", text: "[Short explanation of what this value means in practice.]" },
  { label: "02", title: "[Value Two]", text: "[Short explanation of what this value means in practice.]" },
  { label: "03", title: "[Value Three]", text: "[Short explanation of what this value means in practice.]" },
  { label: "04", title: "[Value Four]", text: "[Short explanation of what this value means in practice.]" },
]

const aiPrinciples = [
  { title: "[Principle 1 — e.g. AI augments, never replaces, human judgment]", text: "[Explain how this shows up in the work.]" },
  { title: "[Principle 2 — e.g. Transparency about where AI is used]", text: "[Explain how this shows up in the work.]" },
  { title: "[Principle 3 — e.g. Human accountability for every output]", text: "[Explain how this shows up in the work.]" },
]

export default function AboutWireframeV2() {
  return (
    <SiteShell pageName="About">
      {/* HERO — narrative opening, sets up the story */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-5 flex justify-center">
            <WireLabel>Our Story</WireLabel>
          </div>
          <WireHeading level={1} className="text-balance">
            [A single, human sentence that captures why Prologue exists.]
          </WireHeading>
          <WireText className="mx-auto mt-6 max-w-xl text-pretty text-lg">
            [A short, evocative lead-in that hooks the reader and promises a story — not a list of
            services. Set the emotional tone here.]
          </WireText>
        </div>
      </section>

      {/* THE BEGINNING — origin story, text-led with a pull quote */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col gap-5">
            <WireLabel>Chapter One</WireLabel>
            <WireHeading level={2}>Where It Began</WireHeading>
            <WireText>
              [The origin story — the moment or problem that started it all. Write this as a
              narrative, with specific detail that makes it feel real and personal.]
            </WireText>
            <WireText>
              [Continue the story: what you noticed, what frustrated you, and the decision to do
              something about it.]
            </WireText>
          </div>

          {/* Pull quote to add narrative texture */}
          <blockquote className="my-10 border-l-4 border-blue-500 pl-6">
            <p className="text-pretty text-xl font-medium italic leading-relaxed text-neutral-700 md:text-2xl">
              [&ldquo;A memorable line that captures the turning point or founding belief.&rdquo;]
            </p>
            <footer className="mt-3 font-mono text-xs uppercase tracking-wide text-neutral-400">
              [Founder name · role]
            </footer>
          </blockquote>

          <WireText className="max-w-2xl">
            [Bridge paragraph that leads the reader from the beginning into how the work evolved over
            time — setting up the journey timeline below.]
          </WireText>
        </div>
      </section>

      {/* THE JOURNEY — timeline to carry the narrative forward */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 flex flex-col gap-3">
            <WireLabel>The Journey</WireLabel>
            <WireHeading level={2}>How We Got Here</WireHeading>
            <WireText className="max-w-2xl">
              [Walk through the key chapters of the story — each milestone is a beat in the
              narrative, not just a date.]
            </WireText>
          </div>
          <WireTimeline
            steps={[
              { title: "[Milestone — the spark]", body: "[What happened and why it mattered to the story.]" },
              { title: "[Milestone — the first clients]", body: "[What we learned and how the approach sharpened.]" },
              { title: "[Milestone — finding our method]", body: "[The moment the philosophy came together.]" },
              { title: "[Milestone — today]", body: "[Where the story stands now and where it's heading.]" },
            ]}
          />
        </div>
      </section>

      {/* PHILOSOPHY — how we work + why it matters */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-3 md:mb-14">
            <WireLabel>Philosophy</WireLabel>
            <WireHeading level={2}>What We Believe</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <WireBox className="flex flex-col gap-4 bg-neutral-50">
              <WireLabel>Way of Work</WireLabel>
              <WireHeading level={3}>How We Work</WireHeading>
              <WireText>[Describe your methodology and process as part of the narrative.]</WireText>
            </WireBox>
            <WireBox className="flex flex-col gap-4 bg-neutral-50">
              <WireLabel>Why It Matters</WireLabel>
              <WireHeading level={3}>Why It Matters</WireHeading>
              <WireText>[Explain the impact and deeper purpose behind the work.]</WireText>
            </WireBox>
          </div>
        </div>
      </section>

      {/* VALUES — its own dedicated section */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-3 md:mb-14">
            <WireLabel>Values</WireLabel>
            <WireHeading level={2}>What Guides Our Decisions</WireHeading>
            <WireText className="max-w-2xl">
              [Introduce the values as the principles that show up in every project and decision.]
            </WireText>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.label}
                className="flex gap-5 rounded-md border-2 border-dashed border-neutral-300 bg-white p-6"
              >
                <span className="font-mono text-2xl font-semibold text-blue-300">{value.label}</span>
                <div className="flex flex-col gap-2">
                  <WireHeading level={3}>{value.title}</WireHeading>
                  <WireText>{value.text}</WireText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI MANIFEST — its own dedicated section */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 flex flex-col items-start gap-3">
            <WireBadge tone="blue">Our AI Manifest</WireBadge>
            <WireHeading level={2}>How We Use AI — Responsibly</WireHeading>
            <WireText className="max-w-2xl">
              [A clear, principled statement on your stance toward AI: where it helps, where it
              doesn&apos;t, and the commitments you make to clients.]
            </WireText>
          </div>
          <div className="flex flex-col gap-4">
            {aiPrinciples.map((principle, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-md border-l-4 border-blue-500 bg-neutral-50 px-6 py-5"
              >
                <span className="font-mono text-sm font-semibold text-blue-600" aria-hidden="true">
                  {`0${i + 1}`}
                </span>
                <div className="flex flex-col gap-1.5">
                  <WireHeading level={4}>{principle.title}</WireHeading>
                  <WireText className="text-sm">{principle.text}</WireText>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <WireButton variant="secondary">[Read the full manifest]</WireButton>
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
