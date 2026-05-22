"use client";

import { forensicsItems } from "./forensicsItems";

function IconCircle({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-5 shrink-0 w-[230px]">
      <span className="w-36 h-36 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <div className="scale-[2.4]">
          <Icon />
        </div>
      </span>

      <p className="text-white text-lg sm:text-xl font-medium text-center leading-tight w-full">
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

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2484C6]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-24">
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-white font-bold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl">
            We guarantee integrity
          </h1>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-4 max-w-xl mx-auto">
            Our team of technology experts will guide you through the digital
            forensic process.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 md:gap-14">
          {forensicsItems.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
            >
              <IconCircle Icon={item.HeroIcon} label={item.title} />

              <div className="relative overflow-hidden w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.35)] px-7 py-6 md:px-10 md:py-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#2484C6]/10 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-white font-semibold text-xl sm:text-2xl tracking-tight">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-white/80 text-sm sm:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}