import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersLaFutureContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Masters Conference Los Angeles unites litigators, technologists, and operators
        for a full day on AI, legal data intelligence, and the pressures reshaping
        discovery strategy. And yes—
        <strong className="text-white">Kevin M. Clark</strong> is on the ground in LA,
        not hiding inside a data center.
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">AI&apos;s Role in Legal Workflows</strong> (
        sponsored by DISCO) examines how automation trims repetitive grunt work while
        sharpening decision quality when petabytes obscure the signal.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Legal Data Intelligence in the Age of GenAI</strong>{" "}
        spotlights <strong className="text-white">Kevin M. Clark</strong>,{" "}
        <strong className="text-white">Bobby Malhotra</strong> (
        <strong>Winston &amp; Strawn</strong>), and{" "}
        <strong className="text-white">Odette Claridge</strong> (
        <strong>Pro Search</strong>) on how LDI careers, data models, and generative
        tools intersect.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Enhancing Case Narratives with Generative AI</strong>{" "}
        (Relativity-sponsored) features{" "}
        <strong className="text-white">Cristin Traylor</strong> and{" "}
        <strong className="text-white">Danny Thankachan</strong> on summaries,
        deposition prep, and chronologies that read like crafted advocacy—not
        boilerplate.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Microsoft&apos;s Town Hall</strong> closes the
        day with <strong className="text-white">Kevin M. Clark</strong> and{" "}
        <strong className="text-white">Nina Levitan</strong> (
        <strong>Microsoft</strong>) on Purview, Copilot, classification hygiene, and
        realistic cyber playbooks.
      </p>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>Tuesday, February 4, 2025 · Doors 8:00 a.m. PT</p>
        <p>
          Hosted by{" "}
          <a
            href="https://www.winston.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Winston &amp; Strawn
          </a>{" "}
          · 333 South Grand Avenue, Los Angeles, CA 90071
        </p>
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

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters LA, legal data
        intelligence, Microsoft Purview, Relativity,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
