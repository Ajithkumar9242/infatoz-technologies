"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import { InfatozLogo } from "@/components/ui/InfatozLogo";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const SiteFooter: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" role="contentinfo">
      {/* Upper Footer: Multi-Column Architectural Bays Inspired by Tech Mahindra */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 lg:divide-x lg:divide-slate-800">
          {/* Bay 1: Corporate Identity & Coordinates */}
          <div className="lg:col-span-4 lg:pr-10 space-y-6">
            <Link href="/" aria-label="Infatoz Technologies Home" className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm">
              <InfatozLogo variant="white" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Building scalable software, web, and mobile solutions that help businesses grow, innovate, and succeed digitally. Idea to Impact.
            </p>

            <div className="pt-2 space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-0.5">Bengaluru Office:</strong>
                  102, Pms Residency, Kothnoor Dinne, Poornima Nagar, Arekere, Bengaluru, Karnataka 560076
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-0.5">Registered Office:</strong>
                  1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Kundapura, Udupi, Karnataka 576219
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

          {/* Bay 2: Core Capabilities */}
          <div className="lg:col-span-3 lg:px-8 space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                Core Capabilities
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400" role="list">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Web & CMS Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Custom Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Mobile Apps (Flutter & React Native)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  ERP & Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  E-Commerce Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  AI & Automation Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Cloud Maintenance & DevOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Data Migration & Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Bay 3: Products & Industries */}
          <div className="lg:col-span-3 lg:px-8 space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                Products & Practices
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400" role="list">
              <li>
                <a href="#case-studies" className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold">
                  <span>Attendance Master Suite</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Retail & E-commerce D2C
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Financial Services & BFSI
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Manufacturing & Logistics
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Education & EdTech
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Healthcare & Clinics
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Real Estate & Construction
                </a>
              </li>
            </ul>
          </div>

          {/* Bay 4: Corporate Governance */}
          <div className="lg:col-span-2 lg:pl-8 space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                Corporate
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400" role="list">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Infatoz
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-sky-400 transition-colors">
                  Our 5-Step Process
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-sky-400 transition-colors">
                  Client Endorsements
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-sky-400 transition-colors">
                  Insights & News
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => openCalendly()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-mono text-[11px] uppercase tracking-wider font-bold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                >
                  <span>Book Consultation</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Utility Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p className="tracking-wider">© 2026 INFATOZ TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Information Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
