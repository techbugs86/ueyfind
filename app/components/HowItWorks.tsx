import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto px-6" style={{ marginLeft: "110px", marginRight: "110px" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-poppins text-3xl font-bold text-brand-deep sm:text-4xl lg:text-[44px] lg:leading-tight">
            How Wherezat Works
          </h2>
          <p className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
            Wherezat makes remembering effortless. Just speak to save anything—items,
            locations, notes, or reminders—and ask again anytime to retrieve it in
            seconds. No searching, no scrolling—just smart, voice-powered recall.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(630,auto)] gap-6 lg:grid-cols-8">
          {/* Card 1 - Speak to Save or Find (pink, phone left / text right) */}
          <Card tone="coral" className="flex items-end gap-2 sm:gap-5 lg:col-span-5">
            <Phone src="/frame1.png" alt="Speak to save or find screen" className=" max-w-[600px]" />
            <div className="flex-1" style={{ paddingBottom: "80px", paddingLeft: "47px", paddingRight: "50px" }}>
              <h3 className="font-poppins leading-tight text-brand-coral" style={{ fontSize: "53.33px" }}>
                Speak to
                <br />
                <span className="font-bold text-brand-deep">Save or Find</span>
              </h3>
              <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70" style={{ fontSize: "24px" }}>
                Start by tapping the mic and telling Wherezat what you want to store
                or what you&apos;re trying to find. The AI listens, understands your voice
                naturally, and begins processing your request instantly—no typing
                needed.
              </p>
            </div>
          </Card>

          {/* Card 2 - Capture to Remember (mint, phone top / caption below) */}
          <Card tone="mint" className="flex flex-col items-center justify-between gap-6 pt-0 text-center lg:col-span-3">
            <Phone src="/frame2.png" alt="Upload picture screen" className="" />
            <div className="pb-12">
              <h3 className="font-poppins font-bold text-brand-deep" style={{ fontSize: "42.67px" }}>
                Capture to Remember
              </h3>
              <p className="mt-2 font-poppins text-brand-dark/70" style={{ fontSize: "24px" }}>
                Take a photo to store or retrieve items.
              </p>
            </div>
          </Card>

          {/* Card 3 - Capture to Remember (mint, heading top / phone below w/ bubble) */}
          <Card tone="mint" className="flex flex-col items-center gap-5 pt-10 text-center lg:col-span-3">
            <h3 className="font-poppins font-bold text-brand-deep" style={{ fontSize: "42.67px" }}>
              Capture to Remember
            </h3>
            <div className="flex w-full flex-1 justify-center align-items-end" style={{ alignItems: "end"}}>
              <Phone src="/frame3.png" alt="Capture to remember screen" className="max-w-[550px]" />
            </div>
          </Card>

          {/* Card 4 - Quick Results (pink, phone left / text right) */}
          <Card tone="coral" className="flex items-end gap-2 sm:gap-5 lg:col-span-5">
            <Phone src="/frame4.png" alt="Quick results screen" className="max-w-[550px]  " />
            <div className="flex-1" style={{ paddingBottom: "80px", paddingLeft: "47px", paddingRight: "50px" }}>
              <h3 className="font-poppins leading-tight text-brand-coral " style={{ fontSize: "53.33px" }}>
                Quick
                <br />
                <span className="font-bold">Results</span>
              </h3>
              <p className="mt-3 font-poppins leading-relaxed text-brand-dark/70" style={{ fontSize: "24px" }}>
                Once the information is processed, Wherezat shows a clear, organized
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
