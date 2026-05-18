function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.92 6.36 6.96.74-5.2 4.71 1.5 6.84L12 17.6l-6.18 3.55 1.5-6.84-5.2-4.71 6.96-.74L12 2.5z" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#facc15]">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="rounded-2xl bg-white/[0.21] border border-white/5 p-6 md:p-8">
      <StarRow />
      <p className="text-white/65 text-sm leading-relaxed mt-5">
        {quote}
      </p>
      <div className="flex items-center gap-3 mt-7">
        <img
          src={avatar}
          alt={name}
          width={48}
          height={48}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="leading-tight">
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-white/55 text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The e-discovery service provided was outstanding. Their expertise and thorough approach made the entire process seamless and significantly improved our case management efficiency.",
    name: "Jessica L",
    role: "CEO of Nexus Corp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The e-discovery service provided was outstanding. Their expertise and thorough approach made the entire process seamless and significantly improved our case management efficiency.",
    name: "David M",
    role: "Founder of BrightPath",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The e-discovery service provided was outstanding. Their expertise and thorough approach made the entire process seamless and significantly improved our case management efficiency.",
    name: "Sophia T",
    role: "Director at Innovate",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "The e-discovery service provided was outstanding. Their expertise and thorough approach made the entire process seamless and significantly improved our case management efficiency.",
    name: "Michael R",
    role: "COO of FutureTech",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-white font-semibold text-center leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl">
          What Our Clients Say
          <br />
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-14">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
