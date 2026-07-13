interface DancePostureSilhouetteProps {
  size?: number;
  flip?: boolean;
  className?: string;
  opacity?: number;
  variant?: "aramandi" | "mudra";
}

export default function DancePostureSilhouette({
  size = 56,
  flip = false,
  className = "",
  opacity = 0.75,
  variant = "aramandi",
}: DancePostureSilhouetteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${flip ? "scale-x-[-1]" : ""} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {variant === "aramandi" ? (
        <g fill="#B8860B">
          {/* Head */}
          <circle cx="40" cy="14" r="7" />
          {/* Neck & torso */}
          <path d="M36 21 L34 38 Q40 42 46 38 L44 21 Z" />
          {/* Raised arm — mudra */}
          <path d="M46 26 Q58 18 62 28 Q58 32 50 30 L46 28 Z" />
          {/* Extended arm */}
          <path d="M34 28 Q22 32 18 42 Q22 46 30 42 L34 36 Z" />
          {/* Saree / costume drape */}
          <path
            d="M32 38 Q28 52 30 68 Q34 72 40 70 Q46 72 50 68 Q52 52 48 38 Z"
            opacity="0.85"
          />
          {/* Aramandi legs */}
          <path d="M34 68 Q28 78 26 88 L32 90 Q34 80 38 72 Z" />
          <path d="M46 68 Q52 78 54 88 L48 90 Q46 80 42 72 Z" />
          {/* Anklet bells hint */}
          <ellipse cx="29" cy="89" rx="3" ry="1.5" opacity="0.5" />
          <ellipse cx="51" cy="89" rx="3" ry="1.5" opacity="0.5" />
          {/* Hair bun */}
          <circle cx="40" cy="8" r="4" opacity="0.7" />
        </g>
      ) : (
        <g fill="#B8860B">
          {/* Tribhangi / abhinaya profile */}
          <circle cx="42" cy="15" r="7" />
          <path d="M38 22 L36 40 Q42 44 48 40 L46 22 Z" />
          <path d="M48 28 Q62 24 66 36 Q60 40 52 36 L48 32 Z" />
          <path d="M36 32 Q24 38 20 50 Q26 54 34 48 L38 40 Z" />
          <path d="M34 40 Q30 58 32 74 Q38 78 44 76 Q50 78 52 74 Q54 58 50 40 Z" opacity="0.85" />
          <path d="M36 74 Q30 84 28 94 L34 96 Q36 86 40 78 Z" />
          <path d="M48 74 Q54 84 56 94 L50 96 Q48 86 44 78 Z" />
          <circle cx="44" cy="9" r="4" opacity="0.7" />
        </g>
      )}
    </svg>
  );
}
