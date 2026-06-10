import Image from "next/image";
import Reveal from "./Reveal";

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
    text: "Hey UeyFind, Store the charger in the bedroom drawer.",
    left: "-14%",
    top: "-2%",
  },
  {
    img: "/Ellipse226.png",
    name: "Desirae Lubin",
    text: "Hey UeyFind, I kept the gate batteries in the living room shelf drawer.",
    left: "19%",
    top: "97%",
  },
  {
    img: "/Ellipse223.png",
    name: "Talon Bhiel Madsen",
    text: "Hey UeyFind, Put the extra ketchup in the kitchen cabinet.",
    left: "73%",
    top: "73%",
  },
  {
    img: "/Ellipse223.png",
    name: "Talon Bhiel Madsen",
    text: "Hey UeyFind, Put the extra ketchup in the kitchen cabinet.",
    left: "-28%",
    top: "85%",
  },
  {
    img: "/Ellipse223.png",
    name: "Talon Bhiel Madsen",
    text: "Hey UeyFind, Put the extra ketchup in the kitchen cabinet.",
    left: "78%",
    top: "7%",
  },
];

/* lone profile photos scattered behind the bubbles */
const AVATARS: { img: string; left: string; top: string; size: string }[] = [
  { img: "/Ellipse225.png", left: "106%", top: "9%", size: "w-[17%]" },
  { img: "/Ellipse224.png", left: "2%", top: "-11%", size: "w-[17%]" },
  { img: "/Ellipse226.png", left: "-17.5%", top: "74.4%", size: "w-[17%]" },
  { img: "/Ellipse223.png", left: "45.7%", top: "102.8%", size: "w-[17%]" },
  { img: "/Ellipse227.png", left: "102.8%", top: "83%", size: "w-[17%]" },
];

/* mobile/tablet scatter — own coordinate set, % of a tall canvas (Mobile 375.svg) */
type MobBubble = Bubble & { side: "left" | "right" };
const M_BUBBLES: MobBubble[] = [
  {
    img: "/Ellipse225.png",
    name: "John Alex",
    text: "Hey UeyFind, Store this charger in the bedroom drawer.",
    left: "6%",
    top: "9%",
    side: "left",
  },
  {
    img: "/Ellipse223.png",
    name: "Talon Bhiel Madsen",
    text: "Hey UeyFind, Put the extra ketchup in the kitchen cabinet.",
    left: "38%",
    top: "74%",
    side: "right",
  },
  {
    img: "/Ellipse226.png",
    name: "Desirae Lubin",
    text: "Hey UeyFind, I kept the gate batteries in the living room shelf drawer.",
    left: "6%",
    top: "92%",
    side: "left",
  },
  // {
  //   img: "/Ellipse224.png",
  //   name: "Desirae Lubin",
  //   text: "Hey UeyFind, I kept the gate batteries in the living room shelf drawer.",
  //   left: "6%",
  //   top: "92%",
  //   side: "left",
  // },
  {
    img: "/Ellipse227.png",
    name: "Desirae Lubin",
    text: "Hey UeyFind, I kept the gate batteries in the living room shelf drawer.",
    left: "40%",
    top: "29%",
    side: "left",
  },
];

const M_AVATARS: { img: string; left: string; top: string }[] = [
  // { img: "/Ellipse227.png", left: "82%", top: "4%" },
  // { img: "/Ellipse224.png", left: "13%", top: "35%" },
];

export default function ChatBubbles() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-[clamp(120px,14vw,325px)]">
      {/* blurred glow blobs (Group 3.svg) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[32%] top-[34%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F16D68] opacity-40 blur-[140px]" />
        <div className="absolute left-[68%] top-[49%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FECD9] opacity-50 blur-[140px]" />
      </div>

      {/* Mobile / tablet: scattered layout matching Mobile 375.svg */}
      <div className="relative mx-auto max-w-md px-4 lg:hidden">
        {/* concentric circles behind everything */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full border border-brand-dark/[0.06]" />
          <div className="absolute inset-[14%] rounded-full border border-brand-dark/[0.05]" />
          <div className="absolute inset-[28%] rounded-full border border-brand-dark/[0.04]" />
        </div>

        {/* tall canvas holding the scatter */}
        <div className="relative mx-auto aspect-[375/700] w-full">
          {/* center heading */}
          <div className="absolute inset-x-[4%] top-1/2 z-30 -translate-y-1/2 text-center">
            <Reveal as="h2" variant="fade" className="font-poppins font-bold leading-snug text-brand-deep text-[clamp(1.5rem,6.5vw,2.25rem)]">
              <span className="text-brand-coral">Your life,</span> organized
              effortlessly because AI tracks everything you tell it.
            </Reveal>
          </div>

          {/* lone avatars */}
          {M_AVATARS.map((a, i) => (
            <div
              key={`mav-${i}`}
              style={{ left: a.left, top: a.top }}
              className="absolute z-10 aspect-square w-[15%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-white shadow-lg"
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

          {/* avatar + card bubbles */}
          {M_BUBBLES.map((b, i) => (
            <Reveal
              key={`mb-${b.name}`}
              variant="fade"
              delay={i * 120}
              style={{ left: b.left, top: b.top }}
              className={`absolute z-20 flex w-[62%] -translate-y-1/2 items-start gap-2 ${
                b.side === "right" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="aspect-square w-[28%] shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
                <Image
                  src={b.img}
                  alt={b.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[16px] border border-brand-mint/50 bg-[#EAF8F4]/90 px-3 py-2 text-left shadow-sm backdrop-blur-sm">
                <p className="font-poppins text-xs font-semibold text-brand-deep">
                  {b.name}
                </p>
                <p className="mt-0.5 font-poppins text-[10px] leading-snug text-brand-deep/80">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden w-full max-w-6xl px-6 lg:block">
        <div className="relative mx-auto aspect-[1920/1430] w-full max-w-[min(1040px,64vw)]">
          {/* faint concentric circles behind everything (sized off the canvas) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-[-42%] rounded-full border border-brand-dark/[0.06]" />
            <div className="absolute inset-[-19%] rounded-full border border-brand-dark/[0.05]" />
            <div className="absolute inset-[4%] rounded-full border border-brand-dark/[0.04]" />
          </div>

          {/* center heading */}
          <div className="absolute inset-[-36%] mx-[18%] flex items-center justify-center px-4 text-center">
            <Reveal as="h2" variant="fade" className="font-poppins font-bold leading-snug text-brand-deep text-[clamp(2.25rem,3.4vw,5.33rem)]">
              <span className="text-brand-coral">Your life,</span> organized
              effortlessly because AI tracks everything you tell it.
            </Reveal>
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
          {BUBBLES.map((b, i) => (
            <Reveal
              key={b.name}
              variant="fade"
              delay={i * 140}
              style={{ left: b.left, top: b.top }}
              className="absolute z-20 flex aspect-[364/111] w-[24%] items-center"
            >
              <Image
                src="/bubble.svg"
                alt=""
                fill
                aria-hidden
                className="absolute inset-0 -z-10 h-full w-full"
              />
              <div className="px-[9%] py-2.5 text-left">
                <p className="font-poppins font-semibold text-brand-deep text-[clamp(0.7rem,1vw,1rem)]">
                  {b.name}
                </p>
                <p className="mt-0.5 font-poppins leading-snug text-brand-deep/80 text-[clamp(0.55rem,0.85vw,0.85rem)]">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
