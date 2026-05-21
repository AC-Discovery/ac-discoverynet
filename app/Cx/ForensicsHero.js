"use client";

import { useState } from "react";
import { forensicsItems } from "./forensicsItems";
import ForensicsModal from "./ForensicsModal";

function IconCircle({ Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#004972] rounded-lg"
    >
      <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 border border-white/20 text-[#004972] flex items-center justify-center shadow-lg shadow-black/40 transition-transform group-hover:scale-105 group-hover:bg-white">
        <Icon />
      </span>
      <p className="text-white/75 group-hover:text-white text-[11px] sm:text-xs font-medium text-center leading-tight max-w-[100px] transition-colors">
        {label}
      </p>
    </button>
  );
}

export default function ForensicsHero() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
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
            {forensicsItems.map((item) => (
              <IconCircle
                key={item.id}
                Icon={item.HeroIcon}
                label={item.title}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <ForensicsModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </>
  );
}
