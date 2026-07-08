"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Eyebrow from "./ui/Eyebrow";
import ArrowRight from "./ui/ArrowRight";
import { useDemoModal } from "./DemoModalProvider";
import { FAQS } from "@/lib/constants";

function FaqItem({ q, a, isOpen, onToggle, isLast }) {
  const panelRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (panelRef.current) setHeight(panelRef.current.scrollHeight + 2);
    };
    measure();
    // Re-measure once web fonts finish loading — otherwise the height is
    // captured at the fallback font size and clips the reflowed text.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [a, isOpen]);

  const activeTextStyle = isOpen
    ? { background: "linear-gradient(92deg, #3B82F6 0%, #5B7BFF 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
    : { color: "#cbd5e1" };

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-4 px-3 -mx-3 rounded-lg text-left group transition-colors duration-200"
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className="shrink-0 rounded-full"
            style={{
              width: 4,
              height: isOpen ? 20 : 0,
              marginTop: -3,
              background: "linear-gradient(180deg, #3B82F6 0%, #5B7BFF 100%)",
              opacity: isOpen ? 1 : 0,
              boxShadow: isOpen ? "0 0 10px rgba(91,123,255,0.6)" : "none",
              transition: "height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            }}
          />
          <span className="font-sans text-[16px] md:text-[17px] font-medium leading-[1.4] transition-colors duration-200" style={activeTextStyle}>
            {q}
          </span>
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full grid place-items-center border transition-colors duration-200"
          style={{ borderColor: isOpen ? "rgba(91,123,255,0.6)" : "rgba(255,255,255,0.15)" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="text-ink-secondary group-hover:text-white"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s ease" }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
        }}
      >
        <p ref={panelRef} className="pt-1 pb-6 pr-10 font-sans text-[15px] leading-[1.7] text-ink-secondary">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(-1);
  const openDemo = useDemoModal();

  return (
    <section
      className="relative py-14 md:py-16 overflow-hidden"
      style={{
        background: "radial-gradient(120% 90% at 75% 0%, rgba(91,123,255,0.12) 0%, rgba(59,130,246,0.05) 32%, rgba(15,32,64,0) 62%), #0F2040",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(91,123,255,0.55) 50%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(91,123,255,0.25) 50%, transparent 100%)" }} />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 self-start">
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="text-h2 text-balance">Common Questions</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-ink-secondary max-w-[320px]">
              Everything you need to know about running cloud reseller finance on moneta.
            </p>
            <button onClick={openDemo} className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-white group">
              <span className="grad-text-bp">Still have questions? Book a demo</span>
              <ArrowRight size={15} className="text-accent-indigo transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
          <div className="lg:col-span-8">
            <div
              className="rounded-[20px] px-6 md:px-8 py-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 24px 60px -24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {FAQS.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} isLast={i === FAQS.length - 1} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
