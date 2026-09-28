import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead({
      title: "Work | Vionix",
      description: "Explore Vionix concept and internal work across e-commerce, real estate, web, marketing and AI workflows.",
      path: "/work/",
    }),
  component: WorkPage,
});

const projects = [
  ["E-commerce Growth System", "Search → product discovery → checkout → retention.", "Concept Project"],
  ["Real Estate Lead Generation", "Trust-first landing structure and enquiry flow.", "Concept Project"],
  ["AI Lead Triage Workflow", "Human-reviewed qualification and routing system.", "Internal Concept"],
  ["SaaS Website Redesign", "Information architecture and conversion-focused product storytelling.", "Concept Project"],
];

function WorkPage() {
  return (
    <SiteShell scene="quiet">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Work" }]} />
      <PageHero
        eyebrow="Concept Work"
        title="See how we think before we publish real client results."
        lead="Vionix uses clearly labelled concept and internal projects while the case-study library grows. No invented clients, awards, testimonials or performance numbers."
      />
      <section className="section-sm">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Current library</span>
              <h2 className="h2">Concepts explain the approach.</h2>
            </div>
            <p className="small">Real project evidence will replace concept work as it becomes available.</p>
          </div>
          <div className="grid-2">
            {projects.map(([t, p, tag]) => (
              <article className="card work-card tilt" key={t}>
                <div className="work-visual">
                  <svg viewBox="0 0 500 180" role="img" aria-label={`Illustrative ${t}`}>
                    <rect x="16" y="16" width="468" height="148" rx="16" fill="#0A1030" stroke="rgba(120,160,255,.25)" />
                    <path d="M50 130 C120 90 180 150 250 80 S380 40 450 70" fill="none" stroke="#22E4FF" strokeWidth="3" />
                    <circle cx="250" cy="80" r="6" fill="#FFB547" />
                  </svg>
                </div>
                <div className="work-body">
                  <span className="tag">{tag}</span>
                  <h3 className="h3">{t}</h3>
                  <p>{p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How we document work</span>
              <h2 className="h2">
                Context first. Evidence <span className="grad-text">second.</span>
              </h2>
            </div>
          </div>
          <div className="grid-3">
            {[
              ["01", "The business problem", "What the project was asked to change and why."],
              ["02", "The system", "What was built, changed or tested and how the pieces connected."],
              ["03", "The evidence", "Where real measurements exist, they will be shown with context and time period."],
            ].map(([n, t, p]) => (
              <div className="card" key={n}>
                <span className="tag">{n}</span>
                <h3 className="h3">{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-sm section-tint">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Build the next case study</span>
          <h2 className="h2">
            Bring a real business <span className="grad-text">problem.</span>
          </h2>
          <p className="lead center">We will define the scope before we define the visuals.</p>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Start a Conversation</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
