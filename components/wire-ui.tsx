// UI-pattern wireframe components for presenting data without graphic placeholders.
// Still intentionally low-fidelity (dashed borders, greyscale, bracketed copy),
// but structured as real UI: stat cards, tables, tabs, accordions, schematic
// charts, timelines, and progress/badges.

"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { WireHeading, WireText } from "@/components/wireframe-kit"

/* ------------------------------------------------------------------ */
/* Stat / metric cards                                                 */
/* ------------------------------------------------------------------ */

export type WireStat = {
  value: string
  label: string
  trend?: string
  trendDir?: "up" | "down"
}

export function WireStatGrid({ stats }: { stats: WireStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-5"
        >
          <span className="text-3xl font-semibold tracking-tight text-neutral-800">{s.value}</span>
          <span className="text-sm text-neutral-500">{s.label}</span>
          {s.trend ? (
            <span
              className={cn(
                "mt-1 inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 font-mono text-xs",
                s.trendDir === "down"
                  ? "bg-neutral-200 text-neutral-600"
                  : "bg-blue-100 text-blue-700",
              )}
            >
              <span aria-hidden="true">{s.trendDir === "down" ? "↓" : "↑"}</span>
              {s.trend}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Data table                                                          */
/* ------------------------------------------------------------------ */

export function WireTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: React.ReactNode[][]
}) {
  return (
    <div className="overflow-hidden rounded-md border-2 border-dashed border-neutral-300">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b-2 border-dashed border-neutral-300 bg-neutral-100">
            {columns.map((c, i) => (
              <th
                key={i}
                className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-neutral-500"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={cn(
                "border-b border-dashed border-neutral-200 last:border-0",
                ri % 2 === 1 && "bg-neutral-50",
              )}
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-neutral-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Tabs                                                                */
/* ------------------------------------------------------------------ */

export function WireTabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[]
}) {
  const [active, setActive] = useState(0)
  return (
    <div className="rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50">
      <div role="tablist" className="flex flex-wrap gap-1 border-b-2 border-dashed border-neutral-300 p-2">
        {tabs.map((t, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              i === active
                ? "bg-blue-100 text-blue-800"
                : "text-neutral-600 hover:bg-neutral-100",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="p-6">
        {tabs[active].content}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Accordion                                                           */
/* ------------------------------------------------------------------ */

export function WireAccordion({
  items,
}: {
  items: { title: string; body: string }[]
}) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="overflow-hidden rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-neutral-800">{item.title}</span>
              <span className="font-mono text-xl text-neutral-400" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-dashed border-neutral-300 px-5 py-4">
                <WireText>{item.body}</WireText>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Schematic bar chart                                                 */
/* ------------------------------------------------------------------ */

export function WireBarChart({
  data,
  caption,
}: {
  data: { label: string; value: number }[]
  caption?: string
}) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
      <div className="flex h-48 items-end gap-3">
        {data.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 items-end">
              <div
                className="w-full rounded-t border-2 border-blue-300 bg-blue-100"
                style={{ height: `${(d.value / max) * 100}%` }}
                aria-label={`${d.label}: ${d.value}`}
              />
            </div>
            <span className="font-mono text-xs text-neutral-500">{d.label}</span>
          </div>
        ))}
      </div>
      {caption ? (
        <p className="mt-4 text-center font-mono text-xs uppercase tracking-wide text-neutral-400">
          {caption}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Schematic donut chart                                               */
/* ------------------------------------------------------------------ */

export function WireDonut({
  segments,
  centerLabel,
}: {
  segments: { label: string; value: number }[]
  centerLabel?: string
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const shades = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#cbd5e1"]
  let acc = 0
  const stops = segments
    .map((s, i) => {
      const start = (acc / total) * 100
      acc += s.value
      const end = (acc / total) * 100
      return `${shades[i % shades.length]} ${start}% ${end}%`
    })
    .join(", ")

  return (
    <div className="flex flex-col items-center gap-5 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 sm:flex-row sm:gap-8">
      <div
        className="relative size-40 shrink-0 rounded-full"
        style={{ background: `conic-gradient(${stops})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-[22%] flex items-center justify-center rounded-full border-2 border-dashed border-neutral-300 bg-neutral-50 text-center font-mono text-xs text-neutral-500">
          {centerLabel ?? ""}
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {segments.map((s, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
            <span
              className="size-3 rounded-sm"
              style={{ backgroundColor: shades[i % shades.length] }}
              aria-hidden="true"
            />
            <span>{s.label}</span>
            <span className="font-mono text-xs text-neutral-400">
              {Math.round((s.value / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline / steps                                                    */
/* ------------------------------------------------------------------ */

export function WireTimeline({
  steps,
}: {
  steps: { title: string; body: string }[]
}) {
  return (
    <ol className="relative flex flex-col gap-8 border-l-2 border-dashed border-neutral-300 pl-8">
      {steps.map((s, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[42px] flex size-7 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-100 font-mono text-xs font-semibold text-blue-800">
            {i + 1}
          </span>
          <WireHeading level={4}>{s.title}</WireHeading>
          <WireText className="mt-1 text-sm">{s.body}</WireText>
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Step accordion (numbered, expandable, holds long text + video)      */
/* ------------------------------------------------------------------ */

export type WireStep = {
  title: string
  duration?: string
  /** Long-form body. Pass a string or rich nodes (paragraphs, lists, etc.). */
  body: React.ReactNode
  /** When true, shows a video placeholder slot inside the expanded panel. */
  hasVideo?: boolean
  videoLabel?: string
}

export function WireStepAccordion({
  steps,
  defaultOpen = 0,
}: {
  steps: WireStep[]
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((s, i) => {
        const isOpen = open === i
        return (
          <li
            key={i}
            className="overflow-hidden rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-100 font-mono text-sm font-semibold text-blue-800">
                {i + 1}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="font-semibold text-neutral-800">{s.title}</span>
                {s.duration ? (
                  <span className="font-mono text-xs text-neutral-400">{s.duration}</span>
                ) : null}
              </span>
              <span className="font-mono text-xl text-neutral-400" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-dashed border-neutral-300 px-4 py-5 sm:px-5">
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  {s.hasVideo ? (
                    <div className="w-full shrink-0 md:w-1/2">
                      <div className="relative flex aspect-video items-center justify-center rounded-md border-2 border-dashed border-neutral-300 bg-neutral-100">
                        <span className="flex size-12 items-center justify-center rounded-full border-2 border-neutral-400 bg-white font-mono text-neutral-500">
                          ▶
                        </span>
                        <span className="absolute bottom-2 left-2 font-mono text-xs text-neutral-400">
                          {s.videoLabel ?? "[Step walkthrough video]"}
                        </span>
                      </div>
                    </div>
                  ) : null}
                  <div className="flex-1 text-sm leading-relaxed text-neutral-700">{s.body}</div>
                </div>
              </div>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Checklist (interactive, grouped, tickable)                          */
/* ------------------------------------------------------------------ */

export type WireChecklistGroup = {
  title: string
  items: string[]
}

export function WireChecklist({ groups }: { groups: WireChecklistGroup[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const allItems = groups.flatMap((g, gi) => g.items.map((_, ii) => `${gi}-${ii}`))
  const doneCount = allItems.filter((key) => checked[key]).length

  return (
    <div className="flex flex-col gap-6 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
      <div className="flex items-center justify-between">
        <WireBadge tone="blue">Facilitator checklist</WireBadge>
        <span className="font-mono text-xs text-neutral-500">
          {doneCount}/{allItems.length} done
        </span>
      </div>

      {groups.map((group, gi) => (
        <fieldset key={gi} className="flex flex-col gap-2 border-0 p-0">
          <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {group.title}
          </legend>
          {group.items.map((item, ii) => {
            const key = `${gi}-${ii}`
            const isChecked = !!checked[key]
            return (
              <label
                key={key}
                className="flex cursor-pointer items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white px-4 py-3"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))}
                  className="mt-0.5 size-4 shrink-0 accent-blue-600"
                />
                <span
                  className={cn(
                    "text-sm",
                    isChecked ? "text-neutral-400 line-through" : "text-neutral-700",
                  )}
                >
                  {item}
                </span>
              </label>
            )
          })}
        </fieldset>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Badge + progress / meter                                            */
/* ------------------------------------------------------------------ */

export function WireBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode
  tone?: "neutral" | "blue" | "muted"
}) {
  const tones = {
    neutral: "border-neutral-300 bg-neutral-100 text-neutral-600",
    blue: "border-blue-300 bg-blue-100 text-blue-700",
    muted: "border-neutral-200 bg-neutral-50 text-neutral-400",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}

export function WireProgress({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-700">{label}</span>
        <span className="font-mono text-xs text-neutral-400">{value}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
        <div
          className="h-full rounded-full border-r-2 border-blue-300 bg-blue-200"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
