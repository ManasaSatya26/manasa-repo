interface TempleElephantProps {
  size?: number;
  flip?: boolean;
  className?: string;
  opacity?: number;
}

export default function TempleElephant({
  size = 48,
  flip = false,
  className = "",
  opacity = 1,
}: TempleElephantProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${flip ? "scale-x-[-1]" : ""} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="32" cy="38" rx="18" ry="14" stroke="#B8860B" strokeWidth="1.2" fill="none" />
      {/* Head */}
      <path
        d="M14 32 Q8 28 10 22 Q12 16 18 18 Q20 14 24 16"
        stroke="#B8860B"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Trunk */}
      <path
        d="M10 22 Q6 26 8 32 Q10 36 14 34"
        stroke="#B8860B"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Ear */}
      <path
        d="M18 18 Q14 12 20 14 Q22 18 18 18"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      {/* Legs */}
      <line x1="22" y1="50" x2="22" y2="58" stroke="#B8860B" strokeWidth="1.2" />
      <line x1="30" y1="50" x2="30" y2="58" stroke="#B8860B" strokeWidth="1.2" />
      <line x1="38" y1="50" x2="38" y2="58" stroke="#B8860B" strokeWidth="1.2" />
      <line x1="46" y1="48" x2="46" y2="56" stroke="#B8860B" strokeWidth="1.2" />
      {/* Tail */}
      <path
        d="M50 36 Q56 32 54 28"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      {/* Caparison / decorative blanket */}
      <path
        d="M20 30 Q32 24 44 30 Q46 36 32 40 Q18 36 20 30"
        stroke="#B8860B"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M24 32 Q32 28 40 32"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      {/* Howdah / temple seat */}
      <rect
        x="26"
        y="22"
        width="12"
        height="8"
        rx="1"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M28 22 L32 18 L36 22"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      {/* Tusk */}
      <line x1="12" y1="24" x2="10" y2="28" stroke="#B8860B" strokeWidth="0.8" opacity="0.6" />
      {/* Eye */}
      <circle cx="16" cy="22" r="1" fill="#B8860B" opacity="0.8" />
      {/* Decorative fringe on blanket */}
      <path
        d="M22 38 L22 42 M28 39 L28 43 M36 39 L36 43 M42 38 L42 42"
        stroke="#B8860B"
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  );
}
