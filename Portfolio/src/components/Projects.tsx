import { ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'CS Visualizer',
    type: 'AI TOOL',
    description: 'AI-powered web app to learn software engineering concepts through animated step-by-step diagrams. Type any concept and Groq AI generates an explanation with Mermaid diagrams instantly.',
    tags: ['REACT', 'GROQ AI', 'MERMAID.JS'],
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-1',
    link: 'https://cs-visualizer-aanchal.netlify.app',
  },
  {
    title: 'Codex RAG',
    type: 'AI / RAG',
    description: 'Codebase intelligence tool powered by Retrieval-Augmented Generation. Chat with any codebase to understand architecture, trace execution paths, and explore dependencies.',
    tags: ['PYTHON', 'LANGCHAIN', 'RAG'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-1',
    link: 'https://github.com/Aaanchalsingh/codex-rag',
  },
  {
    title: 'CalAI',
    type: 'HEALTH TECH',
    description: 'Smart Indian Calorie Tracker powered by AI. Tracks nutrition for Indian meals and helps users maintain healthy eating habits with intelligent dietary suggestions.',
    tags: ['REACT', 'AI', 'HEALTH'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-2',
    isLarge: true,
    link: 'https://calorie-tracker-support-app.netlify.app',
  },
  {
    title: 'FintechIntel',
    type: 'AI SURVEILLANCE',
    description: 'Autonomous competitive intelligence platform that monitors fintech competitors like Razorpay, Groww, and Zerodha 24/7 — tracking website changes, funding rounds, hiring surges and product launches.',
    tags: ['AI', 'AUTOMATION', 'FINTECH'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-2',
    isLarge: true,
    link: 'https://autonomous-competitive-intelligence.netlify.app/landing',
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">Portfolio / Artifacts</span>
            <h2 className="font-headline text-5xl font-bold tracking-tighter mt-2">Architecture Showcase</h2>
          </div>
          <p className="max-w-xs text-xs text-on-surface-variant leading-relaxed text-right md:text-left">
            A curated collection of system designs and full-stack implementations focusing on efficiency and throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col bg-surface-container-highest rounded-lg overflow-hidden border border-outline-variant/10 ${project.colSpan}`}
            >
              {project.isLarge ? (
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  <div className="lg:col-span-3 aspect-video lg:aspect-auto relative overflow-hidden">
                    <img 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-highest hidden lg:block"></div>
                  </div>
                  <div className="lg:col-span-2 p-10 flex flex-col justify-center space-y-8">
                    <div className="flex justify-between items-center">
                      <h3 className="font-headline text-4xl font-bold tracking-tighter">{project.title}</h3>
                      <span className="px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold rounded uppercase whitespace-nowrap">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-label text-secondary px-3 py-1 bg-secondary/10 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-xs rounded-lg hover:shadow-[0_0_20px_rgba(177,161,255,0.3)] transition-all active:scale-95"
                      >
                        View Project <Terminal className="w-4 h-4" />
                      </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent"></div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-3xl font-bold tracking-tighter">{project.title}</h3>
                      <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full flex items-center justify-center bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-surface-container-low text-[10px] font-label text-primary rounded border border-primary/20 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
