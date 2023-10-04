/** @format */

import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export let UserModel =
  mongoose.models.users || mongoose.model("users", userSchema);
