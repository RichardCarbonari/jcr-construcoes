"use client";

import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-gray-900 shadow-lg hover:shadow-xl transition-all"
      onClick={() => {
        const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
        const url = `https://wa.me/5519989166141?text=${message}`;
        window.open(url, '_blank')?.focus();
      }}
    >
      Solicitar Orçamento
    </Button>
  );
} 