export type Post = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  sections: { h: string; p: string }[];
};

export const posts: Post[] = [
  {
    slug: "how-long-does-seo-take",
    tag: "SEO",
    title: "How long does SEO take for a small business?",
    description: "A practical way to think about SEO timelines, foundations, intent and evidence.",
    date: "2026-09-28",
    sections: [
      {
        h: "SEO has no single countdown",
        p: "Search visibility depends on the starting condition of the site, the demand behind the queries, the quality and relevance of the content, competition and how quickly useful changes can be implemented. A useful plan therefore focuses on milestones rather than a promised ranking date.",
      },
      {
        h: "A practical sequence",
        p: "First fix technical and indexing foundations. Then align pages with search intent, strengthen internal linking and publish useful content. After implementation, use Search Console and analytics to observe crawling, indexing, impressions, clicks and conversions. The sequence matters because later work is easier to evaluate when the foundations are clean.",
      },
      {
        h: "What can change the timeline?",
        p: "A site with strong technical foundations and clear commercial pages may have a different path from a site with duplicate URLs, weak architecture or very little helpful content. Major migrations, new markets and competitive queries can also change the amount of work required.",
      },
      {
        h: "What to measure first",
        p: "Early signals can include indexed pages, impressions, query coverage, clicks, relevant landing-page traffic and conversion actions. These are evidence of progress, not guarantees of a future ranking.",
      },
      {
        h: "A better client conversation",
        p: "Instead of “How many days until page one?”, ask “What foundations are we fixing, what pages are we improving, and what evidence will tell us the work is helping?” That produces a plan the business can actually learn from.",
      },
    ],
  },
  {
    slug: "landing-page-vs-website",
    tag: "Web",
    title: "Landing page vs website: what does your business need?",
    description: "Understand the different jobs a focused landing page and a full website perform.",
    date: "2026-09-28",
    sections: [
      {
        h: "They solve different information problems",
        p: "A website usually supports several journeys: learning about the company, exploring services, finding proof, reading resources and contacting the business. A landing page is narrower: it carries a specific promise from one traffic source toward one primary action.",
      },
      {
        h: "Choose a landing page when focus matters",
        p: "Campaigns, product launches and lead-generation offers often benefit from a focused page because navigation and competing actions can be reduced. The page should continue the same message the visitor saw in the ad, search result or email.",
      },
      {
        h: "Choose a website when breadth matters",
        p: "A company with multiple services, audiences, locations or long-term content needs generally benefits from a structured site. The information architecture should make those relationships easy to understand and easy to crawl.",
      },
      {
        h: "You can use both",
        p: "The strongest system is often a website plus focused landing pages. The website explains the broader business; campaign pages handle specific offers. Analytics can then show how visitors move between acquisition, content and conversion.",
      },
      {
        h: "A practical decision test",
        p: "List the top three questions a new visitor asks. If one page can answer them and lead to one action, a landing page may fit the immediate job. If visitors need several paths, a broader website structure may be more appropriate.",
      },
    ],
  },
  {
    slug: "google-ads-not-converting",
    tag: "Paid Media",
    title: "Why Google Ads can get clicks but not customers",
    description: "A diagnostic framework for the full Google Ads conversion chain.",
    date: "2026-09-28",
    sections: [
      {
        h: "Clicks are only the middle of the journey",
        p: "A click means someone chose to visit. It does not confirm search intent, offer fit, page clarity, trust or the quality of the conversion path.",
      },
      {
        h: "Check query quality",
        p: "Look at search terms and intent. Broad or loosely matched queries can create traffic that looks active in the report but does not represent the customer you actually want.",
      },
      {
        h: "Check the landing page",
        p: "The visitor should immediately understand what is being offered, who it is for, why it is credible and what to do next. On mobile, forms and calls to action should be easy to use without unnecessary friction.",
      },
      {
        h: "Check measurement before optimizing",
        p: "Make sure the conversion action being counted is the action the business actually values. A campaign can look efficient if the tracking is measuring the wrong event.",
      },
      {
        h: "Optimize the chain, not one metric",
        p: "A useful paid-search review connects query quality, ad message, landing-page experience, conversion tracking and downstream business outcomes. Optimizing only clicks or only cost per click can hide where the actual friction sits.",
      },
    ],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p])) as Record<string, Post>;
