"use client"

import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import {
  WireButton,
  WireFAQ,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"
import { WireAccordion, WireBadge, WireStepAccordion, WireTabs, WireTimeline } from "@/components/wire-ui"
import { VectorChecklist } from "@/components/vector-checklist"
import { useLanguage } from "@/contexts/language-context"

export default function VectorWireframeV2() {
  const { t } = useLanguage()

  return (
    <SiteShell pageName="Vector Workshop">
      <PageHeader
        label={t.vector.pageLabel}
        title={t.pageHeader.vector.title}
        intro={t.pageHeader.vector.intro}
        actions={
          <div className="flex flex-wrap items-start gap-4">
            <Link href="/contact">
              <WireButton variant="primary">{t.vector.heroSchedule}</WireButton>
            </Link>
            <div className="flex flex-col items-start gap-1.5">
              <WireButton variant="secondary">{t.vector.heroDownload}</WireButton>
              <span className="font-mono text-xs text-muted-foreground">{t.vector.heroDownloadNote}</span>
            </div>
          </div>
        }
      />

      {/* PROOF — sessions run, participant quote, photos */}
      <section className="border-b border-neutral-200 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <WireLabel>{t.vector.proofLabel}</WireLabel>
            <WireText className="max-w-2xl text-base text-neutral-700">{t.vector.proofLead}</WireText>
          </div>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <blockquote className="flex flex-col gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
              <p className="text-pretty text-lg font-medium leading-relaxed text-neutral-800">
                &ldquo;{t.vector.proofQuote}&rdquo;
              </p>
              <footer className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                {t.vector.proofQuoteAttribution}
              </footer>
            </blockquote>
            <WirePlaceholder label="[Workshop session photo]" className="aspect-video w-full" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* WHY THIS WORKSHOP — tabs instead of a graphic */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-start gap-5">
            <WireLabel>{t.vector.whyLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.whyTitle}</WireHeading>
            <WireText className="max-w-2xl">
              [Explain the outcomes and the reasoning behind the framework.]
            </WireText>
          </div>
          <WireTabs
            tabs={[
              {
                label: t.vector.tabOutcome,
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
                label: t.vector.tabMethod,
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
                label: t.vector.tabForWhom,
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
            <WireLabel>{t.vector.whenLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.whenTitle}</WireHeading>
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
            <WireLabel>{t.vector.howLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.howTitle}</WireHeading>
            <WireText className="max-w-2xl">
              [Each stage expands to a full walkthrough — watch the short video, then follow the
              detailed instructions at your own pace.]
            </WireText>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <WireBadge tone="muted">Agenda</WireBadge>
            <span className="font-mono text-xs text-neutral-400">{t.vector.agendaMeta}</span>
          </div>

          <WireStepAccordion
            steps={[
              {
                title: "Osadź cele (~15 min)",
                duration: "[~15 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 1 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Long-form description of what happens in this stage, written out in full.
                      Explain the goal, what the facilitator says to open, and how to set the tone.]
                    </WireText>
                    <WireText className="text-sm">
                      [A second paragraph with more nuance — common pitfalls, how to adapt for a
                      larger group, and what &ldquo;done&rdquo; looks like for this stage.]
                    </WireText>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>[Prompt or talking point #1]</li>
                        <li>[Prompt or talking point #2]</li>
                        <li>[Prompt or talking point #3]</li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the most common mistake at this stage.]</WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the signal that this stage is complete.]</WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Zmapuj zasoby (~20 min)",
                duration: "[~20 min · video 4 min]",
                hasVideo: true,
                videoLabel: "[Stage 2 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Detailed instructions for the resource-mapping stage. Describe the exercise,
                      the materials used, and how participants should be grouped.]
                    </WireText>
                    <WireText className="text-sm">
                      [Add as much detail as needed — this accordion panel can hold long copy
                      without crowding the rest of the page.]
                    </WireText>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the most common mistake at this stage.]</WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the signal that this stage is complete.]</WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Nazwij przeszkody (~20 min)",
                duration: "[~20 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 3 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Full description of the obstacle-naming stage, including how to surface
                      disagreement and move the group toward a shared view.]
                    </WireText>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the most common mistake at this stage.]</WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the signal that this stage is complete.]</WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Wyodrębnij decyzje (~40 min)",
                duration: "[~40 min · video 5 min]",
                hasVideo: true,
                videoLabel: "[Stage 4 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Full description of the decision-extraction stage, including how to weigh
                      options and move the group toward a shared choice.]
                    </WireText>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the most common mistake at this stage.]</WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the signal that this stage is complete.]</WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Nazwij akcje (~25 min)",
                duration: "[~25 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 5 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      [Closing instructions: capturing owners, deadlines, and how to keep momentum
                      after the session ends.]
                    </WireText>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the most common mistake at this stage.]</WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">[Describe the signal that this stage is complete.]</WireText>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Run it online — merged into a single narrative section */}
          <div className="mt-14">
            <div className="mb-6 flex flex-col items-start gap-3">
              <WireBadge tone="blue">{t.vector.onlineLabel}</WireBadge>
              <WireHeading level={3}>{t.vector.onlineTitle}</WireHeading>
              <WireText className="max-w-2xl text-sm">{t.vector.onlineLead}</WireText>
            </div>
            <WireTimeline
              steps={[
                { title: "[Step 1 — upload the boards]", body: "[Describe uploading the PNG stage boards to your online whiteboard of choice.]" },
                { title: "[Step 2 — invite participants]", body: "[Describe sharing access and setting up breakout areas if needed.]" },
                { title: "[Step 3 — run the session]", body: "[Describe facilitating remotely — timers, screen sharing, and keeping the group engaged.]" },
              ]}
            />
            <WireText className="mt-6 max-w-2xl text-sm text-neutral-500">{t.vector.onlineFormatsNote}</WireText>
          </div>

          {/* Download — two groups + buy package CTA */}
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-2">
              <WireBadge tone="muted">{t.vector.download}</WireBadge>
              <span className="font-mono text-xs text-neutral-400">[Use offline / in person]</span>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Files to download */}
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {t.vector.downloadFilesLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "Plansze pięciu etapów", meta: "[PNG · file size]" },
                    { name: "Facilitator guide", meta: "[PDF · file size]" },
                    { name: "Arkusze do druku", meta: "[PDF · file size]" },
                    { name: "Karty Celu do druku", meta: "[PDF · file size]" },
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
                      <span className="text-sm font-medium text-blue-700">{t.vector.download}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI tools — links, visually distinct from files */}
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {t.vector.downloadAiLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { tool: "Skill do Claude'a", desc: "[Facilitation skill you can attach in Claude.]", action: "Open", soon: false },
                    { tool: "CustomGPT", desc: "[A tuned GPT that walks you through the workshop.]", action: "Open", soon: false },
                    { tool: "Gem w Gemini", desc: "[A Gemini gem configured for facilitation.]", action: t.vector.comingSoon, soon: true },
                  ].map((conn, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between gap-4 rounded-md border-2 border-dashed px-4 py-3 ${
                        conn.soon ? "border-neutral-200 bg-neutral-50 opacity-60" : "border-blue-300 bg-blue-50/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded border-2 border-dashed border-blue-300 font-mono text-xs text-blue-500"
                          aria-hidden="true"
                        >
                          ⧉
                        </span>
                        <div className="flex flex-col">
                          <WireText className="text-neutral-700">{conn.tool}</WireText>
                          <span className="font-mono text-xs text-neutral-400">{conn.desc}</span>
                        </div>
                      </div>
                      {conn.soon ? (
                        <WireBadge tone="muted">{conn.action}</WireBadge>
                      ) : (
                        <span className="flex items-center gap-1 text-sm font-medium text-blue-700">
                          {conn.action}
                          <span aria-hidden="true">↗</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
              <WireButton variant="primary">{t.vector.buyPackage}</WireButton>
              <WireText className="text-sm">{t.vector.buyPackageNote}</WireText>
            </div>
          </div>
        </div>
      </section>

      {/* NOTES, TIPS & INSTRUCTIONS — accordion */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 flex flex-col items-start gap-3">
            <WireLabel>{t.vector.notesLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.notesTitle}</WireHeading>
          </div>
          <WireAccordion
            items={[
              { title: "[Tip 1 — setting up the room]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 2 — keeping discussion on track]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 3 — handling disagreement]", body: "[Detailed guidance for this tip.]" },
              { title: "[Tip 4 — capturing the outcome]", body: "[Detailed guidance for this tip.]" },
              { title: "Tip 5 — nie uciekaj od sporu", body: "[Detailed guidance for this tip.]" },
            ]}
          />
        </div>
      </section>

      {/* HOW TO PREPARE — downloadable facilitator checklist */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <WireLabel>{t.vector.prepLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.prepTitle}</WireHeading>
            <WireText className="max-w-md">{t.vector.checklistLead}</WireText>
            <WireText className="max-w-md">
              [A simple checklist to run through before your session. Download it as a PDF to print,
              or as Markdown to drop into your own notes.]
            </WireText>
          </div>
          <VectorChecklist />
        </div>
      </section>

      {/* CTA — two described paths */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center">
          <WireHeading level={2} className="text-balance text-white">
            {t.vector.ctaTitle}
          </WireHeading>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-white/40 p-6">
              <WireHeading level={4} className="text-white">
                {t.vector.ctaPath1Title}
              </WireHeading>
              <p className="text-pretty text-sm leading-relaxed text-blue-100">{t.vector.ctaPath1Desc}</p>
              <WireButton variant="primary" className="mt-2 border-white bg-white text-blue-700">
                {t.vector.schedule}
              </WireButton>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-white/40 p-6">
              <WireHeading level={4} className="text-white">
                {t.vector.ctaPath2Title}
              </WireHeading>
              <p className="text-pretty text-sm leading-relaxed text-blue-100">{t.vector.ctaPath2Desc}</p>
              <span className="mt-2 rounded-md border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white">
                {t.vector.ctaPath2Title}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — 7 items, practical info first */}
      <WireFAQ
        questions={[
          "[Praktyczne informacje: liczba osób, czas trwania, materiały]",
          "Question 2: [FAQ question text]",
          "Question 3: [FAQ question text]",
          "Question 4: [FAQ question text]",
          "Question 5: [FAQ question text]",
          "Question 6: [FAQ question text]",
          "Question 7: [FAQ question text]",
        ]}
      />
    </SiteShell>
  )
}
