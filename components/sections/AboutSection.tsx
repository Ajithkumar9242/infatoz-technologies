"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Cloud, Headphones, MapPin } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const AboutSection: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/90" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                About Infatoz
              </span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Innovative <span className="text-blue-600">IT Solutions</span> are transforming how{" "}
              businesses grow by delivering <span className="text-blue-600">smart automation.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Innovative IT Solutions are transforming how businesses grow by delivering smart automation, data-driven decision-making, and seamless digital integration.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Building scalable software, web, and mobile solutions that help businesses grow, innovate, and succeed digitally. We combine engineering rigor with personalized support tailored to your exact business needs.
            </p>

            {/* Strategic Value Checklist (Open typography, no boxed cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Smart Automation & Digital Integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Scalable Web, Mobile & ERP Architecture
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Multi-Cloud Hosting & Proactive Security
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Continuous Support & Reliable Partnerships
                </span>
              </div>
            </div>

            {/* Verbatim CTAs from infatoz.com */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="#why-choose-us"
                variant="primary"
                size="md"
                className="rounded-sm font-extrabold uppercase tracking-wider text-xs px-8 py-3.5 shadow-md"
              >
                <span>Know Who we are</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => openCalendly()}
                variant="outline"
                size="md"
                className="rounded-sm font-extrabold uppercase tracking-wider text-xs px-8 py-3.5 border-2 border-slate-900"
              >
                <span>Book a Consultation</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Open Editorial Visual & Authentic Capability Meters (No Boxed Card Containers) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Stat 1: IT Support 92% */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      IT Support
                    </span>
                  </div>
                  <span className="text-lg font-black text-blue-600">92%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-none overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-none transition-all duration-1000" style={{ width: "92%" }} />
                </div>
                <p className="text-xs text-slate-600">
                  Dedicated assistance and proactive monitoring for uninterrupted business operations.
                </p>
              </div>

              {/* Stat 2: Cloud Support 95% */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-sky-600" />
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Cloud Support
                    </span>
                  </div>
                  <span className="text-lg font-black text-sky-600">95%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-none overflow-hidden">
                  <div className="h-full bg-sky-600 rounded-none transition-all duration-1000" style={{ width: "95%" }} />
                </div>
                <p className="text-xs text-slate-600">
                  Cloud hosting, migration, and infrastructure management across AWS, Azure, and GCP.
                </p>
              </div>

              {/* Stat 3: IT Security 90% */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      IT Security
                    </span>
                  </div>
                  <span className="text-lg font-black text-indigo-600">90%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-none overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-none transition-all duration-1000" style={{ width: "90%" }} />
                </div>
                <p className="text-xs text-slate-600">
                  Robust data management, role-based access security, and safe legacy-to-cloud migration.
                </p>
              </div>
            </div>

            {/* Delivery Presence Callout (Open border-l accent) */}
            <div className="border-l-2 border-slate-300 pl-4 py-2 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Dual Engineering Centers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating with active development presence in Bengaluru and Kundapura, Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
