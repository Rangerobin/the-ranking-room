import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The Ranking Room | Book a Free SEO Audit",
  description: "Book a free local SEO audit with The Ranking Room. Based in St. Augustine, FL. 15-minute call, no pressure, real answers about your Google rankings.",
  alternates: { canonical: "https://therankingroom.org/contact" },
};

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-20 px-6" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 60%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00c853", fontFamily: "Space Grotesk, sans-serif" }}>Get In Touch</p>
          <h1 className="text-5xl font-black leading-tight mb-6" style={{ color: "#1a1a1a" }}>
            Book Your <span style={{ color: "#00c853" }}>Free Ranking Audit</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            15 minutes. No sales pressure. We&apos;ll show you exactly where your business stands on Google, what your competitors are doing better, and what it would take to flip that around.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black mb-6" style={{ color: "#1a1a1a" }}>What Happens on the Call</h2>
            <ul className="space-y-6">
              {[["We review your current Google rankings", "We pull up your business live and show you exactly where you rank for your most important search terms."],
                ["We analyze your competitors", "We look at who's outranking you and why — so you know exactly what you're up against."],
                ["We identify quick wins", "Most businesses have 3–5 things that could move their rankings within 30 days. We'll tell you what yours are."],
                ["We give you a straight answer", "If we think we can help, we'll tell you what it takes. If we don't think we're the right fit, we'll tell you that too."]].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5" style={{ background: "#00c853" }}>✓</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-black mb-2" style={{ color: "#1a1a1a" }}>Book Your Free Call</h3>
            <p className="text-gray-500 mb-6 text-sm">Choose a time that works for you. Takes 15 minutes. No credit card, no commitment.</p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center justify-center gap-2 font-semibold w-full px-8 py-4 rounded-lg text-lg text-center"
            >
              Open Booking Calendar →
            </a>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-500">
              <p>📍 Based in St. Augustine, FL</p>
              <p>🗺️ Serving businesses across Florida and the US</p>
              <p>⏱ 15-minute call — respect for your time guaranteed</p>
              <p>✓ No credit card · No contracts · No pressure</p>
              <div className="pt-2 space-y-2">
                <p><a href="tel:9125016896" className="hover:text-gray-800 transition-colors">📞 (912) 501-6896</a></p>
                <p><a href="mailto:robinsonrange48@gmail.com" className="hover:text-gray-800 transition-colors">✉️ robinsonrange48@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
