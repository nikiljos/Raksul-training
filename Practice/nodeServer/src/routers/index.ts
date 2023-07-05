import express, { Request, Response, json } from "express";
const router = express.Router();

import jsonATA from "../jsonATA/jsonATA";
import advMongo from "../MongoDB_adv";

router.use("/jsonATA", jsonATA);
router.use("/advmongo", advMongo);

export default router;
