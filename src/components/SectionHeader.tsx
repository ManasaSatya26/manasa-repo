import { type ReactNode } from "react";
import TempleElephant from "./decor/TempleElephant";
import DancePostureSilhouette from "./decor/DancePostureSilhouette";
import SectionDivider from "./SectionDivider";

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  showElephants?: boolean;
  showDanceSilhouettes?: boolean;
  accent?: ReactNode;
}

export default function SectionHeader({
  id,
  title,
  subtitle,
  showElephants = true,
  showDanceSilhouettes = true,
  accent,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <div className="mb-2 flex items-center justify-center gap-1 sm:gap-3">
        {accent && <span>{accent}</span>}
        {showElephants && (
          <TempleElephant
            size={32}
            className="hidden md:block"
            opacity={0.85}
          />
        )}
        {showDanceSilhouettes && (
          <DancePostureSilhouette
            size={44}
            className="hidden sm:block"
            opacity={0.7}
          />
        )}
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {showDanceSilhouettes && (
          <DancePostureSilhouette
            size={44}
            flip
            variant="mudra"
            className="hidden sm:block"
            opacity={0.7}
          />
        )}
        {showElephants && (
          <TempleElephant
            size={32}
            flip
            className="hidden md:block"
            opacity={0.85}
          />
        )}
        {accent && <span>{accent}</span>}
      </div>

      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
      <SectionDivider className="my-6" />
    </div>
  );
}
