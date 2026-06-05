import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatBubbles from "./components/ChatBubbles";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <ChatBubbles />
      <HowItWorks />
      <Reviews />
      <Footer />
    </main>
  );
}
