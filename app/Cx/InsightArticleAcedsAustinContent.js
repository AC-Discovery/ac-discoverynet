import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleAcedsAustinContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Kevin M. Clark</strong>—CEO and North Texas ACEDS
        chapter vice president—rides into Austin for{" "}
        <strong className="text-white">ACEDS Third Annual eDiscovery Day</strong>,
        trading brisket field research for community building with peers who live the
        same privilege logs he does.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        He teams with <strong className="text-white">Jerry Bui</strong>, CEO of{" "}
        <a
          href="https://rightforensics.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Right Forensics
        </a>
        , underscoring how AC Discovery and trusted forensic partners tackle modern
        collections shoulder-to-shoulder.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Sessions include <em>The Flash of Insight</em> with{" "}
        <strong className="text-white">Judge Xavier Rodriguez</strong>, a{" "}
        <em>Justice League</em>-themed equity panel spanning Innocence Project of Texas,
        Texas Civil Rights Project, and Thomson Reuters&apos; CoCounsel justice
        initiatives, plus <em>Heroes Unite</em>—featuring Bui,{" "}
        <strong className="text-white">Jay Brenner</strong> (
        <strong>Major, Lindsey &amp; Africa</strong>), and{" "}
        <strong className="text-white">Dave Rogers</strong> (<strong>Kroll</strong>) on
        legal tech career arcs.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Austin may pledge to stay weird; ACEDS Day promises to stay nerdy—in the best
        possible way.
      </p>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>
          <strong className="text-white">When:</strong> Thursday, December 5, 2024 ·
          11:45 a.m. – 3:30 p.m.
        </p>
        <p>
          <strong className="text-white">Where:</strong> 200 West 6th Street, Suite 2500,
          Austin, TX
        </p>
        <p className="mt-2">
          Hosted by{" "}
          <a
            href="https://www.velaw.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinson &amp; Elkins LLP
          </a>
        </p>
        <p className="mt-2">
          <a href="https://www.aceds.org/" className={link} target="_blank" rel="noopener noreferrer">
            Register via ACEDS
          </a>{" "}
          · Central Texas &amp; North Texas chapters
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> ACEDS, eDiscovery Day,
        Austin,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , access to justice
      </p>
    </article>
  );
}
