import { SiteShell, PageHeader } from "@/components/site-shell"
import {
  WireBox,
  WireButton,
  WireFAQ,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"

export default function VectorWireframeV2() {
  return (
    <SiteShell pageName="Vector Workshop">
      <PageHeader
        label="Vector Workshop"
        title="[Vector Workshop — facilitate it yourself with our framework]"
        intro="[One line on what the Vector workshop is and who it's for.]"
      />

      {/* WHY THIS WORKSHOP */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Why This Workshop</WireLabel>
            <WireHeading level={2}>Why It Works</WireHeading>
            <WireText className="max-w-md">
              [Explain the outcomes and the reasoning behind the framework.]
            </WireText>
          </div>
          <WirePlaceholder label="[Workshop visual]" className="aspect-video w-full" />
        </div>
      </section>

      {/* WHEN TO USE */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>When to Use</WireLabel>
            <WireHeading level={2}>When to Run a Vector Workshop</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-3 bg-white">
                <WireHeading level={4}>Scenario {i}</WireHeading>
                <WireText className="text-sm">[A situation where this workshop helps.]</WireText>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — video + downloads */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>How It Works</WireLabel>
            <WireHeading level={2}>Video & Downloadable Materials</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <WirePlaceholder label="[Video player]" className="aspect-video w-full" />
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-neutral-400" aria-hidden="true">
                      ⤓
                    </span>
                    <WireText className="text-neutral-700">[Downloadable material {i}]</WireText>
                  </div>
                  <span className="text-sm font-medium text-blue-700">Download</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTES, TIPS & INSTRUCTIONS */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 flex flex-col items-start gap-3">
            <WireLabel>Notes & Tips</WireLabel>
            <WireHeading level={2}>Notes, Tips and Instructions</WireHeading>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white px-4 py-3"
              >
                <span className="font-mono text-blue-600" aria-hidden="true">
                  ✓
                </span>
                <WireText className="text-neutral-700">[Tip or instruction {i}]</WireText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PREPARE */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <WirePlaceholder label="[Facilitator prep visual]" className="aspect-square w-full" />
          <div className="flex flex-col items-start gap-5">
            <WireLabel>Preparation</WireLabel>
            <WireHeading level={2}>How to Prepare to Facilitate</WireHeading>
            <WireText className="max-w-md">
              [Checklist and guidance for getting ready to run the session confidently.]
            </WireText>
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
