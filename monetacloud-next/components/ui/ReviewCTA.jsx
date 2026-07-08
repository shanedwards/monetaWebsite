import ArrowRight from "./ArrowRight";

export default function ReviewCTA({ onClick, label = "Book a Demo", className = "" }) {
  return (
    <button onClick={onClick} className={`btn-grad-border inline-flex items-center gap-4 px-6 py-5 text-left ${className}`}>
      <span className="font-semibold text-white text-[15.5px] leading-[1.35]">{label}</span>
      <span className="shrink-0"><ArrowRight size={20} /></span>
    </button>
  );
}
