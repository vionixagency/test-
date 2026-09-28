import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { FaqList } from "@/components/FaqList";
import { SocialRow } from "@/components/SocialRow";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Vionix | Free Growth Audit",
      description: "Contact Vionix for a free growth audit or a digital growth, web or supporting AI enquiry.",
      path: "/contact/",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell scene="quiet">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation."
        lead="Tell us what is happening in the business, what you want to improve and where the website currently sits."
      />
      <section className="section-sm">
        <div className="vx-wrap audit-wrap">
          <div className="audit-panel reveal">
            <span className="eyebrow">Free Growth Audit</span>
            <h2 className="h2">
              Need a clearer next <span className="grad-text">step?</span>
            </h2>
            <p>
              Start with a free growth audit, or contact us directly. We can begin with the problem even if you are not sure
              which service you need.
            </p>
            <ul className="audit-points">
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
            <div style={{ marginTop: 22 }}>
              <SocialRow />
            </div>
          </div>
          <div className="form-panel reveal">
            <LeadForm submitLabel="Send Enquiry" />
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h2">
                Before you reach <span className="grad-text">out.</span>
              </h2>
            </div>
          </div>
          <FaqList
            idPrefix="contact"
            items={[
              {
                q: "Do you work with businesses outside Bangladesh?",
                a: "Yes. Vionix is designed as a global-first agency, with Europe and Australia as priority regions and suitable projects elsewhere.",
              },
              {
                q: "Can I start with only one service?",
                a: "Yes. A project can start focused and expand later when a connected system creates a clear benefit.",
              },
              {
                q: "What happens after the form?",
                a: "The static form prepares an email to Vionix. A dedicated form backend can be connected later without redesigning the UX.",
              },
            ]}
          />
        </div>
      </section>
    </SiteShell>
  );
}
