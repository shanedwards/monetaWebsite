import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/finops-services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/finops-for-cloud-resellers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/why-moneta`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
