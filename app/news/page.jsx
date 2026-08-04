import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionShell from "@/components/ui/SectionShell";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { getAllReleases } from "@/content/news";

export const metadata = {
  title: "News",
  description: "Press releases and company news from moneta, the financial operating system for AWS and Azure cloud resellers.",
  alternates: { canonical: `${SITE_URL}/news` },
  openGraph: {
    title: "News — moneta",
    description: "Press releases and company news from moneta, the financial operating system for AWS and Azure cloud resellers.",
    url: `${SITE_URL}/news`,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "News — moneta",
    description: "Press releases and company news from moneta, the financial operating system for AWS and Azure cloud resellers.",
    images: ["/opengraph-image.png"],
  },
};

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function sourceName(sourceUrl) {
  if (!sourceUrl) return null;
  try {
    const host = new URL(sourceUrl).hostname.replace(/^www\./, "");
    if (host === "einpresswire.com") return "EIN Presswire";
    return host;
  } catch {
    return null;
  }
}

export default function NewsPage() {
  const releases = getAllReleases();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "News", path: "/news" },
            ])
          ),
        }}
      />

      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <Eyebrow className="mb-6">News</Eyebrow>
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            Press releases and company news.
          </h1>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[560px]">
            The latest news and updates from moneta.
          </p>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        {releases.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[16px] leading-[1.7] text-ink-secondary">No press releases yet. Check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-line-soft">
            {releases.map((r) => {
              const source = sourceName(r.sourceUrl);
              return (
                <Link key={r.slug} href={`/news/${r.slug}`} className="py-7 first:pt-0 group">
                  <p className="text-[13px] text-ink-secondary mb-2">
                    {formatDate(r.date)}
                    {source && <span> · via {source}</span>}
                  </p>
                  <h2 className="text-[20px] md:text-[22px] font-medium text-white group-hover:opacity-80 transition-opacity" style={{ letterSpacing: "-0.01em" }}>
                    {r.title}
                  </h2>
                  {r.summary && <p className="mt-2 text-[15px] leading-[1.7] text-ink-secondary max-w-[720px]">{r.summary}</p>}
                </Link>
              );
            })}
          </div>
        )}
      </SectionShell>
    </>
  );
}
