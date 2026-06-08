"use client"

import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireButton, WireFAQ, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"
import {
  WireAccordion,
  WireBadge,
  WireChecklist,
  WireStepAccordion,
  WireTabs,
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

      {/* HOW IT WORKS — expandable session steps (video + long text) + downloads */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>How It Works</WireLabel>
            <WireHeading level={2}>The Session, Step by Step</WireHeading>
            <WireText className="max-w-2xl">
              [Each step expands to a full walkthrough — watch the short video, then follow the
              detailed instructions at your own pace.]
            </WireText>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <WireBadge tone="muted">Agenda</WireBadge>
            <span className="font-mono text-xs text-neutral-400">[~ total duration]</span>
          </div>

          <WireStepAccordion
            steps={[
              {
                title: "[Phase 1 — Frame the question]",
                duration: "[~15 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Phase 1 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Long-form description of what happens in this phase, written out in full.
                      Explain the goal, what the facilitator says to open, and how to set the tone.]
                    </WireText>
                    <WireText className="text-sm">
                      [A second paragraph with more nuance — common pitfalls, how to adapt for a
                      larger group, and what &ldquo;done&rdquo; looks like for this phase.]
                    </WireText>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>[Prompt or talking point #1]</li>
                        <li>[Prompt or talking point #2]</li>
                        <li>[Prompt or talking point #3]</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                title: "[Phase 2 — Explore the options]",
                duration: "[~25 min · video 4 min]",
                hasVideo: true,
                videoLabel: "[Phase 2 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Detailed instructions for the exploration phase. Describe the exercise, the
                      materials used, and how participants should be grouped.]
                    </WireText>
                    <WireText className="text-sm">
                      [Add as much detail as needed — this accordion panel can hold long copy
                      without crowding the rest of the page.]
                    </WireText>
                  </div>
                ),
              },
              {
                title: "[Phase 3 — Decide together]",
                duration: "[~20 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Phase 3 walkthrough]",
                body: (
                  <WireText className="text-sm">
                    [Full description of the decision-making phase, including how to surface
                    disagreement and move the group toward a shared choice.]
                  </WireText>
                ),
              },
              {
                title: "[Phase 4 — Commit to next steps]",
                duration: "[~10 min · video 2 min]",
                hasVideo: true,
                videoLabel: "[Phase 4 walkthrough]",
                body: (
                  <WireText className="text-sm">
                    [Closing instructions: capturing owners, deadlines, and how to keep momentum
                    after the session ends.]
                  </WireText>
                ),
              },
            ]}
          />

          {/* Materials — download files + connect online tools */}
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Download files */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <WireBadge tone="muted">Download</WireBadge>
                <span className="font-mono text-xs text-neutral-400">[Use offline / in person]</span>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { name: "[Worksheet template]", meta: "[PDF · file size]" },
                  { name: "[Facilitator guide]", meta: "[PDF · file size]" },
                  { name: "[Slide deck]", meta: "[PPTX · file size]" },
                  { name: "[Printable cards]", meta: "[PDF · file size]" },
                ].map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-neutral-400" aria-hidden="true">
                        ⤓
                      </span>
                      <div className="flex flex-col">
                        <WireText className="text-neutral-700">{file.name}</WireText>
                        <span className="font-mono text-xs text-neutral-400">{file.meta}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-700">Download</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect online tools — run the workshop remotely */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <WireBadge tone="blue">Run it online</WireBadge>
                <span className="font-mono text-xs text-neutral-400">[Open a live, editable copy]</span>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { tool: "[Figma / FigJam]", desc: "[Collaborative board template]", action: "Open template" },
                  { tool: "[Miro]", desc: "[Workshop canvas with sticky notes]", action: "Open template" },
                  { tool: "[Google Slides / Docs]", desc: "[Editable copy for your team]", action: "Make a copy" },
                  { tool: "[Notion]", desc: "[Duplicate workspace to your account]", action: "Duplicate" },
                ].map((conn, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded border-2 border-dashed border-neutral-300 font-mono text-xs text-neutral-400"
                        aria-hidden="true"
                      >
                        ⧉
                      </span>
                      <div className="flex flex-col">
                        <WireText className="text-neutral-700">{conn.tool}</WireText>
                        <span className="font-mono text-xs text-neutral-400">{conn.desc}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-blue-700">
                      {conn.action}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                ))}
              </div>
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

      {/* HOW TO PREPARE — interactive facilitator checklist */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Preparation</WireLabel>
            <WireHeading level={2}>How to Prepare to Facilitate</WireHeading>
            <WireText className="max-w-md">
              [Work through this checklist before the session. Tick items off as you go so nothing
              gets missed on the day.]
            </WireText>
          </div>
          <WireChecklist
            groups={[
              {
                title: "Before the session",
                items: [
                  "[Read through the full framework]",
                  "[Watch the facilitator walkthrough videos]",
                  "[Pick a date and book the room or call]",
                  "[Invite participants with a clear agenda]",
                ],
              },
              {
                title: "Materials to prepare",
                items: [
                  "[Print or share the worksheet template]",
                  "[Prepare sticky notes / whiteboard / digital board]",
                  "[Have the timer and agenda visible]",
                ],
              },
              {
                title: "On the day",
                items: [
                  "[Arrive early and set up the space]",
                  "[Open with the framing from Phase 1]",
                  "[Assign a note-taker for decisions and owners]",
                ],
              },
            ]}
          />
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
