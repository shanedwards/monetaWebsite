import Eyebrow from "@/components/ui/Eyebrow";
import ArrowRight from "@/components/ui/ArrowRight";
import SectionShell from "@/components/ui/SectionShell";
import DemoCtaButton from "@/components/DemoCtaButton";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Why moneta",
  description:
    "moneta sits between the reseller's cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the business grows.",
  alternates: { canonical: `${SITE_URL}/why-moneta` },
  openGraph: {
    title: "Why moneta — moneta",
    description:
      "moneta sits between the reseller's cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the business grows.",
    url: `${SITE_URL}/why-moneta`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Why moneta — moneta",
    description:
      "moneta sits between the reseller's cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the business grows.",
  },
};

const COMPARISON_ROWS = [
  {
    bad: { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>, text: "Cloud cost tools show provider spend, not the interplay between reseller and customer-level pricing." },
    good: "Every customer has a margin view that reconciles cloud cost, pricing rules, discounts, and credits.",
  },
  {
    bad: { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, text: "Billing systems generate invoices but cannot answer whether the customer is still profitable." },
    good: "Billing, pricing, discount, and margin live on one data model, so every invoice is also a margin signal.",
  },
  {
    bad: { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, text: "Generic Cloud FinOps tools assume one cloud team. Resellers support hundreds of customer environments with many teams involved." },
    good: "Customer-level FinOps is a repeatable service, with per-account budgets, anomalies, and savings work.",
  },
  {
    bad: { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, text: "Reseller cost reports are not customer-friendly and are not useful to customers." },
    good: "Branded, customer-facing reports show spend, allocation, and optimization in the customer's own language.",
  },
  {
    bad: { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, text: "Sales, ops, finance, and FinOps each work off a different spreadsheet of the same accounts." },
    good: "Shared workspace where every team sees the same accounts, rules, and outcomes in real time.",
  },
];

const WHAT_IT_IS_CARDS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    t: "Customer-level profitability",
    b: "See margin for each customer, not just aggregate cost. The number every reseller actually runs the business on.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    t: "Customer-facing Cloud FinOps",
    b: "Deliver reporting, savings reviews, and budget tracking as part of your service, with your brand on every artifact.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>,
    t: "Multi-cloud, one workspace",
    b: "The reseller motion stays the same regardless of cloud.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><path d="M11 18H8a2 2 0 01-2-2V9"/></svg>,
    t: "Connects to what you already run",
    b: "Integrates with your accounting and reporting systems so financial data signals reach the right team with ease.",
  },
];

const STEPS_TOP = [
  { step: 1, t: "Connect cloud accounts", b: "Secure connections to cloud accounts pull billing, usage, and commitment data into the operating system." },
  { step: 2, t: "Map customers and contracts", b: "Each linked or subscription account is associated with the right customer, contract, and commitment treatment." },
  { step: 3, t: "Define pricing and discount rules", b: "Pricing markups, volume tiers, service overrides, and discount programs live as rules that resolve per customer." },
];

const STEPS_BOTTOM = [
  { step: 4, t: "Reconcile to margin", b: "Cloud cost, pricing rules, discounts, and credits combine into a customer-level margin view every billing period." },
  { step: 5, t: "Ship customer reports", b: "Branded reports go to customers automatically, covering spend, allocation, savings progress, and budget health." },
  { step: 6, t: "Operate as a service", b: "Savings work, governance reviews, and budget conversations become a repeatable motion across the customer base." },
];

