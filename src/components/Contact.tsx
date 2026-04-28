"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail, Phone, MapPin, Send, GitBranch, Globe, AtSign,
  Sparkles, CheckCircle, Loader2
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Avishkasenanayake997@gmail.com",
    href: "mailto:Avishkasenanayake997@gmail.com",
    color: "from-violet-600 to-cyan-500",
    glow: "glow-violet",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 076 650 3081",
    href: "tel:+94766503081",
    color: "from-emerald-600 to-cyan-500",
    glow: "glow-cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mannar Road, Medawachchiya, Sri Lanka",
    href: "https://maps.google.com/?q=Medawachchiya,Sri+Lanka",
    color: "from-pink-600 to-violet-500",
    glow: "glow-pink",
  },
];

const socials = [
  { icon: GitBranch, href: "https://github.com/avishkasenanayake997-glitch", label: "GitHub", color: "hover:text-white hover:bg-gray-700/50" },
  { icon: Globe, href: "#", label: "LinkedIn", color: "hover:text-blue-300 hover:bg-blue-500/20" },
  { icon: AtSign, href: "#", label: "Twitter", color: "hover:text-sky-300 hover:bg-sky-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* BG accents */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Open to IT support roles, development projects, or just a friendly chat about tech.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Info */}
            <motion.div variants={itemVariants} className="space-y-5">
              {/* Contact cards */}
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 glass-card rounded-2xl p-5 border border-border hover:border-violet-500/40 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.glow} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-semibold text-sm mt-0.5 group-hover:text-violet-300 transition-colors break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social links */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mb-4">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 glass-card border border-border rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-200 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability banner */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="gradient-border p-px rounded-2xl"
              >
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-lg shadow-emerald-400/50" />
                  <div>
                    <p className="text-white font-bold text-sm">Available for Opportunities</p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Open to IT support roles, internships & freelance projects
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div variants={itemVariants}>
              <div className="gradient-border p-px rounded-2xl">
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 space-y-5"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Saman Perera"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="saman@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Avishka, I'd love to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status !== "idle"}
                    whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
                      status === "sent"
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-r from-violet-600 to-cyan-500 text-white glow-violet hover:opacity-90"
                    } disabled:opacity-70`}
                  >
                    {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
                    {status === "sending" && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                    {status === "sent" && <><CheckCircle className="w-4 h-4" /> Message Sent!</>}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
