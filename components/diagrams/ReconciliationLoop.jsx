"use client";

import { useEffect, useState } from "react";

export default function ReconciliationLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      label: "Cloud Billing", sub: "AWS · Azure", num: "01",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 011 9.9M8 17l4-4 4 4M12 13v8"/></svg>,
      color: "#38bdf8", stats: [{ k: "rows", v: "8.3T" }, { k: "providers", v: "2" }],
    },
    {
      label: "Discounts", sub: "SPs · RIs · EDP · SPP · EA · CSP", num: "02",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M7 17L17 7"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
      color: "#34d399", stats: [{ k: "applied", v: "$124K", vc: "#34d399" }, { k: "coverage", v: "93.5%" }],
    },
    {
      label: "Customer Pricing", sub: "Rules & agreements", num: "03",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10M7 12h6M7 17h4"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
      color: "#a78bfa", stats: [{ k: "rules", v: "150" }, { k: "customers", v: "239" }],
    },
    {
      label: "Margin Intelligence", sub: "By customer · By reseller", num: "04",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-4 4"/></svg>,
      color: "#f472b6", stats: [{ k: "blended", v: "17.5%", vc: "#34d399" }, { k: "margin $", v: "$90,150", vc: "#34d399" }],
    },
  ];

  return (
    <div style={{ background: "linear-gradient(160deg,#162035 0%,#111828 100%)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 16, padding: "28px 28px 20px", boxShadow: "0 0 60px rgba(56,189,248,0.08)" }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 5s linear infinite" }}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
            <span style={{ color: "#38bdf8", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Continuous Reconciliation Loop</span>
          </div>
          <p style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>Billing, pricing, discounts, and margin — aligned every cycle.</p>
        </div>
        <div></div>
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 0 }}>
        <svg style={{ position: "absolute", top: 21, left: 0, width: "100%", height: 4, overflow: "visible", zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 800 4">
          <line x1="100" y1="2" x2="700" y2="2" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="8 6" fill="none">
            <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2.4s" repeatCount="indefinite" />
          </line>
        </svg>

        {steps.map((s, i) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: `${100 / 4}%`, zIndex: 2, position: "relative" }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              background: "#0d1425",
              border: `2px solid ${active === i ? s.color : "rgba(255,255,255,0.1)"}`,
              color: active === i ? s.color : "rgba(180,186,200,0.4)",
              boxShadow: active === i ? `0 0 20px ${s.color}60` : "none",
              transition: "all 0.3s",
              marginBottom: 0,
              isolation: "isolate",
            }}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{
            flex: 1, borderRadius: 10, padding: "14px 14px 12px",
            background: active === i ? `linear-gradient(160deg,${s.color}12,rgba(10,16,32,0.9))` : "rgba(255,255,255,0.02)",
            border: `1px solid ${active === i ? s.color + "55" : "rgba(255,255,255,0.07)"}`,
            transition: "all 0.3s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <span style={{ color: active === i ? "#f1f5f9" : "#b0bac9", fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif", lineHeight: 1.2 }}>{s.label}</span>
              <span style={{ color: "rgba(160,175,195,0.7)", fontSize: 10, fontFamily: "Inter, monospace" }}>{s.num}</span>
            </div>
            <p style={{ color: "#7a8fa8", fontSize: 11, fontFamily: "Inter, sans-serif", marginBottom: 12 }}>{s.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {s.stats.map(st => (
                <div key={st.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#7a8fa8", fontSize: 11, fontFamily: "Inter, monospace" }}>{st.k}</span>
                  <span style={{ color: st.vc || "#b0bac9", fontSize: 12, fontWeight: 600, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>{st.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
        <span style={{ color: "#475569", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: "5px 16px" }}>
          <span style={{ color: "#38bdf8" }}>No manual reconciliation</span>
        </span>
      </div>

      <div style={{ position: "relative", marginTop: 4, height: 30, width: "100%" }}>
        <svg width="100%" height="30" viewBox="0 0 800 30" preserveAspectRatio="none" fill="none" style={{ display: "block", position: "absolute", top: 0, left: 0 }}>
          <path d="M 700 4 C 700 26, 550 28, 400 28 C 250 28, 100 26, 100 4" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="8 6" fill="none">
            <animate attributeName="stroke-dashoffset" from="28" to="0" dur="2.4s" repeatCount="indefinite" />
          </path>
        </svg>
        <div style={{ position: "absolute", top: -8, left: "calc(12.5% - 6px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: "11px solid #38bdf8" }} />
          <div style={{ width: 2, height: 4, background: "#2887ae", marginLeft: 1 }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
