/** @format */

import Modal from "@/components/Modal/Modal";
import axios from "axios";
import { Loader2, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteWorker = ({ id, showDeleteModal, setshowDeleteModal }) => {
  let [isLoading, setIsLoading] = useState(false);

  let handleDelete = () => {
    // console.log(id);

    setIsLoading(true);
    axios
      .delete(`/api/workers/${id}`)
      .then((res) => {
        setIsLoading(false);
        // console.log(res.data);

        setshowDeleteModal(false);
        alert("worker has been deleted !");
        // toast.success("worker has been deleted !", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert("Oops somthing went wrong !");
        // toast.error("Oops somthing went wrong !", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      });
  };

  return (
    <div>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
      <Modal isOpen={showDeleteModal} setIsOpen={setshowDeleteModal}>
        <div className="py-3 md:py-6 bg-green-400 rounded-lg">
          <div className="text-center">
            <p className="text-base font-semibold text-black flex justify-center">
              {" "}
              <Trash2 size={50} />
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Delete
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Are you sure want to delete?
            </p>
            {!isLoading ? (
              <div className="mt-4 flex items-center justify-center gap-x-3">
                <button
                  onClick={() => setshowDeleteModal(false)}
                  type="button"
                  className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  NO
                </button>
                <button
                  onClick={handleDelete}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  YES
                </button>
              </div>
            ) : (
              <button
                disabled
                type="submit"
                className={`inline-flex bg-black items-center  justify-center rounded-md  px-3.5 py-2 font-semibold leading-7 text-white`}
              >
                <Loader2 className="animate-spin mr-3" />
                Processing...
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteWorker;
