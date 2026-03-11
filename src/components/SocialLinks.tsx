import { motion } from "motion/react";
import { Twitter, Instagram, MessageSquare, Mail } from "lucide-react";

const socials = [
  {
    name: "X/Twitter",
    icon: Twitter,
    href: "https://x.com/HaseebDesigns",
    color: "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/hasee.bgfx/",
    color: "hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]",
  },
  {
    name: "Discord",
    icon: MessageSquare,
    href: "#", // User didn't provide link, just the name
    color: "hover:text-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]",
    label: "Haseeb Designs",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:haseebdesigns011@gmail.com",
    color: "hover:text-accent hover:shadow-[0_0_20px_rgba(77,166,255,0.5)]",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-20 bg-card/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center gap-4 transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}>
                <social.icon size={32} />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                  {social.name}
                </div>
                {social.label && (
                  <div className="text-xs text-white/30">{social.label}</div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
