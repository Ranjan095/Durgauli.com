/** @format */
"use client";
import AddWorkerModal from "@/components/Admin/AddWorkerModal/AddWorkerModal";
import DeleteWorker from "@/components/Admin/DeleteWorker/DeleteWorker";
import EditWorker from "@/components/Admin/EditWorker/EditWorker";
import { RefreshContext } from "@/context/refreshContext/refreshContex";

import {
  GET_WORKER_ERROR,
  GET_WORKER_REQUEST,
  GET_WORKER_SUCCESS,
} from "@/redux/workerReducer/workerType";
import axios from "axios";
import { Loader, Pencil, Phone, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashbord = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [showEditModal, setShowEditModal] = useState(false);
  let [showDeleteModal, setshowDeleteModal] = useState(false);

  let [deleteId, setDeleteId] = useState("");
  let [editId, setEditId] = useState("");

  let { workers, isLoading, isError } = useSelector(
    (store) => store.workerReducer
  );

  let dispatch = useDispatch();

  let { refresh } = useContext(RefreshContext);

  let getData = () => {
    dispatch({ type: GET_WORKER_REQUEST });
    axios
      .get("/api/workers")
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: GET_WORKER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_WORKER_ERROR });
      });
  };

  let handleEdit = (id) => {
    setEditId(id);
    setShowEditModal(true);
    // console.log(id);
  };
  let handleDelete = (id) => {
    setDeleteId(id);
    setshowDeleteModal(true);
    // console.log(id);
  };

  useEffect(() => {
    getData();
  }, [refresh]);

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

      {/*** All workers  ***************************/}
      <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {workers?.map((ele, i) => (
          <div key={i} className="flex justify-center text-center items-center">
            {" "}
            <div className="w-[150px] md:w-[300px] rounded-md border">
              <div className="flex justify-center">
                {" "}
                <img
                  src={
                    ele.image
                      ? ele.image
                      : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  }
                  alt={ele.name}
                  className={` h-[150px] md:h-[300px] w-full rounded-md object-cover `}
                />
              </div>
              <div className="">
                <h1 className="text-lg font-semibold mt-2">{ele.name}</h1>
                <h6 className="mt-1 font-normal text-gray-500">
                  {ele.category}
                </h6>
                <h6 className="mt-1 font-semibold text-gray-500">{ele.post}</h6>
                {ele.mobile && (
                  <div
                    className={`inline-flex justify-center items-center text-gray-500 text-[15px]`}
                  >
                    <Phone className="mr-2" size={16} /> {ele.mobile}
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center justify-center gap-x-3">
                <button
                  onClick={() => handleEdit(ele._id)}
                  type="button"
                  className="rounded-md bg-green-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Pencil />
                </button>
                <button
                  onClick={() => handleDelete(ele._id)}
                  type="button"
                  className="rounded-md  px-2 py-1 text-sm font-semibold text-white bg-red-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black"
                >
                  <Trash2 />
                </button>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      {/******************************/}
      <>
        {/*** for delete and edit using modal ***/}
        {showDeleteModal && (
          <DeleteWorker
            id={deleteId}
            showDeleteModal={showDeleteModal}
            setshowDeleteModal={setshowDeleteModal}
          />
        )}
        {showEditModal && (
          <EditWorker
            id={editId}
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
          />
        )}
      </>
    </div>
  );
};

export default Dashbord;
