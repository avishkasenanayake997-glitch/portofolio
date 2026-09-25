"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  ShoppingCart,
  Shield,
  Palette,
  ArrowRight,
  Sparkles,
  Tag,
  Brain,
  Building2,
  Hotel,
  Gamepad2,
  Layers,
  Code2,
  Gem,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// GitHub SVG Icon
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: "all" | "fullstack" | "mobile-ai" | "web-ui";
  description: string;
  tags: string[];
  icon: typeof ShoppingCart;
  gradient: string;
  glowClass: string;
  borderColor: string;
  badgeColor: string;
  highlights: string[];
  type: string;
  year: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Legal Research & Case Analysis System",
    subtitle: "React Native, Node.js, Python, AI",
    category: "mobile-ai",
    description:
      "A legal-tech research assistant for Sri Lankan law, supporting case analysis, legal research, B-report analysis, and defense strategy assessment with semantic FAISS vector search.",
    tags: [
      "React Native",
      "Expo",
      "Python",
      "FastAPI",
      "FAISS",
      "Sentence Transformers",
      "Zustand",
      "NativeWind",
      "Firebase",
      "MongoDB",
      "Node.js",
    ],
    icon: Brain,
    gradient: "from-purple-600 via-indigo-600 to-cyan-400",
    glowClass: "glow-violet",
    borderColor: "border-indigo-500/40",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    highlights: [
      "Built a semantic legal search engine using Sentence Transformers, FAISS, and cosine similarity.",
      "Developed FastAPI AI services and a Node.js/Express backend integrated with Firebase/Firestore and MongoDB.",
      "Implemented document processing & text chunking for extracting searchable legal content from PDF documents.",
      "Engineered cross-platform mobile application using React Native, Expo, Zustand, NativeWind, and React Navigation.",
    ],
    type: "AI & Mobile",
    year: "2024",
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Research_My",
    featured: true,
  },
  {
    id: 2,
    title: "Viheli-Super",
    subtitle: "MERN Stack E-Commerce Platform",
    category: "fullstack",
    description:
      "A full-stack supermarket web application with robust user authentication, profile management, file uploads, automated email notifications, and admin operations.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "bcrypt",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "Tailwind CSS",
      "Flowbite",
    ],
    icon: ShoppingCart,
    gradient: "from-emerald-500 via-teal-600 to-cyan-500",
    glowClass: "glow-cyan",
    borderColor: "border-teal-500/40",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    highlights: [
      "Developed full-stack web application with user authentication, profile management, and admin operations.",
      "Built using React, Vite, Node.js, Express, and MongoDB with clean architecture.",
      "Implemented JWT authentication, bcrypt security, Cloudinary, Multer, Nodemailer, Tailwind CSS, and Flowbite.",
      "Real-time inventory management and dynamic order confirmation system.",
    ],
    type: "Full-Stack Web",
    year: "2024",
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Viheli-Super",
    featured: true,
  },
  {
    id: 3,
    title: "ViRu Gems",
    subtitle: "React 19, Vite 8, TypeScript Luxury E-Commerce",
    category: "web-ui",
    description:
      "A luxury e-commerce web application for showcasing and selling authentic Sri Lankan gemstones and fine jewelry with a high-end, responsive shopping experience.",
    tags: [
      "React 19",
      "Vite 8",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    icon: Gem,
    gradient: "from-amber-400 via-pink-500 to-violet-600",
    glowClass: "glow-pink",
    borderColor: "border-pink-500/40",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    highlights: [
      "Developed a luxury e-commerce web application for showcasing and selling Sri Lankan gemstones and fine jewelry.",
      "Implemented product browsing, gemstone filtering, wishlist, shopping cart, and responsive navigation.",
      "Engineered with React 19, Vite 8, TypeScript, React Router, Tailwind CSS, Framer Motion, and Lucide React.",
      "Premium, fluid user interface designed for luxury retail aesthetics and mobile responsiveness.",
    ],
    type: "Luxury E-Commerce",
    year: "2024",
    githubUrl: "https://github.com/avishkasenanayake997-glitch",
    featured: true,
  },
  {
    id: 4,
    title: "Im-Pact-A Enterprise Platform",
    subtitle: "Next.js 16, React 19, TypeScript Enterprise Web",
    category: "web-ui",
    description:
      "A marketing and lead-generation website developed for ROSS Services Ltd, showcasing sustainability verification, validation, assurance, training, and consultancy services.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TSX",
      "CSS Modules",
      "Global CSS",
      "App Router",
      "next/font",
      "ESLint",
    ],
    icon: Building2,
    gradient: "from-blue-600 via-violet-600 to-cyan-400",
    glowClass: "glow-violet",
    borderColor: "border-blue-500/40",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    highlights: [
      "Built using Next.js 16, React 19, TypeScript/TSX, CSS Modules, and Global CSS with the App Router.",
      "Implemented Next.js routing/navigation APIs, next/font, ESLint, and strict TypeScript with @/* path alias.",
      "Designed a responsive, component-based frontend with route-specific styling and reusable React components.",
      "Engineered interactive sustainability metric counters, case studies, and corporate enquiry workflows.",
    ],
    type: "Enterprise Web",
    year: "2026",
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Im-Pact-A-V3",
    featured: true,
  },
  {
    id: 5,
    title: "SmartHostel / SmartHotel Booking",
    subtitle: "React Native Mobile App & Express API",
    category: "fullstack",
    description:
      "An all-in-one hospitality reservation platform combining a cross-platform React Native client with a Node.js/Express REST API backend for room cataloging, availability, and bookings.",
    tags: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "REST API",
    ],
    icon: Hotel,
    gradient: "from-amber-500 via-orange-600 to-rose-500",
    glowClass: "glow-pink",
    borderColor: "border-amber-500/40",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    highlights: [
      "Cross-platform mobile UI for browsing rooms, checking real-time availability, and instant reservations.",
      "Modular Express REST API with MongoDB/Mongoose data models and error-handling middleware.",
      "Secure JWT authentication and role-based booking validation for guests and administrators.",
      "Automated room availability tracking and complete reservation lifecycle management.",
    ],
    type: "Mobile & Backend",
    year: "2024",
    githubUrl: "https://github.com/avishkasenanayake997-glitch/SmartHotel",
    featured: true,
  },
  {
    id: 6,
    title: "Roblox Creative Studio & Agency",
    subtitle: "Vite, React & Framer Motion Experience",
    category: "web-ui",
    description:
      "A high-impact gaming studio and agency showcase built with Vite and Framer Motion. Features interactive service showcases, portfolio galleries, animated marquees, and client testimonials.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "UI/UX",
      "Interactive",
    ],
    icon: Gamepad2,
    gradient: "from-pink-600 via-rose-600 to-violet-500",
    glowClass: "glow-pink",
    borderColor: "border-pink-500/40",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    highlights: [
      "Fluid Framer Motion micro-interactions, animated statistics counters, and dynamic marquees.",
      "Studio game development process showcase and interactive client review highlights.",
      "Sleek dark-mode aesthetic with custom glassmorphism components and glowing gradients.",
      "High-performance Vite build with fast asset bundling and rapid load performance.",
    ],
    type: "Creative Web",
    year: "2024",
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Roblox",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "All Projects", count: projects.length },
  { id: "fullstack", label: "Full-Stack", count: projects.filter((p) => p.category === "fullstack").length },
  { id: "mobile-ai", label: "AI & Mobile", count: projects.filter((p) => p.category === "mobile-ai").length },
  { id: "web-ui", label: "Web & UI/UX", count: projects.filter((p) => p.category === "web-ui").length },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Background ambient accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-pink-500/30 text-pink-300 text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              What I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
              A curated selection of full-stack platforms, AI intelligence engines, mobile applications, and modern web experiences.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-card border border-border">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive ? "text-white" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/25"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                    <span
                      className={`relative z-10 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    onHoverStart={() => setHovered(project.id)}
                    onHoverEnd={() => setHovered(null)}
                    className="group relative h-full"
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="gradient-border p-px rounded-2xl h-full flex flex-col"
                    >
                      <div
                        className={`glass-card rounded-2xl p-6 h-full flex flex-col border-0 transition-all duration-300 ${
                          hovered === project.id ? project.borderColor : ""
                        }`}
                      >
                        {/* Top: Icon & Type Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center ${project.glowClass} transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`text-xs border ${project.badgeColor}`}
                            >
                              <Tag className="w-2.5 h-2.5 mr-1" />
                              {project.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                            {project.subtitle} · {project.year}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1.5 mb-5 border-t border-border/50 pt-3">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <ArrowRight className="w-3 h-3 mt-0.5 text-violet-400 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded-md glass-card border border-border/80 text-muted-foreground font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2.5 pt-4 border-t border-border mt-auto">
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:opacity-95 transition-all`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Project</span>
                          </motion.a>

                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="View on GitHub"
                            aria-label={`View ${project.title} on GitHub`}
                            className="w-10 h-10 rounded-xl glass-card border border-border flex items-center justify-center hover:border-violet-500/50 hover:text-white transition-all text-muted-foreground"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Callout */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-muted-foreground text-sm">
                Explore more open-source code on{" "}
                <a
                  href="https://github.com/avishkasenanayake997-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 font-semibold underline underline-offset-4 decoration-violet-500/40 hover:decoration-violet-400 transition-all inline-flex items-center gap-1 ml-1"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

