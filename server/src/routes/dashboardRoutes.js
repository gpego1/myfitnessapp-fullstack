import express from "express";
import { DashboardController } from "../controllers/DashboardController.js";
import auth from "../middlewares/authMiddleware.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router.get("",auth, DashboardController.getDashboard, paginate);

export default router;