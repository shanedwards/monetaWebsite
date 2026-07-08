"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MonetaMark from "./ui/MonetaMark";
import ArrowRight from "./ui/ArrowRight";
import Button from "./ui/Button";
import { useDemoModal } from "./DemoModalProvider";
import { NAV } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const openDemo = useDemoModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200 " +
        (scrolled ? "bg-bg-primary/80 backdrop-blur-xl border-b border-line-soft" : "bg-transparent border-b border-transparent")
      }
    >
      <div className="container-x h-[84px] flex items-center justify-between relative">
        {/* Logo — left */}
        <Link href="/" aria-label="moneta home" className="flex items-center gap-0 shrink-0">
          <MonetaMark size={36} />
          <span className="text-[23px] font-semibold tracking-tight text-white" style={{ marginLeft: -3, transform: "translateY(-0.9px)" }}>
            moneta
          </span>
        </Link>

        {/* Nav — perfectly centered via absolute positioning */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV.map((n) => {
            const active = pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={"relative text-[16px] font-medium transition-colors " + (active ? "text-white" : "text-ink-secondary hover:text-white")}
              >
                {n.label}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] grad-line rounded-full" />}
              </Link>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openDemo}
            className="hidden sm:inline-flex items-center justify-center gap-2 text-white font-semibold text-[16px] hover:opacity-90 px-5 py-2.5 rounded-md"
            style={{ border: "1.5px solid #3B82F6", background: "#060B18" }}
          >
            Book a Demo <ArrowRight size={15} />
          </button>
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-line text-ink-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-line-soft bg-bg-primary/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="py-3 text-[15px] text-ink-secondary hover:text-white">
                {n.label}
              </Link>
            ))}
            <Button
              variant="primary"
              onClick={() => {
                setOpen(false);
                openDemo();
              }}
              className="mt-2 w-full"
            >
              Book a Demo <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
