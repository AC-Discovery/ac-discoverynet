import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-10 mb-3 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleMastersSeattleContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Pacific Northwestern skies brighten when{" "}
        <strong className="text-white">Thursday, October 23, 2025</strong> arrives at{" "}
        <Link href="https://www.perkinscoie.com/" className={link} target="_blank" rel="noopener noreferrer">
          Perkins Coie
        </Link>{" "}
        in Seattle. Doors unlock <strong className="text-white">8:00 AM PT</strong> for stacked
        programming promising kinetic panels, ethically charged debates on AI adoption ROI,
        and tactical takeaways you can fold into playbook refreshes Monday morning—not
        slide decks doomed to haunt shared drives untouched.
      </p>

      <SectionHeading>Innovation choreography</SectionHeading>
      <ul className="mb-8 list-disc space-y-4 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">
            Jacqueline Schafer · ClearBrief / Columbia adjunct
          </strong>{" "}
          dissecting curricula that train skeptical partners and arbitrator cohorts alike
           to responsibly absorb AI scaffolding without forfeiting appellate hygiene.
        </li>
        <li>
          <em>What Do Corporate Legal Departments Expect From Their Law Firms?</em> drills
           into procurement KPIs haunting modern panel conversations—what truly unlocks innovation vs.
           ceremonial “innovation theatre.”
        </li>
        <li>
          <em>Masters 2035: Discovery isn&apos;t dead, it&apos;s just wearing cooler shoes.</em>
          evolves last season&apos;s storyline—forecasting multidisciplinary pods, inventive client
           education, escalating expectations swirling around multilingual evidence.
        </li>
        <li>
          <em>From Hype to Impact: Realizing ROI with AI Solutions</em> interrogates pragmatic
           scorecards distinguishing measurable wins versus science-fair anecdotes.
        </li>
      </ul>

      <SectionHeading>
        Courtroom theatre & resilience drills
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <em>
          AI in the Courtroom: A Mock Argument on the Use of Generative AI for Production
        </em>{" "}
        transports attendees through adversarial choreography—judgment included—before a
        live audience reacts to rulings illuminating evidentiary philosophies colliding at
        the GenAI frontier.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        A dedicated <strong className="text-white">Cybersecurity Tabletop Exercise</strong> exposes how firms stress-test orchestrated
        incident responses: playbooks aligning legal, comms, forensics allies when regulators
        and insurers dial simultaneously—a scenario too many teams only sandbox after breach
        smoke wafts through corridors.
      </p>

      <p className="mb-10 text-lg font-semibold uppercase tracking-wide text-white">
        <Link href="/contact" className={`${link} font-semibold uppercase`}>
          Register now
        </Link>
        {" · "}limited seats
      </p>

      <div className="mb-12 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6 space-y-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <p>
          <strong className="text-white">Host shout-out:</strong> Perkins Coie
        </p>
        <p>
          <strong className="text-white">Where:</strong> 1301 Second Avenue · Suite 4200 · Seattle, WA 98101
        </p>
        <p>
          <strong className="text-white">When:</strong> October 23, 2025 · Doors 8 AM PT
        </p>
      </div>

      <p className="text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        sponsors the Masters Conference ecosystem because these conversations braid law,
        tooling, bravery, mentorship—meet us seaside for coffee, counsel, spirited debate.
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference Seattle,
        Perkins Coie hosting, Jacqueline Schafer AI education ROI, masters 2035 discovery
        innovation, tabletop cybersecurity exercises mock AI courtroom debates, ROI legal
        technology investments, immersive legal gatherings pacific northwest
      </p>
    </article>
  );
}
