import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'DIGIOTECH SOLUTIONS',
    period: '2023 — PRESENT',
    highlights: [
      'Architects scalable backend microservices using Spring Boot and Java for fintech applications.',
      'Optimizes database queries reducing latency by 40% in high-traffic environments.',
      'Manages containerized deployments using Docker for streamlined CI/CD pipelines.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl font-bold tracking-tighter md:sticky md:top-32"
            >
              Professional <br/><span className="text-secondary">Chronicle</span>
            </motion.h2>
          </div>
          
          <div className="md:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-surface-container-high rounded-lg border-l-4 border-secondary hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface">{exp.role}</h3>
                    <p className="text-secondary font-label tracking-widest text-xs mt-1 uppercase">{exp.company}</p>
                  </div>
                  <span className="font-label text-[10px] text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-4">
                      <ChevronRight className="text-secondary w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
