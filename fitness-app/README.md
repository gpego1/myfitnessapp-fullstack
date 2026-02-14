# 💪 FitForce - Aplicativo Fitness

Aplicativo fitness moderno e responsivo construído com React + Vite, focado em design profissional e experiência do usuário.

## 🎨 Design

- **Tema**: Dark Fitness Brutalist
- **Cores**: Preto/Cinza escuro com detalhes em Verde Néon (#00ff88) e Laranja (#ff6b35)
- **Tipografia**: 
  - Display: Bebas Neue (títulos)
  - Body: Outfit (textos)
- **Estilo**: Cards com sombra, botões arredondados, animações suaves, layout mobile-first

## ✨ Funcionalidades

### Páginas
- ✅ **Login** - Autenticação de usuário
- ✅ **Registro** - Cadastro de novo usuário
- ✅ **Dashboard** - Visão geral com estatísticas
- ✅ **Treinos** - Lista de treinos com filtros
- ✅ **Detalhes do Treino** - Informações completas e exercícios
- ✅ **Exercícios** - Banco de exercícios com busca e filtros
- ✅ **Perfil** - Gerenciamento de informações pessoais

### Componentes Reutilizáveis
- `Button` - Botão com variantes (primary, secondary, outline, danger)
- `Input` - Campo de entrada com label
- `Card` - Container genérico com efeitos hover
- `Navbar` - Navegação principal com links ativos

### Dados Mockados
- 6 treinos com categorias diversas
- 30 exercícios com músculos-alvo e equipamentos

## 🚀 Como Executar

### Instalação
```bash
cd fitness-app
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
fitness-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.module.css
│   │   ├── Input/
│   │   ├── Card/
│   │   └── Navbar/
│   ├── pages/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Dashboard/
│   │   ├── Workouts/
│   │   ├── WorkoutDetails/
│   │   ├── Exercises/
│   │   └── Profile/
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── mock/
│   │   ├── workouts.js
│   │   └── exercises.js
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🎯 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **CSS Modules** - Estilização isolada
- **JavaScript** - Sem TypeScript

## 📱 Responsividade

O aplicativo é totalmente responsivo com breakpoints em:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🎨 Características de Design

1. **Animações suaves** - Fade in, slide in, hover effects
2. **Gradientes vibrantes** - Verde néon e laranja
3. **Sombras profundas** - Depth e hierarquia visual
4. **Tipografia bold** - Títulos impactantes
5. **Cards interativos** - Hover states elaborados
6. **Micro-interações** - Feedback visual em botões e inputs

## 🔒 Observações

- **Dados mockados**: Não há integração com backend real
- **Autenticação**: Login/registro são apenas de demonstração
- **Persistência**: Dados não são salvos entre sessões

## 👨‍💻 Desenvolvimento

Projeto desenvolvido seguindo:
- Componentização adequada
- Separação de responsabilidades
- CSS Modules para isolamento de estilos
- Mobile-first approach
- Boas práticas de React

---

**FitForce** - Transforme seu corpo, eleve sua mente 💪⚡
