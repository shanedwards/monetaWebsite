# SEO Files Brief — monetacloud.com

This is a reference document for generating/reviewing `sitemap.xml`, `robots.txt`, and `llms.txt`
for the moneta website. It describes the site as it actually exists today (Next.js 16, App Router)
so an AI assistant can produce accurate files without guessing at site structure.

## Site basics

- **Production domain:** `https://monetacloud.com`
- **Framework:** Next.js 16, App Router, server-rendered (no client-side-only hash routing)
- **Company:** moneta — "the financial operating system for AWS and Azure cloud resellers." Aligns
  billing, pricing, discounts, and margins in one platform for cloud resellers and MSPs.

## The 4 real pages (there are no others)

| URL | Title | Description | Priority | Change frequency |
|---|---|---|---|---|
| `/` | moneta — Cloud Reseller Billing | The financial operating system for AWS and Azure cloud resellers — aligning billing, pricing, discounts, and margins in one platform. | 1.0 | weekly |
| `/finops-services` | Cloud FinOps Services | moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing Cloud FinOps reporting across AWS and Azure. | 0.8 | monthly |
| `/why-moneta` | Why moneta | moneta sits between the reseller's cloud costs and customer revenue, aligning pricing, discounts, and margin so every account stays profitable as the business grows. | 0.8 | monthly |
| `/privacy-policy` | Privacy Policy | How moneta collects, uses, and protects your personal information on monetacloud.com. | 0.3 | yearly |

Do not invent additional routes. These 4 are the entire site. (A `/platform` page and related diagram
components exist in the codebase but are dead code — never routed to, never linked — exclude entirely.
`/finops-for-cloud-resellers` also exists as a buildable route in the codebase but is not linked from
anywhere on the live site — exclude it from SEO files as well.)

## Current `sitemap.xml` (Next.js `app/sitemap.js`, generates this automatically at `/sitemap.xml`)

Already implemented. If regenerating by hand, match this shape:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://monetacloud.com/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://monetacloud.com/finops-services</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://monetacloud.com/why-moneta</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://monetacloud.com/privacy-policy</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

## Current `robots.txt` (Next.js `app/robots.js`, generates this automatically at `/robots.txt`)

Already implemented. Deliberately allows general crawling plus explicit AI-crawler allowlisting,
since AI-answer-engine visibility is a stated business goal for this site (not just classic SEO):

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://monetacloud.com/sitemap.xml
```

If asked to add more AI crawlers, reasonable additions to consider (verify current UA strings before
adding): `Bingbot`, `Applebot`, `Amazonbot`, `Meta-ExternalAgent`, `Bytespider`. Keep the `Sitemap:`
line pointing at the canonical sitemap URL.

## `llms.txt` — does not exist yet, needs to be authored

`llms.txt` is an emerging (not yet universally standardized) convention — a plain-Markdown file at
the site root (`https://monetacloud.com/llms.txt`) intended to give AI/LLM crawlers a concise,
structured summary of the site's purpose and key pages, similar in spirit to `robots.txt` but for
content understanding rather than crawl permissions. Suggested structure and content, grounded in
the actual site:

```markdown
# moneta

> The financial operating system for AWS and Azure cloud resellers — aligning billing, pricing,
> discounts, and margins in one platform.

moneta helps cloud resellers and managed service providers (MSPs) eliminate margin loss caused by
disconnected billing, pricing, and discount systems. It provides a single financial operating layer
that continuously reconciles cloud cost, customer pricing rules, discounts, and margin — instead of
one-off spreadsheet analysis or generic single-tenant FinOps tools.

## Pages

- [Home](https://monetacloud.com/): Overview of moneta's value proposition — eliminating margin loss
  in cloud reseller billing through a unified operating system for billing, pricing, discounts, and
  margin intelligence.
- [Cloud FinOps Services](https://monetacloud.com/finops-services): How moneta helps cloud resellers
  and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing
  Cloud FinOps reporting across AWS and Azure.
- [Why moneta](https://monetacloud.com/why-moneta): Positions moneta between the reseller's cloud
  costs and customer revenue — aligning pricing, discounts, and margin so every account stays
  profitable as the business grows.
- [Privacy Policy](https://monetacloud.com/privacy-policy): How moneta collects, uses, and protects
  personal information collected via the website.

## Company

- Name: moneta
- Website: https://monetacloud.com
- LinkedIn: https://www.linkedin.com/company/monetacloud/
- Built for: AWS and Azure cloud resellers, managed service providers (MSPs), and organizations
  managing cloud billing/pricing across multiple customer accounts.
```

