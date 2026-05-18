import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersNycJuly24Content() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-6 text-base font-semibold leading-relaxed text-white sm:text-lg">
        The Masters Conference lands in New York City on Wednesday, July 24!
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Join practitioners and technologists for conversations engineered to sharpen
        corporate investigations and discovery strategy.
      </p>
      <p className="mb-3 text-base font-medium text-white">Topics include:</p>
      <ul className="mb-8 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
        <li>
          Innovative eDiscovery tooling for internal corporate investigations
        </li>
        <li>
          Where large language models collide with professional responsibility and
          litigation reality
        </li>
        <li>
          Moving from CAL training paradigms toward language-native instruction
        </li>
      </ul>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register today
        </a>{" "}
        —capacity is intentionally tight.
      </p>
      <div className="mb-10 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90">
        <p>Morgan, Lewis &amp; Bockius LLP</p>
        <p>101 Park Avenue, New York, NY 10117</p>
      </div>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters New York, LLMs,
        CAL, eDiscovery,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
