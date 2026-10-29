"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Calendar } from "lucide-react";
import { InfatozLogo } from "@/components/ui/InfatozLogo";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const SiteFooter: React.FC = () => {
  const { openCalendly } = useCalendly();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060b1e] text-slate-300 relative border-t border-slate-900 overflow-hidden" role="contentinfo">
      {/* Subtle Tech Mahindra Angled Hairline Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none">
          <line x1="-100" y1="400" x2="600" y2="0" stroke="white" strokeWidth="1" />
          <line x1="400" y1="500" x2="1200" y2="0" stroke="white" strokeWidth="1" />
          <line x1="800" y1="500" x2="1600" y2="0" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Tech Mahindra 4-Column Grid with Vertical Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10 pb-14 border-b border-white/10">
          {/* Column 1: Logo & Corporate Coordinates (4 cols) */}
          <div className="lg:col-span-4 lg:pr-10 space-y-5">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Infatoz Technologies Home" className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm">
                <InfatozLogo variant="white" />
              </Link>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-white/10 px-2 py-0.5 rounded-sm border border-white/15">
                Scale at Speed
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Building scalable software, web, and mobile solutions that help businesses grow, innovate, and succeed digitally.
            </p>

            <div className="pt-2 space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-mono text-[10px] uppercase tracking-wider mb-0.5">Bengaluru Center:</strong>
                  102, Pms Residency, Kothnoor Dinne, Arekere, Bengaluru 560076
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-mono text-[10px] uppercase tracking-wider mb-0.5">Registered Office:</strong>
                  1-42, Takkimane, Kergal, Kundapura, Udupi 576219
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <a href="tel:+917019058591" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 7019058591</span>
                </a>
                <a href="mailto:info@infatoz.com" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>info@infatoz.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Capabilities (3 cols) */}
          <div className="lg:col-span-3 lg:px-8 space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400" role="list">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  ERP & Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  E-Commerce Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Process Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Migration & DevOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Data Governance & Migration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Outcomes (2 cols) */}
          <div className="lg:col-span-2 lg:px-6 space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400" role="list">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Infatoz
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Engineering Lifecycle
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Endorsements
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Latest Thinking
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Careers & Hiring
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials & Action (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8 space-y-6">
            {/* Social Icons matching Tech Mahindra (white monochrome row) */}
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-3">
                Connect With Us
              </h3>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/infatoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.46-1.46 1.46 1.46 0 0 0-2.92 0 1.45 1.45 0 0 0 1.46 1.46m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/infatoz_tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@infatoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Language Selector Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/10 border border-white/15 text-xs text-white">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                <path strokeWidth="1.8" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              <span>English (Global)</span>
              <span className="text-slate-400">^</span>
            </div>

            <div>
              <button
                type="button"
                onClick={() => openCalendly()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Get a Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tech Mahindra Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="tracking-wide">
            © 2026 Infatoz Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Cookie Preferences
            </Link>
          </div>

          {/* Tech Mahindra Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
