import express from "express";
import { WorkoutExercisesController } from "../controllers/WorkoutExerciseController.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: WorkoutExercises
 *   description: Endpoints to manage exercises within a workout
 */

/**
 * @swagger
 * /workoutexercises/{id}:
 *   get:
 *     summary: Get exercises associated with a workout by ID
 *     tags: [WorkoutExercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the workout
 *     responses:
 *       200:
 *         description: List of exercises for the workout
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * /workoutexercises:
 *   post:
 *     summary: Add exercises to a workout
 *     tags: [WorkoutExercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - workoutId
 *               - exerciseId
 *               - sets
 *               - reps
 *             properties:
 *               workoutId:
 *                 type: string
 *                 example: 64a1f8e2b3c4a1234567890b
 *               exerciseId:
 *                 type: string
 *                 example: 64a1f8e2b3c4a1234567890c
 *               sets:
 *                 type: integer
 *                 example: 3
 *               reps:
 *                 type: integer
 *                 example: 12
 *               rest:
 *                 type: integer
 *                 description: Rest time between sets in seconds
 *                 example: 60
 *     responses:
 *       201:
 *         description: Exercise added to workout successfully
 *       400:
 *         description: Validation error
 */

router
    .get("/:id", auth, WorkoutExercisesController.getWorkoutExercisesById)
    .post("", auth, WorkoutExercisesController.createWorkoutExercises)

export default router;