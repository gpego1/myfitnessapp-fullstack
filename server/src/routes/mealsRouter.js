import express from "express";
import { MealsController } from "../controllers/MealsController.js";
import paginate from "../middlewares/paginate.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Meals
 *   description: Meal tracking endpoints
 */

/**
 * @swagger
 * /meals/summary/{userId}:
 *   get:
 *     summary: Get daily meal summary for a user
 *     tags: [Meals]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
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
 *         description: Daily meal summary returned successfully
 *       404:
 *         description: User or meals not found
 */

/**
 * @swagger
 * /meals:
 *   post:
 *     summary: Create a new meal
 *     tags: [Meals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - name
 *               - calories
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64a1f8e2b3c4a1234567890a
 *               name:
 *                 type: string
 *                 example: Breakfast
 *               description:
 *                 type: string
 *                 example: Oatmeal with banana
 *               calories:
 *                 type: number
 *                 example: 350
 *               protein:
 *                 type: number
 *                 example: 20
 *               carbs:
 *                 type: number
 *                 example: 45
 *               fat:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Meal created successfully
 *       400:
 *         description: Validation error
 */

router
    .get("/summary/:userId", MealsController.getDailySummary, auth, paginate)
    .post("", MealsController.createMeal, auth)

export default router;