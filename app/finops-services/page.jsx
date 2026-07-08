import Eyebrow from "@/components/ui/Eyebrow";
import ArrowRight from "@/components/ui/ArrowRight";
import FinalCTA from "@/components/ui/FinalCTA";
import SectionShell from "@/components/ui/SectionShell";
import DemoCtaButton from "@/components/DemoCtaButton";
import CustomerPortfolioCard from "@/components/sections/CustomerPortfolioCard";
import { SITE_URL, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Cloud FinOps Services",
  description:
    "moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure.",
  alternates: { canonical: `${SITE_URL}/finops-services` },
  openGraph: {
    title: "Cloud FinOps Services — moneta",
    description:
      "moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure.",
    url: `${SITE_URL}/finops-services`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud FinOps Services — moneta",
    description:
      "moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure.",
  },
};

const CHALLENGE_TOP = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
    t: "Customers need clear cost visibility",
    b: "Customers need reporting that explains spend, trends, cost drivers, and allocation across their cloud environments.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
    t: "Rate reduction requires context",
    b: "Savings recommendations are more useful when connected to usage patterns, business priorities, and customer environments.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    t: "Governance affects cost accuracy",
    b: "Tagging gaps, allocation issues, and unclear ownership make cloud cost reporting harder to trust.",
  },
];

const CHALLENGE_BOTTOM = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
    t: "Cloud FinOps delivery must be repeatable",
    b: "One-off cost reviews are difficult to scale across many customers and billing periods.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>,
    t: "Resellers need internal and customer views",
    b: "Internal teams need margin and billing context; customers need clear cost, savings, and optimization reporting.",
  },
];

const SOLUTION_TOP = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
    t: "Customer cost visibility",
    b: "Give customers clear reporting on cloud spend, usage trends, allocation, and cost drivers.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/></svg>,
    t: "Rate reduction and savings insights",
    b: "Identify opportunities to reduce waste, improve utilization, and take advantage of savings programs.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    t: "Budgeting and forecasting",
    b: "Support customer planning with budget tracking, spend trends, and forecast visibility.",
  },
];

const SOLUTION_BOTTOM = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    t: "Governance and tagging",
    b: "Improve allocation, accountability, tagging visibility, and cost ownership.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    t: "Managed Cloud FinOps reporting",
    b: "Deliver repeatable customer-facing reports that support ongoing cloud financial management.",
  },
];

const HOW_TOP = [
  { t: "Ingest cloud cost and usage data", b: "Bring cloud billing, usage, cost, account, subscription, and service data into one platform." },
  { t: "Organize spend by customer context", b: "Map spend to customers, accounts, subscriptions, services, teams, projects, or business units." },
  { t: "Surface cost drivers", b: "Identify where spend is increasing, which services are contributing, and what changed over time." },
];

const HOW_BOTTOM = [
  { t: "Identify savings opportunities", b: "Highlight waste, inefficient usage, discount opportunities, and optimization areas." },
  { t: "Track budgets and governance", b: "Monitor budgets, tagging, allocation, and cost ownership to improve financial discipline." },
  { t: "Deliver customized reports to end customers", b: "Provide customers with repeatable reporting for spend reviews, optimization planning, and Cloud FinOps conversations." },
];

export default function FinOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Cloud FinOps Services",
              description:
                "Cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting for AWS and Azure resellers.",
              path: "/finops-services",
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
              { name: "Cloud FinOps Services", path: "/finops-services" },
            ])
          ),
        }}
      />

      <section className="relative pt-[95px] md:pt-[120px] pb-12 md:pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <Eyebrow className="mb-6">Cloud FinOps</Eyebrow>
              <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
                Cloud FinOps for resellers and{" "}
                <span className="grad-text-bp">managed service providers.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[520px]">
                moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure environments.
              </p>
              <div className="mt-9">
                <DemoCtaButton variant="primary" className="!px-7 !py-4 !text-[15px]">
                  Book a Demo <ArrowRight />
                </DemoCtaButton>
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-4">
              <CustomerPortfolioCard />
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0F1729", paddingTop: 72, paddingBottom: 72 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Challenge</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
              Customers expect more than cloud billing.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              Cloud customers want to understand where spend is going, why it&apos;s changing, how to reduce their rates, and if they are getting an acceptable return from their cloud investments.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              Cloud FinOps delivery becomes difficult when billing data, reseller discounts, customer special pricing, technical savings adjustments, and governance reporting are not connected. Resellers need a repeatable way to turn cloud financial data into customer-facing value.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {CHALLENGE_TOP.map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "18px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif", marginBottom: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CHALLENGE_BOTTOM.map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "18px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif", marginBottom: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC", paddingTop: 72, paddingBottom: 72 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
              Turn cloud financial data into repeatable Cloud FinOps services.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              moneta helps resellers and MSPs deliver Cloud FinOps as a structured service by connecting reseller costs with customer spend data. This results in easy to understand end customer cost data, appropriate discount passthrough, reporting, and forecasting insights.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              Cloud FinOps becomes more than an occasional cost analysis. It becomes a strategic and repeatable valued customer service built on aligned billing, cost, discount, and reporting data.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {SOLUTION_TOP.map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SOLUTION_BOTTOM.map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="finops-how-it-works" className="border-t border-line-soft" style={{ background: "#0F2040", paddingTop: 56, paddingBottom: 56 }}>
        <div className="text-center max-w-[760px] mx-auto mb-5">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 10 }}>How It Works</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#f1f5f9" }}>
            From unwieldy cloud cost data to customer-facing Cloud FinOps value.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
            moneta allows reseller and MSP teams turn billing and usage data into meaningful Cloud FinOps workflows for customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {HOW_TOP.map((s) => (
            <div key={s.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HOW_BOTTOM.map((s) => (
            <div key={s.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <FinalCTA
        className="!py-10 md:!py-14"
        eyebrow="Ready to Deliver Cloud FinOps at Scale?"
        title="Turn Cloud data into a repeatable customer valued managed service."
        description="moneta enables cloud resellers and MSPs to deliver a high value customer managed services across every customer."
        ctaLabel="Book a Demo"
      />
    </>
  );
}
