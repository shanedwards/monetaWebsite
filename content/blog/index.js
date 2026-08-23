// Each blog post lives in its own file in this folder, exporting a single
// object: { slug, title, date ("YYYY-MM-DD"), dek?, summary, body (array of blocks) }.
// body blocks: { type: "p", text } | { type: "h3", text } | { type: "ul", items } | { type: "lines", lines }
// Add a new entry below (in date-descending order) when a post file is added.

const POSTS = [];

export function getAllPosts() {
  return POSTS;
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
