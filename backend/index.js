import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDb.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDb();

app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
