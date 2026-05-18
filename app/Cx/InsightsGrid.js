import Image from "next/image";
import Link from "next/link";

import { insightArticles } from "./insightArticlesData";

function InsightCard({ title, image, alt, imageClassName }) {
  const isRemote = image.startsWith("http");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#004972] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-video w-full bg-black/30">
        <Image
          src={image}
          alt={alt}
          fill
          unoptimized={isRemote}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5 md:py-6">
        <h2 className="text-left text-sm font-bold leading-snug text-white sm:text-[15px] md:text-base">
          {title}
        </h2>
      </div>
    </article>
  );
}

export default function InsightsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#333333] px-4 pb-16 pt-2 sm:px-6 sm:pb-20 md:pb-24 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55] mask-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_40%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.11) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {insightArticles.map((item) => {
            const { slug, hasArticlePage, ...cardProps } = item;
            const card = <InsightCard key={slug} {...cardProps} />;
            if (!hasArticlePage) return card;
            return (
              <Link
                key={slug}
                href={`/insights/${slug}`}
                className="block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2484C6]"
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
