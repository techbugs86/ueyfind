import Image from "next/image";

type Bubble = {
  img: string;
  name: string;
  text: string;
  /* placement on the design canvas, % of width / height */
  left: string;
  top: string;
};

const BUBBLES: Bubble[] = [
  {
    img: "/Ellipse225.png",
    name: "John Alex",
    text: "Hey Wherezat, Store the charger in the bedroom drawer.",
    left: "-14%",
    top: "-2%",
  },
  {
    img: "/Ellipse226.png",
    name: "Desirae Lubin",
    text: "Hey Wherezat, I kept the gate batteries in the living room shelf drawer.",
    left: "9%",
    top: "87%",
  },
  {
    img: "/Ellipse223.png",
    name: "Talon Bhiel Madsen",
    text: "Hey Wherezat, Put the extra ketchup in the kitchen cabinet.",
    left: "73%",
    top: "73%",
  },
];

/* lone profile photos scattered behind the bubbles */
const AVATARS: { img: string; left: string; top: string; size: string }[] = [
  { img: "/Ellipse225.png", left: "106%", top: "9%", size: "w-[17%]" },
  { img: "/Ellipse224.png", left: "2%", top: "-11%", size: "w-[17%]" },
  { img: "/Ellipse226.png", left: "-17.5%", top: "74.4%", size: "w-[17%]" },
  { img: "/Ellipse223.png", left: "35.7%", top: "92.8%", size: "w-[17%]" },
  { img: "/Ellipse227.png", left: "102.8%", top: "83%", size: "w-[17%]" },
];

export default function ChatBubbles() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 lg:py-24" style={{ paddingTop: "325px", paddingBottom: "325px" }}>
      {/* blurred glow blobs (Group 3.svg) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[32%] top-[34%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F16D68] opacity-40 blur-[140px]" />
        <div className="absolute left-[68%] top-[49%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FECD9] opacity-50 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* faint concentric circles behind everything */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[-42%] rounded-full border border-brand-dark/[0.06]" />
          <div className="absolute inset-[-19%] rounded-full border border-brand-dark/[0.05]" />
          <div className="absolute inset-[4%] rounded-full border border-brand-dark/[0.04]" />
        </div>

        <div className="relative mx-auto aspect-[1920/1430] w-full">
          {/* center heading */}
          <div className="absolute inset-[-36%] flex items-center justify-center px-4 text-center" style={{ marginRight: "250px", marginLeft: "250px" }}>
            <h2 className="font-poppins font-bold leading-snug text-brand-deep" style={{ fontSize: "85.33px" }}>
              <span className="text-brand-coral">Your life,</span> organized
              effortlessly because AI tracks everything you tell it.
            </h2>
          </div>

          {/* lone avatars (always a perfect circle) */}
          {AVATARS.map((a, i) => (
            <div
              key={`av-${i}`}
              style={{ left: a.left, top: a.top }}
              className={`absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-white shadow-lg ${a.size}`}
            >
              <Image
                src={a.img}
                alt=""
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          {/* chat bubbles (363.32 x 110.89 in the design = ~18.9% of width)
              uses the exact Vector.svg shape (mint glass + cyan gradient border) */}
          {BUBBLES.map((b) => (
            <div
              key={b.name}
              style={{ left: b.left, top: b.top }}
              className="absolute z-20 flex aspect-[364/111] w-[24%] min-w-[260px] items-center"
            >
              <Image
                src="/bubble.svg"
                alt=""
                fill
                aria-hidden
                className="absolute inset-0 -z-10 h-full w-full"
              />
              <div className="px-[9%] text-left py-2.5">
                <p className="font-poppins text-base font-semibold text-brand-deep">
                  {b.name}
                </p>
                <p className="mt-0.5 font-poppins text-xs leading-snug text-brand-deep/80">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
