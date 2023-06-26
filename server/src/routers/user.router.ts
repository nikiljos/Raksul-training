import express, { Request, Response } from "express";
const router = express.Router();
import userController from "../controllers/user.controller";

router.get("/detail", userController.getDetail);

export default router;
