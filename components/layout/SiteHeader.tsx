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
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5"
            : "bg-white border-b border-slate-200/90 py-5"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Redesigned Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm p-1 transition-opacity hover:opacity-95 shrink-0"
              aria-label="Infatoz Technologies Homepage"
            >
              <InfatozLogo variant="dark" priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <DesktopMegaMenu />
            </div>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="tel:+917019058591"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors"
                aria-label="Call Infatoz Technologies"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 7019058591</span>
              </a>

              <div className="hidden xl:block h-5 w-px bg-slate-200" aria-hidden="true" />

              <div className="hidden sm:block">
                <Button
                  onClick={() => openCalendly()}
                  variant="primary"
                  size="md"
                  className="font-bold tracking-wider uppercase text-xs shadow-sm rounded-sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Get a Consultation</span>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-slate-800 hover:text-blue-600 hover:bg-slate-100 border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors cursor-pointer"
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
