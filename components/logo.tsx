export default function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { w: 140, h: 48, bar: "h-5", text: "text-lg", sub: "text-[9px]", ml: "ml-2.5" },
    default: { w: 180, h: 56, bar: "h-7", text: "text-2xl", sub: "text-[11px]", ml: "ml-3" },
    large: { w: 260, h: 80, bar: "h-9", text: "text-4xl", sub: "text-xs", ml: "ml-4" },
  };
  const s = sizes[size];

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="flex items-center gap-1.5">
        {/* Spray nozzle icon */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
          {/* Nozzle body */}
          <rect x="4" y="12" width="12" height="8" rx="2" fill="url(#logo-grad)" />
          <rect x="14" y="14" width="6" height="4" rx="1" fill="url(#logo-grad)" />
          {/* Spray particles */}
          <circle cx="24" cy="10" r="1.5" fill="#f97316" opacity="0.9">
            <animate attributeName="cx" values="24;27;24" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="25" cy="16" r="2" fill="#f97316" opacity="0.7">
            <animate attributeName="cx" values="25;29;25" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="24" cy="22" r="1.5" fill="#f97316" opacity="0.8">
            <animate attributeName="cx" values="24;28;24" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="26" cy="13" r="1" fill="#3b82f6" opacity="0.6">
            <animate attributeName="cx" values="26;30;26" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="26" cy="19" r="1" fill="#3b82f6" opacity="0.5">
            <animate attributeName="cx" values="26;30;26" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <defs>
            <linearGradient id="logo-grad" x1="4" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e40af" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <span className={`${s.text} font-extrabold tracking-tight`}>
          SPRAY FOAM
        </span>
      </span>
      <span className={`${s.sub} font-semibold tracking-[0.25em] uppercase ${s.ml} text-[var(--orange)]`}>
        near pittsburgh
      </span>
    </div>
  );
}