Notes for whoever authors the final version:
- Keep it factual and declarative — AI engines quote clear, plainly-stated claims (this mirrors the
  same principle already applied to on-page copy per the site's SEO approach).
- Do not include marketing fluff, calls-to-action, or anything not independently verifiable from the
  page content it links to.
- Update the FAQ-style claims below only from verified source content (see FAQ section) — don't
  paraphrase into stronger claims than the site itself makes.

## Existing structured data (already implemented, for cross-reference — do not duplicate conflicting facts)

The site already ships JSON-LD structured data that should stay consistent with anything written in
`llms.txt`:
- **Organization** (root layout, every page): name "moneta", url `https://monetacloud.com`, logo
  `https://monetacloud.com/assets/moneta-logo.png`, description "The financial operating system for
  AWS and Azure cloud resellers.", sameAs LinkedIn.
- **WebSite** (root layout, every page): name "moneta", url `https://monetacloud.com`.
- **Service** (on `/finops-services`): describes the FinOps / cloud-reseller-billing service offering.
- **FAQPage** (on `/`, home page): built from the FAQ content below.
- **BreadcrumbList** (on non-home pages).

## FAQ content (source of truth for FAQPage JSON-LD and any llms.txt Q&A section)

Source file: `lib/constants.js`, exported as `FAQS`. Complete list (8 entries) as of this writing —
re-check the file before finalizing anything, since it may have been edited since:

1. **Q: What is moneta?** A: moneta is the financial operating system for AWS and Azure cloud
   resellers. It continuously aligns billing, pricing, cloud discounts, customer agreements,
   invoicing, and margins from a single financial foundation, helping resellers automate operations,
   improve margins, and deliver Cloud FinOps to customers.
2. **Q: Who is moneta built for?** A: moneta is purpose-built for AWS and Azure cloud resellers,
   managed service providers (MSPs), and organizations managing cloud billing and pricing across
   multiple customer accounts.
3. **Q: How is moneta different from traditional billing or Cloud FinOps tools?** A: Most Cloud
   FinOps platforms help organizations optimize their own cloud spend. moneta is built specifically
   for cloud resellers, MSPs, and service providers, combining billing, pricing, cloud discounts,
   invoicing, margin visibility, and Cloud FinOps into a single financial operating system.
4. **Q: Which cloud providers does moneta support?** A: moneta supports both AWS and Microsoft
   Azure. The platform is designed to manage the complexity of multi-customer cloud billing, pricing
   models, and cloud discount programs across both providers.
5. **Q: Can moneta help us deliver Cloud FinOps services?** A: Yes. moneta provides the financial
   foundation required to deliver Cloud FinOps as a scalable managed service. By combining billing,
   pricing, cloud cost, and margin data, resellers can provide customers with ongoing visibility,
   optimization recommendations, and financial insights.
6. **Q: Will moneta work with our existing billing processes?** A: Yes. moneta is designed to fit
   into existing reseller operations while replacing manual reconciliation and disconnected processes
   with a single, synchronized financial system. During a demo, we'll discuss how it integrates into
   your current workflow.
7. **Q: How long does implementation typically take?** A: Implementation depends on your cloud
   environment, billing processes, and operational requirements. During your demo, we'll review your
   current environment and outline an implementation approach tailored to your business.
8. **Q: How do I schedule a demo?** A: Simply click Book a Demo anywhere on the website. We'll learn
   about your cloud reseller business, answer your questions, and schedule a personalized
   demonstration of moneta.

## Things to NOT do

- Do not invent routes/pages beyond the 5 listed.
- Do not reference the old hash-routed URLs (`/#/why-moneta` etc.) as canonical — those are legacy
  and redirect client-side to the clean URLs; sitemap/robots/llms.txt should only ever reference the
  clean URL form.
- Do not change the AI-crawler allowlist philosophy (this site deliberately wants AI-engine
  visibility, unlike sites that block AI crawlers) unless explicitly told to restrict something.
- Do not add a `/platform` entry — it's unrouted dead code, not a live page.
