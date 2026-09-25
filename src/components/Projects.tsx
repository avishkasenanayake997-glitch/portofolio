"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  ChevronRight,
  Star,
  CheckCircle2,
  ShoppingCart,
  Gem,
  Building2,
  Bot,
  Hotel,
  Gamepad2,
  Code2,
  Laptop,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";

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

export interface ProjectItem {
  id: number;
  title: string;
  categoryLabel: string;
  categoryIcon: React.ElementType;
  categories: string[];
  description: string;
  image: string;
  tags: string[];
  highlights?: string[];
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  badgeStyle: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Legal Research & Case Analysis",
    categoryLabel: "AI & Mobile",
    categoryIcon: Bot,
    categories: ["ai-mobile", "fullstack"],
    description:
      "A legal-tech research assistant for Sri Lankan law, supporting case analysis, legal research, E-sport analysis, and defensive strategy assessment with semantic FAISS vector search.",
    image: "/projects/smartlawyer.jpg",
    tags: [
      "React",
      "FastAPI",
      "Python",
      "Sentence Transformers",
      "FAISS",
      "MongoDB",
      "React Native",
      "Flask",
    ],
    highlights: [
      "Built a semantic legal search engine using Sentence Transformers, FAISS, and cosine similarity.",
      "Implemented document processing & text chunking for efficient semantic search.",
      "Developed FastAPI + a responsive frontend for AI-powered legal research.",
      "Engineered cross-platform mobile application using React Native, Expo, and a Flask backend.",
    ],
    featured: true,
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Research_My",
    liveUrl: "https://github.com/avishkasenanayake997-glitch/Research_My",
    accentColor: "blue",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    id: 2,
    title: "Viheli-Super",
    categoryLabel: "Full-Stack Web",
    categoryIcon: ShoppingCart,
    categories: ["fullstack", "ecommerce"],
    description:
      "A full-stack supermarket web application with robust user authentication, profile management, file uploads, automated email notifications, and admin operations.",
    image: "/projects/viheli.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    highlights: [
      "Full authentication lifecycle with JWT and encrypted credential hashing.",
      "Cloudinary image uploads for product catalogs and user profiles.",
      "Automated email notifications via Nodemailer on order checkout.",
      "Admin dashboard with dynamic inventory management and user moderation.",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Viheli-Super",
    liveUrl: "https://github.com/avishkasenanayake997-glitch/Viheli-Super",
    accentColor: "emerald",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: 3,
    title: "ViRu Gems",
    categoryLabel: "Luxury E-Commerce",
    categoryIcon: Gem,
    categories: ["ecommerce", "web-ui"],
    description:
      "A luxury e-commerce web application for showcasing and selling authentic Sri Lankan gemstones and fine jewelry with a high-end, responsive shopping experience.",
    image: "/projects/virugems.jpg",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Luxury dark-mode interface with gold accents and high-definition gemstone showcase.",
      "Interactive filtering by gem cut, carat weight, origin, and gemstone certificate.",
      "Fluid animated shopping bag and wishlist with Framer Motion transitions.",
      "Responsive bespoke layouts optimized for desktop, tablet, and mobile viewing.",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch",
    liveUrl: "https://github.com/avishkasenanayake997-glitch",
    accentColor: "pink",
    badgeStyle: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  },
  {
    id: 4,
    title: "Im-Pact-A Enterprise Platform",
    categoryLabel: "Enterprise Web",
    categoryIcon: Building2,
    categories: ["enterprise", "web-ui"],
    description:
      "An analytical and impact assessment platform developed for ROSS Services Ltd., showcasing sustainability, verification, validation, assurance, training, and consultancy services.",
    image: "/projects/impacta.jpg",
    tags: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
    highlights: [
      "Custom sustainability metrics reporting and ESG compliance dashboards.",
      "Enterprise lead generation and corporate enquiry workflows for ROSS Services Ltd.",
      "High-performance App Router Next.js architecture with strict TypeScript.",
      "Interactive impact verification calculators and case study archives.",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Im-Pact-A-V3",
    liveUrl: "https://github.com/avishkasenanayake997-glitch/Im-Pact-A-V3",
    accentColor: "indigo",
    badgeStyle: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    id: 5,
    title: "SmartHostel / SmartHotel Booking",
    categoryLabel: "Mobile & Backend",
    categoryIcon: Hotel,
    categories: ["fullstack", "ai-mobile"],
    description:
      "A multi-role hospitality reservation platform combining a cross-platform React Native client with a Node.js/Express REST API backend for room cataloging, availability, and bookings.",
    image: "/projects/smarthotel.jpg",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    highlights: [
      "Cross-platform mobile client built with React Native and Expo.",
      "RESTful API backend powered by Node.js, Express, and MongoDB.",
      "Real-time room availability calendar and automated conflict prevention.",
      "Role-based authentication for guests, property managers, and administrators.",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch/SmartHotel",
    liveUrl: "https://github.com/avishkasenanayake997-glitch/SmartHotel",
    accentColor: "amber",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    id: 6,
    title: "Roblox Creative Studio & Agency",
    categoryLabel: "Creative Web",
    categoryIcon: Gamepad2,
    categories: ["web-ui", "enterprise"],
    description:
      "A high-impact gaming development agency showcasing built-in experiences with Vite and Framer Motion. Features interactive service showcases, portfolio galleries, animated marquees, and client testimonials.",
    image: "/projects/roblox.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: [
      "Dynamic 3D-styled gaming aesthetic with neon lighting and immersive micro-animations.",
      "Interactive studio portfolio showing game metrics, active players, and game passes.",
      "Marquee carousel featuring client testimonials, brand partners, and development milestones.",
      "Optimized production bundle delivering lightning-fast load times on Vite.",
    ],
    githubUrl: "https://github.com/avishkasenanayake997-glitch/Roblox",
    liveUrl: "https://github.com/avishkasenanayake997-glitch/Roblox",
    accentColor: "purple",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
];

const filterTabs = [
  { id: "all", label: "All Projects", icon: null },
  { id: "fullstack", label: "Full-Stack", icon: Code2 },
  { id: "ai-mobile", label: "AI & Mobile", icon: Bot },
  { id: "web-ui", label: "Web & UI/UX", icon: Laptop },
  { id: "enterprise", label: "Enterprise", icon: Building2 },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedModalProject, setSelectedModalProject] =
    useState<ProjectItem | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeTab));

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const row2Projects = projectsData.filter((p) => [2, 3, 4].includes(p.id));
  const row3Projects = projectsData.filter((p) => [5, 6].includes(p.id));

  const isAllView = activeTab === "all";

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-cyan-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Subtle portfolio tracker pre-title */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-blue-500/40" />
            <span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
              PORTFOLIO
            </span>
            <span className="h-px w-8 bg-blue-500/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            What I&apos;ve{" "}
            <span className="text-blue-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]">
              Built
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A curated selection of full-stack platforms, AI intelligence engines, mobile applications, and modern web experiences.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#0a0f1e]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full bg-blue-600 border border-blue-400/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {IconComp && (
                    <span className="relative z-10">
                      {tab.id === "fullstack" ? (
                        <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
                      ) : (
                        <IconComp className="w-3.5 h-3.5" />
                      )}
                    </span>
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* PROJECTS CONTAINER */}
        {/* When activeTab is 'all', render the bespoke 3-tiered architectural layout */}
        {/* When activeTab is filtered, render matching cards dynamically */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          {isAllView ? (
            <motion.div
              key="all-projects-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* ------------------------------------------------------------- */}
              {/* TIER 1: FEATURED PROJECT HERO CARD (Full Width) */}
              {/* ------------------------------------------------------------- */}
              <div className="relative rounded-3xl overflow-hidden bg-[#070b1a]/95 border border-blue-500/25 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(7,11,26,0.8)] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-blue-500/40 group">
                {/* Ethereal Lady Justice Silhouette Watermark on the far right */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-80 lg:w-[420px] pointer-events-none opacity-20 mix-blend-screen bg-cover bg-right bg-no-repeat transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundImage: "url('/projects/justice_watermark.jpg')" }}
                />

                {/* Top Right: Featured Project Tag */}
                <div className="flex justify-end mb-4 relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
                    <span>Featured Project</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left: Laptop Showcase Mockup */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
                        <Bot className="w-3.5 h-3.5" />
                        {featuredProject.categoryLabel}
                      </span>
                    </div>

                    {/* Title with Chevron */}
                    <button
                      onClick={() => setSelectedModalProject(featuredProject)}
                      className="text-left group/title inline-flex items-center gap-2 mb-3"
                    >
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover/title:text-blue-400 transition-colors">
                        {featuredProject.title}
                      </h3>
                      <ChevronRight className="w-6 h-6 text-blue-400 group-hover/title:translate-x-1.5 transition-transform duration-300" />
                    </button>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>

                    {/* 2x2 Feature Highlights with glowing blue checkmarks */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {featuredProject.highlights?.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5 fill-blue-500/20" />
                          <span className="text-xs text-slate-300 leading-snug">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#0c1229] border border-blue-500/20 text-slate-300 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedModalProject(featuredProject)}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:scale-[1.03] active:scale-95 transition-all"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl border border-blue-500/30 hover:border-blue-400/60 bg-[#0a0f1e]/80 text-blue-300 hover:text-white text-sm font-semibold flex items-center gap-1.5 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* TIER 2: 3-COLUMN CARDS (Viheli-Super, ViRu Gems, Im-Pact-A) */}
              {/* ------------------------------------------------------------- */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {row2Projects.map((project) => {
                  const IconComp = project.categoryIcon;
                  return (
                    <div
                      key={project.id}
                      className="group relative rounded-3xl overflow-hidden bg-[#070b1a]/95 border border-blue-500/20 backdrop-blur-xl shadow-xl flex flex-col transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                    >
                      {/* Top Mockup Image */}
                      <div className="relative h-56 sm:h-60 overflow-hidden bg-black/40">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-transparent to-transparent opacity-80" />

                        {/* Floating Green Cart Badge for Viheli-Super */}
                        {project.id === 2 && (
                          <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40">
                            <ShoppingCart className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeStyle}`}
                          >
                            <IconComp className="w-3.5 h-3.5" />
                            {project.categoryLabel}
                          </span>
                        </div>

                        {/* Title with Chevron */}
                        <button
                          onClick={() => setSelectedModalProject(project)}
                          className="text-left group/title inline-flex items-center gap-1.5 mb-2.5"
                        >
                          <h4 className="text-xl font-bold text-white group-hover/title:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          <ChevronRight className="w-5 h-5 text-blue-400 group-hover/title:translate-x-1 transition-transform" />
                        </button>

                        {/* Description */}
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#0c1229] border border-blue-500/15 text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom Action Buttons */}
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 mt-auto">
                          <button
                            onClick={() => setSelectedModalProject(project)}
                            className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                          >
                            <span>View Project</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} link`}
                            className="p-2 rounded-xl border border-blue-500/30 hover:border-blue-400/60 bg-[#0a0f1e] text-blue-400 hover:text-white transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ------------------------------------------------------------- */}
              {/* TIER 3: 2-COLUMN CARDS (SmartHotel, Roblox Studio) */}
              {/* ------------------------------------------------------------- */}
              <div className="grid lg:grid-cols-2 gap-6">
                {row3Projects.map((project) => {
                  const IconComp = project.categoryIcon;
                  return (
                    <div
                      key={project.id}
                      className="group relative rounded-3xl overflow-hidden bg-[#070b1a]/95 border border-blue-500/20 backdrop-blur-xl shadow-xl p-6 sm:p-7 flex flex-col md:flex-row gap-6 items-center transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                    >
                      {/* Left: Device Mockup */}
                      <div className="w-full md:w-5/12 flex-shrink-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black/40">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="w-full md:w-7/12 flex flex-col flex-1">
                        {/* Category Badge */}
                        <div className="mb-2.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeStyle}`}
                          >
                            <IconComp className="w-3.5 h-3.5" />
                            {project.categoryLabel}
                          </span>
                        </div>

                        {/* Title with Chevron */}
                        <button
                          onClick={() => setSelectedModalProject(project)}
                          className="text-left group/title inline-flex items-center gap-1.5 mb-2"
                        >
                          <h4 className="text-xl font-bold text-white group-hover/title:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          <ChevronRight className="w-5 h-5 text-blue-400 group-hover/title:translate-x-1 transition-transform" />
                        </button>

                        {/* Description */}
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#0c1229] border border-blue-500/15 text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 mt-auto">
                          <button
                            onClick={() => setSelectedModalProject(project)}
                            className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                          >
                            <span>View Project</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} link`}
                            className="p-2 rounded-xl border border-blue-500/30 hover:border-blue-400/60 bg-[#0a0f1e] text-blue-400 hover:text-white transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* ------------------------------------------------------------- */
            /* FILTERED PROJECTS GRID */
            /* ------------------------------------------------------------- */
            <motion.div
              key={`filtered-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => {
                const IconComp = project.categoryIcon;
                return (
                  <div
                    key={project.id}
                    className="group relative rounded-3xl overflow-hidden bg-[#070b1a]/95 border border-blue-500/20 backdrop-blur-xl shadow-xl flex flex-col transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                  >
                    {/* Mockup Image */}
                    <div className="relative h-60 overflow-hidden bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeStyle}`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                          {project.categoryLabel}
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedModalProject(project)}
                        className="text-left group/title inline-flex items-center gap-1.5 mb-2.5"
                      >
                        <h4 className="text-xl font-bold text-white group-hover/title:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                        <ChevronRight className="w-5 h-5 text-blue-400 group-hover/title:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#0c1229] border border-blue-500/15 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 mt-auto">
                        <button
                          onClick={() => setSelectedModalProject(project)}
                          className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} link`}
                          className="p-2 rounded-xl border border-blue-500/30 hover:border-blue-400/60 bg-[#0a0f1e] text-blue-400 hover:text-white transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0a0f1e]/80 border border-blue-500/20 backdrop-blur-xl shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-slate-300 text-sm">
              Explore more repositories and source code on{" "}
              <a
                href="https://github.com/avishkasenanayake997-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-all inline-flex items-center gap-1 ml-1"
              >
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* RICH PROJECT DETAIL MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#070b1a] border border-blue-500/30 p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Mockup Image */}
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl border border-white/5">
                <img
                  src={selectedModalProject.image}
                  alt={selectedModalProject.title}
                  className="w-full h-auto object-cover max-h-72"
                />
              </div>

              {/* Category Pill */}
              <div className="mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${selectedModalProject.badgeStyle}`}
                >
                  {selectedModalProject.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {selectedModalProject.title}
              </h3>

              {/* Full Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedModalProject.description}
              </p>

              {/* Key Architecture Highlights */}
              {selectedModalProject.highlights && (
                <div className="mb-6 bg-[#0a0f1e] rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Key Architecture & Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedModalProject.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-7">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0c1229] border border-blue-500/20 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>

                {selectedModalProject.liveUrl && (
                  <a
                    href={selectedModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-white text-sm font-semibold flex items-center gap-2 transition-all bg-[#0a0f1e]"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
