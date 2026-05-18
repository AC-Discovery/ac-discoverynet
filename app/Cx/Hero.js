import Image from "next/image";

function StatChip() {
  return (
    <div className="hidden sm:flex items-center gap-3">
      <Image
        src="/people.png"
        alt="Clients"
        width={156}
        height={48}
        quality={100}
        unoptimized
        className="h-10 w-auto object-contain"
      />
      <div className="leading-tight">
        <p className="text-white text-lg font-semibold">12+</p>
        <p className="text-white/70 text-xs">Client Satisfaction</p>
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="mt-8 flex flex-col gap-4 px-5 py-4 md:inline-flex md:flex-row md:items-stretch md:gap-10 md:px-7 md:py-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10">
      <div>
        <p className="text-white text-2xl md:text-4xl font-semibold">85%</p>
        <p className="text-white/70 text-xs md:text-sm mt-1">
          Digital Litigation Success
        </p>
      </div>
      <div>
        <p className="text-white text-2xl md:text-4xl font-semibold">98%</p>
        <p className="text-white/70 text-xs md:text-sm mt-1">
          Empowering Digital Growth
        </p>
      </div>
    </div>
  );
}

function LegalOpsBox() {
  return (
    <div className="rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 px-5 py-4 w-full md:w-[200px]">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <p className="text-white text-sm font-medium">Legal Operations</p>
      </div>
      <svg
        viewBox="0 0 160 50"
        className="w-full mt-3 text-white/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 38 C 20 38, 30 14, 50 14 S 80 42, 100 38 S 140 8, 158 14" />
      </svg>
    </div>
  );
}

function ProcessingBox() {
  return (
    <div className="rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 px-6 py-5 w-full md:w-[180px]">
      <p className="text-white text-3xl font-semibold">100+</p>
      <p className="text-white/70 text-xs mt-1 leading-snug">
        Processing
        <br />
        Solutions
      </p>
    </div>
  );
}

function MobileFloatingCards() {
  return (
    <div className="md:hidden mt-6 grid grid-cols-2 gap-3">
      <LegalOpsBox />
      <ProcessingBox />
    </div>
  );
}

function LegalOpsCard() {
  return (
    <div className="absolute right-[38%] top-[60%] hidden md:block">
      <LegalOpsBox />
    </div>
  );
}

function ProcessingCard() {
  return (
    <div className="absolute right-6 lg:right-12 bottom-12 hidden md:block">
      <ProcessingBox />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0d1117]">
      <Image
        src="/banner.png"
        alt=""
        fill
        priority
        quality={100}
        unoptimized
        sizes="100vw"
        className="object-cover object-top"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-16 xl:px-20 pt-28 md:pt-44 lg:pt-48 pb-16 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white font-bold leading-[1.05] tracking-tight text-3xl md:text-4xl lg:text-5xl">
            Solving Problems
            <br />
            <span className="font-extralight">Without Forcing Solutions</span>
          </h1>

          <div className="mt-6 flex items-start gap-4 max-w-md">
            <span className="block w-[3px] self-stretch bg-[#004972] rounded-full" />
            <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
              Technology consultants, finding the right solutions for all your
              litigation needs
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <button
              type="button"
              className="bg-[#095786] hover:bg-[#2484C6] transition-colors text-white text-sm font-medium px-6 py-2.5 rounded-md shadow-lg shadow-blue-900/30"
            >
              Learn More
            </button>
            <StatChip />
          </div>

          <StatsCard />
          <MobileFloatingCards />
        </div>
      </div>

      <LegalOpsCard />
      <ProcessingCard />
    </section>
  );
}
