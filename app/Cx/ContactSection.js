"use client";

import { useState } from "react";

function FormField({ id, label, type = "text", required = false, textarea = false }) {
  const inputClasses =
    "w-full bg-white/5 border border-white/15 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2484C6] focus:bg-white/10 transition-colors";
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[#2484C6]">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const body = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  }

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24">
        <h1 className="text-white font-extrabold text-center uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s <span className="text-[#2484C6]">Connect</span>
        </h1>

        <p className="mt-6 text-center text-white/70 text-sm sm:text-base">
          <a
            href="mailto:chris.arellano@ac-discovery.net"
            className="font-medium text-[#2484C6] hover:text-[#4db3ea] underline underline-offset-2 transition-colors"
          >
            chris.arellano@ac-discovery.net
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
        >
          <FormField id="firstName" label="First Name" required />
          <FormField id="lastName" label="Last Name" required />
          <FormField id="email" label="Email Address" type="email" required />
          <FormField id="phone" label="Phone" type="tel" />
          <div className="sm:col-span-2">
            <FormField id="company" label="Company Name" />
          </div>
          <div className="sm:col-span-2">
            <FormField id="comments" label="Comments" textarea />
          </div>
          <div className="sm:col-span-2 mt-2 flex flex-col items-center gap-3">
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Thank you — your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#095786] hover:bg-[#2484C6] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-sm font-semibold tracking-wide uppercase px-10 py-3 rounded-md shadow-lg shadow-blue-900/30"
            >
              {status === "loading" ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
