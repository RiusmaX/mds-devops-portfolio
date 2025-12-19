"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const principles = [
  {
    title: "Clean Code",
    icon: <Code2 className="text-turquoise" size={32} />,
    description: "Le code est lu bien plus souvent qu'il n'est écrit. Je privilégie la lisibilité et la maintenabilité pour réduire la dette technique."
  },
  {
    title: "Architecture SOLID",
    icon: <Layers className="text-turquoise" size={32} />,
    description: "Des systèmes découplés et extensibles. Chaque composant a une responsabilité unique, facilitant les tests et les évolutions futures."
  },
  {
    title: "Approche KISS",
    icon: <Zap className="text-turquoise" size={32} />,
    description: "Keep It Simple, Stupid. La complexité est l'ennemie de la fiabilité. Je cherche toujours la solution la plus simple et élégante."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-light mb-12">
          <span className="font-mono text-turquoise mr-2">02.</span> Philosophie
          <span className="ml-4 h-px bg-slate/30 flex-grow max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-navy-light p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-light mb-4">{item.title}</h3>
              <p className="text-slate leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
