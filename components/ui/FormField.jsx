export default function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium text-ink-secondary mb-1.5">{label}</span>
      {children}
    </label>
  );
}
