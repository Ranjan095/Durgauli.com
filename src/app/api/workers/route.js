/** @format */

import { connectDB } from "@/db";
import { WorkerModel } from "@/model/workerModel";
import { NextResponse } from "next/server";

connectDB();
// API for get all workers
export async function GET(request) {
  try {
    let workers = await WorkerModel.find();
    return NextResponse.json(workers);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}

// API for add new worker
export async function POST(request) {
  try {
    let data = await request.json();
    let newWorker = WorkerModel(data);
    await newWorker.save();
    return NextResponse.json({ msg: "New worker has been added" });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}


