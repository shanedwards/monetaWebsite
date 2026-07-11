"use client";

import { useEffect, useRef, useState } from "react";
import { BASE_STATS, CUSTOMERS } from "@/lib/constants";

// SSR hazard fix (migration-plan.md §3.1): getVisitMultiplier() used to run at
// module scope via `const VISIT_MULT = getVisitMultiplier()`, which touches
// localStorage and throws during SSR. It now runs inside useEffect (browser-only,
// post-mount), with VISIT_MULT starting at the safe default of 1 for the server
// render and first client paint.
function getVisitMultiplier() {
  try {
    const key = "moneta_visits";
    const visits = Math.min(parseInt(localStorage.getItem(key) || "0", 10) + 1, 40);
    localStorage.setItem(key, visits);
    return 1 + (visits - 1) * 0.008;
  } catch (e) {
    return 1;
  }
}

function useLiveTick(initialTarget, tickRate, active) {
  const [live, setLive] = useState(initialTarget);
  useEffect(() => {
    if (!active) return;
    const schedule = () => {
      const delay = 3000 + Math.random() * 7000;
      return setTimeout(() => {
        const delta = Math.round(tickRate * (0.5 + Math.random() * 1.0));
        setLive((v) => v + delta);
        timerRef.current = schedule();
      }, delay);
    };
    const timerRef = { current: schedule() };
    return () => clearTimeout(timerRef.current);
  }, [active, tickRate]);
  return live;
}

function StatTile({ label, base, prefix, color, glow, pulse, active, display, visitMult }) {
  const initialTarget = Math.round(base * visitMult);
  const live = useLiveTick(initialTarget, base === 10500000 ? 47 : base === 238000 ? 8 : 1, active);
  const formatted = display || (prefix + live.toLocaleString());
  return (
    <div style={{ background: "#1a2236", border: "1px solid #1f2d45", borderRadius: 10, padding: 16 }}>
      <p style={{ color: "#64748b", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, monospace", marginBottom: 8 }}>{label}</p>
      <p style={{
        fontSize: 20, fontWeight: 500, color, fontFamily: "'Inter', monospace", fontVariantNumeric: "tabular-nums",
        textShadow: glow ? `0 0 14px ${glow}` : "none",
        animation: pulse ? "atRiskPulse 2.4s ease-in-out infinite" : "none",
      }}>{formatted}</p>
    </div>
  );
}

function CustomerRow({ c, i, hovered, mounted, setHovered, visitMult }) {
  const liveAmount = useLiveTick(Math.round(c.base * visitMult), c.tickRate, mounted);
  return (
    <div
      onMouseEnter={(e) => { e.stopPropagation(); setHovered(i); }}
      onMouseLeave={(e) => { e.stopPropagation(); setHovered(null); }}
      className="flex flex-col gap-2 md:grid md:gap-[10px] md:items-center"
      style={{ padding: "9px 10px", borderRadius: 8, cursor: "default", transition: "background 0.15s", background: hovered === i ? "rgba(56,189,248,0.07)" : "transparent", gridTemplateColumns: "1fr 88px 110px 52px" }}>
      {/* Mobile line 1: name + dollar amount */}
      <div className="flex md:contents items-center justify-between">
        <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 400, fontFamily: "Inter, sans-serif" }} className="md:pl-2">{c.name}</span>
        <span style={{ color: "#64748b", fontSize: 12, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }} className="md:text-right">${liveAmount.toLocaleString()}</span>
      </div>
      {/* Mobile line 2: progress bar + percentage */}
      <div className="flex md:contents items-center gap-2.5">
        <div className="flex-1 md:flex-initial" style={{ background: "#1e293b", borderRadius: 999, height: 5, overflow: "hidden" }}>
          <div style={{ width: mounted ? `${c.widthPct}%` : "0%", height: "100%", borderRadius: 999, background: c.bar, transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s` }} />
        </div>
        <span style={{ fontSize: 12, fontWeight: 500, color: c.pctColor, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }} className="md:text-right">{c.pct}</span>
      </div>
    </div>
  );
}

export default function MarginIntelligenceCard() {
  const [hovered, setHovered] = useState(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visitMult, setVisitMult] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    setVisitMult(getVisitMultiplier());
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMounted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes atRiskPulse {
          0%,100% { text-shadow: 0 0 8px rgba(249,115,22,0.2); }
          50%      { text-shadow: 0 0 22px rgba(249,115,22,0.6); }
        }
        @keyframes barIn {
          from { width: 0; }
        }
        @keyframes floatUpDownHome { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>
      <div ref={ref} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => { setCardHovered(false); setHovered(null); }} className="md:pb-[52px]" style={{ position: "relative", width: "100%", maxWidth: 520, margin: "0 auto" }}>

        <div style={{
          borderRadius: 16, padding: 2,
          background: "linear-gradient(180deg, rgba(56,189,248,0.45) 0%, rgba(31,45,69,0.6) 60%)",
          boxShadow: "0 0 40px rgba(0,200,255,0.07), 0 24px 60px rgba(0,0,0,0.45)",
        }}>
          <div style={{ background: "#111827", borderRadius: 14, padding: 26 }}>

            <p style={{ color: "#38bdf8", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Inter, sans-serif" }}>Cloud Revenues</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <span style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 400, fontFamily: "Inter, sans-serif" }}>235 customers · July 2026</span>
              <span style={{ background: "#0f2e1a", border: "1px solid rgba(34,197,94,0.27)", color: "#22c55e", fontSize: 11, fontWeight: 500, padding: "4px 11px", borderRadius: 999, display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                <span style={{ fontSize: 7 }}>●</span> 15.1% blended
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 22 }}>
              {BASE_STATS.map(s => <StatTile key={s.label} {...s} active={mounted} visitMult={visitMult} />)}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {CUSTOMERS.map((c, i) => (
                <CustomerRow key={c.name} c={c} i={i} hovered={hovered} mounted={mounted} setHovered={setHovered} visitMult={visitMult} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/tablet: floating popup overlapping the card bottom, hides on hover (unchanged). */}
        <div className="hidden md:block" style={{
          position: "absolute", bottom: 0, left: 20,
          background: "#ffffff", borderRadius: 12, padding: "13px 16px", width: 290,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(234,88,12,0.12)",
          opacity: cardHovered ? 0 : 1,
          transition: "opacity 0.25s",
          pointerEvents: "none",
          animation: "floatUpDownHome 3s ease-in-out infinite",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <span style={{ color: "#ea580c", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Margin Drop Alert</span>
          </div>
          <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3, fontFamily: "Inter, sans-serif", color: "#0f172a" }}>Saltcliff Media <span style={{ color: "#dc2626", fontWeight: 400 }}>(3%)</span></p>
          <p style={{ color: "#64748b", fontSize: 11.5, lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Customer Savings Plan discount applied at acct-level but priced at list.</p>
        </div>

        {/* Mobile: same content, but in normal flow below the card instead of overlapping it. */}
        <div className="md:hidden mt-4" style={{
          background: "#ffffff", borderRadius: 12, padding: "13px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(234,88,12,0.12)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <span style={{ color: "#ea580c", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Margin Drop Alert</span>
          </div>
          <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3, fontFamily: "Inter, sans-serif", color: "#0f172a" }}>Saltcliff Media <span style={{ color: "#dc2626", fontWeight: 400 }}>(3%)</span></p>
          <p style={{ color: "#64748b", fontSize: 11.5, lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Customer Savings Plan discount applied at acct-level but priced at list.</p>
        </div>
      </div>
    </>
  );
}
