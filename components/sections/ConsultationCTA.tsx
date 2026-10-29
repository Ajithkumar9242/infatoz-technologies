"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const ConsultationCTA: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <section id="consultation" className="py-20 md:py-28 bg-[#04091c] text-white relative overflow-hidden border-b border-slate-900" aria-labelledby="consultation-heading">
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-none shrink-0" aria-hidden="true" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-blue-400 uppercase">
              Are You Ready?
            </span>
          </div>

          <h2 id="consultation-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
            Start Your IT Journey with Us Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Get expert guidance and reliable services to move your business forward. We help you make confident technology decisions that fit your goals.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => openCalendly()}
              variant="primary"
              size="lg"
              className="px-8 min-h-[48px] shadow-xl text-white font-extrabold tracking-wider uppercase text-xs rounded-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book a Consultation</span>
            </Button>

            <Button
              href="#contact"
              variant="outlineDark"
              size="lg"
              className="px-8 min-h-[48px] border border-white/80 text-white hover:border-white hover:bg-white hover:text-slate-900 font-extrabold tracking-wider uppercase text-xs rounded-sm transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
