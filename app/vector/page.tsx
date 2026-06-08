import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireButton, WireFAQ, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"
import {
  WireAccordion,
  WireBadge,
  WireProgress,
  WireTabs,
  WireTimeline,
} from "@/components/wire-ui"

export default function VectorWireframeV2() {
  return (
    <SiteShell pageName="Vector Workshop">
      <PageHeader
        label="Vector Workshop"
        title="[Vector Workshop — facilitate it yourself with our framework]"
        intro="[One line on what the Vector workshop is and who it's for.]"
      />

      {/* WHY THIS WORKSHOP — tabs instead of a graphic */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-start gap-5">
            <WireLabel>Why This Workshop</WireLabel>
            <WireHeading level={2}>Why It Works</WireHeading>
            <WireText className="max-w-2xl">
              [Explain the outcomes and the reasoning behind the framework.]
            </WireText>
          </div>
          <WireTabs
            tabs={[
              {
                label: "The Outcome",
                content: (
                  <div className="flex flex-col gap-3">
                    <WireHeading level={4}>[What you walk away with]</WireHeading>
                    <WireText>
                      [Describe the tangible end state — alignment, a clear direction, a shared
                      decision the whole team owns.]
                    </WireText>
                  </div>
                ),
              },
              {
                label: "The Method",
                content: (
                  <div className="flex flex-col gap-3">
                    <WireHeading level={4}>[Why the structure works]</WireHeading>
                    <WireText>
                      [Explain the reasoning behind the exercises and the order they run in.]
                    </WireText>
                  </div>
                ),
              },
              {
                label: "Who It's For",
                content: (
                  <div className="flex flex-col gap-3">
                    <WireHeading level={4}>[The right team for this]</WireHeading>
                    <WireText>
                      [Describe the team size, roles, and moment where this delivers the most value.]
                    </WireText>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* WHEN TO USE — scenario cards with badges */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>When to Use</WireLabel>
            <WireHeading level={2}>When to Run a Vector Workshop</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { tag: "Turning point", line: "[A situation where this workshop helps.]" },
              { tag: "Misalignment", line: "[A situation where this workshop helps.]" },
              { tag: "New chapter", line: "[A situation where this workshop helps.]" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white p-5"
              >
                <WireBadge tone="blue">{s.tag}</WireBadge>
                <WireHeading level={4}>{`Scenario ${i + 1}`}</WireHeading>
                <WireText className="text-sm">{s.line}</WireText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — agenda timeline + downloads */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>How It Works</WireLabel>
            <WireHeading level={2}>The Session, Step by Step</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <WireBadge tone="muted">Agenda</WireBadge>
                <span className="font-mono text-xs text-neutral-400">[~ duration]</span>
              </div>
              <WireTimeline
                steps={[
                  { title: "[Phase 1 — Frame]", body: "[What happens and why it matters.]" },
                  { title: "[Phase 2 — Explore]", body: "[What happens and why it matters.]" },
                  { title: "[Phase 3 — Decide]", body: "[What happens and why it matters.]" },
                  { title: "[Phase 4 — Commit]", body: "[What happens and why it matters.]" },
                ]}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <WireBadge tone="muted">Materials</WireBadge>
                <span className="font-mono text-xs text-neutral-400">[Included downloads]</span>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-neutral-400" aria-hidden="true">
                      ⤓
                    </span>
                    <div className="flex flex-col">
                      <WireText className="text-neutral-700">{`[Downloadable material ${i}]`}</WireText>
                      <span className="font-mono text-xs text-neutral-400">[PDF · file size]</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-blue-700">Download</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTES, TIPS & INSTRUCTIONS — accordion */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 flex flex-col items-start gap-3">
            <WireLabel>Notes & Tips</WireLabel>
            <WireHeading level={2}>Notes, Tips and Instructions</WireHeading>
          </div>
          <WireAccordion
            items={[
              { title: "[Tip 1 — setting up the room]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 2 — keeping discussion on track]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 3 — handling disagreement]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 4 — capturing the outcome]", body: "[Detailed guidance for this tip.]" },
            ]}
          />
        </div>
      </section>

      {/* HOW TO PREPARE — readiness checklist with progress */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Preparation</WireLabel>
            <WireHeading level={2}>How to Prepare to Facilitate</WireHeading>
            <WireText className="max-w-md">
              [Checklist and guidance for getting ready to run the session confidently.]
            </WireText>
          </div>
          <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
            <div className="flex items-center justify-between">
              <WireBadge tone="blue">Readiness</WireBadge>
              <span className="font-mono text-xs text-neutral-400">[Track your prep]</span>
            </div>
            <WireProgress label="[Review the framework]" value={100} />
            <WireProgress label="[Watch the walkthrough]" value={75} />
            <WireProgress label="[Print the materials]" value={40} />
            <WireProgress label="[Invite participants]" value={20} />
          </div>
        </div>
      </section>

      {/* TWO CTA BUTTONS */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
          <WireHeading level={2} className="text-balance text-white">
            Ready to Go Deeper?
          </WireHeading>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <WireButton variant="primary" className="border-white bg-white text-blue-700">
              Schedule a Consulting Session
            </WireButton>
            <span className="rounded-md border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white">
              Buy Full Workshop
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WireFAQ />
    </SiteShell>
  )
}
