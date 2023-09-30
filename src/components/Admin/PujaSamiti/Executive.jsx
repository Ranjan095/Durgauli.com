/** @format */

import Modal from "@/components/Modal/Modal";
import { ArrowLeft, Pencil, Phone, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteCard from "../DeleteCard/DeleteCard";
import EditCard from "../EditCard/EditCard";

const Executive = () => {
  let [deleteId, setDeleteId] = useState(null);
  let [EditId, setEditId] = useState(null);
  let [DeleteModalOpen, setDeleteModalOpen] = useState(false);
  let [EditModalOpen, setEditModalOpen] = useState(false);
  let { workers, isLoading, isError } = useSelector(
    (store) => store.workerReducer
  );

  let handleDelete = (id) => {
    setDeleteId(id);
    setDeleteModalOpen(true);
  };
  let handleEdit = (id) => {
    setEditId(id);
    setEditModalOpen(true);
  };

  // console.log(deleteId)
  return (
    <div className="">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl lg:leading-tight">
          कार्यकारणीक सूची
        </h2>
        {/* <p className="mx-auto max-w-2xl text-gray-600 md:text-xl">
          Welcome to every one
        </p> */}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {workers
          .filter((ele) => ele.category === "कार्यकारणीक")
          .map((ele, i) => (
            <div
              key={i}
              className="flex justify-center text-center items-center"
            >
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
                  <h6 className="mt-1 font-semibold text-gray-500">
                    {ele.post}
                  </h6>
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
                <div>
                  {/*** Delete Card Modal ***/}
                  <div>
                    <Modal
                      isOpen={DeleteModalOpen}
                      setIsOpen={setDeleteModalOpen}
                    >
                      <DeleteCard
                        setModalOpen={setDeleteModalOpen}
                        id={deleteId}
                      />
                    </Modal>
                  </div>
                  {/*** Edit Card Modal ***/}
                  <div>
                    <Modal isOpen={EditModalOpen} setIsOpen={setEditModalOpen}>
                      <EditCard setModalOpen={setEditModalOpen} id={EditId} />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Executive;
