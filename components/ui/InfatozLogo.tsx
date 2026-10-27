import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface InfatozLogoProps {
  variant?: "dark" | "white";
  className?: string;
  showWordmark?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

export const InfatozLogo: React.FC<InfatozLogoProps> = ({
  variant = "dark",
  className,
  showWordmark = true,
  priority = false,
}) => {
  const isWhite = variant === "white";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* Real Infatoz Logo Mark — 1:1 Aspect Ratio Preserved */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg overflow-hidden shrink-0 shadow-sm border border-blue-700/20 bg-[#164e9e]">
        <Image
          src="/images/infatoz.png"
          alt="Infatoz Technologies"
          width={640}
          height={640}
          priority={priority}
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span
            className={cn(
              "font-extrabold text-lg sm:text-xl tracking-tight leading-none",
              isWhite ? "text-white" : "text-slate-900"
            )}
          >
            Infatoz<span className="text-blue-600">.</span>
          </span>
          <span
            className={cn(
              "text-[9px] uppercase tracking-widest font-bold leading-tight mt-0.5",
              isWhite ? "text-slate-300" : "text-slate-500"
            )}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};
