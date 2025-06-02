# Documentação do Site JCR Construções

## Estrutura do Site

### Páginas Principais
- `src/app/page.tsx`: Página inicial
- `src/app/portfolio/page.tsx`: Página de portfólio
- `src/app/portfolio/[id]/page.tsx`: Páginas individuais de projetos

### Componentes Principais
- `src/components/Navbar.tsx`: Barra de navegação
- `src/components/ServiceCard.tsx`: Cards de serviços
- `src/components/ProjectCard.tsx`: Cards de projetos
- `src/components/Footer.tsx`: Rodapé

### Dados
- `src/data/projects.ts`: Lista de projetos do portfólio

## Como Fazer Alterações Comuns

### 1. Textos do Site
Os principais textos do site estão em:
- `public/copy.txt`: Arquivo central com todos os textos
- Para atualizar, modifique o arquivo e atualize as páginas correspondentes

### 2. Imagens
- Imagens do banner: `public/images/general/`
- Imagens do portfólio: `public/images/portfolio/`
- Logo: `public/images/logo/`

### 3. Cores e Estilos
- Cores principais:
  - Azul principal: #0066cc
  - Azul hover: #004d99
  - Textos escuros: text-gray-900
  - Textos claros: text-gray-200

### 4. Portfólio
Para adicionar novos projetos:
1. Adicione as imagens em `public/images/portfolio/`
2. Atualize o arquivo `src/data/projects.ts`
3. Formato do projeto:
```typescript
{
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  category: string,
  completionDate: string,
  gallery: string[]
}
```

### 5. Serviços
Para modificar os serviços na página inicial:
1. Localize a seção de serviços em `src/app/page.tsx`
2. Cada serviço usa o componente `ServiceCard` com:
   - Icon: ícone do serviço
   - title: título do serviço
   - description: descrição do serviço

### 6. Contato
O botão de WhatsApp usa o número: 5519989166141
Para alterar:
1. Procure por `handleWhatsAppClick` nos arquivos
2. Atualize o número na URL

### 7. SEO e Metadados
Metadados do site em `src/app/layout.tsx`:
- Título
- Descrição
- Palavras-chave

## Animações
O site usa Framer Motion para animações:
- Fade in ao rolar: `whileInView`
- Fade in na entrada: `initial` e `animate`
- Hover em botões: `whileHover`

## Responsividade
Classes principais:
- Mobile: padrão
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

## Manutenção
Para manter o site:
1. Mantenha os textos atualizados em `copy.txt`
2. Otimize imagens antes de fazer upload
3. Teste em diferentes dispositivos
4. Mantenha o portfólio atualizado

## Contato para Suporte
Para suporte técnico ou dúvidas sobre o site, entre em contato com a equipe de desenvolvimento. 