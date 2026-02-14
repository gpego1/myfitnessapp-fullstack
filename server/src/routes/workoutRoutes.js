import express from "express";
import { WorkoutController } from "../controllers/workoutController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
    .get("/:id", WorkoutController.getWorkoutById, paginate)
    .get("", WorkoutController.getWorkoutByTitle, paginate)
    .post("", WorkoutController.createWorkout)
    .put("/:id", WorkoutController.updateWorkout)
    .delete("/:id", WorkoutController.deleteWorkoutById)
export default router;