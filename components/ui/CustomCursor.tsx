"use client";

import React, { useEffect, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    // Detect if device supports fine pointer / mouse (including hybrid laptops with touch + mouse/trackpad)
    const hasFinePointer =
      window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(any-pointer: fine)").matches;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let isReducedMotion = reducedMotionQuery.matches;
    let isCursorEnabled = false;
    let isActive = false;
    let isHoveringInteractive = false;
    let isHoveringText = false;
    let isMouseDown = false;

    // Direct coordinates tracking without React state updates
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number | null = null;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Check whether an element is interactive (links, buttons, controls, menuitems, tabs)
    const interactiveSelector = [
      "a",
      "button",
      '[role="button"]',
      '[role="menuitem"]',
      '[role="tab"]',
      '[role="link"]',
      '[role="option"]',
      'input[type="submit"]',
      'input[type="button"]',
      "select",
      "summary",
      "label[for]",
      "[data-cursor-hover]",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    const isInteractiveElement = (el: Element | null): boolean => {
      if (!el || !(el instanceof Element)) return false;
      return Boolean(el.closest(interactiveSelector));
    };

    // Check whether an element is a text input where native I-beam cursor is vital
    const isTextInputElement = (el: Element | null): boolean => {
      if (!el || !(el instanceof Element)) return false;
      const textSelector =
        'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]';
      return Boolean(el.closest(textSelector));
    };

    const enableCursor = () => {
      if (!isCursorEnabled) {
        isCursorEnabled = true;
        document.documentElement.classList.add("custom-cursor-active");
      }
    };

    const disableCursor = () => {
      if (isCursorEnabled) {
        isCursorEnabled = false;
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    // If device indicates fine pointer capability initially, enable cursor class
    if (hasFinePointer) {
      enableCursor();
    }

    // Animation loop for smooth trailing ring
    const render = () => {
      if (isActive && isCursorEnabled) {
        if (isReducedMotion) {
          ringX = mouseX;
          ringY = mouseY;
        } else {
          // Smooth linear interpolation for outer ring (0.2 factor for responsive trailing)
          ringX += (mouseX - ringX) * 0.2;
          ringY += (mouseY - ringY) * 0.2;
        }

        const dotScale = isHoveringInteractive ? 1.3 : isMouseDown ? 0.8 : 1;
        const ringScale = isMouseDown ? 0.85 : isHoveringInteractive ? 1.45 : 1;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

        // Handle visibility and states
        if (isHoveringText) {
          // Fade out custom cursor over text inputs so native text cursor is unobstructed
          dot.style.opacity = "0";
          ring.style.opacity = "0";
        } else {
          dot.style.opacity = "1";
          ring.style.opacity = "1";

          if (isMouseDown) {
            ring.style.borderColor = "var(--color-brand-accent, #0284c7)";
            ring.style.backgroundColor = "rgba(2, 132, 199, 0.2)";
          } else if (isHoveringInteractive) {
            ring.style.borderColor = "var(--color-brand-accent, #0284c7)";
            ring.style.backgroundColor = "rgba(2, 132, 199, 0.12)";
          } else {
            ring.style.borderColor = "rgba(2, 132, 199, 0.5)";
            ring.style.backgroundColor = "transparent";
          }
        }
      } else {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
      }

      rafId = requestAnimationFrame(render);
    };

    const updateTargetState = (target: EventTarget | null) => {
      const el = target instanceof Element ? target : null;
      isHoveringText = isTextInputElement(el);
      isHoveringInteractive = !isHoveringText && isInteractiveElement(el);
    };

    // Event handlers
    const onPointerMove = (e: PointerEvent) => {
      // If event source is touch, yield to native touch behavior
      if (e.pointerType === "touch") {
        isActive = false;
        disableCursor();
        return;
      }

      enableCursor();
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isActive) {
        isActive = true;
        ringX = mouseX;
        ringY = mouseY;
      }

      updateTargetState(e.target);
    };

    const onPointerOver = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      updateTargetState(e.target);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        isActive = false;
        disableCursor();
        return;
      }
      isMouseDown = true;
    };

    const onPointerUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      isActive = false;
    };

    const onMouseEnter = () => {
      isActive = true;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Hide custom cursor during keyboard navigation (Tab, Arrow keys)
      if (["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        isActive = false;
        disableCursor();
      }
    };

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: true });

    reducedMotionQuery.addEventListener("change", onReducedMotionChange);

    // Start animation loop
    rafId = requestAnimationFrame(render);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      disableCursor();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("keydown", onKeyDown);
      reducedMotionQuery.removeEventListener("change", onReducedMotionChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      {/* Precision Inner Dot (6px) */}
      <div
        ref={dotRef}
        style={{
          width: "6px",
          height: "6px",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
        className="pointer-events-none fixed top-0 left-0 rounded-full bg-blue-600 transition-opacity duration-150 ease-out will-change-transform opacity-0"
      />

      {/* Trailing Circular Ring with Centered Smooth Expansion (28px base) */}
      <div
        ref={ringRef}
        style={{
          width: "28px",
          height: "28px",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1)",
        }}
        className="pointer-events-none fixed top-0 left-0 rounded-full border border-sky-500/50 transition-[transform,background-color,border-color,opacity] duration-200 ease-out will-change-transform opacity-0"
      />
    </div>
  );
};
