import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency in Ponte Vedra Beach, FL | The Ranking Room",
  description: "Expert local SEO services for Ponte Vedra Beach businesses. We get you to the top of Google Maps and Google Search. Book a free audit.",
  alternates: { canonical: "https://therankingroom.org/locations/ponte-vedra" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function PonteVedraPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Ponte Vedra Beach, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>Local SEO Services in <span style={{ color: "#00c853" }}>Ponte Vedra Beach, FL</span></h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">Ponte Vedra Beach is a high-income, high-intent market. Businesses here need to show up precisely when affluent local customers search on Google. We make that happen.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Ponte Vedra SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>The Ponte Vedra Market</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Ponte Vedra Beach is home to TPC Sawgrass, The Players Championship, and one of Florida's most affluent residential communities. Customers here use Google to find premium service providers — and they convert at high rates.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Whether you're a contractor, law firm, medical practice, restaurant, or real estate agent, ranking at the top of Google in Ponte Vedra means access to high-value clients.</p>
            <p className="text-gray-500 leading-relaxed">We build local SEO strategies specifically for the Ponte Vedra and St. Johns County market — including keyword research, GBP optimization, and content that speaks to the local audience.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-bold text-gray-800 mb-4">What We Do for Ponte Vedra Businesses</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Google Maps 3-pack optimization for Ponte Vedra searches", "Location-specific keyword targeting for St. Johns County", "GBP optimization tailored to the Ponte Vedra audience", "Citation building across Florida and national directories", "Local link building from Northeast Florida sources", "Transparent monthly ranking reports"].map(i => (
                <li key={i} className="flex items-start gap-2"><span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Rank Higher in Ponte Vedra Beach</h2>
          <p className="text-gray-400 mb-8">Book your free audit and see exactly where your business stands in the Ponte Vedra market.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Ponte Vedra SEO Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Nearby Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["St. Augustine", "/locations/st-augustine"], ["Jacksonville", "/locations/jacksonville"], ["Fleming Island", "/locations/fleming-island"], ["Palm Coast", "/locations/palm-coast"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
