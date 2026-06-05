import Image from "next/image";

const LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <nav className="mx-auto flex items-center justify-between px-6 py-12 sm:px-10" style={{ marginLeft: "110px", marginRight: "110px" }}>
        <a href="#home" className="flex items-center">
          <Image
            src="/image.png"
            alt="UeyFind"
            width={64}
            height={64}
            className=" w-auto"
            style={{ height: "70px" }}
            priority
          />
        </a>

        <ul className="hidden items-center gap-12 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`font-poppins transition-colors hover:text-brand-coral ${
                  l.active ? "font-semibold text-brand-coral" : "text-brand-cream"
                }`}
                style={{ fontSize: "27px" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-xl bg-gradient-to-r from-brand-coral-soft to-brand-coral px-6 py-2.5 font-poppins text-base text-brand-cream shadow-lg transition-transform hover:scale-105">
          Support
        </button>
      </nav>
    </header>
  );
}
