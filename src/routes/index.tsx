import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { Btn } from "@/components/Btn";
import { ChartIcon, ChipIcon, WindowIcon, ArrowIcon } from "@/components/Icons";
import { ChaosMount, GlobeMount, LiveFunnel, RocketMount } from "@/components/scenes";
import { LeadForm } from "@/components/LeadForm";
import { packages, problems, marqueeWords, orgLd, BASE } from "@/content/site";
import { posts } from "@/content/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Vionix — Digital Growth, Web & Supporting AI",
      description:
        "Vionix helps e-commerce, real estate, startups and growing businesses improve visibility, websites, acquisition and conversion through a connected digital growth system.",
      path: "/",
      jsonLd: {
        ...orgLd,
        "@graph": [
          ...orgLd["@graph"],
          {
            "@type": "WebPage",
            "@id": `${BASE}/#webpage`,
            url: `${BASE}/`,
            name: "Vionix — Digital Growth, Web & Supporting AI",
            description:
              "Vionix helps e-commerce, real estate, startups and growing businesses improve visibility, websites, acquisition and conversion through a connected digital growth system.",
            isPartOf: { "@id": `${BASE}/#website` },
          },
        ],
      },
    }),
  component: Home,
});

function Home() {
  const [problem, setProblem] = useState<string | null>(null);
  const active = problems.find((p) => p.id === problem);

  return (
    <SiteShell scene="home">
      <section className="hero">
        <div className="hero-floor" />
        <div className="vx-wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow intro-item intro-1">Digital growth · Web · Supporting AI</span>
            <h1 className="display intro-item intro-2">
              Build a better digital presence. <span className="grad-text">Grow your business.</span>
            </h1>
            <p className="lead intro-item intro-3">
              Vionix connects strategy, marketing, websites, analytics and selective AI into one practical growth system—so the
              complexity stays on our side and the next step stays clear for you.
            </p>
            <div className="hero-actions intro-item intro-4">
              <Btn href="/contact">Get Free Audit</Btn>
              <Btn href="/services" variant="secondary">
                Explore services
              </Btn>
            </div>
            <div className="hero-note intro-item intro-4">
              <span className="dot" />
              <span>Global-first · Europe · Australia · Middle East · Bangladesh</span>
            </div>
          </div>
          <div className="hero-visual intro-item intro-5">
            <div className="hero-stage">
              <GlobeMount />
            </div>
            <div className="hero-stage">
              <RocketMount />
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={`${w}-${i}`}>{w}</span>
          ))}
        </div>
      </div>

      <section className="section-sm section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="h2">
                One connected system, <span className="grad-text">not a pile of services.</span>
              </h2>
            </div>
            <p className="small">Start with the problem. Add only the work that creates a useful connection.</p>
          </div>
          <div className="grid-3">
            <article className="card tilt">
              <div className="card-glare" />
              <div className="card-icon">
                <ChartIcon />
              </div>
              <span className="tag">Digital Marketing</span>
              <h3 className="h3">Create demand and visibility.</h3>
              <p>SEO, local search, paid media, content, CRO and strategy work together around the customer journey.</p>
              <Link className="text-link" to="/services">
                Explore marketing <ArrowIcon />
              </Link>
            </article>
            <article className="card tilt">
              <div className="card-glare" />
              <div className="card-icon">
                <WindowIcon />
              </div>
              <span className="tag">Web & Product</span>
              <h3 className="h3">Build the experience people land on.</h3>
              <p>Mobile-first websites, e-commerce, landing pages and redesigns built around clarity, speed and conversion.</p>
              <Link className="text-link" to="/services/$slug" params={{ slug: "web-design" }}>
                Explore web <ArrowIcon />
              </Link>
            </article>
            <article className="card tilt">
              <div className="card-glare" />
              <div className="card-icon">
                <ChipIcon />
              </div>
              <span className="tag">Supporting AI</span>
              <h3 className="h3">Automate where it makes sense.</h3>
              <p>Focused automation, chatbots, support and integrations with boundaries, human review and clear purpose.</p>
              <Link className="text-link" to="/services/$slug" params={{ slug: "ai-automation" }}>
                Explore AI <ArrowIcon />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-heading">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Start with your problem</span>
              <h2 id="problem-heading" className="h2">
                What are you trying to <span className="grad-text">improve?</span>
              </h2>
            </div>
            <p className="small">You do not need to know which service you need yet.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p) => (
              <button
                key={p.id}
                className="problem-card"
                type="button"
                aria-expanded={problem === p.id}
                onClick={() => setProblem(p.id)}
              >
                <span className="problem-number">{p.n}</span>
                <strong>{p.title}</strong>
                <span>
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
          <div className="problem-detail">
            {!active ? (
              <div className="problem-placeholder">
                <span className="tag">Choose one</span>
                <p className="lead">Select the business problem that feels closest. We will show the relevant starting points.</p>
              </div>
            ) : (
              <div className="problem-panel">
                <div>
                  <span className="tag">{active.title}</span>
                  <p className="lead">{active.body}</p>
                </div>
                <div>
                  <span className="small">Relevant starting points</span>
                  <div className="chip-row" style={{ marginTop: 10 }}>
                    {active.links.map((l) => {
                      const slug = l.href.replace("/services/", "");
                      return (
                        <Link className="chip" key={l.href} to="/services/$slug" params={{ slug }}>
                          {l.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="h2">
                Clarity before <span className="grad-text">complexity.</span>
              </h2>
            </div>
            <p className="small">Discover → Plan → Build → Grow.</p>
          </div>
          <div className="steps">
            {[
              ["01", "Discover", "Understand business, audience, offer, current assets and constraints."],
              ["02", "Plan", "Prioritize pages, channels, messages, tracking and the next measurable actions."],
              ["03", "Build", "Launch clean implementation with accessible UX and maintainable code."],
              ["04", "Grow", "Measure, learn and refine what the evidence supports."],
            ].map(([n, t, p]) => (
              <div className="step" key={n}>
                <div className="step-number">{n}</div>
                <h3 className="h3">{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="system-heading">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Marketing data visualization</span>
              <h2 id="system-heading" className="h2">
                See how the pieces <span className="grad-text">connect.</span>
              </h2>
            </div>
            <p className="small">These diagrams explain the system. Illustrative numbers are labelled; no fake results.</p>
          </div>
          <div className="grid-2">
            <div className="card">
              <strong>Example customer journey</strong>
              <span className="small">Search → visit → action → learning</span>
              <svg viewBox="0 0 900 160" role="img" aria-label="Illustrative customer journey from search to analytics" style={{ marginTop: 12 }}>
                <path d="M80 70 H820" fill="none" stroke="#22E4FF" strokeWidth="3" />
                {["Search", "Visit", "Action", "Customer", "Learn"].map((lab, i) => {
                  const x = 80 + i * 185;
                  return (
                    <g key={lab}>
                      <circle cx={x} cy="70" r="18" fill="#121A45" stroke="#22E4FF" strokeWidth="2" />
                      <text x={x} y="118" textAnchor="middle" fill="#9DB2DA" fontSize="14" fontFamily="Manrope,sans-serif">
                        {lab}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="card">
              {[
                ["Visibility", "72%"],
                ["Experience", "58%"],
                ["Conversion", "44%"],
              ].map(([k, w]) => (
                <div className="metric-row" key={k}>
                  <span>{k}</span>
                  <div className="metric-track">
                    <i style={{ width: w }} />
                  </div>
                  <strong>Example</strong>
                </div>
              ))}
              <p className="small">Illustrative relative signals—not measured client results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="grow-heading">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How we grow your business</span>
              <h2 id="grow-heading" className="h2">
                A rocket of focus. A chart of <span className="grad-text">clarity.</span>
              </h2>
            </div>
            <p className="small">The hero rocket is the live 3D example. This chart is an illustrative example — never a client result.</p>
          </div>
          <div className="hero-stage" style={{ minHeight: 280, padding: 24 }}>
            <p className="small">Illustrative example</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 200, marginTop: 16 }}>
              {[32, 46, 41, 64, 82, 95].map((ht, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${ht}%`,
                    borderRadius: "8px 8px 2px 2px",
                    background: "linear-gradient(to top, #2F6BFF, #22E4FF)",
                    boxShadow: "0 0 16px rgba(34,228,255,.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Live sales funnel</span>
              <h2 className="h2">
                From traffic to <span className="grad-text">sales.</span>
              </h2>
            </div>
            <p className="small">Hover or click a stage. Illustrative example.</p>
          </div>
          <LiveFunnel />
        </div>
      </section>

      <section className="section section-tint">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Chaos to order</span>
              <h2 className="h2">
                Scattered problems. <span className="grad-text">Organised growth.</span>
              </h2>
            </div>
            <p className="small">Scroll and the noise snaps into an illustrative growth path.</p>
          </div>
          <div className="hero-stage" style={{ minHeight: 280 }}>
            <ChaosMount />
          </div>
        </div>
      </section>

      <section className="section-sm section-alt">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Concept work</span>
              <h2 className="h2">
                Show the thinking. Never fake the <span className="grad-text">proof.</span>
              </h2>
            </div>
            <Link className="text-link" to="/work">
              See all work <ArrowIcon />
            </Link>
          </div>
          <div className="grid-3">
            {[
              ["E-commerce Growth System", "Illustrative search → product → checkout journey.", "Concept Project"],
              ["Real Estate Lead Generation", "Illustrative trust-first campaign landing flow.", "Concept Project"],
              ["AI Lead Triage Workflow", "Human-reviewed qualification and routing system.", "Internal Concept"],
            ].map(([t, p, tag]) => (
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

      <section className="section" aria-labelledby="packages-home">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Packages</span>
              <h2 id="packages-home" className="h2">
                Start with the level of support you <span className="grad-text">need.</span>
              </h2>
            </div>
            <Link className="text-link" to="/packages">
              View packages <ArrowIcon />
            </Link>
          </div>
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
                <Btn href="/packages" variant={p.popular ? "primary" : "secondary"}>
                  View package
                </Btn>
              </article>
            ))}
          </div>
          <p className="small" style={{ marginTop: 16 }}>
            Starting points only; final scope depends on geography, business model, channels and workload.
          </p>
        </div>
      </section>

      <section className="section-sm section-tint">
        <div className="vx-wrap audit-wrap">
          <div className="audit-panel reveal">
            <span className="eyebrow">Free Growth Audit</span>
            <h2 className="h2">
              Not sure what is holding your business <span className="grad-text">back?</span>
            </h2>
            <p>
              Give us your website. We will look at search, UX, conversion paths, content and technical foundations, then explain
              the practical next areas to investigate.
            </p>
            <ul className="audit-points">
              <li>Website + UX review</li>
              <li>SEO visibility and technical checks</li>
              <li>Conversion path observations</li>
              <li>Practical next-step recommendations</li>
            </ul>
          </div>
          <div className="form-panel reveal">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="vx-wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Resources</span>
              <h2 className="h2">
                Useful growth thinking, without the <span className="grad-text">fluff.</span>
              </h2>
            </div>
            <Link className="text-link" to="/blog">
              Read the blog <ArrowIcon />
            </Link>
          </div>
          <div className="grid-3">
            {posts.map((p) => (
              <article className="card article-card tilt" key={p.slug}>
                <span className="tag">{p.tag}</span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.description}</p>
                <Link className="text-link" to="/blog/posts/$slug" params={{ slug: p.slug }}>
                  Read article <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm section-alt">
        <div className="vx-wrap grid-2" style={{ alignItems: "center" }}>
          <div className="reveal">
            <span className="eyebrow">Founder</span>
            <h2 className="h2">
              Built by <span className="grad-text">Faysal Talukder.</span>
            </h2>
            <p className="lead">
              Vionix is designed so clients can benefit from digital growth without managing every moving part themselves.
            </p>
            <Link className="text-link" to="/about">
              Meet the founder <ArrowIcon />
            </Link>
          </div>
          <div className="card founder-visual reveal">
            <div className="portrait-placeholder">
              <div className="portrait-head" />
              <div className="portrait-body" />
            </div>
            <div className="small">Founder & CEO · Replace with approved founder photo later.</div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Let’s build something that works.</span>
          <h2 className="h2">
            Bring us the business problem. We will help map the digital <span className="grad-text">one.</span>
          </h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 22 }}>
            <Btn href="/contact">Get Free Audit</Btn>
            <Btn href="mailto:vionixsupport@gmail.com" variant="ghost">
              Start a Conversation
            </Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
