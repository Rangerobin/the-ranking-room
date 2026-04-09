import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency in St. Augustine, FL | The Ranking Room",
  description:
    "The Ranking Room is a local SEO agency in St. Augustine, FL. We get your business to the top of Google Maps and Google Search. Book a free ranking audit today.",
  alternates: { canonical: "https://therankingroom.org" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const services = [
  {
    icon: "📍",
    title: "Google Business Profile Optimization",
    description:
      "We optimize every inch of your GBP — categories, photos, posts, Q&A, and reviews — so Google puts you in the top 3 Map results.",
    href: "/services/google-business-profile",
  },
  {
    icon: "🔍",
    title: "Local SEO",
    description:
      "From keyword strategy to on-page optimization, we build the foundation that gets your website ranking for high-intent local searches.",
    href: "/services/local-seo",
  },
  {
    icon: "📋",
    title: "Citation Building",
    description:
      "We get your business listed consistently across 50+ directories. Consistent NAP signals = Google trusts you more = higher rankings.",
    href: "/services/citation-building",
  },
  {
    icon: "⚙️",
    title: "Technical SEO Audit",
    description:
      "We find every technical issue killing your rankings — slow load times, missing schema, broken links — and fix them fast.",
    href: "/services/technical-seo-audit",
  },
  {
    icon: "🔗",
    title: "Link Building",
    description:
      "Local backlinks from trusted sites signal authority to Google. We build real, relevant links that move the needle.",
    href: "/services/link-building",
  },
  {
    icon: "⭐",
    title: "Review Strategy",
    description:
      "More 5-star reviews = more trust = more calls. We set up systems that consistently bring in new Google reviews on autopilot.",
    href: "/services/review-strategy",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Free Audit",
    description:
      "We do a deep dive into your current Google presence — GBP, rankings, competitors, and technical issues. You'll see exactly where you stand and what's holding you back.",
  },
  {
    number: "02",
    title: "We Build Your Ranking Plan",
    description:
      "Based on the audit, we map out a custom strategy targeting the exact keywords your customers are searching for in your city.",
  },
  {
    number: "03",
    title: "You Start Getting Calls",
    description:
      "We execute the plan. Your rankings climb. Your phone rings. Most clients see movement within the first 2–4 weeks.",
  },
];

const comparisons = [
  { them: "Generic strategies that don't account for your local market", us: "Custom strategy built around your city, your industry, your competitors" },
  { them: "Vague reports with no clear results", us: "Clear ranking reports — you always know exactly where you stand" },
  { them: "12-month lock-in contracts", us: "No long-term contracts. You stay because it works." },
  { them: "Slow to start — weeks of onboarding", us: "Ranking movement in the first 14 days" },
  { them: "You pay upfront, results come later (maybe)", us: "Results first. You see movement before we ask for commitment." },
];

const faqs = [
  {
    q: "How long does local SEO take to work?",
    a: "Most clients see ranking movement within 2–4 weeks. Full results — consistent top-3 positions — typically take 60–90 days depending on competition in your market.",
  },
  {
    q: "Do I need a website to work with you?",
    a: "No. We can start with just your Google Business Profile. A website helps long-term, but we can drive calls from Google Maps alone while you get one built.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Any local service business — contractors, restaurants, dentists, plumbers, law firms, real estate agents, auto shops, and more. If customers search Google to find you, we can help.",
  },
  {
    q: "What's the difference between local SEO and regular SEO?",
    a: "Regular SEO targets broad national audiences. Local SEO is specifically about ranking in your city — especially in Google Maps and the '3-pack' that shows up at the top of search results. That's where local customers click.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on your market, competition, and goals. Book a free audit call and we'll give you a straight answer. No vague pricing, no bait and switch.",
  },
];

const locations = [
  "St. Augustine", "Jacksonville", "Ponte Vedra Beach",
  "Palm Coast", "Fleming Island", "Daytona Beach",
  "St. Johns County", "Orlando",
];

// LocalBusiness schema
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Ranking Room",
  description:
    "Local SEO agency in St. Augustine, FL helping small businesses rank higher on Google Maps and Google Search.",
  url: "https://therankingroom.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. Augustine",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: ["St. Augustine", "Jacksonville", "Ponte Vedra", "Palm Coast", "Florida", "United States"],
  serviceType: ["Local SEO", "Google Business Profile Optimization", "Citation Building", "Link Building"],
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section className="pt-20 pb-24 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}
            >
              St. Augustine, FL · Local SEO Agency
            </p>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ color: "#1a1a1a" }}
            >
              Your Competitors Are on{" "}
              <span style={{ color: "#00c853" }}>Google Maps</span>{" "}
              Right Now. Are You?
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
              The Ranking Room gets local businesses to the top of Google Search and Google Maps — so customers find you first, not your competition. Based in St. Augustine, FL. Serving businesses nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg"
              >
                Book Your Free Ranking Audit →
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg border-2 transition-all"
                style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
              >
                See Our Services
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              ✓ No credit card required &nbsp; ✓ Free audit call &nbsp; ✓ Results in 14 days
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-8 border-y border-gray-100" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-500">
            {[
              "✓ Google Verified",
              "✓ No Long-Term Contracts",
              "✓ 100% Satisfaction Guarantee",
              "✓ Results in 14 Days",
              "✓ Free Audit — No Credit Card",
            ].map(item => (
              <span key={item} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            What We Do
          </p>
          <h2 className="text-4xl font-black mb-4" style={{ color: "#1a1a1a" }}>
            Everything You Need to Dominate Local Search
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            We handle every piece of the local SEO puzzle — so you can focus on running your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link
                key={s.href}
                href={s.href}
                className="block p-8 rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg hover:-translate-y-1 no-underline"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            The Process
          </p>
          <h2 className="text-4xl font-black mb-12" style={{ color: "#1a1a1a" }}>
            Here&apos;s Exactly What Happens When You Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(step => (
              <div key={step.number} className="bg-white p-8 rounded-xl border border-gray-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div
                  className="text-4xl font-black mb-4"
                  style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Start With a Free Audit →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            Why Us
          </p>
          <h2 className="text-4xl font-black mb-12" style={{ color: "#1a1a1a" }}>
            The Way SEO Has Always Worked vs. The Way We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-6 border border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-400 mb-4 uppercase text-sm tracking-widest">Other Agencies</h3>
              <ul className="space-y-4">
                {comparisons.map(c => (
                  <li key={c.them} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-0.5">✗</span>
                    <span className="text-gray-500 text-sm">{c.them}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6 border-2" style={{ borderColor: "#00c853", background: "#f0fff4" }}>
              <h3 className="font-bold mb-4 uppercase text-sm tracking-widest" style={{ color: "#00c853" }}>The Ranking Room</h3>
              <ul className="space-y-4">
                {comparisons.map(c => (
                  <li key={c.us} className="flex items-start gap-3">
                    <span className="font-bold mt-0.5" style={{ color: "#00c853" }}>✓</span>
                    <span className="text-gray-700 text-sm font-medium">{c.us}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-24 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            Where We Work
          </p>
          <h2 className="text-4xl font-black mb-4" style={{ color: "#1a1a1a" }}>
            Local SEO for Businesses Across Florida & the US
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl">
            Based in St. Augustine, FL — but we rank businesses everywhere. If you need customers from Google, we can help.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {locations.map(loc => (
              <Link
                key={loc}
                href={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:border-green-400 hover:text-green-600 transition-all no-underline"
              >
                {loc} →
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all no-underline"
              style={{ borderColor: "#00c853", color: "#00c853" }}
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            FAQ
          </p>
          <h2 className="text-4xl font-black mb-12" style={{ color: "#1a1a1a" }}>
            Questions Skeptical Business Owners Ask Us
          </h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details
                key={faq.q}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>
            Limited Spots Available
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to See Your Business at the Top of Google?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a free 15-minute audit call. We&apos;ll show you exactly where you rank, why your competitors are beating you, and what it would take to flip that around. No sales pressure. No obligation.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg"
          >
            Book Your Free Ranking Audit →
          </a>
          <p className="mt-4 text-sm text-gray-500">
            ✓ Free · ✓ No credit card · ✓ 15 minutes · ✓ Real answers
          </p>
        </div>
      </section>
    </>
  );
}
