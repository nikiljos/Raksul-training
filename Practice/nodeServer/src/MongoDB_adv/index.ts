import express, { Request, Response } from "express";
import User from "../model/user.model";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pipeline: any[] = [
      { $match: { gender: "male" } },
      { $match: { age: { $gt: 30 } } },
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ];

    const result = await User.aggregate(pipeline);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
