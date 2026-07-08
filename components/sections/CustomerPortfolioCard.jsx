"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CUSTOMERS = [
  { name: "Acme Co.",        pct: 72, status: "healthy",  statusColor: "#22c55e", spend: "$284k/mo", ring: "#22c55e" },
  { name: "Northvale Labs",  pct: 58, status: "+8 opps",   statusColor: "#22c55e", spend: "$92k/mo",  ring: "#38bdf8" },
  { name: "Riveroak",        pct: 88, status: "88% cap",   statusColor: "#f59e0b", spend: "$39k/mo",  ring: "#f59e0b" },
  { name: "Saltcliff Media", pct: 42, status: "tag gap",   statusColor: "#ef4444", spend: "$24k/mo",  ring: "#ef4444" },
];

export default function CustomerPortfolioCard() {
  const [popupVisible, setPopupVisible] = useState(true);
  const wrapRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const proximity = 60;
    const near =
      e.clientX > rect.left - proximity &&
      e.clientX < rect.right + proximity &&
      e.clientY > rect.top - proximity &&
      e.clientY < rect.bottom + proximity;
    setPopupVisible(!near);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={wrapRef} style={{ width: "100%", maxWidth: 560, margin: "0 auto", position: "relative", paddingBottom: 48 }}>
      <div style={{ background: "#0d1424", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "22px 24px", boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Customer Portfolio</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>12 active · 4 in review</p>
          </div>
          <span style={{ fontSize: 12, color: "#64748b", fontWeight: 400, fontFamily: "Inter, sans-serif" }}>live</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {CUSTOMERS.map((c) => {
            const R = 18, circ = 2 * Math.PI * R;
            const dash = (c.pct / 100) * circ;
            return (
              <div key={c.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                  <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                  <circle
                    cx="24" cy="24" r={R} fill="none" stroke={c.ring} strokeWidth="5"
                    strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ * 0.25}
                    strokeLinecap="round"
                  />
                  <text x="24" y="28" textAnchor="middle" style={{ fontSize: 10, fontWeight: 700, fill: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>{c.pct}%</text>
                </svg>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", fontFamily: "Inter, sans-serif", marginBottom: 2 }}>{c.name}</p>
                  <p style={{ fontSize: 12, fontWeight: 500, color: c.statusColor, fontFamily: "Inter, sans-serif", marginBottom: 2 }}>{c.status}</p>
                  <p style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>{c.spend}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>
              Aggregate margin <span style={{ color: "#22c55e", fontWeight: 600 }}>16.6%</span> · <span style={{ color: "#f1f5f9" }}>+1.2pp MoM</span>
            </span>
          </div>
          <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>July 2026</span>
        </div>
      </div>
      <style>{`@keyframes floatUpDown { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }`}</style>
      <div style={{ position: "absolute", bottom: "-8%", left: 16, background: "#ffffff", borderRadius: 12, padding: "13px 16px", width: 290, boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.06)", pointerEvents: "none", opacity: popupVisible ? 1 : 0, transition: "opacity 0.2s ease", animation: "floatUpDown 3s ease-in-out infinite" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a", fontFamily: "Inter, sans-serif" }}>Savings Found</span>
        </div>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 3 }}>Northvale Labs · +$22,480</p>
        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Six optimization opportunities surfaced. Ready for July customer review.</p>
      </div>
    </div>
  );
}
