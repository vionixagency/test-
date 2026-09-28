import { socials } from "@/content/site";
import { SocialIcon } from "./Icons";

export function SocialRow() {
  return (
    <div className="socials">
      {socials.map((s) => (
        <a
          key={s.name}
          className="social"
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Vionix on ${s.name}`}
        >
          <SocialIcon name={s.icon} />
          <span className="visually-hidden">Vionix on {s.name}</span>
        </a>
      ))}
    </div>
  );
}
