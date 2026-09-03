"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          {/* Brand Logo: Balaji.in */}
          <Link
            href="/"
            className="text-2xl font-black text-white hover:opacity-90 transition-all flex items-center gap-0.5 group tracking-tight"
          >
            <span className="font-extrabold tracking-tight text-white group-hover:text-purple-200 transition-colors">
              Balaji
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent font-black">
              .in
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping ml-1" />
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link href="#home" className="nav-link text-white hover:text-purple-400 transition-colors text-base font-normal tracking-wide">Home</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#about" className="nav-link text-white hover:text-purple-400 transition-colors text-base font-normal tracking-wide">About</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#lab" className="nav-link text-white hover:text-purple-400 transition-colors text-base font-normal tracking-wide">Lab</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#experience" className="nav-link text-white hover:text-purple-400 transition-colors text-base font-normal tracking-wide">Experience</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#contact" className="nav-link text-white hover:text-purple-400 transition-colors text-base font-normal tracking-wide">Contact</Link>
            </li>
          </ul>

          {/* Right Action: Resume */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-105 shadow-md shadow-purple-900/40 border border-purple-400/30 inline-flex items-center gap-1.5"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-purple-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 pb-4 bg-[#110720]/95 backdrop-blur-xl rounded-2xl px-4 space-y-3">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 hover:text-purple-300 py-1.5 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 hover:text-purple-300 py-1.5 text-base font-medium"
            >
              About
            </Link>
            <Link
              href="#lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 hover:text-purple-300 py-1.5 text-base font-medium"
            >
              Lab
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 hover:text-purple-300 py-1.5 text-base font-medium"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 hover:text-purple-300 py-1.5 text-base font-medium"
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-center"
            >
              Resume PDF ↗
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
