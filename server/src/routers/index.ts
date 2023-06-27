import express, { Request, Response } from "express";
const router = express.Router();

import genericRouter from "./generic.router";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import groupRouter from "./group.router";
import { checkUser } from "../middlewares/authentication.middleware";

router.use("/", genericRouter);
router.use("/auth", authRouter);
router.use("/user", checkUser, userRouter);
router.use("/group", groupRouter);

export default router;
