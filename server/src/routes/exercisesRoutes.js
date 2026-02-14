import express from "express";
import { ExerciseController } from "../controllers/ExerciseController.js";
import auth from "../middlewares/authMiddleware.js"
import paginate from "../middlewares/paginate.js"

const router = express.Router();

router  
    .get("/:id", ExerciseController.getExerciseById, auth)
    .get("", ExerciseController.getExerciseByMuscleTargetOrName, auth, paginate)
    .post("", ExerciseController.createExercise, auth)
    .put("/:id", ExerciseController.updateExercises, auth)
    .delete("/:id", ExerciseController.deleteExercises, auth)

export default router;