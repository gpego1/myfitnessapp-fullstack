import express from "express";
import { WorkoutLogController } from "../controllers/WorkoutLogController.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

router
    .get("/userId/workoutId", WorkoutLogController.getWorkoutLogByUserIdAndWorkoutId, auth)
    .get("/history/:userId", WorkoutLogController.history)
    .post("", WorkoutLogController.createWorkoutLog, auth)

export default router;