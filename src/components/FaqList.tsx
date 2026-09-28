import { useState } from "react";
import type { Faq } from "@/content/services";

export function FaqList({ items, idPrefix = "faq" }: { items: Faq[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const id = `${idPrefix}-${i}`;
        const expanded = open === i;
        return (
          <div className="faq-item" key={id}>
            <button
              className="faq-q"
              type="button"
              aria-expanded={expanded}
              aria-controls={id}
              onClick={() => setOpen(expanded ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-plus">{expanded ? "×" : "+"}</span>
            </button>
            {expanded ? (
              <div className="faq-a" id={id}>
                {item.a}
              </div>
            ) : (
              <div className="faq-a" id={id} hidden>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
