"use client";

import Image from "next/image";
import { Icons, PngIcon, CheckCircle } from "./shared";

export default function OperatingSystemDiagram() {
  const inputs = [
    { label: "Usage Data", sub: "Real-time", src: "/graphics/icons/ProblemLimitedIcon.png" },
    { label: "Vendor Pricing", sub: "AWS, Azure", src: "/graphics/icons/ProblemCustomerIcon.png" },
    { label: "Contracts", sub: "Agreements", src: "/graphics/icons/ProblemBillingIcon.png" },
  ];
  const outputs = [
    { label: "Invoices", sub: "Accurate", src: "/graphics/icons/ProblemBillingIcon.png" },
    { label: "Margin Intelligence", sub: "Actionable", src: "/graphics/icons/ProblemLimitedIcon.png" },
  ];
  const coreRows = [
    { t: "Pricing Logic", s: "Pricing rules that adapt", src: null, svgI: "settings", c: "#5B7BFF" },
    { t: "Discount Engine", s: "Automated discounts", src: "/graphics/icons/ProblemMisappliedIcon.png", c: "#F59E0B" },
    { t: "Billing System", s: "Accurate. Automated. Aligned.", src: "/graphics/icons/ProblemBillingIcon.png", c: "#A855F7" },
    { t: "Margin Intelligence Layer", s: "Real-time margin visibility", src: "/graphics/icons/ProblemLimitedIcon.png", c: "#5B7BFF" },
  ];

  const Connector = ({ dir = "in" }) => (
    <svg className="hidden md:block" width="36" height="14" viewBox="0 0 36 14" aria-hidden="true">
      {dir === "in" ? (
        <>
          <line x1="0" y1="7" x2="28" y2="7" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="4 3" />
          <polygon points="28,3.5 36,7 28,10.5" fill="#3B82F6" />
        </>
      ) : (
        <>
          <line x1="0" y1="7" x2="28" y2="7" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="4 3" />
          <polygon points="28,3.5 36,7 28,10.5" fill="#A855F7" />
        </>
      )}
    </svg>
  );

  return (
    <div className="relative w-full overflow-x-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-5 md:gap-8 items-center min-w-[560px]">

        <div className="space-y-3">
          <p className="eyebrow text-center md:text-left text-[11px] tracking-[0.2em] mb-2">Inputs</p>
          {inputs.map((inp) => (
            <div key={inp.label} className="relative card !rounded-xl px-4 py-3.5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-md grid place-items-center border border-line bg-bg-tertiary/40 shrink-0">
                <PngIcon src={inp.src} size={26} />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-semibold">{inp.label}</p>
                <p className="text-[12px] text-ink-muted">{inp.sub}</p>
              </div>
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-0.5 hidden md:block" style={{ zIndex: 10 }}>
                <Connector dir="in" />
              </span>
            </div>
          ))}
        </div>

        <div className="relative card !rounded-2xl p-5" style={{
          minWidth: "min(300px, 46vw)",
          boxShadow: "0 0 0 1px rgba(91,123,255,0.3), 0 24px 60px -20px rgba(91,123,255,0.4)",
          zIndex: 0
        }}>
          <div className="flex items-center justify-center mb-4 pb-4 border-b border-line-soft" style={{ gap: 2 }}>
            <Image src="/assets/moneta-icon.png" alt="" width={30} height={30} style={{ objectFit: "contain", transform: "translateY(-2px)" }} />
            <span style={{ fontSize: 16, lineHeight: 1, marginLeft: -2 }}>
              <b className="text-white">moneta</b>{" "}
              <span className="grad-text-bp font-semibold">operating system</span>
            </span>
          </div>
          <div className="space-y-2">
            {coreRows.map((r) => (
              <div key={r.t} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-line-soft bg-bg-tertiary/40">
                <div className="w-8 h-8 rounded-md grid place-items-center border border-line bg-bg-tertiary shrink-0">
                  {r.src ? <PngIcon src={r.src} size={18} /> : Icons[r.svgI](r.c)}
                </div>
                <div className="flex-1 leading-tight min-w-0">
                  <p className="text-[13px] font-semibold truncate">{r.t}</p>
                  <p className="text-[11px] text-ink-muted leading-tight">{r.s}</p>
                </div>
                <CheckCircle color={r.c} size={15} />
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-line-soft">
            <p className="eyebrow text-center text-[10px] tracking-[0.2em] mb-2.5">Controls</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Margin Rules", sub: "Active", src: "/graphics/icons/ProblemBLicon.png" },
                { label: "Discount Policies", sub: "Enforced", src: "/graphics/icons/ProblemMisappliedIcon.png" },
              ].map((ctrl) => (
                <div key={ctrl.label} className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-line-soft">
                  <PngIcon src={ctrl.src} size={16} />
                  <div className="leading-tight min-w-0">
                    <p className="text-[11.5px] font-semibold truncate">{ctrl.label}</p>
                    <p className="text-[10px] text-ink-muted">{ctrl.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="eyebrow text-center md:text-left text-[11px] tracking-[0.2em] mb-2">Outputs</p>
          {outputs.map((out) => (
            <div key={out.label} className="relative card !rounded-xl px-4 py-3.5 flex items-center gap-3.5">
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-0.5 hidden md:block" style={{ zIndex: 10 }}>
                <Connector dir="out" />
              </span>
              <div className="w-11 h-11 rounded-md grid place-items-center border border-line bg-bg-tertiary/40 shrink-0">
                <PngIcon src={out.src} size={26} />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-semibold">{out.label}</p>
                <p className="text-[12px] text-ink-muted">{out.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
