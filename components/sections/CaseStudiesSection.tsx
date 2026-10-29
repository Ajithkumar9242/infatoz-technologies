"use client";

import React, { useState } from "react";
import { caseStudiesData } from "@/content/caseStudiesData";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const CaseStudiesSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const prevStory = () => {
    setActiveStoryIdx((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextStory = () => {
    setActiveStoryIdx((prev) =>
      prev < caseStudiesData.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-slate-200/90" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Verbatim Infatoz Headings & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                Case Studies
              </span>
            </div>
            <h2 id="case-studies-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Our Work Speaks for Itself
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-normal pt-1">
              Proven results that show the power of smart technology.
            </p>
          </div>

          {/* Minimalist Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevStory}
              disabled={activeStoryIdx === 0}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-blue-600 disabled:opacity-40 disabled:hover:bg-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextStory}
              disabled={activeStoryIdx === caseStudiesData.length - 1}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-blue-600 disabled:opacity-40 disabled:hover:bg-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Photographic Editorial Cards Matching Tech Mahindra Success Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudiesData.map((study, idx) => (
            <article
              key={study.id}
              className="group relative rounded-sm overflow-hidden aspect-[4/5] bg-slate-950 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openCalendly()}
            >
              {/* Dynamic Gradient Backgrounds */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    idx === 0
                      ? `linear-gradient(180deg, rgba(6, 11, 30, 0.4) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #0284c7 0%, #060b1e 100%)`
                      : idx === 1
                      ? `linear-gradient(180deg, rgba(6, 11, 30, 0.4) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #0047ab 0%, #060b1e 100%)`
                      : idx === 2
                      ? `linear-gradient(180deg, rgba(6, 11, 30, 0.4) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #1e3a8a 0%, #020617 100%)`
                      : `linear-gradient(180deg, rgba(6, 11, 30, 0.4) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #0f172a 0%, #002b66 100%)`,
                }}
              />

              {/* Top Tag: Industry Name */}
              <div className="relative z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-400 bg-white/10 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                  {study.industry}
                </span>
              </div>

              {/* Bottom Text */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {study.outcomeSummary}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Clean Consultation Anchor Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Need a similar scalable solution tailored to your operational workflows?
            </h4>
            <p className="text-xs text-slate-600">
              Speak directly with our technical architecture team for feasibility assessment.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openCalendly()}
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            Discuss Similar Architecture →
          </button>
        </div>
      </div>
    </section>
  );
};
