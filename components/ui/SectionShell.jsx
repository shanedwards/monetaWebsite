export default function SectionShell({ children, className = "", id, dotsRight = false, dotsLeft = false, style }) {
  return (
    <section id={id} className={`relative py-10 md:py-14 ${className}`} style={style}>
      {dotsRight && <div className="dot-corner" />}
      {dotsLeft && <div className="dot-corner-left" />}
      <div className="container-x relative">{children}</div>
    </section>
  );
}
