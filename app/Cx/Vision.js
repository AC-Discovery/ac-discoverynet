"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Who Benefits", "Services", "Forensics"];

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export default function Vision() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 pb-10 md:pb-16">
      <div className="mx-auto max-w-7xl rounded-[28px] md:rounded-[36px] bg-[#004972] px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-8">
            <h2 className="text-white font-semibold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Your Vision, Our
              <br />
              Mission to Achieve
            </h2>
          </div>
          <div className="md:col-span-4 md:pt-3">
            <p className="text-white/85 text-sm md:text-[15px] leading-relaxed max-w-sm">
              Start your project off right with a team of dependable digital
              forensics experts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start mt-10 md:mt-16">
          <div className="md:col-span-2 lg:col-span-2">
            <ul className="flex md:flex-col gap-6 md:gap-5">
              {tabs.map((tab) => {
                const active = tab === activeTab;
                return (
                  <li key={tab}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm font-medium transition-colors ${
                        active
                          ? "text-white"
                          : "text-white/55 hover:text-white/80"
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-6">
            <button
              type="button"
              aria-label="Play video"
              className="relative block w-full rounded-2xl overflow-hidden bg-black/30 group"
            >
              <Image
                src="/vid-placeholder.png"
                alt="Forensic team meeting"
                width={811}
                height={425}
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
              {/* <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/85 group-hover:bg-white text-[#004972] flex items-center justify-center transition-colors shadow-lg">
                  <PlayIcon />
                </span>
              </span> */}
            </button>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-white text-xl md:text-2xl font-medium leading-snug max-w-xs">
              Our focus is on providing reliable forensic support
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mt-5 max-w-xs">
              We keep your data secure and defensible. Our team will help guide
              you through the digital forensic process and offer support
            </p>
            <button
              type="button"
              className="mt-5 text-white text-sm font-medium hover:text-white/70 transition-colors"
            >
              Learn More
            </button>

            <div className="flex items-center gap-3 mt-10">
              <Image
                src="/ceo.png"
                alt="Jane Doe"
                width={69}
                height={69}
                quality={100}
                unoptimized
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div className="leading-tight">
                <p className="text-white text-sm md:text-base font-medium">
                  Jane doe
                </p>
                <p className="text-white/70 text-xs md:text-sm mt-0.5">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
