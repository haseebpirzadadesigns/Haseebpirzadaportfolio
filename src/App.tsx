import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left glow-box"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <SocialLinks />
        <OrderForm />
      </main>

      <Footer />

      {/* Background Noise / Texture (Optional for premium feel) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

