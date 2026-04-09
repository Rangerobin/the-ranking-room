import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency Serving Fleming Island, FL | The Ranking Room",
  description: "Local SEO services for Fleming Island, FL businesses. Get found on Google Maps and Google Search by Clay County customers. Book a free audit.",
  alternates: { canonical: "https://therankingroom.org/locations/fleming-island" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function FlemingIslandPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Fleming Island, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>Local SEO Services in <span style={{ color: "#00c853" }}>Fleming Island, FL</span></h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">Fleming Island is a growing Clay County community with strong family demographics and high search intent for local service businesses. We help Fleming Island businesses capture that demand on Google.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Fleming Island SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>Local SEO for the Fleming Island Market</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Fleming Island is a planned community in Orange Park, Clay County — known for top-rated schools, family neighborhoods, and residents who support local businesses. When they need a service, they go to Google first.</p>
            <p className="text-gray-500 leading-relaxed mb-4">The Clay County market is less competitive than Jacksonville or St. Augustine, which means well-optimized local businesses can reach the top 3 on Google Maps faster.</p>
            <p className="text-gray-500 leading-relaxed">We build hyper-local strategies for Fleming Island and the surrounding Clay County area that drive real phone calls and foot traffic.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-bold text-gray-800 mb-4">Our Fleming Island SEO Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Google Maps optimization for Clay County searches", "Fleming Island keyword research and on-page SEO", "Citation building across Florida directories", "GBP optimization and review strategy", "Local link building from Clay County sources", "Monthly rank tracking and reporting"].map(i => (
                <li key={i} className="flex items-start gap-2"><span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Get Found in Fleming Island</h2>
          <p className="text-gray-400 mb-8">Free 15-minute audit. No pressure, no obligation — just a straight look at where your business stands on Google in Clay County.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Fleming Island SEO Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Nearby Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["Jacksonville", "/locations/jacksonville"], ["St. Augustine", "/locations/st-augustine"], ["Ponte Vedra", "/locations/ponte-vedra"], ["Palm Coast", "/locations/palm-coast"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
