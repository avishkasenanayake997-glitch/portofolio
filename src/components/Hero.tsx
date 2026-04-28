"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Download, Mail, Terminal } from "lucide-react";

const roles = [
  "IT Support Specialist",
  "Full-Stack Developer",
  "SLIIT Undergraduate",
  "Problem Solver",
];

function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === words[index].length) {
          setTimeout(() => setDeleting(true), 1200);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      deleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="gradient-text-cyan">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </span>
  );
}

// Floating orb component
function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: string; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Grid dots
  const dots = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 1,
  }));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated orbs */}
      <FloatingOrb x="5%" y="15%" size="500px" color="radial-gradient(circle, #7c3aed, transparent)" delay={0} />
      <FloatingOrb x="60%" y="60%" size="400px" color="radial-gradient(circle, #06b6d4, transparent)" delay={2} />
      <FloatingOrb x="80%" y="5%" size="300px" color="radial-gradient(circle, #ec4899, transparent)" delay={4} />

      {/* Animated grid dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-violet-400"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 3 + dot.delay, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-violet-500/30 text-sm font-medium text-violet-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tight">
            <span className="gradient-text">Avishka</span>
            <br />
            <span className="text-white">Sahan</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-9"
        >
          <TypewriterText words={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed mb-10"
        >
          Motivated IT undergraduate at{" "}
          <span className="text-violet-400 font-semibold">SLIIT</span>, passionate about
          building reliable IT solutions and crafting modern web experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px oklch(0.6 0.28 280 / 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold flex items-center gap-2 text-lg glow-violet transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl glass-card border border-violet-500/40 text-white font-bold flex items-center gap-2 text-lg hover:border-violet-400 transition-all duration-300"
          >
            <Download className="w-5 h-5 text-violet-400" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block gradient-border p-px rounded-2xl"
        >
          <div className="glass-card rounded-2xl px-6 py-4 font-mono text-sm text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-muted-foreground text-xs">terminal</span>
            </div>
            <div className="space-y-1">
              <p><span className="text-violet-400">$</span> <span className="text-cyan-400">const</span> <span className="text-white">dev</span> = <span className="text-green-400">&#123;</span></p>
              <p className="pl-4"><span className="text-amber-400">name</span>: <span className="text-orange-300">&quot;Avishka Sahan&quot;</span>,</p>
              <p className="pl-4"><span className="text-amber-400">role</span>: <span className="text-orange-300">&quot;IT Support & Developer&quot;</span>,</p>
              <p className="pl-4"><span className="text-amber-400">uni</span>: <span className="text-orange-300">&quot;SLIIT&quot;</span>,</p>
              <p className="pl-4"><span className="text-amber-400">status</span>: <span className="text-emerald-400">&quot;Available&quot;</span> <span className="text-green-400">✓</span></p>
              <p><span className="text-green-400">&#125;</span></p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-violet-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
