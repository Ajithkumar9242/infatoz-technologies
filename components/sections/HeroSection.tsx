"use client";

import React, { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Layers,
  Smartphone,
  Server,
  Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

interface SlideData {
  tag: string;
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  badges: Array<{ icon: React.ComponentType<{ className?: string }>; text: string }>;
  panelBadge: string;
  panelHeader: string;
  panelItems: Array<{
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    tag: string;
    tagColor: string;
    desc: string;
  }>;
  locationLabel: string;
}

const SLIDES: SlideData[] = [
  {
    tag: "Enterprise IT & Digital Engineering",
    kicker: "Idea to Impact.",
    titlePrefix: "Driving Business Growth Through",
    titleHighlight: "Technology.",
    description:
      "We deliver secure, scalable, and future-ready digital solutions tailored to your business needs. From custom web and mobile architectures to enterprise ERP automation and cloud systems.",
    primaryCtaText: "Get a Free Consultation",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "Explore Capabilities",
    secondaryCtaHref: "#services",
    badges: [
      { icon: ShieldCheck, text: "Enterprise Security" },
      { icon: Zap, text: "High Performance" },
      { icon: Globe, text: "Cloud Native" },
    ],
    panelBadge: "Operational",
    panelHeader: "infatoz.enterprise.core",
    panelItems: [
      {
        title: "Cloud Infrastructure Resilience",
        icon: Cpu,
        accentColor: "text-sky-400",
        tag: "AWS · Azure · GCP",
        tagColor: "text-sky-400 font-mono",
        desc: "Auto-scaling microservices with automated failover and container orchestration.",
      },
      {
        title: "Security & Data Governance",
        icon: ShieldCheck,
        accentColor: "text-blue-400",
        tag: "Protected",
        tagColor: "text-emerald-400 font-mono",
        desc: "End-to-end encryption, strict role-based access controls, and continuous vulnerability scans.",
      },
      {
        title: "Proactive IT Support",
        icon: Zap,
        accentColor: "text-amber-400",
        tag: "24/7 Monitored",
        tagColor: "text-amber-400 font-mono",
        desc: "Continuous operational telemetry with dedicated technical escalation pathways.",
      },
    ],
    locationLabel: "Kundapura & Bengaluru",
  },
  {
    tag: "Digital Engineering & Mobile Platforms",
    kicker: "Engineered for Performance.",
    titlePrefix: "Modern Web, Mobile &",
    titleHighlight: "Enterprise Applications.",
    description:
      "Transforming complex business logic into high-velocity digital products. Custom responsive web platforms, native mobile applications, and resilient API architectures built to scale.",
    primaryCtaText: "Schedule Technical Scoping",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "View Case Studies",
    secondaryCtaHref: "#case-studies",
    badges: [
      { icon: Layers, text: "Full-Stack Architecture" },
      { icon: Smartphone, text: "iOS & Android" },
      { icon: Code2, text: "Modern Frameworks" },
    ],
    panelBadge: "High Concurrency",
    panelHeader: "infatoz.app.engineering",
    panelItems: [
      {
        title: "Full-Stack Web Engineering",
        icon: Code2,
        accentColor: "text-indigo-400",
        tag: "Next.js · React · Node",
        tagColor: "text-indigo-300 font-mono",
        desc: "SSR, edge caching, and atomic design systems tailored for instant page loads and enterprise SEO.",
      },
      {
        title: "Cross-Platform Mobile Apps",
        icon: Smartphone,
        accentColor: "text-cyan-400",
        tag: "iOS & Android Native",
        tagColor: "text-cyan-300 font-mono",
        desc: "Intuitive UX, offline synchronization, and hardware integration built on React Native & Flutter.",
      },
      {
        title: "API Gateway & Integrations",
        icon: Server,
        accentColor: "text-emerald-400",
        tag: "REST & GraphQL",
        tagColor: "text-emerald-300 font-mono",
        desc: "High-throughput microservices architecture with strict rate limiting and schema validation.",
      },
    ],
    locationLabel: "Global Delivery Standards",
  },
  {
    tag: "AI, Automation & Cloud Architecture",
    kicker: "Operational Agility & Resilience.",
    titlePrefix: "Cloud Migration, ERP &",
    titleHighlight: "Intelligent Automation.",
    description:
      "Empowering enterprises with cloud-native migrations, custom ERP business process automation, and intelligent AI models that eliminate bottlenecks and accelerate team velocity.",
    primaryCtaText: "Book Free Consultation",
    primaryCtaHref: "https://calendly.com/infatoz",
    secondaryCtaText: "Explore Enterprise Solutions",
    secondaryCtaHref: "#services",
    badges: [
      { icon: Cpu, text: "AI Workflows" },
      { icon: Server, text: "Zero Downtime" },
      { icon: CheckCircle, text: "SLA Guaranteed" },
    ],
    panelBadge: "Intelligent Core",
    panelHeader: "infatoz.ai.cloud-systems",
    panelItems: [
      {
        title: "Automated Cloud Pipelines",
        icon: Server,
        accentColor: "text-sky-400",
        tag: "CI/CD & GitOps",
        tagColor: "text-sky-300 font-mono",
        desc: "Zero-downtime blue/green rollouts, infrastructure-as-code, and automated compliance gates.",
      },
      {
        title: "Enterprise ERP Workflows",
        icon: Layers,
        accentColor: "text-purple-400",
        tag: "Process Automation",
        tagColor: "text-purple-300 font-mono",
        desc: "Unified data pipelines linking supply chain, billing, and customer operations seamlessly.",
      },
      {
        title: "Predictive AI & Analytics",
        icon: Cpu,
        accentColor: "text-emerald-400",
        tag: "Machine Learning",
        tagColor: "text-emerald-300 font-mono",
        desc: "Actionable decision intelligence models deployed with enterprise-grade data privacy.",
      },
    ],
    locationLabel: "Karnataka & Worldwide",
  },
];

// Rotating keywords for Slide 0 headline
const ROTATING_KEYWORDS = ["Technology.", "Cloud Systems.", "AI Automation.", "Digital Platforms."];

export const HeroSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    () => false
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Keyword rotation on slide 0
  useEffect(() => {
    if (currentSlide !== 0 || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % ROTATING_KEYWORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [currentSlide, prefersReducedMotion]);

  // Next / Prev slide handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (!isPlaying || isHovered || isFocused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, prefersReducedMotion, nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      aria-roledescription="carousel"
      aria-label="Enterprise Capabilities Showcase"
      className="relative overflow-hidden bg-[#03091e] text-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-800"
    >
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none max-w-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none max-w-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[480px]">
          {/* Main Hero Narrative with AnimatePresence */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Enterprise Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-blue-950/70 border border-blue-500/30 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" aria-hidden="true" />
                  <span>{slide.tag}</span>
                </div>

                {/* Infatoz Positioning Headlines */}
                <div className="space-y-2">
                  <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
                    {slide.kicker}
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
                    {slide.titlePrefix}{" "}
                    {currentSlide === 0 ? (
                      <span className="inline-block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={keywordIndex}
                            initial={false}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                            className="inline-block"
                          >
                            {ROTATING_KEYWORDS[keywordIndex]}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                    ) : (
                      <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                        {slide.titleHighlight}
                      </span>
                    )}
                  </h1>
                </div>

                {/* Authentic Infatoz Value Proposition */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                  {slide.description}
                </p>

                {/* Primary & Secondary Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    onClick={() => {
                      if (slide.primaryCtaHref.includes("calendly")) {
                        openCalendly(slide.primaryCtaHref);
                      }
                    }}
                    href={slide.primaryCtaHref.includes("calendly") ? undefined : slide.primaryCtaHref}
                    target={slide.primaryCtaHref.startsWith("http") && !slide.primaryCtaHref.includes("calendly") ? "_blank" : undefined}
                    rel={slide.primaryCtaHref.startsWith("http") && !slide.primaryCtaHref.includes("calendly") ? "noopener noreferrer" : undefined}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto shadow-xl shadow-blue-900/40 font-bold uppercase tracking-wider text-xs sm:text-sm min-h-[50px] px-8 rounded-sm"
                  >
                    <Calendar className="w-5 h-5 mr-2 shrink-0" />
                    <span>{slide.primaryCtaText}</span>
                  </Button>

                  <Button
                    href={slide.secondaryCtaHref}
                    variant="outlineDark"
                    size="lg"
                    className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs sm:text-sm min-h-[50px] px-8 rounded-sm"
                  >
                    <span>{slide.secondaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </Button>
                </div>

                {/* Enterprise Trust Badges */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-300 font-bold uppercase tracking-wider">
                  {slide.badges.map((badge, idx) => {
                    const IconComponent = badge.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{badge.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visual Focal Point: Dynamic Architecture Preview Panel */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: "easeInOut" }}
                className="relative rounded-sm bg-slate-900/70 backdrop-blur-md border border-slate-700/80 p-5 sm:p-7 md:p-8 shadow-2xl overflow-hidden group"
              >
                {/* Architectural Corner Highlight */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-none pointer-events-none border-l border-b border-blue-500/20" />

                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700/70">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 bg-emerald-400 rounded-none animate-pulse shrink-0" aria-hidden="true" />
                    <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider truncate">{slide.panelHeader}</span>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-sm border border-emerald-500/30">
                    {slide.panelBadge}
                  </span>
                </div>

                {/* Dynamic Qualitative Service Pillars Matrix */}
                <div className="mt-4 space-y-3">
                  {slide.panelItems.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-950/80 rounded-sm p-3.5 sm:p-4 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-slate-300 mb-1">
                          <span className="font-semibold text-white flex items-center gap-1.5 min-w-0">
                            <ItemIcon className={`w-3.5 h-3.5 ${item.accentColor} shrink-0`} />
                            <span className="truncate">{item.title}</span>
                          </span>
                          <span className={`${item.tagColor} text-[11px] font-bold shrink-0`}>
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Value Snippet */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span>Enterprise Delivery</span>
                  <span className="text-sky-400 font-medium">{slide.locationLabel}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Accessible Navigation Bar (Prev / Next, Dots, Pause / Play) */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide Selection">
            {SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${s.tag}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      isActive ? "w-12 h-1 bg-blue-500 rounded-none" : "w-6 h-1 bg-slate-700 hover:bg-slate-500 rounded-none"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Prev, Next & Pause Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto-advancing slides" : "Start auto-advancing slides"}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <span className="text-xs text-slate-400 font-mono ml-2">
              0{currentSlide + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
