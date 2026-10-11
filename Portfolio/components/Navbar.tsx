"use client";
import { Terminal } from "lucide-react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-nav-bg backdrop-blur-2xl shadow-[0_0_40px_rgba(177,161,255,0.05)] border-b border-outline-variant/10"
    >
      <div className="flex items-center gap-2">
        <Terminal className="text-secondary w-5 h-5" />
        <span className="font-headline text-xl font-bold tracking-tighter text-accent-text">
          AANCHAL_SINGH
        </span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 items-center">
        {[
          { label: "HOME",       href: "#system_root" },
          { label: "EXPERIENCE", href: "#experience"  },
          { label: "PROJECTS",   href: "#projects"    },
          { label: "CONTACT",    href: "#terminal"    },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-label tracking-[0.05em] uppercase text-xs text-nav-text hover:text-secondary transition-colors duration-300 font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Social links — desktop only */}
        <a href="https://github.com/Aaanchalsingh" target="_blank" rel="noopener noreferrer"
           className="hidden md:inline-flex font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/aanchallsingh" target="_blank" rel="noopener noreferrer"
           className="hidden md:inline-flex font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors">
          LinkedIn
        </a>

        <motion.a
          href="/resume.pdf"
          download="Aanchal_Singh_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 border border-secondary/40 text-secondary px-4 py-1.5 rounded-lg font-label text-xs font-bold tracking-widest hover:bg-secondary/10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          RESUME
        </motion.a>

        <motion.a
          href="#terminal"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-on-secondary px-4 py-1.5 rounded-lg font-label text-xs font-bold tracking-widest transition-all"
        >
          CONTACT
        </motion.a>
      </div>
    </motion.header>
  );
}
