import { SiteShell } from "@/components/site-shell"
import { WireButton, WireConsent, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"

const textFields = [
  { label: "Email", placeholder: "[you@company.com]" },
  { label: "Website", placeholder: "[https://yourcompany.com]" },
  { label: "Phone number", placeholder: "[+1 555 000 0000]" },
  { label: "TAX identification number", placeholder: "[VAT / TAX ID]" },
]

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
  return (
    <SiteShell pageName="Become a Partner">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4">
          {/* Short copy */}
          <div className="mb-10 flex flex-col items-start gap-4">
            <WireLabel>Become a Partner</WireLabel>
            <WireHeading level={1} className="text-balance">
              Let&apos;s build great projects together.
            </WireHeading>
            <WireText className="max-w-xl text-pretty text-lg">
              Want to work with Prologue Agency to deliver the best projects — or use our framework
              with your own clients? Tell us a little about your company and let&apos;s connect.
            </WireText>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6 md:p-8">
            <WireLabel>Partner inquiry</WireLabel>

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
              <span className="text-sm font-medium text-neutral-700">Type of company</span>
              <span className="flex h-11 items-center justify-between rounded-md border-2 border-dashed border-neutral-300 bg-white px-3 font-mono text-xs text-neutral-400">
                [Select company type]
                <span aria-hidden="true">▾</span>
              </span>
              <span className="flex flex-wrap gap-2 pt-1">
                {companyTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                  >
                    {type}
                  </span>
                ))}
              </span>
            </label>

            {/* GDPR consent */}
            <div className="flex flex-col gap-3 border-t border-dashed border-neutral-300 pt-4">
              <WireConsent required>
                I consent to the processing of my company and personal data by Prologue Agency to
                review and respond to this partnership inquiry, in accordance with the{" "}
                <span className="underline">Privacy Policy</span> (GDPR / RODO).
              </WireConsent>
              <WireConsent>
                I would like to receive partnership updates and marketing communications from
                Prologue Agency. I can withdraw this consent at any time.
              </WireConsent>
            </div>

            <WireButton variant="primary">Submit Partner Inquiry</WireButton>
            <WireText className="text-xs">
              [* Required. Prologue Agency is the controller of your data. You have the right to
              access, rectify, and erase it — see our Privacy Policy. We&apos;ll get back to you
              within X business days.]
            </WireText>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
