import express from "express";
import { MealsController } from "../controllers/MealsController.js";
import auth from "../middlewares/authMiddleware.js"
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
    .get("/userId", MealsController.findMealByUserId, auth, paginate)
    .post("", MealsController.createMeal)

export default router;