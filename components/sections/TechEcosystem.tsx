"use client";

import React from "react";
import { techEcosystemGroups, TechGroup } from "@/content/techEcosystemData";
import { Cloud, Smartphone, Server, Cpu } from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  "Cloud and DevOps": <Cloud className="w-4 h-4 text-blue-600" />,
  "Frontend and Mobile": <Smartphone className="w-4 h-4 text-sky-600" />,
  "Backend and ERP": <Server className="w-4 h-4 text-indigo-600" />,
  "Data and AI": <Cpu className="w-4 h-4 text-purple-600" />,
};

export const TechEcosystem: React.FC = () => {
  return (
    <section
      className="bg-white border-b border-slate-200/90 py-16 lg:py-24"
      aria-labelledby="tech-ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 tracking-[0.2em] uppercase">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span>Technology Stack</span>
            </div>
            <h2
              id="tech-ecosystem-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Next-Generation Development Technologies
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed border-l-2 border-slate-200 pl-4">
            We architect solutions utilizing modern cloud, framework, and AI foundations for maximum speed, security, and enterprise scalability.
          </p>
        </div>

        {/* 4-Domain Open Enterprise Hairline Capability Matrix */}
        <div className="border-t border-l border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {techEcosystemGroups.map((group: TechGroup) => (
            <div
              key={group.name}
              className="border-r border-b border-slate-200 flex flex-col justify-between bg-white"
            >
              {/* Domain Header */}
              <div className="p-6 bg-slate-50/70 border-b border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  {categoryIconMap[group.name]}
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                    {group.name}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Technologies within Domain */}
              <div className="divide-y divide-slate-100 flex-1 flex flex-col">
                {group.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-6 flex flex-col justify-between flex-1 hover:bg-slate-50/80 transition-colors group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {tech.role}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {tech.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
