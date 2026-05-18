import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleLegalHoldsPreservationContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Preserving electronically stored information (ESI) anchors any serious
        eDiscovery strategy. Once litigation is reasonably anticipated, organizations
        must keep relevant data from being deleted, altered, or lost. That{" "}
        <strong className="text-white">duty to preserve</strong> spans platforms and
        formats. Weak preservation invites sanctions, exclusions, or adverse
        inferences under Rule 37(e) of the{" "}
        <a
          href="https://www.law.cornell.edu/rules/frcp/rule_37"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal Rules of Civil Procedure
        </a>
        .
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        A legal hold—litigation hold—is the customary vehicle: written direction that
        employees and custodians retain potentially responsive information. The clock
        starts when dispute is <em>reasonably foreseeable</em>, not when the complaint
        drops—{" "}
        <a
          href="https://www.casetext.com/case/zubulake-v-ubs-warburg-llc-1"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Zubulake v. UBS Warburg LLC</em>
        </a>{" "}
        (Zubulake IV, 220 F.R.D. 212, S.D.N.Y. 2003) remains the north star for that
        trigger, keeping ESI from vanishing under routine retention sweeps.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Notice content matters: describe the matter, the data families implicated, and
        custodian duties plainly. Issuance is only step one—monitor acknowledgments,
        refresh reminders, and route questions to people who can answer them. Platforms
        like{" "}
        <a
          href="https://www.relativity.com/ediscovery/legal-hold/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Relativity Legal Hold
        </a>{" "}
        automate issuance, attestation, and escalation without replacing judgment.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Loop IT and records management early. Map mailboxes, mobiles, SaaS workspaces
        (Teams, Slack), and backup tiers before the opposition asks.{" "}
        <a
          href="https://thesedonaconference.org/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          The Sedona Conference
        </a>{" "}
        stresses preservation that is reasonable and proportionate—good faith over
        infinite capture.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Build a defensible narrative: when the hold launched, whom it reached,
        acknowledgments received, and remedial steps for tricky sources. Courts
        increasingly expect detail when spoliation fights erupt—discipline here
        trims risk downstream.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> legal hold, duty to
        preserve, ESI, litigation hold,{" "}
        <em>Zubulake</em> standard, data mapping, proportional preservation, audit
        trail, spoliation,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
