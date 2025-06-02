export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Troca de Piso - Área da Piscina",
    description: "Projeto de renovação completa da área da piscina, incluindo remoção do piso antigo e instalação do novo revestimento. O trabalho foi executado com materiais antiderrapantes específicos para áreas molhadas, garantindo segurança e beleza ao espaço de lazer.",
    imageUrl: "/images/portfolio/portifolio_01/IMG_0914.jpg",
    gallery: [
      "/images/portfolio/portifolio_01/IMG_0914.jpg",
      "/images/portfolio/portifolio_01/IMG_0915.jpg",
      "/images/portfolio/portifolio_01/IMG_0916.jpg"
    ]
  },
  {
    id: 2,
    title: "Troca de Piso - Garagem",
    description: "Revitalização completa do piso da garagem com instalação de revestimento especial de alta resistência. O projeto incluiu preparação adequada da base e aplicação de material durável, ideal para suportar o tráfego de veículos e garantir maior vida útil ao piso.",
    imageUrl: "/images/portfolio/portifolio_02/IMG_0910.jpg",
    gallery: [
      "/images/portfolio/portifolio_02/IMG_0910.jpg",
      "/images/portfolio/portifolio_02/IMG_0913.jpg"
    ]
  },
  {
    id: 3,
    title: "Reforma de Banheiro",
    description: "Transformação completa do banheiro, incluindo troca de revestimentos, louças e metais. O projeto contemplou a modernização do ambiente com acabamentos de primeira linha, garantindo funcionalidade e design atual ao espaço.",
    imageUrl: "/images/portfolio/portifolio_03/IMG_0917.jpg",
    gallery: [
      "/images/portfolio/portifolio_03/IMG_0917.jpg",
      "/images/portfolio/portifolio_03/IMG_0920.jpg"
    ]
  },
  {
    id: 4,
    title: "Reforma de Cozinha",
    description: "Projeto de renovação total da cozinha, com foco em otimização do espaço e modernização do ambiente. A reforma incluiu troca de revestimentos, instalação de novos armários e atualização da parte elétrica e hidráulica, criando um ambiente mais funcional e contemporâneo.",
    imageUrl: "/images/portfolio/portifolio_04/IMG_0918.jpg",
    gallery: [
      "/images/portfolio/portifolio_04/IMG_0918.jpg"
    ]
  },
  {
    id: 5,
    title: "Reforma de Telhado",
    description: "Projeto completo de reforma estrutural do telhado, incluindo substituição de toda a estrutura de madeira e instalação de novas telhas. O trabalho foi executado com materiais de alta qualidade, garantindo melhor isolamento térmico e proteção contra infiltrações.",
    imageUrl: "/images/portfolio/portifolio_05/IMG_0906.jpg",
    gallery: [
      "/images/portfolio/portifolio_05/IMG_0906.jpg",
      "/images/portfolio/portifolio_05/IMG_0907.jpg",
      "/images/portfolio/portifolio_05/IMG_7591.jpg",
      "/images/portfolio/portifolio_05/IMG_7594.jpg",
      "/images/portfolio/portifolio_05/IMG_7621.jpg"
    ]
  },
  {
    id: 6,
    title: "Troca de Pisos - Apartamento",
    description: "Renovação completa do piso de todo o apartamento, incluindo remoção cuidadosa do revestimento antigo e instalação do novo piso. O projeto foi executado com técnicas modernas de assentamento, garantindo um acabamento perfeito e valorização do imóvel.",
    imageUrl: "/images/portfolio/portifolio_06/Img_pisos.jpeg",
    gallery: [
      "/images/portfolio/portifolio_06/Img_pisos.jpeg",
      "/images/portfolio/portifolio_06/img_pisos2.jpeg"
    ]
  }
]; 