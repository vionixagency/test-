import { Link } from "@tanstack/react-router";
import { EMAIL, FOUNDER_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/content/site";
import { SocialRow } from "./SocialRow";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="vx-wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/" aria-label="Vionix home">
              <span className="brand-mark">VX</span>
              <span className="brand-word">Vionix</span>
            </Link>
            <p>Digital growth, web and supporting AI systems built around the problem your business needs to solve.</p>
            <SocialRow />
          </div>
          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/services">Services</Link>
              <Link to="/packages">Packages</Link>
              <Link to="/work">Concept Work</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">Company</div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">
                Founder site
              </a>
            </div>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <div className="footer-links">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vionix. Built for clarity, performance and useful growth.</span>
          <span>Concept work is clearly labelled. No fabricated client results.</span>
        </div>
      </div>
    </footer>
  );
}
