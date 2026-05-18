import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function H({ children }) {
  return (
    <h2
      className="mt-8 mb-3 rounded-lg px-4 py-3 text-base font-bold leading-snug text-white sm:text-lg"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleMasteringEdiscoveryPmContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-8 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        A quick tour through eDiscovery project management—from kickoff through
        closeout—with reminders our facilitator panel wishes every new PM internalized
        on day one.
      </p>

      <H>Project setup</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Lock scope, success metrics, and escalation paths before ingestion begins.</li>
        <li>Document roles so custodians, reviewers, and vendors share one playbook.</li>
        <li>Flag data risks (ephemeral chat, legacy tapes) during the first data map.</li>
      </ul>

      <H>Budget and spend</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Model tech, staffing, hosting, and export line items explicitly.</li>
        <li>Review actuals weekly; variance stories beat surprise invoices.</li>
      </ul>

      <H>Technology and vendors</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Score tools against matter facts—not generic magic quadrants.</li>
        <li>Translate ESI protocols into enforceable specs (formats, metadata, gaps).</li>
        <li>
          Account for modern channels (WhatsApp, WeChat) and GenAI-generated artifacts
          when scoping collections.
        </li>
        <li>Negotiate SLAs and security attestations before data hits the wire.</li>
      </ul>

      <H>Communications</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Rhythmically brief stakeholders; silence breeds rumor.</li>
        <li>Log decisions where counsel can retrieve them under pressure.</li>
      </ul>

      <H>Reporting and metrics</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Pair throughput charts with quality indicators—not vanity totals.</li>
        <li>Use dashboards to steer, not to wallpaper status calls.</li>
      </ul>

      <H>Deadlines</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Backstop critical milestones with resource buffers.</li>
        <li>Escalate slip early; judges rarely sympathize with silent scrambles.</li>
      </ul>

      <H>Workflow and QC</H>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>Design repeatable workflows with QA hooks and defensible sampling.</li>
        <li>Iterate based on QC feedback instead of hoping errors wash out.</li>
      </ul>

      <H>Productions and closeout</H>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>
          Validate production sets, privilege logs, and clawback mechanics.
        </li>
        <li>Archive runbooks, lessons learned, and billing artifacts for the next matter.</li>
      </ul>

      <p className="mt-10 text-xs leading-relaxed text-white/65 sm:text-sm">
        NOTE: This overview is educational only and does not constitute legal advice;
        opinions belong to the presenters and not necessarily any affiliated institution.
      </p>

      <p className="mt-8 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> legal project management,
        eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
