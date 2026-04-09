"use client";
import { useState } from "react";
import Link from "next/link";

const CALENDLY = "https://calendly.com/robinsonrange3/free-ranking-audit";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="text-xl font-black tracking-tight"
            style={{ color: "#1a1a1a", fontFamily: "Inter, sans-serif" }}
          >
            The{" "}
            <span style={{ color: "#00c853" }}>Ranking</span>{" "}
            Room
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
          <Link href="/locations" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Locations</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-all"
            style={{ background: "#00c853" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#00a846")}
            onMouseLeave={e => (e.currentTarget.style.background = "#00c853")}
          >
            Book Free Audit →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/services" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/locations" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Locations</Link>
          <Link href="/about" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>About</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Blog</Link>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white text-center px-5 py-3 rounded-lg"
            style={{ background: "#00c853" }}
          >
            Book Free Audit →
          </a>
        </div>
      )}
    </header>
  );
}
