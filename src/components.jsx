// Shared UI primitives — Header, Footer, Modal, Button, layout pieces

const NAV = [
  { label: "Cloud FinOps Services", href: "#/finops-services" },
  { label: "Why moneta", href: "#/why-moneta" },
];

function MonetaMark({ size = 28 }) {
  return (
    <img
      src="assets/moneta-icon.png"
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block", transform: "translateY(-4px)" }}
      aria-hidden="true"
    />
  );
}

function Logo({ size = 30 }) {
  return (
    <a href="#/" className="inline-flex items-center group" aria-label="moneta home" style={{ gap: 2 }}>
      <MonetaMark size={size} />
      <span className="font-semibold tracking-tight text-ink-primary"
        style={{ fontSize: Math.round(size * 0.72), lineHeight: 1, display: "inline-block", marginLeft: -2 }}>
        moneta
      </span>
    </a>
  );
}

function Button({ variant = "primary", as = "button", href, children, className = "", onClick, type, ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[14.5px] transition-all duration-150 ease-out select-none";
  const sizes = "px-6 py-3";
  const variants = {
    primary: `btn-solid-blue text-white ${sizes}`,
    gradient: `btn-grad-border text-white ${sizes}`,
    secondary: `bg-transparent border border-line-hover text-ink-primary hover:border-accent-indigo hover:text-white ${sizes}`,
    ghost: `bg-transparent text-ink-secondary hover:text-ink-primary ${sizes}`,
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (as === "a" || href) return <a href={href} onClick={onClick} className={cls} {...rest}>{children}</a>;
  return <button type={type || "button"} onClick={onClick} className={cls} {...rest}>{children}</button>;
}

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow">{children}</p>
      <div className="eyebrow-rule" />
    </div>
  );
}

function ReviewCTA({ onClick, label = "Book a Demo", stack = true, className = "" }) {
  return (
    <button onClick={onClick} className={`btn-grad-border inline-flex items-center gap-4 px-6 py-5 text-left ${className}`}>
      <span className="font-semibold text-white text-[15.5px] leading-[1.35]">{label}</span>
      <span className="shrink-0"><ArrowRight size={20} /></span>
    </button>
  );
}

function SectionShell({ children, className = "", id, dotsRight = false, dotsLeft = false, style }) {
  return (
    <section id={id} className={`relative py-10 md:py-14 ${className}`} style={style}>
      {dotsRight && <div className="dot-corner" />}
      {dotsLeft && <div className="dot-corner-left" />}
      <div className="container-x relative">{children}</div>
    </section>
  );
}

