import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleCovidOngoingContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        March 11, 2020 marked the WHO&apos;s pandemic declaration—shifting how firms
        collaborate, how courts convene, and how evidence moves. Four years out, the
        legal industry is more distributed, more cloud-dependent, and paradoxically
        more connected than the analog version we left behind.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Remote depositions, virtual hearings, and asynchronous workflows graduated from
        emergency hacks to design requirements. The friction wasn&apos;t merely
        technical—teams rebuilt trust, security posture, and client service rituals for
        screens-first reality.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        When physical file rooms went dark, cloud hosting and modern eDiscovery stacks
        stopped being discretionary. What began as crisis triage is now baseline
        infrastructure sustaining higher throughput with fewer couriers.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Resilience programs—BCP testing, crisis comms templates, and secure remote
        access—proved as valuable as any practice group headcount. Many shops discovered
        latent entrepreneurial energy while re-platforming service delivery.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Employment, benefits, and contract practices swelled with novel disputes about
        remote work, caregiver load, and digital exhaustion—multiplying data sources
        counsel must preserve with empathy and precision.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Healthcare privacy, bankruptcy, and real estate lines wrestled with vaccine
        policies, distressed balance sheets, and shuttered retail footprints—each
        generating discoverable artifacts regulators still revisit.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        The pandemic exposed preparedness gaps, but it also accelerated investments
        that make the profession more adaptable. The lesson isn&apos;t nostalgia for
        2019—it&apos;s disciplined innovation with people at the center.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> remote work, legal
        technology, resilience,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
