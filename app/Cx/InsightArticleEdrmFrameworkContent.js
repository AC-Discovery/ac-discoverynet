import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

const stages = [
  [
    "Information governance",
    "Policies and controls that keep ESI trustworthy before disputes arise.",
  ],
  ["Identification", "Locate systems, custodians, and data classes that may matter."],
  [
    "Preservation",
    "Suspend routine destruction once litigation or investigation is reasonably anticipated.",
  ],
  ["Collection", "Acquire ESI with defensible methods and transparent chain of custody."],
  ["Processing", "Normalize formats, deduplicate, and prepare content for review."],
  ["Review", "Assess responsiveness, privilege, confidentiality, and issues."],
  ["Analysis", "Analytics, clustering, and narrative development across the corpus."],
  ["Production", "Deliver according to court rules, contracts, and proportionality."],
  [
    "Presentation",
    "Trial and hearing-ready exhibits that connect facts to argument.",
  ],
];

export default function InsightArticleEdrmFrameworkContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        The{" "}
        <a href="https://edrm.net/" className={link} target="_blank" rel="noopener noreferrer">
          Electronic Discovery Reference Model (EDRM)
        </a>{" "}
        diagrams how ESI travels from information governance through presentation. CEO{" "}
        <strong className="text-white">Kevin M. Clark</strong> routinely points teams to
        this scaffold before debates about tooling or vendor RFPs—because shared language
        prevents expensive misunderstandings.
      </p>

      <ol className="mb-10 list-decimal space-y-4 pl-6 text-base text-white/95 sm:text-lg">
        {stages.map(([title, body]) => (
          <li key={title}>
            <strong className="text-white">{title}:</strong> {body}
          </li>
        ))}
      </ol>

      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Following the model keeps teams aligned on integrity, proportionality, and
        documentation—whether a regulator, judge, or board asks what happened and why.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> EDRM, eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , information governance
      </p>
    </article>
  );
}
