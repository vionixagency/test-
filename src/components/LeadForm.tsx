import { useState, type FormEvent } from "react";
import { EMAIL } from "@/content/site";
import { ArrowIcon } from "./Icons";

export function LeadForm({ submitLabel = "Get My Free Audit" }: { submitLabel?: string }) {
  const [status, setStatus] = useState({ text: "", kind: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const email = String(data.get("email") || "").trim();
    const website = String(data.get("website") || "").trim();
    if (!name) next.name = "This field is required.";
    if (!business) next.business = "This field is required.";
    if (!email) next.email = "This field is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!website) next.website = "This field is required.";
    else {
      try {
        new URL(website);
      } catch {
        next.website = "Enter a valid website URL.";
      }
    }
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus({ text: "Please check the highlighted fields.", kind: "error" });
      return;
    }
    const subject = encodeURIComponent(`Vionix Growth Audit — ${business}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone/WhatsApp: ${String(data.get("phone") || "")}`,
        `Website: ${website}`,
        `Goal / challenge: ${String(data.get("challenge") || "")}`,
      ].join("\n"),
    );
    setStatus({ text: "Opening your email app…", kind: "success" });
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" required autoComplete="name" />
          <small>{errors.name}</small>
        </div>
        <div className="field">
          <label htmlFor="business">Business *</label>
          <input id="business" name="business" required autoComplete="organization" />
          <small>{errors.business}</small>
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
          <small>{errors.email}</small>
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" autoComplete="tel" />
          <small />
        </div>
        <div className="field full">
          <label htmlFor="website">Website URL *</label>
          <input id="website" name="website" type="url" required placeholder="https://" />
          <small>{errors.website}</small>
        </div>
        <div className="field full">
          <label htmlFor="challenge">What would you like to improve?</label>
          <textarea
            id="challenge"
            name="challenge"
            placeholder="More customers, SEO visibility, a new website, better ads, automation, or something else?"
          />
          <small />
        </div>
        <div className="field full">
          <button className="btn btn-primary" type="submit">
            {submitLabel} <ArrowIcon />
          </button>
          <div className={`form-status ${status.kind}`} aria-live="polite">
            {status.text}
          </div>
          <p className="form-note">On GitHub Pages, this opens your email app with the message prepared.</p>
        </div>
      </div>
    </form>
  );
}
