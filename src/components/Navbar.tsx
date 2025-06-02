"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const url = `https://wa.me/5519989166141?text=${message}`;
    const win = window.open(url, '_blank');
    if (win) win.focus();
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('#')) {
      if (pathname !== '/') {
        router.push('/');
        // Aguarda a navegação e então rola para a seção
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(path);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="relative w-32 h-12 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <Image
              src="/images/logo/log0.JPG"
              alt="Logo da Empresa"
              fill
              sizes="(max-width: 128px) 100vw, 128px"
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => handleNavigation('/')}
              className="px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-900"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('/portfolio')}
              className="px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-900"
            >
              Portfólio
            </button>
            <button 
              onClick={() => handleNavigation('#servicos')}
              className="px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-900"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavigation('#sobre')}
              className="px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-900"
            >
              Sobre
            </button>
            <div className="pl-4">
              <Button 
                className="bg-[#00b8ff] hover:bg-[#009ee0] text-white shadow-lg hover:shadow-xl transition-all"
                onClick={handleWhatsAppClick}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-2">
                <button
                  onClick={() => handleNavigation('/')}
                  className="block w-full text-left px-4 py-2 hover:bg-primary-50 rounded-lg transition-colors text-gray-900"
                >
                  Início
                </button>
                <button
                  onClick={() => handleNavigation('/portfolio')}
                  className="block w-full text-left px-4 py-2 hover:bg-primary-50 rounded-lg transition-colors text-gray-900"
                >
                  Portfólio
                </button>
                <button
                  onClick={() => handleNavigation('#servicos')}
                  className="block w-full text-left px-4 py-2 hover:bg-primary-50 rounded-lg transition-colors text-gray-900"
                >
                  Serviços
                </button>
                <button
                  onClick={() => handleNavigation('#sobre')}
                  className="block w-full text-left px-4 py-2 hover:bg-primary-50 rounded-lg transition-colors text-gray-900"
                >
                  Sobre
                </button>
                <div className="pt-2 px-4">
                  <Button 
                    className="w-full bg-[#00b8ff] hover:bg-[#009ee0] text-white shadow-lg"
                    onClick={handleWhatsAppClick}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 