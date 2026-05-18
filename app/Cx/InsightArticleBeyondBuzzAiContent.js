import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-10 mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleBeyondBuzzAiContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference Denver · 2023
      </p>
      <p className="mb-6 text-lg italic text-white/90">AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;AI Stories from the Front Line&quot; paired{" "}
        <strong className="text-white">Sloane Dryer</strong> (Holland &amp; Hart) with{" "}
        <strong className="text-white">Pete Feinberg</strong> (Consilio) to document
        deployments that survived privilege review, not PowerPoint. Dryer&apos;s
        blunt opener still echoes: &quot;If you&apos;re not using AI yet, you&apos;re
        already behind.&quot;
      </p>

      <SectionHeading>Workflows that stuck</SectionHeading>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">Privilege logs:</strong> GenAI drafted entries
          for an 80k-document privilege sprint—over half accepted verbatim once counsel
          tuned prompts and QC loops.
        </li>
        <li>
          <strong className="text-white">Relevance coding:</strong> A modeled stack hit
          96% agreement with gold-standard reviewers while surfacing rationale strings
          attorneys could audit in seconds.
        </li>
        <li>
          <strong className="text-white">Email hygiene:</strong> SimplyFile-style
          Outlook extensions learned from individual filing habits, reclaiming hours
          weekly without aspirational &quot;inbox zero&quot; theater.
        </li>
        <li>
          <strong className="text-white">Meeting intelligence:</strong> Homegrown
          pipelines on Claude/OpenAI baselines beat consumer Zoom summaries on
          fidelity, redaction, and privacy guardrails.
        </li>
      </ul>

      <SectionHeading>Caveats worth the airtime</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Spreadsheets, chat exports, and other semi-structured payloads still humble
        models; hallucination risks demand privilege-aware reviewers and lineage
        tracking; &quot;context-rich&quot; prompting—audience, tone, exemplars—often
        beats brute-force token dumps.
      </p>

      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;AI isn&apos;t just changing how we practice law—it&apos;s changing
        what&apos;s possible.&quot;
      </blockquote>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Questions?{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> generative AI, privilege
        logs, SimplyFile, Claude, OpenAI, prompt engineering, document review,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Masters Conference Denver
      </p>
    </article>
  );
}
