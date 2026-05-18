import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersDallasDynastyContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Where in the world is <strong className="text-white">Kevin M. Clark</strong>?
        Back in Dallas—where the{" "}
        <strong className="text-white">Masters Conference</strong> lineup feels bigger
        than a prime-time feud. Hosted by{" "}
        <a
          href="https://www.hklaw.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Holland &amp; Knight
        </a>{" "}
        on <strong className="text-white">March 5</strong>, the agenda is a Texas-sized
        look at AI, eDiscovery, cybersecurity, and competitive ops.
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          How is AI Transforming Legal Workflows and Decision-Making?
        </strong>{" "}
        digs into ML, NLP, and predictive analytics—charting how automation sharpens
        accuracy while professional accountability stays centered.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Mastering Power Skills for Legal Excellence</strong>{" "}
        (moderated by <strong className="text-white">Richard Robinson</strong>) covers
        communication, EQ, adaptability, and leadership—the human stack lawyers need as
        tech accelerates around them.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          Connecting the Digital Dots: eDiscovery and the Future of Evidence
        </strong>{" "}
        traces Slack, mobile, and geolocation artifacts through chain-of-custody and
        storytelling demands—because defensible facts still need persuasive narratives.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          Cybersecurity Challenges in Incident Response
        </strong>{" "}
        dissects vendor risk, contractual blind spots, and tabletop habits before breach
        theater becomes breach reality.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          Generative AI in eDiscovery: How to Test, Trust, and Thrive
        </strong>{" "}
        closes with validation frameworks—sampling, metrics, and documentation that keep
        regulators and judges comfortable with model-assisted review.
      </p>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>1722 Routh St #1500, Dallas, TX 75201</p>
        <p>Doors 8:00 a.m. CT</p>
        <p>
          <a
            href="https://bit.ly/42jI6KW"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register →
          </a>
        </p>
      </div>

      <p className="mb-10 text-sm text-white/80">
        Thanks to sponsors, speakers, and partners—and to Holland &amp; Knight for
        hosting.{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        is proud to support Masters Conference programming.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference Dallas,
        legal tech, AI, cybersecurity, eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
