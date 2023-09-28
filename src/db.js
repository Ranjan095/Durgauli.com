/** @format */

import mongoose from "mongoose";
require("dotenv").config();

export let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("====>", error);
  }
};
