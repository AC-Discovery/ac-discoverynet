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

export default function InsightArticleDataOverloadContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        Pietro Pasternak, Everlaw Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        For the professionals who help law firms and corporate legal departments
        through the toughest ediscovery challenges, this fast-moving era of
        generative AI is an exercise in turning possibility into reality.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;What&apos;s been amazing about this past year is that AI has been
        adopted a lot faster,&quot; says{" "}
        <Link href="/about" className={link}>
          Kevin Clark
        </Link>
        , CEO of leading ediscovery managed services provider{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        . &quot;Everybody&apos;s testing it, trying to figure out how it can be
        used in their practice, whether it&apos;s a law firm or
        corporation.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery assists clients with the full range of ediscovery
        services, from collection and processing, all the way to trial. Its tech
        consultants help with management review, depositions, and trial
        preparation. Partnering with{" "}
        <a
          href="https://www.everlaw.com"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Everlaw
        </a>{" "}
        helps AC Discovery&apos;s consultants solve the three biggest
        headaches in modern litigation: technological risk, exploding data
        volumes, and operational efficiency.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The result: Clients enjoy a simpler experience with fewer handoffs,
        fewer vendors to manage, and greater consistency across matters.
      </p>

      <SectionHeading>
        Driving Higher Quality Document Review with Built-In GenAI
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The legal industry is usually slow to adapt new technology. But Clark
        says his clients have readily embraced Everlaw AI. In part that&apos;s
        because intuitive and powerful features like{" "}
        <a
          href="https://www.everlaw.com/ai/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Deep Dive
        </a>{" "}
        and{" "}
        <a
          href="https://www.everlaw.com/ai/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Coding Suggestions
        </a>{" "}
        are built directly into the platform, where clients are already working
        with data. Seamless integration makes it easy for professionals at law
        firms and on corporate teams to experiment with new capabilities in a
        secure environment.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;It has been easier to get our clients to try out Everlaw AI
        because it&apos;s built into the software,&quot; Clark says.
        &quot;They already enjoy a lot of Everlaw&apos;s technological advances
        and as Everlaw AI has been rolled out, it&apos;s been exciting to see
        how it&apos;s evolved.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        As an example, he discusses a client who&apos;s running a large matter
        through Everlaw AI. He notes that his team is working with Everlaw to
        customize workflows to deal with the volume of data.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;Generative AI has made a meaningful difference,&quot; Clark says.
        &quot;Our clients have been able to cut costs and have more efficient
        and higher quality reviews.&quot;
      </p>

      <SectionHeading>Minimizing the Irrelevant in Huge Data Sets</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="font-bold text-white">
          <a
            href="https://www.everlaw.com/blog/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Business data is increasing exponentially.
          </a>
        </strong>{" "}
        The legacy systems a law firm or corporation has in place weren&apos;t
        built for today&apos;s volumes, leaving many teams struggling to keep
        pace.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery helps clients manage massive quantities of data and
        focus on the right slices of information. Whatever combination of
        emails, Microsoft Office documents, social media, and videos a case
        involves, Everlaw&apos;s powerful ECA database, filters, and search
        capabilities — augmented with GenAI features — quickly separates the
        wheat from the chaff.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;We have terabytes of data that we bring in and have to cut
        down,&quot; Clark says. &quot;One thing we really like about Everlaw is
        the ability to easily minimize a lot of the waste.&quot;
      </p>

      <SectionHeading>Partnering to Build Better Efficiencies</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Clark says that AC Discovery working with the Everlaw team through
        the{" "}
        <a
          href="https://www.everlaw.com/partners/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Partner Program
        </a>{" "}
        is all about blending the right technology with the right strategy to
        solve complex challenges — and rethinking what&apos;s possible for the
        client.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;We&apos;ve been able to work together to create customized
        workflows,&quot; he says. &quot;We&apos;ve definitely been able to do
        some very unique and interesting things to meet our clients&apos;
        needs.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        And the program helps not only the client, but AC Discovery as well,
        he adds. &quot;We&apos;ve been able to identify potential clients and
        bring Everlaw to them to provide services when they don&apos;t have the
        resources they need.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The close collaboration, he says, has proven the value of Everlaw&apos;s
        GenAI features and helped clients be more efficient and more effective.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        &quot;We look forward to continuing to grow the partnership,&quot; Clark
        says. &quot;It&apos;s a win-win.&quot;
      </p>

      <h2
        className="mt-12 mb-4 rounded-lg px-4 py-3 text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base md:text-lg"
        style={{ backgroundColor: "#004972" }}
      >
        Get the best of both worlds with AC Discovery — Everlaw, now powered
        by Everlaw AI
      </h2>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Together with Everlaw, we deliver a seamless client experience through
        every step of the eDiscovery journey by providing best-in-class advisory
        and managed services; bundled with secure, fast, and user-friendly
        cloud-native technology — and now powered by Everlaw AI. Right
        Discovery&apos;s full-service litigation and staffing solution will
        improve efficiency for law firms and corporations of all sizes.
        Tailoring our approach to each client&apos;s needs, this enhanced
        partnership will reduce the complexities and uncertainty in managing
        today&apos;s litigation and investigations.
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> GenAI, Litigation
        Support, Document Review, Workflows, Legal Technology, Everlaw, Everlaw
        AI, Data, AC Discovery
      </p>
    </article>
  );
}
