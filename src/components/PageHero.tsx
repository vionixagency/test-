import type { ReactNode } from "react";
import { Btn } from "./Btn";

export function PageHero({
  eyebrow,
  title,
  lead,
  visual,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  visual?: ReactNode;
}) {
  const parts = title.split(" ");
  const last = parts.pop();
  const rest = parts.join(" ");
  return (
    <section className="page-hero">
      <div className="vx-wrap page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow intro-item intro-1">{eyebrow}</span>
          <h1 className="h1 intro-item intro-2">
            {rest ? rest + " " : ""}
            <span className="grad-text">{last}</span>
          </h1>
          <p className="lead intro-item intro-3">{lead}</p>
          <div className="hero-actions intro-item intro-4">
            <Btn href="/contact">Get Free Audit</Btn>
            <Btn href="/services" variant="secondary">
              Explore services
            </Btn>
          </div>
        </div>
        <div className="page-hero-visual intro-item intro-5">{visual ?? <DefaultVisual />}</div>
      </div>
    </section>
  );
}

function DefaultVisual() {
  return (
    <div className="hero-stage" style={{ minHeight: 280, height: "100%" }}>
      <div className="hero-floor" />
      <div
        className="visual-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 22, position: "relative", zIndex: 1 }}
      >
        {[
          ["Discover", "Understand the business"],
          ["Prioritize", "Choose the next useful move"],
          ["Execute", "Build with clean implementation"],
          ["Optimize", "Measure and improve"],
        ].map(([t, s]) => (
          <div key={t} className="card" style={{ minHeight: 110 }}>
            <strong>{t}</strong>
            <div className="metric-track">
              <i style={{ width: "64%" }} />
            </div>
            <span className="small">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <div className="breadcrumbs">
      <div className="vx-wrap">
        <nav aria-label="Breadcrumb">
          {items.map((item, i) => (
            <span key={item.label}>
              {i > 0 ? <span> › </span> : null}
              {item.href && i < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
