import { useEffect, useRef, useState } from "react";
import { getEngine } from "./SiteShell";

export function GlobeMount() {
  const ref = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = window.setTimeout(() => {
      try {
        const c = document.createElement("canvas");
        if (!(c.getContext("webgl2") || c.getContext("webgl"))) setFallback(true);
      } catch {
        setFallback(true);
      }
      getEngine()?.attachGlobe(el);
    }, 420);
    return () => {
      window.clearTimeout(t);
      getEngine()?.attachGlobe(null);
    };
  }, []);

  return (
    <div className="scene-mount" ref={ref} aria-label="Interactive globe of Vionix global reach">
      {fallback ? <GlobeSvg /> : <GlobeSvg />}
    </div>
  );
}

export function GlobeSvg() {
  return (
    <svg className="globe-fallback" viewBox="0 0 320 320" role="img" aria-label="Dotted globe — Europe, Australia, UAE, Qatar, Bangladesh">
      <defs>
        <radialGradient id="gg" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#22E4FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="118" fill="url(#gg)" stroke="#22E4FF" strokeOpacity="0.35" />
      <ellipse cx="160" cy="160" rx="118" ry="42" fill="none" stroke="#7B3FE4" strokeOpacity="0.45" />
      <ellipse cx="160" cy="160" rx="42" ry="118" fill="none" stroke="#2F6BFF" strokeOpacity="0.3" />
      {Array.from({ length: 28 }).map((_, i) => {
        const a = (i / 28) * Math.PI * 2;
        const x = 160 + Math.cos(a) * 108;
        const y = 160 + Math.sin(a) * 108;
        return <circle key={i} cx={x} cy={y} r="1.6" fill="#22E4FF" opacity="0.7" />;
      })}
      <circle cx="178" cy="108" r="4" fill="#FFB547" />
      <circle cx="232" cy="198" r="4" fill="#FFB547" />
      <circle cx="196" cy="152" r="4" fill="#FFB547" />
      <circle cx="190" cy="148" r="3" fill="#22E4FF" />
      <circle cx="214" cy="156" r="4" fill="#FFB547" />
    </svg>
  );
}

export function RocketMount() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const t = window.setTimeout(() => getEngine()?.attachRocket(el), 520);
    return () => {
      window.clearTimeout(t);
      getEngine()?.attachRocket(null);
    };
  }, []);
  return (
    <div className="scene-mount rocket-stage" ref={ref}>
      <p className="visually-hidden">Illustrative example of a growth chart and rocket animation.</p>
    </div>
  );
}

export function ChaosMount() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const t = window.setTimeout(() => getEngine()?.attachChaos(el), 400);
    return () => {
      window.clearTimeout(t);
      getEngine()?.attachChaos(null);
    };
  }, []);
  return <div className="scene-mount chaos-stage" ref={ref} aria-hidden="true" />;
}

const FUNNEL = [
  { id: "traffic", label: "Traffic", w: "92%", text: "Awareness and discovery arriving from search, social, ads and referrals." },
  { id: "leads", label: "Leads", w: "74%", text: "Visitors who signal interest through a form, chat, call or add-to-cart." },
  { id: "sales", label: "Sales", w: "52%", text: "Qualified demand that becomes a customer, booking or paid order." },
];

export function LiveFunnel() {
  const [active, setActive] = useState("traffic");
  const current = FUNNEL.find((f) => f.id === active) ?? FUNNEL[0];
  return (
    <div className="funnel-ui">
      <div className="funnel-layers" role="list">
        {FUNNEL.map((f, i) => (
          <button
            key={f.id}
            type="button"
            className="funnel-layer"
            style={{ ["--w" as string]: f.w }}
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
          >
            {i === 0 ? <span className="gear" style={{ left: 10, top: 8 }} aria-hidden="true" /> : null}
            {i === 2 ? <span className="gear" style={{ right: 10, bottom: 8 }} aria-hidden="true" /> : null}
            {f.label}
          </button>
        ))}
      </div>
      <div className="card">
        <span className="tag">Live sales funnel</span>
        <h3 className="h3">{current.label}</h3>
        <p>{current.text}</p>
        <p className="small">Illustrative example · not client data</p>
      </div>
    </div>
  );
}
