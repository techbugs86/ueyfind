import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1920px] px-5 sm:px-8 lg:px-[110px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3vw,2.75rem)] leading-tight">
            How UeyFind Works
          </h2>
          <p className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
            UeyFind makes remembering effortless. Just speak to save anything—items,
            locations, notes, or reminders—and ask again anytime to retrieve it in
            seconds. No searching, no scrolling—just smart, voice-powered recall.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-8">
          {/* Card 1 - Speak to Save or Find (pink, phone left / text right) */}
          <Card tone="coral" className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:gap-5 lg:text-left lg:col-span-5">
            <Phone src="/frame1.png" alt="Speak to save or find screen" className="max-w-[280px] sm:max-w-[360px] lg:max-w-[600px]" />
            <div className="flex-1 pb-6 lg:pb-20 lg:pl-[47px] lg:pr-[50px]">
              <h3 className="font-poppins leading-tight text-brand-coral text-[clamp(1.75rem,3.4vw,3.33rem)]">
                Speak to
                <br />
                <span className="font-bold text-brand-deep">Save or Find</span>
              </h3>
              <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(1rem,1.5vw,1.5rem)]">
                Start by tapping the mic and telling UeyFind what you want to store
                or what you&apos;re trying to find. The AI listens, understands your voice
                naturally, and begins processing your request instantly—no typing
                needed.
              </p>
            </div>
          </Card>

          {/* Card 2 - Capture to Remember (mint, phone top / caption below) */}
          <Card tone="mint" className="flex flex-col items-center justify-between gap-6 pt-0 text-center lg:col-span-3">
            <Phone src="/frame2.png" alt="Upload picture screen" className="max-w-[320px] sm:max-w-none" />
            <div className="pb-8 sm:pb-12">
              <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.5rem,2.6vw,2.67rem)]">
                Capture to Remember
              </h3>
              <p className="mt-2 font-poppins text-brand-dark/70 text-[clamp(1rem,1.5vw,1.5rem)]">
                Take a photo to store or retrieve items.
              </p>
            </div>
          </Card>

          {/* Card 3 - Capture to Remember (mint, heading top / phone below w/ bubble) */}
          <Card tone="mint" className="flex flex-col items-center gap-5 pt-8 text-center sm:pt-10 lg:col-span-3">
            <h3 className="font-poppins font-bold text-brand-deep text-[clamp(1.5rem,2.6vw,2.67rem)]">
              Capture to Remember
            </h3>
            <div className="flex w-full flex-1 items-end justify-center">
              <Phone src="/frame3.png" alt="Capture to remember screen" className="max-w-[320px] sm:max-w-[550px]" />
            </div>
          </Card>

          {/* Card 4 - Quick Results (pink, phone left / text right) */}
          <Card tone="coral" className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:gap-5 lg:text-left lg:col-span-5">
            <Phone src="/frame4.png" alt="Quick results screen" className="max-w-[280px] sm:max-w-[360px] lg:max-w-[550px]" />
            <div className="flex-1 pb-6 lg:pb-20 lg:pl-[47px] lg:pr-[50px]">
              <h3 className="font-poppins leading-tight text-brand-coral text-[clamp(1.75rem,3.4vw,3.33rem)]">
                Quick
                <br />
                <span className="font-bold">Results</span>
              </h3>
              <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70 text-[clamp(1rem,1.5vw,1.5rem)]">
                Once the information is processed, UeyFind shows a clear, organized
                result list. You&apos;ll quickly find the exact item or note you saved—no
                digging, no confusion, just instant clarity.
              </p>
            </div>
          </Card>
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
