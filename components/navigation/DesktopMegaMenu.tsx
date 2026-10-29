"use client";

import React, { useState, useRef, useEffect } from "react";
import { navigationData, NavMenu } from "@/content/navigationData";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const DesktopMegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  const handleBlur = (e: React.FocusEvent) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setActiveMenu(null);
    }
  };

  return (
    <nav
      ref={containerRef}
      onBlur={handleBlur}
      className="hidden lg:flex items-center gap-1 xl:gap-2"
      aria-label="Main Navigation"
    >
      {navigationData.map((menu: NavMenu) => {
        const hasGroups = menu.groups && menu.groups.length > 0;
        const isOpen = activeMenu === menu.title;

        if (!hasGroups) {
          return (
            <a
              key={menu.title}
              href={menu.href || "#"}
              className="px-2.5 2xl:px-3.5 py-2 text-xs 2xl:text-[13px] font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {menu.title}
            </a>
          );
        }

        const groups = menu.groups || [];

        return (
          <div
            key={menu.title}
            className="relative"
            onMouseEnter={() => setActiveMenu(menu.title)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(isOpen ? null : menu.title)}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={cn(
                "px-2.5 2xl:px-3.5 py-2 text-xs 2xl:text-[13px] font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer relative",
                isOpen
                  ? "text-slate-950 font-black"
                  : "text-slate-800 hover:text-blue-600"
              )}
            >
              <span>{menu.title}</span>
              {/* Tech Mahindra active underline */}
              {isOpen && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-slate-900" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                className={cn(
                  "fixed left-0 right-0 top-[73px] w-screen z-50 bg-white/98 backdrop-blur-md shadow-2xl border-t border-b border-slate-200 animate-in fade-in slide-in-from-top-1 duration-150"
                )}
                role="region"
                aria-label={`${menu.title} Submenu`}
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                  {menu.title === "Capabilities" ? (
                    <div>
                      {/* Top Row: Left Title + 3 Category Columns */}
                      <div className="grid grid-cols-12 gap-10">
                        {/* Left Column (25%): Large Bold Title */}
                        <div className="col-span-3 pr-6">
                          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Our Capabilities
                          </h3>
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            Full-lifecycle digital engineering, cloud resilience, and enterprise automation engineered for measurable impact.
                          </p>
                        </div>

                        {/* Right 3 Columns */}
                        <div className="col-span-9 grid grid-cols-3 gap-8">
                          {/* Col 1: Digital Development */}
                          <div className="space-y-4">
                            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                              Digital Development
                            </h4>
                            <ul className="space-y-2 text-sm" role="list">
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Web Design & CMS
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Custom Web Applications
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Mobile App Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  E-Commerce Systems
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Col 2: Enterprise & Cloud */}
                          <div className="space-y-4">
                            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                              Enterprise & Cloud
                            </h4>
                            <ul className="space-y-2 text-sm" role="list">
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  ERP & Business Automation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Cloud Development & DevOps
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Data Migration & Management
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  System Integration
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Col 3: AI & Design */}
                          <div className="space-y-4">
                            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                              AI & Innovation
                            </h4>
                            <ul className="space-y-2 text-sm" role="list">
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  AI & Process Automation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  UI/UX Design Systems
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Digital Growth Strategy
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#services"
                                  onClick={() => setActiveMenu(null)}
                                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors block py-0.5"
                                >
                                  Managed Technical Operations
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Row: Spotlight Matching Tech Mahindra */}
                      <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-12 gap-10 items-center">
                        <div className="col-span-3 pr-6">
                          <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Spotlight
                          </h4>
                        </div>
                        <div className="col-span-9 grid grid-cols-3 gap-8 text-sm">
                          <div>
                            <a
                              href="#case-studies"
                              onClick={() => setActiveMenu(null)}
                              className="font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                            >
                              Attendance Master Suite
                            </a>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Institutional attendance & access automation platform
                            </p>
                          </div>
                          <div>
                            <a
                              href="#about"
                              onClick={() => setActiveMenu(null)}
                              className="font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                            >
                              Idea to Impact™
                            </a>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Our enterprise engineering methodology
                            </p>
                          </div>
                          <div>
                            <a
                              href="#services"
                              onClick={() => setActiveMenu(null)}
                              className="font-bold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Other menus (About Us, Industries, Insights) */
                    <div className="grid grid-cols-12 gap-10">
                      <div className="col-span-3 pr-6">
                        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                          {menu.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          Enterprise technology consulting and agile digital solutions tailored to global business needs.
                        </p>
                      </div>
                      <div className="col-span-9 grid grid-cols-3 gap-8">
                        {groups.map((group) => (
                          <div key={group.title} className="space-y-4">
                            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                              {group.title}
                            </h4>
                            <ul className="space-y-2.5 text-sm" role="list">
                              {group.items.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="block group"
                                  >
                                    <span className="text-slate-700 group-hover:text-blue-600 font-semibold transition-colors block">
                                      {item.label}
                                    </span>
                                    {item.description && (
                                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
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
