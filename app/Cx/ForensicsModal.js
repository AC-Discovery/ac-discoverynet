"use client";

import { useEffect } from "react";

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ForensicsModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  const { title, description, Icon } = item;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/55 cursor-default"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="forensics-modal-title"
        className="relative w-full max-w-3xl bg-white rounded-sm shadow-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors p-1"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-12 items-center sm:items-start pr-6">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center"
            aria-hidden="true"
          >
            <Icon />
          </div>

          <div className="text-center sm:text-left">
            <h2
              id="forensics-modal-title"
              className="text-black font-bold text-xl sm:text-2xl tracking-tight"
            >
              {title}
            </h2>

            <p className="mt-4 text-black text-sm sm:text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}