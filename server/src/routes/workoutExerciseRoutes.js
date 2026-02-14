import express from "express";
import { WorkoutExercisesController } from "../controllers/WorkoutExerciseController.js";

const router = express.Router();

router
    .get("/:id", WorkoutExercisesController.getWorkoutExercisesById)
    .post("", WorkoutExercisesController.createWorkoutExercises)

export default router;