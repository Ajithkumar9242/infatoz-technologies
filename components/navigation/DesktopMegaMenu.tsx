"use client";

import React, { useState, useRef, useEffect } from "react";
import { navigationData, NavMenu } from "@/content/navigationData";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const DesktopMegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle focus leaving container
  const handleBlur = (e: React.FocusEvent) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setActiveMenu(null);
    }
  };

  return (
    <nav
      ref={containerRef}
      onBlur={handleBlur}
      className="hidden lg:flex items-center gap-1"
      aria-label="Main Navigation"
    >
      {navigationData.map((menu: NavMenu) => {
        const hasGroups = menu.groups && menu.groups.length > 0;
        const isOpen = activeMenu === menu.title;
        const isMega = menu.title === "What We Do";

        if (!hasGroups) {
          return (
            <a
              key={menu.title}
              href={menu.href || "#"}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {menu.title}
            </a>
          );
        }

        const groups = menu.groups || [];
        const currentGroup = groups[activeGroupIndex] || groups[0];

        return (
          <div
            key={menu.title}
            className="relative"
            onMouseEnter={() => {
              setActiveMenu(menu.title);
              if (isMega) setActiveGroupIndex(0);
            }}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              type="button"
              onClick={() => {
                if (isOpen) {
                  setActiveMenu(null);
                } else {
                  setActiveMenu(menu.title);
                  if (isMega) setActiveGroupIndex(0);
                }
              }}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={cn(
                "px-4 py-2 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer",
                isOpen
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-800 hover:text-blue-600 border-b-2 border-transparent"
              )}
            >
              <span>{menu.title}</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200 text-slate-400",
                  isOpen && "rotate-180 text-blue-600"
                )}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                className={cn(
                  "absolute top-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150",
                  isMega
                    ? "left-0 w-[640px] max-w-[calc(100vw-2rem)]"
                    : "left-0 w-[320px] max-w-[90vw]"
                )}
                role="region"
                aria-label={`${menu.title} Submenu`}
              >
                <div className="bg-white rounded-none sm:rounded-sm shadow-2xl border border-slate-200 overflow-hidden">
                  {isMega ? (
                    <div>
                      {/* Nested Master-Detail Panel */}
                      <div className="grid grid-cols-12 divide-x divide-slate-100">
                        {/* Level 2: Left Category Master List */}
                        <div
                          className="col-span-5 p-3 space-y-1 bg-slate-50/60"
                          role="tablist"
                          aria-label="Service categories"
                        >
                          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Service Categories
                          </div>
                          {groups.map((group, idx) => {
                            const isSelected = activeGroupIndex === idx;
                            return (
                              <button
                                key={group.title}
                                type="button"
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`category-panel-${idx}`}
                                onMouseEnter={() => setActiveGroupIndex(idx)}
                                onClick={() => setActiveGroupIndex(idx)}
                                onFocus={() => setActiveGroupIndex(idx)}
                                className={cn(
                                  "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                                  isSelected
                                    ? "bg-white text-blue-700 shadow-sm border border-slate-200/80 font-bold"
                                    : "text-slate-700 hover:text-slate-900 hover:bg-white/70"
                                )}
                              >
                                <span>{group.title}</span>
                                <ArrowRight
                                  className={cn(
                                    "w-3.5 h-3.5 transition-transform",
                                    isSelected
                                      ? "text-blue-600 translate-x-0.5"
                                      : "text-slate-300"
                                  )}
                                />
                              </button>
                            );
                          })}
                        </div>

                        {/* Level 3: Right Child Links Detail Panel */}
                        <div
                          id={`category-panel-${activeGroupIndex}`}
                          role="tabpanel"
                          className="col-span-7 p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                {currentGroup.title}
                              </h4>
                              <span className="text-[11px] font-medium text-slate-600">
                                {currentGroup.items.length} Offerings
                              </span>
                            </div>

                            <ul className="space-y-1.5" role="list">
                              {currentGroup.items.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-blue-50/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                                        {item.label}
                                      </span>
                                    </div>
                                    {item.badge ? (
                                      <span className="text-[10px] font-bold text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                                        {item.badge}
                                      </span>
                                    ) : (
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Detail Panel Footer */}
                          <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-slate-600 font-medium">Enterprise Solutions</span>
                            <a
                              href="#services"
                              onClick={() => setActiveMenu(null)}
                              className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Dropdown for Who We Are / Insights */
                    <div className="space-y-4">
                      {menu.groups?.map((group) => (
                        <div key={group.title}>
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 pb-1 border-b border-slate-100">
                            {group.title}
                          </h4>
                          <ul className="space-y-1" role="list">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.label}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-slate-600 mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
