# Instruções para Gerar Favicons

Para resolver o problema do favicon e ter um ícone adequado em todos os navegadores e dispositivos, siga estas etapas:

1. Acesse um gerador de favicon online como [Favicon.io](https://favicon.io/) ou [RealFaviconGenerator](https://realfavicongenerator.net/)

2. Faça upload do arquivo `/public/images/logo/log0.JPG`

3. O gerador criará vários arquivos. Você precisará de:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png

4. Coloque estes arquivos na pasta `/public` do projeto

Isso resolverá o problema do "triângulo" no favicon e garantirá que a logo apareça corretamente em todos os navegadores.

## Especificações Recomendadas

- favicon.ico: 16x16, 32x32 e 48x48 pixels
- favicon-16x16.png: 16x16 pixels
- favicon-32x32.png: 32x32 pixels

## Dicas

- Use fundo transparente se possível
- Mantenha o design simples e reconhecível em tamanhos pequenos
- Teste em diferentes navegadores após a implementação 