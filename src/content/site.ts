export const BASE = "https://vionixagency.github.io/vionix";
export const EMAIL = "vionixsupport@gmail.com";
export const PHONE_DISPLAY = "+880 1608-207146";
export const PHONE_TEL = "+88001608207146";
export const WHATSAPP = "https://wa.me/8801608207146";
export const FOUNDER_URL = "https://faysaltalukder.github.io/faysaldigital/";

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/vionixagency", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/vionix_agency/", icon: "instagram" },
  { name: "Threads", href: "https://www.threads.com/@vionix_agency", icon: "threads" },
  { name: "TikTok", href: "https://www.tiktok.com/@vionixagency", icon: "tiktok" },
  { name: "X", href: "https://x.com/vionixagency", icon: "x" },
  { name: "YouTube", href: "https://www.youtube.com/@Vionixagency", icon: "youtube" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/faysaldigital/", icon: "linkedin" },
  { name: "WhatsApp", href: WHATSAPP, icon: "whatsapp" },
] as const;

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "$349",
    period: "/month from",
    blurb: "Focused foundations and ongoing improvement.",
    items: [
      "Core SEO and site review",
      "Content direction",
      "Website improvement backlog",
      "Tracking basics",
      "Monthly recommendations",
    ],
    popular: false,
    cta: "Discuss Starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$999",
    period: "/month from",
    blurb: "Connected web + marketing growth system.",
    items: [
      "SEO + technical SEO focus",
      "Google Ads or Meta Ads",
      "Content strategy",
      "CRO + landing-page support",
      "Website optimization",
      "Basic AI workflow/content support",
      "Tracking + reporting",
    ],
    popular: true,
    cta: "Discuss Growth",
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "$1,999",
    period: "/month from",
    blurb: "Multiple active acquisition and conversion workstreams.",
    items: [
      "Advanced SEO",
      "Google Ads + Meta Ads",
      "Content and CRO",
      "Web development support",
      "Landing pages and e-commerce optimization",
      "AI automation",
      "Advanced analytics",
    ],
    popular: false,
    cta: "Discuss Advanced",
  },
  {
    id: "360",
    name: "Vionix 360",
    price: "$4,999+",
    period: "/month from",
    blurb: "Integrated support with custom scope.",
    items: [
      "Integrated digital strategy",
      "SEO + paid media",
      "Web development and optimization",
      "Creative/content support",
      "CRO + analytics",
      "AI integration and automation",
      "Strategic consulting",
    ],
    popular: false,
    cta: "Discuss Vionix 360",
  },
] as const;

export const compareRows = [
  ["SEO foundation", "✓", "✓", "✓", "✓"],
  ["Paid media", "—", "1 core channel", "Multiple channels", "Custom"],
  ["Web support", "Recommendations", "Optimization", "Development support", "Integrated"],
  ["CRO", "Guidance", "Active", "Active", "Integrated"],
  ["AI support", "—", "Basic", "Automation", "Custom integration"],
  ["Strategy", "Monthly", "Growth roadmap", "Advanced", "Strategic partner"],
] as const;

export const problems = [
  {
    id: "customers",
    n: "01",
    title: "I need more customers",
    body: "Map the acquisition journey, identify the largest friction points and connect the channels that can move qualified demand.",
    links: [{ href: "/services/marketing-strategy", label: "Digital Marketing Strategy" }],
  },
  {
    id: "visibility",
    n: "02",
    title: "I need better Google visibility",
    body: "Strengthen technical foundations, search intent alignment and useful content so the website is easier to discover and understand.",
    links: [{ href: "/services/technical-seo", label: "Technical SEO" }],
  },
  {
    id: "conversion",
    n: "03",
    title: "My website is not converting",
    body: "Review message, hierarchy, trust, page speed, forms and calls to action from the visitor’s perspective.",
    links: [
      { href: "/services/web-design", label: "Website Design" },
      { href: "/services/website-redesign", label: "Website Redesign" },
    ],
  },
  {
    id: "ads",
    n: "04",
    title: "My ads are not working",
    body: "Trace the complete chain from targeting and creative to query quality, landing page and conversion tracking.",
    links: [
      { href: "/services/google-ads", label: "Google Ads" },
      { href: "/services/cro", label: "CRO" },
    ],
  },
  {
    id: "website",
    n: "05",
    title: "I need a new website",
    body: "Design and build a responsive, search-friendly website with clear information architecture and strong next actions.",
    links: [
      { href: "/services/web-design", label: "Website Design" },
      { href: "/services/web-development", label: "Website Development" },
    ],
  },
  {
    id: "automation",
    n: "06",
    title: "I want to automate part of my business",
    body: "Map repetitive work and introduce AI only where the workflow, guardrails and human handoff make sense.",
    links: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/ai-chatbots", label: "AI Chatbots" },
      { href: "/services/ai-customer-support", label: "AI Customer Support" },
      { href: "/services/ai-integration", label: "AI Integration" },
    ],
  },
] as const;

export const marqueeWords = [
  "SEO",
  "AEO",
  "Google Ads",
  "Meta Ads",
  "CRO",
  "Web Design",
  "Development",
  "E-commerce",
  "Landing Pages",
  "Content",
  "Email",
  "AI Automation",
  "Chatbots",
  "Analytics",
  "Local SEO",
  "Technical SEO",
];

export const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Vionix",
      url: `${BASE}/`,
      email: EMAIL,
      telephone: PHONE_DISPLAY,
      founder: { "@type": "Person", name: "Faysal Talukder", url: FOUNDER_URL },
      sameAs: socials.filter((s) => s.icon !== "whatsapp").map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: `${BASE}/`,
      name: "Vionix",
      publisher: { "@id": `${BASE}/#organization` },
    },
  ],
};
