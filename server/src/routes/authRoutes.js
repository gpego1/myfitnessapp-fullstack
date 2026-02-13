import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

router
    .post("/register", AuthController.register)
    .post("/login", AuthController.login)

export default router;
