"use client";

import Image from "next/image";

const services = [
  "Hosting",
  "Managed Review",
  "eDiscovery Staffing",
  "Trial Prep",
  "Cyber Data Breach & Incident Response Services",
  "Legal Operations & Spend Analysis",
  "AI Discovery Services",
];

const forensics = [
  "Digital Data Collection",
  "Digital Forensic Analysis",
  "Expert Testimony",
];

const technology = [
  "RelativityOne",
  "Everlaw",
  "eDiscovery AI",
];

const info = [
  "About Us",
  "Insights",
  "Meet Our Team",
  "Contact Us",
  "Careers",
  "Privacy Policy",
  "Terms & Conditions",
];

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold tracking-wide text-sm uppercase">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-white/75 hover:text-white text-sm leading-snug transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V9.9H7.7V13h2.7v8h3.1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5h-3v12h3v-12zm-1.5-5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zm15.5 17v-6.4c0-3.4-1.8-5-4.2-5-1.9 0-2.8 1.1-3.3 1.9V8.5h-3v12h3v-6.6c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.7v6.4h3.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 3H21l-6.5 7.43L22 21h-6.156l-4.82-6.293L5.5 21H2.74l6.97-7.972L2 3h6.31l4.36 5.77L18.244 3zm-1.08 16.2h1.524L7.94 4.7H6.31l10.853 14.5z" />
    </svg>
  );
}

function SocialIcons() {
  const socials = [
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: LinkedInIcon, label: "LinkedIn" },
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: XIcon, label: "X" },
  ];
  return (
    <div className="flex items-center gap-3 mt-6">
      {socials.map(({ Icon, label }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="w-9 h-9 rounded-full bg-white text-[#004972] flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#004972] to-[#002a42] px-6 sm:px-10 md:px-14 lg:px-20 pt-12 md:pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-3">
            <FooterColumn title="Services" items={services} />
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Forensics" items={forensics} />
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Technology" items={technology} />
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Info" items={info} />
          </div>

          <div className="md:col-span-3 sm:col-span-2">
            <Image
              src="/footer-logo.png"
              alt="E-Discovery Services"
              width={165}
              height={49}
              quality={100}
              unoptimized
              className="h-10 md:h-11 w-auto object-contain"
            />
            <p className="text-white/80 text-sm leading-relaxed mt-5 max-w-[240px]">
              Technology consultants, finding the right solutions for all your
              litigation needs.
            </p>

            <h4 className="text-white text-base font-semibold mt-7">
              Join a Newsletter
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2 max-w-[280px] border-b border-white/30 focus-within:border-white/70 transition-colors"
            >
              <input
                type="email"
                placeholder="your email here"
                className="flex-1 bg-transparent text-white text-sm placeholder:text-white/50 py-2 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-white hover:text-white/70 transition-colors p-1"
              >
                <SendIcon />
              </button>
            </form>

            {/* <SocialIcons /> */}

            <p className="text-white/65 text-xs mt-8">
              {new Date().getFullYear()} - AC eDiscovery Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
