"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/content/servicesData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Check, Code2, Globe, Smartphone, Database, ShoppingBag, Palette, TrendingUp, Sparkles, Cloud, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCalendly } from "@/components/providers/CalendlyProvider";

// Map service id to icon
const iconMap: Record<string, React.ReactNode> = {
  "web-design-cms": <Globe className="w-5 h-5 text-blue-600" />,
  "custom-web-app": <Code2 className="w-5 h-5 text-indigo-600" />,
  "mobile-app-development": <Smartphone className="w-5 h-5 text-sky-600" />,
  "erp-automation-systems": <Database className="w-5 h-5 text-teal-600" />,
  "ecommerce-development": <ShoppingBag className="w-5 h-5 text-amber-600" />,
  "ui-ux-design-branding": <Palette className="w-5 h-5 text-purple-600" />,
  "digital-marketing-growth": <TrendingUp className="w-5 h-5 text-rose-600" />,
  "ai-applications-automation": <Sparkles className="w-5 h-5 text-cyan-600" />,
  "cloud-dev-maintenance": <Cloud className="w-5 h-5 text-blue-600" />,
  "data-management-migration": <Database className="w-5 h-5 text-emerald-600" />,
};

const categories = ["All Capabilities", "Development", "Enterprise", "Design & Marketing", "Cloud & AI"] as const;

export const ServicesSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Capabilities");

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === "All Capabilities") return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What We Do"
            title="Solutions That Power"
            highlightText="Your Business"
            description="We help you run your business smoothly with tech that fits — from modern custom web and mobile applications to full-scale enterprise automation and cloud management."
          />

          {/* Consultation Fast-track */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => openCalendly()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-white bg-white hover:bg-slate-900 border border-slate-300 hover:border-slate-900 px-6 py-3 rounded-sm shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Discuss Your Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto" role="tablist" aria-label="Services filter">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2.5 min-h-[44px] inline-flex items-center rounded-sm text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer",
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm border border-slate-900"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-white rounded-sm border border-slate-200 hover:border-blue-600 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Header: Number & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[service.id]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-sm border border-slate-200/80">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Authentic Short Description */}
                <p className="text-sm text-slate-700 mt-2.5 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Core Deliverables list */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Key Deliverables
                  </span>
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Direct CTA Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={service.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-slate-500 font-medium">Enterprise Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
