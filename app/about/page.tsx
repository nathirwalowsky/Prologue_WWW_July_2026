"use client"

import { SiteShell } from "@/components/site-shell"
import {
  WireBox,
  WireButton,
  WireCTA,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"
import { WireBadge } from "@/components/wire-ui"

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

// Classic story beats, grouped into three acts.
const storyBeats = [
  {
    act: "Act I",
    actLabel: "The Ordinary World",
    beats: [
      {
        n: "01",
        beat: "The Ordinary World",
        title: "[Where it all started]",
        text: "[Set the scene before the story begins — the everyday reality, the status quo, the way things were for us (or for the people we now serve).]",
      },
      {
        n: "02",
        beat: "The Inciting Incident",
        title: "[The moment everything changed]",
        text: "[The disruption, the problem, the realization that things couldn't stay the same. This is the spark that set the whole story in motion.]",
      },
    ],
  },
  {
    act: "Act II",
    actLabel: "The Road of Trials",
    beats: [
      {
        n: "03",
        beat: "Crossing the Threshold",
        title: "[Committing to a different path]",
        text: "[The decision to step into the unknown and build something new — leaving the familiar behind.]",
      },
      {
        n: "04",
        beat: "Trials & Lessons",
        title: "[What the journey taught us]",
        text: "[The early clients, the mistakes, the hard-won lessons that sharpened our approach and forged our method.]",
      },
    ],
  },
  {
    act: "Act III",
    actLabel: "The Return",
    beats: [
      {
        n: "05",
        beat: "The Transformation",
        title: "[Who we became]",
        text: "[The breakthrough — the moment the philosophy came together and we became the guide we are today.]",
      },
      {
        n: "06",
        beat: "Return with the Elixir",
        title: "[What we bring back for you]",
        text: "[How everything we learned now serves you — the hero of your own story. We've walked the road; here's how we help you walk yours.]",
      },
    ],
  },
]

export default function AboutWireframeV2() {
  return (
    <SiteShell pageName="About">
      {/* HERO — narrative opening with a photo space */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="flex flex-col items-start">
              <div className="mb-5">
                <WireLabel>Our Story</WireLabel>
              </div>
              <WireHeading level={1} className="text-balance">
                [A single, human sentence that captures why Prologue exists.]
              </WireHeading>
              <WireText className="mt-6 max-w-md text-pretty text-lg">
                [Every great venture follows a story. Here&apos;s ours — and how it prepares us to
                guide yours. Set the emotional tone here.]
              </WireText>
            </div>
            <WirePlaceholder
              label="[Team / founder photo]"
              className="aspect-[4/5] w-full md:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* THE STORY — classic hero's journey beats, grouped into three acts */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 flex flex-col gap-3 text-center md:mb-16">
            <div className="flex justify-center">
              <WireLabel>The Story</WireLabel>
            </div>
            <WireHeading level={2} className="text-balance">
              Told in Three Acts
            </WireHeading>
            <WireText className="mx-auto max-w-2xl text-pretty">
              [Our path, structured like every story worth telling — from an ordinary beginning,
              through the trials that shaped us, to what we now bring back for you.]
            </WireText>
          </div>

          <div className="flex flex-col gap-14">
            {storyBeats.map((act) => (
              <div key={act.act}>
                {/* Act header */}
                <div className="mb-6 flex items-center gap-3">
                  <WireBadge tone="blue">{act.act}</WireBadge>
                  <span className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                    {act.actLabel}
                  </span>
                  <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
                </div>

                {/* Beats within the act */}
                <div className="flex flex-col gap-4">
                  {act.beats.map((b) => (
                    <div
                      key={b.n}
                      className="flex gap-5 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6"
                    >
                      <span className="font-mono text-2xl font-semibold text-blue-300">{b.n}</span>
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs uppercase tracking-wide text-blue-600">
                          {b.beat}
                        </span>
                        <WireHeading level={3}>{b.title}</WireHeading>
                        <WireText>{b.text}</WireText>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote with founder portrait to punctuate the turning point */}
          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
            <WirePlaceholder
              label="[Founder portrait]"
              className="size-28 shrink-0 rounded-full sm:size-32"
            />
            <blockquote className="border-l-4 border-blue-500 pl-6">
              <p className="text-pretty text-xl font-medium italic leading-relaxed text-neutral-700 md:text-2xl">
                [&ldquo;A memorable line that captures the turning point or founding belief.&rdquo;]
              </p>
              <footer className="mt-3 font-mono text-xs uppercase tracking-wide text-neutral-400">
                [Founder name · role]
              </footer>
            </blockquote>
          </div>
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
