import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { compareRows, packages } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () =>
    pageHead({
      title: "Packages | Vionix",
      description: "Vionix Starter, Growth, Advanced and 360 packages with starting points and flexible scope.",
      path: "/packages/",
    }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <SiteShell scene="quiet">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Packages" }]} />
      <PageHero
        eyebrow="Packages"
        title="Clear starting points. Custom scope."
        lead="Four levels of support for businesses at different stages. Pricing is shown as a planning starting point, not an identical scope guarantee."
      />
      <section className="section-sm">
        <div className="vx-wrap">
          <div className="grid-4">
            {packages.map((p) => (
              <article className={`card package tilt${p.popular ? " popular" : ""}`} key={p.id}>
                {p.popular ? <span className="package-badge">Most Popular</span> : null}
                <span className="tag">{p.name}</span>
                <div className="price">
                  <strong>{p.price}</strong>
                  <span className="small">{p.period}</span>
                </div>
                <p>{p.blurb}</p>
                <ul className="package-list">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Btn href="/contact" variant={p.popular ? "primary" : "secondary"}>
                  {p.cta}
                </Btn>
              </article>
            ))}
          </div>
          <p className="small" style={{ marginTop: 16 }}>
            Starting prices are conceptual planning points and should be finalized after scope, geography, business model, media
            budget and workload are reviewed.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Compare scope</span>
              <h2 className="h2">
                More complexity on our side. More visibility for <span className="grad-text">you.</span>
              </h2>
            </div>
            <p className="small">Exact scope is agreed before work starts.</p>
          </div>
          <div className="table-wrap reveal">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Advanced</th>
                  <th>Vionix 360</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-sm section-tint">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Not sure?</span>
          <h2 className="h2">
            Start with the free <span className="grad-text">audit.</span>
          </h2>
          <p className="lead center">We can recommend a scope after reviewing the context.</p>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Get Free Audit</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
