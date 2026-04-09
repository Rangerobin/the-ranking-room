import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Services by Location | The Ranking Room",
  description: "The Ranking Room serves local businesses across Florida and the US. Find local SEO services for your city — St. Augustine, Jacksonville, Ponte Vedra, and more.",
  alternates: { canonical: "https://therankingroom.org/locations" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

const locations = [
  { city: "St. Augustine", state: "FL", desc: "Our home base. We know the St. Augustine market inside and out — tourism economy, historic district, and year-round local demand.", href: "/locations/st-augustine" },
  { city: "Jacksonville", state: "FL", desc: "Florida's largest city. We help Jacksonville businesses capture neighborhood-by-neighborhood search demand across Duval County.", href: "/locations/jacksonville" },
  { city: "Ponte Vedra Beach", state: "FL", desc: "A high-income market with high-intent customers. We help Ponte Vedra businesses dominate local search in St. Johns County.", href: "/locations/ponte-vedra" },
  { city: "Palm Coast", state: "FL", desc: "One of Florida's fastest-growing cities. Low competition, high opportunity — perfect timing to establish Google authority.", href: "/locations/palm-coast" },
  { city: "Fleming Island", state: "FL", desc: "A family-driven Clay County community with strong local search demand and beatable SEO competition.", href: "/locations/fleming-island" },
  { city: "Daytona Beach", state: "FL", desc: "High tourism and local search volume. We build strategies that capture both year-round residents and visitors.", href: "/locations/daytona-beach" },
];

export default function LocationsPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Where We Work</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Local SEO for Businesses Across <span style={{ color: "#00c853" }}>Florida & the US</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Based in St. Augustine, FL — but we rank businesses everywhere. If your customers are searching Google to find you, we can help no matter where you are.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#1a1a1a" }}>Florida Markets We Specialize In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map(l => (
              <Link key={l.href} href={l.href} className="block p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all no-underline" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>{l.state}</p>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{l.city}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{l.desc}</p>
                <span className="text-sm font-semibold" style={{ color: "#00c853" }}>SEO services in {l.city} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#1a1a1a" }}>Don&apos;t See Your City?</h2>
          <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">We work with businesses across the United States. If your customers find you through Google, we can help — no matter your location.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg">Book a Free Audit — Any Location →</a>
        </div>
      </section>
    </>
  );
}
