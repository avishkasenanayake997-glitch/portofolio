"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, GitBranch, ShoppingCart, Shield, Palette, ArrowRight, Sparkles, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Online Supermarket Website",
    subtitle: "MERN Stack Full-Stack App",
    description:
      "A full-stack e-commerce web application with user authentication, admin management, and real-time inventory. Implemented user and admin control features including add/delete users.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth"],
    icon: ShoppingCart,
    gradient: "from-violet-600 to-cyan-500",
    glowClass: "glow-violet",
    borderColor: "border-violet-500/40",
    highlights: [
      "User authentication & role management",
      "Admin control panel",
      "Real-time inventory management",
      "Responsive user interface",
    ],
    type: "Web Application",
    year: "2024",
  },
  {
    id: 2,
    title: "Secure File Transfer App",
    subtitle: "Android Mobile App",
    description:
      "A secure file-sharing system built for Android using Kotlin, XML layouts, and Firebase. Implemented role-based access control and encryption for data protection.",
    tags: ["Kotlin", "Android", "Firebase", "XML", "Encryption"],
    icon: Shield,
    gradient: "from-emerald-600 to-cyan-500",
    glowClass: "glow-cyan",
    borderColor: "border-cyan-500/40",
    highlights: [
      "End-to-end encryption",
      "Role-based access control",
      "Firebase real-time backend",
      "Secure communication protocols",
    ],
    type: "Mobile App",
    year: "2024",
  },
  {
    id: 3,
    title: "UI/UX Design Projects",
    subtitle: "Figma Design System",
    description:
      "Designed an online bookstore and a mobile vegetable ordering app using Figma. Focused on usability, intuitive navigation, and user-centered design principles.",
    tags: ["Figma", "UI/UX", "Prototyping", "User Research", "Design Systems"],
    icon: Palette,
    gradient: "from-pink-600 to-violet-500",
    glowClass: "glow-pink",
    borderColor: "border-pink-500/40",
    highlights: [
      "Online bookstore UI design",
      "Mobile vegetable ordering app",
      "User-centered design approach",
      "Interactive prototypes in Figma",
    ],
    type: "UI/UX Design",
    year: "2023",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6">
      {/* BG accent */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-pink-500/30 text-pink-300 text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              What I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A selection of projects showcasing my development skills and design thinking.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`gradient-border p-px rounded-2xl h-full`}
                >
                  <div className={`glass-card rounded-2xl p-6 h-full flex flex-col border-0 transition-all duration-300 ${hovered === project.id ? project.borderColor : ""}`}>
                    {/* Card header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center ${project.glowClass} transition-transform duration-300 group-hover:scale-110`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                          <Tag className="w-2.5 h-2.5 mr-1" />
                          {project.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle} · {project.year}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ArrowRight className="w-3 h-3 mt-0.5 text-violet-400 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full glass-card border border-border text-muted-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-xs font-bold flex items-center justify-center gap-1.5`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl glass-card border border-border flex items-center justify-center hover:border-violet-500/40 transition-colors"
                      >
                        <Github className="w-4 h-4 text-muted-foreground hover:text-white transition-colors" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* More coming */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              More projects coming soon —{" "}
              <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                reach out to collaborate
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
