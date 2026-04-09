import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Agency Serving Daytona Beach, FL | The Ranking Room",
  description: "Local SEO services for Daytona Beach businesses. We get you ranking on Google Maps for local and tourism-driven searches. Book a free audit today.",
  alternates: { canonical: "https://therankingroom.org/locations/daytona-beach" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function DaytonaBeachPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Daytona Beach, Florida</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>Local SEO Services in <span style={{ color: "#00c853" }}>Daytona Beach, FL</span></h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">Daytona Beach draws millions of tourists and has a large permanent population — both searching Google constantly. We help Daytona businesses capture both audiences at the right moment.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Daytona Beach SEO Audit →</a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>SEO for Daytona Beach's Unique Market</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Daytona Beach is famous for NASCAR at Daytona International Speedway, Bike Week, and its iconic beachfront. This drives massive tourism search volume year-round — on top of the everyday local search demand from Volusia County residents.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Businesses in Daytona need to rank for both local searches ("dentist near me") and tourism-driven searches ("best restaurants in Daytona Beach"). We build strategies that capture both.</p>
            <p className="text-gray-500 leading-relaxed">Located between Orlando and St. Augustine, Daytona is a strategic market with real volume and beatable competition in most niches.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-bold text-gray-800 mb-4">What We Do for Daytona Businesses</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Google Maps optimization for Volusia County searches", "Tourism + local keyword targeting strategy", "GBP optimization with photos, posts, and review strategy", "Citation building across Florida tourism and local directories", "On-page SEO for both tourist and resident audiences", "Monthly rank tracking and performance reporting"].map(i => (
                <li key={i} className="flex items-start gap-2"><span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Rank Higher in Daytona Beach</h2>
          <p className="text-gray-400 mb-8">Free audit. We'll show you exactly where your business stands and what it takes to reach the top 3 on Google in Daytona.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Daytona Beach SEO Audit →</a>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6" style={{ color: "#1a1a1a" }}>Nearby Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {[["Palm Coast", "/locations/palm-coast"], ["St. Augustine", "/locations/st-augustine"], ["Jacksonville", "/locations/jacksonville"], ["Ponte Vedra", "/locations/ponte-vedra"]].map(([label, href]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-600 transition-all no-underline">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
