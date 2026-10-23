"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

interface CalendlyContextType {
  isOpen: boolean;
  activeUrl: string;
  openCalendly: (url?: string) => void;
  closeCalendly: () => void;
  isScheduled: boolean;
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/infatoz/30min";

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState(DEFAULT_CALENDLY_URL);
  const [isScheduled, setIsScheduled] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const openCalendly = useCallback((url?: string) => {
    // Record current active element to restore focus on close
    if (typeof document !== "undefined") {
      setTriggerElement(document.activeElement as HTMLElement);
    }
    setActiveUrl(url || DEFAULT_CALENDLY_URL);
    setIsOpen(true);
    setIsScheduled(false);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsOpen(false);
    // Restore focus back to the triggering element
    if (triggerElement && typeof triggerElement.focus === "function") {
      setTimeout(() => {
        triggerElement.focus();
      }, 50);
    }
  }, [triggerElement]);

  // Listen for official Calendly postMessage events
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Check if message is from Calendly
      if (e.origin.includes("calendly.com") && e.data) {
        if (e.data.event === "calendly.event_scheduled") {
          setIsScheduled(true);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <CalendlyContext.Provider
      value={{
        isOpen,
        activeUrl,
        openCalendly,
        closeCalendly,
        isScheduled,
      }}
    >
      {children}
      {isOpen && (
        <CalendlyModal
          url={activeUrl}
          onClose={closeCalendly}
          isScheduled={isScheduled}
        />
      )}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = (): CalendlyContextType => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};
