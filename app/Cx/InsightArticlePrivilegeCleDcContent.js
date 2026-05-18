import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticlePrivilegeCleDcContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base font-medium leading-relaxed text-white sm:text-lg">
        Where in the world is Kevin M. Clark? Last spotted two-stepping between Texas
        bluebonnets and D.C. cherry blossoms—then landing at Crowell for a marathon on
        privilege hygiene.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Join{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and the D.C. Bar Litigation Steering Committee for a{" "}
        <strong className="text-white">free CLE</strong> on{" "}
        <strong className="text-white">
          Attorney-Client Privilege Within Large Organizations
        </strong>
        —because keeping privilege airtight is harder than sourcing decent queso
        outside the Lone Star State.
      </p>

      <p className="mb-2 text-white font-semibold">Program snapshot</p>
      <p className="mb-6 text-base text-white/95">
        <strong className="text-white">Credit:</strong> 1.0 CLE hour (general /
        MCLE; coordinated through Crowell—not the D.C. Bar passport program).
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        This session walks through privilege fault lines in sprawling enterprises:
        foundational <em>Upjohn</em> lessons, dual-role employees whose titles blur
        legal versus business hats, documentation traps, enterprise systems that leak
        intent, and how in-house GenAI rollouts stress traditional privilege analyses.
      </p>

      <h2
        className="mb-3 mt-10 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Speakers
      </h2>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">Hon. John M. Facciola (Ret.)</strong>, U.S.
          Magistrate Judge
        </li>
        <li>
          <strong className="text-white">Andrew M. Adelman</strong>, Partner, Correia
          &amp; Puth, PLLC
        </li>
        <li>
          <strong className="text-white">Alicia Clausen</strong>, Litigation
          Associate, Crowell &amp; Moring LLP
        </li>
      </ul>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p>
          <strong className="text-white">When:</strong> April 9, 2025 · 5:30 p.m.
        </p>
        <p>
          <strong className="text-white">Where:</strong> Crowell &amp; Moring LLP,
          Washington, D.C.
        </p>
        <p>
          <strong className="text-white">Cost:</strong> Free with advance registration
        </p>
        <p className="mt-3 text-white/80">
          D.C. Bar membership is not required (guest profiles may be needed to complete
          signup).
        </p>
      </div>

      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <a
          href="https://www.crowell.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register via Crowell &amp; Moring →
        </a>{" "}
        or contact{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>{" "}
        for routing help.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> privilege, Upjohn,
        in-house counsel, CLE, Washington DC, Crowell &amp; Moring,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
