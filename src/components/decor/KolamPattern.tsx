interface KolamPatternProps {
  className?: string;
  variant?: "corner" | "edge" | "divider";
}

export function KolamCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Dot grid */}
      <circle cx="8" cy="8" r="1.5" fill="#B8860B" opacity="0.6" />
      <circle cx="16" cy="8" r="1.5" fill="#B8860B" opacity="0.6" />
      <circle cx="8" cy="16" r="1.5" fill="#B8860B" opacity="0.6" />
      <circle cx="16" cy="16" r="1.5" fill="#B8860B" opacity="0.6" />
      {/* Kolam loops */}
      <path
        d="M4 4 Q12 4 12 12 Q12 20 4 20 Q4 12 12 12"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M20 4 Q28 4 28 12 Q28 20 20 20"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M4 24 Q12 24 12 32 Q12 40 4 40"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Petal accent */}
      <path
        d="M24 4 C28 8 28 16 24 20 C20 16 20 8 24 4Z"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function KolamEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="24" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="36" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="48" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="60" cy="12" r="2" fill="#B8860B" opacity="0.7" />
      <circle cx="72" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="84" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="96" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <circle cx="108" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
      <path
        d="M6 12 Q18 4 30 12 Q42 20 54 12 Q66 4 78 12 Q90 20 102 12 Q108 8 114 12"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M6 12 Q18 20 30 12 Q42 4 54 12 Q66 20 78 12 Q90 4 102 12"
        stroke="#B8860B"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function KolamDividerPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Repeating kolam loops */}
      {[0, 80, 160, 240, 320].map((x) => (
        <g key={x} transform={`translate(${x}, 0)`}>
          <circle cx="20" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
          <circle cx="40" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
          <circle cx="60" cy="12" r="1.5" fill="#B8860B" opacity="0.5" />
          <path
            d="M10 12 Q20 4 30 12 Q40 20 50 12 Q60 4 70 12"
            stroke="#B8860B"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
        </g>
      ))}
      {/* Central lotus */}
      <circle cx="200" cy="12" r="3" fill="#B8860B" opacity="0.8" />
      <path
        d="M200 6 C204 10 204 14 200 18 C196 14 196 10 200 6Z"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M194 12 C198 8 202 8 206 12 C202 16 198 16 194 12Z"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export default function KolamPattern({
  className = "",
  variant = "corner",
}: KolamPatternProps) {
  if (variant === "edge") return <KolamEdge className={className} />;
  if (variant === "divider") return <KolamDividerPattern className={className} />;
  return <KolamCorner className={className} />;
}
