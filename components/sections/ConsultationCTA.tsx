"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const ConsultationCTA: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <section id="consultation" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800" aria-labelledby="consultation-heading">
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-bold tracking-widest uppercase">
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2 id="consultation-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            Start Your IT Journey with Us Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance, clear architectural feasibility reviews, and reliable engineering execution to move your business forward with confidence.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => openCalendly()}
              variant="white"
              size="lg"
              className="px-8 min-h-[50px] shadow-xl text-slate-900 font-bold tracking-wider uppercase text-xs rounded-sm"
            >
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              <span>Book a Free Consultation</span>
            </Button>

            <Button
              href="#contact"
              variant="outlineDark"
              size="lg"
              className="px-8 min-h-[50px] border border-slate-700 text-white hover:border-white hover:bg-white/10 font-bold tracking-wider uppercase text-xs rounded-sm"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Quick Assurance Badges */}
          <div className="pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Confidential NDA Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>30-Minute Architectural Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Direct Discussion with Tech Leads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
