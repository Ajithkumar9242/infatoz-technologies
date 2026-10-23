import React from "react";
import {
  Code2,
  Cloud,
  Smartphone,
  Cpu,
  ShieldCheck,
  Palette,
  Server,
  Zap,
  Layers,
} from "lucide-react";

const TICKER_ITEMS = [
  { icon: Code2, label: "Custom Web Applications" },
  { icon: Cloud, label: "Cloud Infrastructure & Migration" },
  { icon: Layers, label: "Enterprise ERP & Automation" },
  { icon: Smartphone, label: "Mobile Apps (iOS & Android)" },
  { icon: Cpu, label: "AI & Machine Learning Solutions" },
  { icon: ShieldCheck, label: "Cybersecurity & Governance" },
  { icon: Palette, label: "UI/UX Product Design" },
  { icon: Server, label: "API & Microservices Architecture" },
  { icon: Zap, label: "24/7 Proactive Managed IT" },
];

export const ServicesTicker: React.FC = () => {
  return (
    <section
      aria-label="Capabilities Ticker"
      className="relative w-full max-w-full overflow-hidden bg-slate-900 border-b border-slate-800 py-3.5 select-none"
    >
      <span className="sr-only">
        Core Capabilities: Custom Web Applications, Cloud Infrastructure, Enterprise ERP, Mobile Apps, AI & Machine Learning, Cybersecurity, UI/UX Design, Microservices, 24/7 Managed IT.
      </span>

      {/* Left/Right Gradient Fades */}
      <div
        className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-full overflow-hidden flex">
        <div className="flex animate-marquee shrink-0">
        {/* Set 1 */}
        <div className="flex items-center gap-8 px-4 shrink-0" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`set1-${idx}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span className="p-1 rounded-md bg-blue-500/10 text-sky-400">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span>{item.label}</span>
                <span className="text-slate-600 font-bold ml-4">·</span>
              </div>
            );
          })}
        </div>

        {/* Set 2 (for seamless loop) */}
        <div className="flex items-center gap-8 px-4 shrink-0" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`set2-${idx}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span className="p-1 rounded-md bg-blue-500/10 text-sky-400">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span>{item.label}</span>
                <span className="text-slate-600 font-bold ml-4">·</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
};
