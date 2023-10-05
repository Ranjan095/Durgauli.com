/** @format */

import { connectDB } from "@/db";
import { FeedbackModel } from "@/model/feedback";
import { NextResponse } from "next/server";

connectDB();

{
  /** API for create new feedback **/
}
export async function POST(request) {
  try {
    let data = await request.json();
    let newFeedback = FeedbackModel(data);
    await newFeedback.save();
    return NextResponse.json({ msg: "New feedback has been created" });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
