import express, { Request, Response } from "express";
const router = express.Router();
import transactionController from "../controllers/transaction.controller";

router.post("/add", transactionController.addTransaction);

export default router;
