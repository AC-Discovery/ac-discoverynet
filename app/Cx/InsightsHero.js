export default function InsightsHero() {
  return (
    <section className="relative bg-[#333333] overflow-hidden">
      {/* Dot mesh — stronger mid/bottom, fades toward top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-90 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_22%,black_48%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_22%,black_48%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* Soft contour bands for a subtle topo / wave feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_38%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_38%)]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 130% 70% at 50% 105%, rgba(255,255,255,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 90% 55% at 22% 92%, rgba(255,255,255,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 85% 50% at 78% 88%, rgba(255,255,255,0.055) 0%, transparent 48%)
          `,
        }}
      />
      {/* Dotted arcs near bottom */}
      <svg
        aria-hidden="true"
        className="absolute bottom-[-8%] left-1/2 w-[min(125%,56rem)] h-[min(52vh,24rem)] -translate-x-1/2 opacity-[0.35] pointer-events-none text-white"
        viewBox="0 0 800 320"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M -40 280 Q 200 220 400 250 T 840 230"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
        <path
          d="M -60 300 Q 220 255 420 285 T 880 265"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="1.5 14"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 0 240 Q 260 190 420 215 T 820 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 16"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-24 md:pb-32 lg:pb-36 text-center">
        <h1 className="text-white font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.15]">
          Insights & What&apos;s New
        </h1>
        <p className="mt-6 md:mt-8 text-white text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
          Stay up to date on our latest developments, events, and gain valuable
          insights from our team of experts - spanning a wide range of topics
          such as staffing, technology, forensic collections, data hosting,
          managed review, production, and trial preparation.
        </p>
      </div>
    </section>
  );
}
