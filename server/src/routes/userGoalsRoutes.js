import express from "express";
import { UserGoalController } from "../controllers/UserGoalController.js";

const router = express.Router();

router
    .put("/:userId", UserGoalController.update)
    .get("/progress/:userId", UserGoalController.progress);

export default router;
