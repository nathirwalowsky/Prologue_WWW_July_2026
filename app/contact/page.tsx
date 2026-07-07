"use client"

import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireButton, WireConsent, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"
import { useLanguage } from "@/contexts/language-context"

export default function ContactWireframeV2() {
  const { t } = useLanguage()

  const fields = [
    t.contact.fieldFullName,
    t.contact.fieldEmail,
    t.contact.fieldCompany,
    t.contact.fieldMessage,
  ]

  return (
    <SiteShell pageName="Contact">
      <PageHeader
        label={t.contact.pageLabel}
        title={t.pageHeader.contact.title}
        intro={t.pageHeader.contact.intro}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Form */}
          <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6 md:p-8">
            <WireLabel>{t.contact.formLabel}</WireLabel>
            {fields.map((field) => (
              <label key={field} className="flex flex-col gap-2">
                <span className="text-sm font-medium text-neutral-700">{field}</span>
                <span
                  className={
                    field === t.contact.fieldMessage
                      ? "h-28 rounded-md border-2 border-dashed border-neutral-300 bg-white"
                      : "h-11 rounded-md border-2 border-dashed border-neutral-300 bg-white"
                  }
                  aria-hidden="true"
                />
              </label>
            ))}

            {/* GDPR consent */}
            <div className="flex flex-col gap-3 border-t border-dashed border-neutral-300 pt-4">
              <WireConsent required>
                {t.contact.consentRequired}{" "}
                <span className="underline">Privacy Policy</span> (GDPR / RODO).
              </WireConsent>
              <WireConsent>
                {t.contact.consentMarketing}
              </WireConsent>
            </div>

            <WireButton variant="primary">{t.contact.sendMessage}</WireButton>
            <WireText className="text-xs">
              [* Required. Your data is controlled by Prologue Agency. You have the right to access,
              rectify, and erase your data — see our Privacy Policy.]
            </WireText>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <WireLabel>{t.contact.directLabel}</WireLabel>
              <WireHeading level={3}>{t.contact.otherWays}</WireHeading>
            </div>
            {["Email", "Phone", "Office", "Social"].map((item) => (
              <div
                key={item}
                className="flex flex-col gap-1 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
              >
                <span className="text-sm font-semibold text-neutral-700">{item}</span>
                <WireText className="text-sm">[{item} details]</WireText>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
