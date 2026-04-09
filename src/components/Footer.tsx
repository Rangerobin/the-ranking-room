import Link from "next/link";

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ffffff" }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-black tracking-tight mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              The <span style={{ color: "#00c853" }}>Ranking</span> Room
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Local SEO agency based in St. Augustine, FL. We help small businesses get found on Google and grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
                ["Local SEO", "/services/local-seo"],
                ["Google Business Profile", "/services/google-business-profile"],
                ["Citation Building", "/services/citation-building"],
                ["On-Page SEO", "/services/on-page-seo"],
                ["Link Building", "/services/link-building"],
                ["SEO Audit", "/services/technical-seo-audit"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Locations</h3>
            <ul className="space-y-2">
              {[
                ["St. Augustine", "/locations/st-augustine"],
                ["Jacksonville", "/locations/jacksonville"],
                ["Ponte Vedra", "/locations/ponte-vedra"],
                ["Palm Coast", "/locations/palm-coast"],
                ["Fleming Island", "/locations/fleming-island"],
                ["Daytona Beach", "/locations/daytona-beach"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-gray-400 mb-4">
              Ready to rank higher on Google? Book your free audit — no credit card required.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-colors"
              style={{ background: "#00c853" }}
            >
              Book Free Audit →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} The Ranking Room. St. Augustine, FL. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
