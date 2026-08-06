<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO: redirect on every page removal or rename

Whenever a page's route is removed or renamed, add a matching entry to `redirects` in `vercel.json`
(source → closest live equivalent, `permanent: true`) in the same change. Do this before merging, not
as a follow-up. Previously ranking pages (`/company`, `/services`, `/platform`, `/partners`, etc.) were
lost to unnoticed 404s because this wasn't done consistently — that mistake is expensive to recover
(lost rankings, lost impressions) and cheap to avoid. If a page is being removed outright rather than
replaced, redirect it to the closest topically-related live page rather than leaving it unredirected.
