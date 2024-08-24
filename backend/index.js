import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDb.js";
import { userRouter } from "./routes/userRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
connectDb();

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
