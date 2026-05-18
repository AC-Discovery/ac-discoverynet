import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleModernCommunicationsDiscoveryContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        eDiscovery&apos;s guardrails keep widening as Slack threads, geolocation, and
        cloud exports join the evidence mix. Join CEO{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          Kevin M. Clark
        </a>
        , forensics principal <strong className="text-white">Jerry Bui</strong> (
        <strong>Light Forensics</strong>), and <strong className="text-white">Robert Keeling</strong>{" "}
        (<strong>Redgrave LLP</strong>) for a live two-hour program—{" "}
        <em>
          Modern Communications, Data &amp; Discovery: Leveraging All Available Data to
          Tell the Story
        </em>{" "}
        —on <strong className="text-white">Tuesday, February 18, 2025 · 1:00–3:00 p.m. ET</strong>.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Registration options:{" "}
        <a href="https://www.mylawcle.com/" className={link} target="_blank" rel="noopener noreferrer">
          MyLawCLE
        </a>{" "}
        ·{" "}
        <a href="https://www.fedbar.org/" className={link} target="_blank" rel="noopener noreferrer">
          Federal Bar Association
        </a>
        .
      </p>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Program focus
      </h2>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Slack, smartphone telemetry, and ephemeral chat stress legacy preservation
        orthodoxies—especially when AI-assisted collection shortcuts tempt teams to skip
        chain-of-custody fundamentals. Faculty will map how to integrate modern sources
        while keeping forensic credibility, then translate disparate artifacts into a
        unified narrative fit for regulators, boards, and juries.
      </p>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About the speakers
      </h2>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Kevin M. Clark</strong> leads{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        with a résumé spanning Williams &amp; Connolly, global ALSP leadership, and
        HaystackID&apos;s analytics programs—pairing bar licenses in Texas, D.C., and
        Illinois with a transatlantic solicitor qualification.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Robert Keeling</strong> co-leads Redgrave&apos;s
        executive committee and its Second Request bench, blending predictive coding,
        generative experimentation, and publications honed from Sidley&apos;s eDiscovery
        group and DOJ/FTC facing matters.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Slack discovery, mobile
        evidence, storytelling, CLE,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Redgrave, forensics
      </p>
    </article>
  );
}
