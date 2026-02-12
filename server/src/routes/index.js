import express from "express";
import workouts from "./workoutRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "myFitness"})
  })

  app.use(
    express.json(),
    workouts
  )
}

export default routes