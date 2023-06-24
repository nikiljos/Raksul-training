import express, { Request, Response } from "express";
const router = express.Router();
import authenticateToken from "../middlewares/authentication.middleware";
import genericController from "../controllers/generic.controller";
import authController from "../controllers/auth.controller";

router.post("/api/auth/google", authenticateToken, authController.login);
// router.get("/ping", genericController.ping);

//demo endpoint for testing db... Should be removed in prod
router.get("/count", genericController.userCount);

export default router;
