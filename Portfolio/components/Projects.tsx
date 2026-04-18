"use client";

import { ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "URL Shortener",
    type: "Backend System",
    description:
      "Scalable URL redirection system using Spring Boot and Redis for high-speed link resolution. Implements custom hashing algorithms to ensure collision-free performance.",
    tags: ["JAVA", "REDIS", "MONGODB"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    colSpan: "md:col-span-1",
    isLarge: false,
  },
  {
    title: "Task Queue Engine",
    type: "Infrastructure",
    description:
      "Distributed task processing engine designed for asynchronous background job management. Built for reliability and observability in large-scale system architectures.",
    tags: ["SPRING BOOT", "POSTGRES", "DOCKER"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    colSpan: "md:col-span-1",
    isLarge: false,
  },
  {
    title: "Style Sprint",
    type: "E-COMMERCE ROOT",
    description:
      "A high-performance e-commerce platform focusing on rapid browsing and checkout. Features a robust inventory management system and integrated payment gateways.",
    tags: ["REACT", "SPRING BOOT", "STRIPE API"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    colSpan: "md:col-span-2",
    isLarge: true,
  },
];

export default function Projects() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
          <div>
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">
              Portfolio / Artifacts
            </span>
            <h2 className="font-headline font-bold tracking-tighter mt-2 text-3xl md:text-5xl">
              Architecture Showcase
            </h2>
          </div>
          <p className="max-w-xs text-xs text-on-surface-variant leading-relaxed">
            A curated collection of system designs and full-stack implementations
            focusing on efficiency and throughput.
          </p>
        </div>

        {/* Grid — mobile: single col, desktop: 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                /* Large card — desktop: side-by-side, mobile: stacked */
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  <div className="lg:col-span-3 aspect-video lg:aspect-auto relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-highest hidden lg:block" />
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-10 flex flex-col justify-center space-y-4 md:space-y-8">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="font-headline text-2xl md:text-4xl font-bold tracking-tighter">
                        {project.title}
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold rounded uppercase whitespace-nowrap">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-label text-secondary px-3 py-1 bg-secondary/10 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-fit flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-xs rounded-lg hover:shadow-[0_0_20px_rgba(177,161,255,0.3)] transition-all active:scale-95">
                      View Architecture <Terminal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Small card */
                <>
                  <div className="aspect-video overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent" />
                  </div>
                  <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tighter">
                        {project.title}
                      </h3>
                      <button className="h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed line-clamp-3 text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface-container-low text-[10px] font-label text-primary rounded border border-primary/20 uppercase"
                        >
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
