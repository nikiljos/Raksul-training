import mongoose from "mongoose";

async function init() {
  const uri = process.env.DB_URI as string;
  const res = await mongoose.connect(uri);
  if (res) console.log("Connected to DB");
}

export default init;
