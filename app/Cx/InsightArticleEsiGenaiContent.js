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

export default function InsightArticleEsiGenaiContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Litigation is digital. Not partially digital. Not trending digital. Fully
        digital.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Electronically Stored Information (ESI) now makes up more than 90% of
        discoverable evidence in most matters. Emails, text messages, Slack and
        Teams chats, cloud storage, mobile data, AI-generated content—it&apos;s
        all fair game. And courts expect lawyers to understand how to preserve
        it, produce it, and defend their decisions.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        That&apos;s exactly what we&apos;re diving into during &quot;ESI, GenAI
        and Emerging Technologies in Modern Litigation: Federal Rules, Oklahoma
        State Practices, Ethics, and Best Practices.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Moderated by Bill Leach and presented by Tracy McCormack, Danny
        Thankachan, and{" "}
        <Link href="/about" className={link}>
          Kevin M Clark
        </Link>{" "}
        of{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , this session walks through what&apos;s actually happening in
        discovery—today—in Oklahoma federal and state courts, and what every
        litigator should be prepared to explain.
      </p>

      <SectionHeading>The Rules Are Clear. The Risks Are Real.</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The federal framework is familiar to most practitioners: Federal Rules
        of Civil Procedure Rule 26 on scope and proportionality, Rule 34 on the
        form of production, and Rule 37(e) on spoliation and sanctions. When ESI
        is lost, courts focus on whether &quot;reasonable steps&quot; were taken
        to preserve it—and whether prejudice and bad faith justify relief.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Oklahoma practice brings its own contours through the state court
        Discovery Code (12 O.S. Sections 3224 through 3237). State judges may
        apply broader discretion in some sanction scenarios than their federal
        counterparts, which makes local fluency essential when cases straddle
        both systems.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The practical takeaways are consistent: litigation holds must start
        early, preservation should be documented, and meet-and-confers should
        address ESI intentionally—not as an afterthought.
      </p>

      <SectionHeading>
        Emerging Data Sources Are Changing Everything
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Discovery is no longer an email-only exercise. Teams must account for:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Collaboration tools like Slack and Teams</li>
        <li>Ephemeral messaging</li>
        <li>Cloud-based systems</li>
        <li>Mobile device data</li>
        <li>AI-generated documents</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The panel examines strategic approaches to these sources, ESI
        protocols, and federal district guidelines—with attention to Oklahoma
        practice.
      </p>

      <SectionHeading>
        Ethics and Technology: They&apos;re Now Linked
      </SectionHeading>
      <p className="mb-4 text-base font-semibold text-white sm:text-lg">
        Competence includes technology. Period.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        ABA Model Rule 1.1 Comment 8 and Oklahoma&apos;s parallel duty make the
        point explicit: attorneys must understand the benefits and risks of
        relevant technology. That includes AI tools, metadata implications for
        production, supervising technology-assisted review, and safeguarding
        client confidentiality.
      </p>

      <p className="mb-4 mt-10 text-base leading-relaxed text-white/95 sm:text-lg">
        It does not mean becoming a technologist. It does mean exercising
        informed judgment.
      </p>

      <SectionHeading>GenAI Is Here, Now What?</SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Generative AI is already influencing legal workflows. Attorneys are using
        it for:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>Early case assessment</li>
        <li>Relevance and privilege review</li>
        <li>Drafting and research</li>
        <li>Privilege log generation</li>
        <li>Litigation strategy development</li>
        <li>Internal knowledge management</li>
      </ul>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        But best practices matter.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Maintain technological competence. Protect confidentiality. Verify
        everything. Use secure tools. And remember: AI augments legal
        reasoning—it does not replace it. Strategic use adds value. Overreliance
        creates risk.
      </p>

      <SectionHeading>
        Live Judicial Panel Discussion: Real-World Application
      </SectionHeading>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Featuring: Judge Kelly Greenough, Judge Susan Huntsman, Judge Jane
        Wiseman
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The discussion portion of this CLE program tackles the questions
        lawyers are actively facing:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          How aggressively are Oklahoma courts enforcing spoliation sanctions?
        </li>
        <li>
          How has proportionality changed preservation negotiations?
        </li>
      </ul>

      <SectionHeading>
        Join the Conversation in Tulsa on February 26th!
      </SectionHeading>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>What qualifies as &quot;reasonable steps&quot;?</li>
        <li>
          How should firms handle Slack messages, deleted texts, and
          AI-generated data?
        </li>
        <li>What should an ESI protocol actually include?</li>
      </ul>
      <p className="mb-4 text-base font-medium text-white/95 sm:text-lg">
        This isn&apos;t theoretical. It&apos;s practical. And it&apos;s
        happening now.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        This CLE brings together federal rules, Oklahoma state distinctions,
        litigation hold strategy, ethical duties, and AI integration into one
        focused discussion. It&apos;s designed for practitioners who want
        clarity—not confusion—around ESI and emerging technology. CLE credits
        are available for attendees in Oklahoma (including ethics credit), Texas,
        and Missouri.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        If you&apos;re navigating modern litigation, this conversation belongs on
        your calendar. Sign up, attend, and be part of the discussion shaping
        how discovery is practiced today.{" "}
        <Link href="/contact" className={link}>
          Register for the CLE Event!
        </Link>
      </p>

      <h3 className="mt-10 text-lg font-bold text-white sm:text-xl">
        When &amp; where
      </h3>
      <ul className="mb-6 mt-3 list-none space-y-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <li>
          <strong className="text-white">When:</strong> February 26, 2026,
          3:00–5:00 PM CT
        </li>
        <li>
          <strong className="text-white">Where:</strong> Tulsa County Bar
          Center – Lower Level, 1446 S Boston Ave, Tulsa, OK 74119
        </li>
        <li>
          <strong className="text-white">Parking:</strong> Enter and park
          behind the building
        </li>
      </ul>

      <h3 className="mt-10 text-lg font-bold text-white sm:text-xl">
        Presenters and judicial panel
      </h3>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Professor Tracy McCormack</strong> is a
        distinguished professor of law at the University of Texas.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          Kevin M Clark (AC Discovery) and Danny Thankachan
        </strong>{" "}
        are frequent national lecturers and subject matter experts on ESI, LLMs,
        and AI as applied to litigation practice.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Judicial panel:</strong> Tulsa County
        District Judge Kelly Greenough has served on the District Court bench
        since 2016 and was a driving force behind the Domestic Violence Court in
        Tulsa County.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">
          Northern District Magistrate Judge Susan Huntsman
        </strong>{" "}
        is a Harvard Law graduate who enjoyed a long and distinguished career
        at Crowe Dunlevy before assuming the bench in 2021. She has served as
        President of the ND/ED Chapter of the Federal Bar Association and is
        widely regarded by her colleagues as deeply knowledgeable about ESI.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Hon. Jane Wiseman</strong> served as a
        trial judge in Tulsa before her appointment to the Oklahoma Court of
        Civil Appeals in 2005. She holds multiple &quot;firsts&quot; and
        extensive recognition for judicial excellence.
      </p>

      <p className="mt-12 text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> ESI CLE Oklahoma,
        Oklahoma ethics CLE credit, Texas CLE credit pending, Kansas CLE credit,
        federal rules ESI, Oklahoma Discovery Code 12 O.S. 3226, FRCP 26
        proportionality, FRCP 37(e) spoliation sanctions, litigation hold best
        practices Oklahoma, GenAI in litigation CLE, eDiscovery ethics training,
        technological competence Rule 1.1 Oklahoma, ABA Model Rule 1.1
        technology, AI in eDiscovery, emerging technologies litigation CLE,
        Oklahoma federal district ESI guidelines, Slack Teams discovery
        preservation, privilege log generation AI, proportionality federal court
        discovery, Oklahoma state court spoliation sanctions
      </p>
    </article>
  );
}
