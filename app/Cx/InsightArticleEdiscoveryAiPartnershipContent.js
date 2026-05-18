import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleEdiscoveryAiPartnershipContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · March 13, 2023</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and{" "}
        <a
          href="https://www.ediscoveryai.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          eDiscovery AI
        </a>{" "}
        align strategic consulting with generative review rails—automating relevance,
        privilege, and PII decisions while extending the same stack across languages
        and rich media.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        The combination promises consistent, defensible throughput for teams buried in
        unstructured content—audio, video, and image evidence included.
      </p>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Enhanced efficiency and accuracy
      </h2>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AI-first classification layers accelerate first-pass decisions without relaxing
        validation habits counsel already owe clients and courts.
      </p>
      <blockquote className="mb-8 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Traditional document review methods are not enough to keep pace with the
        growing volume and complexity of legal and business data… This is the future of
        document review, and we&apos;re proud to lead the way.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO, AC Discovery
        </span>
      </blockquote>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Global reach and multi-content coverage
      </h2>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Multilingual NLP and multimedia parsing keep sprawling investigations in a
        single QC narrative rather than siloed boutique tools.
      </p>
      <blockquote className="mb-6 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;We recognize the critical need for fast and efficient document review,
        especially for clients with complex global needs…&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO, AC Discovery
        </span>
      </blockquote>
      <blockquote className="mb-8 border-l-4 border-[#2484C6] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Partnering with AC Discovery allows us to maximize the potential of our
        AI-powered solutions… Together, we are raising the bar on what&apos;s possible in
        legal discovery.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Jim Sullivan, CEO and Founder, eDiscovery AI
        </span>
      </blockquote>

      <h2
        className="mb-4 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        The path forward
      </h2>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Integrations will keep tightening so clients inherit AC Discovery&apos;s
        playbooks inside eDiscovery AI&apos;s automation fabric—one remediation loop
        instead of dueling vendors.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> eDiscovery AI, generative
        review, partnerships, multimedia discovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
