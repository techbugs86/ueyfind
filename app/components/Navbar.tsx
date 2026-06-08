"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <nav className="mx-auto flex max-w-[1920px] items-center justify-between px-5 py-6 sm:px-10 sm:py-8 lg:px-[110px] lg:py-12">
        <a href="#home" className="flex items-center">
          <Image
            src="/image.png"
            alt="UeyFind"
            width={64}
            height={64}
            className="h-10 w-auto sm:h-14 lg:h-[70px]"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:gap-12 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`font-poppins text-[clamp(1rem,1.4vw,1.6875rem)] transition-colors hover:text-brand-coral ${
                  l.active ? "font-semibold text-brand-coral" : "text-brand-cream"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-gradient-to-r from-brand-coral-soft to-brand-coral px-4 py-2 font-poppins text-sm text-brand-cream shadow-lg transition-transform hover:scale-105 sm:px-6 sm:py-2.5 sm:text-base">
            Support
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-cream lg:hidden"
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl bg-brand-dark/95 p-4 shadow-xl backdrop-blur lg:hidden">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 font-poppins text-base transition-colors hover:bg-white/5 ${
                  l.active ? "font-semibold text-brand-coral" : "text-brand-cream"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
