/** @format */
"use client";
import AddWorkerModal from "@/components/AddWorkerModal/AddWorkerModal";
import Executive from "@/components/Admin/PujaSamiti/Executive";
import {
  GET_WORKER_ERROR,
  GET_WORKER_REQUEST,
  GET_WORKER_SUCCESS,
} from "@/redux/workerReducer/workerType";
import axios from "axios";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashbord = () => {
  let [isOpen, setIsOpen] = useState(false);

  let { workers, isLoading, isError } = useSelector(
    (store) => store.workerReducer
  );

  let dispatch = useDispatch();

  let getData = () => {
    dispatch({ type: GET_WORKER_REQUEST });
    axios
      .get("/api/workers")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_WORKER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_WORKER_ERROR });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center text-center h-screen">
      <Loader className="motion-safe:animate-spin text-gray-500 " size={100} />
    </div>
  ) : (
    <div>
      <div className="flex flex-wrap justify-end p-3 sticky top-12">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-lg bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add new worker
        </button>
      </div>
      <AddWorkerModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <Executive />
      </div>
    </div>
  );
};

export default Dashbord;
