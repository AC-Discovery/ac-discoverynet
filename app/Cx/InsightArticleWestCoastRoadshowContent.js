import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-12 mb-4 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleWestCoastRoadshowContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Generative AI is reshaping discovery workflows and trial preparation at a
        pace legal teams cannot ignore. To help practitioners translate that
        shift into ethical, defensible practice,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and{" "}
        <a
          href="https://www.everlaw.com"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everlaw
        </a>{" "}
        are teaming up on a California West Coast Roadshow built for attorneys,
        paralegals, litigation support professionals, and leaders across
        government agencies, law firms, and legal service organizations.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The programming pairs practical guidance on GenAI adoption with trusted
        CLE pathways and intentional networking — so attendees leave with clearer
        playbooks they can deploy immediately inside their shops.
      </p>

      <SectionHeading>
        Lunch &amp; Learn Legal Lab: CLE — San Diego &amp; Los Angeles
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        These sessions focus squarely on the ethical and practical integration
        of Generative AI inside modern litigation, investigations, and review
        programs.
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">San Diego:</strong> January 21, 2026 —
          supported by the San Diego Paralegal Association (SDPA).
        </li>
        <li>
          <strong className="text-white">Los Angeles:</strong> January 22,
          2026 — supported by the Los Angeles Paralegal Association (LAPA).
        </li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Time:</strong> 11:30 AM – 1:00 PM PT
        (lunch provided).
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Each program includes{" "}
        <strong className="text-white">one hour of Ethics CLE credit</strong>{" "}
        and is anchored in workflows teams already rely on inside Everlaw, with
        AC Discovery consultants adding managed services context from the
        front lines.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/contact" className={link}>
          Register for San Diego — Lunch &amp; Learn Legal Lab
        </Link>
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/contact" className={link}>
          Register for Los Angeles — Lunch &amp; Learn Legal Lab
        </Link>
      </p>

      <SectionHeading>
        Practical insights for modern legal teams
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Expect actionable discussion on supervising AI-assisted workstreams,
        protecting confidentiality across cloud collaboration, validating
        model outputs without slowing matters down, and documenting decisions so
        they hold up inside meet-and-confers, audits, or court scrutiny.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The objective is thoughtful augmentation — using GenAI where it earns
        its place — while reinforcing the professional judgment that only people
        can bring to privileged, high-stakes disputes.
      </p>

      <SectionHeading>
        The Legal Connective: Orange County — after-hours social &amp;
        networking
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Cap the evening of <strong className="text-white">January 22, 2026</strong>{" "}
        at an informal mixer designed for practitioners who prefer candid
        conversation off the clock. Featured guest{" "}
        <strong className="text-white">Andrew Fiorella</strong> of Benesch Law
        Office will share how his team leverages Everlaw in live matters,
        bridging product depth with courtroom-ready outcomes.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/contact" className={link}>
          Register for The Legal Connective | Orange County
        </Link>
      </p>

      <SectionHeading>Registration is open</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Seating is deliberately limited across all three cities to keep
        exchanges high-signal — reserve early to lock in Ethics CLE, lunch labs,
        and the Orange County Legal Connective experience.
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> West Coast legal
        roadshow, California CLE events, GenAI in litigation, legal technology
        CLE, ethics CLE California, eDiscovery education, litigation technology
        consulting, government legal technology, law firm innovation, legal AI
        ethics, trial preparation technology, discovery best practices, Right
        Discovery legal consulting, Everlaw events, California legal networking,
        litigation support services
      </p>
    </article>
  );
}
