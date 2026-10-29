"use client";

import React from "react";
import { insightsData } from "@/content/insightsData";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";

export const BlogInsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-slate-200/90" aria-labelledby="latest-thinking-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Mahindra Latest Thinking Top Header with Verbatim Infatoz Copy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                Insights
              </span>
            </div>
            <h2 id="latest-thinking-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Latest Blog & News
            </h2>
          </div>

          <div className="lg:max-w-xl">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Stay informed with the latest IT trends, tips, and industry news.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Photographic Grid matching Tech Mahindra */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Large Card (Left 7 Cols) */}
          {insightsData[0] && (
            <article
              key={insightsData[0].id}
              className="lg:col-span-7 relative min-h-[440px] rounded-sm overflow-hidden flex flex-col justify-between p-7 sm:p-9 shadow-lg group hover:shadow-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(6, 11, 30, 0.25) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #060b1e 0%, #0047ab 100%)",
              }}
            >
              {/* Top Tags */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-extrabold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-sm border border-white/25">
                  {insightsData[0].category}
                </span>
                <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {insightsData[0].readTime}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-3 pt-24">
                <span className="text-xs font-mono text-slate-400">
                  {insightsData[0].publishDate}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors leading-tight">
                  {insightsData[0].title}
                </h3>
                <p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {insightsData[0].excerpt}
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <a
                    href={insightsData[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white group-hover:text-sky-300 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Right Stacked Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {insightsData.slice(1, 3).map((item) => (
              <article
                key={item.id}
                className="flex-1 relative min-h-[200px] rounded-sm overflow-hidden flex flex-col justify-between p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 group"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6, 11, 30, 0.4) 0%, rgba(6, 11, 30, 0.95) 100%), linear-gradient(135deg, #0a1128 0%, #1e3a8a 100%)",
                }}
              >
                {/* Top Tags */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-sm border border-white/20">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 pt-6">
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.publishDate}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-400 uppercase tracking-wider group-hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Section Footer Link */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            Published by Infatoz Technologies Editorial Team
          </p>
          <a
            href="https://infatoz.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
