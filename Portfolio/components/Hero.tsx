"use client";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section
      id="system_root"
      className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 plexus-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/15"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label text-[10px] tracking-widest text-secondary uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-bold tracking-tighter leading-[0.9] text-on-surface text-5xl md:text-6xl lg:text-8xl"
          >
            Building <br />
            <span className="text-primary italic gradient-accent-text">Scalable</span> Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-on-surface-variant text-base lg:text-lg leading-relaxed"
          >
            Backend Developer at{" "}
            <span className="text-secondary font-bold">Digiotech Solutions</span>.
            Building fintech microservices with Java and Spring Boot.
            710+ LeetCode problems. Passionate about clean architecture and AI-powered tools.
          </motion.p>

          {/* Stats + resume */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-1 px-6 py-4 glass-panel rounded-lg border-l-2 border-secondary shadow-lg"
            >
              <span className="font-headline text-3xl font-extrabold text-secondary tracking-tighter">
                710+
              </span>
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                LeetCode Problems
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-1 px-6 py-4 glass-panel rounded-lg border-l-2 border-primary shadow-lg"
            >
              <span className="font-headline text-3xl font-extrabold text-primary tracking-tighter">
                1.5 Yrs
              </span>
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                Industry Experience
              </span>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              download="Aanchal_Singh_Resume.pdf"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 glass-panel rounded-lg border-l-2 border-secondary/50 shadow-lg hover:border-secondary hover:bg-secondary/10 transition-all group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-headline text-sm font-extrabold text-secondary tracking-tighter">
                  RESUME
                </span>
                <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                  Download PDF
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </motion.a>
          </div>

          {/* Social links — placeholders, fill in your real URLs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 pt-2"
          >
            <a href="https://github.com/Aaanchalsingh" target="_blank" rel="noopener noreferrer"
               className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors border border-outline-variant/30 px-3 py-1.5 rounded">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aanchallsingh" target="_blank" rel="noopener noreferrer"
               className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors border border-outline-variant/30 px-3 py-1.5 rounded">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Aanchall" target="_blank" rel="noopener noreferrer"
               className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors border border-outline-variant/30 px-3 py-1.5 rounded">
              LeetCode
            </a>
          </motion.div>
        </div>

        {/* Right SVG */}
        <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center svg-blend opacity-60 overflow-visible">
              <svg className="w-full h-full max-w-md animate-float overflow-visible" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-secondary)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#glow)" strokeWidth="0.5" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="url(#glow)" strokeWidth="1" strokeDasharray="2 10" />
                <motion.path
                  d="M200 40 L360 200 L200 360 L40 200 Z"
                  fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" opacity={0.7}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "200px", originY: "200px" }}
                />
                <path d="M200 40 L200 360" fill="none" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.5" />
                <path d="M40 200 L360 200" fill="none" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.5" />
                <circle cx="200" cy="40" r="4" fill="var(--color-secondary)" />
                <circle cx="360" cy="200" r="4" fill="var(--color-secondary)" />
                <circle cx="200" cy="360" r="4" fill="var(--color-secondary)" />
                <circle cx="40" cy="200" r="4" fill="var(--color-secondary)" />
                <circle cx="200" cy="200" r="5" fill="var(--color-primary)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary to-transparent" />
        <span className="font-label text-[8px] tracking-[0.3em] uppercase">Scroll to explore</span>
      </div>
    </section>
  );
}
