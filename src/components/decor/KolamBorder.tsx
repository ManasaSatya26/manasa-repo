import { type ReactNode } from "react";
import { KolamCorner } from "./KolamPattern";

interface KolamBorderProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "full" | "corners" | "subtle";
}

export default function KolamBorder({
  children,
  className = "",
  innerClassName = "",
  variant = "full",
}: KolamBorderProps) {
  if (variant === "subtle") {
    return (
      <div className={`kolam-frame-subtle ${className}`}>
        <div className={`kolam-frame-inner ${innerClassName}`}>{children}</div>
      </div>
    );
  }

  if (variant === "corners") {
    return (
      <div className={`relative ${className}`}>
        <KolamCorner className="absolute left-0 top-0 h-8 w-8 sm:h-10 sm:w-10" />
        <KolamCorner className="absolute right-0 top-0 h-8 w-8 scale-x-[-1] sm:h-10 sm:w-10" />
        <KolamCorner className="absolute bottom-0 left-0 h-8 w-8 scale-y-[-1] sm:h-10 sm:w-10" />
        <KolamCorner className="absolute bottom-0 right-0 h-8 w-8 scale-[-1] sm:h-10 sm:w-10" />
        <div className={`relative z-10 ${innerClassName}`}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`kolam-frame ${className}`}>
      <div className={`kolam-frame-inner ${innerClassName}`}>{children}</div>
    </div>
  );
}
