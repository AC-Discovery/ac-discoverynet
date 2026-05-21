import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleEarlyCaseIntelligenceContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Traditional early case assessment often meant ingesting everything in sight,
        running a kitchen-sink search, and hoping diligence surfaced the characters
        who mattered. That &quot;good enough&quot; posture collapses against
        terabyte-grade collaboration trails, multilingual privilege families, and
        judges who demand proportionality math—not vibes.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and{" "}
        <a
          href="https://www.ediscoveryai.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          eDiscovery AI
        </a>{" "}
        pair managed advisory depth with model orchestration through{" "}
        <strong className="text-white">Insight ECI™</strong>, an Early Case
        Intelligence stack built to compress weeks of guesswork into days of
        defensible narrative grounding.
      </p>
      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;Insight ECI helps teams see the full story sooner—with higher fidelity—
        so you understand pivotal people, documents, and escalation paths while
        strategy windows stay open,&quot; says{" "}
        <Link href="/about" className={link}>
          Kevin M. Clark
        </Link>
        , CEO of AC Discovery.
      </blockquote>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Advanced models auto-cluster issues, propose transparent keyword families,
        and monitor recall so calibration exercises remain courtroom-ready. Field
        teams routinely crest north of <strong className="text-white">90%</strong>{" "}
        recall on materially relevant pockets before linear review scales—buying relief
        from budget blowouts that outlive matter closings.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Case Elements™</strong>, the newest Insight ECI
        capability, accelerates first-mile triage so counsel interrogate the anatomy of
        a dispute—not wallpaper PDFs.{" "}
        <strong className="text-white">Jim Sullivan</strong>, CEO and founder of
        eDiscovery AI, notes the objective is blunt: uncover what moves the needle on
        day one instead of week seven.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Post-collection populations routinely shrink <strong className="text-white">50–90%</strong>{" "}
        once noise buckets earn defensible carve-outs. Per-document economics can pivot
        from roughly <strong className="text-white">$1.40</strong> territory toward{" "}
        <strong className="text-white">pennies</strong> when orchestration, QC, and
        transparency stay synchronized—freeing spend for merits advocacy instead of
        redundant re-review loops.
      </p>

      <h2
        className="mt-12 mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About AC Discovery
      </h2>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery delivers legal technology consulting and managed services—
        spanning forensics, managed review, specialized language teams, staffing,
        trial logistics, and AI-forward workflows. Explore{" "}
        <Link href="/" className={link}>
          ac-discovery.net
        </Link>{" "}
        or reach the team via{" "}
        <Link href="/contact" className={link}>
          our contact form
        </Link>
        .
      </p>

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About eDiscovery AI
      </h2>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        eDiscovery AI accelerates review and narrative intelligence with suites
        covering Early Case Intelligence, Review, Privacy, and Multimedia automation.
      </p>
      <p className="text-base leading-relaxed text-white/95 sm:text-lg">
        Learn more at{" "}
        <a href="https://www.ediscoveryai.com/" className={link} target="_blank" rel="noopener noreferrer">
          eDiscoveryAI.com
        </a>
        ,{" "}
        <Link href="/contact" className={link}>
          schedule a demo through our alliance desk
        </Link>
        , or read the{" "}
        <a
          href="https://www.ediscoveryai.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Case Elements fact sheet
        </a>{" "}
        on the eDiscovery AI resource center.
      </p>
    </article>
  );
}
