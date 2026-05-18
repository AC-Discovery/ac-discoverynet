export default function AboutHero() {
  return (
    <section className="relative bg-white/21 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-80 sm:h-96 md:h-112 lg:h-128 flex items-center justify-center">
        <h1
          className="absolute inset-0 flex items-center justify-center font-extrabold uppercase tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] text-center select-none pointer-events-none"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
            color: "transparent",
          }}
        >
          <span>
            Tech
            <br />
            Forward
          </span>
        </h1>

        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-linear-to-br from-[#2484C6] via-[#095786] to-[#004972] shadow-2xl shadow-blue-900/40 flex items-center justify-center">
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            Solutions Oriented
          </p>
        </div>
      </div>
    </section>
  );
}
