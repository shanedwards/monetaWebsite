"use client";

import { useEffect, useRef, useState } from "react";

function FinOpsCountUp({ target, decimals = 0, prefix = "", suffix = "", duration = 700, comma = false }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 2);
      setVal(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  const formatted = comma ? Math.floor(val).toLocaleString() : val.toFixed(decimals);
  return `${prefix}${formatted}${suffix}`;
}

export default function FinOpsServiceTabs() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTick(t => t + 1); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  function switchTab(i) { setActive(i); setTick(t => t + 1); }

  const tabs = [
    {
      label: "Cost visibility",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
      service: "",
      title: "Customer cost visibility",
      desc: "Help customers understand where cloud spend is going, how it changes over time, and what is driving movement.",
      bullets: ["Spend breakdown by service, account, project", "MoM and trend reporting per customer", "White-labelled customer-facing reports"],
      card: (tick) => (
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · JULY SPEND</span>
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+11.4% MoM</span>
          </div>
          <div key={tick} style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, letterSpacing: "-1px" }}>$<FinOpsCountUp target={127480} comma /></div>
          <svg width="100%" height="44" viewBox="0 0 300 56" preserveAspectRatio="none" style={{ display: "block", marginBottom: 10, flex: 1, minHeight: 44 }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 50 C30 48,50 44,80 38 C110 32,130 28,160 22 C190 16,220 12,260 6 L260 56 L0 56 Z" fill="url(#areaGrad)" />
            <path d="M0 50 C30 48,50 44,80 38 C110 32,130 28,160 22 C190 16,220 12,260 6" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Inter, sans-serif", marginBottom: 1 }}>Top driver</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif" }}>Compute · 44%</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Inter, sans-serif", marginBottom: 1 }}>Accounts</div>
              <div key={tick} style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif" }}><FinOpsCountUp target={6} /></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Rate reduction",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      service: "",
      title: "Reduce Cloud Rates",
      desc: "Reduce cloud rates by 30% to 50% by implementing discount programs recommended by moneta.",
      bullets: ["Savings alerting", "Automated moneta implementation", "Current performance metrics"],
      card: (tick) => (
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · JULY SAVINGS</span>
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+$4.9K this month</span>
          </div>
          <div key={tick} style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 10, letterSpacing: "-1px" }}>$<FinOpsCountUp target={22946} comma /></div>
          <div style={{ marginTop: "auto" }}>
          {(() => {
            const rows = [
              { label: "Discount Program Coverage", pct: 78.6, color: "#16a34a" },
              { label: "Savings Available", pct: 15, color: "#38bdf8", dollarValue: 10847 },
              { label: "Cloud Investment ROI", pct: 58, color: "#16a34a" },
            ];
            return rows.map(r => (
              <div key={r.label} style={{ marginBottom: 7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>{r.label}</span>
                  <span key={tick} style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", fontFamily: "Inter, sans-serif" }}>
                    {r.dollarValue
                      ? <>${r.dollarValue.toLocaleString()}</>
                      : <FinOpsCountUp target={r.pct} decimals={1} suffix="%" />
                    }
                  </span>
                </div>
                <div style={{ height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${r.pct}%`, height: "100%", background: r.color, borderRadius: 99 }} />
                </div>
              </div>
            ));
          })()}
          </div>
        </div>
      ),
    },
    {
      label: "Infrastructure Efficiency",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      service: "",
      title: "Operational Efficiency",
      desc: "Identify infrastructure changes that reduce cloud spend while maintaining performance and reliability.",
      bullets: ["Underutilized resources identified", "Rightsizing opportunities detected", "Waste and idle spend highlighted"],
      card: (tick) => {
        const opportunities = [
          { label: "EC2 Rightsizing",        savings: 3240, color: "#A855F7" },
          { label: "Unused Load Balancers",  savings: 890,  color: "#3B82F6" },
          { label: "Idle EBS Volumes",       savings: 1470, color: "#22D3EE" },
        ];
        const totalMonthly = opportunities.reduce((s, o) => s + o.savings, 0);
        const totalYear = totalMonthly * 12;
        const mono = "'Courier New', Courier, monospace";
        const R = 34, C = 2 * Math.PI * R;
        let offset = -90;
        const segments = opportunities.map(o => {
          const frac = o.savings / totalMonthly;
          const seg = { ...o, dash: frac * C, gap: C - frac * C, rot: offset };
          offset += frac * 360;
          return seg;
        });
        return (
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
            <div>
              <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · ANNUAL SAVINGS BREAKDOWN</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, minHeight: 0 }}>
              <svg width="104" height="104" viewBox="0 0 96 96" style={{ display: "block" }}>
                <g transform="translate(48,48)">
                  {segments.map(s => (
                    <circle key={s.label} r={R} cx="0" cy="0" fill="none" stroke={s.color} strokeWidth="12"
                      strokeDasharray={`${s.dash} ${s.gap}`} strokeDashoffset="0"
                      transform={`rotate(${s.rot - 90})`} />
                  ))}
                </g>
                <text x="48" y="48" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 13, fontWeight: 800, fill: "#0f172a", fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>${totalYear.toLocaleString()}</text>
              </svg>
            </div>
            <div>
              {opportunities.map(o => (
                <div key={o.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: o.color, display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>{o.label}</span>
                  </div>
                  <span style={{ fontSize: 11, color: "#0f172a", fontWeight: 600, fontFamily: mono, fontVariantNumeric: "tabular-nums" }}>${(o.savings * 12).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
  ];

  const t = tabs[active];

  return (
    <div ref={ref} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <div className="grid grid-cols-3 gap-1.5 md:gap-[6px] p-2.5" style={{ borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => switchTab(i)}
            className="flex items-center justify-center gap-1 md:gap-[7px] px-1.5 py-2 md:px-3 md:py-[9px] whitespace-normal md:whitespace-nowrap text-center"
            style={{ background: active === i ? "#ffffff" : "transparent", border: active === i ? "1px solid #e2e8f0" : "1px solid transparent", borderRadius: 8, boxShadow: active === i ? "0 1px 4px rgba(0,0,0,0.08)" : "none", cursor: "pointer", color: active === i ? "#3b82f6" : "#64748b", fontWeight: active === i ? 600 : 500, fontFamily: "Inter, sans-serif", transition: "all 0.15s" }}
          >
            <span className="text-[10.5px] md:text-[13.5px] leading-tight">{tab.icon}{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative h-auto md:h-[252px]">
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className={
              "grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full " +
              "md:absolute md:top-0 md:left-0 md:h-full " +
              (i === active ? "" : "hidden md:grid md:invisible")
            }
          >
            <div style={{ padding: "14px 24px 16px", borderRight: "1px solid #f1f5f9" }} className="md:border-r border-b md:border-b-0 border-[#f1f5f9]">
              {tab.service && <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase", marginBottom: 10 }}>{tab.service}</div>}
              <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", lineHeight: 1.25, marginBottom: 12 }}>{tab.title}</div>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 16 }}>{tab.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {tab.bullets.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.4 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "14px 20px 16px", background: "#f8fafc", display: "flex", alignItems: "stretch" }}>
              {tab.card(tick)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
