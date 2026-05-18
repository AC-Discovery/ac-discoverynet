import Link from "next/link";

const link =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea]";

export default function InsightArticleMastersDcDevicesContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-6 text-lg italic text-white/90">
        AC Discovery Staff Writer
      </p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Join the{" "}
        <a
          href="https://mastersconference.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Masters Conference
        </a>{" "}
        in Washington, D.C., for a working discussion on modern data in motion—where
        in-house stewards, outside counsel, and processing engineers must agree on what
        to preserve, how to format novel exports, and which review stacks actually
        ingest them.
      </p>
      <p className="mb-6 text-base leading-relaxed text-white/95 sm:text-lg">
        <strong className="text-white">Kevin Clark</strong>, CEO of{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , and <strong className="text-white">Jason Voss</strong>, Owner &amp; CTO of{" "}
        <a
          href="https://www.conversedata.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Converse Data
        </a>
        , walk scenarios spanning legacy email comfort zones through Slack, social
        exports, and mobile artifacts that resist blunt TIFF metaphors.
      </p>

      <h2
        className="mb-3 rounded-lg px-4 py-3 text-lg font-bold text-white sm:text-xl"
        style={{ backgroundColor: "#004972" }}
      >
        Panelists
      </h2>
      <ul className="mb-8 list-disc space-y-1 pl-6 text-base text-white/95 sm:text-lg">
        <li>Mable Tun, Freddie Mac</li>
        <li>Amanda Merrill, Capital One</li>
        <li>Alicia Clausen, Crowell &amp; Moring</li>
        <li>Nick Eglevsky, Blank Rome</li>
        <li>Jason Voss, Converse Data</li>
        <li>Kevin M. Clark, AC Discovery</li>
      </ul>

      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
        <p>April 17, 2024</p>
        <p>
          Hosted by{" "}
          <a
            href="https://www.sidley.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sidley Austin LLP
          </a>
        </p>
        <p>1501 K Street Northwest #600, Washington, DC 20005</p>
        <p className="mt-3">
          <a
            href="https://mastersconference.com/"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register today →
          </a>
        </p>
      </div>

      <p className="mb-4 text-sm text-white/80">
        <Link href="/" className={link}>
          AC Discovery
        </Link>{" "}
        and Converse Data proudly sponsor this Masters program.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-white/75">
        Converse Data normalizes short-form messaging and social collections for
        downstream review platforms—continuously expanding source coverage as mobile and
        enterprise chat APIs evolve.
      </p>
      <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
        Need help tailoring collection through production for unconventional datasets?{" "}
        <a href="mailto:chris.arellano@ac-discovery.net" className={link}>
          Connect with our advisors →
        </a>
      </p>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> Masters DC, mobile data,
        Slack, investigations,{" "}
        <Link href="/" className={link}>
          AC Discovery
        </Link>
        , Converse Data
      </p>
    </article>
  );
}
