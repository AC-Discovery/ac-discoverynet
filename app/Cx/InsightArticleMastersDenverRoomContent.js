import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersDenverRoomContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Later this summer in Denver, the{" "}
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Masters Conference
        </a>{" "}
        gathers technologists, practitioners, and compliance leaders for dense
        programming and high-trust hallway debate. If your briefs now mention
        Copilot as often as citations, this is the room worth claiming.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Expect deep cuts on enterprise AI adoption, Microsoft Copilot governance,
        and the compliance pressure cookers that follow deployment. In-house panels
        will spell out what they expect from outside counsel as analytics, automation,
        and ops platforms redraw the relationship map.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Spotlight sessions include:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">Mobile data</strong> – smartphones and apps
          reshaping investigations.
        </li>
        <li>
          <strong className="text-white">AI in eDiscovery</strong> – from classic
          machine learning to agentic review stories that survived audit.
        </li>
        <li>
          <strong className="text-white">The future of law</strong> – including{" "}
          <strong className="text-white">Judge Maritza Dominguez Braswell</strong> on
          how AI is already rewiring courtrooms.
        </li>
        <li>Cyber trends, modern attachment battles, Microsoft Purview breakouts.</li>
        <li>Quantum computing curiosity blocks for the strategically paranoid.</li>
        <li>
          A closing happy hour—because peer networks are half the ROI.
        </li>
      </ul>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p className="mb-2 font-semibold text-white">Save the date</p>
        <p>Tuesday, June 24, 2025</p>
        <p>Doors 8:00 a.m. MT – programming through 7:30 p.m. MT</p>
        <p>
          Fennemore (The Current Building), 3615 Delgany St, Suite 1100, Denver, CO
          80216
        </p>
      </div>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure your spot and register today →
        </a>
      </p>

      <p className="mb-10 text-sm text-white/80">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        is a proud sponsor of Masters Conference events.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> legal AI, generative AI,
        legal tech, in-house strategy, Masters Conference Denver,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , innovation
      </p>
    </article>
  );
}
