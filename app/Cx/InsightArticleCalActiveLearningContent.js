import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleCalActiveLearningContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Continuous Active Learning (CAL) is rewriting predictive review: models ingest
        senior-attorney judgments in real time—think recommendation engines, except the
        output is evidentiary instead of entertainment.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        In{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          this executive briefing
        </a>
        , CEO{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          Kevin M. Clark
        </a>{" "}
        walks through CAL deployments spanning regulatory probes, complex litigation, and
        compliance monitors—showing how adaptive ranking trims spend while tightening
        statistical rigor.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Because CAL learns iteratively, it absorbs nuance—odd contract clauses,
        industry slang, and privilege tells—that brittle keyword stacks miss, which is
        why teams under investigatory pressure increasingly default to CAL-first
        workflows validated through transparent sampling.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The same dynamics apply outside litigation: diligence in M&amp;A, proactive
        risk sensing, and operational audits all benefit from models that improve as
        humans teach them what &quot;good&quot; looks like for that matter.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Whether you are staring down trial timelines or enterprise risk programs, CAL is
        becoming table stakes for teams that would rather invest in defensible math than
        justify linear review sunk costs.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> CAL, predictive coding,
        machine learning, document review,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
