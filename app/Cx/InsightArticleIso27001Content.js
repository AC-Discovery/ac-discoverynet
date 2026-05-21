import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleIso27001Content() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · July 30, 2024</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        LLC announces successful certification under{" "}
        <strong className="text-white">ISO/IEC 27001:2022</strong>, the current global
        benchmark for information security management systems. Independent assessors
        validated controls spanning people, process, and platform layers across
        eDiscovery, digital forensics, analytics, legal staffing, and cyber response
        programs.
      </p>
      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;With cybercrime escalating and legal data under constant threat,
        ISO/IEC 27001:2022 is not just a credential—it&apos;s a signal to our
        clients that we&apos;re operating at the highest level of security
        maturity… For litigation and investigations, trust is everything.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO
        </span>
      </blockquote>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        What certification reinforces
      </h2>
      <ul className="mb-10 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Proactive security risk management across service lines.</li>
        <li>Confidentiality, integrity, and availability of client matter data.</li>
        <li>Operational resilience and business continuity cohesion.</li>
        <li>Alignment with global legal, regulatory, and contractual regimes.</li>
        <li>Greater transparency for enterprise procurement reviews.</li>
      </ul>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Learn more at{" "}
        <a
          href="https://www.ac-discovery.net"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          ac-discovery.net
        </a>
        .
      </p>

      <section className="mt-10 border-t border-white/15 pt-8 text-sm text-white/80">
        <h3 className="mb-2 font-semibold text-white">Media contact</h3>
        <p className="mb-1">Christina Nguyen</p>
        <p className="mb-1">
          <a
            href="mailto:chris.arellano@ac-discovery.net"
            className={link}
          >
            chris.arellano@ac-discovery.net
          </a>
        </p>
        <p>(469) 592-5100</p>
      </section>

      <p className="mt-8 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> ISO/IEC 27001:2022, ISMS,
        cyber resilience, legal tech,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , regulatory compliance, digital forensics
      </p>
    </article>
  );
}
