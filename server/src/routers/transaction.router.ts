import express, { Request, Response } from "express";
const router = express.Router();
import transactionController from "../controllers/transaction.controller";

router.post("/add", transactionController.addTransaction);
router.get("/get", transactionController.getTransaction);

export default router;
