import express from "express";
import { WorkoutExercisesController } from "../controllers/WorkoutExerciseController.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

router
    .get("/:id", WorkoutExercisesController.getWorkoutExercisesById, auth)
    .post("", WorkoutExercisesController.createWorkoutExercises, auth)

export default router;