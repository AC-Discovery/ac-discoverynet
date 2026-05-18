import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleRichRobinsonInterviewContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Work is hard. Beyond the task list sit awkward human moments—accountability
        conversations, sudden reorganizations, and upward feedback nobody rehearsed in
        law school. Those skills rarely appear in an onboarding PDF, yet they separate
        thriving teams from brittle ones.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Ahead of{" "}
        <strong className="text-white">The Masters Conference Legal Power Skills</strong>
        , we caught up with facilitator{" "}
        <strong className="text-white">Richard Robinson</strong>, Director of Legal
        Operations &amp; Litigation Support at{" "}
        <strong className="text-white">Toyota North America</strong>, and{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        CEO <strong className="text-white">Kevin M. Clark</strong> about the six
        &quot;power skills&quot; that deserve deliberate practice—communication,
        collaboration, emotional intelligence, ingenuity, adaptability, and leadership.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Ready to leave your square? Join the squad on{" "}
        <strong className="text-white">Thursday, July 25</strong> in New York City for a
        working session that treats professional growth like a craft—not an afterthought.
      </p>

      <div className="mb-10 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>
          Hosted by{" "}
          <a
            href="https://www.morganlewis.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Morgan, Lewis &amp; Bockius LLP
          </a>
        </p>
        <p>101 Park Avenue, New York, NY 10117</p>
        <p className="mt-3">
          <a
            href="https://mastersconference.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            A Masters Conference event → register today
          </a>
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> power skills, leadership,
        emotional intelligence,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Masters Conference
      </p>
    </article>
  );
}
