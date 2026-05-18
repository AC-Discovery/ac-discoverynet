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

export default function InsightArticleBeyondBenchAiContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference Denver
      </p>
      <p className="mb-6 text-lg italic text-white/90">AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Judge <strong className="text-white">Maritza Dominguez Braswell</strong> traded
        robe anecdotes for blunt talk about how generative models already permeate
        chambers—often without policy scaffolding. Her thesis: artificial intelligence
        is less a hypothetical ethics paper than ambient software counsel touch dozens of
        times per day, whether firms sanction it or not.
      </p>

      <SectionHeading>From search shortcut to strategic thought partner</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Practitioners quietly stack ChatGPT, Claude, and domain-specific copilots beside
        Westlaw tabs, using them to summarize depositions, stress-test narratives, and
        rehearse voir dire hypotheticals. The challenge is institutionalizing guardrails
        without pretending the tools do not exist.
      </p>

      <SectionHeading>Evidence integrity under strain</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Deepfake audio, synthetic pleadings, and biased training corpora force judges
        into evidentiary gatekeeping they never trained for. Braswell emphasized
        transparency obligations: if a party leans on algorithmic drafting, opponents
        deserve enough process to test provenance—even when federal statutes lag.
      </p>

      <SectionHeading>Judges as technology translators</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        State absent federal rules, individual jurists set local precedent on disclosure,
        validation, and jury instructions explaining probabilistic tools. That makes
        continuing education in statistics and ML hygiene as vital as evidence doctrine.
      </p>

      <SectionHeading>Efficiency that preserves humans</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Pilot courts already route low-stakes filings via AI-assisted clerks, freeing
        staff for complex dockets. Braswell stressed that automation should empower
        people to &quot;do more with less,&quot; not silently thin the workforce.
      </p>

      <h2
        className="mt-12 mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Takeaways
      </h2>
      <ul className="mb-10 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Grassroots adoption outpaces policy—lead with governance, not denial.</li>
        <li>Bias and synthetic evidence are admissibility battlefields.</li>
        <li>Bench officers must explain tools plainly to factfinders.</li>
        <li>Operational efficiency demands transparent deployment.</li>
        <li>Lawyers who pair domain expertise with disciplined prompting stay indispensable.</li>
      </ul>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> judicial innovation,
        generative AI, deepfakes, court administration,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Masters Conference Denver, future of law
      </p>
    </article>
  );
}
