import express from "express";
import { WorkoutController } from "../controllers/workoutController.js";
import paginate from "../middlewares/paginate.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

router
    .get("/:id", WorkoutController.getWorkoutById, auth, paginate)
    .get("", WorkoutController.getWorkoutByTitle, auth, paginate)
    .post("", WorkoutController.createWorkout, auth)
    .put("/:id", WorkoutController.updateWorkout, auth)
    .delete("/:id", WorkoutController.deleteWorkoutById, auth)
export default router;