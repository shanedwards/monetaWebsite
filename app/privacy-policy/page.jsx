import SectionShell from "@/components/ui/SectionShell";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

const LAST_UPDATED = "August 13, 2026";

export const metadata = {
  title: "Privacy Policy",
  description: "What moneta collects through monetacloud.com, why, and how to request deletion.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy — moneta",
    description: "What moneta collects through monetacloud.com, why, and how to request deletion.",
    url: `${SITE_URL}/privacy-policy`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — moneta",
    description: "What moneta collects through monetacloud.com, why, and how to request deletion.",
  },
};

function H({ children }) {
  return (
    <h2 className="text-[22px] md:text-[24px] font-normal text-white mt-10 mb-3 first:mt-0" style={{ letterSpacing: "-0.01em" }}>
      {children}
    </h2>
  );
}

function P({ children }) {
  return <p className="text-[15.5px] leading-[1.75] text-ink-secondary mb-4">{children}</p>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ])
          ),
        }}
      />
      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] text-ink-secondary">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          <P>
            Protecting your privacy is a priority for moneta. This Privacy Policy governs how we collect, use, and
            protect information. References to &quot;moneta,&quot; &quot;we,&quot; and &quot;us&quot; throughout this policy refer to
            monetacloud.com and moneta. By using the moneta website or platform, you consent to the data practices
            described in this policy.
          </P>

          <H>Collection of Your Personal Information</H>
          <P>We do not collect personal information about you unless you voluntarily provide it. You may be asked to provide personal information when you:</P>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Request a demo or submit an inquiry through our contact form</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Send us an email message</li>
          </ul>
          <P>We use this information to communicate with you about the services and information you&apos;ve requested from moneta.</P>

          <H>Sharing Information with Third Parties</H>
          <P>moneta does not sell, rent, or lease your personal information to third parties.</P>
          <P>
            moneta may share information with trusted service providers who help us operate our website and deliver
            email communications. These providers are prohibited from using your personal information for any purpose
            other than providing services to moneta, and are required to maintain its confidentiality.
          </P>
          <P>
            moneta may disclose your personal information, without notice, if required to do so by law or in the
            good-faith belief that such action is necessary to: (a) comply with legal process served on moneta; (b)
            protect and defend the rights or property of moneta; or (c) act under exigent circumstances to protect
            the personal safety of users of moneta or the public.
          </P>

          <H>Automatically Collected Information</H>
          <P>
            When you visit moneta, we may automatically collect technical information such as your IP address,
            browser type, domain name, access times, and referring website address. This information is used to
            operate and maintain moneta and to compile general usage statistics.
          </P>

          <H>Use of Cookies</H>
          <P>
            moneta may use cookies to support core functionality on the website. A cookie is a small text file
            placed on your device by a web server; it cannot run programs or transmit viruses. You can accept or
            decline cookies through your browser settings — declining cookies may limit some interactive features
            of moneta.
          </P>

          <H>Links</H>
          <P>
            moneta&apos;s website may contain links to other websites. moneta is not responsible for the content or
            privacy practices of those sites. We encourage you to review the privacy policy of any site that
            collects personal information before providing it.
          </P>

          <H>Security of Your Personal Information</H>
          <P>
            moneta takes reasonable technical and organizational measures to protect your personal information from
            unauthorized access, use, or disclosure, including the use of encrypted (SSL/TLS) connections. No method
            of transmission over the internet is 100% secure, and we cannot guarantee absolute security of
            information exchanged through moneta.
          </P>

          <H>Right to Deletion</H>
          <P>Subject to the exceptions below, upon receipt of a verifiable request, moneta will delete your personal information from our records and direct any service providers to do the same.</P>
          <P>We may not be able to honor a deletion request where retention of the information is necessary to:</P>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Complete a transaction or provide a good or service you requested</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Detect security incidents or protect against fraudulent, deceptive, or illegal activity</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Debug and repair errors that impair existing functionality</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Exercise free speech or another right provided by law</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with the California Electronic Communications Privacy Act</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Conduct public or peer-reviewed research in the public interest, where deletion would seriously impair that research and informed consent has been obtained</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Enable solely internal uses reasonably aligned with your expectations based on your relationship with us</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with an existing legal obligation</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Otherwise use the information internally, in a lawful manner compatible with the context in which it was provided</li>
          </ul>

          <H>Children Under Thirteen</H>
          <P>
            moneta does not knowingly collect personal information from children under the age of thirteen. If you
            are under thirteen, please ask a parent or guardian for permission before using moneta.
          </P>

          <H>Email Communications</H>
          <P>
            If you provide your email address, moneta may contact you regarding your inquiry, product updates, or
            other communications about moneta. You may opt out of marketing or promotional emails at any time using
            the unsubscribe link included in those messages.
          </P>

          <H>External Data Storage</H>
          <P>We may store your data on servers provided by third-party hosting vendors with whom we have contracted.</P>

          <H>Changes to This Policy</H>
          <P>
            moneta may update this Privacy Policy from time to time. We will note material changes by posting a
            notice on the website where appropriate. Continued use of moneta after changes take effect constitutes
            acceptance of the updated policy.
          </P>

          <H>Contact Information</H>
          <P>
            moneta welcomes your questions or comments about this Privacy Policy. If you believe moneta has not
            adhered to this policy, please contact us at:{" "}
            <a href="mailto:info@monetacloud.com" className="text-white font-semibold hover:opacity-80 underline">
              info@monetacloud.com
            </a>
          </P>
        </div>
      </SectionShell>
    </>
  );
}
