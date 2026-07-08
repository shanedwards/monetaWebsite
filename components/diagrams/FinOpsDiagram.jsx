import MonetaMark from "@/components/ui/MonetaMark";
import ArrowRight from "@/components/ui/ArrowRight";
import DemoCtaButton from "@/components/DemoCtaButton";
import { Icons } from "./shared";

export default function FinOpsDiagram() {
  const steps = [
    { label: "Billing", sub: "Accurate usage\nand invoicing", color: "#3B82F6", icon: "invoice" },
    { label: "Pricing", sub: "Flexible, customer-\nspecific pricing", color: "#22D3EE", icon: "tag" },
    { label: "Discounts", sub: "Consistent discount\nmanagement", color: "#6366F1", icon: "percent" },
    { label: "Margin", sub: "Sustainable margins\nat scale", color: "#A855F7", icon: "trend" },
  ];
  return (
    <div className="mt-12 max-w-[1060px] mx-auto">
      <div className="flex items-center justify-center gap-2 mb-1">
        <MonetaMark size={22} />
        <span className="text-[17px] font-semibold tracking-tight text-white">moneta</span>
      </div>
      <p className="eyebrow text-ink-muted mb-3 text-[10px] tracking-[0.2em]">The Billing Infrastructure</p>

      <div className="w-full overflow-x-auto">
      <div className="flex items-stretch gap-0 min-w-[900px] mx-auto" style={{ width: "max-content" }}>
        <div
          className="shrink-0 w-[175px] rounded-2xl text-left p-5 flex flex-col justify-center"
          style={{ background: "#0B0D16", border: "1px solid #1E2235" }}
        >
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#22D3EE" }}>
            Today
          </p>
          <p className="text-[12.5px] font-semibold mb-5 leading-[1.35] text-white">Hard to scale FinOps operations</p>
          <div className="space-y-3.5">
            {[
              { label: "One-off analysis per customer", icon: "bars" },
              { label: "Manual process and reporting", icon: "scale" },
              { label: "Difficult to scale", icon: "layers" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}
                >
                  {Icons[icon]("#3B82F6")}
                </div>
                <p className="text-[11.5px] text-ink-secondary leading-[1.3]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 w-20 relative">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 200"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}
          >
            <line x1="4" y1="58" x2="52" y2="58" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4" y1="100" x2="52" y2="100" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4" y1="142" x2="52" y2="142" stroke="#5B7BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="52" y1="58" x2="52" y2="142" stroke="rgba(91,123,255,0.22)" strokeWidth="1" />
            <line x1="52" y1="100" x2="74" y2="100" stroke="#22D3EE" strokeWidth="1.5" />
            <polyline points="68,96 74,100 68,104" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>

        <div
          className="flex-1 rounded-2xl flex flex-col"
          style={{
            border: "1px solid rgba(91,123,255,0.45)",
            background: "linear-gradient(160deg,#0E1122 0%,#0B0E1A 100%)",
            boxShadow: "0 0 50px 8px rgba(91,123,255,0.14), 0 0 80px 16px rgba(168,85,247,0.09)",
          }}
        >
          <div className="px-8 pt-8 pb-4 relative">
            <div
              className="absolute"
              style={{
                top: "calc(2rem + 23px)",
                left: "calc(2rem + 24px)",
                right: "calc(2rem + 24px)",
                height: 1.5,
                background: "linear-gradient(90deg,#3B82F6,#22D3EE,#6366F1,#A855F7)",
                opacity: 0.6,
              }}
            />
            <div className="flex items-start justify-between relative z-10">
              {steps.map(({ label, sub, color, icon }, i) => (
                <div key={label} className="contents">
                  <div className="flex flex-col items-center gap-2.5" style={{ width: 90 }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg,#1a1d2e,#0f1220)",
                        border: `2px solid ${color}80`,
                        boxShadow: `0 0 18px ${color}60, 0 0 36px ${color}25`,
                        position: "relative",
                        zIndex: 20,
                      }}
                    >
                      {Icons[icon](color)}
                    </div>
                    <span className="text-[13px] font-semibold text-white">{label}</span>
                    <span className="text-[11px] text-ink-secondary leading-[1.35] text-center whitespace-pre-line">{sub}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 16, height: 48, zIndex: 20, position: "relative" }}>
                      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
                        <path d="M1,2 L6,5 L1,8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinejoin="miter" strokeLinecap="square" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center px-6 pb-5 pt-2">
            <p className="text-[12px] text-ink-muted">Continuously aligning billing, pricing, discounts, and margin.</p>
          </div>
        </div>

        <div className="shrink-0 w-20 relative">
          <svg width="100%" height="100%" viewBox="0 0 80 40" preserveAspectRatio="none" fill="none" aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
            <line x1="0" y1="20" x2="60" y2="20" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.65" />
            <path d="M60,18 L66,20 L60,22" fill="none" stroke="#A855F7" strokeWidth="1.4" strokeLinejoin="miter" strokeLinecap="square" />
          </svg>
        </div>

        <div
          className="shrink-0 w-[155px] rounded-2xl flex flex-col items-center justify-center p-5 text-center"
          style={{ background: "#0B0D16", border: "1px solid rgba(168,85,247,0.4)", boxShadow: "0 0 28px rgba(168,85,247,0.12)" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
            style={{
              background: "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(168,85,247,0.15))",
              border: "2px solid rgba(168,85,247,0.6)",
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5L18 6" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[12.5px] font-semibold text-white leading-[1.45]">
            Continuous FinOps across <span style={{ color: "#22D3EE" }}>every customer.</span>
          </p>
        </div>
      </div>
      </div>

      <div className="mt-6 flex justify-center">
        <DemoCtaButton variant="primary" className="!px-7 !py-4 !text-[15px]">
          Book a Demo <ArrowRight />
        </DemoCtaButton>
      </div>
    </div>
  );
}
