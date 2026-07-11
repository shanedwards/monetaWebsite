"use client";

import { PngIcon, AwsLogo, AzureLogo } from "./shared";

export default function TrustBar() {
  return (
    <div className="card !rounded-2xl px-5 py-4 md:px-14 md:py-0 overflow-hidden md:h-[88px]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:flex md:flex-nowrap md:items-center md:justify-between md:gap-6 md:h-full">
        <div className="flex items-center gap-2 md:gap-3 md:[transform:scale(1.2)] md:[transform-origin:left_center]">
          <PngIcon src="/graphics/icons/HeroCloudProcessedAnnuallyIcon.png" size={42} className="!w-[30px] !h-[30px] md:!w-[42px] md:!h-[42px]" />
          <div className="leading-tight">
            <p className="text-[10.5px] md:text-[12px] text-ink-muted">Multi-customer</p>
            <p className="text-[14px] md:text-[16px] font-semibold grad-text-bp -mt-0.5">Billing</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start w-9 h-9 md:w-auto md:h-auto overflow-hidden md:overflow-visible md:[transform:scale(1.2)] md:[transform-origin:center]">
          <div className="[transform:scale(0.64)] md:[transform:none]">
            <AwsLogo />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 md:[transform:scale(1.2)] md:[transform-origin:center]">
          <AzureLogo />
          <div className="leading-tight">
            <p className="text-[9.5px] md:text-[11px] uppercase tracking-[0.16em] text-ink-muted">Microsoft</p>
            <p className="text-[15px] md:text-[18px] font-semibold text-white -mt-0.5">Azure</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 md:[transform:scale(1.2)] md:[transform-origin:right_center]">
          <PngIcon src="/graphics/icons/HeroPurposeBuiltIcon.png" size={42} className="!w-[30px] !h-[30px] md:!w-[42px] md:!h-[42px]" />
          <div className="leading-tight">
            <p className="text-[10.5px] md:text-[12px] text-ink-muted">Purpose-built for</p>
            <p className="text-[14px] md:text-[16px] font-semibold grad-text-bp -mt-0.5">Cloud Resellers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
