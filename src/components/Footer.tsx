import { motion } from "motion/react";
import { Twitter, Instagram, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-black tracking-tighter glow-text mb-4 inline-block">
              Haseeb <span className="text-accent">Designs</span>
            </a>
            <p className="text-white/40 max-w-sm mt-4">
              Professional YouTube Thumbnail Designer helping creators grow their audience with high-impact visuals.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://x.com/HaseebDesigns"
                className="text-white/40 hover:text-accent transition-all duration-300 drop-shadow-[0_0_10px_rgba(77,166,255,0.3)]"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/hasee.bgfx/"
                className="text-white/40 hover:text-pink-500 transition-all duration-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-white/40 hover:text-indigo-500 transition-all duration-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]"
              >
                <MessageSquare size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:haseebdesigns011@gmail.com"
                className="text-white/40 hover:text-accent transition-all duration-300 drop-shadow-[0_0_10px_rgba(77,166,255,0.3)]"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <p className="text-white/30 text-sm font-medium">
              © 2026 Haseeb Designs | Professional Thumbnail Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
