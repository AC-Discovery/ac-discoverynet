export default function InfoPageHero({ title, children }) {
  return (
    <section className="relative bg-[#004972] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-20 text-center">
        <h1 className="text-white font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.15]">
          {title}
        </h1>
        {children && (
          <div className="mt-6 md:mt-8 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
