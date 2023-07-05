import express, { Request, Response, json } from "express";
const router = express.Router();

import jsonATA from "../jsonATA/jsonATA";

router.use("/jsonATA", jsonATA);

export default router;
