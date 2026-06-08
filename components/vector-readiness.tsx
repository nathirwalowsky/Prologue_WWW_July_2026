"use client"

import { useState } from "react"
import { WireBadge } from "@/components/wire-ui"
import { WireButton, WireHeading, WireText } from "@/components/wireframe-kit"

type Choice = { label: string; score: number }
type Question = { id: string; prompt: string; choices: Choice[] }

const QUESTIONS: Question[] = [
  {
    id: "familiarity",
    prompt: "[How well do you know the framework?]",
    choices: [
      { label: "[I've read it and watched the walkthroughs]", score: 2 },
      { label: "[I've skimmed it]", score: 1 },
      { label: "[This is my first look]", score: 0 },
    ],
  },
  {
    id: "group",
    prompt: "[Do you have the right group and a clear question to tackle?]",
    choices: [
      { label: "[Yes — people and topic are set]", score: 2 },
      { label: "[Roughly — still firming it up]", score: 1 },
      { label: "[Not yet]", score: 0 },
    ],
  },
  {
    id: "logistics",
    prompt: "[Is the time, space, and materials sorted?]",
    choices: [
      { label: "[All set — date booked, materials ready]", score: 2 },
      { label: "[Partially]", score: 1 },
      { label: "[Haven't started]", score: 0 },
    ],
  },
]

type Outcome = {
  tone: "blue" | "muted"
  badge: string
  title: string
  body: string
  primary: string
  secondary: string
}

function getOutcome(total: number): Outcome {
  if (total >= 5) {
    return {
      tone: "blue",
      badge: "You're ready",
      title: "[You're set to facilitate]",
      body: "[You have what you need. Jump into the session steps and run it with confidence.]",
      primary: "Go to the session steps",
      secondary: "Open the facilitator guide",
    }
  }
  if (total >= 3) {
    return {
      tone: "muted",
      badge: "Almost there",
      title: "[A little prep left]",
      body: "[You're close. Tighten up the gaps above — revisit the walkthrough videos and lock in your logistics — then you'll be ready.]",
      primary: "Review the walkthroughs",
      secondary: "Download the materials",
    }
  }
  return {
    tone: "muted",
    badge: "Let's talk first",
    title: "[Want a hand getting started?]",
    body: "[No rush. If you'd rather not go it alone, we can walk you through it or run the first session with you.]",
    primary: "Book a call",
    secondary: "Start with the basics",
  }
}

export function VectorReadiness() {
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const answeredCount = Object.keys(answers).length
  const complete = answeredCount === QUESTIONS.length
  const total = Object.values(answers).reduce((sum, n) => sum + n, 0)
  const outcome = complete ? getOutcome(total) : null

  return (
    <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
      <div className="flex items-center justify-between">
        <WireBadge tone="blue">Readiness check</WireBadge>
        <span className="font-mono text-xs text-neutral-500">
          {answeredCount}/{QUESTIONS.length} answered
        </span>
      </div>

      {QUESTIONS.map((q, qi) => (
        <fieldset key={q.id} className="flex flex-col gap-2 border-0 p-0">
          <legend className="mb-1 text-sm font-semibold text-neutral-800">
            {`${qi + 1}. ${q.prompt}`}
          </legend>
          <div className="flex flex-col gap-2">
            {q.choices.map((c, ci) => {
              const selected = answers[q.id] === c.score
              return (
                <label
                  key={ci}
                  className={`flex cursor-pointer items-center gap-3 rounded-md border-2 border-dashed px-4 py-2.5 text-sm ${
                    selected
                      ? "border-blue-500 bg-blue-50 text-neutral-800"
                      : "border-neutral-300 bg-white text-neutral-700"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={selected}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: c.score }))}
                    className="size-4 shrink-0 accent-blue-600"
                  />
                  {c.label}
                </label>
              )
            })}
          </div>
        </fieldset>
      ))}

      {/* Result panel */}
      {outcome ? (
        <div className="mt-2 flex flex-col gap-3 rounded-md border-l-4 border-blue-500 bg-white p-5">
          <WireBadge tone={outcome.tone}>{outcome.badge}</WireBadge>
          <WireHeading level={4}>{outcome.title}</WireHeading>
          <WireText className="text-sm">{outcome.body}</WireText>
          <div className="flex flex-wrap gap-3 pt-1">
            <WireButton variant="primary">{outcome.primary}</WireButton>
            <WireButton variant="ghost">{outcome.secondary}</WireButton>
          </div>
        </div>
      ) : (
        <p className="rounded-md border-2 border-dashed border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-500">
          [Answer the questions above to see where to start.]
        </p>
      )}
    </div>
  )
}
