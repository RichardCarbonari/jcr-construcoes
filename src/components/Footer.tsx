"use client";

import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const url = `https://wa.me/5519989166141?text=${message}`;
    const win = window.open(url, '_blank');
    if (win) win.focus();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4">
        {/* Grid de informações */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Logo e Sobre */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Logo
            </Link>
            <p className="text-sm">
              Transformando sonhos em realidade com excelência em construção civil.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-primary-400 mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-primary-400 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-primary-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-primary-400 mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="tel:+5519989166141" 
                  className="hover:text-primary-400 transition-colors"
                >
                  (19) 98916-6141
                </a>
              </li>
              <li>
                <a 
                  href="mailto:jcrconstrucoes@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  jcrconstrucoes@gmail.com
                </a>
              </li>
              <li> Limeira - SP</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-400 mb-4">Fale Conosco</h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full gap-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg hover:shadow-xl transition-all font-semibold"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-gray-800 py-6 text-sm text-center">
          © {currentYear} Sua Empreiteira. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
} 