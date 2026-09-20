import mongoose from "mongoose";
import config from "./config.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.mongoDB_URI);
    console.log(`mongoDB connected`);
  } catch (error) {
    console.error(`mongoDB connection failed`, error);
    process.exit(1);
  }
}
