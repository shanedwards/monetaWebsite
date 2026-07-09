const BASE_URL = "https://monetacloud.com";

// Single source of truth for the site's 5 real, routed pages.
const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/finops-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/finops-for-cloud-resellers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/why-moneta", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
