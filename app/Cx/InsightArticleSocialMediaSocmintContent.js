import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleSocialMediaSocmintContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference New York
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Josh Janow</strong> and{" "}
        <strong className="text-white">Paige Hansen</strong> (
        <strong>SMI Aware</strong>) reframed social ingestion as behavioral
        forensics, not novelty optics. As Janow put it, social feeds are &quot;where
        people live online—it&apos;s their relationships, their movements, their
        mindset—it&apos;s behavioral evidence.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Facebook, Instagram, X, Venmo, Strava, and adjacent apps now sit beside
        email archives in scope conversations; ephemeral stories that vanish in 24
        hours routinely establish intent faster than stale attachments. Yet volume
        never excuses sloppiness: teams need{" "}
        <strong className="text-white">ethical, defensible, repeatable</strong>{" "}
        collections—hashing, metadata capture, chain-of-custody narratives that
        survive cross.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Accessibility and admissibility diverge: public artifacts may be fair game
        for preservation, while restricted personas demand lawful process—not
        screenshot cowboy tactics. Alias resolution and proactive ECA playbooks keep
        squabbles from metastasizing mid-trial.
      </p>
      <blockquote className="my-8 border-l-4 border-[#2484C6] pl-4 text-base italic leading-relaxed text-white/90 sm:text-lg">
        &quot;You can&apos;t afford to overlook the digital footprints people leave
        behind in public and semi-public spaces.&quot;
      </blockquote>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> social media intelligence,
        SOCMINT, investigations, eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Facebook, Instagram, X, Venmo, Strava, preservation, chain of custody,
        behavioral evidence
      </p>
    </article>
  );
}
