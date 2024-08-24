import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDb.js";
import { userRouter } from "./routes/userRoute.js";
import { authRouter } from "./routes/authRoute.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
connectDb();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
