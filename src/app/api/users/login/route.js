/** @format */

import { connectDB } from "@/db";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
require("dotenv").config();

connectDB();

// API for Login user
export async function POST(request) {
  try {
    let { email, password } = await request.json();
    let user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "this email is not registered",
        },
        { status: 400 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json({
        error: "Password is incorrect",
      });
    }

    var token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    let response = NextResponse.json({
      msg: "login successful",
      success: true,
    });

    // response.cookies.set(
    //   "token",
    //   token,
    //   { httpOnly: true, expiresIn: 86400, sameSite: "none", secure: true, domain: ".durgauli.com" }
    // );
    response.cookies.set("token", token, {
      httpOnly: true,
      expiresIn: 86400,
      sameSite: "none", // Add this line for cross-site context
      secure: true, // Add this line for secure HTTPS connections
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
