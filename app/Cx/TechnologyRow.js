import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="56"
      height="16"
      viewBox="0 0 56 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="2" y1="8" x2="50" y2="8" />
      <polyline points="44 2 50 8 44 14" />
    </svg>
  );
}

export default function TechnologyRow({
  id,
  screenSrc,
  screenWidth,
  screenHeight,
  logoSrc,
  logoWidth,
  logoHeight,
  logoAlt,
  description,
  reverse = false,
  cardClassName = "bg-[#004972]",
  arrowLinkClassName = "text-white hover:text-white/75",
  logoClassName = "h-10 md:h-12 lg:h-14 w-auto object-contain",
}) {
  return (
    <section id={id} className="bg-black px-4 sm:px-6 lg:px-10 py-6 md:py-8 scroll-mt-24">
      <div
        className={`mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] px-6 sm:px-10 md:px-14 lg:px-16 py-10 md:py-14 lg:py-16 ${cardClassName}`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center ${
            reverse ? "[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="md:col-span-7">
            <Image
              src={screenSrc}
              alt={`${logoAlt} platform screenshot`}
              width={screenWidth}
              height={screenHeight}
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, 60vw"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="md:col-span-5">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              quality={100}
              unoptimized
              className={logoClassName}
            />
            <p className="text-white text-sm md:text-base leading-relaxed mt-6 max-w-md">
              {description}
            </p>
            <Link
              href="#"
              aria-label={`Contact us about ${logoAlt}`}
              className={`inline-flex items-center mt-8 transition-colors ${arrowLinkClassName}`}
            >
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
