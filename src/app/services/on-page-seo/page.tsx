import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On-Page SEO Services for Local Businesses | The Ranking Room",
  description: "We optimize every page of your website with the right keywords, title tags, content, and structure so Google ranks you for the searches that matter most.",
  alternates: { canonical: "https://therankingroom.org/services/on-page-seo" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function OnPageSEOPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>On-Page SEO</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Every Page Optimized to <span style={{ color: "#00c853" }}>Rank and Convert</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            On-page SEO is the art of making sure every page on your website is speaking Google's language — the right keywords in the right places, structured content, and clear signals of relevance.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free On-Page SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>What On-Page SEO Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[["Keyword Research & Mapping", "We find the exact terms your customers search and map each keyword to the right page on your site."],
              ["Title Tags & Meta Descriptions", "The first thing Google and searchers see. We write keyword-optimized titles that drive clicks."],
              ["Header Structure (H1–H3)", "Proper heading hierarchy tells Google what each page is about and improves readability."],
              ["Content Optimization", "We rewrite or enhance your existing content to naturally incorporate target keywords without stuffing."],
              ["Image Alt Text", "Every image needs descriptive alt text — it's an accessibility requirement and an SEO signal."],
              ["Internal Linking", "Strategic links between your pages distribute authority and help Google understand your site structure."],
              ["URL Structure", "Clean, keyword-rich URLs are a small but consistent ranking signal across every page."],
              ["Local Keyword Integration", "City and region-specific keywords naturally woven into service and location pages."],
              ["Content Depth & Topical Authority", "Thin pages don't rank. We build out pages with the depth and detail Google rewards."]].map(([title, desc]) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Give Google What It Needs to Rank You</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit and we'll show you exactly which pages need work and what changes will move your rankings fastest.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free On-Page SEO Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Local SEO", "/services/local-seo"], ["Technical SEO Audit", "/services/technical-seo-audit"], ["Link Building", "/services/link-building"], ["Citation Building", "/services/citation-building"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
