// Each press release lives in its own file in this folder, exporting a single
// object: { slug, title, date ("YYYY-MM-DD"), dateline?, dek?, summary, body (array of blocks), sourceUrl? }.
// body blocks: { type: "p", text } | { type: "h3", text } | { type: "ul", items } | { type: "lines", lines }
// | { type: "boilerplate-start" } (everything after this marker renders in a muted closer card,
// e.g. "About [company]" + media contact info).
// Add a new entry below (in date-descending order) when a release file is added.

import monetaAddsMicrosoftCspLicensing from "./moneta-adds-microsoft-csp-licensing";

const RELEASES = [monetaAddsMicrosoftCspLicensing];

export function getAllReleases() {
  return RELEASES;
}

export function getReleaseBySlug(slug) {
  return RELEASES.find((r) => r.slug === slug) ?? null;
}
