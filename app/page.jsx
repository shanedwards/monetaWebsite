import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowRight from "@/components/ui/ArrowRight";
import FinalCTA from "@/components/ui/FinalCTA";
import HeroSplit from "@/components/sections/HeroSplit";
import MarginIntelligenceCard from "@/components/sections/MarginIntelligenceCard";
import ResultsGraphic from "@/components/sections/ResultsGraphic";
import FinOpsServiceTabs from "@/components/sections/FinOpsServiceTabs";
import TrustBar from "@/components/diagrams/TrustBar";
import OperatingSystemDiagram from "@/components/diagrams/OperatingSystemDiagram";
import ReconciliationLoop from "@/components/diagrams/ReconciliationLoop";
import FaqSection from "@/components/Faq";
import HashRedirectShim from "@/components/HashRedirectShim";
import { PROBLEM_ROWS, FAQS } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  title: "moneta — Cloud Reseller Billing",
  description:
    "The financial operating system for AWS and Azure cloud resellers — aligning billing, pricing, discounts, and margins in one platform.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "moneta — Cloud Reseller Billing",
    description:
      "The financial operating system for AWS and Azure cloud resellers — aligning billing, pricing, discounts, and margins in one platform.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "moneta — Cloud Reseller Billing",
    description:
      "The financial operating system for AWS and Azure cloud resellers — aligning billing, pricing, discounts, and margins in one platform.",
  },
};

