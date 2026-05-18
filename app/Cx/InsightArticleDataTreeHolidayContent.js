import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleDataTreeHolidayContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        While playlists pivot to peppermint lattes and twinkling lights, the pace
        of serious litigation refuses to RSVP for downtime. Custodians email at
        odd hours. Productions land with last-minute tweaks. PSTs swell. Export
        jobs queue like sleigh bells you cannot mute. Someone still has to marshal
        the metadata, tame the spreadsheets, and keep privilege calls defensible.
        Enter the quieter holiday miracle: AC Discovery teammates who steady the
        wire long after courthouse doors lock.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The legal marketplace rarely pauses for cocoa breaks. Custody disputes,
        sprawling investigations, and board-driven investigations collide with
        fiscal-year closes—and{" "}
        <Link href="/about" className={link}>
          Kevin M. Clark
        </Link>
        , Head and CEO of the AC Discovery eDiscovery Workshop, rallies the crew
        so productions, forensic collections, and managed review timelines hold
        even when courthouse doors lock early for the holidays.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Project management conductors.</strong> They
        translate intake questionnaires into matter architecture, reconcile scope,
        shepherd workflow design across review fronts, escalate QC outliers, shape
        reporting cadences stakeholders actually read, and insulate attorneys from
        vendor noise—not because counsel cannot handle complexity, but because
        festive seasons deserve preserved brain space for merits strategy.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Forensic collection specialists.</strong>{" "}
        Call them the engineers with the velvet sack of adapters. Whether the
        collection is bedside in a SOC2 room or surgically staged over VPN, chain of
        custody stays pristine, handoffs arrive encrypted and logged, narrative
        deliverables preempt tomorrow&apos;s meet-and-confers—no coal in your
        defensibility stocking.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Managed Review elves.</strong> Calibration
        memos sparkle. Coding panels stay aligned across responsiveness calls,
        privilege families, escalating issue tags, and CAL/TAR/GenAI-guided sweeps,
        anchored by escalation paths that privilege partners trust when regulators
        read every footnote beneath the tinsel-strewn footnotes anyway.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        We could not shepherd this volume—or hold the fidelity bar—without trusting
        clients who collaborate transparently mid-holiday rush. Consider this our
        digital thank-you card to every paralegal juggling gift wrap between
        privilege logs.
      </p>
      <p className="text-base font-bold leading-relaxed text-white sm:text-lg">
        Merry Christmas and Happy Holidays from{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        — where we sleigh the details so you can focus on what matters most!
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> eDiscovery services,
        forensic collection, managed review, legal technology support, holiday legal
        operations, data processing workflows, project management in litigation,
        chain-of-custody best practices, document review teams, defensible data
        handling, legal industry year-end support, AC Discovery services
      </p>
    </article>
  );
}
