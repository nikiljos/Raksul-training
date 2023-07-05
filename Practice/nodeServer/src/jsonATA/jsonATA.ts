import jsonata from "jsonata";
import express, { Request, Response } from "express";
const router = express.Router();

const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

// const data = {
//   example: [
//       {value: 4},
//       {value: 7},
//       {value: 13}
//   ]
// };

router.post("/", async (req, res) => {
  const expression = jsonata(req.body.query); // $[age > 25]
  const result = await expression.evaluate(data);

  // const expression = jsonata('$sum(example.value)');
  //   const result = await expression.evaluate(data);  // returns 24

  res.json(result);
});

export default router;
