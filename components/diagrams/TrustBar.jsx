"use client";

import { PngIcon, AwsLogo, AzureLogo } from "./shared";

export default function TrustBar() {
  return (
    <div className="card !rounded-2xl px-8 md:px-14 overflow-hidden" style={{ height: 88 }}>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 h-full">
        <div className="flex items-center gap-3" style={{ transform: "scale(1.2)", transformOrigin: "left center" }}>
          <PngIcon src="/graphics/icons/HeroCloudProcessedAnnuallyIcon.png" size={42} />
          <div className="leading-tight">
            <p className="text-[12px] text-ink-muted">Multi-customer</p>
            <p className="text-[16px] font-semibold grad-text-bp -mt-0.5">Billing</p>
          </div>
        </div>
        <div className="flex items-center" style={{ transform: "scale(1.2)", transformOrigin: "center" }}>
          <AwsLogo />
        </div>
        <div className="flex items-center gap-3" style={{ transform: "scale(1.2)", transformOrigin: "center" }}>
          <AzureLogo />
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Microsoft</p>
            <p className="text-[18px] font-semibold text-white -mt-0.5">Azure</p>
          </div>
        </div>
        <div className="flex items-center gap-3" style={{ transform: "scale(1.2)", transformOrigin: "right center" }}>
          <PngIcon src="/graphics/icons/HeroPurposeBuiltIcon.png" size={42} />
          <div className="leading-tight">
            <p className="text-[12px] text-ink-muted">Purpose-built for</p>
            <p className="text-[16px] font-semibold grad-text-bp -mt-0.5">Cloud Resellers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
