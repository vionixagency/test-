import { BASE } from "@/content/site";

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown;
}) {
  const url = `${BASE}${opts.path}`;
  const meta = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { name: "theme-color", content: "#060A1E" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Vionix" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  const links = [{ rel: "canonical", href: url }];
  const scripts = opts.jsonLd
    ? [{ type: "application/ld+json", children: JSON.stringify(opts.jsonLd) }]
    : [];
  return { meta, links, scripts };
}
