export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  completionDate: string;
  location?: string;
  area?: string;
  duration?: string;
  features?: string[];
  gallery?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Residência Moderna",
    description: "Construção de casa moderna com acabamento premium e design contemporâneo.",
    imageUrl: "/images/portfolio/portifolio_01/IMG_0914.jpg",
    category: "Construção",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_01/IMG_0914.jpg",
      "/images/portfolio/portifolio_01/IMG_0915.jpg",
      "/images/portfolio/portifolio_01/IMG_0916.jpg"
    ]
  },
  {
    id: 2,
    title: "Projeto Residencial",
    description: "Projeto residencial com foco em conforto e funcionalidade.",
    imageUrl: "/images/portfolio/portifolio_02/IMG_0910.jpg",
    category: "Projeto Residencial",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_02/IMG_0910.jpg",
      "/images/portfolio/portifolio_02/IMG_0913.jpg"
    ]
  },
  {
    id: 3,
    title: "Reforma Completa",
    description: "Reforma completa com transformação total do ambiente.",
    imageUrl: "/images/portfolio/portifolio_03/IMG_0917.jpg",
    category: "Reforma",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_03/IMG_0917.jpg"
    ]
  },
  {
    id: 4,
    title: "Projeto Comercial",
    description: "Projeto comercial com foco em funcionalidade e estética moderna.",
    imageUrl: "/images/portfolio/portifolio_04/IMG_0918.jpg",
    category: "Comercial",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_04/IMG_0918.jpg"
    ]
  },
  {
    id: 5,
    title: "Design de Interiores",
    description: "Projeto de interiores com acabamento sofisticado.",
    imageUrl: "/images/portfolio/portifolio_05/IMG_0906.jpg",
    category: "Interiores",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_05/IMG_0906.jpg",
      "/images/portfolio/portifolio_05/IMG_0907.jpg"
    ]
  },
  {
    id: 6,
    title: "Projeto Personalizado",
    description: "Projeto personalizado atendendo às necessidades específicas do cliente.",
    imageUrl: "/images/portfolio/portifolio_06/IMG_0919.jpg",
    category: "Personalizado",
    completionDate: "2024",
    gallery: [
      "/images/portfolio/portifolio_06/IMG_0919.jpg"
    ]
  }
]; 