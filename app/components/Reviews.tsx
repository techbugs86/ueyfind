import Image from "next/image";
import Reveal from "./Reveal";

type Review = {
  img: string;
  name: string;
  text: string;
  bg: string;
  star: string;
  /* desktop scatter placement, % of the 1920 x 2350 design canvas */
  left: string;
  top: string;
  rotate: string;
  /* per-card overrides */
  width?: string;
  row?: boolean;
};

/* every card shares the first review's width; text wraps inside it */
const CARD_WIDTH = "23.2%";

/* mobile scatter: per-card tilt (deg) + horizontal nudge, cycled by index */
const M_TILT = [-7, 9, -8, 7, -6, 8];
const M_SHIFT = ["0%", "8%", "-4%", "6%", "2%", "-6%"];

const REVIEWS: Review[] = [
  {
    img: "/Rectangle13(5).png",
    name: "Kaylynn Korsgaard",
    text: "The app makes storing and finding my things so effortless.",
    bg: "#F2FCF5",
    star: "#8FECD9",
    left: "5.6%",
    top: "9.3%",
    rotate: "-9.15deg",
    width: "45.2%",
    row: true,
  },
  {
    img: "/Rectangle13(6).png",
    name: "Tatiana Westervelt",
    text: "I’m finally not losing my stuff anymore. Game changer.",
    bg: "#FEF7EE",
    star: "#EEB671",
    left: "52.9%",
    top: "6.6%",
    rotate: "12.79deg",
    width: "40.4%",
    row: true,
  },
  {
    img: "/Rectangle13(8).png",
    name: "Zaire Lipshutz",
    text: "Retrieving items is so quick. I ask once, and it shows me exactly where it is.",
    bg: "#FCF2F2",
    star: "#F16D68",
    left: "36.2%",
    top: "19.2%",
    rotate: "-10.53deg",
    width: "49.7%",
    row: true,
  },
  {
    img: "/Rectangle13(7).png",
    name: "Zaire Lipshutz",
    text: "The interface is clean and simple, and it doesn’t feel overwhelming at all.",
    bg: "#EEF2FE",
    star: "#7CAFF4",
    left: "5.4%",
    top: "27.8%",
    rotate: "15.64deg",
    width: "41.3%",
    row: true,
  },
  {
    img: "/Rectangle13.png",
    name: "Kaylynn Korsgaard",
    text: "I love how the app remembers everything for me. It’s like having a personal organizer.",
    bg: "#F8FAFC",
    star: "#9CB1CE",
    left: "50%",
    top: "31.2%",
    rotate: "-9.98deg",
    width: "44.9%",
    row: true,
  },
  {
    img: "/Rectangle13(1).png",
    name: "Leo Bergson",
    text: "It genuinely reduces stress; I don’t have to think about where I kept things.",
    bg: "#F5F3FE",
    star: "#A396F5",
    left: "5.5%",
    top: "45.5%",
    rotate: "-10.26deg",
    width: "42.9%",
    row: true,
  },
  {
    img: "/Rectangle13(2).png",
    name: "Haylie Dorwart",
    text: "The voice feature is amazing. I store things while I’m in a hurry, and the app always retrieves exactly what I need within seconds.",
    bg: "#FCF4FE",
    star: "#D793F3",
    left: "46.8%",
    top: "46.8%",
    rotate: "5.57deg",
    width: "47.4%",
    row: true,
  },
  {
    img: "/Rectangle13(3).png",
    name: "Cheyenne Calzoni",
    text: "UeyFind has literally saved me hours. I just tell it where I kept something, and it reminds me instantly when I ask again. Super helpful!",
    bg: "#F0F6FE",
    star: "#9CB0FF",
    left: "5.4%",
    top: "60.8%",
    rotate: "-12.86deg",
    width: "44.7%",
    row: true,
  },
  {
    img: "/Rectangle13(4).png",
    name: "Abram Franci",
    text: "I never remember where I put small things like chargers or documents. Now I just speak and UeyFind tracks everything for me. Love the simplicity!",
    bg: "rgba(255,238,233,0.75)",
    star: "#C17E6A",
    left: "47.7%",
    top: "62%",
    rotate: "8.14deg",
    width: "45.8%",
    row: true,
  },
];

