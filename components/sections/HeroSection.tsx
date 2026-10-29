"use client";

import React, { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

interface HeroSlide {
  tag: string;
  headline: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    tag: "Enterprise IT & Digital Engineering",
    headline: "Driving Business Growth Through Technology",
    subtitle: "Idea to Impact.",
    description:
      "We deliver secure, scalable, and future-ready digital solutions tailored to your business needs.",
    primaryCtaText: "Get a Free Consultation",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "What We Do",
    secondaryCtaHref: "#services",
  },
  {
    tag: "Solutions That Power Your Business",
    headline: "Web, Mobile & Enterprise ERP Automation",
    subtitle: "Tech That Fits Your Business.",
    description:
      "Custom web applications, high-performance Android & iOS mobile apps, and tailored ERP software to automate business processes such as inventory, billing, and accounting.",
    primaryCtaText: "Book a Consultation",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "Case Studies",
    secondaryCtaHref: "#case-studies",
  },
  {
    tag: "Built on Trust. Driven by Results.",
    headline: "Cloud Migration, AI & Digital Growth Services",
    subtitle: "End-to-End Technology Partnerships.",
    description:
      "From AI-powered automation and document processing to safe cloud migrations on AWS, Azure, and Google Cloud, we manage the entire digital lifecycle.",
    primaryCtaText: "Get In Touch",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "Why Choose Infatoz",
    secondaryCtaHref: "#why-choose-us",
  },
];

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServerSnapshot = () => false;

export const HeroSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const isKeyboardNavRef = useRef(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Distinguish keyboard navigation (Tab/Arrows) from pointer clicks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key.startsWith("Arrow")) {
        isKeyboardNavRef.current = true;
      }
    };

    const handlePointerDown = () => {
      isKeyboardNavRef.current = false;
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("pointerdown", handlePointerDown, { capture: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("pointerdown", handlePointerDown, { capture: true });
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay - advances every 7s when enabled, pauses on keyboard focus, explicit pause, or reduced-motion
  useEffect(() => {
    if (!isPlaying || hasKeyboardFocus || prefersReducedMotion) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, hasKeyboardFocus, prefersReducedMotion, nextSlide, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];

  const handleFocus = (e: React.FocusEvent) => {
    const target = e.target as HTMLElement | null;
    const isFocusVisible = target?.matches?.(":focus-visible");
    if (isKeyboardNavRef.current || isFocusVisible) {
      setHasKeyboardFocus(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    const nextFocused = e.relatedTarget as Node | null;
    if (!containerRef.current || !containerRef.current.contains(nextFocused)) {
      setHasKeyboardFocus(false);
    }
  };

  return (
    <section
      ref={containerRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-roledescription="carousel"
      aria-label="Enterprise Capabilities Showcase"
      className="relative overflow-hidden bg-[#04091c] text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-between border-b border-slate-900"
    >
      {/* Tech Mahindra Style Flowing Architectural Curved Waves Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0047ab" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#04091c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#003580" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#04091c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Sweeping Architectural Wave Ribbons */}
          <path
            d="M500 -100 C 850 50, 1100 250, 1500 200 L 1500 900 L 400 900 C 700 650, 800 450, 500 -100 Z"
            fill="url(#waveGrad1)"
          />
          <path
            d="M650 -50 C 950 150, 1150 380, 1550 350 L 1550 900 L 600 900 C 850 680, 950 480, 650 -50 Z"
            fill="url(#waveGrad2)"
          />
          <path
            d="M800 0 C 1050 200, 1250 450, 1600 480 L 1600 900 L 750 900 C 1000 700, 1100 520, 800 0 Z"
            fill="url(#waveGrad3)"
          />
          
          {/* Subtle Dynamic Concentric Arc Grooves matching Tech Mahindra */}
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M ${450 + i * 45} -80 C ${800 + i * 45} ${80 + i * 18}, ${1050 + i * 40} ${300 + i * 22}, ${1450 + i * 35} ${280 + i * 25}`}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04091c] via-[#04091c]/80 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#04091c] to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:py-20 lg:py-28 w-full z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeInOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  {slide.tag}
                </span>
              </div>

              {/* Display Headline matching Tech Mahindra */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  {slide.headline}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 tracking-tight pt-1">
                  {slide.subtitle}
                </p>
              </div>

              {/* Narrative Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                {slide.description}
              </p>

              {/* Tech Mahindra Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  onClick={() => {
                    if (slide.primaryCtaHref.includes("calendly")) {
                      openCalendly(slide.primaryCtaHref);
                    }
                  }}
                  href={slide.primaryCtaHref.includes("calendly") ? undefined : slide.primaryCtaHref}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm shadow-lg min-h-[48px]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{slide.primaryCtaText}</span>
                </Button>

                <Button
                  href={slide.secondaryCtaHref}
                  variant="outlineDark"
                  size="lg"
                  className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm border border-white/80 hover:bg-white hover:text-slate-900 transition-colors min-h-[48px]"
                >
                  <span>{slide.secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Mahindra Vertical Slide Dash Indicators on Right Margin */}
      <div
        className="hidden md:flex flex-col items-center gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-20"
        role="tablist"
        aria-label="Hero slide navigation"
      >
        {HERO_SLIDES.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Switch to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className="py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer group"
            >
              <span
                className={`block transition-all duration-300 ${
                  isActive
                    ? "w-8 h-[3px] bg-white"
                    : "w-5 h-[2px] bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Bottom Right Slide Controls (< and > arrows with slide number) */}
      <div className="absolute right-4 sm:right-10 bottom-4 sm:bottom-6 z-20 flex items-center gap-2 sm:gap-3 text-white/80 bg-[#04091c]/80 backdrop-blur-sm sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-sm">
        <span className="text-xs font-mono tracking-widest text-slate-400">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>

        <div className="flex items-center gap-1 border-l border-white/20 pl-3">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
