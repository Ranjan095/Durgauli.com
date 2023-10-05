/** @format */

import mongoose from "mongoose";

let feedbackSchema = mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  mobile: { type: Number, required: true },
  message: { type: String, required: true },
});

export let FeedbackModel =
  mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);
