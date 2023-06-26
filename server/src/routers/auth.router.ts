import express, { Request, Response } from "express";
const router = express.Router();
import authController from "../controllers/auth.controller";
import {checkGAuth} from "../middlewares/authentication.middleware";

router.post("/google", checkGAuth, authController.login);

export default router