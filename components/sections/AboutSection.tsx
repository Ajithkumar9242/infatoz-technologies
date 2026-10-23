"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Cloud, Headphones, Award } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const AboutSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-100" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-3 w-1 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                About Infatoz Technologies
              </span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Innovative <span className="text-blue-600">IT Solutions</span> transforming how{" "}
              <span className="text-slate-900">businesses grow</span> through smart automation, data-driven decision-making, and seamless{" "}
              <span className="text-blue-600">digital integration.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At Infatoz Technologies, we build scalable software, web, and mobile solutions tailored to streamline operations, eliminate workflow friction, and accelerate business growth. Operating with delivery presence in Kundapura and Bengaluru, we combine agile engineering excellence with dedicated ongoing technical support.
            </p>

            {/* Strategic Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Custom Architecture Built For Scalability
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Business-Driven Agile Execution Sprints
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Continuous Telemetry & Production Monitoring
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Transparent Long-Term Engineering Partnership
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#why-choose-us" variant="secondary" size="md" className="rounded-sm font-bold uppercase tracking-wider text-xs px-6 py-3.5">
                <span>Know Who We Are</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button onClick={() => openCalendly()} variant="outline" size="md" className="rounded-sm font-bold uppercase tracking-wider text-xs px-6 py-3.5">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right Core Capabilities & Operational Pillars Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  Engineering Standards
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Core Operational Capabilities
                </h3>
              </div>

              {/* Capability 1: Proactive IT Support */}
              <div className="p-4 sm:p-5 rounded-sm bg-white border border-slate-200/90 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">Proactive IT Support</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Dedicated engineering leads providing continuous maintenance, routine updates, and direct technical escalation.
                </p>
              </div>

              {/* Capability 2: Cloud Infrastructure */}
              <div className="p-4 sm:p-5 rounded-sm bg-white border border-slate-200/90 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-sky-600" />
                  <h4 className="text-sm font-bold text-slate-900">Cloud Infrastructure Resilience</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Multi-cloud hosting and migration across AWS, Azure, and Google Cloud designed for high availability and zero unplanned downtime.
                </p>
              </div>

              {/* Capability 3: IT Security */}
              <div className="p-4 sm:p-5 rounded-sm bg-white border border-slate-200/90 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-sm font-bold text-slate-900">IT Security & Data Governance</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Role-based access control, encrypted data pipelines, and strict adherence to enterprise security best practices.
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-600 leading-relaxed">
                Source: Documented core service pillars of Infatoz Technologies across enterprise and institutional delivery engagements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
