import express from "express";
import { UserGoalController } from "../controllers/UserGoalController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Goals
 *   description: User goal management endpoints
 */

/**
 * @swagger
 * /goals/{userId}:
 *   put:
 *     summary: Update user goals
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               calorieGoal:
 *                 type: number
 *                 example: 2000
 *               proteinGoal:
 *                 type: number
 *                 example: 150
 *               carbGoal:
 *                 type: number
 *                 example: 250
 *               fatGoal:
 *                 type: number
 *                 example: 70
 *     responses:
 *       200:
 *         description: User goals updated successfully
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /goals/progress/{userId}:
 *   get:
 *     summary: Get user's goal progress
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Progress data returned successfully
 *       404:
 *         description: User or progress data not found
 */

router
    .put("/:userId", auth, UserGoalController.update)
    .get("/progress/:userId", auth, UserGoalController.progress);

export default router;
