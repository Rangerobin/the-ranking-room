import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Ranking Room | Local SEO Agency St. Augustine, FL",
  description: "The Ranking Room is a local SEO agency based in St. Augustine, FL. We help small businesses get found on Google and grow. Learn our story.",
  alternates: { canonical: "https://therankingroom.org/about" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>About Us</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            We&apos;re The Ranking Room — <span style={{ color: "#00c853" }}>Based in St. Augustine</span>, Built for Local Business
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            We started The Ranking Room because we saw the same thing over and over: great local businesses losing customers to competitors with worse service — just better Google rankings. We fix that.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#1a1a1a" }}>Our Story</h2>
            <p className="text-gray-500 leading-relaxed mb-4">The Ranking Room was founded in St. Augustine, Florida — one of the oldest cities in the US and a market with a fascinating mix of tourism-driven and year-round local demand. We saw firsthand how businesses here were leaving money on the table by not showing up on Google.</p>
            <p className="text-gray-500 leading-relaxed mb-4">The local SEO agencies already in the market were either charging premium rates for mediocre results or running cookie-cutter national playbooks that ignored what actually matters in local search. We built The Ranking Room to do it differently.</p>
            <p className="text-gray-500 leading-relaxed mb-4">We combine deep local market knowledge with the latest AI-powered SEO tools to deliver results faster and more efficiently than traditional agencies — and we do it at a price that actually makes sense for small businesses.</p>
            <p className="text-gray-500 leading-relaxed">Our proof of concept is this website. Built and optimized using the same process we use for clients — and ranking in St. Augustine for the exact keywords our clients care about.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="font-bold text-gray-800 mb-4">What Makes Us Different</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Based in St. Augustine — we know the local market intimately", "AI-powered tools that do in hours what traditional agencies take months to do", "No long-term contracts — you stay because results are real", "Results-first — you see movement before we ask for long-term commitment", "Transparent reporting — you always know exactly where you rank", "Direct access to your strategist — no account manager runaround"].map(i => (
                  <li key={i} className="flex items-start gap-2"><span style={{ color: "#00c853" }} className="font-bold mt-0.5">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Help every local business we work with own their corner of Google — so the best businesses win, not just the ones with the biggest ad budgets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-10 text-center" style={{ color: "#1a1a1a" }}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[["Results First", "We don't ask for long commitments before delivering proof. You see your rankings move. Then we talk about the future."],
              ["Total Transparency", "You get clear reports showing exactly where you rank, what we did, and what's next. No smoke and mirrors."],
              ["Local First", "We're a local business serving local businesses. We understand the stakes — your livelihood depends on this working."]].map(([title, desc]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a free 15-minute audit call. We&apos;ll show you exactly where you stand on Google and what it would take to reach the top.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg">Book Your Free Ranking Audit →</a>
        </div>
      </section>
    </>
  );
}
