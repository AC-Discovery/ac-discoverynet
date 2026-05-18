function MonitorIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
      <path d="M7 9l3 3-3 3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="6" y="13" width="3" height="6" />
      <rect x="11" y="9" width="3" height="10" />
      <rect x="16" y="6" width="3" height="13" />
      <polyline points="5 11 10 7 14 9 19 4" />
    </svg>
  );
}

function ScalesIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="6" y1="20" x2="18" y2="20" />
      <line x1="6" y1="7" x2="18" y2="7" />
      <path d="M6 7 L3 13 L9 13 Z" />
      <path d="M18 7 L15 13 L21 13 Z" />
      <circle cx="12" cy="4" r="1" fill="currentColor" />
    </svg>
  );
}

function IconCircle({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 border border-white/20 text-[#004972] flex items-center justify-center shadow-lg shadow-black/40">
        <Icon />
      </span>
      <p className="text-white/75 text-[11px] sm:text-xs font-medium text-center leading-tight max-w-[100px]">
        {label}
      </p>
    </div>
  );
}

export default function ForensicsHero() {
  return (
    <section className="relative bg-[#004972] min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-bold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl">
          We guarantee integrity
        </h1>
        <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
          Our team of technology experts will guide you through the digital
          forensic process.
        </p>

        <div className="mt-10 md:mt-14 flex flex-wrap items-start justify-center gap-x-10 sm:gap-x-14 md:gap-x-20 gap-y-8">
          <IconCircle Icon={MonitorIcon} label="Digital Data Collection" />
          <IconCircle Icon={ChartIcon} label="Digital Forensic Analysis" />
          <IconCircle Icon={ScalesIcon} label="Expert Testimony" />
        </div>
      </div>
    </section>
  );
}
