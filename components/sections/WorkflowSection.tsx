import React from "react";
import { workflowData, WorkflowStep } from "@/content/workflowData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Palette, Code, Rocket, RefreshCw, CheckCircle2 } from "lucide-react";

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
          <SectionHeading
            eyebrow="Our Engineering Methodology"
            title="A Structured 5-Step"
            highlightText="Delivery Journey"
            description="From initial architectural discovery to long-term cloud scaling, our proven engineering lifecycle guarantees predictable milestones, rigorous security, and zero downtime."
            align="center"
          />
        </div>

        {/* 5-Step Architectural Progression Layout */}
        <div className="relative">
          {/* Subtle connecting track line on large screens */}
          <div
            className="hidden lg:block absolute top-12 left-10 right-10 h-px bg-slate-200 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {workflowData.map((item: WorkflowStep, index: number) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:bg-white hover:border-blue-600 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                      {stepIconMap[item.step]}
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-200/60">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                    {item.duration}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-600 mt-0.5">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-700 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Activities */}
                  <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
                    {item.activities.slice(0, 2).map((act) => (
                      <div key={act} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
                  Phase {index + 1} of 5
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
