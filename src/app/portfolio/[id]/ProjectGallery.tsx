"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  gallery?: string[];
}

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
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
  );
} 