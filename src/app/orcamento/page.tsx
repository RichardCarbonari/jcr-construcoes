"use client";

import { OrcamentoForm } from "@/components/OrcamentoForm";

export default function OrcamentoPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">
          Calculadora de Orçamento
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <OrcamentoForm />
        </div>
      </div>
    </main>
  );
} 