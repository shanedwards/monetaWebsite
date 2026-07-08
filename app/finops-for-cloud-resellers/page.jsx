import Eyebrow from "@/components/ui/Eyebrow";
import FinalCTA from "@/components/ui/FinalCTA";
import SectionShell from "@/components/ui/SectionShell";
import FinOpsDiagram from "@/components/diagrams/FinOpsDiagram";
import { SITE_URL, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata = {
  title: "FinOps for Cloud Resellers",
  description:
    "A structured, repeatable Cloud FinOps service for AWS and Azure resellers — deliver FinOps consistently across every customer without added operational burden.",
  alternates: { canonical: `${SITE_URL}/finops-for-cloud-resellers` },
  openGraph: {
    title: "FinOps for Cloud Resellers — moneta",
    description:
      "A structured, repeatable Cloud FinOps service for AWS and Azure resellers — deliver FinOps consistently across every customer without added operational burden.",
    url: `${SITE_URL}/finops-for-cloud-resellers`,
  },
  twitter: {
    card: "summary_large_image",
    title: "FinOps for Cloud Resellers — moneta",
    description:
      "A structured, repeatable Cloud FinOps service for AWS and Azure resellers — deliver FinOps consistently across every customer without added operational burden.",
  },
};

const COMPARISON_ROWS = [
  ["One-off cost analysis", "Continuous FinOps delivery across every customer account", "#3B82F6"],
  ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
  ["Manual, reactive optimization", "Continuous, system-driven optimization across every customer", "#6366F1"],
  ["One-time engagement", "Recurring FinOps service delivered at scale", "#A855F7"],
];

const WHY_FEATURES = [
  { t: "Customer review reporting", b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
  { t: "Optimization playbooks", b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
  { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
  { t: "One source of truth", b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
];

export default function FinOpsForCloudResellersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "FinOps for Cloud Resellers",
              description:
                "A structured, repeatable Cloud FinOps service delivered consistently across every customer for AWS and Azure resellers.",
              path: "/finops-for-cloud-resellers",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "FinOps for Cloud Resellers", path: "/finops-for-cloud-resellers" },
            ])
          ),
        }}
      />

      <section className="relative pt-[110px] md:pt-[140px] pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative text-center">
          <Eyebrow className="mb-7 flex flex-col items-center">FinOps for Cloud Resellers</Eyebrow>
          <h1 className="max-w-[900px] mx-auto" style={{ fontSize: "clamp(36px, 4.2vw, 58px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            Deliver FinOps Consistently
            <br />
            Across <span className="grad-text-bp">Every Customer</span>
          </h1>
          <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[580px] mx-auto">
            A structured, repeatable FinOps service—without added operational burden.
          </p>
          <FinOpsDiagram />
        </div>
      </section>

      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        <div className="text-center mx-auto">
          <h2 className="text-h1 whitespace-nowrap">
            FinOps <span className="grad-text-bp">cannot</span> scale without infrastructure.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary whitespace-nowrap">
            Without system-level alignment, FinOps depends on disconnected tools, manual reconciliation, and one-time analysis.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-line-soft">
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(0,0,0,0.03)" }}>
            <p className="eyebrow text-[10px] text-ink-muted">Without Infrastructure</p>
            <div />
            <p className="eyebrow text-[10px] grad-text-bp">With moneta</p>
          </div>
          {COMPARISON_ROWS.map(([a, b, c], i, arr) => (
            <div
              key={a}
              className={`grid grid-cols-[1fr_40px_1fr] items-center px-6 py-4 ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}
            >
              <p className="text-[15px] text-ink-secondary leading-[1.5]">{a}</p>
              <div className="flex items-center justify-center">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                  <line x1="0" y1="5" x2="14" y2="5" stroke={c} strokeWidth="1" opacity="0.5" />
                  <path d="M12,3 L16,5 L12,7" fill="none" stroke={c} strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square" />
                </svg>
              </div>
              <p className="text-[15px] font-semibold leading-[1.45]" style={{ color: c }}>{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted whitespace-nowrap text-center">
          When billing, pricing, and discount data operate within a single system, FinOps no longer depends on
          manual reconciliation or disconnected tools.
        </p>
      </SectionShell>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Why moneta</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built for <span className="grad-text-bp">AWS and Azure</span> resellers managing multiple customers, pricing models, and discount programs.
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-secondary">
              Every feature is shaped by how resellers actually operate — not adapted from single-tenant tools.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-2.5">
            {WHY_FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="flex items-start gap-4 px-5 py-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${f.c}` }}
              >
                <span className="text-[11px] font-bold mt-0.5 shrink-0" style={{ color: f.c }}>0{i + 1}</span>
                <div>
                  <h4 className="text-[15px] font-semibold mb-1 text-white">{f.t}</h4>
                  <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        title="Build a FinOps practice on your own billing data."
        description="See how resellers are productizing cloud financial management with moneta as the spine."
        ctaLabel="Book a Demo"
      />
    </>
  );
}
