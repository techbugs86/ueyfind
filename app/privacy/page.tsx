import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — UeyFind",
  description:
    "How UeyFind collects, uses, and protects your data. Your memories are yours—learn about our privacy commitments.",
};

const SECTIONS = [
  {
    title: "1. Information we collect",
    body: [
      "We collect the voice notes and items you choose to store, along with basic account details such as your email address.",
      "We also collect limited technical data—device type, app version, and usage patterns—to keep UeyFind reliable and to improve recall accuracy.",
    ],
  },
  {
    title: "2. How we use your data",
    body: [
      "Your stored memories are used solely to power retrieval—so when you ask, we can find what you saved.",
      "Voice input is processed to understand your request. We use aggregated, anonymized usage data to improve our AI models. We never sell your personal data.",
    ],
  },
  {
    title: "3. Voice and AI processing",
    body: [
      "When you speak to UeyFind, your audio is transcribed and interpreted by our AI. Transcripts are tied to your account so retrieval works across sessions.",
      "You can delete any stored item—and its associated voice data—at any time from within the app.",
    ],
  },
  {
    title: "4. Data storage and security",
    body: [
      "Your data is encrypted in transit and at rest. Access is restricted to systems that power your experience.",
      "We retain your memories until you delete them or close your account. On account deletion, your personal data is removed within 30 days.",
    ],
  },
  {
    title: "5. Sharing and third parties",
    body: [
      "We do not sell your personal information. We share data only with service providers who help us operate UeyFind, under strict confidentiality.",
      "We may disclose information if required by law or to protect the safety of our users.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "You can access, correct, export, or delete your data at any time. You control what you store and what you remove.",
      "To exercise any of these rights, contact us through the Support page.",
    ],
  },
  {
    title: "7. Changes to this policy",
    body: [
      "We may update this policy as UeyFind evolves. We'll notify you of material changes through the app or by email.",
      "Continued use after an update means you accept the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <PageHeader
        eyebrow="Privacy Policy"
        title="Your memories are yours"
        subtitle="We built UeyFind to remember for you—not to profit from your data. Here's exactly how we handle what you store."
      />

      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-[10%] h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] -translate-x-1/2 rounded-full bg-brand-mint opacity-20 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 lg:px-0">
          <Reveal
            variant="fade"
            className="font-poppins text-sm text-brand-dark/50"
          >
            Last updated: June 2026
          </Reveal>

          <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-10">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="rounded-[24px] border border-brand-dark/[0.06] bg-brand-cream/60 p-6 sm:p-8">
                  <h2 className="font-poppins font-bold text-brand-deep text-[clamp(1.25rem,2.2vw,1.75rem)]">
                    {s.title}
                  </h2>
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.95rem,1.3vw,1.125rem)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="scale" className="mt-12 rounded-[28px] bg-brand-teal px-7 py-10 text-center sm:px-10 sm:py-12">
            <h3 className="font-poppins font-semibold text-white text-[clamp(1.5rem,2.6vw,2.25rem)]">
              Questions about your privacy?
            </h3>
            <p className="mx-auto mt-3 max-w-xl font-poppins font-light leading-relaxed text-white/85 text-[clamp(1rem,1.4vw,1.25rem)]">
              We're happy to walk you through anything. Reach out and our team will respond quickly.
            </p>
            <a
              href="/support"
              className="mt-6 inline-block rounded-[44px] bg-gradient-to-r from-brand-coral-soft to-brand-coral px-8 py-3.5 font-poppins font-medium text-white transition-transform hover:scale-105"
            >
              Contact Support
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
