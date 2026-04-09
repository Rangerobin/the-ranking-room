import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Services for Small Businesses | The Ranking Room",
  description:
    "The Ranking Room provides expert local SEO services that get small businesses ranking on Google Search and Google Maps. Based in St. Augustine, FL. Serving businesses nationwide.",
  alternates: { canonical: "https://therankingroom.org/services/local-seo" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services",
  provider: { "@type": "LocalBusiness", name: "The Ranking Room", address: { "@type": "PostalAddress", addressLocality: "St. Augustine", addressRegion: "FL" } },
  description: "Local SEO services that get small businesses ranking at the top of Google Search and Google Maps.",
  areaServed: "United States",
};

const faqs = [
  { q: "How long does local SEO take?", a: "Most clients see ranking movement in 2–4 weeks. Consistent top-3 results typically take 60–90 days depending on your market." },
  { q: "Do I need a website for local SEO?", a: "A website helps but isn't required to start. We can drive calls through your Google Business Profile while you build one." },
  { q: "What makes local SEO different from regular SEO?", a: "Local SEO focuses on ranking in your city — especially Google Maps and the 3-pack results. That's where local customers click." },
  { q: "How much does local SEO cost?", a: "Pricing depends on your market and competition. Book a free audit and we'll give you a straight answer." },
];

export default function LocalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Local SEO Services</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Get Your Business to the <span style={{ color: "#00c853" }}>Top of Google</span> in Your City
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Local SEO is the single most powerful way for a small business to generate consistent, free leads from Google. We build and execute the full strategy — so your phone rings.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">
            Book a Free Local SEO Audit →
          </a>
        </div>
      </section>

      {/* What is local SEO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>What It Is</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>What Is Local SEO and Why Does It Matter?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Local SEO is the process of optimizing your online presence so that Google shows your business to people searching for your services in your area. When someone types "plumber near me" or "best dentist in St. Augustine" — local SEO determines who shows up.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              The businesses in the top 3 Google Maps results (called the "3-pack") get the overwhelming majority of clicks and calls. Our job is to get you there — and keep you there.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Unlike paid ads that stop the moment you stop paying, local SEO builds a permanent asset. Once you rank, you generate leads around the clock without spending a dollar on ads.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#1a1a1a" }}>What We Optimize</h3>
            <ul className="space-y-4">
              {[
                ["Google Business Profile", "The #1 ranking factor for local search"],
                ["On-Page SEO", "Keywords, title tags, meta descriptions, content"],
                ["Citations & NAP", "Consistent listings across 50+ directories"],
                ["Local Link Building", "Backlinks from relevant local websites"],
                ["Technical SEO", "Site speed, schema markup, crawlability"],
                ["Review Strategy", "Systematic approach to getting 5-star reviews"],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-1 font-bold" style={{ color: "#00c853" }}>✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">{title}</span>
                    <span className="text-gray-500"> — {desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Industries We Serve</p>
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Local SEO for Every Type of Service Business</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Contractors", "Restaurants & Cafes", "Dentists & Doctors", "Law Firms", "Plumbers & HVAC", "Real Estate Agents", "Auto Shops", "Salons & Spas", "Chiropractors", "Veterinarians", "Landscapers", "Home Services"].map(industry => (
              <div key={industry} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 text-center">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to Rank Higher on Google?</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit. We'll show you exactly where you stand and what it takes to reach the top.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">
            Book Your Free Ranking Audit →
          </a>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Google Business Profile Optimization", "/services/google-business-profile"], ["Citation Building", "/services/citation-building"], ["Technical SEO Audit", "/services/technical-seo-audit"], ["Link Building", "/services/link-building"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
