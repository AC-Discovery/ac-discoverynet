import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleAtlantaMastersMomentumContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Pack comfortable shoes—and curiosity.{" "}
        <Link href="https://www.mastersconference.com/" className={`${link} font-semibold`} target="_blank" rel="noopener noreferrer">
          The Masters Conference
        </Link>{" "}
        lands in Atlanta on <strong className="text-white">Thursday, November 13, 2025</strong>,
        hosted by trusted local anchor{" "}
        <Link href="https://www.kslaw.com/" className={link} target="_blank" rel="noopener noreferrer">
          King &amp; Spalding
        </Link>
        . From corporate counsel juggling AI procurement memos to technologists forging
        new hosting lanes, practitioners gather for headliner panels, gritty workshop
        rooms, collisions of perspective you cannot manufacture on Zoom grids alone.
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        On deck: provocative sessions such as{" "}
        <em>
          Technology Adoption: What Do Corporate Legal Departments Expect From Their
          Law Firms?
        </em>{" "}
        — dissecting dashboards, SLA metrics, budgeting empathy, experimentation
        sandboxes demanded by savvy in-house innovators who refuse shelf-ware optics.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Also joining the tapestry: futuristic workshop{" "}
        <em>Masters 2035: Discovery Isn&apos;t Dead, It&apos;s Just Wearing Cooler Shoes</em>,
        where strategists riff on multidisciplinary squads, client education velocity,
        and whether tomorrow&apos;s review centers resemble creative studios more than cube
        farms.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Expect candid tracks touching eDiscovery, GenAI stewardship, forensic
        rigor,{" "}
        <Link href="/forensics" className={`${link} mx-0.5`}>
          investigative muscle
        </Link>
        , information governance scaffolding, cybersecurity tabletops—all framed for
        action, not jargon cosplay—because Southern hospitality welcomes debate as long as
        you bring receipts.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        So block the calendar: Thursday, November 13, 2025. Show up thirsty for
        cross-pollinating ideas—we&apos;ll cheers to hard-won progress under Atlanta&apos;s skyline.
      </p>

      <p className="mb-8 text-lg font-semibold text-white">
        Join the conversation. Be part of the movement and{" "}
        <Link href="/contact" className={`${link} font-semibold`}>
          register today
        </Link>
        !
      </p>

      <div className="mb-10 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6">
        <p className="mb-2 text-white">
          <strong>Where:</strong> King &amp; Spalding · 1180 Peachtree Street NE, Suite 1600, Atlanta,
          GA 30309
        </p>
        <p className="mb-2 text-white">
          <strong>When:</strong> Thursday, November 13, 2025 · Doors open 8:00 a.m.
        </p>
      </div>

      <p className="mb-8 text-base leading-relaxed text-white/90 sm:text-lg">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        proudly sponsors the Masters Conference &amp; Masters Conference Legal Events—we
        can&apos;t wait to trade war stories hallway-side with clients and co-conspirators
        leveling up national programs.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters Conference Atlanta,
        King Spalding, legal technology momentum, discovery innovation AI, cybersecurity
        forensics interplay, litigation support modernization, Kevin M. Clark advisory,
        southern legal ecosystems, collaborative digital transformation storytelling
      </p>
    </article>
  );
}
