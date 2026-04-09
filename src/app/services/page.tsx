import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Services | The Ranking Room",
  description: "Explore all local SEO services offered by The Ranking Room — Google Business Profile optimization, citation building, link building, on-page SEO, and more.",
  alternates: { canonical: "https://therankingroom.org/services" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const services = [
  { icon: "🔍", title: "Local SEO", desc: "Full local SEO strategy — keywords, content, on-page, and off-page — built around your city and your customers.", href: "/services/local-seo" },
  { icon: "📍", title: "Google Business Profile Optimization", desc: "Get into the Google Maps top 3. We optimize every element of your GBP to maximize visibility and calls.", href: "/services/google-business-profile" },
  { icon: "📋", title: "Citation Building", desc: "Consistent NAP listings across 50+ directories. The trust signal Google needs to rank you higher.", href: "/services/citation-building" },
  { icon: "📝", title: "On-Page SEO", desc: "Keyword-optimized title tags, meta descriptions, headers, and content on every page of your site.", href: "/services/on-page-seo" },
  { icon: "🔗", title: "Link Building", desc: "Real, relevant local backlinks that build domain authority and move your organic rankings.", href: "/services/link-building" },
  { icon: "⚙️", title: "Technical SEO Audit", desc: "Find and fix every technical issue — page speed, schema, crawlability, broken links — holding you back.", href: "/services/technical-seo-audit" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>What We Do</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Local SEO Services That <span style={{ color: "#00c853" }}>Actually Move Rankings</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Every service we offer is designed for one outcome — more customers finding your business on Google. No fluff, no vanity metrics.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="block p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all no-underline" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h2 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{s.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <span className="text-sm font-semibold" style={{ color: "#00c853" }}>Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Not Sure Where to Start?</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit. We&apos;ll tell you exactly which services will move the needle fastest for your business.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Ranking Audit →</a>
        </div>
      </section>
    </>
  );
}
