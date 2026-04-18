import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Plexus Background Overlay */}
      <div className="absolute inset-0 plexus-bg opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/15"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label text-[10px] tracking-widest text-secondary uppercase">System Architect Active</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-on-surface"
          >
            Engineering <br/>
            <span className="text-primary italic">Kinetic</span> Solutions.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-on-surface-variant text-lg leading-relaxed"
          >
            Full-stack Architect at <span className="text-secondary font-bold">Digiotech Solutions</span>. Bridging the gap between raw machine logic and intuitive human interfaces with Java-driven scalability.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-1 px-6 py-4 glass-panel rounded-lg border-l-2 border-secondary shadow-lg"
            >
              <span className="font-headline text-3xl font-extrabold text-secondary tracking-tighter">710+</span>
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">LeetCode Problems</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-1 px-6 py-4 glass-panel rounded-lg border-l-2 border-primary shadow-lg"
            >
              <span className="font-headline text-3xl font-extrabold text-primary tracking-tighter">Backend</span>
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Primary Focus</span>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen overflow-visible">
              <svg className="w-full h-full max-w-md animate-float overflow-visible" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b1a1ff" />
                    <stop offset="100%" stopColor="#d2f000" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#glow)" strokeWidth="0.5" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="url(#glow)" strokeWidth="1" strokeDasharray="2 10" />
                
                <motion.path 
                  d="M200 40 L360 200 L200 360 L40 200 Z" 
                  fill="none" 
                  stroke="#d2f000" 
                  strokeWidth="1" 
                  opacity="0.5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "200px", originY: "200px" }}
                />
                
                <path d="M200 40 L200 360" fill="none" stroke="#b1a1ff" strokeWidth="0.5" opacity="0.3" />
                <path d="M40 200 L360 200" fill="none" stroke="#b1a1ff" strokeWidth="0.5" opacity="0.3" />
                
                <circle cx="200" cy="40" r="3" fill="#d2f000" />
                <circle cx="360" cy="200" r="3" fill="#d2f000" />
                <circle cx="200" cy="360" r="3" fill="#d2f000" />
                <circle cx="40" cy="200" r="3" fill="#d2f000" />
                <circle cx="200" cy="200" r="4" fill="#b1a1ff" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
        <span className="font-label text-[8px] tracking-[0.3em] uppercase">Scroll_To_Observe</span>
      </div>
    </section>
  );
}
