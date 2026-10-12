# Teste Econverse

Projeto de uma página de e-commerce desenvolvido como parte do processo seletivo da Econverse. A interface reúne navegação por categorias, vitrines de produtos, banners de parceiros, inscrição na newsletter e rodapé institucional, com foco em uma experiência visual responsiva e interativa.

## Funcionalidades

- Cabeçalho com menu selecionável, campo de busca e atalhos para pedidos, favoritos, usuário e carrinho.
- Banner principal com chamada para ação.
- Categorias com ícones e destaque da categoria selecionada.
- Abas e carrosséis de produtos com navegação por setas.
- Cards com preço, condição de parcelamento e frete grátis.
- Modal com detalhes do produto e controle de quantidade.
- Banners de parceiros.
- Formulário de newsletter com validação dos campos e confirmação visual de envio. O envio é demonstrativo; não há integração com um serviço de mailing.
- Links sem destino real usam `href="#"` como placeholder.
- Efeitos de hover e foco para indicar elementos interativos.

## Tecnologias

- React e TypeScript
- Vite
- Sass/SCSS
- Oxlint

## Como executar

Abra o terminal na pasta `teste-front` e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Outros comandos disponíveis:

```bash
npm run build    # verifica os tipos TypeScript e gera a versão de produção
npm run lint     # executa o Oxlint
npm run preview  # serve localmente a versão de produção gerada
```

## Produtos e API

A vitrine carrega os produtos do endpoint da Econverse. Durante o desenvolvimento, o Vite encaminha as requisições de `/api/products` para a API externa por meio do proxy configurado em `vite.config.ts`.

O preço antigo exibido nos cards é apenas demonstrativo: quando a API não fornece `oldPrice`, ele é calculado como 10% acima do preço atual. A parcela apresentada também é demonstrativa, calculada em duas vezes sem juros.

O proxy está configurado no servidor de desenvolvimento do Vite; um ambiente de produção precisa de uma solução própria para encaminhar as requisições à API.

## Organização dos arquivos

### Inicialização e composição

- `src/main.tsx` — ponto de entrada; carrega os estilos globais e monta a aplicação React.
- `src/App.tsx` — compõe as seções e define a ordem em que aparecem na página.
- `index.html` — documento HTML inicial, título da página, favicon e carregamento da fonte Poppins.

### Componentes da interface

Cada componente visual fica em `src/components/`. Os arquivos `.tsx` cuidam da estrutura e do comportamento; os arquivos `.scss` correspondentes cuidam da apresentação.

- `Header.tsx` / `Header.scss` — benefícios, logo, busca, ícones e menu do cabeçalho.
- `Hero.tsx` / `Hero.scss` — banner principal e chamada para ação.
- `Categories.tsx` / `Categories.scss` — lista de categorias e estado selecionado.
- `ProductSection.tsx` / `ProductSection.scss` — busca de produtos, abas, vitrines, carrosséis e modal. Também permite inserir conteúdo entre os carrosséis.
- `ProductCard.tsx` / `ProductCard.scss` — card individual do produto, preços, parcelamento, frete e ação para abrir os detalhes.
- `Partners.tsx` / `Partners.scss` — banners de parceiros e seus links.
- `Newsletter.tsx` / `Newsletter.scss` — formulário e mensagem de confirmação da newsletter.
- `Footer.tsx` / `Footer.scss` — informações institucionais, links e redes sociais.

### Estilos, utilitários e recursos

- `src/index.scss` — reset básico e estilos globais da página.
- `src/styles/_variables.scss` — variáveis Sass compartilhadas, como cores, tipografia e largura máxima.
- `src/utils/formatPrice.ts` — formata números como valores em reais (BRL).
- `src/assets/img/` — imagens do banner, logo e parceiros.
- `src/assets/icons/` — ícones do cabeçalho, benefícios, categorias e redes sociais.

### Configuração

- `package.json` e `package-lock.json` — dependências e scripts npm do projeto.
- `vite.config.ts` — plugin React e proxy de desenvolvimento para a API de produtos.
- `tsconfig.json`, `tsconfig.app.json` e `tsconfig.node.json` — configurações do TypeScript para a aplicação e para o Vite.
- `.oxlintrc.json` — regras do Oxlint.
- `.gitignore` — arquivos e pastas ignorados pelo Git, como `node_modules` e `dist`.
