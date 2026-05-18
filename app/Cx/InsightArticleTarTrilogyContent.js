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

export default function InsightArticleTarTrilogyContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-1 text-sm text-white/70">August 1, 2025</p>
      <p className="mb-6 text-lg italic text-white/90">Lucy Robinson · AC Discovery Staff Writer</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Hon. <strong className="text-white">Andrew J. Peck</strong>, retired SDNY
        magistrate and patron saint of predictive coding doctrine, sat down with our
        editors to revisit the &quot;TAR Trilogy&quot;—three decisions reframing how litigators negotiate algorithmic review. The calendar also notes nine years since{" "}
        <em>Hyles v. City of New York</em> recalibrated party autonomy debates.
      </p>

      <SectionHeading>What &quot;TAR&quot; means here</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Technology-assisted review—predictive coding—today spans{" "}
        <strong className="text-white">TAR 1.0</strong> seed-driven workflows and{" "}
        <strong className="text-white">TAR 2.0</strong> continuous active learning (CAL)
        regimes where models evolve as senior reviewers code on the fly, shrinking rigid
        starter sets while demanding disciplined QC storytelling.
      </p>

      <SectionHeading>The TAR guru himself</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Judge Peck&apos;s <em>Search, Forward</em> scholarship benchmarked algorithmic
        stacks against keyword purgatory—cheered by some, jeered by others, but
        impossible to ignore once productions ballooned past human linearity.
      </p>

      <SectionHeading>1. Da Silva Moore v. Publicis Groupe &amp; MSL Group</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        February 24, 2012: first federal endorsement of predictive coding inside a
        sprawling gender-discrimination docket—proof courts could bless statistically
        grounded sampling when transparency and meet-and-confer hygiene held.
      </p>

      <SectionHeading>2. Rio Tinto Plc v. Vale S.A.</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        April 2015: both camps chose TAR; Judge Peck cemented presumptive deference—
        absent prejudice, producing parties may deploy predictive workflows without
        opponents vetoing math they dislike. TAR stops being exotic liability; it
        joins keyword and linear methods as responsible options when proportionality
        demands it.
      </p>

      <SectionHeading>3. Hyles v. City of New York et al.</SectionHeading>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        Plaintiffs sought to compel defendants onto TAR; Judge Peck refused. Parties
        choose their discovery modality absent abuse—opening space for good-faith
        negotiation instead of judicial coding mandates—even when he personally
        favored algorithmic efficiency.
      </p>

      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Together the trilogy normalized transparent statistical review, empowered
        negotiated adoption, and preserved autonomy—heralding today&apos;s GenAI
        disputes about disclosure, validation, and judge-facing narratives.
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> predictive coding, TAR, CAL,
        Da Silva Moore, Rio Tinto, Hyles, Judge Peck,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , eDiscovery precedent
      </p>
    </article>
  );
}
