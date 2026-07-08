import Link from "next/link";
import MonetaMark from "./MonetaMark";

export default function Logo({ size = 30 }) {
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="moneta home" style={{ gap: 2 }}>
      <MonetaMark size={size} />
      <span
        className="font-semibold tracking-tight text-ink-primary"
        style={{ fontSize: Math.round(size * 0.72), lineHeight: 1, display: "inline-block", marginLeft: -2 }}
      >
        moneta
      </span>
    </Link>
  );
}
