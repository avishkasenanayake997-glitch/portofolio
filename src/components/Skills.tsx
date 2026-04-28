"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code2, Sparkles, Wrench, Globe, Layers } from "lucide-react";

const itSupportSkills = [
  { name: "Hardware & Software Troubleshooting", level: 85, color: "#7c3aed" },
  { name: "Windows OS & System Config", level: 80, color: "#06b6d4" },
  { name: "Networking (IP, DNS, LAN)", level: 70, color: "#ec4899" },
  { name: "Software Installation & Config", level: 90, color: "#10b981" },
  { name: "IT Infrastructure & Services", level: 75, color: "#f59e0b" },
];

const devSkills = [
  { name: "JavaScript", level: 82, color: "#f59e0b" },
  { name: "React.js", level: 80, color: "#38bdf8" },
  { name: "Node.js / Express.js", level: 75, color: "#4ade80" },
  { name: "PHP / Laravel", level: 70, color: "#a78bfa" },
  { name: "Java / C / C++", level: 68, color: "#f87171" },
  { name: "HTML & CSS", level: 90, color: "#fb923c" },
];

const techBadges = [
  { label: "JavaScript", icon: "⚡", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  { label: "React.js", icon: "⚛️", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30" },
  { label: "Node.js", icon: "🟢", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  { label: "Express.js", icon: "🚀", color: "bg-gray-500/10 text-gray-300 border-gray-500/30" },
  { label: "Laravel", icon: "🔴", color: "bg-red-500/10 text-red-300 border-red-500/30" },
  { label: "PHP", icon: "🐘", color: "bg-violet-500/10 text-violet-300 border-violet-500/30" },
  { label: "Kotlin", icon: "🎯", color: "bg-orange-500/10 text-orange-300 border-orange-500/30" },
  { label: "Firebase", icon: "🔥", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30" },
  { label: "HTML/CSS", icon: "🎨", color: "bg-pink-500/10 text-pink-300 border-pink-500/30" },
  { label: "Figma", icon: "✏️", color: "bg-purple-500/10 text-purple-300 border-purple-500/30" },
  { label: "Git", icon: "🌿", color: "bg-green-500/10 text-green-300 border-green-500/30" },
  { label: "Linux", icon: "🐧", color: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
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
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              My <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A combination of IT support expertise and modern development skills.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* IT Support Skills */}
            <motion.div variants={itemVariants} className="gradient-border p-px rounded-2xl">
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center glow-violet">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">IT Support Skills</h3>
                    <p className="text-xs text-muted-foreground">Hardware, Networks & Systems</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {itSupportSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={0.2 + i * 0.1} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Programming Skills */}
            <motion.div variants={itemVariants} className="gradient-border p-px rounded-2xl">
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-500 flex items-center justify-center glow-cyan">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Programming & Dev</h3>
                    <p className="text-xs text-muted-foreground">Languages, Frameworks & Tools</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {devSkills.map((skill, i) => (
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
              { value: "3+", label: "Projects Built", icon: Layers, color: "from-violet-600 to-cyan-500" },
              { value: "5+", label: "Languages", icon: Code2, color: "from-cyan-600 to-emerald-500" },
              { value: "3+", label: "Frameworks", icon: Wrench, color: "from-pink-600 to-violet-500" },
              { value: "2", label: "Languages Spoken", icon: Globe, color: "from-amber-500 to-orange-500" },
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
