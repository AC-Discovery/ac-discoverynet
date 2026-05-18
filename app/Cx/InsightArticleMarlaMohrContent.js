import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMarlaMohrContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · January 13, 2025</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        appoints{" "}
        <strong className="text-white">Marla Mohr, CEDS</strong>, as Director of Client
        Engagement &amp; Growth. Mohr brings two decades bridging legal publishing,
        court reporting, eDiscovery sales, and high-touch litigation support—exactly the
        hybrid resume modern buyers expect.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        She will steward strategic partnerships, onboarding, and training programs that
        translate platform investments into measurable matter outcomes.
      </p>
      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Technology has transformed the way we approach litigation and
        eDiscovery… I&apos;m excited to help clients leverage these advancements.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Marla Mohr, CEDS
        </span>
      </blockquote>
      <blockquote className="mb-8 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Marla&apos;s unique perspective… make her an invaluable asset… We&apos;re
        confident her leadership will help us grow while staying true to our mission of
        exceptional service.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin Clark, CEO
        </span>
      </blockquote>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Mohr champions mentorship across the bar and roots loudly for the San Diego
        Padres when she steps away from roadmap sessions.
      </p>

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About AC Discovery
      </h2>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        We deliver forensics, eDiscovery, managed review, staffing, analytics, cyber
        response, and AI enablement for law firms, corporate teams, and government
        clients. Learn more at{" "}
        <a
          href="https://www.rightdiscovery.com"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          rightdiscovery.com
        </a>{" "}
        and on{" "}
        <a
          href="https://www.linkedin.com/company/right-discovery"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Marla Mohr, client
        engagement, eDiscovery, legal technology,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
