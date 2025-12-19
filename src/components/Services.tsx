"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Développement d'Applications Complexes",
    description: "Conception et réalisation de plateformes web sur-mesure (SaaS, ERP, Dashboards) avec une stack moderne et performante."
  },
  {
    title: "Audit & Refactoring",
    description: "Analyse de codebases existantes, identification des goulots d'étranglement et refonte pour améliorer la performance et la scalabilité."
  },
  {
    title: "Architecture Technique",
    description: "Définition de l'architecture logicielle et infrastructure (Cloud/On-premise) adaptée aux besoins business et contraintes de sécurité."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-light mb-12">
          <span className="font-mono text-turquoise mr-2">03.</span> Services
          <span className="ml-4 h-px bg-slate/30 flex-grow max-w-xs"></span>
        </h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-turquoise/30 pl-6 hover:border-turquoise transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-light mb-2">{service.title}</h3>
              <p className="text-slate max-w-2xl">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
