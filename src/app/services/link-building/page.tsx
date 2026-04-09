import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Link Building Service | The Ranking Room",
  description: "We build high-quality local backlinks that boost your domain authority and move your Google rankings. Real links from relevant local websites.",
  alternates: { canonical: "https://therankingroom.org/services/link-building" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function LinkBuildingPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Link Building</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Build the <span style={{ color: "#00c853" }}>Authority</span> Google Needs to Trust You
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Backlinks are still one of Google's strongest ranking signals. When other websites link to yours, Google sees it as a vote of confidence. We build real, relevant local links — not spam.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Link Building Consultation →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>How We Build Local Links</h2>
            <p className="text-gray-500 leading-relaxed mb-4">We focus on quality over quantity — a single link from a well-regarded local news site or chamber of commerce is worth more than 100 links from irrelevant directories.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Our approach: local business associations, community sponsorships, local press mentions, industry directories, and partnerships with complementary local businesses.</p>
            <p className="text-gray-500 leading-relaxed">Every link we build is white-hat, permanent, and designed to move your local rankings in the long term.</p>
          </div>
          <div className="space-y-4">
            {[["Local business directories", "Industry-specific and geo-specific directories that carry real authority"],
              ["Chamber of commerce listings", "High-authority local links that Google trusts"],
              ["Local press & news mentions", "Coverage from local news outlets carries significant ranking weight"],
              ["Sponsor & partner links", "Community sponsorships and business partnerships that earn natural links"],
              ["Competitor link analysis", "We identify where your competitors get their links — and go get the same ones"]].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Build Authority. Outrank the Competition.</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free consultation. We'll analyze your current backlink profile and show you the exact opportunities your competitors are using to outrank you.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Link Building Consultation →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Local SEO", "/services/local-seo"], ["Technical SEO Audit", "/services/technical-seo-audit"], ["On-Page SEO", "/services/on-page-seo"], ["Citation Building", "/services/citation-building"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
