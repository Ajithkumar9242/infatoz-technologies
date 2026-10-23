"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ExternalLink, Loader2, AlertCircle, CheckCircle2, Mail, Calendar } from "lucide-react";

interface CalendlyModalProps {
  url: string;
  onClose: () => void;
  isScheduled: boolean;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ url, onClose, isScheduled }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Construct official embed URL with embed_type and domain parameter
  const embedUrl = React.useMemo(() => {
    try {
      const parsed = new URL(url);
      parsed.searchParams.set("embed_type", "Inline");
      if (typeof window !== "undefined") {
        parsed.searchParams.set("embed_domain", window.location.hostname);
      }
      return parsed.toString();
    } catch {
      return url;
    }
  }, [url]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Trap focus & Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Focus the close button initially
    closeButtonRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Restrained loading timeout: If iframe doesn't finish within 8 seconds, offer fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasTimedOut(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl max-h-[94vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden text-slate-900"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 id="calendly-modal-heading" className="text-sm sm:text-base font-bold text-slate-900">
                Schedule Technical Consultation
              </h2>
              <p className="text-xs text-slate-500 hidden sm:block">
                Infatoz Technologies · 30-Minute Architecture & Engineering Scoping
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Open scheduling page in external tab"
            >
              <span>Direct Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close consultation modal"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Confirmed Booking Banner (Appears ONLY when Calendly emits event_scheduled) */}
        {isScheduled && (
          <div className="px-6 py-3.5 bg-emerald-50 border-b border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Consultation confirmed! Calendly has dispatched meeting invitations to your email.</span>
          </div>
        )}

        {/* Modal Content & Embed Area */}
        <div className="flex-1 relative overflow-y-auto min-h-[520px] sm:min-h-[640px] bg-slate-50">
          {/* Loading Indicator */}
          {isLoading && !hasTimedOut && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-white/90 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800">Connecting to Infatoz Scheduling Calendar...</p>
                <p className="text-xs text-slate-500">Loading verified consultation slots</p>
              </div>
            </div>
          )}

          {/* Timeout Fallback Alert */}
          {hasTimedOut && isLoading && (
            <div className="absolute inset-x-4 top-4 z-20 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Scheduling calendar connection is taking longer than expected.</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                If the embedded widget does not render, you can open our verified Calendly booking page directly or reach our engineering team via email.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Calendly in New Tab</span>
                </a>
                <a
                  href="mailto:info@infatoz.com?subject=Technical%20Consultation%20Inquiry"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>Email info@infatoz.com</span>
                </a>
              </div>
            </div>
          )}

          {/* Calendly Inline Embed */}
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            className="w-full h-[520px] sm:h-[640px] border-0"
            title="Infatoz Technologies Consultation Scheduling"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 border-t border-slate-100 bg-white flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>Powered by Calendly & Infatoz Technologies</span>
          <div className="flex items-center gap-3">
            <a href="tel:+917019058591" className="hover:text-blue-600 transition-colors">
              Phone: +91 7019058591
            </a>
            <span>·</span>
            <a href="mailto:info@infatoz.com" className="hover:text-blue-600 transition-colors">
              info@infatoz.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
