import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency in Jacksonville, FL | The Ranking Room",
  description:
    "The Ranking Room helps Jacksonville businesses rank higher on Google Maps and Google Search. Expert local SEO services for Jacksonville, FL small businesses.",
  alternates: { canonical: "https://therankingroom.org/locations/jacksonville" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services Jacksonville FL",
  provider: { "@type": "LocalBusiness", name: "The Ranking Room" },
  areaServed: { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
};

const faqs = [
  { q: "How competitive is local SEO in Jacksonville?", a: "Jacksonville is a large market — Florida's biggest city by area. Competition varies by industry. In most niches, a well-optimized site with strong GBP and reviews can rank in the top 3 within 60–90 days." },
  { q: "Can you help Jacksonville businesses compete against national chains?", a: "Yes. Google's local algorithm heavily favors proximity and relevance. A well-optimized local business almost always outranks national chains in local map results." },
  { q: "What neighborhoods in Jacksonville do you target?", a: "We target wherever your customers are — Riverside, San Marco, Southside, Mandarin, Jacksonville Beach, Ponte Vedra, and across Duval County." },
];

export default function JacksonvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Jacksonville, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Local SEO Agency Serving <span style={{ color: "#00c853" }}>Jacksonville, FL</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Jacksonville is one of the largest cities in the US by area — and most local businesses aren't showing up where their customers are looking. We fix that.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">
            Book a Free Jacksonville SEO Audit →
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>Why Jacksonville Businesses Need Local SEO</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Jacksonville's size is both an opportunity and a challenge. Customers searching for a plumber in Mandarin aren't going to call a company in Riverside — Google knows that and serves hyper-local results.</p>
            <p className="text-gray-500 leading-relaxed mb-4">That means ranking in Jacksonville isn't one fight — it's a neighborhood-by-neighborhood battle. We build location-aware strategies that help you capture customers across Duval County and the surrounding beaches.</p>
            <p className="text-gray-500 leading-relaxed">With strong competitors like Create Web Studios running Jacksonville-focused campaigns, the window to establish authority is right now — before more agencies catch up.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-bold text-gray-800 mb-4">What We Do for Jacksonville Businesses</h3>
            <ul className="space-y-3">
              {["Google Maps 3-pack optimization for your Jacksonville neighborhoods", "On-page SEO targeting Jacksonville-specific keywords", "Citation building across Florida business directories", "Local link building from Jacksonville-based websites", "Google review strategy to outpace local competitors", "Monthly rank tracking and transparent reporting"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Jacksonville SEO — FAQ</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {faq.q}<span className="text-gray-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Rank Higher in Jacksonville</h2>
          <p className="text-gray-400 mb-8 text-lg">Free 15-minute audit. We'll show you exactly where your Jacksonville business stands on Google and what it takes to reach the top.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">
            Book Your Free Jacksonville SEO Audit →
          </a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Other Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["St. Augustine", "/locations/st-augustine"], ["Ponte Vedra", "/locations/ponte-vedra"], ["Palm Coast", "/locations/palm-coast"], ["Fleming Island", "/locations/fleming-island"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
