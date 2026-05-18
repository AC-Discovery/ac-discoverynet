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

export default function InsightArticleGenaiEthicsContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Generative AI is rapidly becoming woven into the fabric of the modern
        legal workspace, quietly reshaping how attorneys approach eDiscovery,
        investigations, and litigation strategy. What once felt experimental is
        now operational—embedded in platforms, workflows, and daily
        decision-making. As adoption accelerates, so does the need for a clear,
        principled understanding of how GenAI fits within long-standing ethical
        obligations. Kevin M. Clark has spent years at the intersection of
        technology, investigations, and legal responsibility, and his perspective
        underscores a critical point: innovation must move in lockstep with
        ethics.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        At the center of responsible GenAI use are four enduring ethical
        pillars—competence, confidentiality, supervision, and candor. These
        principles are not new, but the way they apply to AI-driven tools
        demands renewed attention. When lawyers rely on GenAI to accelerate
        analysis, surface insights, or support strategic decisions, they must do
        so with intention, awareness, and accountability. Practical examples,
        emerging use cases, and real-world risks all point to the same
        conclusion: ethical compliance is not a constraint on progress—it is what
        makes progress defensible.
      </p>

      <SectionHeading>
        The Ethical Reality of GenAI in Legal Practice
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Generative AI is no longer a future-state concept; it is actively
        shaping how legal work gets done today. Attorneys are using AI-enabled
        tools to review documents at scale, analyze patterns across massive
        datasets, and refine litigation strategy with unprecedented speed. But
        efficiency alone is not the measure of success. With every new
        capability comes a corresponding responsibility, and one truth remains
        constant: ethical duties cannot be delegated to technology.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AI may assist, accelerate, and augment legal work—but it does not replace
        professional judgment. It does not assume responsibility, and it does not
        answer to the court. In the legal industry, accountability rests squarely
        with the people using the tools. GenAI is just that—a tool. The
        decisions, validations, and ethical consequences remain human, shared by
        attorneys, legal teams, and the professionals who choose how and when AI
        is deployed.
      </p>

      <SectionHeading>The Four Ethical Pillars of GenAI Use</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Responsible adoption of Generative AI in legal practice rests on four
        foundational ethical pillars: competence, confidentiality, supervision
        and responsibility, and candor and accuracy. These principles have long
        guided professional conduct, but GenAI introduces new contexts in which
        they must be actively applied. Rather than standing in the way of
        innovation, ethics function as guardrails—providing the structure
        attorneys need to leverage AI confidently while safeguarding clients,
        preserving the integrity of the judicial process, and meeting their
        professional obligations. When approached thoughtfully, ethical alignment
        becomes a catalyst for sustainable, defensible AI use.
      </p>

      <SectionHeading>Competence Now Includes Technology</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The duty of competence has evolved alongside the tools used to deliver
        legal services. Both ABA Model Rule 1.1 and California Rule of
        Professional Conduct 1.1 make it clear that technological competence is
        no longer optional—it is an expected component of effective
        representation. Lawyers are not required to become technologists, but
        they are required to understand the tools they rely on, including how
        those tools work, the risks they introduce, and the limitations they
        carry.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        As GenAI becomes more deeply integrated into eDiscovery, analytics, and
        investigative workflows, competence now includes the ability to supervise,
        validate, and explain AI-assisted outputs. Using AI responsibly means
        knowing when it adds value, when it requires human oversight, and when
        reliance without verification crosses an ethical line.
      </p>

      <SectionHeading>
        Supervision, Responsibility, and the Myth of &quot;Automated&quot;
        Lawyering
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Artificial intelligence can assist legal work, but it does not replace
        professional judgment—and it does not diminish supervisory
        responsibility. Under California Rules 5.1 and 5.3, attorneys are
        obligated to supervise not only subordinate lawyers and nonlawyer
        assistants, but also the technology deployed in legal services. The
        implication is straightforward: when an AI system produces an error, that
        error belongs to the attorney who relied on it.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AI may accelerate workflows, but accountability for accuracy,
        reasonableness, and compliance with court rules remains firmly human.
        Treating AI as an autonomous actor creates ethical risk; treating it as a
        tool to be actively managed, reviewed, and explained aligns innovation
        with responsibility.
      </p>

      <SectionHeading>Candor, Accuracy, and AI Outputs</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        One of the most widely discussed risks of Generative AI is its tendency
        to produce confident—but incorrect—outputs. Hallucinated case law,
        fabricated citations, and oversimplified summaries are not theoretical
        concerns; they are documented failures that carry serious ethical
        consequences. The duty of candor to the court requires attorneys to
        independently verify every factual and legal assertion, regardless of how
        persuasive or polished an AI-generated response may appear.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AI errors are not &quot;AI problems.&quot; They are lawyer errors.
        Responsible use of GenAI demands rigorous validation processes, clear
        documentation, and a disciplined refusal to substitute convenience for
        accuracy.
      </p>

      <SectionHeading>
        From Theory to Practice: AI in eDiscovery and Investigations
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Ethical frameworks matter most when they are applied to real-world
        legal work. Today, AI is already being used across eDiscovery and
        investigative workflows, including early case assessment, relevance
        analysis, privilege review, hot document identification, and trial
        preparation. When deployed thoughtfully, these tools can enhance
        efficiency and insight without compromising ethical standards.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The challenge lies in striking the right balance—leveraging AI&apos;s
        capabilities while maintaining transparency, defensibility, and human
        oversight. Practical examples and emerging best practices demonstrate that
        responsible AI adoption is not about doing more with less oversight, but
        about doing better work with the right controls in place.
      </p>

      <SectionHeading>
        CLE Built for Real Litigation and eDiscovery Challenges
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        At AC Discovery, we believe that innovation in law isn&apos;t about
        replacing expertise, it&apos;s about amplifying it. We offer a variety of
        CLEs similar to this topic, that will give you practical strategies to
        strengthen client service, manage risk, and create measurable impact in
        your practice. Contact us at{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          chris.arellano@ac-discovery.net
        </a>{" "}
        to learn more.
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> generative ai ethics
        cle, ai in ediscovery, ethical use of ai in law, aba model rule 1.1
        technology competence, california rule of professional conduct ai,
        legal ai confidentiality risks, supervising ai in legal practice, ai
        hallucinations legal ethics, ai and duty of candor, genai investigations
        legal, ai best practices for attorneys, legal technology ethics cle
      </p>
    </article>
  );
}
