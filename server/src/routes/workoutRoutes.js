import express from "express";
import { WorkoutController } from "../controllers/workoutController.js";

const router = express.Router();

router
    .get("/workouts", WorkoutController.getAllWorkouts)
    .post("/workouts", WorkoutController.createWorkout)
export default router;