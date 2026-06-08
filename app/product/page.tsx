import { SiteShell, PageHeader } from "@/components/site-shell"
import {
  WireBox,
  WireButton,
  WireCTA,
  WireFAQ,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"

export default function ProductWireframeV2() {
  return (
    <SiteShell pageName="Product / Situation">
      <PageHeader
        label="Product / Situation"
        title="[Situation Headline — name the problem your customer faces]"
        intro="[One-line promise that this page will show the path from problem to resolution.]"
      />

      {/* 1. IDENTIFICATION — list of problems + CTA */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <WireLabel>1 · Identification</WireLabel>
            <WireHeading level={2}>Does This Sound Familiar?</WireHeading>
            <ul className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
                >
                  <span className="font-mono text-neutral-400" aria-hidden="true">
                    ✕
                  </span>
                  <WireText className="text-neutral-700">[Problem statement {i}]</WireText>
                </li>
              ))}
            </ul>
            <WireButton variant="primary">[CTA — There&apos;s a better way]</WireButton>
          </div>
          <WirePlaceholder label="[Visual — frustrated state]" className="aspect-square w-full" />
        </div>
      </section>

      {/* 2. EMPATHY */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 flex flex-col items-center gap-3">
            <WireLabel>2 · Empathy</WireLabel>
            <WireHeading level={2}>We Understand How You Feel</WireHeading>
          </div>
          <WireText className="mx-auto max-w-2xl text-pretty">
            [Empathetic statement reflecting what the customer thinks and feels. Show you understand
            their frustration before offering the solution.]
          </WireText>
        </div>
      </section>

      {/* 3. HOPE — case studies */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>3 · Hope</WireLabel>
            <WireHeading level={2}>It&apos;s Possible to Fix This</WireHeading>
            <WireText className="max-w-2xl">[Case studies proving the transformation is real.]</WireText>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-4 bg-white">
                <WirePlaceholder label="[Case study image]" className="h-40 w-full" />
                <WireHeading level={4}>Case Study {i}</WireHeading>
                <WireText className="text-sm">[Before → after result, with a metric.]</WireText>
                <span className="mt-auto font-medium text-blue-700">Read story →</span>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STEPS */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>4 · The Plan</WireLabel>
            <WireHeading level={2}>Here&apos;s How We Fix It</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-100 font-semibold text-blue-800">
                  {i}
                </span>
                <WireHeading level={4}>Step {i}</WireHeading>
                <WireText className="text-sm">[What happens in this step.]</WireText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <WireCTA
        title="Schedule a Call"
        text="[Encourage the customer to take the first concrete step.]"
        primary="Book a Call"
      />

      {/* 6. THRESHOLD — stakes / up the ante */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <WirePlaceholder label="[Visual — cost of inaction]" className="aspect-video w-full" />
          <div className="flex flex-col items-start gap-5">
            <WireLabel>6 · Threshold</WireLabel>
            <WireHeading level={2}>What Happens If You Don&apos;t Act?</WireHeading>
            <ul className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-neutral-400" aria-hidden="true">
                    →
                  </span>
                  <WireText className="text-neutral-700">[Negative consequence {i}]</WireText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. NOT READY? — blog */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>7 · Not Ready Yet?</WireLabel>
            <WireHeading level={2}>Start by Learning More</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-4 bg-white">
                <WirePlaceholder label="[Article image]" className="h-40 w-full" />
                <WireHeading level={4}>Article {i}</WireHeading>
                <span className="mt-auto font-medium text-blue-700">Read More →</span>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <WireFAQ />
    </SiteShell>
  )
}
