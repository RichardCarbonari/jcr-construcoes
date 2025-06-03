import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "./ProjectGallery";
import WhatsAppButton from "./WhatsAppButton";

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectDetails({ params }: Props) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Navegação */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="text-gray-900 hover:bg-primary-50">
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Voltar ao Portfólio
            </Link>
          </Button>
        </div>

        {/* Cabeçalho */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">{project.title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Galeria */}
        <ProjectGallery project={project} />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Gostou deste projeto? Vamos criar o seu!
          </h2>
          <WhatsAppButton />
        </div>
      </div>
    </main>
  );
} 