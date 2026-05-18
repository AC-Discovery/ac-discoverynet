import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleFtcNoncompeteContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The Federal Trade Commission&apos;s rulemaking on new noncompete agreements
        broadly labels post-employment restrictions as unfair competition—blocking
        fresh covenants while carving nuanced treatment for senior executives versus
        other workers once effective dates arrive.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Agency economists project macro upside—health cost relief, new business
        formation, patenting, and wage growth—over the coming decade.{" "}
        <strong className="text-white">Kevin Clark</strong>, CEO of{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , urges clients to pair regulatory monitoring with refreshed employment data maps:
        HR systems, equity grants, and legacy M&amp;A schedules frequently hide
        forgotten restrictive covenants that suddenly matter in diligence or litigation.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> FTC, noncompetes,
        employment, innovation,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
