import express, { Request, Response } from "express";
import User from "../model/user.model";
const router = express.Router();

router.get("/aggregate", async (req, res) => {
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

router.get("/queries", async (req, res) => {
  try {
    // const data = await User.find();

    // const data = await User.find({ age: 25 });

    // const data = await User.find({
    //   $and: [{ age: { $gte: 18 } }, { country: "USA" }],
    // });

    // const data = await User.find({
    //   $and: [{ age: { $eq: 25 } }, { country: "USA" }],
    // });

    // const data = await User.find({ age: { $gte: 18 } });

    // const data = await User.find({ name: /^J/ });

    // const data = await User.find({}, { name: 1, age: 1 });

    // const data = await User.find().sort({ age: 1 });

    const data = await User.find().sort({ age: 1 }).limit(10);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
