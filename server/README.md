# 🏋️ FitForce Server --- Backend API

Backend REST API para um aplicativo fitness completo, permitindo
gerenciamento de usuários, metas nutricionais, refeições, treinos e
histórico de atividades físicas.

O projeto foi desenvolvido com foco em **escalabilidade**, **boas
práticas REST** e **arquitetura em camadas (Controller / Service /
Model)**.

------------------------------------------------------------------------

## 🚀 Funcionalidades

### 👤 Usuários

-   Cadastro
-   Atualização de dados corporais
-   Definição de metas diárias (calorias, proteínas, carboidratos e
    gorduras)
-   Controle de roles (ADMIN / USER)

### 🎯 Metas

-   Atualização das metas nutricionais
-   Cálculo automático de progresso diário
-   Retorno de:
    -   Consumido
    -   Restante
    -   Porcentagem atingida

### 🍽️ Refeições

-   Registro de refeições
-   Cálculo automático de macros
-   Consulta por data
-   Integração direta com o progresso diário

### 🏋️ Treinos

-   Cadastro de treinos
-   Busca por título
-   Nível de dificuldade
-   Grupo muscular
-   Dia da semana

### 📊 Histórico de Treinos

Sistema escalável de logs:

Cada registro salva apenas:

-   userId
-   workoutId

Utilizando populate, a API retorna:

-   Usuário apenas uma vez
-   Treinos completos
-   Dados do log (duração, calorias, data)

Formato otimizado:

``` json
{
  "userId": "...",
  "workouts": [
    {
      "workout": {},
      "duration": 45,
      "caloriesBurned": 380,
      "completedAt": "..."
    }
  ]
}
```

------------------------------------------------------------------------

## 🧱 Arquitetura

src/ ├── controllers/ ├── services/ ├── models/ ├── routes/ ├── errors/
└── app.js

Controller → recebe request\
Service → regra de negócio\
Model → MongoDB (Mongoose)

------------------------------------------------------------------------

## 🛠️ Tecnologias

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   JWT
-   REST API
-   ES Modules

------------------------------------------------------------------------

## ▶️ Como rodar o projeto

1.  Clone o repositório

git clone `<repo-url>`{=html}

2.  Instale as dependências

npm install

3.  Crie o arquivo .env

PORT=3000\
MONGO_URI=mongodb://localhost:27017/fitness\
JWT_SECRET=suachavesecreta

4.  Inicie o servidor

npm run dev

Servidor disponível em http://localhost:3000

------------------------------------------------------------------------

## 📌 Principais rotas

Usuários\
POST /users\
PUT /users/:userId

Metas\
PUT /goals/:userId\
GET /goals/daily/:userId

Refeições\
POST /meals\
GET /meals/:userId

Treinos\
POST /workouts\
GET /workouts?title=

Histórico\
POST /workout-log\
GET /workout-log/:userId

------------------------------------------------------------------------

## 🔐 Segurança

-   Validação de ObjectId
-   Tratamento centralizado de erros
-   Separação de permissões por role
-   Sanitização de dados

------------------------------------------------------------------------

## 📈 Futuras melhorias

-   Paginação do histórico
-   Dashboard semanal/mensal
-   Cache com Redis
-   Upload de imagens
-   Sistema de desafios
-   Integração com frontend React
-   Deploy em cloud

------------------------------------------------------------------------

## 👨‍💻 Autor

Gabriel Pego Feitosa

Desenvolvedor Full Stack em formação, focado em construir soluções reais
usando Node.js, MongoDB e React.
