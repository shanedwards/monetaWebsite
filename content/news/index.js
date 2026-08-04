// Each press release lives in its own file in this folder, exporting a single
// object: { slug, title, date ("YYYY-MM-DD"), summary, body (array of paragraph strings) }.
// Add a new entry below (in date-descending order) when a release file is added.

const RELEASES = [];

export function getAllReleases() {
  return RELEASES;
}

export function getReleaseBySlug(slug) {
  return RELEASES.find((r) => r.slug === slug) ?? null;
}
