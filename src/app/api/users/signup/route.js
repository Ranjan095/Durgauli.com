/** @format */

import { connectDB } from "@/db";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";

connectDB();

{/** API for create new user **/}
export async function POST(request) {
  try {
    let data = await request.json();
    let newUser = UserModel(data);
    await newUser.save();
    return NextResponse.json({ msg: "New user has been created" });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}