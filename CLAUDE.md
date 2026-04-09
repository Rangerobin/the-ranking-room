# CLAUDE.md

This file provides guidance to Claude Code when working on The Ranking Room website project.

## Project

The Ranking Room is a local SEO agency founded by [Owner Name], based in St. Augustine, Florida.

**Primary goal:** Build a fast, high-converting website that ranks in St. Augustine locally AND nationally for local SEO agency terms. This site is the agency's own proof of concept — if we can rank our own site, we prove to clients we can rank theirs.

**Current status:** Existing landing page only. Building a full multi-page website from scratch.

---

## Business Details

- **Business name:** The Ranking Room
- **Location:** St. Augustine, Florida
- **Phone:** [ADD PHONE]
- **Email:** [ADD EMAIL]
- **Address:** [ADD FULL ADDRESS]
- **Google Business Profile URL:** [ADD GBP URL]

---

## Services

- Local SEO
- Google Business Profile (GBP) optimization
- Citation building & NAP cleanup
- On-page SEO
- Technical SEO audits
- Link building
- Keyword research & strategy
- Local landing page creation
- Reputation management / Google review strategy

---

## Target Markets

### Primary (Local)
- St. Augustine, FL
- St. Johns County, FL
- Ponte Vedra Beach, FL
- Fleming Island, FL
- Palm Coast, FL
- Jacksonville, FL
- Daytona Beach, FL

### Secondary (National)
- Targeting national keywords like "local SEO agency", "local SEO services", "hire local SEO expert"
- National audience = small business owners, brick-and-mortar shops, contractors, service businesses across the US

---

## Target Keywords

### Local (St. Augustine)
- local SEO agency St. Augustine
- SEO company St. Augustine FL
- Google Maps optimization St. Augustine
- digital marketing St. Augustine
- SEO services St. Johns County

### National
- local SEO agency
- local SEO services for small business
- Google Business Profile optimization service
- hire local SEO expert
- best local SEO company USA
- affordable local SEO agency

### Problem-aware / Buying intent
- my business isn't showing up on Google
- how to rank higher on Google Maps
- why am I not ranking locally
- get more calls from Google

---

## Competitors

### St. Augustine Local Competitors (priority targets to outrank)

1. **Create Web Studios** — 60 Ocean Blvd Suite 6, Atlantic Beach, FL · (904) 383-7530 · Est. 2005 · 40+ Google reviews
   - Website: https://createwebstudios.com
   - Title tag: "Jacksonville Digital Marketing Agency - Create Studios"
   - H1: "Jacksonville Digital Marketing Agency"
   - Targeting: Jacksonville (not St. Augustine) — opportunity to own St. Augustine
   - Services: Web design, paid ads, SEO, email marketing, social media, video, branding
   - Strengths: Google Partner badge, 40+ reviews, team photos, real case study metrics
   - **Weaknesses (exploit these):**
     - No dedicated St. Augustine SEO page — they're targeting Jacksonville
     - Thin service page content — no deep explanations
     - No blog or topical authority content
     - No FAQ sections
     - No pricing transparency
     - Generic opening copy ("friendly, knowledgeable")
     - No location pages beyond Jacksonville

2. **Agile Internet Marketing** — 150 Kent Rd Suite 2B, St. Augustine · (904) 701-3886 · Est. 2003 · 10 reviews
   - Website: https://www.agileinternetmarketing.com
   - Title tag: "SEO St Augustine | Industrial SEO | Agile Internet Marketing"
   - H1: "Let us get you on the 1st page of Google"
   - Targeting: St. Augustine + Industrial/Manufacturing SEO niche
   - Services: SEO, Local SEO, Industrial SEO, Web Design, Google Ads, Analytics, Call Tracking
   - **Weaknesses (exploit these):**
     - Vague claims ("proven track record") — no real metrics or case studies visible
     - Testimonials referenced but not shown on homepage
     - Only 10 Google reviews despite 20+ years
     - Service descriptions are 2–3 sentences — very thin
     - No quantified results or client logos
     - Industrial niche focus means they're not fully owning local SMB SEO

