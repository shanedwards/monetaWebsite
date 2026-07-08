import Image from "next/image";

export default function MonetaMark({ size = 28 }) {
  return (
    <Image
      src="/assets/moneta-icon.png"
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block", transform: "translateY(-4px)" }}
      aria-hidden="true"
    />
  );
}
