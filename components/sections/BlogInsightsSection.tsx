import React from "react";
import { insightsData, InsightArticle } from "@/content/insightsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export const BlogInsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Editorial & Insights"
            title="Latest Tech Perspectives"
            highlightText="& News"
            description="Stay informed with expert analysis on digital transformation, cloud scaling, enterprise ERP automation, and emerging AI technologies."
          />

          <a
            href="https://infatoz.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:text-white bg-white hover:bg-slate-900 border border-slate-300 hover:border-slate-900 px-5 py-2.5 rounded-sm shadow-sm transition-all shrink-0"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article: InsightArticle, idx: number) => (
            <article
              key={article.id}
              className="bg-white rounded-sm border border-slate-200 hover:border-blue-600 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Header & Category */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-200/60">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 block mb-1">
                    INSIGHT 0{idx + 1}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>

                  <p className="text-xs text-slate-700 mt-2.5 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishDate}
                </span>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  aria-label={`Read ${article.title}`}
                >
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
