import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Breadcrumb } from "@/components/PageHero";
import { Btn } from "@/components/Btn";
import { postBySlug } from "@/content/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/posts/$slug")({
  loader: ({ params }) => {
    const post = postBySlug[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params }) => {
    const post = postBySlug[params.slug];
    if (!post) return {};
    return pageHead({
      title: `${post.title} | Vionix`,
      description: post.description,
      path: `/blog/posts/${post.slug}/`,
    });
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteShell scene="quiet">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { label: post.title },
        ]}
      />
      <article className="article-page">
        <div className="vx-wrap">
          <span className="tag">{post.tag}</span>
          <h1 className="h1" style={{ marginTop: 12 }}>
            {post.title}
          </h1>
          <p className="lead">{post.description}</p>
          <div className="article-meta">Published {post.date} · Vionix editorial</div>
          <div className="article-body">
            {post.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </section>
            ))}
          </div>
          <div className="article-related">
            <span className="eyebrow">Related services</span>
            <div className="chip-row" style={{ marginTop: 10 }}>
              <Link className="chip" to="/services/$slug" params={{ slug: "seo" }}>
                SEO
              </Link>
              <Link className="chip" to="/services/$slug" params={{ slug: "cro" }}>
                CRO
              </Link>
              <Link className="chip" to="/services/$slug" params={{ slug: "web-design" }}>
                Website Design
              </Link>
            </div>
          </div>
          <div className="article-cta">
            <h2 className="h2">Need help applying this to your business?</h2>
            <p>Start with a free growth audit and we can identify the practical next questions.</p>
            <Btn href="/contact">Get Free Audit</Btn>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
