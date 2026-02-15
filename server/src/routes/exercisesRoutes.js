import express from "express";
import { ExerciseController } from "../controllers/ExerciseController.js";
import auth from "../middlewares/authMiddleware.js"
import paginate from "../middlewares/paginate.js"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Exercises
 *   description: Exercise management endpoints
 */

/**
 * @swagger
 * /exercises:
 *   get:
 *     summary: Get all exercises (filter by muscleTarget or name)
 *     tags: [Exercises]
 *     parameters:
 *       - in: query
 *         name: muscleTarget
 *         schema:
 *           type: string
 *         description: Filter by targeted muscle
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by exercise name
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (pagination)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of exercises
 */

/**
 * @swagger
 * /exercises/{id}:
 *   get:
 *     summary: Get exercise by ID
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Exercise ID
 *     responses:
 *       200:
 *         description: Exercise data
 *       404:
 *         description: Exercise not found
 */

/**
 * @swagger
 * /exercises:
 *   post:
 *     summary: Create a new exercise
 *     tags: [Exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - equipment
 *             properties:
 *               name:
 *                 type: string
 *                 example: Push-up
 *               description:
 *                 type: string
 *                 example: A bodyweight exercise for chest and triceps
 *               muscleTarget:
 *                 type: string
 *                 example: Chest
 *               equipment:
 *                 type: string
 *                 example: Bodyweight
 *               videoUrl:
 *                 type: string
 *                 example: https://youtu.be/example
 *     responses:
 *       201:
 *         description: Exercise created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /exercises/{id}:
 *   put:
 *     summary: Update an existing exercise
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Exercise ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               muscleTarget:
 *                 type: string
 *               equipment:
 *                 type: string
 *               videoUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Exercise updated successfully
 *       404:
 *         description: Exercise not found
 */

/**
 * @swagger
 * /exercises/{id}:
 *   delete:
 *     summary: Delete an exercise
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Exercise ID
 *     responses:
 *       200:
 *         description: Exercise deleted successfully
 *       404:
 *         description: Exercise not found
 */

router  
    .get("/:id", ExerciseController.getExerciseById, auth)
    .get("", ExerciseController.getExerciseByMuscleTargetOrName, auth, paginate)
    .post("", ExerciseController.createExercise, auth)
    .put("/:id", ExerciseController.updateExercises, auth)
    .delete("/:id", ExerciseController.deleteExercises, auth)

export default router;