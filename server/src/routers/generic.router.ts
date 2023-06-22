import express, { Request, Response } from "express";
const router = express.Router();
import genericController from "../controllers/generic.controller";

// router.get("/ping", genericController.ping);
router.post("/api/auth/google", genericController.login);

export default router;
