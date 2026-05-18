import Image from "next/image";

function StatsCard() {
  return (
    <div className="rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/15 p-6 md:p-7">
      <div className="flex items-baseline gap-10 md:gap-12">
        <p className="text-white text-3xl md:text-4xl font-semibold">120k+</p>
        <p className="text-white text-3xl md:text-4xl font-semibold">90%</p>
      </div>
      <p className="text-white/80 text-sm leading-relaxed mt-5 max-w-sm">
        Law firms &amp; Corporations. Headquartered in Dallas, with a
        nationwide presence, our team specializes in litigation &amp;
        investigations support of cloud-based software.
      </p>
      <button
        type="button"
        className="mt-6 text-white text-sm font-medium hover:text-white/70 transition-colors"
      >
        Learn More
      </button>
    </div>
  );
}

function OutcomeStep({ number, text }) {
  return (
    <div className="flex items-start gap-5">
      <span className="text-white/85 text-sm font-medium pt-0.5 shrink-0">
        {number}
      </span>
      <p className="text-white/85 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function OutcomeCard() {
  return (
    <div className="md:mt-16">
      <h3 className="text-white text-lg md:text-xl font-medium tracking-wide uppercase">
        The Outcome
      </h3>
      <div className="mt-5 rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/15 p-6 md:p-7 space-y-7">
        <OutcomeStep
          number="01"
          text="Allow our clients to focus on lawyering."
        />
        <OutcomeStep
          number="02"
          text="Our goal is to utilize the most up to date technology to overcome our clients' litigation obstacles in the most efficient manner, manage costs, and deliver outstanding work product."
        />
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 pb-10 md:pb-16">
      <div className="mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] bg-[#004972] px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-8">
            <h2 className="text-white font-semibold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Finding the <em className="italic font-semibold">right</em>
              <br />
              solutions for our clients
            </h2>
          </div>
          <div className="md:col-span-4 md:pt-3">
            <p className="text-white/85 text-sm md:text-[15px] leading-relaxed max-w-sm">
              We aren&apos;t here to simply push a product. Our team of experts
              are well versed in today&apos;s legal technology tools and best
              practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch mt-10 md:mt-14">
          <div className="md:col-span-4">
            <StatsCard />
          </div>

          <div className="md:col-span-4">
            <OutcomeCard />
          </div>

          <div className="md:col-span-4">
            <div className="rounded-2xl overflow-hidden  h-full">
              <Image
                src="/firm.png"
                alt="Our team"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
