// Page bodies — Home, Platform, FinOps Services, Why moneta


function CountUp({ target, decimals, suffix, color, glow, started }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
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

function ResultsGraphic() {
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Centered header */}
      <div className="flex flex-col items-center text-center">
        <Eyebrow className="mb-6 flex flex-col items-center">Results</Eyebrow>
        <h2 className="text-h1">Real outcomes for cloud resellers.</h2>
        <p className="mt-6 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[640px]">
          Improve billing control, protect margins, and scale customer operations without adding
          unnecessary complexity.
        </p>
      </div>

      {/* Stat bar */}
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "rgba(13,20,42,0.6)", border: "1px solid rgba(99,102,241,0.18)", borderRadius: 16, overflow: "hidden", backdropFilter: "blur(12px)" }}>
        {TIMELINE_STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "32px 24px", textAlign: "left", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: "-2px", fontFamily: "Inter, sans-serif", color: s.color, textShadow: `0 0 28px ${s.glow}` }}>
              <CountUp {...s} started={started} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", fontFamily: "Inter, sans-serif", marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
        {BOTTOM_FEATURES.map(f => (
          <div key={f.title} style={{ background: "rgba(13,20,42,0.6)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "22px 24px", backdropFilter: "blur(10px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: f.iconBg, border: `1px solid ${f.iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.icon}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif", lineHeight: 1.2 }}>{f.title}</div>
            </div>
            <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroSplit({ tagline, title, accentWord, description, ctaLabel, onCta, right }) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.indexOf(accentWord);
    if (idx < 0) return title;
    return (
      <React.Fragment>
        {title.slice(0, idx)}
        <span className="grad-text-bp">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </React.Fragment>
    );
  };
  return (
    <section className="relative pt-[95px] md:pt-[120px] pb-12 md:pb-16 overflow-hidden">
      <div className="glow-hero" />
      <div className="dot-corner" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            {tagline && <Eyebrow className="mb-6">{tagline}</Eyebrow>}
            <h1 className="text-hero text-balance">{renderTitle()}</h1>
            {description && (
              <p className="mt-7 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary">{description}</p>
            )}
            <div className="mt-9">
              <Button variant="primary" onClick={onCta} className="!px-7 !py-4 !text-[15px]">
                {ctaLabel} <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">{right}</div>
        </div>
      </div>
    </section>
  );
}

// ---- Problem cards with PNG icons ----
const PROBLEM_ROWS = [
  { t: "Discount programs are hard to track and inconsistently applied", src: "graphics/icons/ProblemDiscountIcon.png" },
  { t: "Customer pricing is disconnected from actual cloud costs", src: "graphics/icons/ProblemCustomerIcon.png" },
  { t: "Billing relies on spreadsheets and manual work", src: "graphics/icons/ProblemBillingIcon.png" },
  { t: "Misapplied discounts and pricing gaps reduce margins", src: "graphics/icons/ProblemMisappliedIcon.png" },
  { t: "Limited visibility into margin performance by customer", src: "graphics/icons/ProblemLimitedIcon.png" },
];

// ---------- MARGIN INTELLIGENCE CARD ----------
const CUSTOMERS = [
  { name: "Acme Co.",        base: 284392, widthPct: 85, bar: "#22c55e", pct: "+18.2%", pctColor: "#22c55e",  tickRate: 26 },
  { name: "Northvale Labs",  base: 92408,  widthPct: 60, bar: "#22c55e", pct: "+14.0%", pctColor: "#22c55e",  tickRate: 9,  highlight: true },
  { name: "Ridgepoint Inc.", base: 38910,  widthPct: 38, bar: "#eab308", pct: "+6.4%",  pctColor: "#eab308",  tickRate: 4 },
  { name: "Saltcliff Media", base: 24118,  widthPct: 20, bar: "#ef4444", pct: "−2.1%",  pctColor: "#ef4444",  tickRate: 2,  alert: true },
];

function getVisitMultiplier() {
  try {
    const key = "moneta_visits";
    const visits = Math.min(parseInt(localStorage.getItem(key) || "0", 10) + 1, 40);
    localStorage.setItem(key, visits);
    return 1 + (visits - 1) * 0.008;
  } catch (e) { return 1; }
}

const VISIT_MULT = getVisitMultiplier();
const BASE_STATS = [
  { label: "Revenue",  base: 10500000, prefix: "$", color: "#f1f5f9",                                        tickRate: 47,  display: "$10.5m" },
  { label: "Growth",   base: 238000,   prefix: "$", color: "#22c55e", glow: "rgba(34,197,94,0.25)",          tickRate: 8,   display: "$238k"  },
  { label: "Margin",   base: 1600000,  prefix: "$", color: "#f97316", glow: "rgba(249,115,22,0.25)", pulse: true, tickRate: 1, display: "$1.6m" },
];

function useCountUp(target, duration = 1200, active = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function useLiveTick(initialTarget, tickRate, active) {
  const [live, setLive] = React.useState(initialTarget);
  React.useEffect(() => {
    if (!active) return;
    const schedule = () => {
      const delay = 3000 + Math.random() * 7000;
      return setTimeout(() => {
        const delta = Math.round(tickRate * (0.5 + Math.random() * 1.0));
        setLive(v => v + delta);
        timerRef.current = schedule();
      }, delay);
    };
    const timerRef = { current: schedule() };
    return () => clearTimeout(timerRef.current);
  }, [active, tickRate]);
  return live;
}

function StatTile({ label, base, prefix, color, glow, pulse, active, display }) {
  const initialTarget = Math.round(base * VISIT_MULT);
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

function CustomerRow({ c, i, hovered, mounted, setHovered }) {
  const liveAmount = useLiveTick(Math.round(c.base * VISIT_MULT), c.tickRate, mounted);
  return (
    <div
      onMouseEnter={(e) => { e.stopPropagation(); setHovered(i); }}
      onMouseLeave={(e) => { e.stopPropagation(); setHovered(null); }}
      style={{ display: "grid", gridTemplateColumns: "1fr 88px 110px 52px", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, cursor: "default", transition: "background 0.15s", background: hovered === i ? "rgba(56,189,248,0.07)" : "transparent" }}>
      <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 400, fontFamily: "Inter, sans-serif", paddingLeft: 8 }}>{c.name}</span>
      <span style={{ color: "#64748b", fontSize: 12, textAlign: "right", fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>${liveAmount.toLocaleString()}</span>
      <div style={{ background: "#1e293b", borderRadius: 999, height: 5, overflow: "hidden" }}>
        <div style={{ width: mounted ? `${c.widthPct}%` : "0%", height: "100%", borderRadius: 999, background: c.bar, transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s` }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 500, textAlign: "right", color: c.pctColor, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>{c.pct}</span>
    </div>
  );
}

function MarginIntelligenceCard() {
  const [hovered, setHovered] = React.useState(null);
  const [cardHovered, setCardHovered] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMounted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <React.Fragment>
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
      <div ref={ref} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => { setCardHovered(false); setHovered(null); }} style={{ position: "relative", width: "100%", maxWidth: 520, margin: "0 auto", paddingBottom: 52 }}>

        {/* Card with gradient top border */}
        <div style={{
          borderRadius: 16, padding: 2,
          background: "linear-gradient(180deg, rgba(56,189,248,0.45) 0%, rgba(31,45,69,0.6) 60%)",
          boxShadow: "0 0 40px rgba(0,200,255,0.07), 0 24px 60px rgba(0,0,0,0.45)",
        }}>
          <div style={{ background: "#111827", borderRadius: 14, padding: 26 }}>

            {/* Header */}
            <p style={{ color: "#38bdf8", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Inter, sans-serif" }}>Cloud Revenues</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <span style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 400, fontFamily: "Inter, sans-serif" }}>235 customers · July 2026</span>
              <span style={{ background: "#0f2e1a", border: "1px solid rgba(34,197,94,0.27)", color: "#22c55e", fontSize: 11, fontWeight: 500, padding: "4px 11px", borderRadius: 999, display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                <span style={{ fontSize: 7 }}>●</span> 15.1% blended
              </span>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 22 }}>
              {BASE_STATS.map(s => <StatTile key={s.label} {...s} active={mounted} />)}
            </div>

            {/* Customer rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {CUSTOMERS.map((c, i) => (
                <CustomerRow key={c.name} c={c} i={i} hovered={hovered} mounted={mounted} setHovered={setHovered} />
              ))}
            </div>
          </div>
        </div>

        {/* Alert popup — always pointerEvents:none to avoid cursor conflicts */}
        <div style={{
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
          {(() => { const pct = -3; const pos = pct >= 0; return (
          <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3, fontFamily: "Inter, sans-serif", color: "#0f172a" }}>Saltcliff Media <span style={{ color: pos ? "#16a34a" : "#dc2626", fontWeight: 400 }}>{pos ? `${pct}%` : `(${Math.abs(pct)}%)`}</span></p>
          ); })()}
          <p style={{ color: "#64748b", fontSize: 11.5, lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Customer Savings Plan discount applied at acct-level but priced at list.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- HOME ----------
function FinOpsCountUp({ target, decimals = 0, prefix = "", suffix = "", duration = 700, comma = false }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
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
  return React.createElement(React.Fragment, null, `${prefix}${formatted}${suffix}`);
}

function FinOpsServiceTabs() {
  const [active, setActive] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
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
        // Donut geometry
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
            {/* Donut — centered in the available space between header and legend */}
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
            {/* Legend — pinned to bottom */}
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
      {/* Tab bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, padding: "10px", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => switchTab(i)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 12px", background: active === i ? "#ffffff" : "transparent", border: active === i ? "1px solid #e2e8f0" : "1px solid transparent", borderRadius: 8, boxShadow: active === i ? "0 1px 4px rgba(0,0,0,0.08)" : "none", cursor: "pointer", color: active === i ? "#3b82f6" : "#64748b", fontWeight: active === i ? 600 : 500, fontSize: 13.5, fontFamily: "Inter, sans-serif", transition: "all 0.15s", whiteSpace: "nowrap" }}>
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>

      {/* Content — all tabs rendered absolutely on a fixed-height stage so every tab is identical in size */}
      <div style={{ position: "relative", height: 252 }}>
        {tabs.map((tab, i) => (
          <div key={tab.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch", visibility: i === active ? "visible" : "hidden", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <div style={{ padding: "14px 24px 16px", borderRight: "1px solid #f1f5f9" }}>
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

function HomePage({ onDemoClick }) {
  return (
    <React.Fragment>
      <HeroSplit
        tagline="Built for AWS & Azure Resellers"
        title="Eliminate Margin Loss in Cloud Reseller Billing"
        accentWord="Cloud Reseller Billing"
        description={<span>The <span className="grad-text-bp font-semibold">financial operating system</span> for cloud resellers that keeps billing, pricing, discounts, and margins aligned across every customer.</span>}
        ctaLabel="Book a Demo"
        onCta={onDemoClick}
        right={<MarginIntelligenceCard />}
      />

      {/* Trust bar */}
      <section className="container-x relative -mt-2 md:-mt-4 mb-10 md:mb-14">
        <TrustBar />
      </section>

      {/* PROBLEM */}
      <SectionShell className="border-t border-line-soft overflow-hidden" dotsRight style={{ background: "#0F2040" }}>
        {/* subtle animated dot-grid corner accents */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, width: 260, height: 200,
            backgroundImage: "radial-gradient(rgba(91,123,255,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
            maskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
            animation: "dotDriftA 16s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: 0, right: 0, width: 260, height: 200,
            backgroundImage: "radial-gradient(rgba(168,85,247,0.3) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
            maskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
            animation: "dotDriftB 19s ease-in-out infinite",
          }} />
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
            <h2 className="text-h1">
              <span className="whitespace-nowrap">Margin Loss Is Built Into</span><br /><span className="grad-text-bp">Cloud Reseller Billing</span>
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

          {/* Problem cards with PNG icons */}
          <div className="lg:col-span-6 flex flex-col items-end lg:pt-[16px]">
            <div className="flex flex-col gap-3" style={{ width: "min(100%, 480px)" }}>
              {PROBLEM_ROWS.map((row) => (
                <div key={row.t} className="card flex items-center gap-5 px-5 py-3 hover:border-line-hover flex-1">
                  <div className="w-12 h-12 grid place-items-center shrink-0">
                    <img src={row.src} alt="" width="40" height="40" style={{ objectFit: "contain" }} />
                  </div>
                  <span className="block w-px self-stretch bg-line-soft" />
                  <p className="text-[15px] md:text-[16px] text-ink-primary leading-[1.5] max-w-[330px]">{row.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line callout — ProblemBLicon.png */}
        <div className="mt-6 !rounded-2xl px-7 py-5 md:px-8 md:py-6 relative overflow-hidden" style={{
          border: "1px solid rgba(34,211,238,0.5)",
          background: "#070d18",
          boxShadow: "0 0 24px rgba(34,211,238,0.18), inset 0 0 30px rgba(34,211,238,0.04)",
        }}>
          <div className="flex items-center gap-6 relative">
            <div className="grid place-items-center shrink-0">
              <img src="graphics/icons/ProblemBLicon.png" alt="" width="52" height="52" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="eyebrow text-[11px] mb-1.5" style={{ color: "#22D3EE" }}>The Bottom Line</p>
              <p className="text-[19px] md:text-[24px] font-semibold leading-[1.25] text-balance">
                Margin loss <span style={{ background: "linear-gradient(90deg, #22D3EE, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textShadow: "0 0 20px rgba(34,211,238,0.4)" }}>compounds</span> across every customer.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell className="border-t border-line-soft light-section" dotsRight style={{ background: "#F8FAFC" }}>
        {/* Top text row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(26px, 2.6vw, 38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Align billing, pricing, discounts, and margins in <span className="grad-text-bp">one system.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end gap-4 lg:pt-0">
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              moneta connects cloud billing data, customer pricing rules, discount programs, and margin visibility in one platform, helping resellers operate with better control across every customer account.
            </p>
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              Instead of treating billing, pricing, discounts, and margin reporting as separate workflows, moneta brings them together into a connected operating layer for cloud reseller operations.
            </p>
          </div>
        </div>

        {/* Graphic */}
        <ReconciliationLoop />

        {/* Bottom callout */}
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
              moneta connects every layer of cloud reseller billing — from raw usage data and vendor pricing to customer invoices and real-time margin visibility.
            </p>
            <p className="mt-4 text-[18px] leading-[1.7] text-ink-secondary">
              Not a dashboard. Not a plugin. A purpose-built operating system for how resellers actually run.
            </p>
          </div>
          <div className="lg:col-span-7">
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
            <h2 className="text-h1 text-balance">
              Deliver Cloud FinOps as a <span className="grad-text-bp">Managed Service</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              Cloud service providers are expected to help customers manage and optimize cloud spend.
            </p>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              With aligned billing, pricing, and margin data, Cloud FinOps becomes a structured, repeatable service delivered across every customer.
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
        onCta={onDemoClick}
      />

      <FaqSection onDemoClick={onDemoClick} />
    </React.Fragment>
  );
}

// ---------- PLATFORM ----------
function PlatformPage({ onDemoClick }) {
  return (
    <React.Fragment>
      {/* New top hero — left: text content; right: MonetaSystemHero diagram */}
      <section className="relative pt-[110px] md:pt-[140px] pb-14 overflow-hidden" style={{ background: "#060B18" }}>
        <div className="glow-hero" />
        <div className="dot-corner-left" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-center">

            {/* LEFT — text content */}
            <div className="xl:col-span-5" style={{ transform: "translateY(-75px)" }}>
              <Eyebrow className="mb-6 [&_.eyebrow]:text-[16px]">The Moneta System</Eyebrow>
              <h1 className="text-balance" style={{ fontSize: "clamp(30px, 3.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600, fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <span style={{ whiteSpace: "nowrap" }}>The Operating System</span> <br />
                for <span className="grad-text-bp">Cloud Financial</span> <br />
                <span className="grad-text-bp">Operations</span>
              </h1>
              <p className="mt-7 text-[20px] leading-[1.65] text-ink-secondary max-w-[600px]">
                moneta coordinates billing, pricing, discounts, and margins across every customer account —
                so your cloud business runs with accuracy, control, and confidence.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Button variant="primary" onClick={onDemoClick} className="!px-9 !py-5 !text-[17.5px]">
                  Book a Demo <ArrowRight size={19} />
                </Button>
              </div>
            </div>

            {/* RIGHT — MonetaSystemHero */}
            <div className="xl:col-span-7 flex justify-center">
              <div className="w-full max-w-[700px]" style={{ transform: "translateY(-30px)" }}>
                <MonetaSystemHero />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture pipeline */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <SystemArchitecturePipeline />
      </SectionShell>

      {/* Financial Control Plane */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#FFFFFF" }}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-4">
            <Eyebrow className="mb-6">Financial Control Plane</Eyebrow>
            <h2 className="text-h1" style={{ whiteSpace: "nowrap" }}>
              Control. Govern. <br /><span className="grad-text-bp">Protect Margins.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-secondary">
              The control plane enforces financial discipline across every workflow. Policies and rules
              ensure your operations are accurate, compliant, and fully auditable.
            </p>
          </div>
          <div className="xl:col-span-8">
            <ControlPlaneCards />
          </div>
        </div>
      </SectionShell>

      {/* Automated Lifecycle */}
      <SectionShell className="border-t border-line-soft !pt-8 md:!pt-10" style={{ background: "#060B18" }}>
        <div className="w-full text-center mb-4">
          <Eyebrow className="mb-3 mx-auto [&_.eyebrow-rule]:mx-auto">Automated Lifecycle</Eyebrow>
          <h2 className="text-h1" style={{ whiteSpace: "nowrap", fontSize: "clamp(28px, 3.6vw, 56px)" }}>
            From Data to Decisions. <span className="grad-text-bp">Automatically.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-secondary max-w-[760px] mx-auto">
            Every change is applied across the financial model in real time — so you can act on facts, not spreadsheets.
          </p>
        </div>
        <AutomatedLifecycle />
      </SectionShell>

      {/* The Living Financial Model */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-4">
            <Eyebrow className="mb-6">The Living Financial Model</Eyebrow>
            <h2 className="text-h1">
              <span className="block whitespace-nowrap">One Source of</span>
              <span className="block whitespace-nowrap grad-text-bp">Financial Truth.</span>
              <span className="block whitespace-nowrap">Always in Sync.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-secondary max-w-[420px]">
              Every object in your financial operations exists in one continuously synchronized model.
              Change something in one place, and the system updates everything downstream — instantly.
            </p>
          </div>
          <div className="xl:col-span-8">
            <LivingFinancialModel />
          </div>
        </div>
      </SectionShell>

      {/* What the System Enables */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#FFFFFF" }}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-5">
            <Eyebrow className="mb-6">What the System Enables</Eyebrow>
            <h2 className="text-h2 text-balance">Financial Infrastructure That Drives Results.</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-ink-secondary max-w-[400px]">
              When every element of your financial operations is connected and controlled, your cloud business
              operates efficiently, profitably, and at scale.
            </p>
            <a href="#/why-moneta" className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-cyan hover:text-white transition-colors">
              See real outcomes <ArrowRight size={14} />
            </a>
          </div>
          <div className="xl:col-span-7">
            <SystemEnablesCards />
          </div>
        </div>
      </SectionShell>

      {/* One System. Full Control. */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#060B18" }}>
        <OneSystemFullControl onDemoClick={onDemoClick} />
      </SectionShell>
    </React.Fragment>
  );
}

function FinOpsDiagram({ onDemoClick }) {
  const steps = [
    { label: "Billing",   sub: "Accurate usage\nand invoicing",        color: "#3B82F6", icon: "invoice" },
    { label: "Pricing",   sub: "Flexible, customer-\nspecific pricing", color: "#22D3EE", icon: "tag"     },
    { label: "Discounts", sub: "Consistent discount\nmanagement",       color: "#6366F1", icon: "percent" },
    { label: "Margin",    sub: "Sustainable margins\nat scale",         color: "#A855F7", icon: "trend"   },
  ];
  return (
    <div className="mt-12 max-w-[1060px] mx-auto">
      <div className="flex items-center justify-center gap-2 mb-1">
        <MonetaMark size={22} />
        <span className="text-[17px] font-semibold tracking-tight text-white">moneta</span>
      </div>
      <p className="eyebrow text-ink-muted mb-3 text-[10px] tracking-[0.2em]">The Billing Infrastructure</p>

      <div className="flex items-stretch gap-0">

        {/* LEFT CARD */}
        <div className="shrink-0 w-[175px] rounded-2xl text-left p-5 flex flex-col justify-center"
          style={{ background: "#0B0D16", border: "1px solid #1E2235" }}>
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#22D3EE" }}>Today</p>
          <p className="text-[12.5px] font-semibold mb-5 leading-[1.35] text-white">Hard to scale FinOps operations</p>
          <div className="space-y-3.5">
            {[
              { label: "One-off analysis per customer", icon: "bars"   },
              { label: "Manual process and reporting",  icon: "scale"  },
              { label: "Difficult to scale",            icon: "layers" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}>
                  {Icons[icon]("#3B82F6")}
                </div>
                <p className="text-[11.5px] text-ink-secondary leading-[1.3]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECTOR LEFT */}
        <div className="shrink-0 w-20 relative">
          <svg width="100%" height="100%" viewBox="0 0 80 200" preserveAspectRatio="none" fill="none" aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}>
            <line x1="4"  y1="58"  x2="52" y2="58"  stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4"  y1="100" x2="52" y2="100" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4"  y1="142" x2="52" y2="142" stroke="#5B7BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="52" y1="58"  x2="52" y2="142" stroke="rgba(91,123,255,0.22)" strokeWidth="1" />
            <line x1="52" y1="100" x2="74" y2="100" stroke="#22D3EE" strokeWidth="1.5" />
            <polyline points="68,96 74,100 68,104" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>

        {/* CENTER BOX */}
        <div className="flex-1 rounded-2xl flex flex-col"
          style={{ border: "1px solid rgba(91,123,255,0.45)", background: "linear-gradient(160deg,#0E1122 0%,#0B0E1A 100%)", boxShadow: "0 0 50px 8px rgba(91,123,255,0.14), 0 0 80px 16px rgba(168,85,247,0.09)" }}>
          <div className="px-8 pt-8 pb-4 relative">
            {/* connecting line between circles — runs center-to-center between first and last */}
            <div className="absolute" style={{
              top: "calc(2rem + 23px)",
              left: "calc(2rem + 24px)",
              right: "calc(2rem + 24px)",
              height: 1.5,
              background: "linear-gradient(90deg,#3B82F6,#22D3EE,#6366F1,#A855F7)",
              opacity: 0.6,
            }} />
            <div className="flex items-start justify-between relative z-10">
              {steps.map(({ label, sub, color, icon }, i) => (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center gap-2.5" style={{ width: 90 }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg,#1a1d2e,#0f1220)`, border: `2px solid ${color}80`, boxShadow: `0 0 18px ${color}60, 0 0 36px ${color}25`, position: "relative", zIndex: 20 }}>
                      {Icons[icon](color)}
                    </div>
                    <span className="text-[13px] font-semibold text-white">{label}</span>
                    <span className="text-[11px] text-ink-secondary leading-[1.35] text-center whitespace-pre-line">{sub}</span>
                  </div>
                  {/* small dot between steps */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 16, height: 48, zIndex: 20, position: "relative" }}>
                      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
                        <path d="M1,2 L6,5 L1,8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinejoin="miter" strokeLinecap="square" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center px-6 pb-5 pt-2">
            <p className="text-[12px] text-ink-muted">Continuously aligning billing, pricing, discounts, and margin.</p>
          </div>
        </div>

        {/* CONNECTOR RIGHT */}
        <div className="shrink-0 w-20 relative">
          <svg width="100%" height="100%" viewBox="0 0 80 40" preserveAspectRatio="none" fill="none" aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}>
            <line x1="0" y1="20" x2="60" y2="20" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.65" />
            <path d="M60,18 L66,20 L60,22" fill="none" stroke="#A855F7" strokeWidth="1.4" strokeLinejoin="miter" strokeLinecap="square" />
          </svg>
        </div>

        {/* RIGHT CARD */}
        <div className="shrink-0 w-[155px] rounded-2xl flex flex-col items-center justify-center p-5 text-center"
          style={{ background: "#0B0D16", border: "1px solid rgba(168,85,247,0.4)", boxShadow: "0 0 28px rgba(168,85,247,0.12)" }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
            style={{ background: "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(168,85,247,0.15))", border: "2px solid rgba(168,85,247,0.6)", boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5L18 6" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[12.5px] font-semibold text-white leading-[1.45]">
            Continuous FinOps across{" "}
            <span style={{ color: "#22D3EE" }}>every customer.</span>
          </p>
        </div>
      </div>

      {onDemoClick && (
        <div className="mt-6 flex justify-center">
          <Button variant="primary" onClick={onDemoClick} className="!px-7 !py-4 !text-[15px]">Book a Demo <ArrowRight /></Button>
        </div>
      )}
    </div>
  );
}

// ---------- FINOPS ----------
function FinOpsPage({ onDemoClick }) {
  return (
    <React.Fragment>

      {/* ── NEW SECTION 1: Hero ── */}
      <section className="relative pt-[95px] md:pt-[120px] pb-12 md:pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-6">
              <Eyebrow className="mb-6">Cloud FinOps</Eyebrow>
              <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
                Cloud FinOps for resellers and{" "}
                <span className="grad-text-bp">managed service providers.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[520px]">
                moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure environments.
              </p>
              <div className="mt-9">
                <Button variant="primary" className="!px-7 !py-4 !text-[15px]" onClick={onDemoClick}>
                  Book a Demo <ArrowRight />
                </Button>
              </div>
            </div>
            {/* Right column — Customer Portfolio card */}
            <div className="lg:col-span-6 lg:pl-4">
              {(() => {
                const [popupVisible, setPopupVisible] = React.useState(true);
                const wrapRef = React.useRef(null);
                const handleMouseMove = React.useCallback((e) => {
                  const el = wrapRef.current;
                  if (!el) return;
                  const rect = el.getBoundingClientRect();
                  const proximity = 60;
                  const near = e.clientX > rect.left - proximity && e.clientX < rect.right + proximity &&
                               e.clientY > rect.top - proximity && e.clientY < rect.bottom + proximity;
                  setPopupVisible(!near);
                }, []);
                React.useEffect(() => {
                  window.addEventListener("mousemove", handleMouseMove);
                  return () => window.removeEventListener("mousemove", handleMouseMove);
                }, [handleMouseMove]);
                return (
                  <div ref={wrapRef} style={{ width: "100%", maxWidth: 560, margin: "0 auto", position: "relative", paddingBottom: 48 }}>
                    <div style={{ background: "#0d1424", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "22px 24px", boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
                      {/* Card header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 5 }}>Customer Portfolio</p>
                          <p style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>12 active · 4 in review</p>
                        </div>
                        <span style={{ fontSize: 12, color: "#64748b", fontWeight: 400, fontFamily: "Inter, sans-serif" }}>live</span>
                      </div>
                      {/* 2x2 customer grid */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                        {[
                          { name: "Acme Co.",        pct: 72, status: "healthy",  statusColor: "#22c55e", spend: "$284k/mo", ring: "#22c55e" },
                          { name: "Northvale Labs",  pct: 58, status: "+8 opps",  statusColor: "#22c55e", spend: "$92k/mo",  ring: "#38bdf8" },
                          { name: "Riveroak",        pct: 88, status: "88% cap",  statusColor: "#f59e0b", spend: "$39k/mo",  ring: "#f59e0b" },
                          { name: "Saltcliff Media", pct: 42, status: "tag gap",  statusColor: "#ef4444", spend: "$24k/mo",  ring: "#ef4444" },
                        ].map((c) => {
                          const R = 18, circ = 2 * Math.PI * R;
                          const dash = (c.pct / 100) * circ;
                          return (
                            <div key={c.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                              <svg width="48" height="48" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                                <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                                <circle cx="24" cy="24" r={R} fill="none" stroke={c.ring} strokeWidth="5"
                                  strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ * 0.25}
                                  strokeLinecap="round" />
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
                      {/* Footer */}
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
                    {/* Savings Found popup */}
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
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW SECTION 2: The Challenge ── */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#0F1729", paddingTop: 72, paddingBottom: 72 }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Challenge</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
              Customers expect more than cloud billing.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              Cloud customers want to understand where spend is going, why it's changing, how to reduce their rates, and if they are getting an acceptable return from their cloud investments.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              Cloud FinOps delivery becomes difficult when billing data, reseller discounts, customer special pricing, technical savings adjustments, and governance reporting are not connected. Resellers need a repeatable way to turn cloud financial data into customer-facing value.
            </p>
          </div>
        </div>
        {/* 5 challenge cards — 3 top row, 2 bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
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
          ].map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "18px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif", marginBottom: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
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
          ].map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "18px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif", marginBottom: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ── NEW SECTION 3: The Solution ── */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC", paddingTop: 72, paddingBottom: 72 }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
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
        {/* 5 solution cards — 3 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
              iconColor: "#3B82F6",
              t: "Customer cost visibility",
              b: "Give customers clear reporting on cloud spend, usage trends, allocation, and cost drivers.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/></svg>,
              iconColor: "#3B82F6",
              t: "Rate reduction and savings insights",
              b: "Identify opportunities to reduce waste, improve utilization, and take advantage of savings programs.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
              iconColor: "#3B82F6",
              t: "Budgeting and forecasting",
              b: "Support customer planning with budget tracking, spend trends, and forecast visibility.",
            },
          ].map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: `rgba(59,130,246,0.08)`, border: `1px solid rgba(59,130,246,0.18)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              t: "Governance and tagging",
              b: "Improve allocation, accountability, tagging visibility, and cost ownership.",
              accent: "#f59e0b",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
              t: "Managed Cloud FinOps reporting",
              b: "Deliver repeatable customer-facing reports that support ongoing cloud financial management.",
              accent: "#f59e0b",
            },
          ].map((c) => (
            <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: `rgba(59,130,246,0.08)`, border: `1px solid rgba(59,130,246,0.18)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ── NEW SECTION 4: How It Works ── */}
      <SectionShell id="finops-how-it-works" className="border-t border-line-soft" style={{ background: "#0F2040", paddingTop: 56, paddingBottom: 56 }}>
        <div className="text-center max-w-[760px] mx-auto mb-5">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 10 }}>How It Works</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#f1f5f9" }}>
            From unwieldy cloud cost data to customer-facing Cloud FinOps value.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
            moneta allows reseller and MSP teams turn billing and usage data into meaningful Cloud FinOps workflows for customers.
          </p>
        </div>
        {/* 6 step cards — 3+3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
            { t: "Ingest cloud cost and usage data",   b: "Bring cloud billing, usage, cost, account, subscription, and service data into one platform." },
            { t: "Organize spend by customer context", b: "Map spend to customers, accounts, subscriptions, services, teams, projects, or business units." },
            { t: "Surface cost drivers",               b: "Identify where spend is increasing, which services are contributing, and what changed over time." },
          ].map((s) => (
            <div key={s.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { t: "Identify savings opportunities", b: "Highlight waste, inefficient usage, discount opportunities, and optimization areas." },
            { t: "Track budgets and governance",   b: "Monitor budgets, tagging, allocation, and cost ownership to improve financial discipline." },
            { t: "Deliver customized reports to end customers", b: "Provide customers with repeatable reporting for spend reviews, optimization planning, and Cloud FinOps conversations." },
          ].map((s) => (
            <div key={s.t} className="hover-lift" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
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
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

// ---------- WHY MONETA ----------
function WhyPage({ onDemoClick }) {
  return (
    <React.Fragment>

      {/* ── SECTION 1: Built for the way cloud resellers operate ── */}
      <section className="relative pt-[95px] md:pt-[120px] pb-4 md:pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-6">
              <Eyebrow className="mb-6">Why moneta</Eyebrow>
              <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
                Built for the way cloud resellers actually{" "}
                <span className="grad-text-bp">operate, bill, and grow.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[520px]">
                moneta sits between the reseller's cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the reseller's business grows.
              </p>
              <div className="mt-9">
                <Button variant="primary" className="!px-7 !py-4 !text-[15px]" onClick={onDemoClick}>
                  Book a Demo <ArrowRight />
                </Button>
              </div>
            </div>
            {/* Right — Margin Flow card */}
            <div className="lg:col-span-6 lg:pl-4" style={{ paddingTop: "clamp(0px, 2vw, 28px)" }}>
              {(() => {
                const popupVisible = true;
                const wrapRef = React.useRef(null);
                return (
              <div ref={wrapRef} style={{ position: "relative", width: "100%", maxWidth: 515, margin: "0 auto", paddingBottom: 66 }}>
                <div style={{ background: "linear-gradient(160deg, #0b1a2e 0%, #0d2040 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: "20px 22px 22px", boxShadow: "0 24px 60px rgba(0,0,0,0.6)", position: "relative", overflow: "hidden" }}>
                  {/* Dot grid */}
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15, pointerEvents: "none" }} aria-hidden="true">
                    <defs><pattern id="wdg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#5B7BFF"/></pattern></defs>
                    <rect width="100%" height="100%" fill="url(#wdg)" />
                  </svg>
                  {/* Header */}
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
                  {/* SVG Sankey */}
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

                      {/* ══ TOP ROW ══
                          Blue card:   x=8→132,  y=8→72   (center y=40)
                          Slate card:  x=168→286, y=18→62  (center y=40)
                          Green card:  x=322→440, y=2→76   (center y=39)
                          Connector band height = 10px, centered at y=40 → y=35→45
                          Taper zone: 18px wide on each join edge
                      */}
                      {/* right taper */}
                      <path d="M286,18 C304,18 304,8 322,8 L322,72 C304,72 304,62 286,62 Z" fill="url(#wm2_greencon)"/>
                      {/* cards */}
                      <rect x="8"   y="2"  width="124" height="76" rx="8" fill="url(#wm2_blue)"/>
                      <rect x="168" y="18" width="118" height="44" rx="7" fill="url(#wm2_slate)"/>
                      <rect x="322" y="2"  width="118" height="76" rx="8" fill="url(#wm2_green)" filter="url(#wm2_glow)"/>
                      {/* left taper: matches blue card right edge, fades to slate */}
                      <path d="M286,18 C304,18 304,8 322,8 L322,72 C304,72 304,62 286,62 Z"
                        fill="url(#wm2_bluecon_l)"
                        transform="scale(-1,1) translate(-454,0)"/>
                      <text x="70"  y="45" textAnchor="middle" style={{ fontSize: 13, fontWeight: 600, fill: "#fff",     fontFamily: "Inter, sans-serif" }}>Cloud cost</text>
                      <text x="227" y="45" textAnchor="middle" style={{ fontSize: 12, fontWeight: 500, fill: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Customer bill</text>
                      <text x="381" y="45" textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: "#f0fdf4", fontFamily: "Inter, sans-serif" }}>Revenue</text>

                      {/* ══ BOTTOM ROW ══
                          Amber card:  x=8→132,  y=108→172 (center y=140)
                          Slate card:  x=168→286, y=118→162 (center y=140)
                          Green card:  x=322→440, y=102→178 (center y=140)
                          Band: y=135→145, taper zone: 18px
                      */}
                      {/* right taper */}
                      <path d="M286,118 C304,118 304,108 322,108 L322,172 C304,172 304,162 286,162 Z" fill="url(#wm2_greencon)"/>
                      {/* cards */}
                      <rect x="8"   y="102" width="124" height="76" rx="8" fill="url(#wm2_amber)"/>
                      <rect x="168" y="118" width="118" height="44" rx="7" fill="url(#wm2_slate)"/>
                      <rect x="322" y="102" width="118" height="76" rx="8" fill="url(#wm2_green)" filter="url(#wm2_glow)"/>
                      {/* left taper: matches amber card right edge, fades to slate */}
                      <path d="M286,118 C304,118 304,108 322,108 L322,172 C304,172 304,162 286,162 Z"
                        fill="url(#wm2_ambercon_l)"
                        transform="scale(-1,1) translate(-454,0)"/>
                      <text x="70"  y="145" textAnchor="middle" style={{ fontSize: 13, fontWeight: 600, fill: "#fef3c7", fontFamily: "Inter, sans-serif" }}>Commitments</text>

                      <text x="227" y="145" textAnchor="middle" style={{ fontSize: 12, fontWeight: 500, fill: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Discount engine</text>
                      <text x="381" y="145" textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: "#f0fdf4", fontFamily: "Inter, sans-serif" }}>Net margin</text>
                    </svg>
                  </div>
                  {/* Stat tiles */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 8, position: "relative" }}>
                    {[
                      { label: "cloud cost",   value: "$284,040", border: "rgba(255,255,255,0.1)", color: "#f1f5f9" },
                      { label: "adjustments",  value: "$38,120",  border: "rgba(255,255,255,0.1)", color: "#f1f5f9" },
                      { label: "margin",       value: "$46,210",  border: "rgba(34,197,94,0.35)",  color: "#f1f5f9" },
                    ].map((t) => (
                      <div key={t.label} style={{ background: "rgba(8,14,28,0.7)", border: `1px solid ${t.border}`, borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 11, fontWeight: 400, color: "#64748b", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>{t.label}</p>
                        <p style={{ fontSize: 20, fontWeight: 700, color: t.color, fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>{t.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Margin Recovered popup */}
                <style>{`@keyframes floatUpDownWhy1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }`}</style>
                <div style={{ position: "absolute", bottom: -8, left: 16, background: "#ffffff", borderRadius: 12, padding: "11px 14px", width: 272, boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)", pointerEvents: "none", animation: "floatUpDownWhy1 3s ease-in-out infinite", opacity: popupVisible ? 1 : 0, transition: "opacity 0.2s ease" }}>
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
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Reseller Problem ── */}
      <SectionShell style={{ background: "#0F2040", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <Eyebrow className="mb-5">The Reseller Problem</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
              Most stacks were built for direct customers, not resellers.
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
        {/* Comparison table */}
        <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, overflow: "hidden" }}>
          {/* Header row */}
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
          {/* Rows */}
          {[
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
          ].map((row, i, arr) => (
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

      {/* ── SECTION 3: What Moneta Is ── */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
          <div>
            <Eyebrow className="mb-5">What moneta is</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
              An operating system for cloud reseller billing.
            </h2>
          </div>
          <div className="flex flex-col justify-end" style={{ paddingTop: 40 }}>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              moneta brings billing, pricing, discount management, and margin intelligence into one platform, so the operating motion of a reseller stays aligned across customers and clouds.
            </p>
          </div>
        </div>
        {/* Asymmetric card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left — large dark featured card */}
          <div className="hover-lift" style={{ background: "#0F2040", borderRadius: 16, padding: "28px 28px 24px" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif", marginBottom: 12, lineHeight: 1.3 }}>Built reseller-first, from the data model up.</h3>
            <p style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.65, fontFamily: "Inter, sans-serif", marginBottom: 20 }}>
              Other tools bolt reseller logic onto a direct-customer product. moneta starts with the reseller's data: pricing rules, contracts, commitments, discounts, customer segregation, and margin.
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
          {/* Right — 2x2 light cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
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
            ].map((c) => (
              <div key={c.t} className="hover-lift" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 6, lineHeight: 1.3 }}>{c.t}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ── SECTION 4: How It Fits ── */}
      <SectionShell id="why-how-it-fits" className="border-t border-line-soft light-section" style={{ background: "#DDE4EF" }}>
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
            Six Steps to Driving Revenue and Margin with moneta.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7]" style={{ color: "#64748b" }}>
            moneta starts producing customer-level margin in days and enables an immediate and easy to implement Cloud FinOps service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { step: 1, t: "Connect cloud accounts",       b: "Secure connections to cloud accounts pull billing, usage, and commitment data into the operating system." },
            { step: 2, t: "Map customers and contracts",  b: "Each linked or subscription account is associated with the right customer, contract, and commitment treatment." },
            { step: 3, t: "Define pricing and discount rules", b: "Pricing markups, volume tiers, service overrides, and discount programs live as rules that resolve per customer." },
          ].map((s) => (
            <div key={s.t} className="hover-border-emphasis" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: 4, t: "Reconcile to margin",   b: "Cloud cost, pricing rules, discounts, and credits combine into a customer-level margin view every billing period." },
            { step: 5, t: "Ship customer reports",  b: "Branded reports go to customers automatically, covering spend, allocation, savings progress, and budget health." },
            { step: 6, t: "Operate as a service",   b: "Savings work, governance reviews, and budget conversations become a repeatable motion across the customer base." },
          ].map((s) => (
            <div key={s.t} className="hover-border-emphasis" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>


      {/* ── SECTION 6: Ready to See Your Margin ── */}
      <SectionShell style={{ background: "#060B18", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 40, paddingBottom: 40 }}>
        <div className="text-center max-w-[640px] mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3B82F6", display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B82F6", fontFamily: "Inter, sans-serif" }}>Ready to grow your cloud revenue and margin?</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
            See why resellers replace stitched workflows with moneta.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7]" style={{ color: "#94a3b8" }}>
            Make the quick connection to an account and see what the operating system can do with it – in 45 minutes.
          </p>
          <div className="mt-9">
            <Button variant="primary" onClick={onDemoClick} className="!px-8 !py-4 !text-[15px]">
              Book a Demo <ArrowRight />
            </Button>
          </div>
        </div>
      </SectionShell>    </React.Fragment>
  );
}

function FinOpsForCloudResellersPage({ onDemoClick }) {
  return (
    <React.Fragment>
      {/* Hero */}
      <section className="relative pt-[110px] md:pt-[140px] pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative text-center">
          <Eyebrow className="mb-7 flex flex-col items-center">FinOps for Cloud Resellers</Eyebrow>
          <h1 className="max-w-[900px] mx-auto" style={{ fontSize: "clamp(36px, 4.2vw, 58px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            Deliver FinOps Consistently<br />Across <span className="grad-text-bp">Every Customer</span>
          </h1>
          <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[580px] mx-auto">
            A structured, repeatable FinOps service—without added operational burden.
          </p>
          <FinOpsDiagram onDemoClick={onDemoClick} />
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
          {/* Header row */}
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(0,0,0,0.03)" }}>
            <p className="eyebrow text-[10px] text-ink-muted">Without Infrastructure</p>
            <div />
            <p className="eyebrow text-[10px] grad-text-bp">With moneta</p>
          </div>
          {[
            ["One-off cost analysis",                  "Continuous FinOps delivery across every customer account", "#3B82F6"],
            ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
            ["Manual, reactive optimization",          "Continuous, system-driven optimization across every customer", "#6366F1"],
            ["One-time engagement",                    "Recurring FinOps service delivered at scale", "#A855F7"],
          ].map(([a, b, c], i, arr) => (
            <div key={a} className={`grid grid-cols-[1fr_40px_1fr] items-center px-6 py-4 ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
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
            {[
              { t: "Customer review reporting",   b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
              { t: "Optimization playbooks",      b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
              { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
              { t: "One source of truth",         b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
            ].map((f, i) => (
              <div key={f.t} className="flex items-start gap-4 px-5 py-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${f.c}` }}>
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
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

// ---------- PRIVACY POLICY ----------
function PrivacyPolicyPage() {
  return (
    <React.Fragment>
      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          {(() => {
            const H = ({ children }) => (
              <h2 className="text-[22px] md:text-[24px] font-semibold text-white mt-10 mb-3 first:mt-0" style={{ letterSpacing: "-0.01em" }}>{children}</h2>
            );
            const P = ({ children }) => (
              <p className="text-[15.5px] leading-[1.75] text-ink-secondary mb-4">{children}</p>
            );
            return (
              <React.Fragment>
                <P>
                  Protecting your private information is our priority. This Statement of Privacy applies to www.monetacloud.com,
                  and Moneta and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise
                  noted, all references to Moneta include www.monetacloud.com and Moneta. The Moneta website is a news and
                  information site. By using the Moneta website, you consent to the data practices described in this statement.
                </P>

                <H>Collection of your Personal Information</H>
                <P>
                  We do not collect any personal information about you unless you voluntarily provide it to us. However, you may
                  be required to provide certain personal information to us when you elect to use certain products or services.
                  These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one
                  of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email
                  message; (e) submitting your credit card or other payment information when ordering and purchasing products and
                  services. To wit, we will use your information for, but not limited to, communicating with you in relation to
                  services and/or products you have requested from us. We also may gather additional personal or non-personal
                  information in the future.
                </P>

                <H>Sharing Information with Third Parties</H>
                <P>Moneta does not sell, rent or lease its customer lists to third parties.</P>
                <P>
                  Moneta may, from time to time, contact you on behalf of external business partners about a particular offering
                  that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name,
                  address, telephone number) is not transferred to the third party. Moneta may share data with trusted partners to
                  help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for
                  deliveries. All such third parties are prohibited from using your personal information except to provide these
                  services to Moneta, and they are required to maintain the confidentiality of your information.
                </P>
                <P>
                  Moneta may disclose your personal information, without notice, if required to do so by law or in the good faith
                  belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served
                  on Moneta or the site; (b) protect and defend the rights or property of Moneta; and/or (c) act under exigent
                  circumstances to protect the personal safety of users of Moneta, or the public.
                </P>

                <H>Tracking User Behavior</H>
                <P>
                  Moneta may keep track of the websites and pages our users visit within Moneta, in order to determine what Moneta
                  services are the most popular. This data is used to deliver customized content and advertising within Moneta to
                  customers whose behavior indicates that they are interested in a particular subject area.
                </P>

                <H>Automatically Collected Information</H>
                <P>
                  Information about your computer hardware and software may be automatically collected by Moneta. This information
                  can include: your IP address, browser type, domain names, access times and referring website addresses. This
                  information is used for the operation of the service, to maintain quality of the service, and to provide general
                  statistics regarding use of the Moneta website.
                </P>

                <H>Use of Cookies</H>
                <P>
                  The Moneta website may use "cookies" to help you personalize your online experience. A cookie is a text file that
                  is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to
                  your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that
                  issued the cookie to you.
                </P>
                <P>
                  One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a
                  cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Moneta
                  pages, or register with Moneta site or services, a cookie helps Moneta to recall your specific information on
                  subsequent visits. This simplifies the process of recording your personal information, such as billing addresses,
                  shipping addresses, and so on. When you return to the same Moneta website, the information you previously provided
                  can be retrieved, so you can easily use the Moneta features that you customized.
                </P>
                <P>
                  You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can
                  usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may
                  not be able to fully experience the interactive features of the Moneta services or websites you visit.
                </P>

                <H>Links</H>
                <P>
                  This website contains links to other sites. Please be aware that we are not responsible for the content or privacy
                  practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy
                  statements of any other site that collects personally identifiable information.
                </P>

                <H>Security of your Personal Information</H>
                <P>
                  Moneta secures your personal information from unauthorized access, use, or disclosure. Moneta uses the following
                  methods for this purpose:
                </P>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">SSL Protocol</li>
                </ul>
                <P>
                  When personal information (such as a credit card number) is transmitted to other websites, it is protected through
                  the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
                </P>
                <P>
                  We strive to take appropriate security measures to protect against unauthorized access to or alteration of your
                  personal information. Unfortunately, no data transmission over the Internet or any wireless network can be
                  guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge
                  that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and
                  (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this
                  Site cannot be guaranteed.
                </P>

                <H>Right to Deletion</H>
                <P>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</P>
                <ul className="list-disc pl-6 mb-4 space-y-1.5">
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Delete your personal information from our records; and</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Direct any service providers to delete your personal information from their records.</li>
                </ul>
                <P>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</P>
                <ul className="list-disc pl-6 mb-4 space-y-1.5">
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Debug to identify and repair errors that impair existing intended functionality;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with the California Electronic Communications Privacy Act;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with an existing legal obligation; or</li>
                  <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
                </ul>

                <H>Children Under Thirteen</H>
                <P>
                  Moneta does not knowingly collect personally identifiable information from children under the age of thirteen. If
                  you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
                </P>

                <H>E-mail Communications</H>
                <P>
                  From time to time, Moneta may contact you via email for the purpose of providing announcements, promotional offers,
                  alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may
                  receive a notification when you open an email from Moneta or click on a link therein.
                </P>
                <P>
                  If you would like to stop receiving marketing or promotional communications via email from Moneta, you may opt out
                  of such communications by clicking on the UNSUBSCRIBE or MANAGE PREFERENCES links.
                </P>

                <H>External Data Storage Sites</H>
                <P>
                  We may store your data on servers provided by third-party hosting vendors with whom we have contracted.
                </P>

                <H>Changes to this Statement</H>
                <P>
                  Moneta reserves the right to change this Privacy Policy from time to time. We will notify you about significant
                  changes in the way we treat personal information by sending a notice to the primary email address specified in your
                  account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued
                  use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of
                  the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
                </P>

                <H>Contact Information</H>
                <P>
                  Moneta welcomes your questions or comments regarding this Statement of Privacy. If you believe that Moneta has not
                  adhered to this Statement, please contact Moneta at:{" "}
                  <a href="mailto:info@monetacloud.com" className="text-white font-semibold hover:opacity-80 underline">info@monetacloud.com</a>
                </P>
              </React.Fragment>
            );
          })()}
        </div>
      </SectionShell>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, PlatformPage, FinOpsPage, FinOpsForCloudResellersPage, WhyPage, PrivacyPolicyPage });
