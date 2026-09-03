"use client"

import { jsPDF } from "jspdf"
import { WireBadge } from "@/components/wire-ui"

type ChecklistGroup = {
  title: string
  items: string[]
}

const CHECKLIST_TITLE = "Vector Workshop — Facilitator Checklist"

const CHECKLIST: ChecklistGroup[] = [
  {
    title: "Before the session",
    items: [
      "[Read through the full framework]",
      "[Watch the facilitator walkthrough videos]",
      "[Pick a date and book the room or call]",
      "[Invite participants with a clear agenda]",
      "Osoba decyzyjna przy stole",
      "Wysyłka Kart Celu przed spotkaniem",
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
      "[Open with the framing from Stage 1]",
      "[Assign a note-taker for decisions and owners]",
      "Osoba zapisująca decyzje",
      "Data spotkania kontrolnego",
    ],
  },
]

function downloadBlob(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function buildMarkdown() {
  const lines: string[] = [`# ${CHECKLIST_TITLE}`, ""]
  for (const group of CHECKLIST) {
    lines.push(`## ${group.title}`, "")
    for (const item of group.items) {
      lines.push(`- [ ] ${item}`)
    }
    lines.push("")
  }
  return lines.join("\n")
}

function buildPdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4" })
  const marginX = 48
  let y = 64

  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  doc.text(CHECKLIST_TITLE, marginX, y)
  y += 28

  for (const group of CHECKLIST) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(13)
    y += 12
    doc.text(group.title, marginX, y)
    y += 18

    doc.setFont("helvetica", "normal")
    doc.setFontSize(11)
    for (const item of group.items) {
      doc.rect(marginX, y - 9, 11, 11)
      doc.text(item, marginX + 20, y)
      y += 20
    }
  }

  doc.save("vector-workshop-checklist.pdf")
}

export function VectorChecklist() {
  return (
    <div className="flex flex-col gap-6 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
      <div className="flex items-center justify-between gap-3">
        <WireBadge tone="blue">Facilitator checklist</WireBadge>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={buildPdf}
            className="flex items-center gap-1.5 rounded-md border-2 border-blue-600 bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
          >
            <span aria-hidden="true">⤓</span> PDF
          </button>
          <button
            type="button"
            onClick={() => downloadBlob(buildMarkdown(), "vector-workshop-checklist.md", "text/markdown")}
            className="flex items-center gap-1.5 rounded-md border-2 border-blue-600 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-50"
          >
            <span aria-hidden="true">⤓</span> Markdown
          </button>
        </div>
      </div>

      {CHECKLIST.map((group, gi) => (
        <div key={gi} className="flex flex-col gap-1">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500">{group.title}</p>
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {group.items.map((item, ii) => (
              <div
                key={ii}
                className="flex items-start gap-3 border-b border-neutral-200 py-2.5 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span
                  className="mt-0.5 size-4 shrink-0 rounded border-2 border-neutral-300"
                  aria-hidden="true"
                />
                <span className="text-sm text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
