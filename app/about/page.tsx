import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About Us — UeyFind",
  description:
    "UeyFind is an AI-first voice assistant that helps you store and retrieve anything in seconds. Learn about our mission, values, and the team behind it.",
};

const STATS = [
  { value: "50K+", label: "Items remembered" },
  { value: "10K+", label: "Happy users" },
  { value: "99.9%", label: "Recall accuracy" },
  { value: "< 2s", label: "Average retrieval" },
];

const VALUES = [
  {
    title: "Effortless by design",
    text: "No menus, no scrolling. You speak, UeyFind remembers. Every interaction is built to take seconds, not minutes.",
    tone: "coral" as const,
  },
  {
    title: "AI you can trust",
    text: "Our voice models understand natural language and context, so you never have to phrase things a certain way.",
    tone: "mint" as const,
  },
  {
    title: "Privacy first",
    text: "Your memories are yours. We protect your data with strong safeguards and never sell what you store.",
    tone: "coral" as const,
  },
  {
    title: "Built for real life",
    text: "Chargers, documents, keys, gifts—UeyFind is designed for the small things that are easy to lose and hard to track.",
    tone: "mint" as const,
  },
];

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <PageHeader
        eyebrow="About Us"
        title="The memory layer for your everyday life"
        subtitle="UeyFind is your AI-first voice assistant that helps you store and retrieve anything in seconds—so you never lose track of what matters."
      />

      {/* Mission */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[20%] top-[30%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral opacity-20 blur-[140px]" />
          <div className="absolute left-[80%] top-[60%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-mint opacity-30 blur-[140px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal>
            <h2 className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3rem)] leading-tight">
              Our mission is to make <span className="text-brand-coral">forgetting</span> optional
            </h2>
            <p className="mt-5 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(1rem,1.4vw,1.25rem)]">
              We started UeyFind with a simple frustration: everyone loses things. Chargers vanish,
              documents hide, and the mental load of remembering where everything is never stops.
            </p>
            <p className="mt-4 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(1rem,1.4vw,1.25rem)]">
              So we built an assistant you can just talk to. Tell it where you put something, and
              ask anytime to get it back—instantly. No apps to organize, no notes to dig through.
              Just your voice and a memory that never fades.
            </p>
          </Reveal>

          <Reveal variant="scale" delay={120} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-brand-coral-soft/40 to-brand-mint/40 blur-2xl" />
            <Image
              src="/mockup.png"
              alt="UeyFind app"
              width={420}
              height={860}
              className="mx-auto h-auto w-full max-w-[360px] drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-cream py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-10">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              variant="scale"
              delay={i * 90}
              className="rounded-[24px] bg-white px-6 py-8 text-center shadow-[0_20px_50px_rgba(7,48,53,0.06)]"
            >
              <p className="font-poppins font-bold text-brand-coral text-[clamp(1.75rem,3vw,2.75rem)]">
                {s.value}
              </p>
              <p className="mt-1 font-poppins text-sm text-brand-dark/60 sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3rem)] leading-tight">
              What we stand for
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
              A few principles guide every feature we ship.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                variant="scale"
                delay={(i % 2) * 120}
                className={`rounded-[28px] p-7 sm:p-9 ${
                  v.tone === "coral" ? "bg-[#FCEAE6]" : "bg-[#E4F7F1]"
                }`}
              >
                <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.25rem,2vw,1.75rem)]">
                  {v.title}
                </h3>
                <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.95rem,1.3vw,1.125rem)]">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
