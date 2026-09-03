"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("balaji.hdev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const mailtoUrl = `mailto:balaji.hdev@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 500);
  };

  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="container mx-auto max-w-6xl">
        
        {/* Exact Figma Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            I&apos;m currently looking to join a cross-functional team that values building impactful, 
            high-throughput software products, or have an engineering project in mind? Let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:balaji.hdev@gmail.com"
              className="text-lg sm:text-xl text-purple-400 hover:text-purple-300 transition-colors font-medium tracking-wide"
            >
              balaji.hdev@gmail.com
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-purple-500/30 text-purple-300 text-xs font-medium transition-all"
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Social Media Circular Buttons from Figma template */}
        <div className="flex justify-center gap-6 mb-16">
          <Link
            href="https://github.com/BalajiHariharan30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-110 shadow-lg shadow-purple-950/40"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/in/balaji-h-a15845267"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-110 shadow-lg shadow-purple-950/40"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-950/90 to-[#110720] border border-purple-500/30 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Send a Direct Message
            </h3>
            <p className="text-white/70 text-sm text-center mb-8">
              Reach out directly to discuss full-time roles, engineering projects, or collaborations.
            </p>

            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <span className="text-3xl">✉️</span>
                <h4 className="text-emerald-300 font-bold text-lg">
                  Inquiry Dispatched!
                </h4>
                <p className="text-white/80 text-sm">
                  Your message has been formatted and routed to Balaji&apos;s direct mailbox.
                  I will get back to you at <span className="text-purple-300 font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/25 focus:border-purple-400 focus:outline-none text-white text-sm placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/25 focus:border-purple-400 focus:outline-none text-white text-sm placeholder-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1.5">
                    Subject / Role
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/25 focus:border-purple-400 focus:outline-none text-white text-sm placeholder-white/30"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Balaji, we'd like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/25 focus:border-purple-400 focus:outline-none text-white text-sm placeholder-white/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Balaji H. All rights reserved. Trichy, Tamil Nadu, India.
          </p>
        </div>

      </div>
    </footer>
  );
}
