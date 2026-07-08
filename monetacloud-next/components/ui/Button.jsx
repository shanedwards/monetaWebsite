import Link from "next/link";

export default function Button({ variant = "primary", as = "button", href, children, className = "", onClick, type, ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[14.5px] transition-all duration-150 ease-out select-none";
  const sizes = "px-6 py-3";
  const variants = {
    primary: `btn-solid-blue text-white ${sizes}`,
    gradient: `btn-grad-border text-white ${sizes}`,
    secondary: `bg-transparent border border-line-hover text-ink-primary hover:border-accent-indigo hover:text-white ${sizes}`,
    ghost: `bg-transparent text-ink-secondary hover:text-ink-primary ${sizes}`,
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (as === "a" || href) {
    return (
      <Link href={href} onClick={onClick} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type || "button"} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
