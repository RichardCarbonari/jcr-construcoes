"use client";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Building2, Hammer, MessageCircle, PaintBucket, Ruler, Users, Wrench } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import Image from "next/image";

export default function Home() {
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const url = `https://wa.me/5519989166141?text=${message}`;
    const win = window.open(url, '_blank');
    if (win) win.focus();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div 
          className="absolute inset-0 bg-[url('/images/general/banner.png')] bg-cover bg-center opacity-50"
        />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
              Qualidade e comprometimento
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
              Do início ao fim da sua obra
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-[#0066cc] hover:bg-[#004d99] text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle size={20} />
                  Solicitar Orçamento
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/portfolio">
                    Nossos Projetos
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Na JCR Construções, oferecemos mão de obra especializada para todas as etapas da sua obra. 
              Atuamos com excelência em obras residenciais, comerciais e industriais, sempre com mão de obra qualificada, 
              qualidade garantida e cumprimento rigoroso dos prazos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Building2}
              title="Alvenaria"
              description="Alvenaria e Alvenaria Estrutural com técnicas modernas e acabamento perfeito."
            />
            <ServiceCard
              Icon={Hammer}
              title="Estruturas"
              description="Estruturas, Lajes e Fundações executadas com precisão e segurança."
            />
            <ServiceCard
              Icon={PaintBucket}
              title="Acabamento"
              description="Acabamento de alta qualidade, incluindo Chapisco, Reboco e Contrapiso."
            />
            <ServiceCard
              Icon={Ruler}
              title="Carpintaria"
              description="Serviços especializados de carpintaria para sua obra."
            />
            <ServiceCard
              Icon={Wrench}
              title="Hidráulica"
              description="Instalações hidráulicas com qualidade e garantia."
            />
            <ServiceCard
              Icon={Users}
              title="Equipe Completa"
              description="Pedreiros qualificados, mestres de obra e especialistas em cada etapa."
            />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-secondary via-primary-900 to-accent-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Sobre Nós
            </h2>
            <div className="space-y-4 text-gray-200">
              <p>
                A JCR Construções nasceu de um sonho familiar e de uma vocação pela construção civil. 
                Fundada há mais de 15 anos por José Carlos Mano Rabelo, a empresa carrega no nome suas raízes e valores.
              </p>
              <p>
                Hoje é administrada por seu filho João, que desde 2018 vem ampliando a atuação da JCR 
                com visão de futuro e compromisso com a qualidade.
              </p>
              <p>
                Trabalhamos com transparência, responsabilidade e comprometimento, para que cada cliente 
                tenha não só uma obra bem executada, mas uma experiência de confiança e tranquilidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
