import express, { Request, Response } from "express";
const router = express.Router();

import genericRouter from "./generic.router";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import groupRouter from "./group.router";
import transactionRounter from "./transaction.router";
import { checkGroupMember, checkUser } from "../middlewares/authentication.middleware";

router.use("/", genericRouter);
router.use("/auth", authRouter);
router.use("/user", checkUser, userRouter);
router.use("/group", checkUser, groupRouter);
router.use("/transaction/:group_id", checkUser, checkGroupMember, transactionRounter);

export default router;
