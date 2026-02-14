import express from "express";
import workouts from "./workoutRoutes.js";
import authorization from "./authRoutes.js";
import exercises from "./exercisesRoutes.js"
import workoutExercises from "./workoutExerciseRoutes.js";
import workoutLogs from "./workoutLogsRoutes.js"

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ title: "myFitness" });
  });

  app.use(express.json());

  app.use("/auth", authorization);
  app.use("/workouts", workouts);
  app.use("/exercises", exercises);
  app.use("/workoutexercises", workoutExercises);
  app.use("/workoutlogs", workoutLogs);

};

export default routes;
