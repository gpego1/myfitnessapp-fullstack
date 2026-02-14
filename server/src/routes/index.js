import express from "express";
import workouts from "./workoutRoutes.js";
import authorization from "./authRoutes.js";
import exercises from "./exercisesRoutes.js"

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ title: "myFitness" });
  });

  app.use(express.json());

  app.use("/auth", authorization);
  app.use("/workouts", workouts);
  app.use("/exercises", exercises);

};

export default routes;
