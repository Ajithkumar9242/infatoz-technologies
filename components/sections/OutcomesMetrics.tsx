import React from "react";
import { Layers, Briefcase, Handshake, Clock } from "lucide-react";

export const OutcomesMetrics: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 border-b border-slate-800" aria-label="Core Operational Value Propositions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Proposition 1 */}
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-sm flex flex-col justify-between hover:border-sky-500/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                <span className="text-xs font-mono font-bold text-sky-400">01</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Strategy to Scale
                </span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                End-to-End Delivery
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Full lifecycle management encompassing discovery, UI/UX design, custom full-stack coding, and continuous cloud deployment.
              </p>
            </div>
          </div>

          {/* Proposition 2 */}
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-sm flex flex-col justify-between hover:border-sky-500/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                <span className="text-xs font-mono font-bold text-sky-400">02</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Industry Aligned
                </span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Multi-Sector Solutions
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Tailored architectures for Education, Retail, BFSI, Manufacturing, and Logistics aligned with regulatory and business needs.
              </p>
            </div>
          </div>

          {/* Proposition 3 */}
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-sm flex flex-col justify-between hover:border-sky-500/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                <span className="text-xs font-mono font-bold text-sky-400">03</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Transparent Execution
                </span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Dedicated Partnership
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Continuous follow-ups, daily progress updates, and dedicated technical leadership delivering reliable solutions.
              </p>
            </div>
          </div>

          {/* Proposition 4 */}
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-sm flex flex-col justify-between hover:border-sky-500/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900">
                <span className="text-xs font-mono font-bold text-sky-400">04</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  High Availability
                </span>
              </div>
              <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                24/7 Operations Support
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Proactive infrastructure monitoring, SLA-backed response times, and ongoing platform maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
