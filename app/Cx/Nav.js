"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Forensics", href: "/forensics" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname, href) {
  if (href === "#") return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-700"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MenuListIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="13" x2="17" y2="13" />
      <line x1="7" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3.5" />
      <path d="M5.5 19.5c1.2-3 3.7-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
    </svg>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-10 pt-5">
      <nav className="mx-auto max-w-6xl rounded-full bg-white/75 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-between pl-3 pr-3 sm:pr-4 md:pl-5 md:pr-6 py-2.5">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/nav-logo.png"
            alt="E-Discovery Services"
            width={160}
            height={44}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item, idx) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 text-base font-medium transition-colors rounded-full ${
                    active
                      ? "text-[#2484C6]"
                      : "text-gray-700 hover:text-[#2484C6]"
                  }`}
                >
                  {item.label}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="mx-0.5 xl:mx-1 text-gray-700">
                    <ChevronRight />
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="text-[#004972] hover:text-[#2484C6] p-2 rounded-full transition-colors"
          >
            <SearchIcon />
          </button>
          <Link
            href="/project-ticket"
            aria-label="Project ticket form"
            className={`text-[#004972] hover:text-[#2484C6] p-2 rounded-full transition-colors ${
              pathname === "/project-ticket" ? "ring-2 ring-[#004972]/35 ring-offset-2 ring-offset-transparent" : ""
            }`}
          >
            <MenuListIcon />
          </Link>
          <button
            type="button"
            aria-label="Account"
            className="text-[#004972] hover:text-[#2484C6] p-1.5 rounded-full transition-colors"
          >
            <UserIcon />
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#004972] hover:text-[#2484C6] p-2 rounded-full transition-colors"
        >
          <HamburgerIcon open={open} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 mx-auto max-w-6xl rounded-2xl bg-white/85 backdrop-blur-md border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
          <ul className="flex flex-col py-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-5 py-3 text-base font-medium transition-colors ${
                      active
                        ? "text-[#2484C6] bg-[#2484C6]/5"
                        : "text-gray-700 hover:text-[#2484C6] hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-around border-t border-black/10 py-2">
            <button
              type="button"
              aria-label="Search"
              className="text-[#004972] hover:text-[#2484C6] p-2 rounded-full transition-colors"
            >
              <SearchIcon />
            </button>
            <Link
              href="/project-ticket"
              aria-label="Project ticket form"
              onClick={() => setOpen(false)}
              className={`text-[#004972] hover:text-[#2484C6] p-2 rounded-full transition-colors ${
                pathname === "/project-ticket" ? "ring-2 ring-[#004972]/35 ring-offset-2 ring-offset-transparent" : ""
              }`}
            >
              <MenuListIcon />
            </Link>
            <button
              type="button"
              aria-label="Account"
              className="text-[#004972] hover:text-[#2484C6] p-1.5 rounded-full transition-colors"
            >
              <UserIcon />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
