import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import HowItWorks from "../components/HowItWorks";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "How It Works — UeyFind",
  description:
    "See how UeyFind works: speak to save or find anything, capture items with a photo, and retrieve them in seconds with AI-powered voice recall.",
};

const STEPS = [
  {
    title: "Speak it",
    text: "Tap the mic and tell UeyFind what you're storing or looking for—in plain, natural language.",
  },
  {
    title: "AI understands",
    text: "Voice models parse the item, location, and context instantly. No keywords, no rigid phrasing.",
  },
  {
    title: "It's remembered",
    text: "UeyFind files the memory away securely, linked to the details that make it findable later.",
  },
  {
    title: "Ask anytime",
    text: "Months later, just ask. UeyFind surfaces the exact item in seconds—no scrolling, no digging.",
  },
];

const FEATURES = [
  {
    title: "Voice-first by design",
    text: "Built for your voice, not your thumbs. Every action takes seconds—speak and move on.",
    tone: "coral" as const,
  },
  {
    title: "Snap to remember",
    text: "Some things are easier shown than said. Capture a photo and UeyFind stores it with context.",
    tone: "mint" as const,
  },
  {
    title: "Instant retrieval",
    text: "Average recall under two seconds. Ask once and the answer is already there.",
    tone: "mint" as const,
  },
  {
    title: "Private by default",
    text: "Your memories stay yours. Strong safeguards, and we never sell what you store.",
    tone: "coral" as const,
  },
];

const FAQS = [
  {
    q: "Do I have to phrase things a specific way?",
    a: "No. UeyFind understands natural language and context, so you can speak however feels normal.",
  },
  {
    q: "What kinds of things can I store?",
    a: "Anything—items, locations, notes, reminders, documents. If you can say it, UeyFind can remember it.",
  },
  {
    q: "Does it work offline?",
    a: "Capturing works anywhere; retrieval syncs the moment you're back online, so nothing is ever lost.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your memories are encrypted and private to your account. We never sell or share your data.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <PageHeader
        title="How UeyFind works"
        subtitle="From your voice to instant recall in seconds—here's how UeyFind stores and retrieves everything you tell it."
      />

      <HowItWorks />

      {/* Numbered steps */}
      <section className="bg-brand-cream py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3rem)] leading-tight">
              Four steps, start to finish
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
              The whole flow takes seconds—and most of it happens automatically.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.title}
                variant="scale"
                delay={(i % 4) * 100}
                className="relative rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(7,48,53,0.06)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-coral-soft to-brand-coral font-poppins text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-poppins font-bold text-brand-deep text-[clamp(1.1rem,1.6vw,1.4rem)]">
                  {s.title}
                </h3>
                <p className="mt-2 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.9rem,1.2vw,1.05rem)]">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[18%] top-[28%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral opacity-20 blur-[140px]" />
          <div className="absolute left-[82%] top-[62%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-mint opacity-30 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3rem)] leading-tight">
              Why it just works
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
              The details that make remembering effortless.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.title}
                variant="scale"
                delay={(i % 2) * 120}
                className={`rounded-[28px] p-7 sm:p-9 ${
                  f.tone === "coral" ? "bg-[#FCEAE6]" : "bg-[#E4F7F1]"
                }`}
              >
                <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.25rem,2vw,1.75rem)]">
                  {f.title}
                </h3>
                <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.95rem,1.3vw,1.125rem)]">
                  {f.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-cream py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3rem)] leading-tight">
              Questions, answered
            </Reveal>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12">
            {FAQS.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 80}
                className="rounded-[24px] bg-white p-6 shadow-[0_14px_40px_rgba(7,48,53,0.05)] sm:p-7"
              >
                <h3 className="font-poppins font-semibold text-brand-deep text-[clamp(1rem,1.5vw,1.2rem)]">
                  {f.q}
                </h3>
                <p className="mt-2 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.9rem,1.2vw,1.05rem)]">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-brand-dark py-16 text-center sm:py-20 lg:py-24">
        <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[60vw] max-h-[460px] w-[60vw] max-w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 px-5">
          <Reveal as="h2" className="font-poppins font-bold leading-tight text-white text-[clamp(1.875rem,4vw,3.5rem)]">
            Ready to never lose track again?
          </Reveal>
          <Reveal as="p" delay={120} className="max-w-xl font-poppins font-light text-white/80 text-[clamp(1rem,1.5vw,1.25rem)]">
            Download UeyFind and let your voice do the remembering.
          </Reveal>
          <Reveal delay={240} className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/support"
              className="rounded-2xl bg-gradient-to-r from-brand-coral-soft to-brand-coral px-7 py-3.5 font-poppins font-medium text-white shadow-lg transition-transform hover:scale-105"
            >
              Get the app
            </Link>
            <Link
              href="/about"
              className="rounded-2xl border border-white/20 px-7 py-3.5 font-poppins font-medium text-white transition-colors hover:bg-white/10"
            >
              Learn more
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
