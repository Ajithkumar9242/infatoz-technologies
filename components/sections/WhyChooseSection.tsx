"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers, Target, Handshake } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";
import { WhyChooseVideo } from "@/components/ui/WhyChooseVideo";

const STRATEGIC_PILLARS = [
  {
    number: "01",
    title: "End-to-End Expertise",
    icon: Layers,
    description:
      "We manage the entire digital lifecycle — from strategy and design to development and ongoing support. This ensures a seamless, efficient, and scalable technology journey.",
  },
  {
    number: "02",
    title: "Business-Focused Solutions",
    icon: Target,
    description:
      "Every solution is tailored to your goals, workflows, and real business challenges. We focus on delivering measurable outcomes, not generic implementations.",
  },
  {
    number: "03",
    title: "Reliable Delivery & Long-Term Partnership",
    icon: Handshake,
    description:
      "We follow structured processes to deliver high-quality solutions on time. Our team provides continuous support and improvements as your business grows.",
  },
];

const INDUSTRIES_LIST = [
  "Financial Services & BFSI",
  "Retail & E-Commerce",
  "Manufacturing & Logistics",
  "Healthcare & Life Sciences",
  "Education & EdTech",
];

export const WhyChooseSection: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#fbfbfa] border-b border-slate-200/90 bg-techm-stripes" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Authentic Infatoz Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                Why Choose Infatoz Technologies
              </span>
            </div>
            <h2 id="why-choose-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Built on Trust. <br />
              <span className="text-blue-600">Driven by Results.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal pt-1">
              At Infatoz Technologies, we go beyond delivering projects — we build long-term technology partnerships that help businesses innovate, scale, and stay competitive.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button
              onClick={() => openCalendly()}
              variant="primary"
              size="md"
              className="font-extrabold uppercase tracking-wider text-xs px-8 py-3.5 rounded-sm shadow-md min-h-[46px]"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Tech Mahindra Open Split Composition: Video Showcase (Left) + 3 Editorial Pillars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Company Video Showcase */}
          <div className="lg:col-span-6">
            <WhyChooseVideo />
          </div>

          {/* Right Column (6 cols): 3 Strategic Pillars (Open Editorial Points, No Heavy Boxed Cards) */}
          <div className="lg:col-span-6 space-y-8 divide-y divide-slate-200">
            {STRATEGIC_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.number} className={idx > 0 ? "pt-8" : ""}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 text-blue-600 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-600">
                          {pillar.number}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Industry Expertise Strip (Open Horizontal Layout, No Floating Cards) */}
        <div className="mt-16 pt-10 border-t border-slate-200/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              Cross-Industry Impact:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {INDUSTRIES_LIST.map((ind) => (
                <span
                  key={ind}
                  className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-sm"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
