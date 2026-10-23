import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outlineDark" | "white" | "ghost" | "enterprise";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm border border-blue-600",
      secondary:
        "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 border border-slate-900 shadow-sm",
      enterprise:
        "bg-slate-950 text-white hover:bg-blue-700 border border-slate-800 shadow-sm font-bold",
      white:
        "bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 border-2 border-white shadow-md font-bold",
      outline:
        "border-2 border-slate-900 text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white shadow-sm font-bold",
      outlineDark:
        "border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-slate-950 shadow-sm font-bold",
      ghost:
        "text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 border border-transparent font-semibold",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 rounded-sm gap-1.5 font-bold uppercase tracking-wider",
      md: "text-xs sm:text-sm px-6 py-3 rounded-sm gap-2 font-bold uppercase tracking-wider",
      lg: "text-sm sm:text-base px-8 py-3.5 rounded-sm gap-2.5 font-bold uppercase tracking-wider",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={props.target}
          rel={props.rel}
          aria-label={props["aria-label"]}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
