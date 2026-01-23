# 🚀 Portfólio Jorge Luis

Portfólio profissional moderno com animações elegantes, sistema de espaçamento consistente e contadores animados. Desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características Principais

- **🎨 Design Moderno**: Interface elegante com tema escuro profissional e gradientes roxo/azul
- **✨ Animações Suaves**: Implementadas com Framer Motion para experiência fluida
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **⚡ Performance Otimizada**: Carregamento rápido e otimizado
- **🎯 Contadores Animados**: Métricas com animação de contagem progressiva
- **📐 Sistema de Espaçamento**: Grid de 8px para consistência visual
- **🔗 Integração Gmail**: Links diretos para composição de email

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript  
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário

### Animações & UI
- **Framer Motion** - Biblioteca de animações avançadas
- **Lucide React** - Ícones modernos e consistentes
- **Intersection Observer** - Detecção de viewport para animações

### Minhas Habilidades Destacadas
- **Frontend**: JavaScript, Vue.js, Quasar, React.js, TypeScript, HTML, CSS
- **Backend & Data**: Python, SQL, PySpark, Data Lakes, ETL, Pandas  
- **Ferramentas**: Git, GitHub, Node.js, Figma, Material UI

## 🎯 Seções do Portfólio

### 1. **Hero Section**
- Apresentação principal com animações de entrada
- Avatar personalizado com fallback inteligente
- Links sociais com hover effects
- Scroll indicator animado

### 2. **Sobre Mim**
- Grid responsivo de habilidades (18 tecnologias)
- Contadores animados: 50+ Projetos, 2+ Anos, 18+ Tecnologias
- Descrição profissional personalizada
- Animações escalonadas nos cards

### 3. **Projetos** 
- Portfólio dividido em categorias
- Cards com hover effects
- Layout em grid responsivo

### 4. **Contato**
- Formulário de contato funcional
- Cards de informações com animações
- Integração direta com Gmail
- Links sociais interativos

### 5. **Footer**
- Design minimalista e elegante
- Espaçamento otimizado (mt-40)
- Links sociais com tema consistente

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/luissouza9251/portfolio-jorge.git

# Entre na pasta
cd portfolio-jorge

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
npm run test     # Executa testes
npm run lint     # Executa linter
```

## 🎨 Sistema de Design

### Paleta de Cores
- **Gradiente Principal**: Roxo (#8B5CF6) → Azul (#3333FF)
- **Acentos**: Verde (#10B981) para email, Azul (#3B82F6) para LinkedIn
- **Neutros**: Cinzas com transparência para profundidade

### Espaçamento (Grid 8px)
```css
- Micro: 4px (space-1)
- Small: 8px (space-2)  
- Medium: 16px (space-4)
- Large: 24px (space-6)
- XL: 32px (space-8)
- XXL: 48px (space-12)
- Section: 80px (space-20)
```

### Animações
Organizadas em `src/animations/variants.ts`:
- **fadeInUp**: Entrada com fade e movimento vertical
- **staggerContainer**: Animação em sequência para listas
- **Hover Effects**: Scale, rotação e mudanças de cor
- **Contadores**: Animação progressiva com easing

## 🔧 Funcionalidades Especiais

### Contadores Animados
- **Intersection Observer** para trigger na viewport
- **RequestAnimationFrame** para 60fps
- **Easing function** para movimento natural
- **Fallback inteligente** se JavaScript falhar

### Avatar Inteligente
- **Carregamento de imagem** com fallback para iniciais
- **Estrutura responsiva** que se adapta ao container
- **Gradiente de moldura** sempre presente

### Integração Gmail
```javascript
// Link direto para composição no Gmail
href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com"
```

## 📁 Estrutura do Projeto

```
portfolio-jorge/
├── src/
│   ├── components/          # Componentes React
│   │   ├── About.tsx       # Seção sobre + habilidades
│   │   ├── Avatar.tsx      # Avatar com fallback
│   │   ├── CountUpCard.tsx # Cards com contadores
│   │   ├── Hero.tsx        # Seção principal
│   │   └── ...
│   ├── animations/         # Variantes Framer Motion
│   ├── hooks/             # Hooks customizados
│   │   └── useCountUp.ts  # Hook para contadores
│   └── types/             # Definições TypeScript
├── public/
│   └── img/               # Imagens do projeto
└── ...
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório GitHub na Vercel
2. Deploy automático configurado
3. Preview deployments para cada PR

### Netlify
```bash
npm run build
# Upload da pasta 'dist'
```

## 📊 Métricas do Projeto

- **Performance**: 95+ no Lighthouse
- **Acessibilidade**: 100 no Lighthouse  
- **SEO**: 95+ no Lighthouse
- **Responsividade**: 100% em todos os dispositivos
- **Animações**: 60fps consistente

## 📱 Contato

- **📧 Email**: [jorgesouza9251@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com)
- **💼 GitHub**: [github.com/luissouza9251](https://github.com/luissouza9251)
- **🔗 LinkedIn**: [jorge-luis-89b546252](https://www.linkedin.com/in/jorge-luis-89b546252/)
- **📍 Localização**: Cuiabá - MT

## 🎯 Próximas Melhorias

- [ ] Modo claro/escuro toggle
- [ ] Blog integrado
- [ ] Mais projetos na galeria
- [ ] Animações de página
- [ ] PWA support

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**✨ Desenvolvido com ❤️ por Jorge Luis Gonçalves de Souza**

*Portfólio moderno, responsivo e otimizado para mostrar minhas habilidades em desenvolvimento frontend e ciência de dados.*