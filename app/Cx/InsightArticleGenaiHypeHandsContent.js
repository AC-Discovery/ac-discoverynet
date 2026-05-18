import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleGenaiHypeHandsContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference New York
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <a
          href="https://www.everlaw.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everlaw
        </a>{" "}
        breakout <em>GenAI: Moving from Anticipation to Action</em>, led by{" "}
        <strong className="text-white">Sean Wiederkehr</strong>, reminded a packed
        Masters New York room that the technology is neither wizardry nor fatalism.
        Framing mattered: &quot;GenAI isn&apos;t magic… but it is powerful—and
        it&apos;s already reshaping legal work.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Use cases surfacing fastest—summarization, thematic classification,
        clustering populations, language-first review accelerators—share DNA: bounded
        scope, crisp reviewer feedback loops, and humans who refuse to confuse
        latency for wisdom. Moderators urged &quot;start small, start smart,&quot;
        pairing pilots with observable KPIs rather than nebulous innovation theatre.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Audience Q&amp;A revisited hallucination anxiety, data residency, and vendor
        diligence—landing on the same drumbeat:{" "}
        <strong className="text-white">human judgment remains statutory currency</strong>; models
        merely compress cycles when governance earns trust.
      </p>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Key takeaways
      </h2>
      <ul className="mb-10 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Anchor pilots in narrow tasks (summaries, clustering) for tangible ROI.</li>
        <li>Modernize workflows—avoid wholesale rip-and-replace theatrics.</li>
        <li>Structured pilots tame risk while building coalitions.</li>
        <li>Instrument accuracy, reviewer satisfaction, and cycle times or you fly blind.</li>
        <li>AI augments talent; it never swaps out professional accountability.</li>
      </ul>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> generative AI, legal tech,
        eDiscovery, Masters Conference NYC, Everlaw,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , litigation workflows, responsible AI adoption
      </p>
    </article>
  );
}
