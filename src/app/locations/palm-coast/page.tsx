import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency in Palm Coast, FL | The Ranking Room",
  description: "Local SEO services for Palm Coast, FL businesses. We get you ranking on Google Maps and Google Search so local customers find you first.",
  alternates: { canonical: "https://therankingroom.org/locations/palm-coast" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function PalmCoastPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Palm Coast, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>Local SEO Services in <span style={{ color: "#00c853" }}>Palm Coast, FL</span></h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">Palm Coast is one of Florida's fastest-growing cities — and most local businesses haven't caught up with the demand. We help Palm Coast businesses get found on Google before the competition does.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Palm Coast SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>Why Palm Coast Is a Local SEO Opportunity</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Palm Coast sits in Flagler County between Daytona Beach and St. Augustine. It's a rapidly growing residential community with a large retiree population and an influx of families — all using Google to find local services.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Because it's a newer market, local SEO competition is still relatively low. Businesses that establish Google authority now will dominate for years.</p>
            <p className="text-gray-500 leading-relaxed">From contractors and HVAC companies to medical practices and restaurants — if you serve Palm Coast, you need to rank in Palm Coast.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-bold text-gray-800 mb-4">Industries We Serve in Palm Coast</h3>
            <div className="flex flex-wrap gap-2">
              {["Contractors", "HVAC & Plumbing", "Medical & Dental", "Restaurants", "Real Estate", "Law Firms", "Home Services", "Auto Repair", "Landscaping", "Retail"].map(i => (
                <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Own Palm Coast Search Results</h2>
          <p className="text-gray-400 mb-8">Book your free audit and see exactly where your Palm Coast business stands on Google — and how to reach the top.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Palm Coast SEO Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Nearby Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["St. Augustine", "/locations/st-augustine"], ["Daytona Beach", "/locations/daytona-beach"], ["Jacksonville", "/locations/jacksonville"], ["Ponte Vedra", "/locations/ponte-vedra"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
