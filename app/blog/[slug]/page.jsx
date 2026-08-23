import { notFound } from "next/navigation";
import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/content/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} — moneta`,
      description: post.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — moneta`,
      description: post.summary,
      images: ["/opengraph-image.png"],
    },
  };
}

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function renderBlock(block, i) {
  if (block.type === "h3") {
    return (
      <h3 key={i} className="text-[19px] md:text-[20px] font-medium text-white mt-8 mb-3 first:mt-0" style={{ letterSpacing: "-0.01em" }}>
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={i} className="list-disc pl-6 mb-4 space-y-1.5">
        {block.items.map((item, j) => (
          <li key={j} className="text-[15.5px] leading-[1.75] text-ink-secondary">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "lines") {
    return (
      <p key={i} className="text-[15.5px] leading-[1.75] text-ink-secondary mb-4">
        {block.lines.map((line, j) => (
          <span key={j}>
            {line}
            {j < block.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p key={i} className="text-[15.5px] leading-[1.75] text-ink-secondary mb-4">
      {block.text}
    </p>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <Link href="/blog" className="text-[14px] text-ink-secondary hover:text-white transition-colors">
            &larr; Blog
          </Link>
          <h1 className="text-balance mt-6" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            {post.title}
          </h1>
          {post.dek && (
            <p className="mt-4 text-[17px] md:text-[18px] leading-[1.6] text-ink-secondary font-medium">{post.dek}</p>
          )}
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          <p className="text-[14px] text-ink-secondary pb-5 mb-6 border-b border-line-soft">{formatDate(post.date)}</p>
          {(post.body ?? []).map(renderBlock)}
        </div>
      </SectionShell>
    </>
  );
}
