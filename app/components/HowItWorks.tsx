import Image from "next/image";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1920px] px-5 sm:px-8 lg:px-[110px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3vw,2.75rem)] leading-tight">
            How UeyFind Works
          </Reveal>
          <Reveal as="p" delay={120} className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
            UeyFind makes remembering effortless. Just speak to save anything—items,
            locations, notes, or reminders—and ask again anytime to retrieve it in
            seconds. No searching, no scrolling—just smart, voice-powered recall.
          </Reveal>
        </div>

        {/* @container/grid: column layout keys off the grid's own width, not the
            viewport — immune to OS display-scale (125/150/175%) quirks. */}
        <div className="@container/grid mt-10 sm:mt-14">
          <div className="grid gap-6 @5xl/grid:grid-cols-8">
            {/* Card 1 - Speak to Save or Find (pink, phone left / text right) */}
            <Reveal variant="scale" className="@5xl/grid:col-span-5">
            <Card tone="coral" className="flex h-full flex-col items-center gap-4 text-center @5xl/grid:flex-row @5xl/grid:items-end @5xl/grid:gap-5 @5xl/grid:text-left">
              <Phone src="/frame1.png" alt="Speak to save or find screen" className="w-[min(280px,70vw)] sm:w-[min(360px,42vw)] @5xl/grid:w-[31cqw]" />
              <div className="flex-1 pb-6 @5xl/grid:pb-[3.5cqw] @5xl/grid:pl-[2.7cqw] @5xl/grid:pr-[2.9cqw]">
                <h3 className="font-poppins leading-tight text-brand-coral text-[max(1.5rem,3.4cqw)]">
                  Speak to
                  <br />
                  <span className="font-bold text-brand-deep">Save or Find</span>
                </h3>
                <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[max(0.9rem,1.4cqw)]">
                  Start by tapping the mic and telling UeyFind what you want to store
                  or what you&apos;re trying to find. The AI listens, understands your voice
                  naturally, and begins processing your request instantly—no typing
                  needed.
                </p>
              </div>
            </Card>
            </Reveal>

            {/* Card 2 - Capture to Remember (mint, phone top / caption below) */}
            <Reveal variant="scale" delay={120} className="@5xl/grid:col-span-3">
            <Card tone="mint" className="@container/card flex h-full flex-col items-center justify-between gap-6 pt-0 text-center">
              <Phone src="/frame2.png" alt="Upload picture screen" className="w-[min(500px,88cqw)]" />
              <div className="pb-8 sm:pb-12">
                <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.5rem,8cqw,2.67rem)]">
                  Capture to Remember
                </h3>
                <p className="mt-2 font-poppins text-brand-dark/70 text-[clamp(1rem,4.5cqw,1.5rem)]">
                  Take a photo to store or retrieve items.
                </p>
              </div>
            </Card>
            </Reveal>

            {/* Card 3 - Capture to Remember (mint, heading top / phone below w/ bubble) */}
            <Reveal variant="scale" delay={240} className="@5xl/grid:col-span-3">
            <Card tone="mint" className="@container/card flex h-full flex-col items-center gap-5 pt-8 text-center sm:pt-10">
              <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.5rem,8cqw,2.67rem)]">
                Capture to Remember
              </h3>
              <div className="flex w-full flex-1 items-end justify-center">
                <Phone src="/frame3.png" alt="Capture to remember screen" className="w-[min(500px,90cqw)]" />
              </div>
            </Card>
            </Reveal>

            {/* Card 4 - Quick Results (pink, phone left / text right) */}
            <Reveal variant="scale" delay={120} className="@5xl/grid:col-span-5">
            <Card tone="coral" className="flex h-full flex-col items-center gap-4 text-center @5xl/grid:flex-row @5xl/grid:items-end @5xl/grid:gap-5 @5xl/grid:text-left">
              <Phone src="/frame4.png" alt="Quick results screen" className="w-[min(280px,70vw)] sm:w-[min(360px,42vw)] @5xl/grid:w-[28cqw]" />
              <div className="flex-1 pb-6 @5xl/grid:pb-[3.5cqw] @5xl/grid:pl-[2.7cqw] @5xl/grid:pr-[2.9cqw]">
                <h3 className="font-poppins leading-tight text-brand-coral text-[max(1.5rem,3.4cqw)]">
                  Quick
                  <br />
                  <span className="font-bold">Results</span>
                </h3>
                <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[max(0.9rem,1.5cqw)]">
                  Once the information is processed, UeyFind shows a clear, organized
                  result list. You&apos;ll quickly find the exact item or note you saved—no
                  digging, no confusion, just instant clarity.
                </p>
              </div>
            </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`shrink-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={1289}
        className="h-auto w-full"
      />
    </div>
  );
}

function Card({
  tone,
  className = "",
  children,
}: {
  tone: "coral" | "mint";
  className?: string;
  children: React.ReactNode;
}) {
  const bg = tone === "coral" ? "bg-[#FCEAE6]" : "bg-[#E4F7F1]";
  return (
    <div className={`overflow-hidden rounded-[28px] px-6 sm:px-8 ${bg} ${className}`}>
      {children}
    </div>
  );
}
