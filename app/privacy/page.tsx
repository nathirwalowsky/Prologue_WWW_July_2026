import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireHeading, WireText } from "@/components/wireframe-kit"

const sections = [
  "Information We Collect",
  "How We Use Your Information",
  "Cookies & Tracking",
  "Data Sharing & Third Parties",
  "Data Retention",
  "Your Rights",
  "Changes to This Policy",
  "Contact Us",
]

export default function PrivacyWireframeV2() {
  return (
    <SiteShell pageName="Privacy Policy">
      <PageHeader label="Legal" title="Privacy Policy" intro="[Last updated: date placeholder]" />

      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4">
          {sections.map((section, i) => (
            <div key={section} className="flex flex-col gap-3">
              <WireHeading level={3}>
                {i + 1}. {section}
              </WireHeading>
              <WireText>[Placeholder body text explaining this part of the privacy policy.]</WireText>
              <WireText>[Additional detail paragraph as needed.]</WireText>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
