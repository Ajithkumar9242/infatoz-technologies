import React from "react";
import { techEcosystemData } from "@/content/techEcosystemData";

export const TechEcosystem: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 py-16" aria-labelledby="tech-ecosystem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-none bg-sky-400" />
              <span>Technology Ecosystem</span>
            </div>
            <h2 id="tech-ecosystem-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Next-Generation Development Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed border-l-2 border-slate-700 pl-4">
            We architect solutions utilizing modern cloud, framework, and AI foundations for maximum speed, security, and enterprise scalability.
          </p>
        </div>

        {/* Clean Architectural Enterprise Grid of 10 Core Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {techEcosystemData.map((tech, idx) => (
            <div
              key={tech.name}
              className="group bg-slate-950 border border-slate-800 hover:border-sky-500/80 p-5 rounded-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-900">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">
                    {tech.badge}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  {tech.category}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {tech.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
