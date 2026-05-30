import Image from "next/image";

function LitigationFloatingCard() {
  return (
    <div className="absolute -right-6 bottom-4 md:-right-16 lg:-right-24 md:bottom-8 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 px-4 py-3 w-[160px] md:w-[180px]">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <p className="text-white text-sm md:text-base font-medium">
          Litigation solutions
        </p>
      </div>
      <div className="flex items-end justify-between gap-1 mt-3 h-14">
        {[35, 55, 30, 70, 45, 85, 50, 75, 40, 90, 60, 80].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-sm bg-white/85"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function StepDots() {
  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        type="button"
        className="w-14 h-14 rounded-full bg-[#095786] text-white text-base font-semibold flex items-center justify-center"
      >
        01
      </button>
      <button
        type="button"
        className="w-14 h-14 rounded-full bg-white/10 border border-white/15 text-white/70 text-base font-semibold flex items-center justify-center hover:bg-white/15 transition-colors"
      >
        02
      </button>
      <button
        type="button"
        className="w-14 h-14 rounded-full bg-white/10 border border-white/15 text-white/70 text-base font-semibold flex items-center justify-center hover:bg-white/15 transition-colors"
      >
        03
      </button>
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <span className="w-8 h-8 rounded-full bg-[#004972]" />
      <span className="w-8 h-8 rounded-full bg-white/65" />
      <span className="w-8 h-8 rounded-full bg-transparent" />
      <span className="w-8 h-8 rounded-full bg-white/25" />
    </div>
  );
}

function KnowledgeCard() {
  return (
    <div className="rounded-2xl bg-[#004972] p-6 md:p-7 text-white">
      <h3 className="text-lg md:text-xl font-semibold">Our Knowledge</h3>
      <p className="text-white/85 text-sm md:text-base leading-relaxed mt-3">
        With deep industry knowledge and technical proficiency, our legal technology professionals provide strategic guidance and innovative solutions across the eDiscovery lifecycle.
      </p>
    </div>
  );
}

export default function Excellence() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-10 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] bg-white/[0.21] px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-8">
            <h2 className="text-white font-semibold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Committed to Excellence. 
              <br />
              Driven by Results.
            </h2>
          </div>
          <div className="md:col-span-4 md:pt-3">
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-md">
              Our consultants leverage decades of industry experience to identify and implement the technology solutions best aligned with our clients' objectives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start mt-10 md:mt-14">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-black/30">
                <Image
                  src="/lawyer.png"
                  alt="Litigation expert"
                  width={1024}
                  height={1024}
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <LitigationFloatingCard />
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-snug uppercase tracking-wide">
              We ensure the right fit for your eDiscovery needs.
            </p>
            <div className="md:pl-10 lg:pl-16">
              <p className="text-white/60 text-base leading-relaxed mt-6 max-w-xs">
                Experienced technology consultants leveraging over eight decades of industry knowledge.
              </p>
              <button
                type="button"
                className="mt-4 text-white text-base font-medium hover:text-[#2484C6] transition-colors"
              >
                Learn More
              </button>
              <StepDots />
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
                  88%
                </p>
                <p className="text-white/65 text-sm md:text-base leading-snug mt-2">
                  Leading Through
                  <br />
                  The Right Solutions
                </p>
              </div>
              <PaginationDots />
            </div>
            <div className="mt-6 md:mt-8">
              <KnowledgeCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
