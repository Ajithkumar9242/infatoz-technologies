"use client";

import React, { useState, useEffect } from "react";
import { testimonialsData, TestimonialItem } from "@/content/testimonialsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="testimonials" className="py-20 md:py-28 bg-slate-900 text-white border-b border-slate-800" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Client Endorsements"
            title="What Our Clients Say"
            highlightText="About Us"
            description="Authentic feedback and real-world partnership experiences from leadership teams utilizing Infatoz Technologies solutions."
            theme="dark"
          />

          {/* Minimalist Tech Mahindra Style Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0" aria-label="Testimonial Navigation">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-slate-400 px-3 select-none" aria-live="polite">
              {String(currentIndex + 1).padStart(2, "0")} / {String(testimonialsData.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Showcase */}
        <div
          className="relative rounded-sm bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden"
          aria-live="polite"
        >
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none" aria-hidden="true">
            <Quote className="w-32 h-32 text-blue-400" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* Rating Stars & Highlight */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400 bg-blue-500/10 px-3 py-1 rounded-sm border border-blue-500/20">
                {current.highlight}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Attribution */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-base sm:text-lg text-white">
                  {current.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  {current.role}, <strong className="text-white font-semibold">{current.organization}</strong>
                </p>
              </div>

              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                VERIFIED PARTNERSHIP
              </span>
            </div>
          </div>
        </div>

        {/* Client Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6" role="tablist" aria-label="Testimonial selector">
          {testimonialsData.map((item: TestimonialItem, idx: number) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={currentIndex === idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "p-4 min-h-[44px] rounded-sm border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                currentIndex === idx
                  ? "bg-slate-800 border-sky-500 shadow-md"
                  : "bg-slate-950 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
              )}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                {currentIndex === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                )}
              </div>
              <p className={cn("text-xs font-bold truncate", currentIndex === idx ? "text-sky-400" : "text-white")}>
                {item.name}
              </p>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">
                {item.organization}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
