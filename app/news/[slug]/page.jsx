import { notFound } from "next/navigation";
import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { getAllReleases, getReleaseBySlug } from "@/content/news";

export function generateStaticParams() {
  return getAllReleases().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) return {};

  return {
    title: release.title,
    description: release.summary,
    alternates: { canonical: `${SITE_URL}/news/${release.slug}` },
    openGraph: {
      title: `${release.title} — moneta`,
      description: release.summary,
      url: `${SITE_URL}/news/${release.slug}`,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${release.title} — moneta`,
      description: release.summary,
      images: ["/opengraph-image.png"],
    },
  };
}

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default async function NewsReleasePage({ params }) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "News", path: "/news" },
              { name: release.title, path: `/news/${release.slug}` },
            ])
          ),
        }}
      />

      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative max-w-[760px]">
          <Link href="/news" className="text-[14px] text-ink-secondary hover:text-white transition-colors">
            &larr; News
          </Link>
          <p className="mt-6 text-[13px] text-ink-secondary">{formatDate(release.date)}</p>
          <h1 className="text-balance mt-3" style={{ fontSize: "clamp(30px, 3.8vw, 46px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            {release.title}
          </h1>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div className="max-w-[760px]">
          {release.body?.map((paragraph, i) => (
            <p key={i} className="text-[15.5px] leading-[1.75] text-ink-secondary mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
