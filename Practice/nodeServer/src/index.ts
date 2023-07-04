import express from "express";
import jsonata from "jsonata";
import cors from "cors";

const app = express();
const port = 1000;

app.use(express.json());
app.use(cors());

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

app.post("/api/data", async (req, res) => {
  const expression = jsonata(req.body.query); // $[age > 25]
  const result = await expression.evaluate(data);

  // const expression = jsonata('$sum(example.value)');
  //   const result = await expression.evaluate(data);  // returns 24

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
