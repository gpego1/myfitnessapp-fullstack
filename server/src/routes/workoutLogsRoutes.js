import express from "express";
import { WorkoutLogController } from "../controllers/WorkoutLogController.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: WorkoutLogs
 *   description: Endpoints to manage workout logs for users
 */

/**
 * @swagger
 * /workoutlogs/userId/workoutId:
 *   get:
 *     summary: Get workout log for a user by workout ID
 *     tags: [WorkoutLogs]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: query
 *         name: workoutId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the workout
 *     responses:
 *       200:
 *         description: Workout log found
 *       404:
 *         description: Workout log not found
 */

/**
 * @swagger
 * /workoutlogs/history/{userId}:
 *   get:
 *     summary: Get workout history for a user
 *     tags: [WorkoutLogs]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Workout history returned successfully
 *       404:
 *         description: No workout history found
 */

/**
 * @swagger
 * /workoutlogs:
 *   post:
 *     summary: Create a new workout log
 *     tags: [WorkoutLogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - workoutId
 *               - date
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64a1f8e2b3c4a1234567890d
 *               workoutId:
 *                 type: string
 *                 example: 64a1f8e2b3c4a1234567890e
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-02-15
 *               notes:
 *                 type: string
 *                 example: Felt strong today
 *               exercises:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     exerciseId:
 *                       type: string
 *                       example: 64a1f8e2b3c4a1234567890f
 *                     sets:
 *                       type: integer
 *                       example: 3
 *                     reps:
 *                       type: integer
 *                       example: 12
 *                     weight:
 *                       type: number
 *                       example: 50
 *     responses:
 *       201:
 *         description: Workout log created successfully
 *       400:
 *         description: Validation error
 */


router
    .get("/user/workoutExercises", auth, WorkoutLogController.getWorkoutLogByUserIdAndWorkoutExercisesId)
    .get("/history", auth, WorkoutLogController.history)
    .post("", auth, WorkoutLogController.createWorkoutLog)

export default router;