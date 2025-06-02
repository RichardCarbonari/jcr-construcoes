"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary-500/10 via-primary-500/20 to-accent-500/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
} 