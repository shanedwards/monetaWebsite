import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoModalProvider } from "@/components/DemoModalProvider";
import { SITE_URL, SITE_NAME, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "moneta — Cloud Reseller Billing",
    template: "%s — moneta",
  },
  description:
    "moneta is the financial operating system for AWS and Azure cloud resellers.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    title: "moneta — Cloud Reseller Billing",
    description:
      "moneta is the financial operating system for AWS and Azure cloud resellers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "moneta — Cloud Reseller Billing",
    description:
      "moneta is the financial operating system for AWS and Azure cloud resellers.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif4.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <DemoModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DemoModalProvider>
      </body>
    </html>
  );
}
