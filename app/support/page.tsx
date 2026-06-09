import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Faq from "../components/Faq";

export const metadata: Metadata = {
  title: "Support — UeyFind",
  description:
    "Need help with UeyFind? Browse FAQs, reach our team, or send a message. We're here to help you never lose track again.",
};

const CHANNELS = [
  {
    title: "Email us",
    text: "Get a response within 24 hours.",
    action: "support@ueyfind.app",
    href: "mailto:support@ueyfind.app",
    tone: "coral" as const,
  },
  {
    title: "Live chat",
    text: "Chat with our team in real time, in-app.",
    action: "Open the app",
    href: "#",
    tone: "mint" as const,
  },
  {
    title: "Help center",
    text: "Browse guides and step-by-step tutorials.",
    action: "Visit help center",
    href: "#",
    tone: "coral" as const,
  },
];

const FAQS = [
  {
    q: "How does UeyFind remember my items?",
    a: "Just speak. Tell UeyFind what you stored and where—\"the charger is in the bedroom drawer\"—and our AI saves it. When you ask again, it retrieves the exact location in seconds.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes. Your memories are encrypted in transit and at rest, tied only to your account, and never sold. You can delete any item or your entire account at any time.",
  },
  {
    q: "Do I need internet to use it?",
    a: "An internet connection is needed to process voice and sync your memories across devices, so retrieval works anywhere you sign in.",
  },
  {
    q: "Can I use UeyFind on multiple devices?",
    a: "Absolutely. Sign in on any supported device and your stored items are available everywhere—on iPhone and Android.",
  },
  {
    q: "Is there a free version?",
    a: "Yes, UeyFind offers a free plan to get you started. Premium plans unlock unlimited storage and advanced retrieval features.",
  },
  {
    q: "How do I delete something I stored?",
    a: "Open the item in the app and tap delete. The memory and its associated voice data are removed immediately.",
  },
];

export default function SupportPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <PageHeader
        eyebrow="Support"
        title="We're here to help"
        subtitle="Find quick answers, reach our team, or drop us a message. However you need help with UeyFind—we've got you."
      />

      {/* Contact channels */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute left-[80%] top-[20%] h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] -translate-x-1/2 rounded-full bg-brand-coral opacity-15 blur-[150px]" />

        <div className="relative mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {CHANNELS.map((c, i) => (
            <Reveal
              key={c.title}
              variant="scale"
              delay={i * 100}
              className={`flex flex-col rounded-[28px] p-7 sm:p-8 ${
                c.tone === "coral" ? "bg-[#FCEAE6]" : "bg-[#E4F7F1]"
              }`}
            >
              <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.25rem,2vw,1.625rem)]">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(0.95rem,1.3vw,1.0625rem)]">
                {c.text}
              </p>
              <a
                href={c.href}
                className="mt-5 font-poppins font-semibold text-brand-coral transition-colors hover:text-brand-deep"
              >
                {c.action} →
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ + form */}
      <section className="relative overflow-hidden bg-brand-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
          {/* FAQ */}
          <Reveal>
            <h2 className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3vw,2.75rem)] leading-tight">
              Frequently asked <span className="text-brand-coral">questions</span>
            </h2>
            <p className="mt-3 mb-8 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
              Everything you need to know about using UeyFind.
            </p>
            <Faq items={FAQS} />
          </Reveal>

          {/* Contact form */}
          <Reveal variant="scale" delay={120} className="lg:sticky lg:top-10 lg:self-start">
            <form className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(7,48,53,0.08)] sm:p-9">
              <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.375rem,2.2vw,1.875rem)]">
                Send us a message
              </h3>
              <p className="mt-2 font-poppins text-sm text-brand-dark/60">
                Fill out the form and we'll get back to you shortly.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <Field label="Name" placeholder="Your name" type="text" />
                <Field label="Email" placeholder="you@example.com" type="email" />
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins text-sm font-medium text-brand-deep">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="resize-none rounded-2xl border border-brand-dark/10 bg-brand-cream/50 px-4 py-3 font-poppins text-sm text-brand-deep outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-coral"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 cursor-pointer rounded-2xl bg-gradient-to-r from-brand-coral-soft to-brand-coral px-6 py-3.5 font-poppins font-medium text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Send message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-poppins text-sm font-medium text-brand-deep">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-brand-dark/10 bg-brand-cream/50 px-4 py-3 font-poppins text-sm text-brand-deep outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-coral"
      />
    </div>
  );
}
