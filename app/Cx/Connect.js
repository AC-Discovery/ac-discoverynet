import Image from "next/image";

const logos = [
  { src: "/relativity.png", alt: "Relativity", w: 1998, h: 545 },
  { src: "/ediscovery.png", alt: "eDiscovery AI", w: 500, h: 107 },
  { src: "/everlaw.png", alt: "Everlaw", w: 500, h: 107 },
];

function LogoBar() {
  return (
    <div className="bg-[#004972]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12 md:gap-x-16 lg:justify-between">
          {logos.map((logo) => (
            <div key={logo.alt} className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                quality={100}
                unoptimized
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormField({ id, label, type = "text", required = false }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-white/85 text-sm font-medium mb-2"
      >
        {label}
        {required && "*"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="bg-transparent text-white text-sm placeholder:text-white/40 border-0 border-b border-white/30 focus:border-white/70 focus:outline-none pb-2 pt-1"
      />
    </div>
  );
}

function ContactForm() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-10 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] bg-[#2a2d33] px-6 sm:px-10 md:px-14 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 lg:gap-24 items-start">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-white font-semibold leading-[1] tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Let&apos;s
              <br />
              <em className="italic font-bold">Connect</em>
            </h2>
          </div>

          <form className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            <FormField id="firstName" label="First Name" required />
            <FormField id="lastName" label="Last Name" required />
            <FormField id="email" label="Email Address" type="email" required />
            <FormField id="phone" label="Phone" type="tel" />
            <FormField id="company" label="Company Name" />
            <div className="sm:col-span-2 flex flex-col">
              <label
                htmlFor="message"
                className="text-white/40 text-sm mb-2"
              >
                Comment or Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="bg-transparent text-white text-sm placeholder:text-white/40 border-0 border-b border-white/30 focus:border-white/70 focus:outline-none pb-2 pt-1 resize-none"
              />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="bg-[#095786] hover:bg-[#2484C6] transition-colors text-white text-sm font-medium px-8 py-2.5 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Connect() {
  return (
    <>
      <LogoBar />
      <ContactForm />
    </>
  );
}
