import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/case-study-data"
import { CaseStudyPage } from "@/components/case-study-page"

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.client} — Case Study | Prologue`,
    description: cs.subline,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyPage cs={cs} />
}
