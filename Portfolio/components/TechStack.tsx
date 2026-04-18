"use client";

import { motion } from "motion/react";

const technologies = [
  { name: "JAVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SPRING BOOT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "DOCKER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MONGODB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "TAILWIND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-xs tracking-[0.2em] text-secondary uppercase mb-12 text-center opacity-60">
          Standardized Tech Stack
        </h2>

        {/* Mobile (tes): 3-col grid. Desktop (desktp): flex row */}
        <div className="grid grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-center md:items-center md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tech.icon} alt={tech.name} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
              <span className="font-label text-[9px] md:text-[10px] text-on-surface-variant tracking-wider text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
