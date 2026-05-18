import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleTexasShowdownContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-base">
        Calling all legal pros — come on down!
      </p>
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        On <strong className="text-white">Wednesday, September 10, 2025</strong>,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and{" "}
        <a href="https://www.everlaw.com/" className={link} target="_blank" rel="noopener noreferrer">
          Everlaw
        </a>{" "}
        co-host the <strong className="text-white">Texas Legal Showdown: Game Night Edition</strong>.
        Check-in opens <strong className="text-white">5:30 PM</strong> for Lone Star libations,
        hearty bites, and rapid-fire networking before the scoreboard lights up.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Forget staid ballroom keynotes—attorneys, ops leaders, educators, and agency
        partners square off through game-show showdowns engineered to spark laughter,
        rivalry, and unexpectedly poignant lessons about collaboration under pressure.
        <em> Trophy bragging rights included.</em>
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Whether you bleed Dallas green or are jetting through DFW for the week, claim a
        seat early—capacity is intentionally intimate.{" "}
        <Link href="/contact" className={`${link} font-semibold`}>
          Register now
        </Link>
        .
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/90 sm:text-lg">
        Heartfelt high-fives to Everlaw friends for co-producing the chaos—your product
        vision pairs perfectly with brisket-scented bravado.
      </p>

      <div className="mb-10 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-6 sm:px-6 space-y-2 text-base text-white/95">
        <p>
          <strong className="text-white">Where:</strong> Game Show Battle Rooms · Dallas
          · 4887 Alpha Road, Suite 250 · Farmers Branch, TX 75244
        </p>
        <p>
          <strong className="text-white">When:</strong> Wednesday, September 10, 2025 ·
          5:30 PM check-in
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/80">
        You must be{" "}
        <Link href="/contact" className={`${link} font-semibold`}>
          registered
        </Link>{" "}
        to attend. Open to legal professionals at law firms, in-house departments, or
        education and government agencies.
      </p>
    </article>
  );
}
