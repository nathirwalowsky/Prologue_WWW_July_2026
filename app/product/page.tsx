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
  WireTable,
  WireStatGrid,
  WireTimeline,
  WireBarChart,
  WireBadge,
} from "@/components/wire-ui"

export default function ProductWireframeV2() {
  return (
    <SiteShell pageName="Product / Situation">
      {/* HERO — problem-forward, identify immediately */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left: framing + headline */}
            <div className="flex flex-col items-start gap-5">
              <WireLabel>Product / Situation</WireLabel>
              <WireHeading level={1} className="text-balance">
                [If any of these sound familiar, you&apos;re in the right place.]
              </WireHeading>
              <WireText className="max-w-md text-pretty">
                [One-line promise: you&apos;re not alone, and there&apos;s a clear path from where you
                are now to where you want to be.]
              </WireText>
              <div className="flex flex-wrap gap-3 pt-2">
                <WireButton variant="primary">[Show me the way forward]</WireButton>
                <WireButton variant="ghost">[Book a call]</WireButton>
              </div>
            </div>

            {/* Right: the problems checklist */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <WireBadge tone="muted">Common challenges</WireBadge>
                <span className="font-mono text-xs text-neutral-400">[Select what resonates]</span>
              </div>
              {[
                "[Problem 1 — e.g. growth has stalled and you're not sure why]",
                "[Problem 2 — e.g. the team is busy but priorities feel unclear]",
                "[Problem 3 — e.g. decisions take too long to make]",
                "[Problem 4 — e.g. you're reacting instead of leading]",
                "[Problem 5 — e.g. results don't match the effort going in]",
              ].map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white px-4 py-3"
                >
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 border-neutral-300 font-mono text-xs text-neutral-400"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <WireText className="text-sm text-neutral-700">{problem}</WireText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. IDENTIFICATION — current vs. desired comparison table */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-start gap-5">
            <WireLabel>1 · Identification</WireLabel>
            <WireHeading level={2}>From Where You Are to Where You Want to Be</WireHeading>
            <WireText className="max-w-2xl">
              [Frame the gap between where the customer is today and where they want to be.]
            </WireText>
          </div>
          <WireTable
            columns={["Area", "Where you are now", "Where you want to be"]}
            rows={[1, 2, 3, 4].map((i) => [
              <span key="a" className="font-medium text-neutral-800">{`[Area ${i}]`}</span>,
              <span key="b" className="flex items-center gap-2">
                <WireBadge tone="muted">Now</WireBadge>[Current pain point]
              </span>,
              <span key="c" className="flex items-center gap-2">
                <WireBadge tone="blue">Goal</WireBadge>[Desired outcome]
              </span>,
            ])}
          />
          <div className="mt-8">
            <WireButton variant="primary">[CTA — There&apos;s a better way]</WireButton>
          </div>
        </div>
      </section>

      {/* 2. EMPATHY — emotional resonance, make them feel seen */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>2 · Empathy</WireLabel>
            <WireHeading level={2} className="text-balance">
              [The part no one talks about — how this actually feels]
            </WireHeading>
            <WireText className="max-w-2xl text-pretty">
              [Name the emotional weight behind the problem. This is not about logistics — it&apos;s
              about the toll it takes on you.]
            </WireText>
          </div>

          {/* Unspoken inner-thoughts as quote cards */}
          <div className="mb-10">
            <div className="mb-4 flex items-center justify-center gap-2">
              <WireBadge tone="muted">The thoughts you don&apos;t say out loud</WireBadge>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                "[\u201cAm I the only one who feels this way?\u201d]",
                "[\u201cI work all the time, but it never feels like enough.\u201d]",
                "[\u201cWhat if I\u2019m steering this in the wrong direction?\u201d]",
              ].map((quote, i) => (
                <div
                  key={i}
                  className="relative flex flex-col gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white px-5 py-6"
                >
                  <span className="font-serif text-4xl leading-none text-neutral-300" aria-hidden="true">
                    &ldquo;
                  </span>
                  <WireText className="text-pretty italic text-neutral-700">{quote}</WireText>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional toll — what it's costing you (not the business) */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { tag: "Energy", line: "[The constant low-grade stress of carrying it alone.]" },
              { tag: "Confidence", line: "[Second-guessing decisions you used to make easily.]" },
              { tag: "Time", line: "[The evenings and weekends that quietly disappear.]" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-md border-2 border-dashed border-neutral-300 bg-white p-5">
                <WireBadge tone="blue">{item.tag}</WireBadge>
                <WireText className="text-sm text-neutral-700">{item.line}</WireText>
              </div>
            ))}
          </div>

          {/* Authority + empathy — we've been there, you can trust us */}
          <div className="rounded-md border-l-4 border-blue-500 bg-white px-6 py-6">
            <WireText className="text-pretty text-neutral-800">
              [&ldquo;We&apos;ve sat exactly where you&apos;re sitting.&rdquo; A short, human statement
              that shows you&apos;ve felt this too — and that&apos;s precisely why you can guide them out
              of it.]
            </WireText>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <WireBadge tone="muted">[Years guiding leaders]</WireBadge>
              <WireBadge tone="muted">[Founders supported]</WireBadge>
              <WireBadge tone="muted">[We&apos;ve been in your seat]</WireBadge>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOPE — case studies as metric cards */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>3 · Hope</WireLabel>
            <WireHeading level={2}>It&apos;s Possible to Fix This</WireHeading>
            <WireText className="max-w-2xl">[Case studies proving the transformation is real.]</WireText>
          </div>
          <WireStatGrid
            stats={[
              { value: "[+212%]", label: "[Case 1 — revenue growth]", trend: "[12 mo]", trendDir: "up" },
              { value: "[−38%]", label: "[Case 2 — cost reduction]", trend: "[6 mo]", trendDir: "down" },
              { value: "[3.5x]", label: "[Case 3 — output per team]", trend: "[+1.2x]", trendDir: "up" },
              { value: "[+27 NPS]", label: "[Case 4 — satisfaction]", trend: "[+15]", trendDir: "up" },
            ]}
          />
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <WireBox key={i} className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-2">
                  <WireBadge tone="blue">[Industry]</WireBadge>
                  <span className="font-mono text-xs text-neutral-400">[Client {i}]</span>
                </div>
                <WireHeading level={4}>Case Study {i}</WireHeading>
                <WireText className="text-sm">[Before → after result, with a metric.]</WireText>
                <span className="mt-auto font-medium text-blue-700">Read story →</span>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STEPS — vertical timeline */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>4 · The Plan</WireLabel>
            <WireHeading level={2}>Here&apos;s How We Fix It</WireHeading>
          </div>
          <WireTimeline
            steps={[
              { title: "Step 1 — [Assess]", body: "[What happens in this step and the outcome it produces.]" },
              { title: "Step 2 — [Align]", body: "[What happens in this step and the outcome it produces.]" },
              { title: "Step 3 — [Build]", body: "[What happens in this step and the outcome it produces.]" },
              { title: "Step 4 — [Scale]", body: "[What happens in this step and the outcome it produces.]" },
            ]}
          />
        </div>
      </section>

      {/* 5. CTA */}
      <WireCTA
        title="Schedule a Call"
        text="[Encourage the customer to take the first concrete step.]"
        primary="Book a Call"
      />

      {/* 6. THRESHOLD — cost of inaction shown as a chart */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <WireBox className="bg-neutral-50">
            <WireHeading level={4} className="mb-4">[Projected cost of inaction]</WireHeading>
            <WireBarChart
              data={[
                { label: "[Now]", value: 20 },
                { label: "[Q2]", value: 38 },
                { label: "[Q3]", value: 61 },
                { label: "[Q4]", value: 88 },
              ]}
              caption="[Rising cost over time — placeholder data]"
            />
          </WireBox>
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

      {/* 7. NOT READY? — blog list rows */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>7 · Not Ready Yet?</WireLabel>
            <WireHeading level={2}>Start by Learning More</WireHeading>
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
                    <span className="font-mono text-xs text-neutral-400">[Date · 5 min read]</span>
                  </div>
                  <WireHeading level={4}>Article {i}</WireHeading>
                  <WireText className="text-sm">[Brief excerpt from the article...]</WireText>
                </div>
                <span className="shrink-0 font-medium text-blue-700">Read More →</span>
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
