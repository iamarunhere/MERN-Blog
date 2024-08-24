import express from "express";
import { test } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.get("/", test);
