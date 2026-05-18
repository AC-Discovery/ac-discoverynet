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

export default function InsightArticleLifePreserversContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Human trafficking remains one of the most urgent justice failures of our
        time—silent, systemic, overwhelmingly under-resourced. Within that void,{" "}
        <a
          href="https://www.lifepreserversproject.org/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          The Life Preservers Project (LPP)
        </a>{" "}
        has spent more than a decade stitching together a luminous community bound
        by awareness, restorative programming, survivor dignity, and long-arc
        advocacy. Founder{" "}
        <strong className="text-white">Shana Pederson</strong> anchors an ecosystem
        where creatives, plaintiffs&apos; counsel, and corporate patrons trade
        stage time for courthouse strategy—fueling courtroom wins and healing art
        residencies alike.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        LPP&apos;s current initiatives pair trauma-informed legal navigation with
        performance therapy circles, mentorship collectives for youth survivors,
        and policy pushes that dare municipalities to retrofit outdated trafficking
        responses. Amplifying grassroots truth through stage lights builds pressure
        on institutions that stalled when accountability felt inconvenient.
      </p>

      <SectionHeading>A night with a purpose</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        AC Discovery proudly sponsors{" "}
        <strong className="text-white">Hope for the Holidays 2025</strong>,
        Life Preservers&apos; signature fundraiser uniting philanthropic partners,
        musicians, multidisciplinary artists, survivor advocates, and policy allies
        under one shimmering roof for an evening calibrated to replenish operating
        grants—while reminding guests why joyous gathering can still be militant
        activism.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Attendees mingle between musical sets, raffle reveals, storytelling circles,
        and tactile toy sorting lanes partnering with Toys for Tots so children
        navigating housing instability unwrap something tangible—not talking points.
      </p>

      <SectionHeading>Support that lasts beyond one night</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Candlelight fades, invoices clear, venue crews strike the risers—but
        survivors still need paralegal navigators, pro bono trial teams, childcare
        stipends, and transportation angels. Volunteers can steward skills (design,
        bookkeeping, multilingual intake), forge corporate underwriting packages,
        underwrite experiential learning labs, or seed recurring donor circles that
        let LPP plan beyond grant season roulette.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/contact" className={`${link} font-bold`}>
          RSVP for the evening or amplify the mission through a directed donation.
        </Link>{" "}
        If you crave an introduction to survivor programming before stepping into
        the ballroom spotlight, outreach leads welcome conversation year-round—we
        hope to toast with you beside the evergreen installation.
      </p>

      <div
        className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6"
        aria-label="Hope for the Holidays 2025 event logistics"
      >
        <p className="mb-3 text-lg font-bold text-white">
          Hope for the Holidays · 2025 details
        </p>
        <ul className="space-y-2 text-base leading-relaxed text-white/95 sm:text-lg">
          <li>
            <strong className="text-white">Date:</strong> Wednesday, December 3,
            2025
          </li>
          <li>
            <strong className="text-white">Time:</strong> 5:30 PM – 9:30 PM EST
          </li>
          <li>
            <strong className="text-white">Venue:</strong> Palma Verde, 1604
            Broadway, 4th Floor, New York, NY 10019
          </li>
        </ul>
      </div>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> survivor advocacy,
        Life Preservers Project, Toys for Tots benefit, humane trafficking
        response, philanthropic legal partnerships, corporate sponsorships, Hope for
        the Holidays gala, Broadway-adjacent nonprofit events, survivor-centered
        art programming
      </p>
    </article>
  );
}
