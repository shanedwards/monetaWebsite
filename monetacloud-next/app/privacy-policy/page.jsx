import SectionShell from "@/components/ui/SectionShell";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy",
  description: "How moneta collects, uses, and protects your personal information on monetacloud.com.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy — moneta",
    description: "How moneta collects, uses, and protects your personal information on monetacloud.com.",
    url: `${SITE_URL}/privacy-policy`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — moneta",
    description: "How moneta collects, uses, and protects your personal information on monetacloud.com.",
  },
};

function H({ children }) {
  return (
    <h2 className="text-[22px] md:text-[24px] font-semibold text-white mt-10 mb-3 first:mt-0" style={{ letterSpacing: "-0.01em" }}>
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
          <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <SectionShell className="border-t border-line-soft !pt-8">
        <div>
          <P>
            Protecting your private information is our priority. This Statement of Privacy applies to www.monetacloud.com,
            and Moneta and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise
            noted, all references to Moneta include www.monetacloud.com and Moneta. The Moneta website is a news and
            information site. By using the Moneta website, you consent to the data practices described in this statement.
          </P>

          <H>Collection of your Personal Information</H>
          <P>
            We do not collect any personal information about you unless you voluntarily provide it to us. However, you may
            be required to provide certain personal information to us when you elect to use certain products or services.
            These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one
            of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email
            message; (e) submitting your credit card or other payment information when ordering and purchasing products and
            services. To wit, we will use your information for, but not limited to, communicating with you in relation to
            services and/or products you have requested from us. We also may gather additional personal or non-personal
            information in the future.
          </P>

          <H>Sharing Information with Third Parties</H>
          <P>Moneta does not sell, rent or lease its customer lists to third parties.</P>
          <P>
            Moneta may, from time to time, contact you on behalf of external business partners about a particular offering
            that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name,
            address, telephone number) is not transferred to the third party. Moneta may share data with trusted partners to
            help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for
            deliveries. All such third parties are prohibited from using your personal information except to provide these
            services to Moneta, and they are required to maintain the confidentiality of your information.
          </P>
          <P>
            Moneta may disclose your personal information, without notice, if required to do so by law or in the good faith
            belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served
            on Moneta or the site; (b) protect and defend the rights or property of Moneta; and/or (c) act under exigent
            circumstances to protect the personal safety of users of Moneta, or the public.
          </P>

          <H>Tracking User Behavior</H>
          <P>
            Moneta may keep track of the websites and pages our users visit within Moneta, in order to determine what Moneta
            services are the most popular. This data is used to deliver customized content and advertising within Moneta to
            customers whose behavior indicates that they are interested in a particular subject area.
          </P>

          <H>Automatically Collected Information</H>
          <P>
            Information about your computer hardware and software may be automatically collected by Moneta. This information
            can include: your IP address, browser type, domain names, access times and referring website addresses. This
            information is used for the operation of the service, to maintain quality of the service, and to provide general
            statistics regarding use of the Moneta website.
          </P>

          <H>Use of Cookies</H>
          <P>
            The Moneta website may use &quot;cookies&quot; to help you personalize your online experience. A cookie is a text file that
            is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to
            your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that
            issued the cookie to you.
          </P>
          <P>
            One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a
            cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Moneta
            pages, or register with Moneta site or services, a cookie helps Moneta to recall your specific information on
            subsequent visits. This simplifies the process of recording your personal information, such as billing addresses,
            shipping addresses, and so on. When you return to the same Moneta website, the information you previously provided
            can be retrieved, so you can easily use the Moneta features that you customized.
          </P>
          <P>
            You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can
            usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may
            not be able to fully experience the interactive features of the Moneta services or websites you visit.
          </P>

          <H>Links</H>
          <P>
            This website contains links to other sites. Please be aware that we are not responsible for the content or privacy
            practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy
            statements of any other site that collects personally identifiable information.
          </P>

          <H>Security of your Personal Information</H>
          <P>
            Moneta secures your personal information from unauthorized access, use, or disclosure. Moneta uses the following
            methods for this purpose:
          </P>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">SSL Protocol</li>
          </ul>
          <P>
            When personal information (such as a credit card number) is transmitted to other websites, it is protected through
            the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
          </P>
          <P>
            We strive to take appropriate security measures to protect against unauthorized access to or alteration of your
            personal information. Unfortunately, no data transmission over the Internet or any wireless network can be
            guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge
            that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and
            (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this
            Site cannot be guaranteed.
          </P>

          <H>Right to Deletion</H>
          <P>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</P>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Delete your personal information from our records; and</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Direct any service providers to delete your personal information from their records.</li>
          </ul>
          <P>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</P>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Debug to identify and repair errors that impair existing intended functionality;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with the California Electronic Communications Privacy Act;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Comply with an existing legal obligation; or</li>
            <li className="text-[15.5px] leading-[1.75] text-ink-secondary">Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
          </ul>

          <H>Children Under Thirteen</H>
          <P>
            Moneta does not knowingly collect personally identifiable information from children under the age of thirteen. If
            you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
          </P>

          <H>E-mail Communications</H>
          <P>
            From time to time, Moneta may contact you via email for the purpose of providing announcements, promotional offers,
            alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may
            receive a notification when you open an email from Moneta or click on a link therein.
          </P>
          <P>
            If you would like to stop receiving marketing or promotional communications via email from Moneta, you may opt out
            of such communications by clicking on the UNSUBSCRIBE or MANAGE PREFERENCES links.
          </P>

          <H>External Data Storage Sites</H>
          <P>We may store your data on servers provided by third-party hosting vendors with whom we have contracted.</P>

          <H>Changes to this Statement</H>
          <P>
            Moneta reserves the right to change this Privacy Policy from time to time. We will notify you about significant
            changes in the way we treat personal information by sending a notice to the primary email address specified in your
            account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued
            use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of
            the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
          </P>

          <H>Contact Information</H>
          <P>
            Moneta welcomes your questions or comments regarding this Statement of Privacy. If you believe that Moneta has not
            adhered to this Statement, please contact Moneta at:{" "}
            <a href="mailto:info@monetacloud.com" className="text-white font-semibold hover:opacity-80 underline">
              info@monetacloud.com
            </a>
          </P>
        </div>
      </SectionShell>
    </>
  );
}
