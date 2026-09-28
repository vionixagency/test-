import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { FaqList } from "@/components/FaqList";
import { ChaosMount, GlobeMount, LiveFunnel, RocketMount } from "@/components/scenes";
import { faqsFor, serviceBySlug } from "@/content/services";
import { BASE, orgLd } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { ArrowIcon } from "@/components/Icons";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params }) => {
    const service = serviceBySlug[params.slug];
    if (!service) return {};
    return pageHead({
      title: service.title,
      description: service.description,
      path: `/services/${service.slug}/`,
      jsonLd: {
        ...orgLd,
        "@graph": [
          ...orgLd["@graph"],
          {
            "@type": "Service",
            "@id": `${BASE}/services/${service.slug}/#webpage`,
            url: `${BASE}/services/${service.slug}/`,
            name: service.title,
            description: service.lead,
            isPartOf: { "@id": `${BASE}/#website` },
            provider: { "@id": `${BASE}/#organization` },
            serviceType: service.name,
          },
        ],
      },
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const sceneVisual =
    service.scene === "seo" ? (
      <div className="hero-stage" style={{ minHeight: 280, padding: 16 }}>
        <ChaosMount />
      </div>
    ) : service.scene === "paid" ? (
      <div className="hero-stage" style={{ minHeight: 280 }}>
        <RocketMount />
      </div>
    ) : service.scene === "ai" ? (
      <div className="hero-stage" style={{ minHeight: 280 }}>
        <GlobeMount />
      </div>
    ) : service.scene === "web" ? (
      <div className="hero-stage" style={{ minHeight: 280, padding: 16 }}>
        <ChaosMount />
      </div>
    ) : undefined;

  return (
    <SiteShell scene={service.scene}>
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: service.name },
        ]}
      />
      <PageHero eyebrow="Service" title={service.name} lead={service.lead} visual={sceneVisual} />
      <section className="section-sm">
        <div className="vx-wrap service-layout">
          <article className="service-copy reveal">
            <span className="eyebrow">Why this matters</span>
            <p className="lead" style={{ marginTop: 14 }}>
              {service.why}
            </p>
            <h2 className="h2">What we look at</h2>
            <ul>
              {service.look.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="service-visual-block card" style={{ marginTop: 28 }}>
              <div className="section-head compact-head" style={{ marginBottom: 12 }}>
                <div>
                  <span className="eyebrow">Signal → action</span>
                  <h3 className="h3">A simple service workflow</h3>
                </div>
                <span className="small">Illustrative system</span>
              </div>
              <div className="mini-flow">
                <span>Current state</span>
                <i>→</i>
                <span>Priority</span>
                <i>→</i>
                <span>Execution</span>
                <i>→</i>
                <span>Learning</span>
              </div>
            </div>
            {service.scene === "paid" ? (
              <div style={{ marginTop: 28 }}>
                <LiveFunnel />
              </div>
            ) : null}
            <h2 className="h2">How the engagement works</h2>
            <div className="grid-2 service-steps">
              {[
                ["01", "Audit", "Review the current state, business context and user journey."],
                ["02", "Strategy", "Turn observations into a focused sequence of work."],
                ["03", "Execute", "Build or improve the relevant assets with clean implementation."],
                ["04", "Optimize", "Measure, learn and refine based on available evidence."],
              ].map(([n, t, p]) => (
                <div className="card" key={n}>
                  <span className="tag">{n}</span>
                  <h3 className="h3">{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <h2 className="h2">Who it is for</h2>
            <p>{service.who}</p>
            <h2 className="h2">FAQ</h2>
            <FaqList items={faqsFor(service)} idPrefix={service.slug} />
          </article>
          <aside className="service-sidebar">
            <div className="side-card sticky-card">
              <span className="eyebrow">Start here</span>
              <h3 className="h3" style={{ marginTop: 10 }}>
                Get a free growth audit.
              </h3>
              <p className="small">Tell us what you are trying to improve and we will help identify the first areas worth investigating.</p>
              <Btn href="/contact">Get Free Audit</Btn>
            </div>
            <div className="side-card">
              <span className="eyebrow">Related</span>
              <div className="related-links">
                {service.related.map((r) => (
                  <Link key={r.slug} className="text-link" to="/services/$slug" params={{ slug: r.slug }}>
                    {r.name} <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-sm section-alt">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Next step</span>
          <h2 className="h2">
            Make the next decision <span className="grad-text">easier.</span>
          </h2>
          <p className="lead center">Start with the business problem, not a package label.</p>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Start a Conversation</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
