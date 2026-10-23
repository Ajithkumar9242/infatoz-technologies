"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navigationData } from "@/content/navigationData";
import { X, ChevronDown, Phone, Mail, Calendar, ArrowRight } from "lucide-react";
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
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "What We Do": true,
  });
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Digital Development": true,
  });
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open and manage focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button when opened
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

  // Handle ESC and Tab key cycling (Accessible Focus Trap)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArr = Array.from(focusables).filter(
          (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
        );

        if (focusableArr.length === 0) return;

        const first = focusableArr[0];
        const last = focusableArr[focusableArr.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
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

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
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
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <Link
            href="/"
            onClick={onClose}
            aria-label="Infatoz Technologies Homepage"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <InfatozLogo variant="dark" />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {navigationData.map((menu) => {
            const hasGroups = menu.groups && menu.groups.length > 0;
            const isExpanded = expandedSections[menu.title];

            if (!hasGroups) {
              return (
                <div key={menu.title} className="py-1">
                  <a
                    href={menu.href || "#"}
                    onClick={onClose}
                    className="flex items-center min-h-[44px] text-base font-semibold text-slate-800 hover:text-blue-600 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  >
                    {menu.title}
                  </a>
                </div>
              );
            }

            return (
              <div key={menu.title} className="border-b border-slate-100 pb-2">
                {/* Level 1 Navigation Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(menu.title)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between min-h-[44px] text-base font-bold text-slate-900 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {menu.title}
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {menu.groups?.length || 0} Domains
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      isExpanded && "rotate-180 text-blue-600"
                    )}
                  />
                </button>

                {/* Level 2 Categories (Nested Accordion) */}
                {isExpanded && (
                  <div className="pl-2 pr-1 pt-2 pb-3 space-y-2">
                    {menu.groups?.map((group) => {
                      const isGroupExpanded = !!expandedGroups[group.title];

                      return (
                        <div
                          key={group.title}
                          className="rounded-lg border border-slate-200/80 bg-slate-50/70 overflow-hidden"
                        >
                          {/* Level 2 Category Accordion Button */}
                          <button
                            type="button"
                            onClick={() => toggleGroup(group.title)}
                            aria-expanded={isGroupExpanded}
                            className="w-full flex items-center justify-between min-h-[44px] px-3 py-2 text-left text-sm font-bold text-slate-900 hover:text-blue-600 hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              {group.title}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-slate-500 font-medium">
                                {group.items.length}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "w-3.5 h-3.5 text-slate-500 transition-transform duration-200",
                                  isGroupExpanded && "rotate-180 text-blue-600"
                                )}
                              />
                            </div>
                          </button>

                          {/* Level 3 Child Service Links */}
                          {isGroupExpanded && (
                            <div className="px-2 py-1.5 bg-white border-t border-slate-200/60">
                              <ul className="space-y-0.5" role="list">
                                {group.items.map((item) => (
                                  <li key={item.label}>
                                    <a
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between min-h-[44px] py-2 px-2.5 text-sm text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                                    >
                                      <div className="pr-2">
                                        <div className="text-slate-900 font-semibold text-xs leading-snug">
                                          {item.label}
                                        </div>
                                        {item.description && (
                                          <div className="text-[11px] text-slate-500 font-normal leading-tight line-clamp-1">
                                            {item.description}
                                          </div>
                                        )}
                                      </div>
                                      {item.badge ? (
                                        <span className="shrink-0 text-[10px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                                          {item.badge}
                                        </span>
                                      ) : (
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                      )}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Contact & Consultation */}
          <div className="pt-4 space-y-3">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Direct Contact
            </div>
            <a
              href="tel:+917019058591"
              className="flex items-center gap-2.5 min-h-[44px] text-sm text-slate-800 hover:text-blue-600 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <span>+91 7019058591</span>
            </a>
            <a
              href="mailto:info@infatoz.com"
              className="flex items-center gap-2.5 min-h-[44px] text-sm text-slate-800 hover:text-blue-600 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <span>info@infatoz.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-2">
          <Button
            onClick={() => {
              onClose();
              openCalendly();
            }}
            className="w-full justify-center min-h-[44px]"
            size="lg"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Free Consultation
          </Button>
          <p className="text-center text-xs text-slate-600 font-medium">
            Secure, scalable, future-ready digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
