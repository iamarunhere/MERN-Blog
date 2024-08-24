import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) console.log("Connected to Mongo Db");
  } catch (error) {
    console.log("Error while connecting to Mongo Db");
  }
};
