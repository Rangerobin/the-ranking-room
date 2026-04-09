import { MetadataRoute } from "next";

const BASE = "https://therankingroom.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Services
    { url: `${BASE}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/google-business-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/citation-building`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/on-page-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/link-building`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/technical-seo-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/review-strategy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    // Locations
    { url: `${BASE}/locations/st-augustine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/jacksonville`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/ponte-vedra`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/palm-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/fleming-island`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/daytona-beach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