// ----- Header -----
function Header({ onDemoClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = React.useState(window.location.hash || "#/");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onHash = () => { setHash(window.location.hash || "#/"); setOpen(false); };
    window.addEventListener("hashchange", onHash);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("hashchange", onHash); };
  }, []);

  return (
    <header className={"fixed top-0 left-0 right-0 z-40 transition-all duration-200 " + (scrolled ? "bg-bg-primary/80 backdrop-blur-xl border-b border-line-soft" : "bg-transparent border-b border-transparent")}>
      <div className="container-x h-[84px] flex items-center justify-between relative">
        {/* Logo — left */}
        <a href="#/" aria-label="moneta home" className="flex items-center gap-0 shrink-0"><MonetaMark size={36} /><span className="text-[23px] font-semibold tracking-tight text-white" style={{ marginLeft: -3, transform: "translateY(-0.9px)" }}>moneta</span></a>

        {/* Nav — perfectly centered via absolute positioning */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV.map((n) => {
            const active = hash.startsWith(n.href);
            return (
              <a key={n.href} href={n.href}
                className={"relative text-[16px] font-medium transition-colors " + (active ? "text-white" : "text-ink-secondary hover:text-white")}>
                {n.label}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] grad-line rounded-full" />}
              </a>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={onDemoClick}
            className="hidden sm:inline-flex items-center justify-center gap-2 text-white font-semibold text-[16px] hover:opacity-90 px-5 py-2.5 rounded-md"
            style={{ border: "1.5px solid #3B82F6", background: "#060B18" }}>
            Book a Demo <ArrowRight size={15} />
          </button>
          <button className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-line text-ink-secondary"
            onClick={() => setOpen(v => !v)} aria-label="Menu">
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
              <a key={n.href} href={n.href} className="py-3 text-[15px] text-ink-secondary hover:text-white">{n.label}</a>
            ))}
            <Button variant="primary" onClick={() => { setOpen(false); onDemoClick(); }} className="mt-2 w-full">
              Book a Demo <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

// ----- Footer -----
function Footer({ onDemoClick }) {
  return (
    <footer className="bg-bg-secondary border-t border-line-soft">
      <div className="container-x py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="#/" aria-label="moneta home" className="flex items-center gap-0"><MonetaMark size={36} /><span className="text-[23px] font-semibold tracking-tight text-white" style={{ marginLeft: -3, transform: "translateY(0.3px)" }}>moneta</span></a>
            <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-secondary max-w-sm">
              The financial operating system for AWS and Azure resellers
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onDemoClick} className="text-[14px] text-ink-secondary hover:text-white transition-colors">Contact</button>
            <span className="text-[14px] text-ink-secondary select-none">info@monetacloud.com</span>
            <a href="https://www.linkedin.com/company/monetacloud/" target="_blank" rel="noopener noreferrer"
              aria-label="moneta on LinkedIn"
              className="text-ink-secondary hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-line-soft flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-[13px] text-ink-secondary">© 2026 moneta. All rights reserved.</p>
          <a href="#/privacy-policy" className="text-[13px] text-ink-secondary hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

// ----- Demo Modal -----
function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium text-ink-secondary mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function DemoModal({ isOpen, onClose }) {
  const dialogRef = React.useRef(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [sending, setSending] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 50);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  React.useEffect(() => { if (!isOpen) { setSubmitted(false); setErrors({}); setSending(false); } }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = {};
    if (!data.name) next.name = "Required";
    if (!data.email || !/.+@.+\..+/.test(data.email)) next.email = "Valid email required";
    if (!data.company) next.company = "Required";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    window.emailjs.send("service_99yjrrz", "template_8h4r2vj", {
      name:     data.name,
      email:    data.email,
      company:  data.company,
      message:  data.message || "—",
    }).then(() => {
      setSending(false);
      setSubmitted(true);
    }).catch(() => {
      setSending(false);
      setErrors({ submit: "Something went wrong. Please try again." });
    });
  };

  const inputCls = (err) =>
    "w-full h-11 bg-bg-primary border rounded-md px-4 text-[15px] text-white placeholder:text-ink-muted focus:outline-none transition-colors " +
    (err ? "border-red-500 focus:border-red-400" : "border-line focus:border-accent-indigo");

  return (
    <React.Fragment>
      <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-start justify-center px-4 md:px-6" style={{ paddingTop: "clamp(16px, 4vh, 48px)" }} role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onClick={onClose}>
      <div ref={dialogRef} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[520px] card !rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]" style={{ padding: "20px 24px" }}>
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-md hover:bg-bg-tertiary" style={{ color: "#94a3b8" }} onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="#94a3b8"}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 mx-auto rounded-full grad-line grid place-items-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
            </div>
            <h2 className="text-h3 mb-2">Request received</h2>
            <p className="text-[14px] text-ink-secondary max-w-sm mx-auto">Thanks — we'll follow up within one business day to schedule your billing and margin review.</p>
            <Button variant="primary" onClick={onClose} className="mt-5">Close</Button>
          </div>
        ) : (
          <React.Fragment>
            <div className="text-center">
              <Eyebrow className="mb-2 flex flex-col items-center [&_.eyebrow-rule]:mx-auto">Book a Demo</Eyebrow>
            </div>
            <p id="demo-modal-title" className="text-[14px] text-ink-secondary mb-4 leading-[1.55] text-center">
              Have questions about Cloud FinOps or Cloud Reseller Billing? Want to schedule a demo? We'd love to connect.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <FormField label="Name*"><input name="name" className={inputCls(errors.name)} /></FormField>
              <FormField label="Work Email*"><input name="email" type="email" className={inputCls(errors.email)} /></FormField>
              <FormField label="Company*"><input name="company" className={inputCls(errors.company)} /></FormField>
              <FormField label="What would you like to discuss? (Optional)">
                <textarea name="message" rows={4} className="w-full bg-bg-primary border border-line rounded-md px-3 py-2 text-[14px] text-white placeholder:text-ink-muted focus:outline-none focus:border-accent-indigo transition-colors resize-none" />
              </FormField>
              <Button type="submit" variant="primary" className="w-full !py-3 mt-1" disabled={sending}>{sending ? "Sending…" : "Book a Demo"}</Button>
              {errors.submit && <p className="text-[12px] text-red-400 text-center">{errors.submit}</p>}
              <p className="text-[11px] text-ink-muted text-center">By submitting you agree to moneta's privacy policy.</p>
            </form>
          </React.Fragment>
        )}
      </div>
      </div>
    </React.Fragment>
  );
}

