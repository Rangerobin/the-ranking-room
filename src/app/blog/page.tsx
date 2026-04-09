import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Blog | The Ranking Room",
  description: "Local SEO tips, guides, and strategies for small businesses. Learn how to rank higher on Google Maps and Google Search from The Ranking Room.",
  alternates: { canonical: "https://therankingroom.org/blog" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const posts = [
  { title: "What Is Local SEO? A Plain-English Guide for Small Business Owners", slug: "what-is-local-seo", date: "April 2025", desc: "Local SEO explained without the jargon. What it is, why it matters, and what you can do today to start ranking higher in your city." },
  { title: "How to Get Into the Google Maps 3-Pack", slug: "how-to-get-in-google-3-pack", date: "April 2025", desc: "The 3 businesses that show up at the top of Google Maps get the majority of local clicks and calls. Here's exactly how to become one of them." },
  { title: "How to Optimize Your Google Business Profile in 2025", slug: "how-to-optimize-google-business-profile", date: "April 2025", desc: "A step-by-step guide to fully optimizing your Google Business Profile — the single most important thing you can do for local SEO." },
  { title: "Local SEO vs. National SEO: What's the Difference?", slug: "local-seo-vs-national-seo", date: "April 2025", desc: "Local SEO and national SEO have very different goals, strategies, and timelines. Here's how to know which one your business needs." },
  { title: "How to Get More Google Reviews (Without Begging or Buying Them)", slug: "how-to-get-more-google-reviews", date: "April 2025", desc: "Google reviews are one of the strongest local ranking signals — and most businesses have a broken system for collecting them. Here's how to fix it." },
  { title: "Local SEO Ranking Factors: What Actually Matters in 2025", slug: "local-seo-ranking-factors", date: "April 2025", desc: "Google's local algorithm has changed. Here are the factors that actually move local rankings today — ranked by impact." },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>The Blog</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Local SEO Guides for <span style={{ color: "#00c853" }}>Small Business Owners</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            No fluff. No jargon. Just practical local SEO advice that helps you rank higher on Google and get more customers.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.slug} className="flex flex-col p-8 rounded-xl border border-gray-200 bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <p className="text-xs text-gray-400 font-medium mb-3">{post.date}</p>
              <h2 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#1a1a1a" }}>{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{post.desc}</p>
              <span className="text-sm font-semibold text-gray-300">Coming soon</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want a Free Ranking Audit Instead?</h2>
          <p className="text-gray-400 mb-8">Skip the reading. Book a free 15-minute call and we&apos;ll tell you exactly what&apos;s holding your business back from the top of Google.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Ranking Audit →</a>
        </div>
      </section>
    </>
  );
}
