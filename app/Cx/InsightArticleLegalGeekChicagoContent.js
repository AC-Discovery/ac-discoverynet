import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleLegalGeekChicagoContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        team heads to{" "}
        <a
          href="https://www.legalgeek.co/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Legal Geek Chicago
        </a>{" "}
        to trade notes on production-grade AI—not slideware. Expect practitioner-led
        sessions spanning macro trends, workflow wins, and the ethics traps that follow
        every successful pilot.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Featured voices include{" "}
        <strong className="text-white">Danielle Benecke</strong> (
        <a
          href="https://www.bakermckenzie.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Baker McKenzie
        </a>
        ) on the state of legal AI,{" "}
        <strong className="text-white">Alma Asay</strong> (
        <a
          href="https://www.crowell.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Crowell &amp; Moring
        </a>
        ) on daily practitioner moves, and <strong className="text-white">Mark C. Palmer</strong> (
        Illinois Supreme Court Commission on Professionalism) connecting advocacy,
        language, and Responsible AI expectations.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Thomson Reuters&apos; <strong className="text-white">Tamara Steffens</strong>{" "}
        unpacks how capital shapes legal tech bets, while Factor&apos;s{" "}
        <strong className="text-white">Nicole Bradick</strong> explores product design
        that balances autonomy with adult supervision.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Midday breakouts span secure deployment architecture, contract transformation,
        and &quot;eight-minute AI&quot; workflow hacks—plus an in-house roundtable
        hosted by the American Society of Legal Engineers.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Exhibit floors highlight vendors from Relativity to emerging document
        copilots, with CLE tracks on ethics, cultural change, and well-being.
      </p>

      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;What excites me most is connecting with people who aren&apos;t just
        talking about innovation—they&apos;re implementing it… shaping how we approach
        legal operations and AI at AC Discovery and beyond.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Marla Mohr, Director of Client Engagement &amp; Growth
        </span>
      </blockquote>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Meet Marla on-site or reach her at{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>
        .
      </p>

      <div className="mb-10 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p className="mb-2 font-semibold text-white">Logistics</p>
        <p>Tuesday, June 17, 2025</p>
        <p>8:30 a.m. CT doors · program through 5:00 p.m. CT</p>
        <p>Recess · 838 West Kinzie Street, Chicago, IL 60642</p>
        <p className="mt-3">
          <a
            href="https://www.legalgeek.co/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register today →
          </a>
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> legal AI, generative AI,
        innovation, CLE, Chicago,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , legal operations
      </p>
    </article>
  );
}
