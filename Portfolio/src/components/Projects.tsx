import { ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'URL Shortener',
    type: 'Backend System',
    description: 'Scalable URL redirection system using Spring Boot and Redis for high-speed link resolution. Implements custom hashing algorithms to ensure collision-free performance.',
    tags: ['JAVA', 'REDIS', 'MONGODB'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCin5M-OpxD52FMkSnLgx5i6VBjKwK-rhiM-F1yJZWKPg05BsuOlKs2JeGRo5nh45NQNuP8YmY_e169aUkFo-1w7p0s6SUGxEbJqCPxKpLTHeh2kYtCe183uUwCFSN9D2wCx2o2GUfrpwejR2bKBUM8aEHXcMgKnEjo8JWNqzrZt5EGMKC3CLKPdbfZqXcExKZEd3jnj0IWE0cpCNPbXVcFfT0LYYh6xRiRcDLBYPT_kRJ19Bu-7NYPpYnf0VfO5aBWhtWm2UxiSa0',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Task Queue Engine',
    type: 'Infrastructure',
    description: 'Distributed task processing engine designed for asynchronous background job management. Built for reliability and observability in large-scale system architectures.',
    tags: ['SPRING BOOT', 'POSTGRES', 'DOCKER'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuFjyKlFRpGNTvuXODckegXX6n71x1OgQ-hdScFI1n_l8JjVr2eKMkGvfAhOsaJIpMJM6tHXNEZ9Ka4X9EnBLS_QL3ks-37V-mFA5vH_BdvmNb6yDSBLys3e6Sp2gD1eXi-yxyE9K9X4Ov9CXqfRm_QfDIZGcaDTdnhoWJ59vM2Tg2zIXeLi3GjZqcC1ZTzoiaxFqjXk3kq3xi4DmO2rMVyhTP61nus0AXMkKVJmhmuAYOpn4PVhgjWHaflVi3EeYgOS044gSntsA',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Style Sprint',
    type: 'E-COMMERCE ROOT',
    description: 'A high-performance e-commerce platform focusing on rapid browsing and checkout. Features a robust inventory management system and integrated payment gateways.',
    tags: ['REACT', 'SPRING BOOT', 'STRIPE API'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC-mOwk0LQgJyz-EF_ZBLQsLmA4zuzRoPbrI-72XUpwAJBmjavLppbIrXHyvGvQKz4a0cVyeI6yEjipFQoAaOZrAxITm04wvGn4iFihJ-PbWYRcOcotnQduDADy6x325sCGtOPH4bG_kQN14hY2sWeGORXYjdshC7OFkXzJFQkXP931iaxuN2MX1ypIzzVm3aTp1Zd0K_51IJdBilmq4RIAhNun22EA8TPnSxWId6H6Y7tszRMOw__ntlCHd_Szw8SEG7kdY2DNzg',
    colSpan: 'md:col-span-2',
    isLarge: true,
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
                    <button className="w-fit flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-xs rounded-lg hover:shadow-[0_0_20px_rgba(177,161,255,0.3)] transition-all active:scale-95">
                      View Architecture <Terminal className="w-4 h-4" />
                    </button>
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
                      <button className="h-10 w-10 rounded-full flex items-center justify-center bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
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
