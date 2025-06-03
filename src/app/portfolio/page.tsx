"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Nosso Portfólio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Com mais de 10.000 m² construídos, nosso portfólio é prova do nosso trabalho sólido e da confiança dos nossos clientes.
            Realizamos projetos para empresas de renome como Burigotto, BGL, Bolsão de Cereais, e muitos outros.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
} 