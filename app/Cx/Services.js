function ChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CarouselArrows() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <button
        type="button"
        aria-label="Previous"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#004972] hover:text-[#2484C6] flex items-center justify-center transition-colors"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Next"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#004972] hover:text-[#2484C6] flex items-center justify-center transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function HostingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9 5 4h14l2 5" />
      <path d="M3 9v11h18V9" />
      <path d="M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3 1.3 3 3 3 3-1.3 3-3 1.3 3 3 3 3-1.3 3-3" />
      <rect x="9" y="13" width="6" height="7" rx="0.5" />
    </svg>
  );
}

function DocReviewIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <polyline points="9 10 7 12 9 14" />
      <polyline points="15 10 17 12 15 14" />
      <line x1="13" y1="9" x2="11" y2="15" />
    </svg>
  );
}

function AiDiscoveryIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M8.1 7.4 15.9 10.6" />
      <path d="M8.1 16.6 15.9 13.4" />
    </svg>
  );
}

function ServiceCard({ Icon, title, description }) {
  return (
    <div className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 px-6 py-7 md:px-7 md:py-8 flex flex-col items-center text-center">
      <span className="w-12 h-12 rounded-lg bg-[#004972] text-white flex items-center justify-center">
        <Icon />
      </span>
      <h3 className="text-white text-base md:text-lg font-medium mt-5">
        {title}
      </h3>
      <p className="text-white/60 text-xs md:text-sm leading-relaxed mt-3 max-w-[240px]">
        {description}
      </p>
      <button
        type="button"
        className="mt-7 text-white text-xs md:text-sm font-medium hover:text-[#2484C6] transition-colors"
      >
        Learn More
      </button>
    </div>
  );
}

const services = [
  {
    Icon: HostingIcon,
    title: "Processing & Hosting Solutions",
    description:
      "Our secure, reliable, and collaborative cloud-based discovery environments are designed",
  },
  {
    Icon: DocReviewIcon,
    title: "Document Review Services",
    description:
      "Our Document Review and Managed Review services combine cutting-edge technology",
  },
  {
    Icon: AiDiscoveryIcon,
    title: "AI Discovery Services",
    description:
      "AC Discovery's AI Discovery Services combine cutting-edge generative AI technology",
  },
];

export default function Services() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 pb-10 md:pb-16">
      <div className="mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] bg-white/[0.21]  px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <h2 className="text-white font-semibold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px] max-w-3xl">
            We find{" "}
            <em className="italic font-bold">solutions</em>
            <br />
            needed to stay ahead
          </h2>
          <CarouselArrows />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-14">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
