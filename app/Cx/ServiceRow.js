function HexPattern({ side = "left" }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute ${
        side === "right" ? "-right-10" : "-left-10"
      } top-0 h-full w-[40%] text-white/6 pointer-events-none hidden sm:block`}
      viewBox="0 0 200 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => {
          const x = col * 36 + (row % 2 ? 18 : 0);
          const y = row * 32;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x + 10},${y} ${x + 30},${y} ${x + 40},${y + 17} ${
                x + 30
              },${y + 34} ${x + 10},${y + 34} ${x},${y + 17}`}
            />
          );
        })
      )}
    </svg>
  );
}

export default function ServiceRow({
  Icon,
  title,
  description,
  hexSide = "left",
  showDivider = true,
}) {
  return (
    <section className="relative bg-black overflow-hidden">
      <HexPattern side={hexSide} />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="inline-flex w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#004972]/10 text-[#004972] items-center justify-center">
              <Icon />
            </span>
            <h2 className="text-white font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-[40px] lg:text-5xl mt-6 md:mt-8">
              {title}
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {showDivider && (
          <hr className="border-white/10 mt-10 md:mt-14 lg:mt-16" />
        )}
      </div>
    </section>
  );
}
