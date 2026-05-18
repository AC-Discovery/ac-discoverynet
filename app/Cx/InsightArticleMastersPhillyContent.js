import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-10 mb-4 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleMastersPhillyContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Philadelphia welcomes a powerhouse Masters Conference installment on{" "}
        <strong className="text-white">October 14, 2025</strong>—one packed day
        devoted to defensible eDiscovery, pragmatic legal technology, and the
        regulatory guardrails tightening around both. Panels weave tactical playbooks
        with provocative debate so litigators, compliance stewards, and enablement
        teammates leave with compasses—not slide debris.
      </p>

      <SectionHeading>
        The State of eDiscovery: Case Law and Hot Topics
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Jurists and practitioners unpack recent opinions reshaping proportionality
        tests, privilege skirmishes, and the admissibility scaffolding supporting
        analytics- and AI-assisted review. Expect no “safely ignore” talking
        points—only receipts worth anchoring meet-and-confers.
      </p>

      <SectionHeading>
        The Investigation Playbook: Five Essential Lessons for Corporate &amp; Regulatory
        Matters
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Seasoned investigators translate war stories from cross-border
        productions into disciplined checklists: scoping custodians, corralling
        ephemeral collaboration evidence, threading regulators without torching
        culture, and narrating outcomes for boards that demand precision, not drama.
      </p>

      <SectionHeading>From Pilot to Practice</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/about" className={link}>
          Kevin M. Clark
        </Link>{" "}
        (CEO,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        ) joins <strong className="text-white">Stephanie Wilkins</strong> (
        <strong>Legaltech Hub</strong>),{" "}
        <strong className="text-white">Danny Thankachan</strong> (
        <strong>CaseGlide</strong>), and{" "}
        <strong className="text-white">Alicia Clausen</strong> (
        <strong>Crowell &amp; Moring LLP</strong>) for a candid look at moving beyond
        glossy pilots. Topics include selecting measurable AI use cases, sequencing
        low-risk proofs of value, harmonizing privacy and privilege constraints,
        training reviewers who spot model drift, policy drafting that survives
        privilege logs, and stitching workflows into matter templates that partners
        actually reuse.
      </p>

      <SectionHeading>Interactive breakouts</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Birds-of-a-feather lanes dissect political volatility&apos;s ripple effects on
        legal tech procurement, pragmatic guardrails for GenAI adoption, and the
        contract engineering realities inside modern ESI protocols. Hands-on labs
        explore Microsoft Purview plus CoCounsel Legal so teams pressure-test
        assumptions before opposing bullets fly.
      </p>

      <SectionHeading>The Ethics Game Show</SectionHeading>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">David Cohen</strong> and{" "}
        <strong className="text-white">Marcin Krieger</strong> of Reed Smith LLP
        host a fast-paced session surfacing professional responsibility tensions most
        CLE decks gloss over—audience energy mandatory, sanctimony optional.
      </p>

      <div className="mb-10 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6 space-y-2 text-base text-white/95">
        <p>
          <strong className="text-white">Host:</strong> Cozen O&apos;Connor
        </p>
        <p>
          <strong className="text-white">When:</strong> Tuesday, October 14, 2025
        </p>
        <p>
          <strong className="text-white">Where:</strong> Liberty Place · 1650 Market
          Street, Suite 2800 · Philadelphia, PA 19103
        </p>
        <p className="pt-2">
          <Link href="/contact" className={`${link} font-semibold`}>
            Register now
          </Link>
        </p>
      </div>

      <p className="mb-10 text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        is a proud sponsor of The Masters Conference—see you in the City of Brotherly
        Love.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference
        Philadelphia, eDiscovery trends, legal technology 2025, generative AI in
        law, Kevin M. Clark, AC Discovery, corporate investigations strategies, ESI
        protocols, Microsoft Purview, CoCounsel Legal, AI adoption law firms,
        regulatory compliance, trial preparation
      </p>
    </article>
  );
}
