"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Layers, Target, Handshake, Check, ArrowRight, Play } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";
import { WhyChooseVideo } from "@/components/ui/WhyChooseVideo";

export const WhyChooseSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white border-b border-slate-100" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Why Choose Infatoz"
            title="Built on Trust."
            highlightText="Driven by Results."
            description="At Infatoz Technologies, we go beyond delivering projects — we build long-term technology partnerships that help businesses innovate, scale, and stay competitive in changing markets."
          />
          <div className="shrink-0">
            <a
              href="#infatoz-overview-video"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-white bg-white hover:bg-slate-900 border border-slate-300 hover:border-slate-900 px-6 py-3 rounded-sm shadow-sm transition-all"
            >
              <Play className="w-4 h-4 fill-current text-blue-600" />
              <span>Watch Video </span>
            </a>
          </div>
        </div>

        {/* 3 Core Editorial Pillars Inspired by Tech Mahindra Corporate Layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="rounded-sm border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-blue-600 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                End-to-End Expertise
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                We manage the entire digital lifecycle — from strategy and UI/UX design to modern cloud development and 24/7 technical support. This ensures a seamless, efficient, and scalable technology journey.
              </p>

              <ul className="pt-2 space-y-2 text-xs font-medium text-slate-700" role="list">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Strategic roadmap & architecture design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full-stack web, mobile, and ERP delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Multi-cloud management & security SLA</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Single Accountable Partner</span>
              <span className="text-blue-600">Unified Roadmap</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-sm border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-blue-600 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-lg group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                Business-Focused Solutions
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                Every solution is tailored to your business goals, operational workflows, and real industry challenges. We focus on delivering measurable commercial outcomes, not generic implementations.
              </p>

              <ul className="pt-2 space-y-2 text-xs font-medium text-slate-700" role="list">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Customized to organizational complexity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Tangible ROI & operational cost reductions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>User-centric design reducing friction</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Goal-Driven Metrics</span>
              <span className="text-sky-600">Zero Guesswork</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-sm border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-blue-600 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Handshake className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Reliable Delivery & Partnership
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                We follow structured processes to deliver high-quality solutions on time. Our team provides continuous support, regular follow-ups, and active improvements as your business expands.
              </p>

              <ul className="pt-2 space-y-2 text-xs font-medium text-slate-700" role="list">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Rigorous QA & zero-surprise delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Dedicated account managers & daily tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Long-term post-deployment maintenance</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Long-Term Reliability</span>
              <span className="text-indigo-600">Trusted Partnership</span>
            </div>
          </div>
        </div>

        {/* Official Infatoz Company Overview Video Showcase */}
        <div id="infatoz-overview-video" className="mt-14 scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Company Showcase
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                Infatoz Technologies in Action
              </h3>
            </div>
            {/* <span className="text-xs text-slate-500 font-medium">
              16:9 HD · Official YouTube Channel
            </span> */}
          </div>

          <WhyChooseVideo />
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-sm bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-md">
          <div>
            <h4 className="text-lg font-bold text-white">
              Ready to explore what modern technology can do for your organization?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with our technical leadership team for a no-obligation evaluation.
            </p>
          </div>
          <Button
            onClick={() => openCalendly()}
            variant="primary"
            size="md"
            className="shrink-0 font-semibold"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
