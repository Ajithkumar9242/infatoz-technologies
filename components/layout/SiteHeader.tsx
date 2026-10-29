"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DesktopMegaMenu } from "@/components/navigation/DesktopMegaMenu";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";
import { InfatozLogo } from "@/components/ui/InfatozLogo";
import { Button } from "@/components/ui/Button";
import { Menu, Calendar, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

import { useCalendly } from "@/components/providers/CalendlyProvider";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
            : "bg-white border-b border-slate-200/90 py-4"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 xl:gap-6">
            {/* Redesigned Brand Logo with Tech Mahindra Milestone Mark */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/"
                className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm p-1 transition-opacity hover:opacity-95"
                aria-label="Infatoz Technologies Homepage"
              >
                <InfatozLogo variant="dark" priority />
              </Link>

              {/* Tech Mahindra Style Secondary Milestone Mark */}
              <div className="hidden 2xl:flex items-center pl-3 border-l border-slate-200">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200/80">
                  Idea to Impact™
                </span>
              </div>
            </div>

            {/* Desktop Navigation — shown on xl screens and above */}
            <div className="hidden xl:block">
              <DesktopMegaMenu />
            </div>

            {/* Right Action CTAs & Utilities */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Search Icon matching Tech Mahindra */}
              <button
                type="button"
                onClick={() => {
                  const servicesEl = document.getElementById("services");
                  if (servicesEl) servicesEl.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Search Services and Capabilities"
                className="hidden md:flex p-2 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <div className="hidden 2xl:block h-4 w-px bg-slate-200" aria-hidden="true" />

              <a
                href="tel:+917019058591"
                className="hidden 2xl:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 px-2 py-1 transition-colors"
                aria-label="Call Infatoz Technologies"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 7019058591</span>
              </a>

              <div className="hidden sm:block">
                <Button
                  onClick={() => openCalendly()}
                  variant="primary"
                  size="sm"
                  className="font-bold tracking-wider uppercase text-[11px] xl:text-xs shadow-sm rounded-sm px-3.5 xl:px-4 py-2"
                >
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  <span>Get a Consultation</span>
                </Button>
              </div>

              {/* Mobile Menu Trigger — active on screens up to xl */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                className="xl:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-sm text-slate-800 hover:text-blue-600 hover:bg-slate-100 border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
