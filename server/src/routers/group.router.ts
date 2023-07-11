import express, { Request, Response } from "express";
const router = express.Router();
import groupController from "../controllers/group.controller";

router.post("/create", groupController.createGroup);
router.post("/join", groupController.joinGroup);
router.get("/history", groupController.getHistory);
router.get("/members/:id", groupController.getMemberList);
router.get("/get-code/:id", groupController.getGroupCode);

export default router;
