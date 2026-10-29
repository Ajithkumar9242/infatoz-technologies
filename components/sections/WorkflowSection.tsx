import React from "react";
import { workflowData, WorkflowStep } from "@/content/workflowData";
import { Compass, Palette, Code, Rocket, RefreshCw } from "lucide-react";

const stepIconMap: Record<string, React.ReactNode> = {
  "01": <Compass className="w-5 h-5 text-blue-600" />,
  "02": <Palette className="w-5 h-5 text-sky-600" />,
  "03": <Code className="w-5 h-5 text-indigo-600" />,
  "04": <Rocket className="w-5 h-5 text-emerald-600" />,
  "05": <RefreshCw className="w-5 h-5 text-purple-600" />,
};

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-white border-b border-slate-100" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
              Our Process
            </span>
          </div>
          <h2 id="workflow-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Our Workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured, reliable delivery process ensuring high-quality software, transparent communication, and continuous support.
          </p>
        </div>

        {/* Tech Mahindra Connected Process Flow (Open Timeline Layout, Zero Boxed Cards) */}
        <div className="relative">
          {/* Subtle connecting track line on large screens */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-slate-200 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {workflowData.map((item: WorkflowStep) => (
              <div
                key={item.step}
                className="flex flex-col space-y-4 relative group"
              >
                {/* Step Marker: Icon + Connected Numerals */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-sm bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-blue-600 group-hover:shadow-md transition-all">
                    {stepIconMap[item.step]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-blue-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Step Name & Verbatim Description from infatoz.com */}
                <div className="space-y-2 pt-1 border-t lg:border-t-0 border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
