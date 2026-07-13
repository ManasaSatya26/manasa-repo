import { KolamDividerPattern } from "./decor/KolamPattern";
import TempleElephant from "./decor/TempleElephant";

interface SectionDividerProps {
  className?: string;
  showElephants?: boolean;
}

export default function SectionDivider({
  className = "",
  showElephants = false,
}: SectionDividerProps) {
  if (showElephants) {
    return (
      <div
        className={`flex items-center justify-center gap-3 ${className}`}
        role="separator"
        aria-hidden="true"
      >
        <TempleElephant size={28} opacity={0.7} />
        <KolamDividerPattern className="h-6 w-full max-w-md" />
        <TempleElephant size={28} flip opacity={0.7} />
      </div>
    );
  }

  return (
    <div
      className={`kolam-divider w-full max-w-4xl mx-auto opacity-80 ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
