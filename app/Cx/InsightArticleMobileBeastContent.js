import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

function SectionHeading({ children }) {
  return (
    <h2
      className="mt-10 mb-3 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h2>
  );
}

export default function InsightArticleMobileBeastContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/75">
        Recap · Masters Conference New York
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Mobile evidence is no longer an exotic garnish—it is the entrée. At Masters New
        York,{" "}
        <strong className="text-white">Andy Jacobs</strong> convened{" "}
        <strong className="text-white">Eric Seggebruch</strong> (
        <a href="https://www.cellebrite.com/" className={link} target="_blank" rel="noopener noreferrer">
          Cellebrite
        </a>
        ), <strong className="text-white">Richard Clark</strong> (
        <strong>CloudNine</strong>), and <strong className="text-white">Rob Fried</strong>{" "}
        (
        <strong>Sandline Global</strong>) for{" "}
        <em>The Mobile Data Deluge: How to Tackle it for eDiscovery</em>—a rapid tour of
        acquisition tactics, decryption realities, and storytelling discipline when
        terabytes of chat history spill across inconsistent exports.
      </p>

      <SectionHeading>From SMS to Snapchat — the data never stops</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Jacobs reminded the room that nearly every stakeholder lives inside ephemeral
        messengers and siloed apps. Legal teams inherit unwieldy chat threads that must
        survive authentication fights—volume is only half the battle; consistency and
        narrative glue determine admissibility.
      </p>

      <SectionHeading>Collect smarter, not harder</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Fried pressed counsel to articulate the hypothesis before imaging an entire
        256 GB device “just in case.” Clark cautioned that dumping irrelevant noise into
        review environments pollutes AI outputs and inflates proportional fights no
        judge forgets.
      </p>

      <SectionHeading>Encrypted &amp; deleted — the new normal</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Deleted does not mean destroyed; encryption refresh cycles and OS updates
        rewrite the battlefield monthly. Seggebruch described a relentless cat-and-mouse
        cadence between OEM releases and forensic engineers reverse-engineering defensible
        extractions under oath.
      </p>

      <SectionHeading>Cross-app conversations — a braided headache</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Threads jump from email to Teams to WhatsApp without tidy boundaries. Clark
        outlined how CloudNine stitching aligns disparate repositories chronologically so
        reviewers read dialogue threads—not jagged fragments that hide intent.
      </p>

      <SectionHeading>Defensible, always</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Jacobs underscored the golden rule: narrate each acquisition, decryption, and
        hand-off as if a career depends on it—because eventually opposing experts will
        ask uncomfortable questions on a transcript record.
      </p>

      <SectionHeading>It&apos;s not just data — it&apos;s people</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Fried closed emotional loops with reminders that mobile artifacts chronicle
        human trauma, joy, negligence, and courage. Phones are diaries; treat their
        inhabitants with proportionality and empathy, not voyeurism.
      </p>

      <SectionHeading>Looking ahead</SectionHeading>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Seggebruch highlighted compressed on-scene windows—investigators may enjoy only
        an hour with a handset before travel logistics intervene. Precision beats panic.
      </p>

      <h3 className="mb-3 text-lg font-bold text-white">Key learnings</h3>
      <ul className="mb-10 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Mobile evidence is now table stakes in almost every matter.</li>
        <li>Scope collections surgically without orphaning smoking guns.</li>
        <li>
          Deleted or encrypted artifacts demand expert tooling—plan budgets accordingly.
        </li>
        <li>
          Cross-platform narratives require stitching—not siloed review panes alone.
        </li>
        <li>
          Document chain of custody obsessively; shortcuts become sanctions ammunition.
        </li>
        <li>
          Technology unlocks speed, but disciplined people and process remain the spine.
        </li>
      </ul>

      <p className="text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        proudly sponsors the Masters Conference and partners with{" "}
        <a href="https://www.cellebrite.com/" className={link} target="_blank" rel="noopener noreferrer">
          Cellebrite
        </a>{" "}
        allies to help teams collect, decode, and review modern evidence with courtroom
        composure intact.
      </p>
    </article>
  );
}
