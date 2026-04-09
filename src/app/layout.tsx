import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Ranking Room | Local SEO Agency in St. Augustine, FL",
  description:
    "The Ranking Room helps local businesses in St. Augustine and across the US rank higher on Google Maps and Google Search. Book a free ranking audit today.",
  openGraph: {
    title: "The Ranking Room | Local SEO Agency in St. Augustine, FL",
    description:
      "We help local businesses rank higher on Google Maps and Google Search. Book a free ranking audit.",
    url: "https://therankingroom.org",
    siteName: "The Ranking Room",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
