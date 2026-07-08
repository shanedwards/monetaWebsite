import ArrowRight from "@/components/ui/ArrowRight";
import Eyebrow from "@/components/ui/Eyebrow";
import DemoCtaButton from "@/components/DemoCtaButton";

export default function HeroSplit({ tagline, title, accentWord, description, ctaLabel, right }) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.indexOf(accentWord);
    if (idx < 0) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="grad-text-bp">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
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
            {description && <p className="mt-7 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary">{description}</p>}
            <div className="mt-9">
              <DemoCtaButton variant="primary" className="!px-7 !py-4 !text-[15px]">
                {ctaLabel} <ArrowRight />
              </DemoCtaButton>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">{right}</div>
        </div>
      </div>
    </section>
  );
}
