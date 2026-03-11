import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const categories = ["All", "MrBeast Style", "Gaming", "Reaction", "Before After", "News", "Fitness"];

const projects = [
  { id: 1, title: "Baseball Analysis", category: "Gaming", image: "https://i.postimg.cc/XNrHtY6H/baseball.png" },
  { id: 2, title: "Breaking News", category: "News", image: "https://i.postimg.cc/bYZC4wfF/breaking-new.png" },
  { id: 3, title: "Cricket Highlights", category: "Gaming", image: "https://i.postimg.cc/c1v9PLGj/cricket.png" },
  { id: 4, title: "Fitness Transformation", category: "Fitness", image: "https://i.postimg.cc/3rzShQ3f/fitness.png" },
  { id: 5, title: "Gaming Lie Exposed", category: "Gaming", image: "https://i.postimg.cc/59D7JWfR/gaming-lie.png" },
  { id: 6, title: "Pro Gaming", category: "Gaming", image: "https://i.postimg.cc/SNyXJJQC/gaming.png" },
  { id: 7, title: "Social Media Growth", category: "MrBeast Style", image: "https://i.postimg.cc/ZKVW340w/grow-social-media.png" },
  { id: 8, title: "Profit Strategy", category: "MrBeast Style", image: "https://i.postimg.cc/2821vr32/profit-1000000.png" },
  { id: 9, title: "The Real Truth", category: "Reaction", image: "https://i.postimg.cc/gkNxRmrt/real-truth.png" },
  { id: 10, title: "SEO Masterclass", category: "MrBeast Style", image: "https://i.postimg.cc/tgHG4Vp7/seo.png" },
  { id: 11, title: "Stock Market Analysis", category: "Reaction", image: "https://i.postimg.cc/nLYbjch9/stock-market-analysis.png" },
  { id: 12, title: "Thumbnail Design", category: "MrBeast Style", image: "https://i.postimg.cc/ncfDhFV0/thum-nail.jpg" },
  { id: 13, title: "High CTR Design", category: "MrBeast Style", image: "https://i.postimg.cc/RFjnf97L/thumbnaik.jpg" },
  { id: 14, title: "Viral Thumbnail", category: "MrBeast Style", image: "https://i.postimg.cc/pVFjvhvJ/thumbnail.jpg" },
  { id: 15, title: "Gaming Mastery", category: "Gaming", image: "https://i.postimg.cc/tRx6bZbs/thumbnail-10.jpg" },
  { id: 16, title: "Reaction Face", category: "Reaction", image: "https://i.postimg.cc/yYCZ816L/thumbnail-12.jpg" },
  { id: 17, title: "Epic Win", category: "Gaming", image: "https://i.postimg.cc/GtGTxNKN/thumbnail-18.jpg" },
  { id: 18, title: "MrBeast Style V4", category: "MrBeast Style", image: "https://i.postimg.cc/8Pg6zpkR/thumbnail-4.jpg" },
  { id: 19, title: "Thumbnail V13", category: "MrBeast Style", image: "https://i.postimg.cc/wMLRQP2S/thumbnaol-13.jpg" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 font-display"
          >
            My <span className="text-accent glow-text">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Recent Thumbnail Designs That Dominate YouTube
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeCategory === cat 
                  ? "bg-accent border-accent text-white glow-box" 
                  : "bg-white/5 border-white/10 text-white/60 hover:border-accent/50 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-card border border-white/5 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <Maximize2 className="text-accent mb-2" size={32} />
                  <span className="text-white font-bold text-lg">{project.title}</span>
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
