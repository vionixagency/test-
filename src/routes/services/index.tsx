import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { ArrowIcon, ChartIcon, ChipIcon, WindowIcon } from "@/components/Icons";
import { Btn } from "@/components/Btn";
import { aiServices, marketingServices, webServices } from "@/content/services";
import { BASE, orgLd } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Services | Vionix",
      description:
        "Explore Vionix digital marketing, web, e-commerce and supporting AI services. Each capability has a dedicated page for clarity and search visibility.",
      path: "/services/",
      jsonLd: {
        ...orgLd,
        "@graph": [
          ...orgLd["@graph"],
          {
            "@type": "CollectionPage",
            "@id": `${BASE}/services/#webpage`,
            url: `${BASE}/services/`,
            name: "Services | Vionix",
            description: "Explore Vionix digital marketing, web, e-commerce and supporting AI services. Each capability has a dedicated page.",
            isPartOf: { "@id": `${BASE}/#website` },
          },
        ],
      },
    }),
  component: ServicesIndex,
});

function CardGroup({
  title,
  kicker,
  items,
  icon,
}: {
  title: string;
  kicker: string;
  items: typeof marketingServices;
  icon: ReactNode;
}) {
  return (
    <section className="section-sm">
      <div className="vx-wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">{kicker}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </div>
        <div className="grid-3">
          {items.map((s) => (
            <Link key={s.slug} className="card tilt" to="/services/$slug" params={{ slug: s.slug }}>
              <div className="card-glare" />
              <div className="card-icon">{icon}</div>
              <span className="tag">{kicker}</span>
              <h3 className="h3">{s.name}</h3>
              <p>{s.lead}</p>
              <span className="text-link">
                Explore <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesIndex() {
  return (
    <SiteShell scene="services">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title="Digital marketing, web and supporting AI."
        lead="Explore the focused capabilities behind the Vionix growth system. Each service has its own page so visitors and search engines can understand exactly what it does."
      />
      <CardGroup
        kicker="Digital Marketing"
        title="Build visibility, demand and conversion."
        items={marketingServices}
        icon={<ChartIcon />}
      />
      <CardGroup kicker="Web & Product" title="Build the experience people land on." items={webServices} icon={<WindowIcon />} />
      <CardGroup kicker="AI Services" title="Use AI where it removes useful friction." items={aiServices} icon={<ChipIcon />} />
      <section className="section section-tint">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Need a combination?</span>
          <h2 className="h2">
            Tell us the problem. We will map the <span className="grad-text">system.</span>
          </h2>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Get Free Audit</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
