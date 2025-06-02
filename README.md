# Site da Empreiteira

Um site moderno e profissional para uma empreiteira, com funcionalidade de geração de orçamentos em PDF.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (para animações)
- jsPDF (para geração de PDFs)

## Funcionalidades

- Design moderno e responsivo
- Navegação intuitiva
- Formulário de orçamento automático
- Geração de PDF com detalhes do orçamento
- Interface otimizada para dispositivos móveis

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_DIRETORIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em `http://localhost:3000`

## Estrutura do Projeto

```
src/
  ├── app/                    # Páginas da aplicação
  │   ├── page.tsx           # Página inicial
  │   └── orcamento/         # Página de orçamentos
  ├── components/            # Componentes reutilizáveis
  │   ├── Navbar.tsx        # Navegação
  │   ├── OrcamentoForm.tsx # Formulário de orçamento
  │   └── ui/               # Componentes de UI
  └── styles/               # Estilos globais
```

## Personalização

Para personalizar os preços base dos serviços, edite o objeto `PRECOS_BASE` no arquivo `src/components/OrcamentoForm.tsx`.

## Licença

Este projeto está sob a licença MIT.
