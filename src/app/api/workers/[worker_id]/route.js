/** @format */

import { WorkerModel } from "@/model/workerModel";
import { NextResponse } from "next/server";

// Api for update workers
export async function PATCH(request, { params }) {
  try {
    let { worker_id } = params;
    let updatedData = await request.json();
    let worker = await WorkerModel.findByIdAndUpdate(worker_id, updatedData);
    return NextResponse.json({
      msg: "worker has been updated ",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}

// Api for delete workers
export async function DELETE(request, { params }) {
  try {
    let { worker_id } = params;
    let worker = await WorkerModel.findByIdAndDelete(worker_id);
    return NextResponse.json({
      msg: "worker has been Deleted ",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
