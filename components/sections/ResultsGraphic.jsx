"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

function CountUp({ target, decimals, suffix, color, glow, started }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [started, target]);
  return (
    <span style={{ color, textShadow: `0 0 20px ${glow}` }}>
      {val.toFixed(decimals)}{suffix}
    </span>
  );
}

const TIMELINE_STATS = [
  { target: 13.2, decimals: 1, suffix: "%", label: "Resell Margin",              color: "#2dd4bf", glow: "rgba(45,212,191,0.5)", desc: "See true margin per customer with granular cost allocation and real-time margin insights.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { target: 25.8, decimals: 1, suffix: "%", label: "Total Margin",               color: "#38bdf8", glow: "rgba(56,189,248,0.5)",  desc: "Standardize billing and operations to support more customers without adding headcount or complexity.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { target: 14.6, decimals: 1, suffix: "%", label: "Revenue Growth",             color: "#a855f7", glow: "rgba(168,85,247,0.5)",  desc: "Eliminate manual work and invoice accurately at any scale with confidence and consistency.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg> },
  { target: 12,   decimals: 0, suffix: "x", label: "More Accounts Per Ops FTE", color: "#f59e0b", glow: "rgba(245,158,11,0.5)",  desc: "See true margin per customer with granular cost allocation and real-time margin insights.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

const BOTTOM_FEATURES = [
  { color: "#2dd4bf", iconBg: "rgba(45,212,191,0.12)", iconBorder: "rgba(45,212,191,0.3)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>, title: "Identify margin gaps earlier", desc: "See where customer pricing, discount allocation, or billing logic may be reducing profitability." },
  { color: "#38bdf8", iconBg: "rgba(56,189,248,0.12)",  iconBorder: "rgba(56,189,248,0.3)",  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: "Customer-level profitability visibility", desc: "Understand margin per customer instead of relying on aggregate revenue or cost views." },
  { color: "#6366f1", iconBg: "rgba(99,102,241,0.12)",  iconBorder: "rgba(99,102,241,0.3)",  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>, title: "Scale reseller operations", desc: "Support more customers and more complex cloud environments without proportional overhead." },
];

export default function ResultsGraphic() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex flex-col items-center text-center">
        <Eyebrow className="mb-6 flex flex-col items-center">Results</Eyebrow>
        <h2 className="text-h1">Real outcomes for cloud resellers.</h2>
        <p className="mt-6 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[640px]">
          Improve billing control, protect margins, and scale customer operations without adding
          unnecessary complexity.
        </p>
      </div>

      <div className="grid grid-cols-2 md:[grid-template-columns:repeat(4,1fr)]" style={{ marginTop: 40, background: "rgba(13,20,42,0.6)", border: "1px solid rgba(99,102,241,0.18)", borderRadius: 16, overflow: "hidden", backdropFilter: "blur(12px)" }}>
        {TIMELINE_STATS.map((s, i) => (
          <div
            key={s.label}
            className={
              (i % 2 === 1 ? "" : "border-r") + " " +
              (i >= 2 ? "border-t" : "") + " " +
              "md:border-t-0 " + (i === 0 ? "md:border-l-0" : "md:border-l") + " md:border-r-0"
            }
            style={{ padding: "20px 16px", textAlign: "left", borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="text-[36px] md:text-[52px]" style={{ fontWeight: 800, lineHeight: 1, letterSpacing: "-2px", fontFamily: "Inter, sans-serif", color: s.color, textShadow: `0 0 28px ${s.glow}` }}>
              <CountUp {...s} started={started} />
            </div>
            <div className="text-[10px] md:text-[11px]" style={{ fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", fontFamily: "Inter, sans-serif", marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-[18px]" style={{ marginTop: 20 }}>
        {BOTTOM_FEATURES.map(f => (
          <div key={f.title} className="p-2.5 md:p-[22px_24px]" style={{ background: "rgba(13,20,42,0.6)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, backdropFilter: "blur(10px)" }}>
            <div className="flex items-center gap-1.5 md:gap-3 mb-2 md:mb-3">
              <div className="w-7 h-7 md:w-[38px] md:h-[38px]" style={{ borderRadius: 9, background: f.iconBg, border: `1px solid ${f.iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.icon}</div>
              <div className="text-[11.5px] md:text-[14.5px]" style={{ fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif", lineHeight: 1.2 }}>{f.title}</div>
            </div>
            <div className="text-[10.5px] md:text-[13px]" style={{ color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
