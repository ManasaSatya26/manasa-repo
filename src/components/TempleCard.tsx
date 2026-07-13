import { type ReactNode } from "react";
import KolamBorder from "./decor/KolamBorder";
import { KolamCorner } from "./decor/KolamPattern";

interface TempleCardProps {
  children: ReactNode;
  className?: string;
}

export default function TempleCard({ children, className = "" }: TempleCardProps) {
  return (
    <div className={`temple-card ${className}`}>
      {/* Temple arch top */}
      <div className="relative h-6 w-full bg-gradient-to-b from-gold/20 to-transparent" aria-hidden="true">
        <svg
          className="absolute inset-x-0 top-0 w-full"
          viewBox="0 0 200 24"
          preserveAspectRatio="none"
          height="24"
        >
          <path
            d="M0 24 L0 8 Q50 0 100 8 Q150 16 200 8 L200 24 Z"
            fill="currentColor"
            className="text-gold/30"
          />
          <path
            d="M20 24 L20 12 Q60 4 100 12 Q140 20 180 12 L180 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gold/50"
          />
        </svg>
      </div>

      <KolamBorder variant="corners" innerClassName="p-5 sm:p-6">
        {children}
      </KolamBorder>

      {/* Bottom kolam corner accents */}
      <div className="relative h-4" aria-hidden="true">
        <KolamCorner className="absolute bottom-0 left-2 h-6 w-6 scale-y-[-1] opacity-50" />
        <KolamCorner className="absolute bottom-0 right-2 h-6 w-6 scale-[-1] opacity-50" />
      </div>
    </div>
  );
}
