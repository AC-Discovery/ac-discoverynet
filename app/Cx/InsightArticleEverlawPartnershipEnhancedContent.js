import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleEverlawPartnershipEnhancedContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · August 13, 2024</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        deepens its strategic collaboration with{" "}
        <a
          href="https://www.everlaw.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everlaw
        </a>
        , pairing litigation consulting, forensics, and managed review muscle with
        Everlaw&apos;s AI-forward discovery suite—including Everlaw AI Assistant
        workflows tuned for real-world validation standards.
      </p>
      <blockquote className="mb-6 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Clients need sophisticated eDiscovery without sacrificing bespoke
        playbooks… Integrating Everlaw&apos;s capabilities lets us fuse automation with
        the judgment our teams are known for.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO, AC Discovery
        </span>
      </blockquote>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Joint engagements emphasize faster insight loops, intuitive exploration, and
        repeatable automation that survives privilege scrutiny.
      </p>
      <blockquote className="mb-8 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Our partnership helps legal teams chart a straighter path to the
        truth.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Jen Jung, VP of Business Development, Everlaw
        </span>
      </blockquote>

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About AC Discovery
      </h2>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        We serve law firms, corporate legal departments, and public agencies with digital
        forensics, eDiscovery, analytics, staffing, spend management, cyber readiness, and
        trial prep—always with an eye toward practical innovation. Visit{" "}
        <a
          href="https://www.ac-discovery.net"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          ac-discovery.net
        </a>{" "}
        and follow us on{" "}
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

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        About Everlaw
      </h2>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Everlaw helps complex legal teams navigate discovery with cloud-native tooling
        trusted across Fortune 100 enterprises and the Am Law 200—investors include
        Andreessen Horowitz and CapitalG. Learn more at{" "}
        <a href="https://www.everlaw.com/" className={link} target="_blank" rel="noopener noreferrer">
          everlaw.com
        </a>
        .
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Everlaw, Everlaw AI
        Assistant, partnership, eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
