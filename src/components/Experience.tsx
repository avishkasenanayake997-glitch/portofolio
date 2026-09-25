"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "IM~pact-A AI Limited",
    period: "2026",
    project: "Im-Pact-A | Next.js, React, TypeScript",
    client: "ROSS Services Ltd",
    description:
      "Engineered a high-performance marketing and lead-generation web platform for ROSS Services Ltd, showcasing enterprise sustainability verification, validation, assurance, training, and strategic consultancy.",
    highlights: [
      "Built using Next.js 16, React 19, TypeScript/TSX, CSS Modules, and Global CSS with the App Router architecture.",
      "Implemented Next.js routing & navigation APIs, next/font typography, strict TypeScript with the @/* path alias mapped to src/*, and ESLint code standards.",
      "Designed a responsive, component-based frontend with route-specific styling and highly reusable React UI components.",
      "Integrated lead-generation forms, service capability breakdowns, animated metrics, and modern ESG credential showcases.",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "CSS Modules",
      "Global CSS",
      "App Router",
      "next/font",
      "ESLint",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Im-Pact-A-V3",
    color: "from-violet-600 via-indigo-600 to-cyan-400",
    glow: "glow-violet",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Ambient background glow */}
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base">
              Hands-on industry engineering experience building scalable, production-grade software applications.
            </p>
          </motion.div>

          {/* Timeline Experience Card */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="gradient-border p-px rounded-3xl"
              >
                <div className="glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300">
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center ${exp.glow} flex-shrink-0 shadow-lg`}
                      >
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                          <Badge className={`${exp.badgeColor} border text-xs`}>
                            Internship
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground text-sm mt-1">
                          <span className="flex items-center gap-1.5 font-semibold text-violet-300">
                            <Building className="w-4 h-4 text-violet-400" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="text-muted-foreground">{exp.client}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-card border border-border text-sm font-medium text-muted-foreground self-start sm:self-center">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-base font-bold text-white">
                        {exp.project}
                      </h4>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 pt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-border/60">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                        Technologies &amp; Architecture
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-lg glass-card border border-border text-white/90 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex items-center gap-4">
                      <motion.a
                        href={exp.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${exp.color} text-white font-bold text-xs shadow-md hover:opacity-90 transition-all`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Explore Im-Pact Repository
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
