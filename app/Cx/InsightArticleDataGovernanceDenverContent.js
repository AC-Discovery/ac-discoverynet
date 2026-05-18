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

export default function InsightArticleDataGovernanceDenverContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Data Governance Roundtable · Masters Conference Denver
      </p>
      <p className="mb-6 text-lg italic text-white/90">AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        CEO <strong className="text-white">Kevin M. Clark</strong> shepherded general
        counsel, compliance leaders, and CIOs through the uncomfortable truth that data
        gravity now outpaces org charts: exponential storage, patchwork migrations, and
        AI copilots that &quot;see&quot; every mislabeled share invite make passive
        governance a liability line item.
      </p>

      <SectionHeading>Sprawl as silent debt</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Post-merger Google versus Microsoft collisions, zombie backup tapes, and
        department-level shadow drives inflate discoverable surface area faster than
        legal can map it. Panelists described seven-figure excavation projects triggered
        by a single stubborn attachment path.
      </p>

      <SectionHeading>Holds, attrition, and training debt</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Employee exits routinely break custodial continuity; technology alone cannot
        teach people where matter data belongs or how tags should propagate.
        Playbooks without enablement become shelfware the moment HR misses an offboarding
        trigger.
      </p>

      <SectionHeading>Shadow IT &amp; hyperlinked evidence</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Unsanctioned SaaS, ephemeral Slack or Signal threads, and permissive hyperlinking
        to SharePoint deltas bedevil traditional attachment paradigms. Deciding what is
        &quot;in&quot; a family now requires systems thinking, not binder instincts.
      </p>

      <SectionHeading>Finance finally listens</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        One leader confessed to $40,000 in legal fees debating a lone record—proof that
        centralized lakes, disciplined metadata (Nuix, Purview, Vault hybrids), and
        proactive retention cuts beat reactive fire drills.
      </p>

      <SectionHeading>Copilot is coming for your crown jewels</SectionHeading>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Microsoft Copilot-style agents will surface misfiled compensation spreadsheets or
        source snippets unless labels, ACLs, and sensitivity tags keep pace.
        Governance is posture, not a one-time project; &quot;doing nothing&quot; now
        guarantees tomorrow&apos;s prompt jailbreak headline.
      </p>

      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Need help sequencing remediation?{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> data governance, legal holds,
        shadow IT, Microsoft Copilot, Nuix, eDiscovery readiness,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Masters Conference Denver
      </p>
    </article>
  );
}