3. **Meerkat Media Group** — 24 Cathedral Pl Suite 312, St. Augustine · 7+ years · 25 reviews · 5.0 stars
   - Website: [ADD URL]

4. **Local Magic** — St. Augustine
   - Website: [ADD URL]

### Competitive Positioning for The Ranking Room
- **Create Studios** is targeting Jacksonville, not St. Augustine — we own St. Augustine
- **Agile** has the domain name advantage ("SEO St Augustine") but zero proof of results
- **Our edge:** Modern design, deep content, real results, fast site, and we're the only one clearly built with AI — position as "the agency built for the AI era"
- **Content gap across all competitors:** No blog, no FAQ depth, no location page network, no case studies with real numbers
- **Review gap:** Agile has only 10 reviews in 20 years — we can overtake them fast
- Goal: Outrank all competitors in St. Augustine local pack and organic results within 90 days

---

## Website Architecture

### Pages to build
1. Homepage
2. Service pages (one per service listed above)
3. Location pages — St. Augustine + each target city
4. National landing page ("Local SEO Services for Small Businesses Across the US")
5. About page
6. Case studies / results page
7. Blog (for topical authority)
8. Contact page

### SEO priorities per page
- Unique title tag with primary keyword + location
- Meta description with CTA
- H1 with keyword
- LocalBusiness or Service schema markup
- FAQPage schema on service + location pages
- Internal links to related services and locations
- Fast load time (target 90+ PageSpeed score)

---

## Design System

### Colors
- **Background:** #ffffff (white) and #f8f9fa (light gray for alternating sections)
- **Primary Accent:** #00c853 (bright green — CTAs, highlights, icons)
- **Dark Sections:** #1a1a1a (nav, footer, occasional hero accents)
- **Body Text:** #1a1a1a
- **Secondary Text:** #6b7280
- **Borders:** #e5e7eb
- **Hover Green:** #00a846

### Typography
- **Primary Font:** Inter (headings + body)
- **Secondary Font:** Space Grotesk (accent/tagline use)
- **Heading sizes:** 52px (hero H1), 36px (section H2), 24px (card H3)
- **Body:** 16px, line-height 1.6

### Layout
- Light & premium feel — white/light background throughout (NOT dark like landing page)
- Max content width: 1200px, centered
- Section padding: 80px vertical
- Card border-radius: 12px
- Card shadow: 0 2px 12px rgba(0,0,0,0.08)

### CTA Style
- Primary button: bg #00c853, white text, border-radius 8px, padding 14px 28px, font-weight 600
- Hover: bg #00a846 + translateY(-2px) shadow lift
- All primary CTAs open Calendly: https://calendly.com/robinsonrange3/free-ranking-audit
- Primary CTA text: "Book Your Free Ranking Audit →"

### Logo
- File: [USER TO PROVIDE]

---

## Tech Stack

- Framework: Next.js (App Router, TypeScript, Tailwind CSS)
- Hosting: Vercel
- Version control: GitHub (https://github.com/Rangerobin/the-ranking-room)
- Deployment: Auto-deploy via GitHub → Vercel on every push to main

---

## SEO Configuration Files (must exist)

- `robots.txt` — allow all crawlers, point to sitemap
- `sitemap.xml` — include all pages, auto-generated
- `llm.txt` — allow AI crawlers (ChatGPT, Perplexity, Claude) to index the site
- Schema markup — LocalBusiness, Service, FAQPage, BreadcrumbList

---

## Brand Voice

- Confident, no-nonsense, results-focused
- Speaks to small business owners who are frustrated with not being found online
- Avoids jargon — explains SEO in plain English
- Social proof-driven — lean on results, rankings, and calls generated

---

## Commands

```bash
# Install dependencies
npm install

# Run local dev server
npm run dev

# Build for production
npm run build

# Deploy (auto via Vercel on git push)
git push origin main
```

---

## Architecture Notes

- Every location page must include: local landmarks, local industry context, FAQs, and a phone/contact CTA above the fold
- NAP (Name, Address, Phone) must be identical across every page and the Google Business Profile
- All images must be WebP format, compressed, with descriptive alt text
- Internal links: every service page links to relevant location pages and vice versa
- No page should be more than 3 clicks from the homepage
