"use client";

import React, { useState, useEffect } from "react";
import { testimonialsData } from "@/content/testimonialsData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.getElementById("testimonials");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#060b1e] text-white border-b border-slate-900" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-400 uppercase">
                Testimonials
              </span>
            </div>
            <h2 id="testimonials-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal pt-1">
              Our clients share their experiences after using our IT solutions.
            </p>
          </div>

          {/* Minimalist Tech Mahindra Style Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0" aria-label="Testimonial Navigation">
            <span className="text-xs font-mono text-slate-400 select-none mr-2" aria-live="polite">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-colors border border-slate-800 cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-colors border border-slate-800 cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tech Mahindra Open Editorial Quote Presentation (Zero Boxed Cards, Open Surface) */}
        <div className="relative py-8 border-y border-slate-800/80" aria-live="polite">
          <div className="absolute top-0 right-4 opacity-10 pointer-events-none" aria-hidden="true">
            <Quote className="w-36 h-36 text-blue-400" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Verbatim Quotation in High-Contrast Editorial Typography */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 leading-relaxed tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Executive Attribution */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <cite className="not-italic text-lg sm:text-xl font-bold text-white block">
                  {current.name}
                </cite>
                <span className="text-sm text-slate-400 block mt-0.5">
                  {current.role}, {current.organization}
                </span>
              </div>

              <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
                Verified Client Collaboration
              </span>
            </div>
          </div>
        </div>

        {/* Client Selector Pills (Open Horizontal Navigation) */}
        <div className="mt-10 flex flex-wrap gap-3">
          {testimonialsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "px-4 py-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer border text-left",
                currentIndex === index
                  ? "bg-slate-900 text-white border-blue-500 shadow-sm"
                  : "bg-slate-950/60 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-900"
              )}
            >
              {item.organization}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
