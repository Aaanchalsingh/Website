"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Backend Developer",
    company: "DIGIOTECH SOLUTIONS",
    period: "Aug 2023 — Present",
    highlights: [
      "Built and maintained scalable backend microservices for fintech applications using Java 17 and Spring Boot 3, serving real-time transaction and KYC workflows.",
      "Reduced p95 API latency by 40% by identifying N+1 query patterns, adding composite indexes on high-traffic tables, and introducing response caching with Redis.",
      "Containerized services using Docker and configured CI/CD pipelines (GitHub Actions) to automate build, test, and deployment — cutting release time from hours to under 15 minutes.",
      "Collaborated with a 6-member engineering team on system design reviews, API contract definitions, and code reviews for production microservices.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-32 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-headline font-bold tracking-tighter md:sticky md:top-32 text-3xl md:text-5xl"
            >
              Professional <br />
              <span className="text-secondary">Experience</span>
            </motion.h2>
          </div>

          <div className="md:col-span-8 space-y-6 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 md:p-8 bg-surface-container-high rounded-lg border-l-4 border-secondary hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-6 gap-3 md:gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-on-surface">{exp.role}</h3>
                    <p className="text-secondary font-label tracking-widest text-xs mt-1 uppercase">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-label text-[10px] text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 md:space-y-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 md:gap-4">
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