export default function Reviews() {
  return (
    <section id="faqs" className="relative overflow-hidden bg-white" style={{ marginTop: "240px" }}>
      {/* faint concentric circle lines in the back */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[140vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 lg:w-[1000px]">
        <div className="absolute inset-0 rounded-full border border-brand-coral/[0.07]" />
        <div className="absolute inset-[12%] rounded-full border border-brand-deep/[0.06]" />
        <div className="absolute inset-[24%] rounded-full border border-brand-coral/[0.05]" />
        <div className="absolute inset-[36%] rounded-full border border-brand-deep/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-5 py-16 sm:px-6 sm:py-20 lg:py-0">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="font-poppins font-bold text-brand-deep text-[clamp(1.875rem,3.4vw,3.5rem)] leading-tight">
            Reviews From Our Users
          </Reveal>
          <Reveal as="p" delay={120} className="mt-4 font-poppins text-sm leading-relaxed text-brand-dark/60 sm:text-base">
            See what our community has to say about UeyFind. Real feedback from
            real users sharing their experiences. Discover why people love staying
            connected with us.
          </Reveal>
        </div>

        {/* Mobile / tablet: scattered tilted stack matching the design */}
        <div className="relative z-10 mx-auto mt-10 flex max-w-md flex-col lg:hidden">
          {REVIEWS.map((r, i) => {
            const rot = M_TILT[i % M_TILT.length];
            const shift = M_SHIFT[i % M_SHIFT.length];
            return (
              <Reveal
                key={i}
                variant="fade"
                delay={i * 80}
                className="w-[100%] mt-3 first:mt-0"
              >
                <div
                  style={{
                    transform: `rotate(${rot}deg) translateX(${shift})`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                  }}
                >
                  <ReviewCard review={r} />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Desktop: scattered absolute layout matching the design canvas */}
        <div className="relative mt-4 hidden lg:block" style={{ marginLeft: "50px", marginRight: "50px" }}>
          <div className="relative w-full pb-[108%]">
            {REVIEWS.map((r, i) => (
              <Reveal
                key={i}
                variant="fade"
                delay={i * 90}
                className="absolute"
                style={{ left: r.left, top: r.top, width: r.width ?? CARD_WIDTH }}
              >
                <div style={{ transform: `rotate(${r.rotate})` }}>
                  <ReviewCard review={r} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  if (review.row) {
    /* Frame 55: horizontal layout, centered, custom shadow/radius/padding */
    return (
      <div
        className="flex items-center justify-center gap-[5%] rounded-[34px] px-[6%] py-[4%] shadow-[42px_30px_85px_rgba(11,43,21,0.08)]"
        style={{ backgroundColor: review.bg }}
      >
        <Image
          src={review.img}
          alt={review.name}
          width={56}
          height={56}
          className="h-12 w-12 shrink-0 rounded-full object-cover lg:h-14 lg:w-14"
        />
        <div className="min-w-0">
          <p className="font-poppins text-base font-semibold text-brand-deep lg:text-lg">
            {review.name}
          </p>
          <div className="mt-0.5 flex gap-0.5" style={{ color: review.star }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="mt-2 font-poppins leading-relaxed text-[#6A6A6A] text-[clamp(0.875rem,1.4vw,1.6875rem)]">
            {review.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-[34px] p-7 shadow-[0_20px_50px_rgba(7,48,53,0.08)]"
      style={{ backgroundColor: review.bg }}
    >
      <div className="flex items-center gap-3">
        <Image
          src={review.img}
          alt={review.name}
          width={56}
          height={56}
          className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
        />
        <div>
          <p className="font-poppins text-base font-semibold text-brand-deep lg:text-lg">
            {review.name}
          </p>
          <div className="mt-0.5 flex gap-0.5" style={{ color: review.star }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 font-poppins leading-relaxed text-[#6A6A6A] text-[clamp(0.875rem,1.4vw,1.6875rem)]">
        {review.text}
      </p>
    </div>
  );
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.401 8.169L12 18.896l-7.335 3.868 1.401-8.169L.132 9.21l8.2-1.192z" />
    </svg>
  );
}
