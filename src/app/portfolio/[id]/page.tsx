"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Ruler, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useCallback } from "react";
import { use } from "react";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const id = use(Promise.resolve(params.id));
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const url = `https://wa.me/5519989166141?text=${message}`;
    const win = window.open(url, '_blank');
    if (win) win.focus();
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Navegação */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="text-gray-900 hover:bg-primary-50">
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Voltar ao Portfólio
            </Link>
          </Button>
        </motion.div>

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">{project.title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12"
        >
          {/* Imagem Principal */}
          <div className="lg:col-span-8 relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.gallery?.[selectedImage] || project.imageUrl}
              alt={`${project.title} - Imagem ${selectedImage + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Miniaturas */}
          <div className="lg:col-span-4 space-y-6">
            {project.gallery && (
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden shadow-md ${
                      selectedImage === index
                        ? "ring-2 ring-primary-600"
                        : "hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Gostou deste projeto? Vamos criar o seu!
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-gray-900 shadow-lg hover:shadow-xl transition-all"
            onClick={handleWhatsAppClick}
          >
            Solicitar Orçamento
          </Button>
        </motion.div>
      </div>
    </main>
  );
} 