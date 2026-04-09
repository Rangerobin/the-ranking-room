import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Review Strategy for Local Businesses | The Ranking Room",
  description: "We help local businesses build a consistent pipeline of 5-star Google reviews — the most powerful trust signal in local SEO. No begging, no buying. Just systems.",
  alternates: { canonical: "https://therankingroom.org/services/review-strategy" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const whyReviews = [
  ["Reviews are a top 3 local ranking factor", "Google's local algorithm weighs your review count, recency, and rating heavily. More reviews = higher rankings."],
  ["Reviews drive click-through rates", "A business with 4.8 stars and 80 reviews gets far more clicks than a competitor with 4.9 stars and 6 reviews."],
  ["Reviews build trust instantly", "Customers trust other customers. A strong review profile converts searchers into callers before they even visit your website."],
  ["LLMs reference reviews", "ChatGPT, Perplexity, and other AI tools pull review data when recommending local businesses. More reviews = more AI visibility."],
];

const faqs = [
  { q: "Can you buy Google reviews?", a: "No — and you shouldn't. Google actively detects and removes fake reviews, and businesses caught buying them can have their entire GBP suspended. Our approach is 100% white-hat: systems that make it easy for real, happy customers to leave reviews." },
  { q: "How many Google reviews do I need?", a: "It depends on your market and competition. In most local markets, 25–50 genuine reviews puts you in a strong position. We'll tell you exactly what your competitors have and what you need to beat them." },
  { q: "How do you get customers to actually leave reviews?", a: "The key is timing and removing friction. We set up a simple review request process — text, email, or QR code — that catches customers right after a positive experience, when they're most likely to leave a review." },
  { q: "What about negative reviews?", a: "We help you set up a response system for negative reviews that shows Google and future customers that you take feedback seriously. Properly handled negative reviews can actually build trust." },
];

export default function ReviewStrategyPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Review Strategy</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Build a <span style={{ color: "#00c853" }}>5-Star Reputation</span> That Ranks and Converts
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Google reviews are one of the strongest local ranking signals — and the one trust factor AI tools can&apos;t fake or replace. We set up systems that bring in real reviews from real customers, consistently.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">
            Book a Free Review Strategy Audit →
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Why It Matters</p>
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Why Google Reviews Are Non-Negotiable for Local SEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyReviews.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <span className="text-xl font-bold mt-0.5" style={{ color: "#00c853" }}>★</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>What Our Review Strategy Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[["Review Request System", "We set up a frictionless review request process via text, email, or QR code — sent at the perfect moment after a positive customer experience."],
              ["Review Link & Landing Page", "We create a direct link to your Google review form so customers never have to search for it. Fewer steps = more reviews."],
              ["Response Templates", "We write professional response templates for both positive and negative reviews — so you always know what to say and Google sees you're engaged."],
              ["Competitor Review Audit", "We analyze how many reviews your top competitors have so you know exactly what you're up against and what milestone to target."],
              ["Review Monitoring", "We monitor your incoming reviews and flag anything that needs a response so nothing slips through the cracks."],
              ["Ongoing Review Coaching", "We coach you and your team on the best moments to ask for reviews and how to make it a natural part of your customer interaction."]].map(([title, desc]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-6" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Frequently Asked Questions</h2>
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
          <h2 className="text-4xl font-black text-white mb-6">Start Building Your 5-Star Reputation</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit. We&apos;ll show you how your reviews compare to your top competitors and what it takes to pull ahead.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">
            Book Your Free Review Strategy Audit →
          </a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Google Business Profile", "/services/google-business-profile"], ["Local SEO", "/services/local-seo"], ["Citation Building", "/services/citation-building"], ["On-Page SEO", "/services/on-page-seo"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
