"use client";

import React from "react";
import { techEcosystemData } from "@/content/techEcosystemData";

export const TechEcosystem: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200/90 py-16 lg:py-24" aria-labelledby="tech-ecosystem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 tracking-[0.2em] uppercase">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none" />
              <span>Technology Stack</span>
            </div>
            <h2 id="tech-ecosystem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Next-Generation Development Technologies
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed border-l-2 border-slate-200 pl-4">
            We architect solutions utilizing modern cloud, framework, and AI foundations for maximum speed, security, and enterprise scalability.
          </p>
        </div>

        {/* Open Enterprise Hairline Capability Matrix (No Rounded Card Boxes, No Shadows) */}
        <div className="border-t border-l border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {techEcosystemData.map((tech) => (
            <div
              key={tech.name}
              className="border-r border-b border-slate-200 p-6 flex flex-col justify-between hover:bg-slate-50/80 transition-colors group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  {tech.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {tech.role}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                {tech.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
