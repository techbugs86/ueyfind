import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 text-center sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* background image + overlays */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/Humanaitouchconnectiontechnologyinnovation1.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/85 to-brand-dark" />
      </div>

      {/* soft glow */}
      <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[60vw] max-h-[460px] w-[60vw] max-w-[460px] rounded-full bg-brand-coral/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 sm:gap-5">
        <Reveal
          as="h1"
          className="font-poppins font-bold leading-tight text-white text-[clamp(2rem,5vw,4.5rem)]"
        >
          {title}
        </Reveal>

        <Reveal
          as="p"
          delay={200}
          className="max-w-2xl font-poppins font-light text-white/80 text-[clamp(1rem,1.5vw,1.375rem)]"
        >
          {subtitle}
        </Reveal>
      </div>
    </section>
  );
}
