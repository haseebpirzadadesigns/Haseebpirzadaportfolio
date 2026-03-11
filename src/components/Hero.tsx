import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 glow-border">
            Top Rated Designer
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] font-display">
            Professional <br />
            <span className="text-accent glow-text">Thumbnail</span> Designer
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            High CTR YouTube Thumbnails That Get More Clicks. I help creators grow their audience with visually stunning, high-conversion designs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-bold flex items-center justify-center gap-2 neon-button group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#order"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <Play size={20} fill="currentColor" />
              Hire Me Now
            </a>
          </div>
        </motion.div>

        {/* Stats / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50"
        >
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-xs uppercase tracking-widest">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2+</div>
            <div className="text-xs uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-xs uppercase tracking-widest">CTR Increase</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
