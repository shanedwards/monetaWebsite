import { getAllReleases } from "@/content/news";
import { getAllPosts } from "@/content/blog";

const BASE_URL = "https://www.monetacloud.com";

// Single source of truth for the site's real, routed pages.
const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/finops-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/why-moneta", changeFrequency: "monthly", priority: 0.8 },
  { path: "/news", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const releaseEntries = getAllReleases().map((r) => ({
    url: `${BASE_URL}/news/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const postEntries = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...releaseEntries, ...postEntries];
}
