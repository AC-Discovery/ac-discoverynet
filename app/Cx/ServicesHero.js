export default function ServicesHero() {
  return (
    <section className="relative bg-[#004972] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24 flex flex-col items-center text-center">
        <h1 className="text-white font-bold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px] max-w-4xl">
          Whatever your litigation
          <br className="hidden sm:block" />
          {" "}needs, we are here to help
        </h1>
        <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl">
          We offer support throughout the entire eDiscovery lifecycle and
          beyond, providing ease and expertise.
        </p>
      </div>
    </section>
  );
}
