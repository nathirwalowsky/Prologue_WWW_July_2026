import { SiteShell, PageHeader } from "@/components/site-shell"
import { WireButton, WireConsent, WireHeading, WireLabel, WireText } from "@/components/wireframe-kit"

const fields = ["Full name", "Email", "Company", "Message"]

export default function ContactWireframeV2() {
  return (
    <SiteShell pageName="Contact">
      <PageHeader
        label="Contact"
        title="[Contact — let's start a conversation]"
        intro="[Reassure the visitor about response time and what happens next.]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Form */}
          <div className="flex flex-col gap-5 rounded-md border-2 border-dashed border-neutral-400 bg-neutral-50 p-6 md:p-8">
            <WireLabel>Contact form</WireLabel>
            {fields.map((field) => (
              <label key={field} className="flex flex-col gap-2">
                <span className="text-sm font-medium text-neutral-700">{field}</span>
                <span
                  className={
                    field === "Message"
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
                I consent to the processing of my personal data by Prologue Agency for the purpose of
                responding to my inquiry, in accordance with the{" "}
                <span className="underline">Privacy Policy</span> (GDPR / RODO).
              </WireConsent>
              <WireConsent>
                I would like to receive occasional updates and marketing communications from Prologue
                Agency. I can withdraw this consent at any time.
              </WireConsent>
            </div>

            <WireButton variant="primary">Send Message</WireButton>
            <WireText className="text-xs">
              [* Required. Your data is controlled by Prologue Agency. You have the right to access,
              rectify, and erase your data — see our Privacy Policy.]
            </WireText>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <WireLabel>Direct</WireLabel>
              <WireHeading level={3}>Other Ways to Reach Us</WireHeading>
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
