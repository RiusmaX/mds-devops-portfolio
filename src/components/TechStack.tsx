"use client";

import { motion } from "framer-motion";

const technologies = [
  "React / Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "AWS / DevOps"
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-light mb-12">
          <span className="font-mono text-turquoise mr-2">01.</span> Stack Technique
          <span className="ml-4 h-px bg-slate/30 flex-grow max-w-xs"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-light p-4 rounded border border-slate/10 hover:border-turquoise/50 transition-colors text-center"
            >
              <span className="font-mono text-slate-light">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
