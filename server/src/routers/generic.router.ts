import express, { Request, Response } from "express";
const router = express.Router();
import genericController from "../controllers/generic.controller";

router.post("/api/auth/google", genericController.login);
router.get("/ping",genericController.ping)
//demo endpoint for testing db... Should be removed in prod
router.get("/count",genericController.userCount)

export default router;
