import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleBeforeReviewBeginsContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Before synchronized coding panels fire up—or privilege walls splinter—the
        eDiscovery chorus descends on Atlanta for{" "}
        <strong className="text-white">Thursday, November 13, 2025</strong>.{" "}
        <Link href="https://www.kslaw.com/" className={link} target="_blank" rel="noopener noreferrer">
          King &amp; Spalding LLP
        </Link>{" "}
        opens its doors early for Masters Conference patrons hungry to reshape matter
        strategy before armies of reviewers materialize costs you cannot unwind.
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Flagship breakout{" "}
        <em>
          From Chaos to Clarity: Turning Early Data Insights into Strategic Advantage
        </em>{" "}
        gathers{" "}
        <Link href="/about" className={link}>
          Kevin Clark
        </Link>{" "}
        (
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        ) beside <strong className="text-white">Nima Adabi</strong> (
        <strong>Kirkland &amp; Ellis</strong>),{" "}
        <strong className="text-white">Alex Khoury</strong> (
        <strong>Smith Gambrell Russell</strong>),{" "}
        <strong className="text-white">Nicole Bass</strong> (
        <strong>Hilgers Graben</strong>), and{" "}
        <strong className="text-white">Elliot Bienenfeld</strong> (
        <strong>Beasley Allen</strong>). Expect practical dialogue on layering early
        analytics, custodial interviews, data-mapping artifacts, calibrated AI-assisted
        storyboarding, plus ECA scorecards tethered to courtroom storytelling—not vanity
        metrics.
      </p>

      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        The intent is kinetic: distill raw ingestion dumps into prioritized insight
        streams that compress risk, tame scope creep, accelerate proportionality debates,
        and align budget owners before review engines burn cycles guessing.
      </p>

      <div
        className="mb-10 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6"
        aria-label="Masters Atlanta session logistics"
      >
        <p className="mb-3 text-lg font-bold text-white">Logistics snapshot</p>
        <ul className="space-y-2 text-base leading-relaxed text-white/95 sm:text-lg">
          <li>
            <strong className="text-white">Venue:</strong> King &amp; Spalding · 1180
            Peachtree Street NE, Suite 1600, Atlanta, GA 30309
          </li>
          <li>
            <strong className="text-white">Date:</strong> Thursday, November 13, 2025
          </li>
          <li>
            <strong className="text-white">Arrival:</strong> Doors unlock 8:00 a.m.
          </li>
        </ul>
      </div>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/contact" className={link}>
          Register and join us
        </Link>{" "}
        — and if you&apos;d prefer a concierge path, ping{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>{" "}
        about complimentary passes remaining for strategic partners juggling calendar
        conflicts.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        sponsors The Masters Conference and Masters Conference Legal Events because the
        candid hallway collisions here rival anything staged on ballroom stages—we hope
        to compare notes beside you.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference,
        legal innovation, Kevin M. Clark, data insights strategy, AI, information
        governance, cybersecurity forensics collaboration, litigation support data
        governance, corporate legal partnership, Atlanta legal events
      </p>
    </article>
  );
}
