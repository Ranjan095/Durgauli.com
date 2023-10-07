/** @format */

import { X } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;

  let handleClose = (e) => {
    if (e.target.id === "wraper") setIsOpen(false);
  };

  return (
    <div
      id="wraper"
      className="fixed inset-0 bg-opacity-25 z-20 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[400px] flex flex-col">
        <button onClick={() => setIsOpen(false)} className="place-self-end">
          <X />
        </button>
        <div className=" bg-indigo-200 p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
