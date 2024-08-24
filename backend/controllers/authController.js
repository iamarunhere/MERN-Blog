import { customErrorHandler } from "../middlewares/customErrorHandler.js";
import User from "./../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    !email === "" ||
    !password === ""
  ) {
    next(customErrorHandler(400, "All feilds are required"));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    return res.status(200).json({ message: "SignUp Successfull" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
