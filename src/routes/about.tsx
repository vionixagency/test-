import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { ChartIcon } from "@/components/Icons";
import { GlobeMount } from "@/components/scenes";
import { FOUNDER_URL } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Vionix | Founder & Approach",
      description: "Meet Vionix, its founder Faysal Talukder, principles and global-first delivery approach.",
      path: "/about/",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell scene="quiet">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <PageHero
        eyebrow="About Vionix"
        title="A growth partner built around clarity."
        lead="Vionix was created around a simple idea: clients should not have to stitch together disconnected marketing, web and data decisions to move the business forward."
        visual={
          <div className="hero-stage" style={{ minHeight: 280 }}>
            <GlobeMount />
          </div>
        }
      />
      <section className="section-sm">
        <div className="vx-wrap grid-2" style={{ alignItems: "center" }}>
          <div className="card">
            <div className="portrait-placeholder portrait-large">
              <div className="portrait-head" />
              <div className="portrait-body" />
            </div>
            <div className="small">Founder & CEO · Replace with approved founder photo later.</div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Founder & CEO</span>
            <h2 className="h2">Faysal Talukder</h2>
            <p className="lead">
              Founder of Vionix, focused on building a global-first digital agency that combines useful strategy with clean
              execution.
            </p>
            <p>
              Personal website:{" "}
              <a className="text-link" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">
                faysaltalukder.github.io/faysaldigital
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Our principles</span>
              <h2 className="h2">
                Simple systems. Clear communication. Useful <span className="grad-text">work.</span>
              </h2>
            </div>
          </div>
          <div className="grid-3">
            {[
              ["Business-first", "Begin with the business problem and customer journey, then choose the digital work."],
              ["Evidence-led", "Prefer measurable hypotheses, clear reporting and honest labels over invented proof."],
              ["Modern, not gimmicky", "Interfaces can feel futuristic while staying calm, accessible and useful."],
            ].map(([t, p]) => (
              <div className="card tilt" key={t}>
                <div className="card-icon">
                  <ChartIcon />
                </div>
                <h3 className="h3">{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="vx-wrap grid-2" style={{ alignItems: "center" }}>
          <div className="reveal">
            <span className="eyebrow">Where we work</span>
            <h2 className="h2">
              Global-first <span className="grad-text">delivery.</span>
            </h2>
            <p className="lead">
              Vionix is designed for businesses across Europe, Australia, the Middle East and beyond, while remaining open to
              suitable local projects.
            </p>
          </div>
          <div className="card reveal">
            <h3 className="h3">Typical focus</h3>
            <ul className="package-list">
              <li>E-commerce & online businesses</li>
              <li>Real estate</li>
              <li>Startups & SMEs</li>
              <li>Businesses entering a new growth phase</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Work with Vionix</span>
          <h2 className="h2">
            Bring the problem. We will map the next <span className="grad-text">steps.</span>
          </h2>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Get Free Audit</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
