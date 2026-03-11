import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const skills = ["Photoshop", "Thumbnail Design", "Logo Design", "YouTube Branding", "Visual Storytelling", "CTR Optimization"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src="https://i.postimg.cc/gJk5xV5b/my-png.png"
                alt="Haseeb"
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay that disappears on hover as requested */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
            </div>
            
            {/* Floating Stats Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 z-20 bg-accent p-6 rounded-2xl shadow-2xl glow-box"
            >
              <div className="text-4xl font-black text-white">500+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/80">Happy Clients</div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 font-display">
              About <span className="text-accent glow-text">Me</span>
            </h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              My name is <span className="text-accent font-bold">Haseeb</span>. I am a professional YouTube thumbnail designer with 2+ years of experience.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              I specialize in creating high-impact, high-CTR thumbnails that help YouTubers grow faster. My designs are crafted to grab attention in a split second, using psychology and visual hierarchy to drive more clicks to your videos.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
