import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency in St. Augustine, FL | The Ranking Room",
  description:
    "The Ranking Room is St. Augustine's local SEO agency. We get St. Augustine businesses to the top of Google Maps and Google Search. Book a free ranking audit today.",
  alternates: { canonical: "https://therankingroom.org/locations/st-augustine" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Ranking Room",
  description: "Local SEO agency serving businesses in St. Augustine, FL.",
  url: "https://therankingroom.org/locations/st-augustine",
  address: { "@type": "PostalAddress", addressLocality: "St. Augustine", addressRegion: "FL", addressCountry: "US" },
  areaServed: { "@type": "City", name: "St. Augustine", containedInPlace: { "@type": "State", name: "Florida" } },
};

const faqs = [
  { q: "How competitive is local SEO in St. Augustine?", a: "St. Augustine is a mid-size market with relatively unsophisticated competition. Most local agencies have outdated websites and thin content — which makes it much easier to outrank them with a modern, well-optimized site." },
  { q: "What types of businesses in St. Augustine do you work with?", a: "We work with restaurants, contractors, law firms, medical offices, real estate agents, tourism businesses, retail shops, and any other local service business that needs customers from Google." },
  { q: "How long until my St. Augustine business ranks on Google Maps?", a: "Most St. Augustine clients see movement in the Google 3-pack within 2–4 weeks. Full results typically take 60–90 days." },
  { q: "Do you work with businesses in the historic district?", a: "Absolutely. We understand the unique mix of tourism-driven and year-round local businesses in St. Augustine, and we tailor strategy accordingly." },
];

export default function StAugustinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>St. Augustine, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Local SEO Agency in <span style={{ color: "#00c853" }}>St. Augustine, FL</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            We help St. Augustine businesses rank at the top of Google Maps and Google Search — so locals and tourists find you first. Based right here in St. Augustine. No cookie-cutter strategies.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">
            Book a Free St. Augustine SEO Audit →
          </a>
        </div>
      </section>

      {/* Local context */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>We Know St. Augustine</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>SEO Built for the St. Augustine Market</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              St. Augustine is unlike most markets. You've got a thriving tourism economy centered around the historic district, Flagler College, and Castillo de San Marcos — plus a large year-round residential base across St. Johns County.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              That means local businesses here need to capture two distinct audiences: tourists searching for experiences and locals searching for services. We build SEO strategies that target both.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We're not a national agency running generic playbooks. We live and work in St. Augustine. We know the neighborhoods, the competition, and the customer behavior in this market — and we build your strategy around it.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">St. Augustine SEO Landscape</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Most local competitors have outdated, slow websites</li>
                <li>✓ Low to medium competition in most niches</li>
                <li>✓ Tourism drives high-intent mobile search year-round</li>
                <li>✓ St. Johns County is one of Florida's fastest-growing counties</li>
                <li>✓ Strong opportunity in Google Maps 3-pack across most industries</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Industries We Serve in St. Augustine</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Restaurants", "Contractors", "Law Firms", "Real Estate", "Medical", "Tourism", "Retail", "Auto", "Home Services", "Salons"].map(i => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in St. Augustine */}
      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>Our St. Augustine SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Google Maps Optimization", desc: "Get your business into the St. Augustine 3-pack for your highest-value search terms.", href: "/services/google-business-profile" },
              { title: "Local SEO", desc: "Full keyword strategy, on-page optimization, and content built for the St. Augustine market.", href: "/services/local-seo" },
              { title: "Citation Building", desc: "Consistent NAP listings across 50+ directories signals trust to Google and boosts local rankings.", href: "/services/citation-building" },
              { title: "Link Building", desc: "Local backlinks from St. Augustine and Florida-based websites that move your rankings.", href: "/services/link-building" },
              { title: "Technical SEO Audit", desc: "Find and fix every technical issue killing your Google visibility in the St. Augustine market.", href: "/services/technical-seo-audit" },
              { title: "Review Strategy", desc: "Build a consistent pipeline of 5-star Google reviews — the #1 trust signal for local search.", href: "/services/review-strategy" },
            ].map(s => (
              <Link key={s.href} href={s.href} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all no-underline" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-10" style={{ color: "#1a1a1a" }}>St. Augustine SEO — FAQ</h2>
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
          <h2 className="text-4xl font-black text-white mb-6">Own St. Augustine Search Results</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free audit and we'll show you exactly where your business stands in St. Augustine — and how to reach the top.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">
            Book Your Free St. Augustine SEO Audit →
          </a>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Nearby Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["Jacksonville", "/locations/jacksonville"], ["Ponte Vedra", "/locations/ponte-vedra"], ["Palm Coast", "/locations/palm-coast"], ["Fleming Island", "/locations/fleming-island"], ["Daytona Beach", "/locations/daytona-beach"]].map(([label, href]) => (
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
