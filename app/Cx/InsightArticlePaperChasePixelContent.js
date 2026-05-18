import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function H({ children }) {
  return (
    <h2
      className="mt-10 mb-3 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticlePaperChasePixelContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Discovery economics have flipped since the print era—with some studies
        suggesting discovery can approach a majority of federal civil litigation spend.
        The &quot;e-&quot; prefix is now the default state, not a novelty bolt-on.
      </p>

      <H>Before the internet</H>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Counsel once warehoused banker boxes; every photocopy nickel nudged teams
        toward digital scans as soon as storage caught up.
      </p>

      <H>eDiscovery software 1.0</H>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Early 1980s tools like Concordance and Summation translated paper to TIFF
        surrogates—easier to herd than cardboard, yet still labor intensive.
      </p>

      <H>Formats and chaos</H>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Spreadsheets, early cloud silos, and brittle databases each introduced
        scalability limits—human data entry errors, deployment drag, or training debt.
      </p>

      <H>EDRM</H>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Tom Gelbmann and George Socha formalized the{" "}
        <a href="https://edrm.net/" className={link} target="_blank" rel="noopener noreferrer">
          Electronic Discovery Reference Model
        </a>{" "}
        in 2005—nine stages still shorthand for defensible ESI choreography.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        For a video primer from CEO Kevin M. Clark, see our companion piece{" "}
        <Link href="/insights/edrm-the-foundational-framework-for-conceptualizing-the-ediscovery-process" className={link}>
          EDRM: The Foundational Framework…
        </Link>
        .
      </p>

      <H>eDiscovery software 2.0</H>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Cloud-native platforms—Everlaw, Relativity/RelativityOne, Reveal, and peers—now
        assume collaboration, security, and analytics by default.
      </p>

      <H>Technology-assisted review</H>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Empirical work in{" "}
        <a
          href="https://doi.org/10.1002/asi.21233"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Roitblat et&nbsp;al. (2009)
        </a>{" "}
        framed TAR parity with linear review; judicial acceptance followed when
        transparency beat pride. Continuous active learning (TAR 2.0) sharpened recall
        while shrinking seed-set theology.
      </p>

      <H>What is next</H>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Messaging explosion—Slack, Teams, ephemeral mobile chat—outpaces traditional
        review metaphors; NLP and unified ingestion are the next bottleneck to solve.
      </p>

      <section className="mt-10 border-t border-white/15 pt-8 text-xs leading-relaxed text-white/70 sm:text-sm">
        <h3 className="mb-3 font-semibold text-white/90">References</h3>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Sullivan, Casey C., &quot;Slow, Expensive, Lopsided Discovery Leads Court to
            Split Cost,&quot; Logikcull (blog).
          </li>
          <li>
            Logikcull, &quot;5 Reasons to Leave Legacy eDiscovery Software Behind.&quot;
          </li>
          <li>
            Singhal &amp; Vaughan, &quot;The Evolution of eDiscovery,&quot; Venio
            Systems (2022).
          </li>
          <li>
            EDRM,{" "}
            <a href="https://edrm.net/" className={link} target="_blank" rel="noopener noreferrer">
              edrm.net
            </a>
            .
          </li>
          <li>
            Roitblat, Herbert L., et&nbsp;al., &quot;Document Categorization in Legal
            Electronic Discovery,&quot; JASIST (2009),{" "}
            <a href="https://doi.org/10.1002/asi.21233" className={link} target="_blank" rel="noopener noreferrer">
              doi:10.1002/asi.21233
            </a>
            .
          </li>
        </ol>
      </section>

      <p className="mt-10 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> eDiscovery history, EDRM,
        TAR,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
