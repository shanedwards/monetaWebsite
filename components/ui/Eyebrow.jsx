export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow">{children}</p>
      <div className="eyebrow-rule" />
    </div>
  );
}
