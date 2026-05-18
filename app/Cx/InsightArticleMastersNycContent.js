import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersNycContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Skyline light poured across Morgan Lewis&apos;s 101 Park Avenue perch while
        Masters New York delegates debated deepfakes, mobile evidence, and AI&apos;s
        courtroom etiquette. Day one paired high-adrenaline forensics demos with a
        spirited GenAI mock trial that forced technologists to plead their hype
        budgets before practicing skeptics.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Breakouts chased social-media intelligence, the expanding data revolution,
        and sponsor-led strategy sessions—including a Kroll-hosted working lunch that
        reminded guests that talent retention is as strategic as tooling purchases. A
        raucous &quot;Legal Tech Jeopardy&quot; finale rewarded the quick-witted before
        champagne toasts gave way to side hustles plotting day-two experiments.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Morning two opened with humanities-inflected storytelling about persuasion,
        segued into Demystifying GenAI labs, then tackled change management and Legal
        Ops 2025 realities. The closing panel{" "}
        <em>Beyond the Billable</em> reframed value conversations for firms allergic
        to transparency—even as vendors flashed ROI calculators daring leaders to use
        them.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        again sponsored programming that threads empathy through innovation. Follow
        the Masters calendar for upcoming stops—Philadelphia, Seattle, Atlanta—and
        keep the conversation live long after the last swag bag empties.
      </p>

      <div className="mb-10 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base">
        <p className="mb-2 font-semibold text-white">Event snapshot</p>
        <p>Masters Conference New York · July 22–23, 2025</p>
        <p>Doors 8:00 a.m. ET · Hosted by Morgan Lewis</p>
        <p>
          101 Park Avenue, New York, NY 10178
        </p>
        <p className="mt-3">
          <a
            href="https://mastersconference.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for upcoming events →
          </a>
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference NYC,
        legal tech, generative AI, deepfakes, social media discovery, Legal Ops,
        change management, innovation,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
      </p>
    </article>
  );
}
