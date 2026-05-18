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

export default function InsightArticleUnderAttackCyberContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference Denver · 2024
      </p>
      <p className="mb-6 text-lg italic text-white/90">AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Moderator <strong className="text-white">James Jansen</strong> (
        <strong>Consilio</strong>) convened <strong className="text-white">Shawn Cheadle</strong>{" "}
        (Taft Law), <strong className="text-white">Jeff Mostowski</strong> (PNG Cyber),
        and <strong className="text-white">Charlie Groves</strong> (
        <strong>CrowdStrike</strong>) for an unflinching audit of ransomware economics,
        deepfake-aided fraud, and board-level denial. The consensus: most org charts remain
        rehearsal-light while adversaries iterate weekly.
      </p>

      <SectionHeading>Speed, scale, synthetic persuasion</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Phishing volumes spiked ~442% in late 2024; AI-crafted lures lifted click-through
        rates into the mid-fifties—orders of magnitude above historical baselines. A
        Lockheed Martin red-team spoof duped more than 70% of recipients, underscoring
        that even disciplined workforces fatigue. Deepfake-enabled business email
        compromises now include synthetic CFO Zoom briefings that cleared eight-figure
        wires before finance smelled smoke.
      </p>

      <SectionHeading>Organized crime as SaaS</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Groves likened elite crews to holding companies with HR desks: vishing farms, SIM
        swap bureaus, and ransomware affiliates trade playbooks like subscription SKUs.
        Meanwhile endpoint telemetry surfaces hundreds of named adversary cells—each
        hunting operational tempo edges measured in minutes, not months.
      </p>

      <SectionHeading>Incident response: first 48 hours</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Mostowski urged general counsel to pre-wire two numbers—outside breach counsel and
        cyber insurers—before keyboards go dark. Tabletop rehearsals, immutable backups,
        and literal paper runbooks beat heroic improvisation when segmented networks
        flatline. If playbooks live only inside SharePoint, assume attackers own them too.
      </p>

      <SectionHeading>Supply-chain asymmetry</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Prime contractors weaponize CMMC expectations, but thousands of small vendors
        cannot realistically absorb Level 2/3 controls—making them the preferred beachhead
        for nation-states and ransomware entrepreneurs alike. Procurement teams must
        fund baseline hygiene upstream or inherit downstream litigation.
      </p>

      <SectionHeading>Geopolitics &amp; fake hires</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Panels noted Pyongyang underwriting massive GDP slices via cybercrime, Beijing
        coordinating multi-year supply-chain burglary, and recruiters discovering that
        generative kits let &quot;candidate farms&quot; ace interviews—meaning one hire
        can cloak dozens of lateral insiders. Insurance markets softened pricing slightly
        but hardened questionnaires past 150 controls; unprepared applicants face
        uncovered claims.
      </p>

      <h2
        className="mt-12 mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Key takeaways
      </h2>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Generative phishing shattered historical click-rate assumptions.</li>
        <li>Deepfakes, vishing, and SIM swaps are default tactics for high-value fraud.</li>
        <li>Criminal groups resemble professional services firms—with SLA.</li>
        <li>Hours one through forty-eight define containment; rehearse mercilessly.</li>
        <li>Notify outside counsel and carriers immediately—parallel tracks save slots.</li>
        <li>Cyber insurance demands evidence; budget compliance before binders renew.</li>
        <li>Small suppliers need funded hygiene or they become the exploit lane.</li>
        <li>Nation-state campaigns dwarf hobbyist noise; coordinate with trusted intel.</li>
      </ul>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Cybersecurity is now a board, legal, and operational joint venture. If defenses
        have not evolved since last year&apos;s Masters season, assume breach clocks are
        already running. Partner with specialists like{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        when litigation, disclosure obligations, and resilience exercises overlap.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>
      </p>

      <p className="mb-4 text-sm text-white/80">
        Special thanks to James Jansen, Shawn Cheadle, Jeff Mostowski, and Charlie Groves.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> cybersecurity, incident
        response, deepfakes, phishing, cyber insurance, supply chain, CrowdStrike,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Masters Conference Denver
      </p>
    </article>
  );
}
