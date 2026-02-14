import express from "express";
import { ExerciseController } from "../controllers/ExerciseController.js";

const router = express.Router();

router  
    .get("/:id", ExerciseController.getExerciseById)
    .get("", ExerciseController.getExerciseByMuscleTargetOrName)
    .post("", ExerciseController.createExercise)
    .put("/:id", ExerciseController.updateExercises)
    .delete("/:id", ExerciseController.deleteExercises)

export default router;