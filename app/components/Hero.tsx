import Image from "next/image";
import Reveal from "./Reveal";

const FLOATING = [
  { src: "/Toolbox1.png", alt: "toolbox", className: "left-[-18%] top-[11%] w-[24%] -rotate-12", rot: "rotate(-12deg)", delay: "0s" },
  { src: "/Christmas1.png", alt: "ornament", className: "left-[5%] bottom-[7%] w-[24%] rotate-6", rot: "rotate(6deg)", delay: "1.2s" },
  { src: "/Watch1.png", alt: "watch", className: "right-[-1%] top-[21%] w-[24%] rotate-12", rot: "rotate(12deg)", delay: "0.6s" },
  { src: "/Accumulator1.png", alt: "battery", className: "right-[-13%] top-[73%] w-[24%] -rotate-6", rot: "rotate(-6deg)", delay: "1.8s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-dark pt-28 pb-0 text-center sm:pt-32 lg:pt-36"
    >
      {/* background image + overlays */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/Humanaitouchconnectiontechnologyinnovation1.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark" />
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-5xl flex-col items-center gap-5 px-5 sm:mt-14 sm:gap-6 lg:mt-[70px]">
        <Reveal as="h1" className="font-poppins font-bold leading-tight text-white text-[clamp(2rem,6vw,5.33rem)]">
          Never Lose Track Again
          <br />
          Just Ask UeyFind
        </Reveal>

        <Reveal as="p" delay={120} className="max-w-4xl font-poppins font-light text-white/85 text-[clamp(1rem,1.6vw,1.5rem)]">
          UeyFind is your AI-first voice assistant that helps you store and
          retrieve anything in seconds. Just speak, and let UeyFind remember for
          you—never lose track of your important items again
        </Reveal>

        <Reveal delay={240} className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <StoreBadge store="google" />
          <StoreBadge store="apple" />
        </Reveal>
      </div>

      {/* phone + glow */}
      <div className="relative z-10 mx-auto mt-10 flex w-[78%] max-w-3xl items-end justify-center sm:mt-12 lg:-mb-px">
        {/* glow */}
        <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vw] max-h-[420px] w-[60vw] max-w-[420px] rounded-full bg-brand-coral/20 blur-3xl" />

        {FLOATING.map((f) => (
          <div
            key={f.alt}
            className={`animate-float absolute z-20 ${f.className}`}
            style={{ ["--float-rot" as string]: f.rot, animationDelay: f.delay }}
          >
            <Image
              src={f.src}
              alt={f.alt}
              width={96}
              height={96}
              className="h-auto w-full drop-shadow-xl"
            />
          </div>
        ))}

        <Reveal variant="scale" delay={360} className="relative z-10 w-full">
          <Image
            src="/mockup.png"
            alt="UeyFind app on iPhone"
            width={340}
            height={690}
            priority
            className="h-auto w-full max-w-[800px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  const isApple = store === "apple";
  return (
    <button className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-[#231F20] px-5 py-2.5 text-left transition-transform hover:scale-105">
      <span className="text-white">
        {isApple ? (
          <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor">
            <path d="M18.1 13.8c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.3-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-.9 0-2.4-1.1-3.9-1-2 0-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.1 3 3.6 2.9 1.5-.1 2-.9 3.8-.9s2.3.9 3.8.9c1.6 0 2.6-1.4 3.5-2.9.7-1 1-2 1.4-3-2.5-1-2.9-4-2.9-4.9zM15 4.9c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.6.8-3.5 1.8-.7.9-1.4 2.3-1.2 3.6 1.3.1 2.7-.7 3.5-1.6z" />
          </svg>
        ) : (
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M1 1.2 12.6 12 1 22.8c-.3-.3-.5-.7-.5-1.2V2.4c0-.5.2-.9.5-1.2z" fill="#34A853" />
            <path d="M16.4 8.3 12.6 12 1 1.2c.5-.4 1.2-.4 1.9-.1l13.5 7.2z" fill="#EA4335" />
            <path d="M16.4 15.7 2.9 22.9c-.7.3-1.4.3-1.9-.1L12.6 12l3.8 3.7z" fill="#FBBC04" />
            <path d="m16.4 8.3 4 2.1c1 .6 1 1.6 0 2.2l-4 2.1L12.6 12l3.8-3.7z" fill="#4285F4" />
          </svg>
        )}
      </span>
      <span className="leading-tight text-white">
        <span className="block text-[10px] opacity-80">
          {isApple ? "Download on the" : "GET IT ON"}
        </span>
        <span className="block font-poppins text-base font-medium">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </span>
    </button>
  );
}
