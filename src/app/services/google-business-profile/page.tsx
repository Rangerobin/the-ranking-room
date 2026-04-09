import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization Service | The Ranking Room",
  description: "We optimize your Google Business Profile so your business ranks in the top 3 Google Maps results. Get more calls, more clicks, more customers.",
  alternates: { canonical: "https://therankingroom.org/services/google-business-profile" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const faqs = [
  { q: "What is Google Business Profile optimization?", a: "It's the process of fully completing and optimizing your free Google listing so Google ranks it higher in local map results. Most businesses have incomplete profiles — which is why they don't show up." },
  { q: "How much does Google Business Profile cost?", a: "The profile itself is 100% free. Our optimization service has a fee — book a call and we'll quote you based on your market and goals." },
  { q: "How fast will I see results after GBP optimization?", a: "Most clients see movement in Google Maps rankings within 2–4 weeks of a full optimization." },
  { q: "Can you get me more Google reviews?", a: "Yes. Review generation is part of our GBP service. We set up systems that make it easy for happy customers to leave you 5-star reviews consistently." },
];

const optimizations = [
  ["Business categories", "Primary and secondary categories are one of the biggest ranking factors — most businesses choose the wrong ones"],
  ["Business description", "Keyword-rich, compelling description that tells Google and customers exactly what you do"],
  ["Photos & videos", "Fresh, optimized media — businesses with photos get 42% more direction requests"],
  ["Google Posts", "Regular posts signal activity and relevance to Google's algorithm"],
  ["Services & products", "Fully built out services section with descriptions and keywords"],
  ["Q&A section", "Pre-populated with common questions to capture more search intent"],
  ["Review response strategy", "Responding to reviews is a ranking signal — we set up templates and processes"],
  ["NAP consistency audit", "Name, address, phone must match everywhere — we verify and fix mismatches"],
];

export default function GBPPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Google Business Profile</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Get Into the <span style={{ color: "#00c853" }}>Google Maps Top 3</span> — and Stay There
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Your Google Business Profile is the most powerful free tool in local SEO. When it's fully optimized, it puts your business in front of customers at the exact moment they're searching. Most businesses leave it half-empty.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">
            Book a Free GBP Audit →
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>What We Optimize</p>
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Every Piece of Your Google Business Profile — Optimized</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizations.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <span className="text-xl font-bold mt-0.5" style={{ color: "#00c853" }}>✓</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-gray-800 hover:bg-white list-none">
                  {faq.q}<span className="text-gray-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4 bg-white">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start Showing Up in Google Maps</h2>
          <p className="text-gray-400 mb-8 text-lg">We'll audit your current GBP for free and show you exactly what's holding you back from the top 3.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free GBP Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Local SEO", "/services/local-seo"], ["Citation Building", "/services/citation-building"], ["Review Strategy", "/services/review-strategy"], ["Technical SEO Audit", "/services/technical-seo-audit"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
