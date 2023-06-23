import express from "express";
const app = express();
import "express-async-errors";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();
app.use(express.json());

import { init } from "./config/db.config";
init() //db connect

import router from "./routers"

app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
