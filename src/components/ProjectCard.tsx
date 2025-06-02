"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  completionDate: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  category,
  completionDate,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/20 shadow-lg" 
            asChild
          >
            <Link href={`/portfolio/${id}`}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
      <Link href={`/portfolio/${id}`} className="block p-6 hover:bg-primary-50/50 transition-colors">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-primary-600 px-3 py-1 bg-primary-100 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          Concluído em: {completionDate}
        </div>
      </Link>
    </motion.div>
  );
} 