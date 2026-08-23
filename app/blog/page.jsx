import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { getAllPosts } from "@/content/blog";

export const metadata = {
  title: "Blog",
  description: "Insights on cloud reseller billing, margins, and FinOps from moneta, the financial operating system for AWS and Azure cloud resellers.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — moneta",
    description: "Insights on cloud reseller billing, margins, and FinOps from moneta, the financial operating system for AWS and Azure cloud resellers.",
    url: `${SITE_URL}/blog`,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — moneta",
    description: "Insights on cloud reseller billing, margins, and FinOps from moneta, the financial operating system for AWS and Azure cloud resellers.",
    images: ["/opengraph-image.png"],
  },
};

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ])
          ),
        }}
      />

      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <Eyebrow className="mb-6">Blog</Eyebrow>
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            The moneta Blog.
          </h1>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[560px]">
            Insights on cloud reseller billing, margins, and FinOps.
          </p>
        </div>
      </section>

      <section className="border-t border-line-soft py-10 md:py-14 !pt-0">
        {posts.length === 0 ? (
          <div className="container-x text-center pt-8 pb-16">
            <p className="text-[16px] leading-[1.7] text-ink-secondary">No blog posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block w-screen relative left-1/2 -translate-x-1/2 py-7 first:pt-8 border-b border-line-soft group transition-colors duration-200 hover:bg-white/[0.03]"
              >
                <div className="container-x">
                  <p className="text-[13px] text-ink-secondary mb-2">{formatDate(p.date)}</p>
                  <h2 className="text-[20px] md:text-[22px] font-medium text-white group-hover:opacity-80 transition-opacity" style={{ letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h2>
                  {p.summary && <p className="mt-2 text-[15px] leading-[1.7] text-ink-secondary max-w-[720px]">{p.summary}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
