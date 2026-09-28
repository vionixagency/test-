import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { megaGroups, serviceBySlug } from "@/content/services";
import { Btn } from "./Btn";
import { ArrowIcon } from "./Icons";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMobile(false);
    document.body.classList.remove("nav-open");
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setMobile(false);
        document.body.classList.remove("nav-open");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const active = (href: string) => (pathname === href || pathname.startsWith(href + "/") ? " active" : "");

  function toggleMobile() {
    setMobile((v) => {
      document.body.classList.toggle("nav-open", !v);
      return !v;
    });
  }

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="vx-wrap nav-wrap">
        <Link className="brand" to="/" aria-label="Vionix home">
          <span className="brand-mark">VX</span>
          <span className="brand-word">Vionix</span>
        </Link>
        <nav className={`nav${mobile ? " is-mobile-open" : ""}`} aria-label="Primary navigation">
          <button
            className={`nav-link nav-services${pathname.startsWith("/services") ? " active" : ""}`}
            type="button"
            aria-controls="services-mega"
            aria-expanded={mega}
            onClick={() => setMega((v) => !v)}
            onMouseEnter={() => {
              if (window.matchMedia("(hover:hover)").matches && window.innerWidth > 1020) setMega(true);
            }}
          >
            Services
          </button>
          <div
            className={`mega${mega ? " is-open" : ""}`}
            id="services-mega"
            aria-label="Services menu"
            onMouseLeave={() => {
              if (window.innerWidth > 1020) setMega(false);
            }}
          >
            <div className="vx-wrap">
              <div className="mega-grid">
                <div className="mega-intro">
                  <div>
                    <span className="eyebrow">Services</span>
                    <h2>A connected growth system.</h2>
                    <p>Focused marketing, web and supporting AI services—structured around the problem your business needs to solve.</p>
                  </div>
                  <Link className="text-link" to="/services" onClick={() => setMega(false)}>
                    Explore all services <ArrowIcon />
                  </Link>
                </div>
                {megaGroups.map((g) => (
                  <div className="mega-group" key={g.title}>
                    <h3>{g.title}</h3>
                    <div className="mega-links">
                      {g.slugs.map((slug) => (
                        <Link key={slug} to="/services/$slug" params={{ slug }} onClick={() => setMega(false)}>
                          {serviceBySlug[slug]?.short ?? slug}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mega-foot">
                <span>Need a different combination?</span>
                <Btn href="/contact" small>
                  Get Free Audit
                </Btn>
              </div>
            </div>
          </div>
          <Link className={`nav-link${active("/packages")}`} to="/packages">
            Packages
          </Link>
          <Link className={`nav-link${active("/work")}`} to="/work">
            Work
          </Link>
          <Link className={`nav-link${active("/about")}`} to="/about">
            About
          </Link>
          <Link className={`nav-link${active("/blog")}`} to="/blog">
            Blog
          </Link>
          <Link className={`nav-link${active("/contact")}`} to="/contact">
            Contact
          </Link>
          <Btn href="/contact" small className="nav-cta">
            Get Free Audit
          </Btn>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobile}
          aria-label={mobile ? "Close menu" : "Open menu"}
          onClick={toggleMobile}
        >
          <span className="nav-toggle-bars">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
