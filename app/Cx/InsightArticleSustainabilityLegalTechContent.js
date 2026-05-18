import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleSustainabilityLegalTechContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        At{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , efficiency for clients and mindfulness for the planet run on the same rails.
        Earth Day nudges us to remember the obvious wins: power down idle gear, starve
        the printer, and default to virtual collaboration when travel adds little
        marginal insight.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Cloud hosting, remote review rooms, and paperless playbooks are productivity
        moves first—but they also trim emissions when deployed deliberately across
        matters and offices.
      </p>
      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;Sustainability and innovation go hand-in-hand… As we continue to develop
        forward-thinking solutions for our clients, we&apos;re also committed to doing
        so in a way that&apos;s responsible and mindful of our impact on the planet.
        It&apos;s not just good business—it&apos;s the right thing to do.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          —{" "}
          <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
            Kevin M. Clark
          </a>
          , CEO
        </span>
      </blockquote>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Going green is daily hygiene—not a single marketing moment. We are leaning into
        practices that pair technological ambition with operational restraint, because
        clients deserve partners who think in decades, not just deal cycles.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Earth Day, sustainability,
        legal technology, carbon footprint, remote collaboration,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , responsible business
      </p>
    </article>
  );
}
