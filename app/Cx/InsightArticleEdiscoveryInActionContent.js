import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleEdiscoveryInActionContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Work is digital, so discovery is too. <strong className="text-white">eDiscovery</strong>{" "}
        is the end-to-end discipline of identifying, collecting, and producing digital
        evidence—mail, chat, social, databases, and everything tangled between. Fluency
        in that pipeline is baseline competency for litigators, corporations, and anyone
        touching modern disputes.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Sophisticated matters strain petabyte-scale collections; industry surveys from
        vendors like Relativity underscore why brute-force linear review collapsed under
        its own economics—and why analytics, sampling, and transparent workflows took
        its place.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Canonical phases—identification, preservation, collection, processing,
        review, analysis, production—still matter. Preservation is the hinge: botched
        holds convert winnable cases into sanction headlines.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The{" "}
        <a
          href="https://www.law.cornell.edu/rules/frcp"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal Rules of Civil Procedure
        </a>{" "}
        evolved in lockstep with ESI realities. Rule 26 anchors proportionality,
        cooperation, and disciplined scope—recent amendments keep pushing parties toward
        early disclosures, pragmatic meet-and-confers, and cost-aware discovery
        planning rather than boundless fishing.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        eDiscovery is not jargon—it is the operating system beneath trial strategy.
        Whether you are mapping risk before filings land or steering post-complaint
        productions, the teams that understand data mechanics hold the advantage.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> eDiscovery, ESI, legal
        hold, ECA, FRCP Rule 26, litigation readiness,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , proportionality
      </p>
    </article>
  );
}
