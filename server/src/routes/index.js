import express from "express";
import workouts from "./workoutRoutes.js";
import authorization from "./authRoutes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ title: "myFitness" });
  });

  app.use(express.json());

  app.use("/workouts", workouts);
  app.use("/auth", authorization);
};

export default routes;
