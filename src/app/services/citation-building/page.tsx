import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Citation Building Service for Local SEO | The Ranking Room",
  description: "We build and clean up your business citations across 50+ directories so Google trusts your business and ranks it higher in local search results.",
  alternates: { canonical: "https://therankingroom.org/services/citation-building" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function CitationBuildingPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Citation Building</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Build the <span style={{ color: "#00c853" }}>Trust Signals</span> Google Needs to Rank You
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Citations are mentions of your business name, address, and phone number across the web. When they're consistent and widespread, Google trusts your business more — and ranks it higher. When they're inconsistent, your rankings suffer.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Citation Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>What We Do</h2>
            <p className="text-gray-500 leading-relaxed mb-4">We submit your business to the top 50+ online directories — Yelp, Apple Maps, Bing Places, Yellow Pages, BBB, and dozens of industry-specific and local directories.</p>
            <p className="text-gray-500 leading-relaxed mb-4">More importantly, we audit your existing citations for inconsistencies. A business listed as "The Ranking Room" in one place and "Ranking Room LLC" in another sends conflicting signals to Google. We find and fix every mismatch.</p>
            <p className="text-gray-500 leading-relaxed">NAP consistency — Name, Address, Phone — is one of the core pillars of local SEO. It's unglamorous work, but it moves rankings.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 mb-4">Directories We Submit To</h3>
            {["Google Business Profile", "Yelp", "Apple Maps", "Bing Places", "Yellow Pages", "BBB (Better Business Bureau)", "Foursquare", "Facebook Business", "Angi (formerly Angie's List)", "HomeAdvisor", "Thumbtack", "Houzz", "50+ more industry & local directories"].map(d => (
              <div key={d} className="flex items-center gap-3 text-sm text-gray-600">
                <span style={{ color: "#00c853" }} className="font-bold">✓</span>{d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Clean Up Your Citations. Rank Higher.</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit and we'll show you exactly where your citations stand and what needs fixing.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Citation Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Google Business Profile", "/services/google-business-profile"], ["Local SEO", "/services/local-seo"], ["On-Page SEO", "/services/on-page-seo"], ["Technical SEO Audit", "/services/technical-seo-audit"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
