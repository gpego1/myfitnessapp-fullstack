import express from "express";
import { WorkoutController } from "../controllers/workoutController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
    .get("/workouts/:id", WorkoutController.getWorkoutById, paginate)
    .get("/workouts", WorkoutController.getWorkoutByTitle, paginate)
    .post("/workouts", WorkoutController.createWorkout)
    .put("/workouts/:id", WorkoutController.updateWorkout)
    .delete("/workouts/:id", WorkoutController.deleteWorkoutById)
export default router;