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

export default function InsightArticleOffshoreUpgradeContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Chapter 2 · Masters Conference New York
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Ishika Aggarwal</strong> (
        <strong>IDTA Analytics</strong>), <strong className="text-white">Bobby Coppola</strong>{" "}
        (
        <strong>PLUSnext</strong>), <strong className="text-white">Sharri Wilner</strong>{" "}
        (
        <strong>Gravity Stack</strong>), <strong className="text-white">Jennifer Schettler</strong>{" "}
        (
        <strong>Cognition LLC</strong>), and{" "}
        <strong className="text-white">Bradley Wolf</strong> (
        <strong>Complete Legal</strong>) mapped how offshore delivery matured from
        transactional cost arbitrage into strategic infrastructure—embedding operators,
        process engineers, and multilingual specialists beside U.S. counsel when
        matters spike overnight.
      </p>

      <SectionHeading>From staffing triage to integrated strategy</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Today&apos;s offshore partners arrive trained in privilege doctrine, AI
        calibration, and workflow telemetry—not just rote document clickers.
        Schettler crystallized the mindset shift: &quot;Offshoring isn&apos;t
        outsourcing; it&apos;s integration.&quot;
      </p>

      <SectionHeading>Process, permanence, performance</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Coppola championed operational permanence: repeatable manuals, shared KPIs,
        storytelling dashboards, and predictable staffing pods outperform endless
        contractor churn—even when domestic markets pretend otherwise on LinkedIn.
      </p>

      <SectionHeading>Debunking the myths</SectionHeading>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">Myth: Offshore = less secure.</strong> Reality:
          ISO 27001, SOC 2, GDPR-aware controls, audited clean rooms, and disciplined
          access reviews often surpass improvisational remote domestic setups.
        </li>
        <li>
          <strong className="text-white">Myth: Offshore = only low complexity.</strong>{" "}
          Reality: multilingual privilege sweeps, generative QA, and bespoke analytics
          pipelines now anchor elite program work.
        </li>
        <li>
          <strong className="text-white">Myth: Offshore = pure cost play.</strong>{" "}
          Reality: ROI accrues via velocity, continuity, institutional memory, and the
          ability to flex talent without bruising domestic morale every fiscal quarter.
        </li>
      </ul>

      <SectionHeading>AI + offshore = the next frontier</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Hybrid squads pair prompt validators, QC barristers, and data scientists fluent
        in model cards—compressing iteration loops while keeping human escalation hooks
        transparent for regulators sniffing around automated decision trails.
      </p>

      <SectionHeading>Communication is the glue</SectionHeading>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Wolf urged investment in relationship infrastructure: daily stand-ups, humane
        feedback loops, shared cultural rituals. &quot;You have to invest in the
        relationship, not just the resource,&quot; he noted—echoing attendee frustration
        with vendors who treat humans as interchangeable SKUs.
      </p>

      <h3 className="mb-3 text-lg font-bold text-white">Key takeaways</h3>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Offshore legal delivery is now process-driven value architecture.</li>
        <li>Permanent global pods sustain context, reducing thrash between matters.</li>
        <li>
          Generative AI plus distributed talent unlocks throughput when governance stays
          adult-sized.
        </li>
        <li>
          Certified security controls overseas often embarrass ad hoc domestic remote
          sprawl.
        </li>
        <li>
          Daily communication, feedback loops, and cultural integration keep alliances
          humane—and profitable.
        </li>
      </ul>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        As one attendee quipped on the way out, &quot;That wasn&apos;t just a panel—that
        was a masterclass.&quot; The programming closed the way a masterclass should: with
        a churro break—because hot takes on global legal strategy taste sweeter with
        cinnamon sugar on your fingertips. If you missed it? There&apos;s always next year…
        though churro availability remains unguaranteed.
      </p>

      <p className="mb-10 text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        proudly sponsors{" "}
        <Link href="https://www.mastersconference.com/" className={link} target="_blank" rel="noopener noreferrer">
          Masters Conference
        </Link>{" "}
        &amp; Masters Conference Legal Events. Hungry for more insight-packed programming?{" "}
        <Link href="/contact" className={link}>
          Ask about the conferences we&apos;re attending and supporting next
        </Link>
        .
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> offshore legal services,
        global talent integration, legal process optimization, generative AI in legal,
        data security compliance, hybrid legal delivery models, multilingual review,
        scalable operations
      </p>
    </article>
  );
}
