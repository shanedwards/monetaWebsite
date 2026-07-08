import Link from "next/link";
import ArrowRight from "@/components/ui/ArrowRight";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative pt-[140px] pb-24 overflow-hidden min-h-[70vh] flex items-center">
      <div className="glow-hero" />
      <div className="dot-corner" />
      <div className="container-x relative text-center">
        <p className="eyebrow mb-4 inline-block">404</p>
        <h1 className="text-h1 text-balance">This page doesn&apos;t exist.</h1>
        <p className="mt-5 text-[17px] leading-[1.65] text-ink-secondary max-w-[480px] mx-auto">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[14.5px] px-6 py-3 btn-solid-blue text-white"
          >
            Back to Home <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
