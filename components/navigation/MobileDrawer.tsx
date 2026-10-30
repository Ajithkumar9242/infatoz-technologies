"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navigationData } from "@/content/navigationData";
import { X, ChevronDown, Calendar } from "lucide-react";
import { InfatozLogo } from "@/components/ui/InfatozLogo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

import { useCalendly } from "@/components/providers/CalendlyProvider";

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { openCalendly } = useCalendly();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open and manage focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200"
      >
        {/* Top Header matching Tech Mahindra Mobile */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <Link
            href="/"
            onClick={onClose}
            aria-label="Infatoz Technologies Homepage"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <InfatozLogo variant="dark" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="#services"
              onClick={onClose}
              className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 rounded-sm hover:bg-blue-100 transition-colors"
              aria-label="Explore Capabilities"
            >
              Capabilities
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-6 py-2 divide-y divide-slate-100">
          {navigationData.map((menu) => {
            const hasGroups = menu.groups && menu.groups.length > 0;
            const isExpanded = !!expandedSections[menu.title];

            if (!hasGroups) {
              return (
                <div key={menu.title} className="py-3">
                  <a
                    href={menu.href || "#"}
                    onClick={onClose}
                    className="flex items-center justify-between text-sm font-extrabold uppercase tracking-wider text-slate-900 hover:text-blue-600 py-1 transition-colors"
                  >
                    <span>{menu.title}</span>
                  </a>
                </div>
              );
            }

            return (
              <div key={menu.title} className="py-3">
                <button
                  type="button"
                  onClick={() => toggleSection(menu.title)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between text-sm font-extrabold uppercase tracking-wider text-slate-900 hover:text-blue-600 py-1 text-left cursor-pointer"
                >
                  <span>{menu.title}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      isExpanded ? "rotate-180 text-blue-600" : "-rotate-90"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="pt-3 pb-2 pl-3 space-y-4 animate-in fade-in">
                    {menu.groups?.map((group) => (
                      <div key={group.title} className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          {group.title}
                        </span>
                        <ul className="space-y-2" role="list">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={onClose}
                                className="block py-1 text-sm font-medium text-slate-700 hover:text-blue-600"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-6 border-t border-slate-100 bg-white space-y-4">
          <Button
            onClick={() => {
              onClose();
              openCalendly();
            }}
            variant="primary"
            className="w-full justify-center min-h-[48px] uppercase font-bold text-xs tracking-wider rounded-sm"
            size="lg"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Get a Consultation
          </Button>

          {/* Region / Language Pill */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                <path strokeWidth="1.8" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              <span>English (Global)</span>
            </span>
            <span className="text-slate-400">^</span>
          </div>
        </div>
      </div>
    </div>
  );
};
