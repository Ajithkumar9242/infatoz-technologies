"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X, ExternalLink, Sparkles, Maximize2 } from "lucide-react";

interface WhyChooseVideoProps {
  videoId?: string;
  className?: string;
}

const YOUTUBE_VIDEO_ID = "bnJ9nZE9I0w";
const VIDEO_TITLE = "Infatoz Technologies - We design your dreams ✨️";

export const WhyChooseVideo: React.FC<WhyChooseVideoProps> = ({
  videoId = YOUTUBE_VIDEO_ID,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);

  // Fallback to hqdefault if maxresdefault fails to load
  const handleThumbnailError = () => {
    setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
  };

  // Keyboard navigation & Escape handler for modal
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      modalCloseBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsModalOpen(false);
        triggerBtnRef.current?.focus();
      }

      if (e.key === "Tab" && modalContainerRef.current) {
        const focusables = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Privacy-enhanced embed URL
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 16:9 Responsive Inline Showcase Card */}
      <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl group">
        {isPlaying ? (
          // Active Inline Player (Privacy-enhanced YouTube Embed)
          <div className="relative w-full h-full bg-black">
            <iframe
              src={embedUrl}
              title="Infatoz Technologies company video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Quick Reset / Close Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              aria-label="Close video player and return to thumbnail preview"
              className="absolute top-3 right-3 z-20 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-slate-900/90 text-white hover:bg-blue-600 transition-colors shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          // Lightweight Facade Preview (Zero upfront iframe)
          <div className="relative w-full h-full">
            {/* High-Resolution Thumbnail Image */}
            <Image
              src={thumbnailUrl}
              alt="Infatoz Technologies company video preview"
              fill
              unoptimized
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              onError={handleThumbnailError}
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />

            {/* Gradient Overlays for Readability */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30"
              aria-hidden="true"
            />

            {/* Top Bar Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Featured Overview</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-black/70 backdrop-blur-md text-slate-300 text-[11px] font-mono border border-white/10">
                <span>Official Channel · Infatoz</span>
              </div>
            </div>

            {/* Center Play Button & Trigger */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10 text-center">
              <button
                ref={triggerBtnRef}
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Infatoz Technologies company video"
                className="group/btn flex flex-col items-center gap-3 cursor-pointer focus-visible:outline-none select-none"
              >
                <span className="relative min-w-[56px] min-h-[56px] sm:min-w-[72px] sm:min-h-[72px] w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-blue-600 group-hover/btn:bg-blue-500 text-white shadow-xl shadow-blue-900/50 flex items-center justify-center transition-all duration-300 group-hover/btn:scale-108 focus-visible:ring-4 focus-visible:ring-blue-400">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </span>

                <span className="px-4 py-1.5 rounded-full bg-white/10 group-hover/btn:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs sm:text-sm tracking-wide transition-colors">
                  Watch Video
                </span>
              </button>
            </div>

            {/* Bottom Title & Narrative Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div className="space-y-1 max-w-xl">
                <h4 className="text-sm sm:text-lg font-bold leading-snug drop-shadow-sm">
                  {VIDEO_TITLE}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                  Discover our journey, engineering standards, and how we build enterprise software solutions for forward-thinking organizations.
                </p>
              </div>

              {/* Expand to Modal Button */}
              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Watch video in full modal dialog"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-white/20 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fullscreen Modal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Accessible Video Modal (if opened via Fullscreen button or section trigger) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            ref={modalContainerRef}
            className="w-full max-w-4xl bg-slate-950 rounded-sm border border-slate-800 shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="space-y-0.5">
                <h3 id="video-modal-heading" className="text-sm sm:text-base font-bold text-white">
                  Infatoz Technologies Corporate Overview
                </h3>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Official YouTube Video · {videoId}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 px-2.5 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  ref={modalCloseBtnRef}
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close video modal"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal 16:9 Video Embed */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                title="Infatoz Technologies company video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
