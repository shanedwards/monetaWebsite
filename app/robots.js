const BASE_URL = "https://monetacloud.com";

// AI answer-engine + search crawlers this site deliberately welcomes.
// Explicit allowlisting (redundant under "*") signals intent to each engine.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training crawler
  "ChatGPT-User", // OpenAI live fetch (user-initiated)
  "OAI-SearchBot", // OpenAI SearchGPT indexing
  "ClaudeBot", // Anthropic training crawler
  "Claude-Web", // Anthropic live fetch
  "PerplexityBot", // Perplexity indexing
  "Perplexity-User", // Perplexity live fetch
  "Google-Extended", // Google Gemini / Vertex AI training
  "Googlebot", // Google Search
  "Bingbot", // Microsoft Bing / Copilot
  "Applebot", // Apple Search / Siri
  "Applebot-Extended", // Apple AI training
  "Amazonbot", // Amazon / Alexa
  "Meta-ExternalAgent", // Meta AI
  "CCBot", // Common Crawl
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
