import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Ranking Room",
  description: "Privacy policy for The Ranking Room — local SEO agency based in St. Augustine, FL.",
  alternates: { canonical: "https://therankingroom.org/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-4" style={{ color: "#1a1a1a" }}>Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Who We Are</h2>
            <p>The Ranking Room is a local SEO agency based in St. Augustine, Florida. We help small and local service businesses rank higher on Google Maps and Google Search. Our website is <strong>therankingroom.org</strong>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Book a call through our Calendly booking form</li>
              <li>Contact us via email or phone</li>
              <li>Fill out any inquiry or contact form on our website</li>
              <li>Opt in to SMS communications</li>
            </ul>
            <p className="mt-3">This information may include your name, email address, phone number, business name, and any details you share about your business or goals.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide SEO services you've engaged us for</li>
              <li>Send relevant updates, follow-ups, or educational content (you can opt out at any time)</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Cookies & Tracking</h2>
            <p>Our website may use cookies and tracking technologies including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics</strong> — to understand how visitors use our site</li>
              <li><strong>Meta Pixel (Facebook)</strong> — for advertising and remarketing purposes</li>
              <li><strong>Calendly</strong> — our booking tool uses its own cookies to manage scheduling</li>
            </ul>
            <p className="mt-3">You can disable cookies through your browser settings. Note that doing so may affect the functionality of certain features on our site.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. SMS Communications</h2>
            <p>If you opt in to SMS communications, you consent to receive text messages from The Ranking Room related to your inquiry or services. Message and data rates may apply. You can opt out at any time by replying STOP to any message.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">6. Third-Party Services</h2>
            <p>Our website uses the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Calendly</strong> — for booking and scheduling</li>
              <li><strong>Vercel</strong> — for website hosting</li>
              <li><strong>Google</strong> — for analytics and advertising</li>
              <li><strong>Meta</strong> — for advertising and conversion tracking</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">7. Data Retention</h2>
            <p>We retain your personal information only as long as necessary to provide our services and fulfill the purposes described in this policy, unless a longer retention period is required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at the email below.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">9. Contact Us</h2>
            <p>If you have questions about this privacy policy or how we handle your information, contact us at:</p>
            <p className="mt-2"><strong>The Ranking Room</strong><br />St. Augustine, Florida<br />therankingroom.org</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">10. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. When we do, we&apos;ll update the &quot;last updated&quot; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
