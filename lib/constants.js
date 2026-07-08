export const NAV = [
  { label: "Cloud FinOps Services", href: "/finops-services" },
  { label: "Why moneta", href: "/why-moneta" },
];

export const PROBLEM_ROWS = [
  { t: "Discount programs are hard to track and inconsistently applied", src: "/graphics/icons/ProblemDiscountIcon.png" },
  { t: "Customer pricing is disconnected from actual cloud costs", src: "/graphics/icons/ProblemCustomerIcon.png" },
  { t: "Billing relies on spreadsheets and manual work", src: "/graphics/icons/ProblemBillingIcon.png" },
  { t: "Misapplied discounts and pricing gaps reduce margins", src: "/graphics/icons/ProblemMisappliedIcon.png" },
  { t: "Limited visibility into margin performance by customer", src: "/graphics/icons/ProblemLimitedIcon.png" },
];

export const CUSTOMERS = [
  { name: "Acme Co.",        base: 284392, widthPct: 85, bar: "#22c55e", pct: "+18.2%", pctColor: "#22c55e",  tickRate: 26 },
  { name: "Northvale Labs",  base: 92408,  widthPct: 60, bar: "#22c55e", pct: "+14.0%", pctColor: "#22c55e",  tickRate: 9,  highlight: true },
  { name: "Ridgepoint Inc.", base: 38910,  widthPct: 38, bar: "#eab308", pct: "+6.4%",  pctColor: "#eab308",  tickRate: 4 },
  { name: "Saltcliff Media", base: 24118,  widthPct: 20, bar: "#ef4444", pct: "−2.1%",  pctColor: "#ef4444",  tickRate: 2,  alert: true },
];

export const BASE_STATS = [
  { label: "Revenue",  base: 10500000, prefix: "$", color: "#f1f5f9",                                        tickRate: 47,  display: "$10.5m" },
  { label: "Growth",   base: 238000,   prefix: "$", color: "#22c55e", glow: "rgba(34,197,94,0.25)",          tickRate: 8,   display: "$238k"  },
  { label: "Margin",   base: 1600000,  prefix: "$", color: "#f97316", glow: "rgba(249,115,22,0.25)", pulse: true, tickRate: 1, display: "$1.6m" },
];

export const FAQS = [
  { q: "What is moneta?", a: "moneta is the financial operating system for AWS and Azure cloud resellers. It continuously aligns billing, pricing, cloud discounts, customer agreements, invoicing, and margins from a single financial foundation, helping resellers automate operations, improve margins, and deliver Cloud FinOps to customers." },
  { q: "Who is moneta built for?", a: "moneta is purpose-built for AWS and Azure cloud resellers, managed service providers (MSPs), and organizations managing cloud billing and pricing across multiple customer accounts." },
  { q: "How is moneta different from traditional billing or Cloud FinOps tools?", a: "Most Cloud FinOps platforms help organizations optimize their own cloud spend. moneta is built specifically for cloud resellers, MSPs, and service providers, combining billing, pricing, cloud discounts, invoicing, margin visibility, and Cloud FinOps into a single financial operating system." },
  { q: "Which cloud providers does moneta support?", a: "moneta supports both AWS and Microsoft Azure. The platform is designed to manage the complexity of multi-customer cloud billing, pricing models, and cloud discount programs across both providers." },
  { q: "Can moneta help us deliver Cloud FinOps services?", a: "Yes. moneta provides the financial foundation required to deliver Cloud FinOps as a scalable managed service. By combining billing, pricing, cloud cost, and margin data, resellers can provide customers with ongoing visibility, optimization recommendations, and financial insights." },
  { q: "Will moneta work with our existing billing processes?", a: "Yes. moneta is designed to fit into existing reseller operations while replacing manual reconciliation and disconnected processes with a single, synchronized financial system. During a demo, we'll discuss how it integrates into your current workflow." },
  { q: "How long does implementation typically take?", a: "Implementation depends on your cloud environment, billing processes, and operational requirements. During your demo, we'll review your current environment and outline an implementation approach tailored to your business." },
  { q: "How do I schedule a demo?", a: "Simply click Book a Demo anywhere on the website. We'll learn about your cloud reseller business, answer your questions, and schedule a personalized demonstration of moneta." },
];
