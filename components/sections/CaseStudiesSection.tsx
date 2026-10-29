"use client";

import React, { useState, useEffect, useRef } from "react";
import { caseStudiesData, CaseStudyItem } from "@/content/caseStudiesData";
import { ArrowUpRight, ArrowRight, X, Calendar, Layers, CheckCircle2 } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const CaseStudiesSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Record<string, HTMLButtonElement | null>>({});

  // Keyboard navigation & Escape key support for accessible modal
  useEffect(() => {
    if (!selectedStudy) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus close button
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        const studyId = selectedStudy.id;
        setSelectedStudy(null);
        setTimeout(() => triggerRef.current[studyId]?.focus(), 50);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedStudy]);

  const handleClose = () => {
    const studyId = selectedStudy?.id;
    setSelectedStudy(null);
    if (studyId) {
      setTimeout(() => triggerRef.current[studyId]?.focus(), 50);
    }
  };

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-28 bg-white border-b border-slate-200/90"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Authentic Infatoz Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                Case Studies
              </span>
            </div>
            <h2
              id="case-studies-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]"
            >
              Our Work Speaks for Itself
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-normal pt-1">
              Proven results that show the power of smart technology.
            </p>
          </div>
        </div>

        {/* 4 Photographic Editorial Cards Matching Tech Mahindra Success Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudiesData.map((study, idx) => (
            <article
              key={study.id}
              className="group relative rounded-sm overflow-hidden aspect-[4/5] bg-slate-950 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300"
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

              {/* Bottom Text & Overview Trigger */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {study.outcomeSummary}
                </p>

                <div className="pt-2">
                  <button
                    ref={(el) => {
                      triggerRef.current[study.id] = el;
                    }}
                    type="button"
                    onClick={() => setSelectedStudy(study)}
                    aria-haspopup="dialog"
                    aria-label={`View overview for ${study.title}`}
                    className="w-full flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider group-hover:text-sky-400 transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>View Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md text-white group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
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
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Discuss Similar Architecture →
          </button>
        </div>
      </div>

      {/* Accessible Case Study Overview Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-sm shadow-2xl max-w-lg w-full z-10 border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header Strip */}
            <div className="bg-[#060b1e] text-white p-6 sm:p-7 relative">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-400 bg-white/10 px-2.5 py-0.5 rounded-sm border border-white/15">
                  {selectedStudy.industry}
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={handleClose}
                  aria-label="Close case study details"
                  className="p-1.5 text-slate-400 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3
                id="case-study-modal-title"
                className="text-2xl font-black text-white tracking-tight leading-tight"
              >
                {selectedStudy.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-6 text-slate-800">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Verified Outcome & Scope</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {selectedStudy.outcomeSummary}
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  <Layers className="w-4 h-4 text-slate-600" />
                  <span>Strategic Practice</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  Engineered under Infatoz digital systems, scalable cloud infrastructure, and modern software development practices.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    openCalendly();
                  }}
                  className="w-full sm:flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss Similar Solution</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto py-3 px-5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
