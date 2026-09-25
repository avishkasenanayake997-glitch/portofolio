"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code2, Sparkles, Wrench, Globe, Layers } from "lucide-react";

const fullstackSkills = [
  { name: "React.js & Next.js (App Router, TSX)", level: 90, color: "#38bdf8" },
  { name: "JavaScript & TypeScript", level: 88, color: "#f59e0b" },
  { name: "Node.js & Express.js (REST APIs)", level: 85, color: "#4ade80" },
  { name: "Tailwind CSS & CSS Modules", level: 90, color: "#06b6d4" },
  { name: "MongoDB, SQL & Firebase", level: 82, color: "#10b981" },
];

const aiMobileCloudSkills = [
  { name: "Python & FastAPI Microservices", level: 86, color: "#a78bfa" },
  { name: "AI / ML (FAISS, Sentence Transformers)", level: 82, color: "#ec4899" },
  { name: "React Native (Expo, Zustand, NativeWind)", level: 85, color: "#38bdf8" },
  { name: "Git, GitHub & CI/CD Workflows", level: 90, color: "#10b981" },
  { name: "AWS & Cloud Infrastructure", level: 75, color: "#f59e0b" },
];

const techBadges = [
  { label: "React / Next.js", icon: "⚛️", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30" },
  { label: "Node.js / Express", icon: "🟢", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  { label: "JavaScript / TypeScript", icon: "🔷", color: "bg-blue-500/10 text-blue-300 border-blue-500/30" },
  { label: "Python / FastAPI", icon: "🐍", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30" },
  { label: "React Native", icon: "📱", color: "bg-sky-500/10 text-sky-300 border-sky-500/30" },
  { label: "AI / ML & FAISS", icon: "🧠", color: "bg-purple-500/10 text-purple-300 border-purple-500/30" },
  { label: "MongoDB / SQL / Firebase", icon: "🍃", color: "bg-green-500/10 text-green-300 border-green-500/30" },
  { label: "AWS Cloud", icon: "☁️", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  { label: "Git / GitHub", icon: "🌿", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  { label: "Tailwind CSS", icon: "🌊", color: "bg-teal-500/10 text-teal-300 border-teal-500/30" },
  { label: "NativeWind & Zustand", icon: "⚡", color: "bg-pink-500/10 text-pink-300 border-pink-500/30" },
  { label: "Figma UI/UX", icon: "✏️", color: "bg-purple-500/10 text-purple-300 border-purple-500/30" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 px-6">
      {/* BG accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Competencies
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Production-tested stack spanning full-stack web, distributed AI systems, cross-platform mobile, and cloud environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Frontend & Full-Stack Skills */}
            <motion.div variants={itemVariants} className="gradient-border p-px rounded-2xl">
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-500 flex items-center justify-center glow-cyan">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Full-Stack & Web Engineering</h3>
                    <p className="text-xs text-muted-foreground">React, Next.js, Node.js, Express & Databases</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {fullstackSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={0.2 + i * 0.1} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI, Mobile & Cloud */}
            <motion.div variants={itemVariants} className="gradient-border p-px rounded-2xl">
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center glow-violet">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">AI, Mobile & Cloud Systems</h3>
                    <p className="text-xs text-muted-foreground">Python, FastAPI, FAISS, React Native & AWS</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {aiMobileCloudSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={0.2 + i * 0.1} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech badges grid */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Technologies & Tools</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium cursor-default transition-all duration-200 ${badge.color}`}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "7+", label: "Projects Completed", icon: Layers, color: "from-violet-600 to-cyan-500" },
              { value: "6+", label: "Languages & Tools", icon: Code2, color: "from-cyan-600 to-emerald-500" },
              { value: "5+", label: "Modern Frameworks", icon: Wrench, color: "from-pink-600 to-violet-500" },
              { value: "100%", label: "Dedication & Focus", icon: Globe, color: "from-amber-500 to-orange-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 text-center border border-border hover:border-violet-500/40 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
