"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/content/servicesData";
import { ArrowUpRight, Check, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCalendly } from "@/components/providers/CalendlyProvider";

const categories = ["All Capabilities", "Development", "Enterprise", "Design & Marketing", "Cloud & AI"] as const;

export const ServicesSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Capabilities");
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === "All Capabilities") return true;
    return service.category === selectedCategory;
  });

  const activeService: ServiceItem =
    servicesData.find((s) => s.id === activeServiceId) || filteredServices[0] || servicesData[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#060b1e] text-white relative overflow-hidden border-b border-slate-900" aria-labelledby="capabilities-heading">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tech Mahindra Capabilities Top Header with Verbatim Infatoz Copy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-400 uppercase">
                What We Do
              </span>
            </div>
            <h2 id="capabilities-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Solutions That Power <br />
              <span className="text-blue-400">Your Business</span>
            </h2>
          </div>

          <div className="lg:max-w-xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We help you run your business smoothly with tech that fits. From modern web & mobile applications to custom ERP systems, cloud infrastructure, and AI automation.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800" role="tablist" aria-label="Capabilities category filter">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => {
                setSelectedCategory(cat);
                const first = servicesData.find((s) => cat === "All Capabilities" || s.category === cat);
                if (first) setActiveServiceId(first.id);
              }}
              className={cn(
                "px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-sm transition-all cursor-pointer min-h-[44px]",
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md border border-blue-600"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Mahindra Interactive Split Capabilities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Interactive Capabilities List */}
          <div className="lg:col-span-5 space-y-1.5" role="tablist" aria-orientation="vertical">
            {filteredServices.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={cn(
                    "w-full text-left p-4 sm:p-5 rounded-sm transition-all duration-200 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    isActive
                      ? "bg-slate-900 border-l-4 border-blue-500 shadow-xl pl-6"
                      : "bg-slate-950/40 hover:bg-slate-900/60 border-l-4 border-transparent text-slate-400 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={cn("text-xs font-mono font-bold shrink-0", isActive ? "text-sky-400" : "text-slate-600")}>
                      {service.number}
                    </span>
                    <span className="text-sm sm:text-base font-bold truncate group-hover:text-white transition-colors">
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-200",
                      isActive ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Grand Capability Showcase Preview Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Dynamic Abstract Generative Graphic Pattern */}
              <div className="absolute top-0 right-0 w-72 h-72 opacity-25 pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <path
                    d="M10 190 C 80 120, 140 80, 190 10"
                    stroke="#0284c7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M30 190 C 95 130, 150 90, 195 25"
                    stroke="#0047ab"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M50 190 C 110 140, 160 100, 200 40"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Clean Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                    {activeService.number}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {activeService.category}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Infatoz Technology Service
                </span>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-6 tracking-tight">
                {activeService.title}
              </h3>

              {/* Authentic Verbatim Description from infatoz.com */}
              <p className="text-base text-slate-200 mt-4 leading-relaxed font-normal">
                {activeService.shortDescription}
              </p>

              {/* Key Deliverables Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Key Capabilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Tag Cloud */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Core Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 px-3 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => openCalendly()}
                  variant="primary"
                  size="md"
                  className="rounded-sm font-extrabold uppercase tracking-wider text-xs px-6 py-3 shadow-lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Get a Free Consultation</span>
                </Button>

                <a
                  href={activeService.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors px-3 py-2"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
