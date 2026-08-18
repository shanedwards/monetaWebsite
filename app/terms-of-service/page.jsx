import SectionShell from "@/components/ui/SectionShell";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service governing your access to and use of monetacloud.com.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: "Terms of Service — moneta",
    description: "Terms of Service governing your access to and use of monetacloud.com.",
    url: `${SITE_URL}/terms-of-service`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — moneta",
    description: "Terms of Service governing your access to and use of monetacloud.com.",
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

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Terms of Service", path: "/terms-of-service" },
            ])
          ),
        }}
      />
      <section className="relative pt-[110px] md:pt-[140px] pb-6 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            Terms of Service
          </h1>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          <P>
            Welcome to moneta. These Terms of Service govern your access to and use of the website located at
            monetacloud.com, operated by Moneta Technology, Inc. By accessing or using the Site, you agree to be
            bound by these Terms. If you do not agree, please do not use the Site. These Terms govern your use of
            this website only and do not govern use of the moneta platform or any services provided under a separate
            agreement.
          </P>

          <H>Use of the Site</H>
          <P>You may use the Site for lawful purposes only. You agree not to:</P>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Use the Site in any way that violates applicable law or regulation</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Attempt to gain unauthorized access to the Site, its systems, or related networks</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Use automated means (bots, scrapers, crawlers) to access or collect data from the Site, except for search engines and other crawlers operating in accordance with our robots.txt</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Interfere with or disrupt the operation of the Site</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Submit false or misleading information through any form on the Site</li>
          </ul>

          <H>Intellectual Property</H>
          <P>
            All content on the Site — including text, graphics, logos, the moneta name and brand, and underlying
            code — is owned by moneta or its licensors and is protected by intellectual property laws. You may not
            copy, reproduce, distribute, or create derivative works from any part of the Site without our prior
            written permission.
          </P>

          <H>Accuracy of Information</H>
          <P>
            moneta strives to keep information on the Site accurate and up to date, but makes no representation or
            warranty as to the accuracy, completeness, or reliability of any content, including product screenshots,
            dashboard mockups, sample data, case studies, statistics, or stated outcomes. Such content is provided
            for illustrative and general informational purposes only, does not represent a guarantee of results, and
            actual product functionality or outcomes may differ. Any sample or mock data shown is not representative
            of a specific customer&apos;s real figures unless stated otherwise. Content on the Site is subject to
            change without notice.
          </P>

          <H>No Professional Advice</H>
          <P>
            Content on the Site, including blog posts, articles, and any statistics or figures relating to billing,
            pricing, or margins, is provided for general informational purposes only and does not constitute
            financial, legal, tax, or other professional advice. You should not rely on Site content as a substitute
            for consultation with a qualified professional before making business decisions.
          </P>

          <H>Feedback</H>
          <P>
            If you send us ideas, suggestions, or feedback about moneta or the Site, you grant us a perpetual,
            irrevocable, worldwide, royalty-free license to use it for any purpose without obligation or compensation
            to you.
          </P>

          <H>Third-Party Links</H>
          <P>
            The Site may contain links to third-party websites. moneta does not control and is not responsible for
            the content, accuracy, or practices of any linked site. Inclusion of a link does not imply endorsement.
          </P>

          <H>Privacy</H>
          <P>
            Your use of the Site is also governed by our{" "}
            <a href="/privacy-policy" className="text-white font-semibold hover:opacity-80 underline">
              Privacy Policy
            </a>
            , which describes how we collect, use, and protect information.
          </P>

          <H>Modifications to the Site</H>
          <P>
            moneta reserves the right to modify, suspend, or discontinue the Site, or any part of it, at any time,
            with or without notice. moneta is not liable to you or any third party for any such modification,
            suspension, or discontinuation.
          </P>

          <H>Termination</H>
          <P>moneta may suspend or terminate your access to the Site at any time, for any reason, without notice.</P>

          <H>Disclaimer of Warranties</H>
          <P>
            The Site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind,
            express or implied, including but not limited to warranties of merchantability, fitness for a particular
            purpose, or non-infringement. moneta does not warrant that the Site will be uninterrupted, error-free, or
            secure. Some jurisdictions do not allow the exclusion of implied warranties, so some of the above
            exclusions may not apply to you.
          </P>

          <H>Limitation of Liability</H>
          <P>
            To the fullest extent permitted by law, moneta shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or related to your use of the Site, even if
            advised of the possibility of such damages. moneta&apos;s total liability for any claim arising from your
            use of the Site shall not exceed one hundred dollars ($100). Some jurisdictions do not allow the
            limitation of liability for certain damages, so some of the above limitations may not apply to you.
          </P>

          <H>Indemnification</H>
          <P>
            You agree to indemnify, defend, and hold harmless moneta, its officers, employees, and agents from any
            claims, damages, liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of
            your use of the Site, your violation of these Terms, or your violation of any law or third-party right.
          </P>

          <H>Children&apos;s Use</H>
          <P>
            The Site is not directed at individuals under the age of thirteen, and we do not knowingly permit use of
            the Site by children under thirteen. If you are under thirteen, do not use the Site.
          </P>

          <H>Governing Law</H>
          <P>
            These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law
            principles. Any dispute arising from these Terms or your use of the Site shall be brought exclusively in
            the state or federal courts located in Delaware, and you consent to the jurisdiction of those courts.
          </P>

          <H>Entire Agreement</H>
          <P>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and moneta
            regarding your use of the Site. These Terms do not create any rights in favor of any third party.
          </P>

          <H>Severability</H>
          <P>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</P>

          <H>Force Majeure</H>
          <P>
            moneta is not liable for any failure or delay in performance resulting from causes beyond its reasonable
            control, including acts of God, natural disaster, war, terrorism, labor disputes, internet or utility
            failures, or third-party service outages.
          </P>

          <H>No Waiver</H>
          <P>moneta&apos;s failure to enforce any provision of these Terms is not a waiver of its right to do so later.</P>

          <H>Assignment</H>
          <P>
            moneta may assign or transfer these Terms, in whole or in part, without restriction. You may not assign
            or transfer these Terms without moneta&apos;s prior written consent.
          </P>

          <H>Changes to These Terms</H>
          <P>
            moneta may update these Terms from time to time. Continued use of the Site after changes take effect
            constitutes your acceptance of the revised Terms.
          </P>

          <H>Copyright Complaints</H>
          <P>
            If you believe content on the Site infringes your copyright, send a written notice to{" "}
            <a href="mailto:info@monetacloud.com" className="text-white font-semibold hover:opacity-80 underline">
              info@monetacloud.com
            </a>{" "}
            including: (a) your physical or electronic signature; (b) identification of the copyrighted work claimed
            to be infringed; (c) identification of the material you believe is infringing and its location on the
            Site; (d) your contact information; (e) a statement that you have a good faith belief the use is not
            authorized by the copyright owner, its agent, or the law; and (f) a statement, made under penalty of
            perjury, that the information in your notice is accurate and that you are the copyright owner or
            authorized to act on the copyright owner&apos;s behalf. moneta will respond to valid notices in
            accordance with the Digital Millennium Copyright Act and will terminate access for repeat infringers
            where appropriate.
          </P>

          <H>Contact</H>
          <P>
            Questions about these Terms can be sent to:{" "}
            <a href="mailto:info@monetacloud.com" className="text-white font-semibold hover:opacity-80 underline">
              info@monetacloud.com
            </a>
          </P>
        </div>
      </SectionShell>
    </>
  );
}
