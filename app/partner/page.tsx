"use client"

import { SiteShell } from "@/components/site-shell"
import { WireButton, WireConsent, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"
import { useLanguage } from "@/contexts/language-context"

const companyTypes = [
  "Agency",
  "Consulting firm",
  "Startup",
  "Enterprise / Corporation",
  "Freelancer / Independent",
  "Non-profit",
  "Other",
]

export default function PartnerWireframeV2() {
  const { t } = useLanguage()

  const textFields = [
    { label: t.partner.fieldEmail, placeholder: "[you@company.com]" },
    { label: t.partner.fieldWebsite, placeholder: "[https://yourcompany.com]" },
    { label: t.partner.fieldPhone, placeholder: "[+1 555 000 0000]" },
    { label: t.partner.fieldTAX, placeholder: "[VAT / TAX ID]" },
  ]

  return (
    <SiteShell pageName="Become a Partner">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4">
          {/* Short copy */}
          <div className="mb-10 flex flex-col items-start gap-4">
            <WireLabel>{t.partner.pageLabel}</WireLabel>
            <WireHeading level={1} className="text-balance">
              {t.partner.heading}
            </WireHeading>
            <WireText className="max-w-xl text-pretty text-lg">
              {t.partner.intro}
            </WireText>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6 md:p-8">
            <WireLabel>{t.partner.formLabel}</WireLabel>

            {textFields.map((field) => (
              <label key={field.label} className="flex flex-col gap-2">
                <span className="text-sm font-medium text-neutral-700">{field.label}</span>
                <span className="flex h-11 items-center rounded-md border-2 border-dashed border-neutral-300 bg-white px-3 font-mono text-xs text-neutral-400">
                  {field.placeholder}
                </span>
              </label>
            ))}

            {/* Company type */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-neutral-700">{t.partner.companyType}</span>
              <span className="flex h-11 items-center justify-between rounded-md border-2 border-dashed border-neutral-300 bg-white px-3 font-mono text-xs text-neutral-400">
                {t.partner.selectType}
                <span aria-hidden="true">▾</span>
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                [Options: {companyTypes.join(", ")}]
              </span>
            </label>

            {/* GDPR consent */}
            <div className="flex flex-col gap-3 border-t border-dashed border-neutral-300 pt-4">
              <WireConsent required>
                {t.partner.consentRequired}
              </WireConsent>
              <WireConsent>
                {t.partner.consentMarketing}
              </WireConsent>
            </div>

            <WireButton variant="primary">{t.partner.submit}</WireButton>
            <WireText className="text-xs">
              [* Required. Prologue Agency is the controller of your data. You have the right to
              access, rectify, and erase it — see our Privacy Policy.]
            </WireText>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
