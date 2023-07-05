import express from "express";
import cors from "cors";
import router from "./routers";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 1000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
