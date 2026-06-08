import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireBox, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"
import { WireBadge } from "@/components/wire-ui"

const products = [
  { href: "/product", label: "[Product One]", desc: "[One-line description of what this product helps with.]" },
  { href: "/product", label: "[Product Two]", desc: "[One-line description of what this product helps with.]" },
  { href: "/product", label: "[Product Three]", desc: "[One-line description of what this product helps with.]" },
  { href: "/product", label: "[Product Four]", desc: "[One-line description of what this product helps with.]" },
]

const chooseGuide = [
  {
    situation: "[Just exploring]",
    heading: "[New to all this?]",
    text: "[Start with the Vector workshop to align your team and find your direction before committing to a product.]",
    cta: "Start with Vector",
    href: "/vector",
  },
  {
    situation: "[Have a clear goal]",
    heading: "[Know what you need?]",
    text: "[Dive into our blog for insights, case studies, and guidance that help you decide which direction is right for you.]",
    cta: "Read the blog",
    href: "/blog",
  },
  {
    situation: "[Still unsure]",
    heading: "[Want a recommendation?]",
    text: "[Tell us about your situation and we'll point you to the right product or workshop — no pressure.]",
    cta: "Talk to us",
    href: "/contact",
  },
]

export default function ProductsOverview() {
  return (
    <SiteShell pageName="Products">
      <PageHeader
        label="Products"
        title="Everything We Offer"
        description="[A short intro: our products and the Vector workshop, all in one place. Pick the path that fits where you are.]"
      />

      {/* PRODUCTS GRID */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center gap-2">
            <WireLabel>Products</WireLabel>
            <span className="font-mono text-xs text-neutral-400">[Core offerings]</span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Link key={i} href={p.href} className="group">
                <WireBox className="flex h-full flex-col gap-3 bg-white transition-colors group-hover:border-neutral-400">
                  <div className="flex items-center gap-2">
                    <WireBadge tone="blue">[Product]</WireBadge>
                    <span className="font-mono text-xs text-neutral-400">{`[0${i + 1}]`}</span>
                  </div>
                  <WireHeading level={3}>{p.label}</WireHeading>
                  <WireText className="text-sm">{p.desc}</WireText>
                  <span className="mt-auto pt-2 font-medium text-blue-700">Learn more →</span>
                </WireBox>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE — guidance to reduce decision paralysis */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-3">
            <WireLabel>How to choose</WireLabel>
            <WireHeading level={2}>Not Sure Where to Start?</WireHeading>
            <WireText className="max-w-2xl">
              [A quick guide to point you in the right direction based on where you are right now.]
            </WireText>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {chooseGuide.map((g, i) => (
              <WireBox key={i} className="flex h-full flex-col gap-3 bg-white">
                <span className="font-mono text-xs uppercase tracking-wide text-blue-600">
                  {g.situation}
                </span>
                <WireHeading level={3}>{g.heading}</WireHeading>
                <WireText className="text-sm">{g.text}</WireText>
                <Link href={g.href} className="mt-auto pt-2 font-medium text-blue-700">
                  {g.cta} →
                </Link>
              </WireBox>
            ))}
          </div>
        </div>
      </section>

      {/* VECTOR — highlighted separately */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center gap-2">
            <WireLabel>Workshop</WireLabel>
            <span className="font-mono text-xs text-neutral-400">[Facilitated session]</span>
          </div>
          <Link href="/vector" className="group block">
            <WireBox className="flex flex-col gap-4 bg-white transition-colors group-hover:border-neutral-400 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <WireBadge tone="blue">Vector</WireBadge>
                  <span className="font-mono text-xs text-neutral-400">[Flagship workshop]</span>
                </div>
                <WireHeading level={3}>The Vector Workshop</WireHeading>
                <WireText className="max-w-xl text-sm">
                  [A short line on what Vector is and who it&apos;s for — the hands-on session that
                  complements the products above.]
                </WireText>
              </div>
              <span className="shrink-0 font-medium text-blue-700">Explore Vector →</span>
            </WireBox>
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
