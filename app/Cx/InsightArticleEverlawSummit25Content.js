import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleEverlawSummit25Content() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold text-white/80">
        Everlaw Summit &apos;25 · October 21–23 · San Francisco, CA
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Litigation velocity seldom pauses for coast-to-coast travel—but when innovators
        pack a pier-side city for three days of tactile labs and candid corridors, we
        show up caffeinated and ready. In San Francisco&apos;s unmistakable skyline,{" "}
        <strong className="text-white">Everlaw Summit &apos;25</strong>
        {" "}concentrates product vision, fearless storytelling, immersive enablement trails,
        and hands-on critiques that legal operators rarely steal away to enjoy amid
        docket sirens screaming deadlines.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        participates as sponsors and Everlaw-certified strategists bridging managed
        services depth with disciplined cloud workloads.{" "}
        <Link href="/about" className={link}>
          Kevin M. Clark
        </Link>
        , CEO, anchors our booth constellation—ready for architecture consults carving
        path from hurried pilots to sustainably governed productions.
      </p>

      <p className="mb-4 text-base font-semibold text-white">What attendees can anticipate</p>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          Founder &amp; CEO <strong className="text-white">AJ Shankar</strong> unpacking
          pragmatic AI leaps reshaping investigative posture—not vaporware karaoke.
        </li>
        <li>
          <strong className="text-white">Jad Abumrad</strong>, creator of Radiolab &amp;
          More Perfect, meditating aloud on nuanced human discourse when tooling noise
           threatens intimacy.
        </li>
        <li>
          Live certification trenches targeting Review Leaders, Data Operations,
          burgeoning AI operators, narrative Storybuilder architects hungry for repeatable
           muscle memory.
        </li>
        <li>
          Design labs, tactile roadmap previews with Everlaw builders, moderated debates
           challenging assumptions about courtroom-grade rigor juxtaposed iterative cloud
           cadence.
        </li>
      </ul>

      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        We obsess over bridging teams from cautious pilots to audited practice—with
        defensible scaffolding, escalation protocols, multilingual nuance handled before
        crisis calls land at 2 AM. Ping us if you want dedicated whiteboard windows on-site;
        Summit floor serendipity plus booked blocks keeps conversations honest. Catch you
        bayside —
        <em>where earnest eDiscovery futures find oxygen.</em>
      </p>

      <p className="mb-10 text-lg font-semibold tracking-tight text-white">
        Let&apos;s connect in San Francisco!
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Everlaw Summit, GenAI
        litigation modernization, onsite certification immersion, experiential legal
        design labs, investigative storytelling readiness, summit partnerships
      </p>
    </article>
  );
}
