import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersNavigateWaveContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Masters Conference Seattle spotlights corporate legal operations navigating{" "}
        <em>Microsoft Copilot</em> rollouts—especially how Keyword Query Language (KQL)
        assists complex M365 searches, why licensing models matter, and what pragmatic
        implementation looks like beside vendor vaporware.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <em>Lawyer Like a Cyborg: The Now Normal is AI-Enhanced Law</em> connects
        assisted review, analytics, and AI-augmented drafting to outcomes litigators
        actually pitch—not just IT demo reels.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Hands-on blocks like <em>Build Your Own Gen AI Rollout</em> walk through pilot
        design, stakeholder alignment, and success metrics you can steal for board
        updates.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Cap the day with a cybersecurity tabletop primer—why rehearsals beat buzzwords,
        how to loop insurers and forensics, and which contract gaps become headline risk.
      </p>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>Wednesday, September 18, 2024 · Doors 8:00 a.m. PT</p>
        <p>
          Hosted by{" "}
          <a
            href="https://www.perkinscoie.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Perkins Coie
          </a>
        </p>
        <p>1201 Third Avenue, Suite 4900, Seattle, WA 98101</p>
        <p className="mt-3">
          <a
            href="https://mastersconference.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register today →
          </a>
        </p>
      </div>

      <p className="text-sm text-white/80">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        proudly sponsors this Masters Conference legal event.
      </p>

      <p className="mt-8 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Seattle, Copilot,
        cybersecurity tabletop, Gen AI rollout,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
