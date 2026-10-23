import React from "react";
import { caseStudiesData, CaseStudyItem } from "@/content/caseStudiesData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, CheckCircle2, Building2, Cpu, Truck, ShoppingCart } from "lucide-react";

const industryIconMap: Record<string, React.ReactNode> = {
  "retail-cloud-integration": <ShoppingCart className="w-5 h-5 text-blue-600" />,
  "financial-system-modernization": <Building2 className="w-5 h-5 text-indigo-600" />,
  "manufacturing-it-support": <Cpu className="w-5 h-5 text-teal-600" />,
  "logistics-ai-automation": <Truck className="w-5 h-5 text-amber-600" />,
};

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Case Studies"
            title="Our Work Speaks"
            highlightText="For Itself"
            description="Proven results that show the power of smart technology — delivering scalable architectures and reliable business performance across critical industries."
          />
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700 bg-white px-4 py-2.5 rounded-sm border border-slate-200 shrink-0">
            Enterprise Solutions
          </div>
        </div>

        {/* 4 Case Studies Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((study: CaseStudyItem, idx: number) => (
            <article
              key={study.id}
              className="bg-white rounded-sm border border-slate-200 hover:border-blue-600 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Industry & Outcome Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {industryIconMap[study.id]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">CASE STUDY 0{idx + 1}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{study.outcomePillar}</span>
                  </span>
                </div>

                {/* Case Study Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Challenge & Solution Architecture */}
                <div className="mt-5 space-y-4 text-sm">
                  <div className="border-l-2 border-slate-200 pl-3.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-0.5">
                      Business Challenge
                    </span>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="border-l-2 border-blue-600 pl-3.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 block mb-0.5">
                      Implemented Architecture
                    </span>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                      {study.solution}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-sm bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                      Verified Business Impact
                    </span>
                    <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                      {study.outcomeSummary}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-sm border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire for Similar Solution</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">infatoz.com</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
