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

export default async function NewsReleasePage({ params }) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) notFound();

  const body = release.body ?? [];
  const closerIndex = body.findIndex((b) => b.type === "boilerplate-start");
  const articleBlocks = closerIndex === -1 ? body : body.slice(0, closerIndex);
  const closerBlocks = closerIndex === -1 ? [] : body.slice(closerIndex + 1);

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
        <div className="container-x relative">
          <Link href="/news" className="text-[14px] text-ink-secondary hover:text-white transition-colors">
            &larr; News
          </Link>
          <h1 className="text-balance mt-6" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            {release.title}
          </h1>
          {release.dek && (
            <p className="mt-4 text-[17px] md:text-[18px] leading-[1.6] text-ink-secondary font-medium">{release.dek}</p>
          )}
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          {release.dateline && (
            <p className="italic text-[14px] text-ink-secondary pb-5 mb-6 border-b border-line-soft">
              {release.dateline} — {formatDate(release.date)}
            </p>
          )}
          {articleBlocks.map(renderBlock)}

          {closerBlocks.length > 0 && (
            <div
              className="mt-8 text-[13.5px]"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "22px 24px", color: "#8393a8" }}
            >
              {closerBlocks.map((block, i) => {
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="text-[13px] font-semibold tracking-[0.06em] uppercase mt-5 mb-2 first:mt-0" style={{ color: "#a7b3c4" }}>
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "lines") {
                  return (
                    <p key={i} className="leading-[1.7] mb-2">
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
                  <p key={i} className="leading-[1.7] mb-2">
                    {block.text}
                  </p>
                );
              })}
            </div>
          )}

          {release.sourceUrl && (
            <p className="mt-8 pt-6 border-t border-line-soft text-[14px] text-ink-secondary">
              <a href={release.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:opacity-80 underline">
                View original press release
              </a>
            </p>
          )}
        </div>
      </SectionShell>
    </>
  );
}
