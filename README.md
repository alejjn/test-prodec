# Fala Kids — Kit Completo de Alfabetização Infantil

**Material educativo 100% imprimível para crianças de 3 a 7 anos**

Aprenda a ler usando o método fonético — o mesmo usado nos países com maior índice de alfabetização do mundo.

## 📚 O que tem no produto

### Produto Principal
- **Volume 1 — Bastão**: Grafismo Fonético + sílabas simples e complexas em letra bastão (92 páginas)
- **Volume 2 — Cursiva**: Letra cursiva completa + fluência leitora (73 páginas)

### Bônus inclusos
- Separe as Sílabas — fichas de treino silábico
- Jogo de Fichas Silábicas — aprendizado em formato de jogo
- Monte seu Pôster Gigante — painel foto booth imprimível com 5 personagens
- Fluência Leitora — textos progressivos para leitura guiada
- Tiras de Leitura — frases curtas para treino diário
- 50 Textos Fatiados — textos divididos por sílabas

### Diferenciais
✅ Mais de 170 páginas de atividades progressivas  
✅ Imprime quantas vezes quiser, em casa  
✅ Método fonético comprovado, aprovado por pedagogas  
✅ 20 minutos por dia é suficiente  
✅ Garantia de 7 dias  

## 🚀 Estrutura do Projeto

```
fala-kids/
├── index.html           # Página principal (React root)
├── css/
│   └── style.css       # Estilos da landing page
├── js/
│   ├── tweaks-panel.js # Painel de customização em tempo real
│   └── app.js          # Componentes React principais
├── package.json        # Dependências do projeto
├── vercel.json         # Configuração para Vercel
├── .gitignore          # Arquivos ignorados no Git
└── README.md           # Este arquivo
```

## 💻 Desenvolvimento Local

### Pré-requisitos
- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Um servidor HTTP simples (Python, Node.js, etc.)

### Começar
1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto
3. Execute um servidor HTTP:

```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000

# Node.js (com http-server)
npx http-server -p 3000
```

4. Abra `http://localhost:3000` no seu navegador

## 🎨 Design System

### Paletas de Cores
Quatro paletas pré-configuradas e customizáveis em tempo real através do painel de tweaks:

- **Padrão**: Indigo (#5b3bff) + Rosa (#ffb6d9)
- **Opção 2**: Uva profunda (#2a1380) + Amarelo (#ffd166)
- **Opção 3**: Verde floresta (#0e7d6a) + Rosa blossom (#ffc7e8)
- **Opção 4**: Tomate (#e85d75) + Creme (#fff1a8)

### Tipografia
- **Script**: Caveat Brush (elementos decorativos)
- **Headline & Body**: Nunito (títulos e texto)
- **Navegação**: Fredoka (UI elements)

### Componentes Customizáveis
- **Paleta de cores**: 4 opções diferentes
- **Variantes de copy**: default, short, professional
- **Densidade de decorações**: minimal, regular, lots
- **Visibilidade da navegação**: toggle on/off

## 🚀 Deploy para Vercel

### Opção 1: Git + Vercel Dashboard
1. Faça push do repositório para GitHub/GitLab/Bitbucket
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Vercel detectará a configuração automaticamente
6. Clique em "Deploy"

### Opção 2: Vercel CLI
```bash
# Instale Vercel CLI
npm i -g vercel

# Execute no diretório do projeto
vercel
```

### Opção 3: Drag & Drop
1. Acesse [vercel.com](https://vercel.com)
2. Arraste a pasta do projeto para o painel
3. Pronto!

## 📱 Responsividade

O design é totalmente responsivo com breakpoint em **980px**:
- Desktop (980px+): Layout em 2 colunas
- Tablet & Mobile (<980px): Layout em 1 coluna

## 🎛️ Painel de Tweaks

Clique no botão roxo 🎨 no canto inferior direito para abrir o painel de customização em tempo real:

- **Escolha a paleta**: Selecione entre 4 paletas de cores diferentes
- **Copy Variant**: Mude o texto entre 3 variantes
- **Decoração**: Ajuste a densidade de elementos decorativos
- **Top Nav**: Toggle da navegação superior

As mudanças são instantâneas e perfeitas para design iterations.

## 🔧 Tecnologias

- **React 18**: Loaded via CDN (Unpkg)
- **Babel Standalone**: JSX transpilation no navegador
- **CSS3**: Grid, Flexbox, animations, custom properties
- **SVG**: Elementos decorativos vetoriais

## 📄 Licença

Este projeto é licenciado sob a licença MIT.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato em pauloallejh@gmail.com

---

**Desenvolvido com ❤️ para ajudar crianças a aprender a ler**
