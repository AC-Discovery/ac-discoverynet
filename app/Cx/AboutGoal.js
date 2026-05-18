export default function AboutGoal() {
  return (
    <section className="relative bg-[#004972] overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute -left-10 top-0 h-full w-[40%] text-white/6 pointer-events-none hidden sm:block"
        viewBox="0 0 200 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {Array.from({ length: 8 }).map((_, row) =>
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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="text-white font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Our goal is to find
              <br />
              the <em className="italic font-bold">right</em> solutions
              <br />
              for our clients
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-3">
            <p className="text-white/85 text-sm md:text-[15px] leading-relaxed max-w-md">
              We aren&apos;t here to simply push a product. Our team of experts
              are well versed in today&apos;s legal technology tools and best
              practices. We consult with our clients to find the{" "}
              <em className="italic">right</em> tools to fit their litigation
              needs. With so much technology at our disposal, there is no need
              to focus on just one platform. By utilizing all our technology
              options, we offer clients the most efficient and cost-effective
              solutions to their eDiscovery roadblocks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
