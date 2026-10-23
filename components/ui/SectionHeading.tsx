import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  align = "left",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3.5 inline-flex items-center gap-2.5">
          <span
            className={cn(
              "h-3 w-1 rounded-none shrink-0",
              isDark ? "bg-sky-400" : "bg-blue-600"
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase",
              isDark ? "text-sky-400" : "text-blue-600"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.14]",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}{" "}
        {highlightText && (
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-slate-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
