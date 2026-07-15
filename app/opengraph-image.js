import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "moneta — Cloud Reseller Billing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/assets/moneta-logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060B18",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(91,123,255,0.35) 0%, rgba(6,11,24,0) 45%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.30) 0%, rgba(6,11,24,0) 45%)",
          position: "relative",
        }}
      >
        <img src={logoSrc} width={560} height={134} style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 40,
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            fontFamily: "sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Cloud Reseller Billing
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: "#94A3B8",
            fontFamily: "sans-serif",
          }}
        >
          The financial operating system for AWS and Azure cloud resellers
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 8,
            backgroundImage: "linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
