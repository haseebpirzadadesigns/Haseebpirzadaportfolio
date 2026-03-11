import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Loader2 } from "lucide-react";

const niches = ["Tech", "Gaming", "Education", "Lifestyle", "Entertainment", "Other"];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    referenceLink: "",
    niche: "Gaming",
    otherNiche: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setFormData({
          name: "",
          email: "",
          description: "",
          referenceLink: "",
          niche: "Gaming",
          otherNiche: "",
        });
      } else {
        throw new Error(data.error || "Failed to send order.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="order" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 font-display"
          >
            Place Your <span className="text-accent glow-text">Order</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Ready to grow your channel? Let's get started.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold glow-border"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            Premium Thumbnails Start at $10
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-card border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Niche</label>
                <select
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer"
                >
                  {niches.map((n) => (
                    <option key={n} value={n} className="bg-card">
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Reference Link (Optional)</label>
                <input
                  type="url"
                  value={formData.referenceLink}
                  onChange={(e) => setFormData({ ...formData, referenceLink: e.target.value })}
                  placeholder="Competitor or Reference Video Link"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            {formData.niche === "Other" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-2"
              >
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Specify Niche</label>
                <input
                  required
                  type="text"
                  value={formData.otherNiche}
                  onChange={(e) => setFormData({ ...formData, otherNiche: e.target.value })}
                  placeholder="What is your niche?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Video Content Description</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell me about your video and what kind of thumbnail you need..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
              />
            </div>

            <button
              disabled={status === "loading"}
              type="submit"
              className="w-full py-5 rounded-2xl bg-accent text-white font-black text-lg flex items-center justify-center gap-3 neon-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending Order...
                </>
              ) : (
                <>
                  <Send size={24} />
                  Submit Order
                </>
              )}
            </button>

            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center font-bold">
                {message}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center font-bold">
                {message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
