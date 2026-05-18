import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleAiLitigationCleContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Join Dallas Area Paralegal Association programming for a hybrid CLE that
        tracks generative AI across the litigation lifecycle—from identification through
        trial storytelling—with practitioners who have already filed the receipts.
      </p>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p>
          <strong className="text-white">Date:</strong> April 2, 2025
        </p>
        <p>
          <strong className="text-white">Time:</strong> 12:00 p.m. – 1:00 p.m.
        </p>
        <p>
          <strong className="text-white">Format:</strong> Hybrid — Zoom (link after
          registration) and in-person at Arts District Mansion, 2101 Ross Ave, Dallas,
          TX 75201
        </p>
      </div>

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Faculty
      </h2>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>
          <a href="https://mmdata.com/" className={link} target="_blank" rel="noopener noreferrer">
            Melissa Heidrick
          </a>
          , mmData
        </li>
        <li>
          <a
            href="https://www.troutman.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric Boyd
          </a>
          , Troutman eMerge LLC
        </li>
        <li>
          <a
            href="https://www.vhhlawfirm.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tia Archuleta
          </a>
          , Vartabedian Hester &amp; Haynes LLP
        </li>
        <li>
          <a
            href="mailto:chris.arellano@ac-discovery.net"
            className={link}
          >
            Kevin M. Clark
          </a>
          , AC Discovery
        </li>
      </ul>

      <p className="mb-2 text-base font-semibold text-white sm:text-lg">
        Integrating Generative AI Into Every Facet of the Litigation Workflow
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Using the EDRM model as scaffolding, speakers map AI to each phase—with real
        examples instead of vaporware promises.
      </p>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">Identification:</strong> surfacing actors and
          concepts from seed corpora.
        </li>
        <li>
          <strong className="text-white">Collection &amp; review:</strong> modern
          stacks such as{" "}
          <a
            href="https://www.everlaw.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Everlaw
          </a>{" "}
          for disciplined throughput.
        </li>
        <li>
          <strong className="text-white">Witness work:</strong> transcription + insight
          tooling (
          <a href="https://fathom.video/" className={link} target="_blank" rel="noopener noreferrer">
            Fathom
          </a>
          -style workflows).
        </li>
        <li>
          <strong className="text-white">Trial prep:</strong> deposition summaries,
          exhibit strategy, narrative stress tests.
        </li>
        <li>
          <strong className="text-white">Strategy:</strong> analytics versus
          intuition—and when both must meet in the record.
        </li>
      </ul>

      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Paralegals and case teams are often the ones forcing adoption—come collect
        templates you can repurpose Monday morning.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <a
          href="https://www.dapa.org/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reserve your spot via DAPA →
        </a>
      </p>

      <p className="text-sm text-white/80">
        Thanks to sponsors including{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , mmData, Troutman eMerge LLC, and Vartabedian Hester &amp; Haynes
        LLP.
      </p>

      <p className="mt-8 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> generative AI, litigation,
        CLE, Dallas, paralegals, workflows,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