// ----- Final CTA -----
function FinalCTA({ eyebrow, title, description, ctaLabel = "Book a Demo", onCta, className = "" }) {
  return (
    <section className={`relative py-10 md:py-14 overflow-hidden ${className}`}>
      <div className="dot-corner" />
      <div className="container-x relative text-center flex flex-col items-center">
          {eyebrow && <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B82F6", fontFamily: "Inter, sans-serif", marginBottom: 16 }}>{eyebrow}</p>}
          <h2 className="text-h1 text-balance max-w-[760px]">{title}</h2>
          {description && <p className="mt-6 text-[19px] leading-[1.6] text-ink-secondary max-w-[560px]">{description}</p>}
          <div className="mt-9">
            <Button variant="primary" onClick={onCta} className="!px-7 !py-4 !text-[15px]">{ctaLabel} <ArrowRight /></Button>
          </div>
      </div>
    </section>
  );
}

// ----- FAQ Section -----
function FaqItem({ q, a, isOpen, onToggle, isLast }) {
  const panelRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const measure = () => {
      if (panelRef.current) setHeight(panelRef.current.scrollHeight + 2);
    };
    measure();
    // Re-measure once web fonts finish loading — otherwise the height is
    // captured at the fallback font size and clips the reflowed text.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [a, isOpen]);

  const activeTextStyle = isOpen
    ? { background: "linear-gradient(92deg, #3B82F6 0%, #5B7BFF 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
    : { color: "#cbd5e1" };

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-4 px-3 -mx-3 rounded-lg text-left group transition-colors duration-200"
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
      >
        <span className="flex items-center gap-2 min-w-0">
          {/* active spine — sits just left of the label */}
          <span aria-hidden="true" className="shrink-0 rounded-full"
            style={{
              width: 4,
              height: isOpen ? 20 : 0,
              marginTop: -3,
              background: "linear-gradient(180deg, #3B82F6 0%, #5B7BFF 100%)",
              opacity: isOpen ? 1 : 0,
              boxShadow: isOpen ? "0 0 10px rgba(91,123,255,0.6)" : "none",
              transition: "height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            }} />
          <span className="font-sans text-[16px] md:text-[17px] font-medium leading-[1.4] transition-colors duration-200"
            style={activeTextStyle}>{q}</span>
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full grid place-items-center border transition-colors duration-200"
          style={{ borderColor: isOpen ? "rgba(91,123,255,0.6)" : "rgba(255,255,255,0.15)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
            className="text-ink-secondary group-hover:text-white"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s ease" }}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
        }}
      >
        <p ref={panelRef} className="pt-1 pb-6 pr-10 font-sans text-[15px] leading-[1.7] text-ink-secondary">{a}</p>
      </div>
    </div>
  );
}

function FaqSection({ onDemoClick }) {
  const faqs = [
    { q: "What is moneta?", a: "moneta is the financial operating system for AWS and Azure cloud resellers. It continuously aligns billing, pricing, cloud discounts, customer agreements, invoicing, and margins from a single financial foundation, helping resellers automate operations, improve margins, and deliver Cloud FinOps to customers." },
    { q: "Who is moneta built for?", a: "moneta is purpose-built for AWS and Azure cloud resellers, managed service providers (MSPs), and organizations managing cloud billing and pricing across multiple customer accounts." },
    { q: "How is moneta different from traditional billing or Cloud FinOps tools?", a: "Most Cloud FinOps platforms help organizations optimize their own cloud spend. moneta is built specifically for cloud resellers, MSPs, and service providers, combining billing, pricing, cloud discounts, invoicing, margin visibility, and Cloud FinOps into a single financial operating system." },
    { q: "Which cloud providers does moneta support?", a: "moneta supports both AWS and Microsoft Azure. The platform is designed to manage the complexity of multi-customer cloud billing, pricing models, and cloud discount programs across both providers." },
    { q: "Can moneta help us deliver Cloud FinOps services?", a: "Yes. moneta provides the financial foundation required to deliver Cloud FinOps as a scalable managed service. By combining billing, pricing, cloud cost, and margin data, resellers can provide customers with ongoing visibility, optimization recommendations, and financial insights." },
    { q: "Will moneta work with our existing billing processes?", a: "Yes. moneta is designed to fit into existing reseller operations while replacing manual reconciliation and disconnected processes with a single, synchronized financial system. During a demo, we'll discuss how it integrates into your current workflow." },
    { q: "How long does implementation typically take?", a: "Implementation depends on your cloud environment, billing processes, and operational requirements. During your demo, we'll review your current environment and outline an implementation approach tailored to your business." },
    { q: "How do I schedule a demo?", a: "Simply click Book a Demo anywhere on the website. We'll learn about your cloud reseller business, answer your questions, and schedule a personalized demonstration of moneta." },
  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section className="relative py-14 md:py-16 overflow-hidden"
      style={{
        background: "radial-gradient(120% 90% at 75% 0%, rgba(91,123,255,0.12) 0%, rgba(59,130,246,0.05) 32%, rgba(15,32,64,0) 62%), #0F2040",
      }}>
      {/* grain / noise overlay — kills gradient banding, adds tactile richness */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.035,
        mixBlendMode: "overlay",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />
      {/* top hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(91,123,255,0.55) 50%, transparent 100%)" }} />
      {/* bottom hairline accent (softer) */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(91,123,255,0.25) 50%, transparent 100%)" }} />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 self-start">
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="text-h2 text-balance">Common Questions</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-ink-secondary max-w-[320px]">
              Everything you need to know about running cloud reseller finance on moneta.
            </p>
            {onDemoClick && (
              <button onClick={onDemoClick}
                className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-white group">
                <span className="grad-text-bp">Still have questions? Book a demo</span>
                <ArrowRight size={15} className="text-accent-indigo transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-[20px] px-6 md:px-8 py-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 24px 60px -24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}>
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} isLast={i === faqs.length - 1} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  MonetaMark, Logo, Button, ArrowRight, Eyebrow, ReviewCTA, SectionShell,
  Header, Footer, DemoModal, FinalCTA, FaqSection,
});
