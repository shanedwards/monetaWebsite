"use client";

import Link from "next/link";
import MonetaMark from "./ui/MonetaMark";
import { useDemoModal } from "./DemoModalProvider";

export default function Footer() {
  const openDemo = useDemoModal();

  return (
    <footer className="bg-bg-secondary border-t border-line-soft">
      <div className="container-x py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="mt-3">
            <Link href="/" aria-label="moneta home" className="flex items-center gap-0">
              <MonetaMark size={36} />
              <span className="text-[23px] font-semibold tracking-tight text-white" style={{ marginLeft: -3, transform: "translateY(0.3px)" }}>
                moneta
              </span>
            </Link>
            <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-secondary max-w-sm">
              The financial operating system for AWS and Azure resellers
            </p>
          </div>
          <div className="flex items-center gap-6 md:mt-3">
            <button onClick={openDemo} className="text-[14px] text-ink-secondary hover:text-white transition-colors">
              Contact
            </button>
            <span className="text-[14px] text-ink-secondary select-none">info@monetacloud.com</span>
            <a
              href="https://www.linkedin.com/company/monetacloud/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="moneta on LinkedIn"
              className="text-ink-secondary hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-5 pt-3 border-t border-line-soft flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-[13px] text-ink-secondary">© 2026 moneta. All rights reserved.</p>
          <Link href="/privacy-policy" className="text-[13px] text-ink-secondary hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
