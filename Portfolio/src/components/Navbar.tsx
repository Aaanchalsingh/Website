import { Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(177,161,255,0.05)] border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Terminal className="text-secondary w-5 h-5" />
        <span className="font-headline text-xl font-bold tracking-tighter text-indigo-300">AANCHAL_SINGH</span>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center">
        {['SYSTEM_ROOT', 'EXPERIENCE', 'PROJECTS_V2', 'TERMINAL'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace('_v2', '')}`}
            className="font-label tracking-[0.05em] uppercase text-xs text-zinc-500 hover:text-secondary transition-colors duration-300 font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-secondary text-on-secondary px-4 py-1.5 rounded-lg font-label text-xs font-bold tracking-widest transition-all"
      >
        EXECUTE_CONTACT
      </motion.button>
    </motion.header>
  );
}
