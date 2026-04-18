import { LayoutGrid, Code, GitBranch, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-around items-center px-4 py-3 bg-zinc-900/40 backdrop-blur-xl border border-indigo-500/10 rounded-xl w-[90%] max-w-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <a href="#" className="bg-secondary/10 text-secondary rounded-lg p-2 shadow-[0_0_15px_rgba(210,240,0,0.2)] active:scale-90 transition-all">
        <LayoutGrid className="w-5 h-5" />
      </a>
      <a href="#experience" className="text-zinc-600 p-2 hover:bg-zinc-800/50 hover:text-indigo-300 active:scale-90 transition-all">
        <Code className="w-5 h-5" />
      </a>
      <a href="#projects" className="text-zinc-600 p-2 hover:bg-zinc-800/50 hover:text-indigo-300 active:scale-90 transition-all">
        <GitBranch className="w-5 h-5" />
      </a>
      <a href="#terminal" className="text-zinc-600 p-2 hover:bg-zinc-800/50 hover:text-indigo-300 active:scale-90 transition-all">
        <User className="w-5 h-5" />
      </a>
    </nav>
  );
}
