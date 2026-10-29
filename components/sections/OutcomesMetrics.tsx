"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Headphones, Cloud, Award } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const OutcomesMetrics: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <section className="bg-[#fbfbfa] py-20 lg:py-28 border-b border-slate-200/90 relative overflow-hidden bg-techm-watermark" aria-labelledby="scale-at-speed-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Half: Split Editorial Hero Transition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                Brand Promise & Strategic Partnership
              </span>
            </div>

            <h2 id="scale-at-speed-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Scale at Speed <br />
              <span className="text-blue-600">with Infatoz Technologies</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
              At Infatoz Technologies, we go beyond delivering projects — we build long-term technology partnerships that help businesses innovate, scale, and stay competitive with tech that fits.
            </p>

            {/* Tech Mahindra Dual Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => openCalendly()}
                variant="primary"
                size="md"
                className="font-extrabold uppercase tracking-wider text-xs px-8 py-3.5 rounded-sm shadow-md min-h-[46px]"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="#about"
                variant="outline"
                size="md"
                className="font-extrabold uppercase tracking-wider text-xs px-8 py-3.5 rounded-sm border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors min-h-[46px]"
              >
                <span>About Infatoz</span>
              </Button>
            </div>
          </div>

          {/* Right Visual Composition: Open High-Velocity Engineering Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-slate-200/90 bg-slate-950 aspect-[16/10] group">
              {/* Dynamic Engineering Velocity Visual */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `radial-gradient(circle at 70% 30%, rgba(2, 132, 199, 0.35) 0%, transparent 60%), linear-gradient(135deg, #060b1e 0%, #002b66 50%, #001233 100%)`,
                }}
              />

              {/* Sweeping High-Speed Vector Lines matching Tech Mahindra Velocity Visual */}
              <svg
                className="absolute inset-0 w-full h-full opacity-80"
                viewBox="0 0 600 375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 320 C 150 280, 300 120, 600 80"
                  stroke="rgba(56, 189, 248, 0.7)"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                />
                <path
                  d="M-50 350 C 200 310, 350 150, 650 110"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M50 375 C 250 330, 400 180, 700 140"
                  stroke="rgba(0, 71, 171, 0.9)"
                  strokeWidth="4"
                />
                <path
                  d="M100 375 C 300 340, 450 210, 750 170"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="2"
                />
              </svg>

              {/* Clean Editorial Caption (No artificial monospace telemetry tags) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    Enterprise Engineering Standards
                  </span>
                  <span className="text-[11px] text-slate-300">
                    High-performance digital platforms tailored to business needs
                  </span>
                </div>
                <span className="text-xs font-bold text-sky-400">
                  Idea to Impact™
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half: 4 Clean Verified Quantitative Proof Points (Open Layout, No Card Boxes) */}
        <div className="mt-16 pt-12 border-t border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2 border-l-2 border-blue-600 pl-4">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-blue-600" />
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                92%
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              IT Support
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated engineering support, continuous maintenance, and responsive escalation pathways.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-blue-600 pl-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-blue-600" />
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                95%
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Cloud Support
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Multi-cloud hosting, seamless migration, and maintenance across AWS, Azure, and Google Cloud.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-blue-600 pl-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                90%
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              IT Security
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Role-based access control, encrypted data pipelines, and strict adherence to enterprise security.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-blue-600 pl-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                40+
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Projects Completed
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scalable web applications, mobile platforms, and custom ERP systems successfully delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
