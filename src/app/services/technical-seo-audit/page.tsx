import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical SEO Audit for Local Businesses | The Ranking Room",
  description: "We find every technical issue holding your website back from ranking on Google — and fix them. Fast page speed, schema markup, crawlability, and more.",
  alternates: { canonical: "https://therankingroom.org/services/technical-seo-audit" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const auditItems = [
  ["Page speed & Core Web Vitals", "Slow sites rank lower. We compress images, fix render-blocking code, and get you to 90+ on Google PageSpeed."],
  ["Schema markup", "Structured data tells Google exactly what your business does. We implement LocalBusiness, Service, and FAQPage schema on every page."],
  ["robots.txt & XML sitemap", "These files tell Google what to crawl and index. Missing or misconfigured ones can completely tank your rankings."],
  ["Crawlability & indexation", "We check that Google can access and index every page that should be ranking — and that the ones that shouldn't aren't."],
  ["Mobile optimization", "Google ranks mobile-first. We audit your site on mobile and fix anything that hurts the experience."],
  ["Title tags & meta descriptions", "Every page needs a unique, keyword-optimized title tag and meta description. We audit and rewrite all of them."],
  ["Internal linking structure", "How your pages link to each other tells Google what's important. We build a logical internal link structure."],
  ["404 errors & broken links", "Broken links waste Google's crawl budget and frustrate users. We find and fix every one."],
];

export default function TechnicalAuditPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Technical SEO Audit</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Find Every Technical Issue <span style={{ color: "#00c853" }}>Killing Your Rankings</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            You could have the best content in your market and still not rank — if the technical foundation of your site is broken. We find every issue, explain it in plain English, and fix it fast.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Technical SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>What We Audit & Fix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditItems.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <span className="text-xl font-bold mt-0.5" style={{ color: "#00c853" }}>✓</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Fix the Foundation. Watch the Rankings Move.</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit. We'll identify the top technical issues hurting your Google rankings and show you exactly how to fix them.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Technical Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[["Local SEO", "/services/local-seo"], ["On-Page SEO", "/services/on-page-seo"], ["Google Business Profile", "/services/google-business-profile"], ["Link Building", "/services/link-building"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
