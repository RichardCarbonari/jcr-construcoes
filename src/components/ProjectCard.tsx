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
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </motion.div>
  );
} 