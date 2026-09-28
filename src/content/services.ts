export type SceneName = "home" | "services" | "seo" | "paid" | "web" | "ai" | "content" | "quiet";

export type ServiceGroup = "marketing" | "creative" | "web" | "ai";

export type Faq = { q: string; a: string };
export type Related = { slug: string; name: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  group: ServiceGroup;
  title: string;
  description: string;
  lead: string;
  why: string;
  look: string[];
  who: string;
  related: Related[];
  extraFaq: Faq[];
  scene: SceneName;
};

export const sharedServiceFaq: Faq[] = [
  { q: "What happens first?", a: "We start by understanding the business goal, existing assets, audience and current constraints." },
  { q: "Do I need a package before starting?", a: "No. A focused project can begin with one service when that is the clearest next step." },
  { q: "Can this service work with my existing website?", a: "Usually. We first review the current setup so valuable work is preserved where it still helps." },
  { q: "How do you measure progress?", a: "Measurement depends on the service, but we define useful signals and reporting before execution." },
  { q: "Do you guarantee rankings or revenue?", a: "No. Search visibility and business outcomes depend on many factors, so we do not promise a specific ranking or revenue result." },
  { q: "Can this expand later?", a: "Yes. When adjacent services create a clear connection, the scope can expand from the original workstream." },
];

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO Services",
    short: "SEO",
    group: "marketing",
    title: "SEO Services | Vionix",
    description: "Build search visibility around intent, useful content and a technically sound website. Vionix provides focused strategy, execution and optimization for e-commerce, startups, service businesses and growing companies.",
    lead: "Build search visibility around intent, useful content and a technically sound website.",
    why: "SEO is a system rather than a checklist. We connect technical foundations, information architecture, internal linking and content so the site can be understood by people and search engines.",
    who: "E-commerce, startups, service businesses and growing companies.",
    scene: "seo",
    look: ["Search intent mapping", "technical SEO review", "information architecture", "internal linking", "content opportunities", "on-page optimization", "measurement plan"],
    related: [
      { slug: "local-seo", name: "Local SEO Services" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
      { q: "How long does SEO take?", a: "SEO timelines vary by site condition, competition, content quality and search demand. We prefer to set milestones around foundations, implementation and evidence rather than promise a fixed ranking date." },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO Services",
    short: "Local SEO",
    group: "marketing",
    title: "Local SEO Services | Vionix",
    description: "Improve local visibility for businesses that serve a defined area or customer footprint. Vionix provides focused strategy, execution and optimization for location-based service businesses, real estate teams, clinics, retailers and local brands.",
    lead: "Improve local visibility for businesses that serve a defined area or customer footprint.",
    why: "Local search depends on accurate business information, relevant pages, location context and a consistent customer experience across the web.",
    who: "Location-based service businesses, real estate teams, clinics, retailers and local brands.",
    scene: "seo",
    look: ["Local landing-page structure", "Google Business Profile guidance", "local keyword research", "review process guidance", "citation consistency", "local content", "measurement"],
    related: [
      { slug: "seo", name: "SEO Services" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "content-marketing", name: "Content Marketing" },
    ],
    extraFaq: [
      { q: "Do you manage reviews?", a: "We can provide a review and customer-feedback process, but we do not manufacture reviews or incentivize manipulative feedback." },
    ],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    short: "Technical SEO",
    group: "marketing",
    title: "Technical SEO | Vionix",
    description: "Make the website easier to crawl, understand and maintain. Vionix provides focused strategy, execution and optimization for businesses with technical debt, migrations, complex websites or weak organic foundations.",
    lead: "Make the website easier to crawl, understand and maintain.",
    why: "Technical SEO is the foundation under content and campaigns. We focus on indexability, architecture, performance, structured data and clean page relationships.",
    who: "Businesses with technical debt, migrations, complex websites or weak organic foundations.",
    scene: "seo",
    look: ["Crawl/index review", "canonical strategy", "sitemap and robots checks", "internal linking", "structured data", "Core Web Vitals review", "redirect and migration guidance"],
    related: [
      { slug: "seo", name: "SEO Services" },
      { slug: "web-development", name: "Website Development" },
      { slug: "website-redesign", name: "Website Redesign" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "ai-search",
    name: "AEO / AI Search Optimization",
    short: "AEO / AI Search",
    group: "marketing",
    title: "AEO / AI Search Optimization | Vionix",
    description: "Structure useful content so it can be discovered across modern search experiences, including AI-powered results. Vionix provides focused strategy, execution and optimization for businesses investing in organic visibility and answer-focused content.",
    lead: "Structure useful content so it can be discovered across modern search experiences, including AI-powered results.",
    why: "Search is changing, but the fundamentals still matter: helpful content, clear entities, accessible pages, strong information architecture and trustworthy references.",
    who: "Businesses investing in organic visibility and answer-focused content.",
    scene: "seo",
    look: ["Question mapping", "answer-focused content structure", "entity clarity", "supporting internal links", "FAQ opportunities", "search appearance review", "content refresh plan"],
    related: [
      { slug: "seo", name: "SEO Services" },
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "technical-seo", name: "Technical SEO" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    short: "Google Ads",
    group: "marketing",
    title: "Google Ads Management | Vionix",
    description: "Connect search intent, offers, landing pages and measurement into a focused paid-search system. Vionix provides focused strategy, execution and optimization for lead-generation businesses, e-commerce, local services and b2b companies.",
    lead: "Connect search intent, offers, landing pages and measurement into a focused paid-search system.",
    why: "Clicks are only one step. Campaign structure, query quality, offer fit, landing experience and conversion tracking all influence what happens after the click.",
    who: "Lead-generation businesses, e-commerce, local services and b2b companies.",
    scene: "paid",
    look: ["Account and campaign review", "keyword/query framework", "ad copy direction", "landing-page alignment", "conversion tracking requirements", "negative keyword process", "reporting"],
    related: [
      { slug: "landing-pages", name: "Landing Page Design" },
      { slug: "cro", name: "Conversion Rate Optimization" },
      { slug: "marketing-strategy", name: "Digital Marketing Strategy" },
      { slug: "seo", name: "SEO Services" },
    ],
    extraFaq: [
      { q: "Do you need access to my ad account?", a: "Yes, secure account access is normally required for management or audits. Ownership remains with the client." },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads Management",
    short: "Meta Ads",
    group: "marketing",
    title: "Meta Ads Management | Vionix",
    description: "Build Meta campaigns around audience signals, creative angles, offers and a conversion-ready destination. Vionix provides focused strategy, execution and optimization for e-commerce, real estate, consumer brands, startups and lead-generation businesses.",
    lead: "Build Meta campaigns around audience signals, creative angles, offers and a conversion-ready destination.",
    why: "Paid social works as a system connecting creative, audience, offer and page experience rather than as a collection of boosted posts.",
    who: "E-commerce, real estate, consumer brands, startups and lead-generation businesses.",
    scene: "paid",
    look: ["Campaign architecture", "audience framework", "creative testing plan", "offer alignment", "landing-page review", "conversion tracking", "reporting"],
    related: [
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "cro", name: "Conversion Rate Optimization" },
      { slug: "google-ads", name: "Google Ads Management" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short: "Content Marketing",
    group: "creative",
    title: "Content Marketing | Vionix",
    description: "Create useful content that supports discovery, trust, conversion and long-term visibility. Vionix provides focused strategy, execution and optimization for businesses that need consistent educational content without publishing filler.",
    lead: "Create useful content that supports discovery, trust, conversion and long-term visibility.",
    why: "Content works best when it has a job. We map content to customer questions and commercial intent, then build a practical editorial system.",
    who: "Businesses that need consistent educational content without publishing filler.",
    scene: "content",
    look: ["Topic research", "content briefs", "editorial calendar", "service-support content", "internal linking", "content refresh plan", "performance review"],
    related: [
      { slug: "seo", name: "SEO Services" },
      { slug: "social-media-marketing", name: "Social Media Marketing" },
      { slug: "email-marketing", name: "Email Marketing" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Social Media Marketing",
    group: "creative",
    title: "Social Media Marketing | Vionix",
    description: "Turn social activity into a connected brand and acquisition system—not a stream of disconnected posts. Vionix provides focused strategy, execution and optimization for founder-led brands, e-commerce, real estate, startups and service businesses.",
    lead: "Turn social activity into a connected brand and acquisition system—not a stream of disconnected posts.",
    why: "We align content pillars, formats, calls to action and distribution with the actual business goal.",
    who: "Founder-led brands, e-commerce, real estate, startups and service businesses.",
    scene: "content",
    look: ["Content pillars", "channel planning", "caption direction", "creative concepts", "distribution calendar", "community touchpoints", "analytics review"],
    related: [
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "meta-ads", name: "Meta Ads Management" },
      { slug: "marketing-strategy", name: "Digital Marketing Strategy" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    short: "Email Marketing",
    group: "creative",
    title: "Email Marketing | Vionix",
    description: "Use email to nurture interest, support repeat purchases and keep useful conversations going. Vionix provides focused strategy, execution and optimization for e-commerce, saas, education, service businesses and brands with an existing audience.",
    lead: "Use email to nurture interest, support repeat purchases and keep useful conversations going.",
    why: "We map audience segments, lifecycle moments and messages instead of relying on generic newsletters alone.",
    who: "E-commerce, saas, education, service businesses and brands with an existing audience.",
    scene: "content",
    look: ["Lifecycle map", "welcome sequences", "nurture ideas", "campaign calendar", "segmentation framework", "conversion copy direction", "measurement"],
    related: [
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "cro", name: "Conversion Rate Optimization" },
      { slug: "ai-automation", name: "AI Automation" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "cro",
    name: "Conversion Rate Optimization",
    short: "CRO",
    group: "creative",
    title: "Conversion Rate Optimization | Vionix",
    description: "Find and reduce the friction between a visitor arriving and a visitor taking the next useful action. Vionix provides focused strategy, execution and optimization for websites receiving meaningful traffic but struggling to turn it into leads, enquiries or sales.",
    lead: "Find and reduce the friction between a visitor arriving and a visitor taking the next useful action.",
    why: "We examine messaging, hierarchy, forms, calls to action, trust, speed and user paths, then prioritize practical improvements.",
    who: "Websites receiving meaningful traffic but struggling to turn it into leads, enquiries or sales.",
    scene: "paid",
    look: ["UX review", "funnel mapping", "landing-page review", "form optimization", "CTA hierarchy", "experiment backlog", "analytics review"],
    related: [
      { slug: "web-design", name: "Website Design" },
      { slug: "landing-pages", name: "Landing Page Design" },
      { slug: "technical-seo", name: "Technical SEO" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "marketing-strategy",
    name: "Digital Marketing Strategy",
    short: "Marketing Strategy",
    group: "creative",
    title: "Digital Marketing Strategy | Vionix",
    description: "A practical digital growth plan that connects channels to business goals, customer intent and measurement. Vionix provides focused strategy, execution and optimization for startups, smes, e-commerce, real estate and established businesses.",
    lead: "A practical digital growth plan that connects channels to business goals, customer intent and measurement.",
    why: "Strategy should answer what to do first, what not to do yet, and how to know whether the work is helping.",
    who: "Startups, smes, e-commerce, real estate and established businesses.",
    scene: "services",
    look: ["Business and audience review", "channel prioritization", "funnel map", "90-day roadmap", "KPI framework", "budget guidance", "reporting structure"],
    related: [
      { slug: "seo", name: "SEO Services" },
      { slug: "google-ads", name: "Google Ads Management" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "web-design",
    name: "Website Design",
    short: "Website Design",
    group: "web",
    title: "Website Design | Vionix",
    description: "Design a website that is clear, credible, mobile-first and built to move visitors toward the right next action. Vionix provides focused strategy, execution and optimization for small businesses, startups, e-commerce brands and companies redesigning an outdated site.",
    lead: "Design a website that is clear, credible, mobile-first and built to move visitors toward the right next action.",
    why: "Good website design is information architecture, hierarchy, trust, responsiveness and conversion working together.",
    who: "Small businesses, startups, e-commerce brands and companies redesigning an outdated site.",
    scene: "web",
    look: ["Information architecture", "UX direction", "responsive layouts", "conversion hierarchy", "design system", "accessibility considerations", "SEO-ready structure"],
    related: [
      { slug: "web-development", name: "Website Development" },
      { slug: "landing-pages", name: "Landing Page Design" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "web-development",
    name: "Website Development",
    short: "Website Development",
    group: "web",
    title: "Website Development | Vionix",
    description: "Build fast, maintainable websites with semantic HTML, clean CSS, lightweight JavaScript and SEO-ready foundations. Vionix provides focused strategy, execution and optimization for businesses that need marketing-ready websites on static or lightweight hosting.",
    lead: "Build fast, maintainable websites with semantic HTML, clean CSS, lightweight JavaScript and SEO-ready foundations.",
    why: "We keep the stack intentionally simple where simple is enough: fewer dependencies, better performance, easier ownership.",
    who: "Businesses that need marketing-ready websites on static or lightweight hosting.",
    scene: "web",
    look: ["Semantic HTML", "responsive CSS", "vanilla JS interactions", "SEO metadata", "structured data", "forms", "performance optimization", "deployment guidance"],
    related: [
      { slug: "web-design", name: "Website Design" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "website-maintenance", name: "Website Maintenance" },
    ],
    extraFaq: [
      { q: "Can this be hosted on GitHub Pages?", a: "Yes for static sites. Where a business requires server-side features, we would choose an appropriate hosting architecture instead." },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce Website",
    short: "E-commerce",
    group: "web",
    title: "E-commerce Website | Vionix",
    description: "Create an e-commerce experience that makes product discovery, trust and checkout easier to navigate. Vionix provides focused strategy, execution and optimization for direct-to-consumer brands, retailers and businesses moving sales online.",
    lead: "Create an e-commerce experience that makes product discovery, trust and checkout easier to navigate.",
    why: "An online store is a conversion system. We focus on product clarity, mobile experience, trust and marketing handoffs.",
    who: "Direct-to-consumer brands, retailers and businesses moving sales online.",
    scene: "web",
    look: ["Store structure", "product-page UX", "collection/navigation planning", "mobile optimization", "conversion paths", "analytics requirements", "SEO foundations"],
    related: [
      { slug: "web-development", name: "Website Development" },
      { slug: "seo", name: "SEO Services" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "landing-pages",
    name: "Landing Page Design",
    short: "Landing Pages",
    group: "web",
    title: "Landing Page Design | Vionix",
    description: "Build focused landing pages that match the traffic source, offer and conversion goal. Vionix provides focused strategy, execution and optimization for campaigns, lead generation, paid media and product launches.",
    lead: "Build focused landing pages that match the traffic source, offer and conversion goal.",
    why: "A landing page should continue the promise made by the ad, search result or email.",
    who: "Campaigns, lead generation, paid media and product launches.",
    scene: "web",
    look: ["Message hierarchy", "offer framing", "CTA strategy", "form design", "mobile-first layout", "tracking plan", "testing recommendations"],
    related: [
      { slug: "google-ads", name: "Google Ads Management" },
      { slug: "meta-ads", name: "Meta Ads Management" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    short: "Website Redesign",
    group: "web",
    title: "Website Redesign | Vionix",
    description: "Modernize an existing site without throwing away everything that already works. Vionix provides focused strategy, execution and optimization for businesses with outdated websites, a rebrand or a measurable drop in usability.",
    lead: "Modernize an existing site without throwing away everything that already works.",
    why: "Redesigns should protect valuable URLs and content while fixing confusing navigation, weak messaging, poor mobile experience and technical gaps.",
    who: "Businesses with outdated websites, a rebrand or a measurable drop in usability.",
    scene: "web",
    look: ["Audit", "sitemap and URL plan", "UX redesign", "content hierarchy", "migration checklist", "SEO preservation", "QA"],
    related: [
      { slug: "web-design", name: "Website Design" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    short: "Website Maintenance",
    group: "web",
    title: "Website Maintenance | Vionix",
    description: "Keep your website healthy, current and ready for continuous improvement. Vionix provides focused strategy, execution and optimization for businesses that need reliable updates without a full in-house web team.",
    lead: "Keep your website healthy, current and ready for continuous improvement.",
    why: "Maintenance includes content changes, technical checks, broken-link review, small UX improvements and performance hygiene.",
    who: "Businesses that need reliable updates without a full in-house web team.",
    scene: "web",
    look: ["Content updates", "bug fixes", "link checks", "performance review", "security hygiene guidance", "change notes", "improvement backlog"],
    related: [
      { slug: "web-development", name: "Website Development" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "AI Automation",
    group: "ai",
    title: "AI Automation | Vionix",
    description: "Use AI selectively to remove repetitive work from marketing and business workflows. Vionix provides focused strategy, execution and optimization for teams handling repetitive lead, support, content or reporting workflows.",
    lead: "Use AI selectively to remove repetitive work from marketing and business workflows.",
    why: "We first map the workflow, then identify tasks where AI can safely accelerate, classify or route work.",
    who: "Teams handling repetitive lead, support, content or reporting workflows.",
    scene: "ai",
    look: ["Workflow mapping", "automation opportunities", "prompt and guardrail design", "routing logic", "human review points", "documentation", "monitoring plan"],
    related: [
      { slug: "ai-chatbots", name: "AI Chatbots" },
      { slug: "ai-customer-support", name: "AI Customer Support" },
      { slug: "marketing-strategy", name: "Digital Marketing Strategy" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    short: "AI Chatbots",
    group: "ai",
    title: "AI Chatbots | Vionix",
    description: "Design focused AI chat experiences for FAQs, qualification and guided website conversations. Vionix provides focused strategy, execution and optimization for businesses with repetitive pre-sales or information requests.",
    lead: "Design focused AI chat experiences for FAQs, qualification and guided website conversations.",
    why: "A useful chatbot should know its scope, hand off cleanly and avoid inventing answers.",
    who: "Businesses with repetitive pre-sales or information requests.",
    scene: "ai",
    look: ["Use-case definition", "conversation flow", "knowledge boundaries", "lead qualification", "handoff logic", "website integration", "QA checklist"],
    related: [
      { slug: "ai-customer-support", name: "AI Customer Support" },
      { slug: "ai-integration", name: "AI Integration" },
      { slug: "cro", name: "Conversion Rate Optimization" },
    ],
    extraFaq: [
      { q: "Will the chatbot answer anything?", a: "No. A useful system has a defined scope, source boundaries, escalation rules and a human handoff for exceptions." },
    ],
  },
  {
    slug: "ai-customer-support",
    name: "AI Customer Support",
    short: "AI Customer Support",
    group: "ai",
    title: "AI Customer Support | Vionix",
    description: "Support customer questions with structured AI assistance while keeping humans in control of exceptions. Vionix provides focused strategy, execution and optimization for e-commerce, service businesses and teams with recurring customer questions.",
    lead: "Support customer questions with structured AI assistance while keeping humans in control of exceptions.",
    why: "We focus on the knowledge base, escalation path and guardrails before choosing an automation pattern.",
    who: "E-commerce, service businesses and teams with recurring customer questions.",
    scene: "ai",
    look: ["FAQ/knowledge structure", "response guidelines", "escalation rules", "ticket triage concepts", "QA scenarios", "human handoff", "monitoring"],
    related: [
      { slug: "ai-chatbots", name: "AI Chatbots" },
      { slug: "ai-automation", name: "AI Automation" },
      { slug: "content-marketing", name: "Content Marketing" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "ai-content-systems",
    name: "AI Content Systems",
    short: "AI Content Systems",
    group: "ai",
    title: "AI Content Systems | Vionix",
    description: "Build repeatable AI-assisted content workflows without turning your brand voice into generic machine copy. Vionix provides focused strategy, execution and optimization for marketing teams and founder-led brands producing content across several channels.",
    lead: "Build repeatable AI-assisted content workflows without turning your brand voice into generic machine copy.",
    why: "AI can accelerate research, outlines, repurposing and internal workflows when a human owns accuracy, voice and editorial decisions.",
    who: "Marketing teams and founder-led brands producing content across several channels.",
    scene: "ai",
    look: ["Topic workflow", "prompt library", "brand voice rules", "repurposing system", "human review checkpoints", "content templates", "quality controls"],
    related: [
      { slug: "content-marketing", name: "Content Marketing" },
      { slug: "seo", name: "SEO Services" },
      { slug: "ai-automation", name: "AI Automation" },
    ],
    extraFaq: [
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    short: "AI Integration",
    group: "ai",
    title: "AI Integration | Vionix",
    description: "Connect selected AI capabilities with the tools and workflows your business already uses. Vionix provides focused strategy, execution and optimization for businesses with existing tools that need a small, purposeful AI layer.",
    lead: "Connect selected AI capabilities with the tools and workflows your business already uses.",
    why: "We define inputs, outputs, permissions, failure states and human review before implementation.",
    who: "Businesses with existing tools that need a small, purposeful AI layer.",
    scene: "ai",
    look: ["Use-case mapping", "integration architecture", "data flow review", "permissions/guardrails", "error handling", "test cases", "documentation"],
    related: [
      { slug: "ai-automation", name: "AI Automation" },
      { slug: "ai-customer-support", name: "AI Customer Support" },
      { slug: "web-development", name: "Website Development" },
    ],
    extraFaq: [
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>;

export const marketingServices = services.filter((s) => s.group === "marketing" || s.slug === "content-marketing" || s.slug === "social-media-marketing" || s.slug === "email-marketing" || s.slug === "cro" || s.slug === "marketing-strategy");
export const webServices = services.filter((s) => s.group === "web");
export const aiServices = services.filter((s) => s.group === "ai");

export const megaGroups = [
  { title: "DIGITAL MARKETING", slugs: ["seo","local-seo","technical-seo","ai-search","google-ads","meta-ads"] },
  { title: "CREATIVE & CONTENT", slugs: ["content-marketing","social-media-marketing","email-marketing","cro","marketing-strategy"] },
  { title: "WEB & AI", slugs: ["web-design","web-development","e-commerce","landing-pages","ai-automation","ai-chatbots"] },
] as const;

export function faqsFor(service: Service): Faq[] {
  return [...sharedServiceFaq, ...service.extraFaq];
}
