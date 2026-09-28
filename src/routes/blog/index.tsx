import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { ArrowIcon } from "@/components/Icons";
import { posts } from "@/content/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Blog | Vionix",
      description: "Useful articles about digital marketing, web, SEO, CRO and supporting AI systems.",
      path: "/blog/",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteShell scene="quiet">
      <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Blog" }]} />
      <PageHero
        eyebrow="Blog"
        title="Useful growth thinking, without the fluff."
        lead="Practical articles about SEO, websites, paid media, CRO and the systems that connect them."
      />
      <section className="section-sm">
        <div className="vx-wrap">
          <div className="grid-3">
            {posts.map((p) => (
              <article className="card article-card tilt" key={p.slug}>
                <span className="tag">{p.tag}</span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.description}</p>
                <div className="article-meta">{p.date}</div>
                <Link className="text-link" to="/blog/posts/$slug" params={{ slug: p.slug }}>
                  Read article <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="vx-wrap center reveal">
          <span className="eyebrow">Start with the problem</span>
          <h2 className="h2">
            Not sure which article—or service—<span className="grad-text">fits?</span>
          </h2>
          <p className="lead center">The free audit can help map the next useful investigation.</p>
          <div style={{ marginTop: 22 }}>
            <Btn href="/contact">Get Free Audit</Btn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
