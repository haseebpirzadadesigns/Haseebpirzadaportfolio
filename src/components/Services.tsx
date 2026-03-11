import { motion } from "motion/react";
import { Youtube, Gamepad2, Palette, Zap } from "lucide-react";

const services = [
  {
    title: "YouTube Thumbnails",
    description: "High CTR, Professional, Fast. Optimized for clicks and audience retention.",
    icon: Youtube,
    color: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    title: "Gaming Thumbnails",
    description: "Bright, Clean, Attractive. Perfect for streamers and competitive gamers.",
    icon: Gamepad2,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    title: "Logo Design",
    description: "Modern, Clean, Iconic. Build a brand that stands out from the crowd.",
    icon: Palette,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    title: "YouTube Branding",
    description: "Complete channel revamps including banners, end screens, and more.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 font-display"
          >
            My <span className="text-accent glow-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Elevate Your Content With Premium Visuals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-white/5 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
