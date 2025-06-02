import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Construction className="w-24 h-24 mx-auto mb-8 text-primary" />
        <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Desculpe, mas a página que você está procurando não existe ou foi removida.
        </p>
        <Button asChild>
          <Link href="/">Voltar para o Início</Link>
        </Button>
      </div>
    </main>
  );
} 