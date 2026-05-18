import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-12 mb-4 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="mb-3 mt-8 text-lg font-bold text-white sm:text-xl">
      {children}
    </h3>
  );
}

export default function InsightArticleMillionRecordContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <SectionHeading>
        How Defensible Intelligence Is Rewriting the Rules of eDiscovery
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        If you&apos;ve ever managed a million-record case, you already know the
        truth no one likes to say out loud: traditional eDiscovery breaks at
        scale.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        When data volumes explode, most providers don&apos;t get smarter; they
        just get louder. They throw bodies at the problem: hundreds of
        contractors, endless hand-offs, spiraling budgets… and somehow less
        clarity than when you started.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        At{" "}
        <Link href="/" className={`${link} font-bold`}>
          AC Discovery
        </Link>
        , we believe large-scale review doesn&apos;t need more people; it needs
        better intelligence; the right people with the right tools and
        processes. That&apos;s why we&apos;ve built a defensible, systematic
        approach that brings clarity, control, and confidence to even the most
        complex litigation.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Let&apos;s break down why it works.
      </p>

      <SectionHeading>
        When a Million Records Becomes a Million Problems
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        In a typical large-scale review, 60-70% of spend goes to managing
        humans, not analyzing data. Your budget gets swallowed by:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Contractor churn</li>
        <li>Quality-control loops</li>
        <li>Project management overhead</li>
        <li>Re-review and cleanup</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Not strategy. Not insight. Not winning the case.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        This isn&apos;t a staffing issue. It&apos;s an architecture issue.
        Traditional review models scale linearly:
      </p>
      <p className="mb-4 text-base font-semibold text-white sm:text-lg">
        More data = more people.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        But communication, consistency, and judgment don&apos;t scale
        linearly. They break. And when they break, costs explode while
        defensibility gets shaky.
      </p>

      <SectionHeading>AC Discovery flips that model.</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Instead of deploying 200+ reviewers, we run million-record matters with
        a small, focused team of experts supported by a workflow designed to
        reduce volume early, keep decisions consistent, and stay ready for
        scrutiny — delivering:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>25-30% volume reduction before human review even begins</li>
        <li>Transparent per-record pricing</li>
        <li>Court-defensible AI decisions</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        That&apos;s not incremental improvement, that&apos;s structural
        change.
      </p>

      <SectionHeading>
        The Three Ways Traditional Review Fails at Scale
      </SectionHeading>

      <SubHeading>1. Contractor Chaos</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Large contractor teams tend to create:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Inconsistent coding</li>
        <li>Endless re-work</li>
        <li>Managerial drag that eats your budget</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        What works with 30 reviewers starts to wobble at 150. At 200 reviewers,
        it becomes a statistical liability.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery replaces chaos with right-sized expert teams aligned
        on:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Your case strategy</li>
        <li>Your industry context</li>
        <li>Your privilege and relevance standards</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        That cuts overhead dramatically and lets counsel focus on the work that
        matters: legal analysis, not logistics.
      </p>

      <SubHeading>2. Black-Box AI = Legal Risk</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Plenty of providers use AI. Far fewer can explain it. When opposing
        counsel challenges your review process, &quot;trust the algorithm&quot;
        isn&apos;t good enough. Legal teams need AI-driven decisions that are
        transparent, traceable, and defensible; with clear reasoning and
        audit-ready documentation behind every major call. AC Discovery
        prioritizes explainability and defensibility, so your team can move
        faster without taking on unnecessary risk.
      </p>

      <SubHeading>3. Mystery Pricing Kills Strategy</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Traditional pricing is often designed to be confusing:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Hosting</li>
        <li>Processing</li>
        <li>Review</li>
        <li>Re-review</li>
        <li>Overages</li>
        <li>Surprise invoices</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery replaces that with true per-record economics, so legal
        departments can:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Forecast budgets</li>
        <li>Control spend</li>
        <li>Defend costs to the CFO</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        When pricing is predictable, strategy gets sharper and budget
        conversations get a lot less painful.
      </p>

      <SectionHeading>
        The Five-Stage Defensible Intelligence Workflow
      </SectionHeading>
      <p className="mb-6 text-base font-medium text-white/95 sm:text-lg">
        This is where things get fun.
      </p>

      <SubHeading>Stage 1: Strategic Data Reduction</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Instead of blunt filters, AC Discovery starts with defensible,
        data-driven reduction; identifying what can be confidently set aside,
        what needs faster escalation, and what belongs in priority lanes. The
        goal is simple: shrink the review universe early, before humans spend
        time on records that don&apos;t move the matter forward. On
        million-record matters, that reduction can translate into six-figure
        savings and a faster path to insight.
      </p>

      <SubHeading>Stage 2: Right-Sized Expert Teams</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Small doesn&apos;t mean limited — it means aligned. AC Discovery
        relies on a compact, high-performing team of specialists built around
        the case&apos;s actual demands (legal issues, industry nuance,
        complexity), not just record count. Fewer handoffs and fewer layers
        mean faster decisions, tighter quality control, and a team that can pivot
        quickly as the case evolves.
      </p>

      <SubHeading>Stage 3: Smart Sequencing and Prioritization</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Traditional review treats every record like it has equal value. It
        doesn&apos;t. AC Discovery sequences review in strategic waves:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>High-signal content first</li>
        <li>Thematic grouping for consistency</li>
        <li>Continuous refinement as patterns emerge</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        That means faster early case assessment, fewer dead ends, and stronger
        momentum across the lifecycle.
      </p>

      <SubHeading>Stage 4: Explainable AI Support</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AI doesn&apos;t replace judgment, it supports it. AC Discovery
        integrates AI in a way legal teams can trust and decisions are
        reviewable, explainable, and grounded in clear rationale, with
        repeatable processes and documentation built in. Efficiency matters, but
        defensibility comes first.
      </p>

      <SubHeading>Stage 5: Court-Ready Validation</SubHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        From day one, AC Discovery assumes your process may be challenged. So
        every:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Coding decision</li>
        <li>AI recommendation</li>
        <li>QC check</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Is documented, auditable, and ready to stand up to scrutiny. That
        confidence lets teams move faster without second-guessing every turn.
      </p>

      <SectionHeading>
        Why This Matters to AC Discovery Clients
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        We don&apos;t believe in throwing tools at problems.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        We believe in engineering smarter discovery.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        That&apos;s why AC Discovery delivers something most vendors
        can&apos;t:
      </p>
      <p className="mb-4 text-base font-semibold text-white sm:text-lg">
        Defensible intelligence from ingestion to production with predictable
        economics and court-ready rigor.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        In a world where:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Data volumes are exploding</li>
        <li>Courts are scrutinizing AI</li>
        <li>Legal budgets are under pressure</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        This isn&apos;t optional. It&apos;s the new standard.
      </p>

      <SectionHeading>
        Ready to replace contractor chaos with defensible clarity?
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        If your current approach relies on headcount to keep up, it&apos;s time
        to rethink the architecture. AC Discovery brings a defensible,
        scalable review model that keeps budgets predictable and decisions easy
        to stand behind.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="font-bold italic text-white">
          Because in eDiscovery, being RIGHT isn&apos;t just about results -
          it&apos;s about being able to prove them.
        </strong>{" "}
        Start a conversation at{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>
        .
      </p>
    </article>
  );
}