function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <HashRedirectShim />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }}
      />
      <HeroSplit
        tagline="Built for AWS & Azure Resellers"
        title="Eliminate Margin Loss in Cloud Reseller Billing"
        accentWord="Cloud Reseller Billing"
        description={
          <span>
            The <span className="grad-text-bp font-semibold">financial operating system</span> for cloud resellers that keeps
            billing, pricing, discounts, and margins aligned across every customer.
          </span>
        }
        ctaLabel="Book a Demo"
        right={<MarginIntelligenceCard />}
      />

      {/* Trust bar */}
      <section className="container-x relative -mt-2 md:-mt-4 mb-10 md:mb-14">
        <TrustBar />
      </section>

      {/* PROBLEM */}
      <SectionShell className="border-t border-line-soft overflow-hidden" dotsRight style={{ background: "#0F2040" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute", top: 0, left: 0, width: 260, height: 200,
              backgroundImage: "radial-gradient(rgba(91,123,255,0.35) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
              maskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
              animation: "dotDriftA 16s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: 0, right: 0, width: 260, height: 200,
              backgroundImage: "radial-gradient(rgba(168,85,247,0.3) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
              maskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
              animation: "dotDriftB 19s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes dotDriftA {
            0%, 100% { transform: translate(0, 0); opacity: 0.55; }
            50%      { transform: translate(8px, 6px); opacity: 0.85; }
          }
          @keyframes dotDriftB {
            0%, 100% { transform: translate(0, 0); opacity: 0.5; }
            50%      { transform: translate(-8px, -6px); opacity: 0.8; }
          }
        `}</style>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch relative" style={{ zIndex: 1 }}>
          <div className="lg:col-span-6 flex flex-col lg:justify-center">
            <Eyebrow className="mb-5">The Problem</Eyebrow>
            <h2 className="text-h1" style={{ fontSize: "clamp(34px, 3.8vw, 54px)" }}>
              Margin Loss Is Built Into
              <br />
              <span className="grad-text-bp">Cloud Reseller Billing</span>
            </h2>
            <span className="block mt-5 h-[3px] w-32 grad-line rounded-full" />
            <div className="mt-7 flex items-center gap-2 text-accent-cyan text-[13px] font-semibold tracking-[0.18em] uppercase">
              <ArrowRight size={14} /> Why It Happens
            </div>
            <p className="mt-3 text-[18px] leading-[1.65] text-ink-secondary">
              Resellers operate in complex pricing and discount environments.
            </p>
            <p className="mt-2 text-[18px] leading-[1.65] text-white font-semibold">Hidden margin loss is the result.</p>
            <hr className="my-5 border-line-soft" />
            <p className="text-[18px] leading-[1.65] text-ink-secondary">
              Without the right system, billing is manual and discounts are inconsistent.
            </p>
            <p className="mt-2 text-[18px] leading-[1.65] text-white font-semibold">Margins lack visibility and control.</p>
          </div>

          <div className="lg:col-span-6 flex flex-col items-end lg:pt-[16px]">
            <div className="flex flex-col gap-3" style={{ width: "min(100%, 480px)" }}>
              {PROBLEM_ROWS.map((row) => (
                <div key={row.t} className="card flex items-center gap-5 px-5 py-3 hover:border-line-hover flex-1">
                  <div className="w-12 h-12 grid place-items-center shrink-0">
                    <Image src={row.src} alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
                  </div>
                  <span className="block w-px self-stretch bg-line-soft" />
                  <p className="text-[15px] md:text-[16px] text-ink-primary leading-[1.5] max-w-[330px]">{row.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-6 !rounded-2xl px-7 py-5 md:px-8 md:py-6 relative overflow-hidden"
          style={{
            border: "1px solid rgba(34,211,238,0.5)",
            background: "#070d18",
            boxShadow: "0 0 24px rgba(34,211,238,0.18), inset 0 0 30px rgba(34,211,238,0.04)",
          }}
        >
          <div className="flex items-center gap-6 relative">
            <div className="grid place-items-center shrink-0">
              <Image src="/graphics/icons/ProblemBLicon.png" alt="" width={52} height={52} style={{ width: 52, height: 52 }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="eyebrow text-[11px] mb-1.5" style={{ color: "#22D3EE" }}>
                The Bottom Line
              </p>
              <p className="text-[19px] md:text-[24px] font-semibold leading-[1.25] text-balance">
                Margin loss{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #22D3EE, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 20px rgba(34,211,238,0.4)",
                  }}
                >
                  compounds
                </span>{" "}
                across every customer.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell className="border-t border-line-soft light-section" dotsRight style={{ background: "#F8FAFC" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(26px, 2.6vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Align billing, pricing, discounts, and margins in <span className="grad-text-bp">one system.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end gap-4 lg:pt-0">
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              moneta connects cloud billing data, customer pricing rules, discount programs, and margin visibility in one
              platform, helping resellers operate with better control across every customer account.
            </p>
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              Instead of treating billing, pricing, discounts, and margin reporting as separate workflows, moneta brings
              them together into a connected operating layer for cloud reseller operations.
            </p>
          </div>
        </div>

        <ReconciliationLoop />

        <div className="mt-8 flex justify-center">
          <div className="card !rounded-2xl px-8 py-5 inline-flex justify-center" style={{ borderColor: "rgba(168,85,247,0.4)" }}>
            <p className="text-[19px] md:text-[22px] font-semibold leading-[1.3] text-center">
              One System. Everything <span className="grad-text-bp">Aligned.</span>
            </p>
          </div>
        </div>
      </SectionShell>

      {/* OPERATING SYSTEM */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#060B18" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Operating System</Eyebrow>
            <h2 className="text-h1 text-balance">
              Total Clarity. <span className="grad-text-bp">Every Layer.</span>
            </h2>
            <span className="block mt-5 h-[3px] w-32 grad-line rounded-full" />
            <p className="mt-6 text-[18px] leading-[1.7] text-ink-secondary">
              moneta connects every layer of cloud reseller billing — from raw usage data and vendor pricing to customer
              invoices and real-time margin visibility.
            </p>
            <p className="mt-4 text-[18px] leading-[1.7] text-ink-secondary">
              Not a dashboard. Not a plugin. A purpose-built operating system for how resellers actually run.
            </p>
          </div>
          <div className="lg:col-span-7 min-w-0">
            <OperatingSystemDiagram />
          </div>
        </div>
      </SectionShell>

      {/* RESULTS */}
      <SectionShell className="border-t border-line-soft" dotsLeft style={{ background: "#0F2040" }}>
        <ResultsGraphic />
      </SectionShell>

      {/* FINOPS PREVIEW */}
      <SectionShell className="border-t border-line-soft light-section" dotsLeft style={{ background: "#F8FAFC" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Cloud FinOps Managed Services</Eyebrow>
            <h2 className="text-h1" style={{ fontSize: "clamp(36px, 3.8vw, 52px)" }}>
              Deliver Cloud
              <br />
              FinOps as a
              <br />
              <span className="grad-text-bp">Managed Service</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              Cloud service providers are expected to help customers manage and optimize cloud spend.
            </p>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              With aligned billing, pricing, and margin data, Cloud FinOps becomes a structured, repeatable service
              delivered across every customer.
            </p>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <div className="w-full max-w-[680px]" style={{ marginTop: 12 }}>
              <FinOpsServiceTabs />
            </div>
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        title="Stop discovering margin at quarter-end."
        description="Bring your own resell environment. We'll show you what the moneta operating system can do with it – in 45 minutes."
        ctaLabel="Book a Demo"
      />

      <FaqSection />
    </>
  );
}
