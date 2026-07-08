import ArrowRight from "./ArrowRight";
import DemoCtaButton from "@/components/DemoCtaButton";

export default function FinalCTA({ eyebrow, title, description, ctaLabel = "Book a Demo", className = "" }) {
  return (
    <section className={`relative py-10 md:py-14 overflow-hidden ${className}`}>
      <div className="dot-corner" />
      <div className="container-x relative text-center flex flex-col items-center">
        {eyebrow && (
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3B82F6",
              fontFamily: "Inter, sans-serif",
              marginBottom: 16,
            }}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-h1 text-balance max-w-[760px]">{title}</h2>
        {description && <p className="mt-6 text-[19px] leading-[1.6] text-ink-secondary max-w-[560px]">{description}</p>}
        <div className="mt-9">
          <DemoCtaButton variant="primary" className="!px-7 !py-4 !text-[15px]">
            {ctaLabel} <ArrowRight />
          </DemoCtaButton>
        </div>
      </div>
    </section>
  );
}
