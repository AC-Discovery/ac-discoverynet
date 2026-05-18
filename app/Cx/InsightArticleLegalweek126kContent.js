import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleLegalweek126kContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        At Legalweek 2025,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and{" "}
        <a
          href="https://www.everlaw.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everlaw
        </a>{" "}
        host a closed-door working session on generative review in the wild—featuring{" "}
        <a
          href="https://www.blankrome.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Blank Rome
        </a>
        &apos;s deployment of Everlaw AI Assistant Coding Suggestions inside a
        high-stakes government investigation. The firm cleared roughly{" "}
        <strong className="text-white">126,000 documents</strong> in a compressed
        window, trimming first-pass reviewer hours by up to seventy percent while
        holding accuracy targets steady.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The case study highlights how a lean managed-review footprint—powered by
        iterative prompting and transparent quality metrics—can hit aggressive agency
        deadlines without sacrificing defensibility narratives.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        CEO{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          Kevin M. Clark
        </a>
        , Everlaw product leaders, and Blank Rome counsel will dissect precision,
        recall, and F1 evolution as coding models absorbed reviewer feedback—then
        translate lessons into practical integration checklists.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Expect blunt talk on validation protocols, privilege pitfalls, and how to
        brief skeptical stakeholders who still confuse automation with abdication—then
        stay for cocktails with peers who have already lived the rollout.
      </p>

      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;AI isn&apos;t replacing legal expertise—it&apos;s amplifying it, making
        eDiscovery faster, smarter, and more strategic.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO, AC Discovery
        </span>
      </blockquote>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p className="font-semibold text-white">Invite-only session</p>
        <p>New York Hilton Midtown · 1335 Sixth Avenue, New York, NY</p>
        <p>Wednesday, March 26, 2025 · 3:30 p.m. ET (registered guests)</p>
      </div>

      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Space is deliberately tight—email{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>{" "}
        or DM the AC Discovery events desk for guest-list consideration.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> generative AI, document
        review, Everlaw, Coding Suggestions, Blank Rome, Legalweek,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , managed review
      </p>
    </article>
  );
}