function MarginFlowCard() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 515, margin: "0 auto", paddingBottom: 66 }}>
      <div style={{ background: "linear-gradient(160deg, #0b1a2e 0%, #0d2040 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: "20px 22px 22px", boxShadow: "0 24px 60px rgba(0,0,0,0.6)", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15, pointerEvents: "none" }} aria-hidden="true">
          <defs><pattern id="wdg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#5B7BFF"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#wdg)" />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, position: "relative" }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 4 }}>Margin Flow</p>
            <p style={{ fontSize: 15, fontWeight: 500, color: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>From cloud cost to customer margin</p>
          </div>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(30,40,60,0.9)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, padding: "5px 12px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>Reconciled</span>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <svg width="100%" viewBox="0 0 448 180" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
            <defs>
              <linearGradient id="wm2_blue" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#1d4ed8"/></linearGradient>
              <linearGradient id="wm2_amber" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b45309"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
              <linearGradient id="wm2_slate" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1e3248"/><stop offset="100%" stopColor="#253a52"/></linearGradient>
              <linearGradient id="wm2_green" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#16a34a"/><stop offset="100%" stopColor="#22c55e"/></linearGradient>
              <linearGradient id="wm2_bluecon" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#1e3a52"/></linearGradient>
              <linearGradient id="wm2_bluecon_l" gradientUnits="userSpaceOnUse" x1="286" y1="0" x2="322" y2="0"><stop offset="0%" stopColor="#1e3a52"/><stop offset="100%" stopColor="#1d4ed8"/></linearGradient>
              <linearGradient id="wm2_ambercon" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#1e3a52"/></linearGradient>
              <linearGradient id="wm2_ambercon_l" gradientUnits="userSpaceOnUse" x1="286" y1="0" x2="322" y2="0"><stop offset="0%" stopColor="#1e3a52"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
              <linearGradient id="wm2_greencon" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1e3a52"/><stop offset="100%" stopColor="#16a34a"/></linearGradient>
              <filter id="wm2_glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>

            <path d="M286,18 C304,18 304,8 322,8 L322,72 C304,72 304,62 286,62 Z" fill="url(#wm2_greencon)"/>
            <rect x="8"   y="2"  width="124" height="76" rx="8" fill="url(#wm2_blue)"/>
            <rect x="168" y="18" width="118" height="44" rx="7" fill="url(#wm2_slate)"/>
            <rect x="322" y="2"  width="118" height="76" rx="8" fill="url(#wm2_green)" filter="url(#wm2_glow)"/>
            <path d="M286,18 C304,18 304,8 322,8 L322,72 C304,72 304,62 286,62 Z"
              fill="url(#wm2_bluecon_l)"
              transform="scale(-1,1) translate(-454,0)"/>
            <text x="70"  y="45" textAnchor="middle" style={{ fontSize: 13, fontWeight: 600, fill: "#fff",     fontFamily: "Inter, sans-serif" }}>Cloud cost</text>
            <text x="227" y="45" textAnchor="middle" style={{ fontSize: 12, fontWeight: 500, fill: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Customer bill</text>
            <text x="381" y="45" textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: "#f0fdf4", fontFamily: "Inter, sans-serif" }}>Revenue</text>

            <path d="M286,118 C304,118 304,108 322,108 L322,172 C304,172 304,162 286,162 Z" fill="url(#wm2_greencon)"/>
            <rect x="8"   y="102" width="124" height="76" rx="8" fill="url(#wm2_amber)"/>
            <rect x="168" y="118" width="118" height="44" rx="7" fill="url(#wm2_slate)"/>
            <rect x="322" y="102" width="118" height="76" rx="8" fill="url(#wm2_green)" filter="url(#wm2_glow)"/>
            <path d="M286,118 C304,118 304,108 322,108 L322,172 C304,172 304,162 286,162 Z"
              fill="url(#wm2_ambercon_l)"
              transform="scale(-1,1) translate(-454,0)"/>
            <text x="70"  y="145" textAnchor="middle" style={{ fontSize: 13, fontWeight: 600, fill: "#fef3c7", fontFamily: "Inter, sans-serif" }}>Commitments</text>
            <text x="227" y="145" textAnchor="middle" style={{ fontSize: 12, fontWeight: 500, fill: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Discount engine</text>
            <text x="381" y="145" textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: "#f0fdf4", fontFamily: "Inter, sans-serif" }}>Net margin</text>
          </svg>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 8, position: "relative" }}>
          {[
            { label: "cloud cost", value: "$284,040", border: "rgba(255,255,255,0.1)", color: "#f1f5f9" },
            { label: "adjustments", value: "$38,120", border: "rgba(255,255,255,0.1)", color: "#f1f5f9" },
            { label: "margin", value: "$46,210", border: "rgba(34,197,94,0.35)", color: "#f1f5f9" },
          ].map((t) => (
            <div key={t.label} style={{ background: "rgba(8,14,28,0.7)", border: `1px solid ${t.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 400, color: "#64748b", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>{t.label}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: t.color, fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>{t.value}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes floatUpDownWhy1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }`}</style>
      <div style={{ position: "absolute", bottom: -8, left: 16, background: "#ffffff", borderRadius: 12, padding: "11px 14px", width: 272, boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)", pointerEvents: "none", animation: "floatUpDownWhy1 3s ease-in-out infinite" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a", fontFamily: "Inter, sans-serif" }}>Margin Trend</span>
        </div>
        <p style={{ fontSize: 12.5, fontWeight: 600, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 3 }}>$46.2k Acme Co. increase this month</p>
        <p style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Cloud FinOps service contributed $45k this month</p>
      </div>
    </div>
  );
}

export default function WhyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Why moneta", path: "/why-moneta" },
            ])
          ),
        }}
      />

      <section className="relative pt-[95px] md:pt-[120px] pb-4 md:pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <Eyebrow className="mb-6">Why moneta</Eyebrow>
              <h1 style={{ fontSize: "clamp(34px, 3.9vw, 55px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Built for the way cloud
                <br />
                resellers actually
                <br />
                <span className="grad-text-bp">operate, bill, and grow.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[520px]">
                moneta sits between the reseller&apos;s cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the reseller&apos;s business grows.
              </p>
              <div className="mt-9">
                <DemoCtaButton variant="primary" className="!px-7 !py-4 !text-[15px]">
                  Book a Demo <ArrowRight />
                </DemoCtaButton>
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-4" style={{ paddingTop: "clamp(0px, 2vw, 28px)" }}>
              <MarginFlowCard />
            </div>
          </div>
        </div>
      </section>

      <SectionShell style={{ background: "#0F2040", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <Eyebrow className="mb-5">The Reseller Problem</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px, 2.9vw, 37px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
              Most stacks were built for direct
              <br />
              customers, not resellers.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4" style={{ paddingTop: 40 }}>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#b8c4d4" }}>
              Cost visibility tools assume one buyer. Billing tools assume one rate card. Cloud FinOps tools assume one cloud team. A reseller has many of each, and the gaps between them are where margin leaks.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#b8c4d4" }}>
              moneta closes those gaps. Here is what changes once it is in place.
            </p>
          </div>
        </div>
        <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ background: "rgba(239,68,68,0.14)", borderBottom: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)", padding: "14px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#ef4444", fontFamily: "Inter, sans-serif" }}>Without moneta</span>
            </div>
            <div style={{ background: "rgba(34,197,94,0.14)", borderBottom: "1px solid rgba(255,255,255,0.15)", padding: "14px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#22c55e", fontFamily: "Inter, sans-serif" }}>With moneta</span>
            </div>
          </div>
          {COMPARISON_ROWS.map((row, i, arr) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
              <div style={{ padding: "18px 20px", borderRight: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}>{row.bad.icon}</span>
                <p style={{ fontSize: 14, color: "#b8c4d4", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{row.bad.text}</p>
              </div>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                <p style={{ fontSize: 14, color: "#b8c4d4", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{row.good}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
          <div>
            <Eyebrow className="mb-5">What moneta is</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
              An operating system for cloud reseller billing.
            </h2>
          </div>
          <div className="flex flex-col justify-end" style={{ paddingTop: 40 }}>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              moneta brings billing, pricing, discount management, and margin intelligence into one platform, so the operating motion of a reseller stays aligned across customers and clouds.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="hover-lift" style={{ background: "#0F2040", borderRadius: 16, padding: "28px 28px 24px" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 500, color: "#f1f5f9", fontFamily: "Inter, sans-serif", marginBottom: 12, lineHeight: 1.3 }}>Built reseller-first, from the data model up.</h3>
            <p style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.65, fontFamily: "Inter, sans-serif", marginBottom: 20 }}>
              Other tools bolt reseller logic onto a direct-customer product. moneta starts with the reseller&apos;s data: pricing rules, contracts, commitments, discounts, customer segregation, and margin.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
              {[
                "Customer-level margin from day one",
                "Pricing rules that resolve per account",
                "Branded reports your customers actually understand",
                "Commitments, MACC, and credit treatment in one engine",
              ].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ fontSize: 12.5, color: "#b8c4d4", lineHeight: 1.5, fontFamily: "Inter, sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_IT_IS_CARDS.map((c) => (
              <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 14.5, fontWeight: 500, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.3 }}>{c.t}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="why-how-it-fits" className="border-t border-line-soft light-section" style={{ background: "#DDE4EF" }}>
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
            Six Steps to Driving Revenue and Margin with moneta.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7]" style={{ color: "#64748b" }}>
            moneta starts producing customer-level margin in days and enables an immediate and easy to implement Cloud FinOps service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {STEPS_TOP.map((s) => (
            <div key={s.t} className="hover-border-emphasis" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS_BOTTOM.map((s) => (
            <div key={s.t} className="hover-border-emphasis" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell style={{ background: "#060B18", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 40, paddingBottom: 40 }}>
        <div className="text-center max-w-[640px] mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3B82F6", display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B82F6", fontFamily: "Inter, sans-serif" }}>Ready to grow your cloud revenue and margin?</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
            See why resellers replace stitched workflows with moneta.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7]" style={{ color: "#94a3b8" }}>
            Make the quick connection to an account and see what the operating system can do with it – in 45 minutes.
          </p>
          <div className="mt-9">
            <DemoCtaButton variant="primary" className="!px-8 !py-4 !text-[15px]">
              Book a Demo <ArrowRight />
            </DemoCtaButton>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
