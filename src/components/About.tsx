"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles, Target, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const softSkills = [
  "Communication & Customer Service",
  "Teamwork & Collaboration",
  "Problem-solving",
  "Critical Thinking",
  "Time Management",
  "Multitasking",
  "Adaptability",
];

const education = [
  {
    degree: "B.Sc. (Hons) in Information Technology",
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    year: "2021 – Present",
    type: "Undergraduate",
    color: "from-violet-600 to-cyan-500",
    glow: "glow-violet",
  },
  {
    degree: "GCE Advanced Level",
    school: "Science for Technology | Engineering Technology | ICT",
    year: "2019",
    type: "Secondary",
    color: "from-cyan-600 to-emerald-500",
    glow: "glow-cyan",
  },
  {
    degree: "GCE Ordinary Level",
    school: "ICT: A | Mathematics: B | Science: A | English: C",
    year: "2016",
    type: "Secondary",
    color: "from-pink-600 to-violet-500",
    glow: "glow-pink",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6">
      {/* Section label */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-violet-500/30 text-violet-300 text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Summary card */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="gradient-border p-px rounded-2xl">
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Professional Summary</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Motivated IT undergraduate at{" "}
                    <span className="text-violet-400 font-semibold">SLIIT</span> with a strong foundation in
                    software development and a growing interest in{" "}
                    <span className="text-cyan-400 font-semibold">IT Support</span> and system administration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mt-4">
                    Skilled in troubleshooting technical issues, supporting end-users, and working in
                    fast-paced environments. Passionate about delivering reliable IT solutions and enhancing
                    user experiences through effective{" "}
                    <span className="text-pink-400 font-semibold">problem-solving</span> and communication.
                  </p>

                  {/* Quick info */}
                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span>Mannar Road, Medawachchiya, Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>B.Sc. (Hons) IT — SLIIT (Undergraduate)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="glass-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-violet-500 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-violet-500/10 text-violet-300 border border-violet-500/30 hover:bg-violet-500/20 transition-colors px-3 py-1 text-xs"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Education timeline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-500 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-pink-500 opacity-40" />

                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                      className="flex gap-6"
                    >
                      {/* Dot */}
                      <div className="flex-shrink-0 relative">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center ${edu.glow} z-10 relative`}>
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 glass-card rounded-xl p-5 border border-border hover:border-violet-500/40 transition-colors group">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors">
                            {edu.degree}
                          </h4>
                          <Badge
                            className={`bg-gradient-to-r ${edu.color} text-white text-xs px-2 py-0.5 flex-shrink-0 border-0`}
                          >
                            {edu.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">{edu.school}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 glass-card rounded-xl p-5 border border-border"
              >
                <p className="text-sm font-semibold text-white mb-3">Languages</p>
                <div className="flex gap-4">
                  {[
                    { lang: "English", level: "Intermediate", color: "from-cyan-500 to-blue-500" },
                    { lang: "Sinhala", level: "Native", color: "from-emerald-500 to-cyan-500" },
                  ].map(({ lang, level, color }) => (
                    <div key={lang} className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${color}`} />
                      <span className="text-white text-sm font-medium">{lang}</span>
                      <span className="text-muted-foreground text-xs">({level})</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
