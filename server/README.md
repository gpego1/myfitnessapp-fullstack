# 🏋️ FitForce Server --- Backend API

REST Backend API for a complete fitness application, allowing management
of users, nutrition goals, meals, workouts, and activity history.

The project was built with a focus on **scalability**, **REST best
practices**, and **layered architecture (Controller / Service /
Model)**.

------------------------------------------------------------------------

## 🚀 Features

### 👤 Users

-   Registration
-   Body data updates
-   Daily goals configuration (calories, protein, carbs, fat)
-   Role management (ADMIN / USER)

### 🎯 Goals

-   Nutrition goal updates
-   Automatic daily progress calculation
-   Returns:
    -   Consumed
    -   Remaining
    -   Completion percentage

### 🍽️ Meals

-   Meal registration
-   Automatic macro calculation
-   Date-based queries
-   Integrated with daily progress

### 🏋️ Workouts

-   Workout creation
-   Search by title
-   Difficulty level
-   Muscle group
-   Day of week

### 📊 Workout History

Scalable logging system:

Each record stores only:

-   userId
-   workoutId

Using populate, the API returns:

-   User only once
-   Full workout objects
-   Log data (duration, calories, date)

Optimized response:

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

## 🧱 Architecture

src/ ├── controllers/ ├── services/ ├── models/ ├── routes/ ├── errors/
└── app.js

Controller → handles requests\
Service → business logic\
Model → MongoDB (Mongoose)

------------------------------------------------------------------------

## 🛠️ Technologies

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   JWT
-   REST API
-   ES Modules

------------------------------------------------------------------------

## ▶️ Running the project

### 1. Clone repository

git clone `<repo-url>`{=html}

------------------------------------------------------------------------

### 2. Install dependencies

npm install

------------------------------------------------------------------------

### 3. Create `.env` file

PORT=8080\
MONGO_URI=mongodb://localhost:27017/fitness\
JWT_SECRET=yoursecretkey

------------------------------------------------------------------------

### 4. Start server

npm run dev

Server available at:

http://localhost:8080

------------------------------------------------------------------------

## 📌 Main Routes

Users

POST /users\
PUT /users/:userId

Goals

PUT /goals/:userId\
GET /goals/daily/:userId

Meals

POST /meals\
GET /meals/:userId

Workouts

POST /workouts\
GET /workouts?title=

Workout Logs

POST /workout-log\
GET /workout-log/:userId

------------------------------------------------------------------------

## 🔐 Security

-   ObjectId validation
-   Centralized error handling
-   Role-based access
-   Data sanitization

------------------------------------------------------------------------

## 📈 Future Improvements

-   History pagination
-   Weekly/monthly dashboard
-   Redis caching
-   Image upload
-   Challenge system
-   React frontend integration
-   Cloud deployment

------------------------------------------------------------------------

## 👨‍💻 Author

Gabriel Pego Feitosa

Full Stack Developer in training, focused on building real-world
solutions using Node.js, MongoDB, and React.
