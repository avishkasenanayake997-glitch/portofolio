"use client";

import { motion } from "framer-motion";
import { Heart, Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold gradient-text">Avishka Sahan</span>
        </div>

        {/* Credit */}
        <p className="text-muted-foreground text-sm flex items-center gap-1.5">
          Built with
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          using Next.js, shadcn/ui & Framer Motion
        </p>

        {/* Back to top */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 glass-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-white hover:border-violet-500/40 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Avishka Sahan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
