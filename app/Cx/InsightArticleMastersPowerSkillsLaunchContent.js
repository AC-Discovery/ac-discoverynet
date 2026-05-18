import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersPowerSkillsLaunchContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        We&apos;re launching{" "}
        <strong className="text-white">The Masters Conference Legal Power Skills</strong>{" "}
        alongside CEO <strong className="text-white">Kevin M. Clark</strong> and{" "}
        <strong className="text-white">Richard Robinson</strong>, Director of Legal
        Operations &amp; Litigation Support at{" "}
        <strong className="text-white">Toyota North America</strong>, in partnership with{" "}
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          The Masters Conference
        </a>
        . The curriculum targets durable human skills—communication, leadership, EQ, and
        adaptability—that separate steady operators from burned-out high performers.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Join us <strong className="text-white">Thursday, July 25, 2024 · 11:00 a.m. ET</strong>{" "}
        at{" "}
        <a
          href="https://www.morganlewis.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan, Lewis &amp; Bockius LLP
        </a>
        , 101 Park Avenue, New York, NY. Dare to leave your comfort zone—or stay square.
        {" "}
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register today →
        </a>
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> power skills, NYC, Masters
        Conference,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
