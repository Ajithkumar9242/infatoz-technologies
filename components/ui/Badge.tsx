import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "dark" | "outline" | "cyan" | "success";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "blue",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-semibold tracking-wider uppercase rounded-full select-none";

  const variants = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200/80",
    dark: "bg-slate-900 text-slate-100 border border-slate-700",
    outline: "border border-slate-300 text-slate-700 bg-white",
    cyan: "bg-sky-50 text-sky-700 border border-sky-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
