import express from "express";
import { WorkoutController } from "../controllers/workoutController.js";
import paginate from "../middlewares/paginate.js";
import auth from "../middlewares/authMiddleware.js"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: Endpoints to manage workouts
 */

/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Get all workouts, optionally filter by title
 *     tags: [Workouts]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter workouts by title
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of workouts
 */

/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Get a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Workout ID
 *     responses:
 *       200:
 *         description: Workout details returned
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Chest & Back Routine
 *               description:
 *                 type: string
 *                 example: A workout focused on chest and back muscles
 *               difficulty:
 *                 type: string
 *                 example: Intermediate
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /workouts/{id}:
 *   put:
 *     summary: Update an existing workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Workout ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               difficulty:
 *                 type: string
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Workout ID
 *     responses:
 *       200:
 *         description: Workout deleted successfully
 *       404:
 *         description: Workout not found
 */

router
    .get("/:id", auth, WorkoutController.getWorkoutById, paginate)
    .get("", auth, WorkoutController.getWorkoutByTitle, paginate)
    .post("", auth, WorkoutController.createWorkout)
    .put("/:id", auth, WorkoutController.updateWorkout)
    .delete("/:id", auth, WorkoutController.deleteWorkoutById)
export default router;